!function(e){function n(n){for(var r,a,u=n[0],c=n[1],s=n[2],v=0,f=[];v<u.length;v++)a=u[v],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(n);f.length;)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==i[c]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},i={4:0},o=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=c;o.push([7,0]),t()}({7:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(2),o=function(e){var n,t=e.images,o=[],a=t[0].size,u=document.getElementsByClassName(e.parent)[0],c=Math.max(window.innerWidth||0),s=Math.max(window.innerHeight||0),l=0,v=_(a),f=v.w,d=v.h,p=new r.l({antialias:!1});p.setPixelRatio(window.devicePixelRatio),p.setClearColor(2303786,1),p.setSize(f,d),u.appendChild(p.domElement);var m=new r.j;m.crossOrigin="anonymous",$(".js-view__amount-all").html(t.length),t.forEach((function(e){(n=m.load(e.image)).magFilter=n.minFilter=r.c,n.anisotropy=p.capabilities.getMaxAnisotropy(),o.push(n)}));var g=new r.h;g.background=new r.a(2303786);var h=new r.e(c/-2,c/2,s/2,s/-2,1,1e3);h.position.z=1;var w=new r.i({uniforms:{dispFactor:{type:"f",value:0},currentImage:{type:"t",value:o[0]},nextImage:{type:"t",value:o[1]}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n",fragmentShader:"\n    \n    varying vec2 vUv;\n\n    uniform sampler2D currentImage;\n    uniform sampler2D nextImage;\n\n    uniform float dispFactor;\n\n    void main() {\n\n        vec2 uv = vUv;\n        vec4 _currentImage;\n        vec4 _nextImage;\n        float intensity = 0.3;\n\n        vec4 orig1 = texture2D(currentImage, uv);\n        vec4 orig2 = texture2D(nextImage, uv);\n        \n        _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));\n\n        _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));\n\n        vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n\n        gl_FragColor = finalTexture;\n\n    }\n",transparent:!0,opacity:1}),x=new r.g(u.offsetWidth,u.offsetHeight,1),y=new r.d(x,w);function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{height:1920,width:980};c=Math.max(window.innerWidth||0),s=Math.max(window.innerHeight||0);var n,t,r=e.width/e.height;if(t=s,c>(n=s*r)){var i=e.height/e.width;t=c*i,n=c}return{w:n,h:t}}y.position.set(0,0,0),g.add(y),function(){var e=!1;function n(n){e||($(".js-view__amount-current").html(n+1),l=n,e=!0,w.uniforms.nextImage.value=o[n],w.uniforms.nextImage.needsUpdate=!0,i.a.to(w.uniforms.dispFactor,1,{value:1,ease:"Expo.easeInOut",onComplete:function(){w.uniforms.currentImage.value=o[n],w.uniforms.currentImage.needsUpdate=!0,w.uniforms.dispFactor.value=0,e=!1}}))}$(".js-view__right").on("click",(function(){l+1===t.length?n(0):n(l+1)})),$(".js-view__left").on("click",(function(){n(0===l?t.length-1:l-1)}))}(),window.addEventListener("resize",(function(e){!function(e){var n=_(e),t=n.w,r=n.h;p.setSize(t,r)}(t[l].size)})),function e(){requestAnimationFrame(e),p.render(g,h)}()};document.addEventListener("DOMContentLoaded",(function(){$.ajax("/wp-content/themes/pokrovsky/static/viewSlider.JSON").done((function(e){new o({parent:"js-view__slider",images:e})}))}))}});