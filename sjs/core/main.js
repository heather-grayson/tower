//= require tower

var wrapNum = 1,
	arraySize = 1,
	towerArray = [],
	newItem,
	currIndex,
	t;

$(function () {

	$('.box').hide();


	$('#arraySubmit').click(function(){
		towerArray = [];
		wrapNum = parseInt($('#columns').val(), 10);
		arraySize = parseInt($('#rows').val() * wrapNum, 10);

		$('.box').hide();
		$('.towerGrid').empty();

		// console.log('columns = ' + $('#columns').val() + '');
		// console.log('array length = ' + arraySize + '');
		// console.log('wrap = ' + wrapNum + '');

		// console.log(wrapNum);
		// console.log(arraySize);

		for(var i = 0; i < arraySize; i++){
			towerArray.push(" ");
			$('.towerGrid').append("<li> </li>");
		}

		$('#gridWrapper').width( (wrapNum * 52) + 'px');
		t = new Tower( towerArray, wrapNum);
		
		

		// console.log(wrapNum * 50);

		// console.log(towerArray);

		

		console.log(t);
		console.log (t.isStable());

		// stabilityCheck();
		
		// function stabilityCheck(index, item){
		// 	if(!t.isStable()){
		// 		var blankItem = " ";
		// 		alert('Your tower is NOT stable. Please try again.');
		// 		buildingTower(currIndex, blankItem);
		// 	}else{
		// 		console.log('it is stable')
		// 	}
		// }

		// $('ul.towerGrid li').click(function(e){
		// 	currIndex = $(this).index(),
		// 	x = e.clientX,
		// 	y = e.clientY;
		// 	console.log(currIndex);
		// 	// console.log(x);
		// 	// console.log(y);

		// 	$('.box').css('left', (x - 70) + 'px');
		// 	$('.box').css('top', y + 'px');
		// 	$('.box').show();

		// });



		// $('ul.box li').click(function(e){
		// 	newItem = $(this).text(),
		// 	x = e.clientX,
		// 	y = e.clientY;
		// 	console.log(newItem);
		// 	// console.log(x);
		// 	// console.log(y);

		// 	$('.box').hide();

		// 	buildingTower(currIndex, newItem);
		// });



		// $('ul.box li').click(function(e){
		// 	newItem = $(this).text(),
		// 	x = e.clientX,
		// 	y = e.clientY;
		// 	console.log(newItem);
		// 	// console.log(x);
		// 	// console.log(y);

		// 	$('.box').hide();

		// 	buildingTower(currIndex, newItem);
		// });

		// function buildingTower(index, item){
		// 	$('.towerGrid').empty();
		// 	towerArray.splice(index,1,item);
		// 	t = new Tower(towerArray, wrapNum);

		// 	for(var i = 0; i < arraySize; i++){
		// 		$('.towerGrid').append("<li>" + towerArray[i] + "</li>");
		// 	}

		// 	console.log (t.isStable());
		// 	console.log(towerArray);

		// 	stabilityCheck(index, item);
		// }



		$('ul.towerGrid li').unbind().bind('click', showOptions);
		$('ul.box li').unbind().bind('click', hideOptions);
	});
	
});

function buildingTower(index, item){
	$('.towerGrid').empty();
	towerArray.splice(index,1,item);
	t = new Tower(towerArray, wrapNum);
	
	console.log(towerArray, wrapNum);
	
	for(var i = 0; i < arraySize; i++){
		$('.towerGrid').append("<li>" + towerArray[i] + "</li>");
	}

	$('ul.towerGrid li').unbind().bind('click', showOptions);
	$('ul.box li').unbind().bind('click', hideOptions);

	console.log (t.isStable());
	

	stabilityCheck(index, item);
}

function stabilityCheck(index){
	if(!t.isStable()){
		var blankItem = " ";
		alert('Your tower is NOT stable. Please try again.');
		buildingTower(index, blankItem);
	}else{
		console.log('it is stable')
	}
}

function showOptions(e){
	console.log(this);
	currIndex = $(this).index(),
	x = e.clientX,
	y = e.clientY;
	console.log(currIndex);
	// console.log(x);
	// console.log(y);

	$('.box').css('left', (x - 70) + 'px');
	$('.box').css('top', y + 'px');
	$('.box').show();

}

function hideOptions(e){
	newItem = $(this).text();
	console.log(newItem);
	// console.log(x);
	// console.log(y);

	$('.box').hide();

	buildingTower(currIndex, newItem);
}





