<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# forEach

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invoke a callback function once for each ndarray element.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import forEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-for-each@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/ndarray-base-for-each/tags). For example,

```javascript
import forEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-for-each@v0.1.0-esm/index.mjs';
```

#### forEach( arrays, fcn\[, thisArg] )

Invokes a callback function once for each ndarray element.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@esm/index.mjs';
import log from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log@esm/index.mjs';

// Create data buffers:
var xbuf = new Float64Array( 12 );

// Define the shape of the array:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 1;

// Create an ndarray-like object:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

// Apply the callback function:
forEach( [ x ], naryFunction( log, 1 ) );
```

The function accepts the following arguments:

-   **arrays**: array-like object containing an ndarray.
-   **fcn**: callback to apply.
-   **thisArg**: callback execution context.

The callback function is provided the following arguments:

-   **value**: current array element.
-   **indices**: current array element indices.
-   **arr**: the input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The provided ndarray should be an `object` with the following properties:

    -   **dtype**: data type.
    -   **data**: data buffer.
    -   **shape**: dimensions.
    -   **strides**: stride lengths.
    -   **offset**: index offset.
    -   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying a callback function in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-to-array@esm/index.mjs';
import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@esm/index.mjs';
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@esm/index.mjs';
import log from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log@esm/index.mjs';
import forEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-for-each@esm/index.mjs';

var x = {
    'dtype': 'generic',
    'data': zeroTo( 10 ),
    'shape': [ 5, 2 ],
    'strides': [ -2, 1 ],
    'offset': 8,
    'order': 'row-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

x = {
    'dtype': 'generic',
    'data': zeroTo( 10 ),
    'shape': [ 5, 2 ],
    'strides': [ 1, -5 ],
    'offset': 5,
    'order': 'column-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

x = {
    'dtype': 'generic',
    'data': zeroTo( 18 ),
    'shape': [ 2, 3, 3 ],
    'strides': [ 9, 3, 1 ],
    'offset': 0,
    'order': 'row-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

x = {
    'dtype': 'generic',
    'data': zeroTo( 18 ),
    'shape': [ 2, 3, 3 ],
    'strides': [ -1, -2, -6 ],
    'offset': 17,
    'order': 'column-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-for-each.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-for-each

[test-image]: https://github.com/stdlib-js/ndarray-base-for-each/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-base-for-each/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-for-each/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-for-each?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-for-each.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-for-each/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-for-each/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-for-each/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-for-each/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-for-each/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-for-each/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-for-each/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-for-each/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-for-each/main/LICENSE

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
