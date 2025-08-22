"use strict";var N=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=N(function(_,o){"use strict";var v=require("@stdlib/math-base-assert-is-nan"),l=require("@stdlib/constants-float64-high-word-sign-mask"),c=require("@stdlib/number-float64-base-to-words").assign,f=require("@stdlib/array-uint32"),g=new f(2),h=new f(2),q=new f(2),m=4294967296;function W(r){return r[0]&l?r=x(r):r[0]|=l,r}function x(r){return r[0]=~r[0],r[1]=~r[1],r[1]+=1,r[1]===0&&(r[0]+=1),r}function y(r,e){return r[0]>e[0]?1:r[0]<e[0]?-1:r[1]>e[1]?1:r[1]<e[1]?-1:0}function p(r,e,i){var n,t,u,a;return n=r[0],u=r[1],t=e[0],a=e[1],u>=a?(i[0]=n-t,i[1]=u-a):(i[0]=n-t-1,i[1]=u+m-a),i}function A(r,e){var i,n,t,u;return v(r)||v(e)?NaN:(n=c(r,g,1,0),t=c(e,h,1,0),n=W(n),t=W(t),i=y(n,t),i===0?0:(i===1?u=p(n,t,q):u=p(t,n,q),u[0]*m+u[1]))}o.exports=A});var K=s();module.exports=K;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
