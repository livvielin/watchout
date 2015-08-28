// start slingin' some d3 here.

var board = d3.select('body').append('svg')
  .attr('width', 500)
  .attr('height', 500)
  .style('border', '5px ridge red');


var numEnemies = 12;

for (var i = 0; i < numEnemies; i ++) {
  board.append('circle').attr('cx', Math.random() * 500)
  .attr('cy', Math.random() * 500).attr('r', 20).attr('class', 'enemy');  
}