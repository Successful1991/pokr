!function(e){function t(t){for(var o,a,i=t[0],u=t[1],c=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(s&&s(t);p.length;)p.shift()();return f.push.apply(f,c||[]),n()}function n(){for(var e,t=0;t<f.length;t++){for(var n=f[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(f.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={2:0},f=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;f.push([10,0]),n()}({10:function(e,t,n){"use strict";n.r(t);var o=n(1);document.addEventListener("DOMContentLoaded",(function(){$(window).width()>1024&&function(){o.a.set(".news__content",{scale:.3}),o.a.set($(".js-news__el")[4],{scale:1.4,zIndex:10}),o.a.fromTo(".news__content",.3,{autoAlpha:0},{autoAlpha:1});var e=o.a.timeline({onComplete:function(e){o.a.to($(".js-news__el")[4],{scale:1,duration:.4}),o.a.to(".news__content",.4,{delay:.45,scale:1,transformOrigin:"50% top"})},delay:.4}),t=$(".news__content")[0],n=t.offsetHeight/2,r=t.offsetWidth/2;$(".js-news__el").each((function(t,o){if(4!==t){var f=(r-o.offsetWidth/2-o.offsetLeft)/o.offsetWidth*100,a=(n-o.offsetHeight/2-o.offsetTop)/o.offsetHeight*100;e.fromTo(o,.4,{xPercent:f,yPercent:a},{xPercent:0,yPercent:0},"-=0.2")}}))}()}))}});