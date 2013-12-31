module ("Tower", { setup: Tower_setup, teardown: Tower_teardown });
test( "Tower.eq", Tower_eq );

// Setup something before all tests run
function Tower_setup () { }

// Teardown things after each test
function Tower_teardown () { }

function Tower_eq () {
	equal ( 0, 0 );
}

