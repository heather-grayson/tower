//= require tower

$(function () {
	var wrapNum = 1,
		arraySize = 1,
		towerArray = [],
		t;

	// $('#columns').change(function(){
	// 	createArray(arraySize);
	// 	// console.log('columns = ' + $('#columns').val() + '');
	// 	// console.log('array length = ' + arraySize + '');
	// 	// console.log('wrap = ' + wrapNum + '');	
	// });

	// $('#rows').change(function(){
	// 	arraySize = $('#rows').val() * wrapNum;
	// 	createArray(arraySize);
	// 	// console.log('rows = ' + $('#rows').val() + '');
	// 	// console.log('array length = ' + arraySize + '');
	// });

	// function createArray(arraylength){
		
	// }

	$('#arraySubmit').click(function(){
		towerArray = [];
		wrapNum = $('#columns').val();
		arraySize = $('#rows').val() * wrapNum;

		$('.towerGrid').empty();

		console.log('columns = ' + $('#columns').val() + '');
		console.log('array length = ' + arraySize + '');
		console.log('wrap = ' + wrapNum + '');

		console.log(wrapNum);
		console.log(arraySize);

		for(var i = 0; i < arraySize; i++){
			towerArray.push(" ");
			$('.towerGrid').append("<li> </li>");
		}

		console.log(wrapNum * 50);

		console.log(towerArray);

		$('#gridWrapper').width( (wrapNum * 52) + 'px')
		t = new Tower( towerArray, wrapNum);

		console.log(t);
		console.log (t.isStable());

		//buildGrid();

		// if(!t.isStable()){
		// 	alert('Your tower is NOT stable. Please try again.');
		// }
	});

	// function buildGrid(){
	// 	var buildIndex = 0;
	// 	for(var i = 0; i < t.length; i++){

	// 	}
	// }

});
