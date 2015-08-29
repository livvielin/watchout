// start slingin' some d3 here.

var width = 500;
var height = 500;

var board = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('border', '5px ridge red');


var numEnemies = 12;
var enemyData = [];

//making data set
for (var i = 0; i < numEnemies; i ++) {
  enemyData.push({
    'xlink:href': 'shuriken.jpeg',
    'height': '50px',
    'width':'50px',
    'x': Math.random() * width,
    'y': Math.random() * height
  });  
} 

//taking data and binding to image elements
var enemies = board.selectAll('image')
  .data(enemyData)
  .enter()
  .append('image')
  .attr('xlink:href', 'shuriken.jpeg')
  .attr('class', 'enemy');

//using data to assign attributes to elements
var enemyAttributes = enemies
  .attr('x', function(d) { return d.x; })
  .attr('y', function(d) { return d.y; })
  .attr('width', function(d) { return d.width; })
  .attr('height', function(d) { return d.height; });


var ninja = board.append('image')
  .attr('xlink:href', 'ninja.jpeg')
  .attr('height', '75px')
  .attr('width','75px')
  .attr('x', width/2)
  .attr('y', height/2)
  .attr('class', 'player')
  .call(d3.behavior.drag().on('drag', move));

function move() {
  var initX = this.getAttribute('x');
  var initY = this.getAttribute('y');
  d3.select(this).attr('x', + initX + d3.event.dx)
  .attr('y', + initY + d3.event.dy);
}


function reposition(enemy) {
  enemy.transition()
  .duration(1000)
  .attr('x', function(d) { return Math.random()*width; })
  .attr('y', function(d) { return Math.random()*height; })
  .attr('width', function(d) { return d.width; })
  .attr('height', function(d) { return d.height; });
}

setInterval( function() {reposition(enemies);}, 1000);

var checkCollision = function(enemy) {
  var radiusSum = parseFloat(enemy.attr('height'))/2 + parseFloat(ninja.attr('height'))/2;
  var xDiff = parseFloat(enemy.attr('x'))/2 - parseFloat(ninja.attr('x'))/2;
  var yDiff = parseFloat(enemy.attr('y'))/2 - parseFloat(ninja.attr('y'))/2;
  var distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

  return distance < radiusSum;

};

var numCollisions = 0;

setInterval( function() { 
  enemies.each(function(d){
    if (checkCollision(d3.select(this))) {
      numCollisions++;
      d3.select('.numCollisions').text(numCollisions);
    }
  });
}, 500);

var score = 0;
var highScore = 0;

setInterval( function() {
  if(numCollisions >= 20) {
    numCollisions = 0;
    d3.select('.numCollisions').text(numCollisions);
    if(score > highScore) {
      highScore = score;
      d3.select('.highScore').text(highScore);
    }
    score = 0;
  }
  score++;
  d3.select('.score').text(score);
}, 100);







