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
			switch ( this.array[i] ) {
				case "|":
					var bottom_left = i + this.wrap - 1;
					var bottom_mid = i + this.wrap;
					var bottom_right = i + this.wrap + 1;
					var blStable = true;
					var bmStable = true;
					var brStable = true;

					// Bottom Left:
					//   In the next row
					//   Exists
					//   A "" symbol
					if ( this.getRow(bottom_left, this.wrap) > this.getRow(i, this.wrap) ) {
						if ( this.array.length > bottom_left ) {
							if (this.array[bottom_left] !== "/" ) {
								blStable = false;
							}
						}
					}

					// Bottom Mid:
					//   If exists, must be "|" or "="
					if ( this.array.length > bottom_mid ) {
						if (this.array[bottom_mid] !== "=" && this.array[bottom_mid] !== "|" ) {
							bmStable = false;
						}
					}


					// Bottom Right:
					//   In the next row
					//   Exists
					//   A "\" symbol
					if ( this.getRow(bottom_right, this.wrap) > this.getRow(i, this.wrap) ) {
						if ( this.array.length > bottom_right ) {
							if (this.array[bottom_right] !== "\\" ) {
								brStable = false;
							}
						}
					}

					stable = stable && ( blStable || bmStable || brStable);

					break;
				case "/":
					break;
				case "\\":
					break;
				case "=":
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


