/* v1.14.0-pre
Updated : 2022-10-04 */
!function(r){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=r,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.triggerPixel=function(t,e){var r=new Image;e&&"function"==typeof e&&(r.addEventListener("load",e),r.addEventListener("error",e));console.log("insert trigger pixel: ".concat(t)),r.src=t},n.createTrackPixelHtml=function(t){if(!t)return"";var e=encodeURI(t),r='<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="'.concat(e,'"></div>');return console.log("insert trigger pixel: ".concat(t)),r},n.writeAdUrl=function(t,e,r){var n=i.getEmptyIframe(r,e);n.src=t,document.body.appendChild(n)},n.writeAdHtml=function(t){t=t.replace(/\<(\?xml|(\!DOCTYPE[^\>\[]+(\[[^\]]+)?))+[^>]+\>/g,""),r(document.body,t,{error:function(t){console.log("catch error: ".concat(t))},done:function(){console.info("Dblclick script has been delivered.")}})},n.sendRequest=function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",function(){e(r.responseText)}),r.open("GET",t),r.send()},n.getUUID=function(){var r=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(r+16*Math.random())%16|0;return r=Math.floor(r/16),("x"===t?e:3&e|8).toString(16)})},n.loadScript=function(t,e,r,n){var i=t.document,a=i.createElement("script");a.type="text/javascript",r&&"function"==typeof r&&(a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,r())}:a.onload=function(){r()});n&&"function"==typeof n&&(a.onerror=function(){n()});a.src=e;var o=i.getElementsByTagName("head");(o=o.length?o:i.getElementsByTagName("body")).length&&(o=o[0]).insertBefore(a,o.firstChild);return a},n.getCreativeComment=function(t){return document.createComment("Creative ".concat(t.crid," served by Prebid.js Header Bidding"))},n.getCreativeCommentMarkup=function(t){var e=n.getCreativeComment(t),r=document.createElement("div");return r.appendChild(e),r.innerHTML},n.transformAuctionTargetingData=function(e){var r={hb_adid:"adId",hb_cache_host:"cacheHost",hb_cache_path:"cachePath",hb_cache_id:"uuid",hb_format:"mediaType",hb_env:"env",hb_size:"size",hb_pb:"hbPb"};function t(t){return!(!e[t]||!(function(t){return a(t,"Object")}(e[t])&&0<Object.keys(e[t]).length||s(e[t])&&""!==e[t]))}var n={},i={};t("targetingMap")?i=function(e){var r={};return Object.keys(e).forEach(function(t){Array.isArray(e[t])&&0<e[t].length&&(r[t]=e[t][0])}),r}(e.targetingMap):t("targetingKeywords")&&(i=function(t){var i={},e=t.split(",");return 0<e.length&&e.forEach(function(t){var e=t.split(":");if(2===e.length){var r=e[0],n=e[1];i[r]=n}}),i}(e.targetingKeywords));return function(e){Object.keys(e).forEach(function(t){n[r[t]||t]=e[t]})}(i),Object.keys(e).forEach(function(t){"targetingMap"!==t&&"targetingKeywords"!==t&&s(e[t])&&""!==e[t]&&(n[t]=e[t])}),n},n.parseUrl=function(t){var e=document.createElement("a");return e.href=decodeURIComponent(t),{href:e.href,protocol:(e.protocol||"").replace(/:$/,""),hostname:e.hostname,port:+e.port,pathname:e.pathname.replace(/^(?!\/)/,"/"),hash:(e.hash||"").replace(/^#/,""),host:(e.host||window.location.host).replace(/:(443|80)$/,"")}};var i=function(t){if(t&&t.__esModule)return t;var e=o();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=n?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=t[i]}}r.default=t,e&&e.set(t,r);return r}(e(4));function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}var r=e(5);function a(t,e){return Object.prototype.toString.call(t)==="[object "+e+"]"}function s(t){return a(t,"String")}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.prebidMessenger=function(e){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window,o=function(){if(null==e)return null;var t=(0,n.parseUrl)(e);return t.protocol+"://"+t.host}();return function(t,e){if(null==o)throw new Error("Missing pubUrl");var r;if(t=JSON.stringify(t),null==e)a.parent.postMessage(t,o);else{var n=new MessageChannel;(r=n.port1).onmessage=e,a.addEventListener("message",i),a.parent.postMessage(t,o,[n.port2])}return function(){null!=r&&(a.removeEventListener("message",i),r.onmessage=null,r=null)};function i(t){(t.origin||t.originalEvent&&t.originalEvent.origin)===o&&e(t)}}};var n=r(0)},function(t,e,r){"use strict";var n=r(3);window.pbNativeTag=window.pbNativeTag||{};var i=(0,n.newNativeTrackerManager)(window);window.pbNativeTag.startTrackers=i.startTrackers},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newNativeTrackerManager=function(i){var a;function o(t){return i.document.getElementsByClassName(t)||[]}function s(t){return t.attributes&&t.attributes[v]&&t.attributes[v].value||""}function c(t,e){l(e,"click")}function u(r){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:c;r=r||o(h);for(var t=function(t){var e=s(r[t]);r[t].addEventListener("click",function(t){n(t,e)},!0)},e=0;e<r.length;e++)t(e)}function l(t,e){if(""===t)console.warn("Prebid tracking event was missing 'adId'.  Was adId macro set in the HTML attribute "+v+"on the ad's anchor element");else{var r={message:"Prebid Native",adId:t};"click"===e&&(r.action="click"),a(r)}}return{startTrackers:function(t){var e=(0,f.transformAuctionTargetingData)(t);a=(0,p.prebidMessenger)(e.pubUrl,i);var r=(0,d.newNativeAssetManager)(window,e.pubUrl);if(e&&"mobile-app"===e.env){r.loadMobileAssets(e,function(t){var e=0<arguments.length&&void 0!==t?t:{},r=e.clickTrackers,n=e.impTrackers,i=e.eventtrackers;u(!1,function(t){(t||[]).forEach(f.triggerPixel)}.bind(null,r)),(n||[]).forEach(f.triggerPixel),i.filter(function(t){return 1===t.event&&1===t.method}).map(function(t){return t.url}).forEach(f.triggerPixel),i.filter(function(t){return 1===t.event&&2===t.method}).map(function(t){return t.url}).forEach(function(t){return loadScript(document,t)})})}else{var n=o(h);r.loadAssets(function(t){return 0<t.length&&t[0].attributes&&t[0].attributes[v]&&t[0].attributes[v].value||""}(n),u),u(n,c),0<n.length&&function(t){for(var e=0;e<t.length;e++){l(s(t[e]),"impression")}}(n)}}}};var f=r(0),d=r(6),p=r(1),h="pb-click",v="pbAdId"},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getEmptyIframe=function(t,e){var r=document.createElement("iframe");return r.setAttribute("frameborder",0),r.setAttribute("scrolling","no"),r.setAttribute("marginheight",0),r.setAttribute("marginwidth",0),r.setAttribute("TOPMARGIN",0),r.setAttribute("LEFTMARGIN",0),r.setAttribute("allowtransparency","true"),r.setAttribute("width",e),r.setAttribute("height",t),r},e.insertElement=function(t,e,r){var n;e=e||document,n=r?e.getElementsByTagName(r):e.getElementsByTagName("head");try{(n=n.length?n:e.getElementsByTagName("body")).length&&(n=n[0]).insertBefore(t,n.firstChild)}catch(t){}}},function(t,e,r){var n;n=function(){return i={},r.m=n=[function(t,e,r){"use strict";var n,i=r(1),a=(n=i)&&n.__esModule?n:{default:n};t.exports=a.default},function(t,e,r){"use strict";e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=h;var n,i=r(2),c=(n=i)&&n.__esModule?n:{default:n},a=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}}(r(4));function u(){}var o={afterAsync:u,afterDequeue:u,afterStreamStart:u,afterWrite:u,autoFix:!0,beforeEnqueue:u,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:u,error:function(t){throw new Error(t.msg)},releaseAsync:!1},l=0,f=[],d=null;function p(){var t=f.shift();if(t){var e=a.last(t);e.afterDequeue(),t.stream=function(t,e,n){(d=new c.default(t,n)).id=l++,d.name=n.name||d.id,h.streams[d.name]=d;var r=t.ownerDocument,i={close:r.close,open:r.open,write:r.write,writeln:r.writeln};function a(t){t=n.beforeWrite(t),d.write(t),n.afterWrite(t)}s(r,{close:u,open:u,write:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return a(e.join(""))},writeln:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return a(e.join("")+"\n")}});var o=d.win.onerror||u;return d.win.onerror=function(t,e,r){n.error({msg:t+" - "+e+": "+r}),o.apply(d.win,[t,e,r])},d.write(e,function(){s(r,i),d.win.onerror=o,n.done(),d=null,p()}),d}.apply(void 0,t),e.afterStreamStart()}}function h(t,e,r){if(a.isFunction(r))r={done:r};else if("clear"===r)return f=[],d=null,void(l=0);r=a.defaults(r,o);var n=[t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t,e,r];return t.postscribe={cancel:function(){n.stream?n.stream.abort():n[1]=u}},r.beforeEnqueue(n),f.push(n),d||p(),t.postscribe}s(h,{streams:{},queue:f,WriteStream:c.default})},function(t,e,r){"use strict";e.__esModule=!0;var n,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r(3),a=(n=i)&&n.__esModule?n:{default:n},o=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}}(r(4));var l="data-ps-",f="ps-style",d="ps-script";function c(t,e){var r=l+e,n=t.getAttribute(r);return o.existy(n)?String(n):n}function u(t,e,r){var n=2<arguments.length&&void 0!==r?r:null,i=l+e;o.existy(n)&&""!==n?t.setAttribute(i,n):t.removeAttribute(i)}var p=(h.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();o.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},h.prototype._callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},h.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,r=void 0,n=void 0,i=[];(e=this.parser.readToken())&&!(r=o.isScript(e))&&!(n=o.isStyle(e));)(e=this.options.beforeWriteToken(e))&&i.push(e);0<i.length&&this._writeStaticTokens(i),r&&this._handleScriptToken(e),n&&this._handleStyleToken(e)},h.prototype._writeStaticTokens=function(t){var e=this._buildChunk(t);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,this._walkChunk(),e):null},h.prototype._buildChunk=function(t){for(var e=this.actuals.length,r=[],n=[],i=[],a=t.length,o=0;o<a;o++){var s=t[o],c=s.toString();if(r.push(c),s.attrs){if(!/^noscript$/i.test(s.tagName)){var u=e++;n.push(c.replace(/(\/?>)/," "+l+"id="+u+" $1")),s.attrs.id!==d&&s.attrs.id!==f&&i.push("atomicTag"===s.type?"":"<"+s.tagName+" "+l+"proxyof="+u+(s.unary?" />":">"))}}else n.push(c),i.push("endTag"===s.type?c:"")}return{tokens:t,raw:r.join(""),actual:n.join(""),proxy:i.join("")}},h.prototype._walkChunk=function(){for(var t=void 0,e=[this.proxyRoot];o.existy(t=e.shift());){var r=1===t.nodeType;if(!r||!c(t,"proxyof")){r&&u(this.actuals[c(t,"id")]=t,"id");var n=t.parentNode&&c(t.parentNode,"proxyof");n&&this.actuals[n].appendChild(t)}e.unshift.apply(e,o.toArray(t.childNodes))}},h.prototype._handleScriptToken=function(t){var e=this,r=this.parser.clear();r&&this.writeQueue.unshift(r),t.src=t.attrs.src||t.attrs.SRC,(t=this.options.beforeWriteToken(t))&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},h.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",(t=this.options.beforeWriteToken(t))&&this._writeStyleToken(t),e&&this.write()},h.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,f),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},h.prototype._buildStyle=function(t){var r=this.doc.createElement(t.tagName);return r.setAttribute("type",t.type),o.eachKey(t.attrs,function(t,e){r.setAttribute(t,e)}),r},h.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');var r=this.doc.getElementById(e);r&&r.parentNode.replaceChild(t,r)},h.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},h.prototype._onScriptDone=function(t){t===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},h.prototype._writeScriptToken=function(t,e){var r=this._buildScript(t),n=this._shouldRelease(r),i=this.options.afterAsync;t.src&&(r.src=t.src,this._scriptLoadHandler(r,n?i:function(){e(),i()}));try{this._insertCursor(r,d),r.src&&!n||e()}catch(t){this.options.error(t),e()}},h.prototype._buildScript=function(t){var r=this.doc.createElement(t.tagName);return o.eachKey(t.attrs,function(t,e){r.setAttribute(t,e)}),t.content&&(r.text=t.content),r},h.prototype._scriptLoadHandler=function(e,r){function n(){e=e.onload=e.onreadystatechange=e.onerror=null}var i=this.options.error;function t(){n(),null!=r&&r(),r=null}function a(t){n(),i(t),null!=r&&r(),r=null}function o(t,e){var r=t["on"+e];null!=r&&(t["_on"+e]=r)}o(e,"load"),o(e,"error"),s(e,{onload:function(){if(e._onload)try{e._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){a({msg:"onload handler failed "+t+" @ "+e.src})}t()},onerror:function(){if(e._onerror)try{e._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){return void a({msg:"onerror handler failed "+t+" @ "+e.src})}a({msg:"remote script failed "+e.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(e.readyState)&&t()}})},h.prototype._shouldRelease=function(t){return!/^script$/i.test(t.nodeName)||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},h);function h(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),this.root=t,this.options=e,this.doc=t.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new a.default("",{autoFix:e.autoFix}),this.actuals=[t],this.proxyHistory="",this.proxyRoot=this.doc.createElement(t.nodeName),this.scriptStack=[],this.writeQueue=[],u(this.proxyRoot,"proxyof",0)}e.default=p},function(t,e,r){var n;n=function(){return i={},r.m=n=[function(t,e,r){"use strict";var n,i=r(1),a=(n=i)&&n.__esModule?n:{default:n};t.exports=a.default},function(t,e,r){"use strict";e.__esModule=!0;var n,o=u(r(2)),i=u(r(3)),a=r(6),s=(n=a)&&n.__esModule?n:{default:n},c=r(5);function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var l={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},f=(d.prototype.append=function(t){this.stream+=t},d.prototype.prepend=function(t){this.stream=t+this.stream},d.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},d.prototype._peekTokenImpl=function(){for(var t in l)if(l.hasOwnProperty(t)&&l[t].test(this.stream)){var e=i[t](this.stream);if(e)return"startTag"===e.type&&/script|style/i.test(e.tagName)?null:(e.text=this.stream.substr(0,e.length),e)}},d.prototype.peekToken=function(){return this._peekToken()},d.prototype.readToken=function(){return this._readToken()},d.prototype.readTokens=function(t){for(var e=void 0;e=this.readToken();)if(t[e.type]&&!1===t[e.type](e))return},d.prototype.clear=function(){var t=this.stream;return this.stream="",t},d.prototype.rest=function(){return this.stream},d);function d(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),this.stream=e;var n=!1,i={};for(var a in o)o.hasOwnProperty(a)&&(r.autoFix&&(i[a+"Fix"]=!0),n=n||i[a+"Fix"]);n?(this._readToken=(0,s.default)(this,i,function(){return t._readTokenImpl()}),this._peekToken=(0,s.default)(this,i,function(){return t._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}for(var p in(e.default=f).tokenToString=function(t){return t.toString()},f.escapeAttributes=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=(0,c.escapeQuotes)(t[r],null));return e},f.supports=o)o.hasOwnProperty(p)&&(f.browserHasFlaw=f.browserHasFlaw||!o[p]&&p)},function(t,e){"use strict";var r=!(e.__esModule=!0),n=!1,i=window.document.createElement("div");try{var a="<P><I></P></I>";i.innerHTML=a,e.tagSoup=r=i.innerHTML!==a}catch(t){e.tagSoup=r=!1}try{i.innerHTML="<P><i><P></P></i></P>",e.selfClose=n=2===i.childNodes.length}catch(t){e.selfClose=n=!1}i=null,e.tagSoup=r,e.selfClose=n},function(t,e,r){"use strict";e.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=function(t){var e=t.indexOf("--\x3e");if(0<=e)return new s.CommentToken(t.substr(4,e-1),e+3)},e.chars=function(t){var e=t.indexOf("<");return new s.CharsToken(0<=e?e:t.length)},e.startTag=i,e.atomicTag=function(t){var e=i(t);if(e){var r=t.slice(e.length);if(r.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){var n=r.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(n)return new s.AtomicTagToken(e.tagName,n[0].length+e.length,e.attrs,e.booleanAttrs,n[1])}}},e.endTag=function(t){var e=t.match(c.endTag);if(e)return new s.EndTagToken(e[1],e[0].length)};var s=r(4),c={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function i(t){var r,n,i;if(-1!==t.indexOf(">")){var e=t.match(c.startTag);if(e){var a=(r={},n={},i=e[2],e[2].replace(c.attr,function(t,e){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(r[arguments[5]]="",n[arguments[5]]=!0):r[e]=arguments[2]||arguments[3]||arguments[4]||c.fillAttr.test(e)&&e||"":r[e]="",i=i.replace(t,"")}),{v:new s.StartTagToken(e[1],e[0].length,r,n,!!e[3],i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))});if("object"===(void 0===a?"undefined":o(a)))return a.v}}}},function(t,e,r){"use strict";e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var o=r(5);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.Token=function t(e,r){s(this,t),this.type=e,this.length=r,this.text=""},e.CommentToken=(n.prototype.toString=function(){return"\x3c!--"+this.content},n);function n(t,e){s(this,n),this.type="comment",this.length=e||(t?t.length:0),this.text="",this.content=t}e.CharsToken=(i.prototype.toString=function(){return this.text},i);function i(t){s(this,i),this.type="chars",this.length=t,this.text=""}var a=e.TagToken=(c.formatTag=function(t,e){var r=1<arguments.length&&void 0!==e?e:null,n="<"+t.tagName;for(var i in t.attrs)if(t.attrs.hasOwnProperty(i)){n+=" "+i;var a=t.attrs[i];void 0!==t.booleanAttrs&&void 0!==t.booleanAttrs[i]||(n+='="'+(0,o.escapeQuotes)(a)+'"')}return t.rest&&(n+=" "+t.rest),t.unary&&!t.html5Unary?n+="/>":n+=">",null!=r&&(n+=r+"</"+t.tagName+">"),n},c);function c(t,e,r,n,i){s(this,c),this.type=t,this.length=r,this.text="",this.tagName=e,this.attrs=n,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1}e.StartTagToken=(u.prototype.toString=function(){return a.formatTag(this)},u);function u(t,e,r,n,i,a){s(this,u),this.type="startTag",this.length=e,this.text="",this.tagName=t,this.attrs=r,this.booleanAttrs=n,this.html5Unary=!1,this.unary=i,this.rest=a}e.AtomicTagToken=(l.prototype.toString=function(){return a.formatTag(this,this.content)},l);function l(t,e,r,n,i){s(this,l),this.type="atomicTag",this.length=e,this.text="",this.tagName=t,this.attrs=r,this.booleanAttrs=n,this.unary=!1,this.html5Unary=!1,this.content=i}e.EndTagToken=(f.prototype.toString=function(){return"</"+this.tagName+">"},f);function f(t,e){s(this,f),this.type="endTag",this.length=e,this.text="",this.tagName=t}},function(t,e){"use strict";e.__esModule=!0,e.escapeQuotes=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}},function(t,e){"use strict";e.__esModule=!0,e.default=function(r,n,e){var i=function(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,r=0;e=this[r];r++)if(e.tagName===t)return!0;return!1},t}(),a={startTag:function(t){var e=t.tagName;"TR"===e.toUpperCase()&&i.lastTagNameEq("TABLE")?(r.prepend("<TBODY>"),o()):n.selfCloseFix&&s.test(e)&&i.containsTagName(e)?i.lastTagNameEq(e)?u(r,i):(r.prepend("</"+t.tagName+">"),o()):t.unary||i.push(t)},endTag:function(t){i.last()?n.tagSoupFix&&!i.lastTagNameEq(t.tagName)?u(r,i):i.pop():n.tagSoupFix&&(e(),o())}};function o(){var t=function(t,e){var r=t.stream,n=c(e());return t.stream=r,n}(r,e);t&&a[t.type]&&a[t.type](t)}return function(){return o(),c(e())}};var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,s=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function c(t){return t&&"startTag"===t.type&&(t.unary=r.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function u(t,e){var r=e.pop();t.prepend("</"+r.tagName+">")}}],r.c=i,r.p="",r(0);function r(t){if(i[t])return i[t].exports;var e=i[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,r),e.loaded=!0,e.exports}var n,i},t.exports=n()},function(t,e){"use strict";e.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t){return null!=t}function a(t,e,r){var n=void 0,i=t&&t.length||0;for(n=0;n<i;n++)e.call(r,t[n],n)}function o(t,e,r){for(var n in t)t.hasOwnProperty(n)&&e.call(r,n,t[n])}function r(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}e.existy=i,e.isFunction=function(t){return"function"==typeof t},e.each=a,e.eachKey=o,e.defaults=function(r,t){return r=r||{},o(t,function(t,e){i(r[t])||(r[t]=e)}),r},e.toArray=function(r){try{return Array.prototype.slice.call(r)}catch(t){var e=function(){var e=[];return a(r,function(t){e.push(t)}),{v:e}}();if("object"===(void 0===e?"undefined":n(e)))return e.v}},e.last=function(t){return t[t.length-1]},e.isTag=r,e.isScript=function(t){return r(t,"script")},e.isStyle=function(t){return r(t,"style")}}],r.c=i,r.p="",r(0);function r(t){if(i[t])return i[t].exports;var e=i[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,r),e.loaded=!0,e.exports}var n,i},t.exports=n()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newNativeAssetManager=function(o,t){var s,n,c=(0,b.prebidMessenger)(t,o),u=0;function l(){null!=n&&(n(),n=null)}function a(t){var e;try{e=JSON.parse(t)}catch(t){console.log("Error parsing response from cache host: ".concat(t))}return e}function r(t){var e=t.uuid,r="".concat(function(t,e){var r=void 0===e||""===e?x:e;return"https://".concat(void 0===t||""===t?w:t).concat(r)}(t.cacheHost,t.cachePath),"?uuid=").concat(e);(0,g.sendRequest)(r,function(t){var e=a(t);if(e&&e.adm){var r=a(e.adm);if(r&&r.assets){var n=function(t){var e,r=[];return t.assets.forEach(function(t){t.img?k.image[t.img.type]?r.push({key:k.image[t.img.type],value:t.img.url}):console.log("ERROR: Invalid image type for image asset"):t.data?k.data[t.data.type]?r.push({key:k.data[t.data.type],value:t.data.value}):console.log("ERROR: Invalid data type for data asset"):t.title&&r.push({key:"title",value:t.title.text})}),t.link&&(t.link.clicktrackers&&(e=t.link.clicktrackers),r.push({key:"clickUrl",value:t.link.url})),{assets:r,clicktrackers:e,imptrackers:t.imptrackers,eventtrackers:t.eventtrackers}}(r),i=y(o.document.body.innerHTML,n);o.document.body.innerHTML=i,s&&s({clickTrackers:n.clicktrackers,impTrackers:n.imptrackers,eventtrackers:n.eventtrackers})}}})}function f(){return void 0!==o.pbNativeData}function d(t,e){return e&&!f()?"".concat(t,":").concat(e):f()?"##".concat(t,"##"):t}function p(c){for(var t=arguments.length,u=new Array(1<t?t-1:0),e=1;e<t;e++)u[e-1]=arguments[e];return Object.values(T).reduce(function(t,e){var r=d(e,c),n=!0,i=!1,a=void 0;try{for(var o,s=u.filter(Boolean)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){if(0<=o.value.indexOf(r)){t.push(e);break}}}catch(t){i=!0,a=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return t},[])}function i(t){return p(t,o.document.body.innerHTML,o.document.head.innerHTML)}function h(t){var e={};try{e=JSON.parse(t.data)}catch(t){return void(10<u++&&l())}if("assetResponse"===e.message){var r=o.document.body.innerHTML,n=o.document.head.innerHTML;if(f()&&e.adId!==o.pbNativeData.adId)return;n&&(o.document.head.innerHTML=y(n,e)),e.assets=e.assets||[];var i=e.assets;if(e.ortb&&(i.ortb=e.ortb,s=function(){(0,m.fireNativeImpressionTrackers)(e.adId,c),(0,m.addNativeClickTrackers)(e.adId,e.ortb,c)}),e.hasOwnProperty("rendererUrl")&&e.rendererUrl||f()&&o.pbNativeData.hasOwnProperty("rendererUrl"))if(o.renderAd)v(o.renderAd&&o.renderAd(i)||"",e);else document.getElementById("pb-native-renderer")?document.getElementById("pb-native-renderer").addEventListener("load",function(){v(o.renderAd&&o.renderAd(i)||"",e)}):(0,g.loadScript)(o,f()&&o.pbNativeData.hasOwnProperty("rendererUrl")&&o.pbNativeData.rendererUrl||e.rendererUrl,function(){v(o.renderAd&&o.renderAd(i)||"",e)});else if(e.hasOwnProperty("adTemplate")&&e.adTemplate||f()&&o.pbNativeData.hasOwnProperty("adTemplate")){v(y(f()&&o.pbNativeData.hasOwnProperty("adTemplate")&&o.pbNativeData.adTemplate||e.adTemplate,e),e)}else{var a=y(r,e);o.document.body.innerHTML=a,s&&s(),l()}}}function v(t,e){if(_.isSafeFrame())document.body.style.width=Math.ceil(o.$sf.ext.geom().self.b)+"px";else{var r=function(t){for(var e,r=t;r!==t.top;){if(!(e=r.parent).frames||!e.frames.length)return null;for(var n=0;n<e.frames.length;n++)if(e.frames[n]===r){if(!e.document)return null;var i=!0,a=!1,o=void 0;try{for(var s,c=e.document.getElementsByTagName("iframe")[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var u=s.value;if(!u.contentWindow)return null;if(u.contentWindow===r)return u.parentElement}}catch(t){a=!0,o=t}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}}}}(o);if(r&&r.children&&r.children[0]){var n=r.children[0];if("1"===n.width&&"1"===n.height){var i=r.getBoundingClientRect().width;o.document.body.style.width="".concat(i,"px")}}}o.document.body.innerHTML+=t,s&&s(),o.removeEventListener("message",h),l(),function(t,e,r){c({message:"Prebid Native",action:"resizeNativeHeight",adId:t,height:e,width:r})}(e.adId,document.body.clientHeight||document.body.offsetHeight,document.body.clientWidth),"function"==typeof window.postRenderAd&&window.postRenderAd(e)}function y(i,t){var a=t.assets,e=t.ortb,o=t.adId;if(e)i=function(e,t){return t.assets.forEach(function(t){e=e.replace("##hb_native_asset_id_".concat(t.id,"##"),function(t){return t.img?t.img.url:t.data?t.data.value:t.title?t.title.text:t.video?t.video.vasttag:""}(t)),t.link&&t.link.url&&(e=e.replace("##hb_native_asset_link_id_".concat(t.id,"##"),t.link.url))}),e=e.replaceAll(/##hb_native_asset_id_\d+##/gm,""),t.privacy&&(e=e.replace("##hb_native_privacy##",t.privacy)),t.link&&(e=e.replaceAll("##hb_native_linkurl##",t.link.url)),e}(i,e);else if(!Array.isArray(a))return i;return a=a||[],p(o,i).forEach(function(e){var t=d(e,o),r=new RegExp(t,"g"),n=a.find(function(t){return e===T[t.key]});i=i.replace(r,n?n.value:"")}),i}return{loadAssets:function(t,e){var r=i(t);f()&&o.pbNativeData.hasOwnProperty("assetsToReplace")&&o.pbNativeData.assetsToReplace.forEach(function(t){var e=t.match(/hb_native_/i)?t:T[t];e&&r.push(e)}),f()&&o.pbNativeData.hasOwnProperty("requestAllAssets")&&o.pbNativeData.requestAllAssets?(s=e,n=function(t){return c({message:"Prebid Native",action:"allAssetRequest",adId:t},h)}(t)):0<r.length&&(s=e,n=function(t,e){return c({message:"Prebid Native",action:"assetRequest",adId:t,assets:e},h)}(t,r))},loadMobileAssets:function(t,e){0<i().length&&(s=e,r(t))}}};var m=r(7),g=r(0),b=r(1),_=(0,r(8).newEnvironment)(window),T={title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice",rendererUrl:"hb_renderer_url"},k={image:{1:"icon",3:"image"},data:{1:"sponsoredBy",2:"body",3:"rating",4:"likes",5:"downloads",6:"price",7:"salePrice",8:"phone",9:"address",10:"body2",11:"displayUrl",12:"cta"}},w="prebid.adnxs.com",x="/pbc/v1/cache"},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fireNativeImpressionTrackers=function(t,e){e({message:"Prebid Native",action:"fireNativeImpressionTrackers",adId:t})},e.addNativeClickTrackers=function(t,e,n){for(var i={message:"Prebid Native",action:"click",adId:t},r=document.getElementsByClassName(o)||[],a=0;a<r.length;a++)r[a].addEventListener("click",function(t){var e=t.target,r=e&&e.getAttribute(s);i.assetId=r,n(i)},!0)};r(0);var o="pb-click",s="hb_native_asset_id"},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newEnvironment=function(r){function e(){return r.top!==r&&!function(t){try{return t.top.location.toString(),!0}catch(t){return!1}}(r)}return{isMobileApp:function(t){return t&&"mobile-app"===t},isCrossDomain:e,isSafeFrame:function(){return!(!r.$sf||!r.$sf.ext)},isAmp:function(t){return"string"==typeof t&&""!==t&&e()},canLocatePrebid:function(){for(var t=!1,e=r;!t;){try{if(e.pbjs){t=!0;break}}catch(t){}if(e===window.top)break;e=e.parent}return t}}}}]);