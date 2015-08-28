// start slingin' some d3 here.

var board = d3.select('body').append('svg')
  .attr('width', 500)
  .attr('height', 500)
  .style('border', '5px ridge red');


var numEnemies = 2;
var enemyData = [];

//making data set
for (var i = 0; i < numEnemies; i ++) {
  enemyData.push({
    'xlink:href': 'shuriken.jpeg',
    'height': '50px',
    'width':'50px',
    'x': Math.random() * 500,
    'y': Math.random() * 500
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
  .attr('x', 250)
  .attr('y', 250)
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
  .attr('x', function(d) { return Math.random()*500; })
  .attr('y', function(d) { return Math.random()*500; })
  .attr('width', function(d) { return d.width; })
  .attr('height', function(d) { return d.height; });
}

setInterval( function() {reposition(enemies);}, 1000);

var checkCollision = function(enemy, ninja) {
  var radiusSum = parseFloat(enemy.attr('height'))/2 + parseFloat(ninja.attr('height'))/2;
  var xDiff = parseFloat(enemy.attr('x'))/2 - parseFloat(ninja.attr('x'))/2;
  var yDiff = parseFloat(enemy.attr('y'))/2 - parseFloat(ninja.attr('y'))/2;
  var distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

  return distance < radiusSum;

};

setInterval( function() { if (checkCollision(enemies, ninja)){
  console.log('hi');
}}, 100);







