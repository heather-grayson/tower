//= require tower

$(function () {

	var t = new Tower([' ', ' ', ' ',
					   ' ', '|', '|',
					   ' ', '/', '\\'], 3);

	console.log (t.isStable());

});
