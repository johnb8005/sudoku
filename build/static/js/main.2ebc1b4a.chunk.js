(this["webpackJsonp@johnb8005/sudoku"]=this["webpackJsonp@johnb8005/sudoku"]||[]).push([[0],{21:function(e,n,t){e.exports=t(31)},31:function(e,n,t){"use strict";t.r(n);var r=t(0),l=t.n(r),a=t(16),u=t.n(a),o=t(6),i=t(7),c=t(9),m=t(8),f=t(10),s=t(4),d=t(3),h={borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5",boxShadow:"0 .25rem .75rem rgba(0, 0, 0, .05)"},p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("div",{style:h,className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"},l.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},l.a.createElement(s.b,{to:"/"},"Sudoku")),l.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},l.a.createElement(s.b,{className:"p-2 text-dark",to:"/sudoku"},"Sudoku"),l.a.createElement(s.b,{className:"p-2 text-dark",to:"/anagram"},"Anagram")))),l.a.createElement("main",{role:"main"},l.a.createElement("div",{className:"container"},e.children,l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("a",{href:"https://johnb8005.github.io/sudoku/"},"<< Back to Github page")))))},v=t(19),b=t(20),g=function(e){return Array(e*e).fill(0).map((function(e,n){return n+1}))},y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return e.map((function(e,t){return e||g(n)}))},E=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Array(n*n).fill(0).map((function(t,r){return e*n*n+r}))},O=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Array(n*n).fill(0).map((function(t,r){return e+n*n*r}))},j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(3===n){if(0===e)return[0,1,2,9,10,11,18,19,20];if(1===e)return[3,4,5,12,13,14,21,22,23];if(2===e)return[6,7,8,15,16,17,24,25,26];if(3===e)return[27,28,29,36,37,38,45,46,47];if(4===e)return[30,31,32,39,40,41,48,49,50];if(5===e)return[33,34,35,42,43,44,51,52,53];if(6===e)return[54,55,56,63,64,65,72,73,74];if(7===e)return[57,58,59,66,67,68,75,76,77];if(8===e)return[60,61,62,69,70,71,78,79,80]}for(var t=[],r=e%n*n,l=Math.floor(e/2)*n*n*n,a=0;a<n;a++)for(var u=0;u<n;u++){var o=r+l+a*n*n+u;t.push(o)}return t},k=function(e,n){var t=e.filter((function(e,t){return"number"===typeof e&&n.includes(t)})),r=function(e,n){var t=e.filter((function(e,t){return Array.isArray(e)&&2===e.length&&n.includes(t)}));return t.flatMap((function(e,n){return t.map((function(t,r){return n>r&&w(e,t)?e:null}))})).filter((function(e){return null!==e}))}(e,n);return e.map((function(e,l){if("number"===typeof e||!n.includes(l))return e;var a=x(e,t),u=N(a,r);return 1===u.length?u[0]:u}))},w=function(e,n){return e.length===n.length&&0===e.filter((function(e){return!n.includes(e)})).length},x=function(e,n){return e.filter((function(e){return!n.includes(e)}))},N=function(e,n){if(2===e.length&&!w(e,n))return e;var t=[].concat.apply([],n);return x(e,t)},A=function e(n,t,r){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(l===r*r)return n;var a=t(l,r),u=k(n,a);return e(u,t,r,l+1)},S=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[E,O,j];if(0===r.length)return n;var l=A(n,r.pop(),t);return e(l,t,r)},C=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;if(0===r)return console.log("algorithm after all epochs were exhausted (".concat(r,")")),n;var l=n.filter((function(e){return"number"!==typeof e})).length;if(0===l)return console.log("algorithm aborted early at epochs ".concat(r)),n;var a=S(n,t);return e(a,t,r-1)},P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,r=y(e);return C(r,n,t)};function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(t,!0).forEach((function(n){Object(v.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;return Array.apply(void 0,Object(b.a)(Array(e))).map((function(e,n){return n}))},F={border:"solid thin",height:"2.4em",width:"2.4em",textAlign:"center",padding:0},J=function(e){function n(e){var t;Object(o.a)(this,n),(t=Object(c.a)(this,Object(m.a)(n).call(this,e))).onChange=function(e,n){var r=n.target.value;if(Number(r)&&r>0){var l=t.state.s;l[e]=Number(r),t.setState(l)}},t.handleSolve=function(){console.log("solve!");var e=P(t.state.s);t.setState({s:e})};return t.state={s:[null,null,null,4,null,null,null,8,null,null,null,6,null,8,null,1,null,3,null,8,null,1,null,3,null,5,null,2,null,null,null,6,null,8,null,1,null,6,null,8,null,1,null,3,4,null,null,1,null,3,4,null,6,null,null,4,null,6,7,null,9,null,2,6,null,null,9,null,2,null,4,5,null,null,2,null,null,null,null,null,null]},t}return Object(f.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this,n=this.state.s;return l.a.createElement("div",null,l.a.createElement("table",{style:{borderCollapse:"collapse",fontFamily:"Calibri, sans-serif"}},l.a.createElement("tbody",null,M().map((function(t){return l.a.createElement("tr",{key:t,style:t%3===2?{borderBottom:"solid medium"}:{}},M().map((function(r){var a=9*t+r,u=Number(n[a])&&n[a]>0?n[a]:"";return l.a.createElement("td",{key:r+"-"+t,style:r%3===2?D({},F,{borderRight:"solid medium"}):F},l.a.createElement("input",{type:"text",step:"false",onChange:function(n){return e.onChange(a,n)},value:u,style:{width:"100%",MozAppearance:"textfield",border:0}}))})))})))),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary",onClick:this.handleSolve},"Solve"))}}]),n}(l.a.Component),W=function(){return l.a.createElement("p",null,l.a.createElement("i",null,"Not implemented yet"))},z=function(){return l.a.createElement("p",null,"Click on the menu to get started")},G=function(e){function n(){return Object(o.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(p,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/sudoku",component:function(){return l.a.createElement(J,null)}}),l.a.createElement(d.a,{exact:!0,path:"/anagram",component:function(){return l.a.createElement(W,null)}}),l.a.createElement(d.a,{component:function(){return l.a.createElement(z,null)}}))))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.2ebc1b4a.chunk.js.map