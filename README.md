<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# ulpdiff

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the number of representable [double-precision][double-precision] floating-point values that separate two [double-precision][double-precision] floating-point numbers along the real number line.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
ulpdiff = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-ulp-difference@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ulpdiff = require( 'path/to/vendor/umd/number-float64-base-ulp-difference/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-ulp-difference@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ulpdiff;
})();
</script>
```

#### ulpdiff( x, y )

Computes the number of representable [double-precision][double-precision] floating-point values that separate two [double-precision][double-precision] floating-point numbers along the real number line.

```javascript
var EPS = require( '@stdlib/constants-float64-eps' );

var d = ulpdiff( 1.0, 1.0+EPS );
// returns 1.0

d = ulpdiff( 1.0+EPS, 1.0 );
// returns 1.0

d = ulpdiff( 1.0, 1.0+EPS+EPS );
// returns 2.0

d = ulpdiff( 1.0, NaN );
// returns NaN

d = ulpdiff( NaN, 1.0 );
// returns NaN

d = ulpdiff( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Adjacent [double-precision][double-precision] floating-point numbers differ by `1` [ulp][ulp] (unit in the last place).
-   Signed zeros differ only in the sign bit but are considered numerically equal, and thus their ULP difference is `0`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-subnormal@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-ulp-difference@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var d = ulpdiff( 1.0, 1.0+EPS );
console.log( d );
// => 1.0

d = ulpdiff( 5.8364e-319, 5.8367e-319 );
console.log( d );
// => 6.0

d = ulpdiff( 0.0, SMALLEST_SUBNORMAL );
console.log( d );
// => 1.0

d = ulpdiff( 0.0, -0.0 );
console.log( d );
// => 0.0

d = ulpdiff( SMALLEST_SUBNORMAL, -SMALLEST_SUBNORMAL );
console.log( d );
// => 2.0

})();
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

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-ulp-difference.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-ulp-difference

[test-image]: https://github.com/stdlib-js/number-float64-base-ulp-difference/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float64-base-ulp-difference/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-ulp-difference/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-ulp-difference?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-ulp-difference.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-ulp-difference/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-ulp-difference/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float64-base-ulp-difference/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float64-base-ulp-difference/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float64-base-ulp-difference/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float64-base-ulp-difference/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float64-base-ulp-difference/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float64-base-ulp-difference/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-ulp-difference/main/LICENSE

[double-precision]: https://en.wikipedia.org/wiki/Double-precision_floating-point_format

[ulp]: https://en.wikipedia.org/wiki/Unit_in_the_last_place

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
