/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var numel = require( '@stdlib/ndarray-base-numel' );
var vind2bind = require( '@stdlib/ndarray-base-vind2bind' );
var ind2sub = require( '@stdlib/ndarray-base-ind2sub' );


// VARIABLES //

var MODE = 'throw';


// MAIN //

/**
* Invokes a callback function once for each ndarray element.
*
* @private
* @param {Object} x - object containing ndarray meta data
* @param {ndarrayLike} x.ref - reference to the original ndarray-like object
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Callback} fcn - callback function
* @param {*} thisArg - callback function execution context
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var naryFunction = require( '@stdlib/utils-nary-function' );
* var log = require( '@stdlib/console-log' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( 8 );
*
* // Define the shape of the array:
* var shape = [ 2, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create an ndarray-like object:
* var x = {
*     'ref': null,
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Apply the callback function:
* forEachnd( x, naryFunction( log, 1 ), {} );
*/
function forEachnd( x, fcn, thisArg ) {
	var xbuf;
	var ordx;
	var len;
	var idx;
	var sh;
	var sx;
	var ox;
	var ix;
	var i;

	sh = x.shape;

	// Compute the total number of elements over which to iterate:
	len = numel( sh );

	// Cache a reference to the output ndarray data buffer:
	xbuf = x.data;

	// Cache a reference to the stride array:
	sx = x.strides;

	// Cache the index of the first indexed element:
	ox = x.offset;

	// Cache the array order:
	ordx = x.order;

	// Iterate over each element based on the linear **view** index, regardless as to how the data is stored in memory...
	for ( i = 0; i < len; i++ ) {
		ix = vind2bind( sh, sx, ox, ordx, i, MODE );
		idx = ind2sub( sh, sx, 0, ordx, i, MODE ); // return subscripts from the perspective of the ndarray view
		fcn.call( thisArg, xbuf[ ix ], idx, x.ref );
	}
}


// EXPORTS //

module.exports = forEachnd;
