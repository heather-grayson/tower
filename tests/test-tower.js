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
	var t5 = new Tower ( [	'|',
							'|' ], 1 );

	var t6 = new Tower ( [	'|',
							'=' ], 1 );

	var t7 = new Tower ( [	'=',
							'|' ], 1 );

	var t8 = new Tower ( [	'=',
							'=' ], 1 );

	equal ( t5.isStable(), true );
	equal ( t6.isStable(), true );
	equal ( t7.isStable(), true );
	equal ( t8.isStable(), true );
}

