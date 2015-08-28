// start slingin' some d3 here.

var board = d3.select('body').append('svg')
  .attr('width', 500)
  .attr('height', 500)
  .style('border', '5px ridge red');


var numEnemies = 12;

for (var i = 0; i < numEnemies; i ++) {
  board.append('image')
  .attr('xlink:href', 'shuriken.jpeg')
  .attr('height', '50px')
  .attr('width','50px')
  .attr('x', Math.random() * 500)
  .attr('y', Math.random() * 500)
  .attr('class', 'enemy');  
}
// var player = board.append('circle')
//   .attr('r', 75)
//   .attr('height', '75px')
//   .attr('width','75px')
//   .attr('cx', 250)
//   .attr('cy', 250)
//   .attr('class', 'player')
//   .call(d3.behavior.drag().on('drag', move));

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













