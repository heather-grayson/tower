test( "Tower:isValid", Tower_isValid );
test( "Tower:isStable", Tower_isStable );

function Tower_isValid () {
	var t1 = new Tower ( [ '/' ], 1 );
	var t2 = new Tower ( [ '=' ], 1 );
	var t3 = new Tower ( [ '\\'], 1 );
	var t4 = new Tower ( [ '|' ], 1 );
	var t5 = new Tower ( [ ' ' ], 1 );
	var t6 = new Tower ( [ '' ] , 1 );
	var t7 = new Tower ( [ '0' ], 1 );
	var t8 = new Tower ( [ 5 ]  , 1 );
	var t9 = new Tower ( [ 'Hiya!' ], 1);

	equal ( t1.isValid(), true );
	equal ( t2.isValid(), true );
	equal ( t3.isValid(), true );
	equal ( t4.isValid(), true );
	equal ( t5.isValid(), true );
	equal ( t6.isValid(), true );
	equal ( t7.isValid(), false );
	equal ( t8.isValid(), false );
	equal ( t9.isValid(), false );
}

function Tower_isStable () {
	var t1 = new Tower ( [ '/' ], 1 );
	var t2 = new Tower ( [ '=' ], 1 );
	var t3 = new Tower ( [ '\\'], 1 );
	var t4 = new Tower ( [ '|' ], 1 );

	// Check Basic Structs
	equal ( t1.isStable(), true );
	equal ( t2.isStable(), true );
	equal ( t3.isStable(), true );
	equal ( t4.isStable(), true );

	// Check Basic Supports
	// pipe
	var t5 = new Tower ( [	'|',
							'|' ], 1 );

	var t6 = new Tower ( [	'|',
							'=' ], 1 );

	var t7 = new Tower ( [	'=',
							'|' ], 1 );

	var t8 = new Tower ( [	'=',
							'=' ], 1 );

	var t9 = new Tower ( [	'|',
							'\\' ], 1 );

	var t10 = new Tower ( [	'|', ' ',
							' ', '\\' ], 2 );

	var t11 = new Tower ( [	' ', '|',
							'/', ' ' ], 2 );

	equal ( t5.isStable(), true );
	equal ( t6.isStable(), true );
	equal ( t7.isStable(), true );
	equal ( t8.isStable(), true );
	equal ( t9.isStable(), false );
	equal ( t10.isStable(), true );
	equal ( t11.isStable(), true );

	// forward slash
	var t12 = new Tower ( [	'/',
							'|' ], 1 );

	var t13 = new Tower ( [	' ',
							'/' ], 1 );

	var t14 = new Tower ( [	' ', '/',
							'=', ' ' ], 2 );

	var t15 = new Tower ( [	' ', '/',
							'/', ' ' ], 2 );

	var t16 = new Tower ( [	' ', '/',
							'|', ' ' ], 2 );

	equal ( t12.isStable(), false );
	equal ( t13.isStable(), true );
	equal ( t14.isStable(), true );
	equal ( t15.isStable(), true );
	equal ( t16.isStable(), true );

	// back slash
	var t17 = new Tower ( [	'\\',
							'|' ], 1 );

	var t18 = new Tower ( [	' ',
							'\\' ], 1 );

	var t19 = new Tower ( [	'\\', ' ',
							' ', '=' ], 2 );

	var t20 = new Tower ( [	'\\', ' ',
							' ', '\\' ], 2 );

	var t21 = new Tower ( [	'\\', ' ',
							' ', '|' ], 2 );

	equal ( t17.isStable(), false );
	equal ( t18.isStable(), true );
	equal ( t19.isStable(), true );
	equal ( t20.isStable(), true );
	equal ( t21.isStable(), true );

	// equal
	var t22 = new Tower ( [	'=',
							'|' ], 1 );

	var t23 = new Tower ( [	' ',
							'=' ], 1 );

	var t24 = new Tower ([" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "=", " ", " ", "/", " ", "\\"], 4 ); 
	// var t24 = new Tower ( [	' ', ' ', '=', ' ',
	// 						' ', '/', ' ', '\\' ], 4 );

	var t25 = new Tower ( [	' ', '=', ' ',
							'|', ' ', '\\' ], 3 );


	equal ( t22.isStable(), true );
	equal ( t23.isStable(), true );
	equal ( t24.isStable(), true );
	equal ( t25.isStable(), false );
}

