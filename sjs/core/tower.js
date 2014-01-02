(function( window, document ){
	"use strict";


	// Constructor
	function Tower ( array, wrap ) {
		this.array = array;
		this.wrap = wrap;
	}

	var p = Tower.prototype;

	p.isStable = function ( ) {
		var stable = true;

		var i = this.array.length; while (i--) {
			var bottom_left = i + this.wrap - 1;
			var bottom_mid = i + this.wrap;
			var bottom_right = i + this.wrap + 1;
			var blStable = true;
			var bmStable = true;
			var brStable = true;

			switch ( this.array[i] ) {
				case "|":

					// Bottom Left:
					//   In the next row
					//   Exists
					//   A "/" symbol
					if ( this.getRow(bottom_left, this.wrap) == (this.getRow(i, this.wrap) + 1) ) {
						if ( this.array.length > bottom_left ) {
							if (this.array[bottom_left] !== "/" ) {
								blStable = false;
							}
						} else {
							blStable = false;
						}
					} else {
						blStable = false;
					}

					// Bottom Mid:
					//   If exists, must be "|" or "="
					if ( this.getRow(bottom_mid, this.wrap) == (this.getRow(i, this.wrap) + 1) ) {
						if ( this.array.length > bottom_mid ) {
							if (this.array[bottom_mid] !== "=" && this.array[bottom_mid] !== "|" ) {
								bmStable = false;
							}
						} else {
							bmStable = true;
						}
					} else {
						bmStable = false;
					}

					// Bottom Right:
					//   In the next row
					//   Exists
					//   A "\\" symbol
					if ( this.getRow(bottom_right, this.wrap) == (this.getRow(i, this.wrap) + 1) ) {
						if ( this.array.length > bottom_right ) {
							if (this.array[bottom_right] !== "\\" ) {
								brStable = false;
							}
						} else {
							brStable = false;
						}
					} else {
						brStable = false;
					}

					stable = stable && ( blStable || bmStable || brStable );
					if (!stable) return stable;

					break;
				case "/":

					// Bottom Left:
					//   In the next row
					//   Exists
					//   A "/" or "|" or "=" symbol
					if ( this.getRow(bottom_left, this.wrap) == (this.getRow(i, this.wrap) + 1) ) {
						if ( this.array.length > bottom_left ) {
							if (this.array[bottom_left] !== "/" && this.array[bottom_left] !== "|" && this.array[bottom_left] !== "=" ) {
								blStable = false;
							}
						}
					} else {
						blStable = false;
					}

					if ( this.getRow(bottom_mid, this.wrap) == (this.getRow(i, this.wrap) + 1) ) {
						if ( this.array.length > bottom_mid ) {
							bmStable = false;
						} else {
							bmStable = true;
						}
					}

					// Bottom Mid:
					//   Doesn't matter if it exists. "/" needs to be supported on the left only.

					// Bottom Right:
					//   Doesn't matter if it exists. "/" needs to be supported on the left only.

					stable = stable && ( blStable || bmStable );
					if (!stable) return stable;

					break;
				case "\\":

					// Bottom Left:
					//   Doesn't matter if it exists. "/" needs to be supported on the left only.
					
					// Bottom Mid:
					if ( this.getRow(bottom_mid, this.wrap) == (this.getRow(i, this.wrap) + 1) ) {
						if ( this.array.length > bottom_mid ) {
							bmStable = false;
						} else {
							bmStable = true;
						}
					}

					// Bottom Right:
					//   In the next row
					//   Exists
					//   A "\\" or "|" or "=" symbol
					if ( this.getRow(bottom_right, this.wrap) == (this.getRow(i, this.wrap) + 1) ) {
						if ( this.array.length > bottom_right ) {
							if (this.array[bottom_right] !== "\\" && this.array[bottom_right] !== "|" && this.array[bottom_right] !== "=" ) {
								brStable = false;
							}
						}
					} else {
						brStable = false;
					}

					stable = stable && ( brStable || bmStable );
					if (!stable) return stable;

					break;
				case "=":

					// Bottom Left & Bottom Right:
					//   In the next row
					//   Exists
					//   Left = "/" symbol + Right = "\\" symbol
					if ( (this.getRow(bottom_left, this.wrap) == (this.getRow(i, this.wrap) + 1)) && (this.getRow(bottom_right, this.wrap) == (this.getRow(i, this.wrap) + 1) ) ) {
						if ( (this.array.length > bottom_left) && (this.array.length > bottom_right) ) {
							if ( (this.array[bottom_left] !== "/") || (this.array[bottom_right] !== "\\") ) {
								console.log ('moo');
								blStable = false;
								brStable = false;
							}
						} 
					} else {
						blStable = false;
						brStable = false;
					}

					// Bottom Mid:
					//   If exists, must be "|" or "="
					if ( this.getRow(bottom_mid, this.wrap) == (this.getRow(i, this.wrap) + 1) ) {
						if ( this.array.length > bottom_mid ) {
							if (this.array[bottom_mid] !== "=" && this.array[bottom_mid] !== "|" ) {
								bmStable = false;
							}
						} else {
							bmStable = true;
						}
					} else {
						bmStable = false;
					}

					stable = stable && ( blStable || bmStable || brStable);
					if (!stable) return stable;

					break;
			}
		}

		return stable;
	};

	p.getRow = function ( index, wrap ) {
		return Math.floor ( index / wrap ) + 1;
	};

	p.isValid = function () {
		var i = this.array.length;
		while (i--) {
			if (this.array[i] !== '|' && this.array[i] !== '=' && this.array[i] !== '/' && this.array[i] !== '\\' && this.array[i] !== ' ' && this.array[i] !== '') {
				return false;
			}
		}
		return true;
	};






	window.Tower = Tower;

})(window, document);


