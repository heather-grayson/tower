//= require tower

$(function () {

	var t = new Tower([' ', ' ', ' ', ' ', ' ',
					   ' ', ' ', ' ', ' ', ' ',
					   ' ', ' ', ' ', ' ', ' ',
					   ' ', ' ', ' ', ' ', ' ',
					   ' ', ' ', ' ', ' ', ' '], 5);

	console.log (t.isStable());

});
