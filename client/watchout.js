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
  .attr('r', 20)
  .attr('class', 'enemy');  
}