/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([145,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 140:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Profesional fullstack con más de 6 años de experiencia.\",\"title\":\"Perfil profesional\"}");

/***/ }),

/***/ 141:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Fullstack professional with more than 6 years of experience.\",\"title\":\"Professional profile\"}");

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);
module.exports = __webpack_require__(378);


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(355);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-container .cube{width:100%;height:100%;position:absolute;transform-style:preserve-3d;transition:ease-in all .5s}.cube-container .cube .cube-face{position:absolute;width:100%;height:100%;margin:0;background-color:#080808;color:#fff}.cube-container .cube .cube-face>*{height:100%;width:100%}.cube-container .cube .cube-front{transform:rotateY(0deg) translateZ(100px)}.cube-container .cube .cube-right{transform:rotateY(90deg) translateZ(100px)}.cube-container .cube .cube-back{transform:rotateY(180deg) translateZ(100px)}.cube-container .cube .cube-left{transform:rotateZ(180deg) rotateY(-90deg) translateZ(100px)}.cube-container .cube .cube-top{transform:rotateX(90deg) translateZ(100px)}.cube-container .cube .cube-bottom{transform:rotateX(-90deg) translateZ(100px)}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(357);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hi-container{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#080808;transition:linear all .5s;z-index:1001}.hi-container h1{color:#fff;text-align:center;width:95%;font-size:20px}.hi-container h1 span.primary{color:#b71d2b;font-size:32px}.hi-container h1 span.primary span{font-size:20px;font-weight:300}.hi-container h1 span.secondary{color:#78b6a9;font-size:24px}.hi-container .hi{display:flex;max-width:1200px}.hi-container .hi .letter{display:flex;flex-wrap:wrap}.hi-container .hi .letter>div{display:flex;flex-direction:row;justify-content:center;width:100%;margin:4px 0}.hi-container .hi .letter>div>*{margin:0 4px}.hi-container .hi .letter .white-background{background-color:#fff;border-radius:8px;overflow:hidden}.hi-container.hidden{opacity:0;pointer-events:none}.hi-container.hidden *{pointer-events:none}@media screen and (max-width: 768px){.hi-container h1{display:flex;flex-direction:column}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(359);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "nav.navbar{position:fixed;top:0;left:0;right:0;z-index:900;display:flex;align-items:center;justify-content:center;background-color:#b71d2b;height:60px;padding:0 16px}nav.navbar .expand-btn{display:none}nav.navbar .navbar-content{max-width:1200px;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between}nav.navbar .navbar-content .navbar-title{font-size:32px;font-weight:bold;color:#fff}nav.navbar .navbar-content .navbar-title span{font-size:20px;font-weight:300}nav.navbar .navbar-content .navbar-subtitle{font-size:16px;font-weight:300;font-style:italic}nav.navbar .navbar-content .navbar-subtitle span{color:#e9bbbf}@media screen and (max-width: 992px){nav.navbar .navbar-content{justify-content:center;flex-direction:column}nav.navbar .navbar-content .navbar-title{font-size:20px}nav.navbar .navbar-content .navbar-title span{font-size:12px}nav.navbar .navbar-content .navbar-subtitle{font-size:12px}nav.navbar .navbar-content .navbar-subtitle span{font-size:14px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(361);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-icon{margin:0;height:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(363);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-btn{padding:8px 16px;font-size:16px;border-radius:4px;border:0;color:#fff;background-color:#b71d2b;transition:linear all .25s;outline:0;cursor:pointer}.custom-btn>*:not(:first-child){margin-left:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(365);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-section{margin:0;height:100%;width:100%;background-color:#080808;color:#fff;cursor:pointer;border-radius:16px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;overflow:hidden}.cube-section>div{width:calc(100% - 64px);display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:32px;overflow:hidden}.cube-section>div h2{margin:0;text-transform:uppercase}.cube-section .see-more-btn{height:20%;width:100%;align-self:center;border-radius:0}.cube-section-full{background-color:#080808;color:#fff;display:flex;align-items:center;justify-content:flex-start;position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;transition:linear all 1s;border-radius:0}.cube-section-full>div{width:100%;display:flex;align-items:flex-start;justify-content:flex-start;max-width:1200px}.cube-section-full>div .close-btn{position:absolute;right:16px;top:16px;background-color:transparent}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(367);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bar-total{background-color:silver;border-radius:4px;overflow:hidden;display:flex}.bar-total .bar{padding:4px 0;transition:linear all .5s}.bar-total .bar>span{margin-left:8px;white-space:nowrap}.bar-total .bar.primary-darker{background-color:#900a10}.bar-total .bar.primary-dark{background-color:#a71520}.bar-total .bar.primary{background-color:#b71d2b}.bar-total .bar.secondary-darker{background-color:#488e7e}.bar-total .bar.secondary-dark{background-color:#65a698}.bar-total .bar.secondary{background-color:#78b6a9}.bar-total .bar.accent-darker{background-color:#e8b361}.bar-total .bar.accent-dark{background-color:#eec47d}.bar-total .bar.accent{background-color:#f2d090}.bar-total.vertical{min-height:100px;width:32px;height:100%;align-items:flex-end}.bar-total.vertical .bar{width:100%}.bar-total.vertical .bar>span{writing-mode:tb-rl;transform:rotate(-180deg)}.bar-total.horizontal{height:32px;min-width:100px;width:100%}.bar-total.horizontal .bar{height:100%}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(369);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".profile-section>div .bar-total{margin:8px 0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(371);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#main-cube .cube-container{transform:scale(1);transition:ease-in-out all 1s .25s}#main-cube .cube-container .cube-face{border-radius:16px}#main-cube .cube-container .cube-face *{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#main-cube .cube-container.initial-transition .cube{transition:ease-in-out all 1s .25s}#main-cube.hidden-cube .cube-container{transform:scale(0) rotateZ(270deg)}#main-cube.hidden-cube .cube-container .cube{transform:rotateY(360deg) !important}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(375);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fadein{-webkit-animation:fadein 0.5s;-moz-animation:fadein 0.5s;-ms-animation:fadein 0.5s;-o-animation:fadein 0.5s;animation:fadein 0.5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.fadeout{-webkit-animation:fadeout 0.5s;-moz-animation:fadeout 0.5s;-ms-animation:fadeout 0.5s;-o-animation:fadeout 0.5s;animation:fadeout 0.5s;opacity:0}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-ms-keyframes fadeout{from{opacity:1}to{opacity:0}}@-o-keyframes fadeout{from{opacity:1}to{opacity:0}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(377);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{font-family:'Poppins', sans-serif;font-size:14px;margin:0;color:#080808;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow,main #main-container #main-cube .cube-container .cube-face{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);box-shadow:0px 0 8px 2px rgba(136,136,136,0.5)}html{background-color:#fafaff}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;overflow:hidden}main #main-container{padding-top:60px;width:100%;height:calc(100vh - 60px);overflow:auto;display:flex;align-items:center;justify-content:center;flex-direction:column}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(70);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 9 modules
var react_router_dom = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/components/Cube/Cube.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/no-static-element-interactions */


const CUBE_FACES = {
  front: 'front',
  back: 'back',
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom'
};

const isArrowLeft = ({
  code,
  key,
  keyCode
}) => 37 === keyCode || 'ArrowLeft' === code || 'ArrowLeft' === key;

const isArrowUp = ({
  code,
  key,
  keyCode
}) => 38 === keyCode || 'ArrowUp' === code || 'ArrowUp' === key;

const isArrowRight = ({
  code,
  key,
  keyCode
}) => 39 === keyCode || 'ArrowRight' === code || 'ArrRight' === key;

const isArrowDown = ({
  code,
  key,
  keyCode
}) => 40 === keyCode || 'ArrowDown' === code || 'ArrowDown' === key;

const Cube = ({
  backContent,
  bottomContent,
  className,
  face,
  frontContent,
  leftContent,
  rightContent,
  size,
  topContent,
  withSwipe
}) => {
  const _useState = Object(react["useState"])(0),
        _useState2 = _slicedToArray(_useState, 2),
        angX = _useState2[0],
        setAngX = _useState2[1];

  const _useState3 = Object(react["useState"])(0),
        _useState4 = _slicedToArray(_useState3, 2),
        angY = _useState4[0],
        setAngY = _useState4[1];

  const _useState5 = Object(react["useState"])(false),
        _useState6 = _slicedToArray(_useState5, 2),
        moving = _useState6[0],
        setMoving = _useState6[1];

  const _useState7 = Object(react["useState"])(null),
        _useState8 = _slicedToArray(_useState7, 2),
        startX = _useState8[0],
        setStartX = _useState8[1];

  const _useState9 = Object(react["useState"])(null),
        _useState10 = _slicedToArray(_useState9, 2),
        startY = _useState10[0],
        setStartY = _useState10[1];

  const handleKeyDown = event => {
    if (!moving && isArrowLeft(event)) {
      setAngY(angY + 90);
    } else if (!moving && isArrowUp(event)) {
      setAngX(angX - 90);
    } else if (!moving && isArrowRight(event)) {
      setAngY(angY - 90);
    } else if (!moving && isArrowDown(event)) {
      setAngX(angX + 90);
    }
  };

  Object(react["useEffect"])(() => {
    let x = 0;
    let y = 0;

    if (face === CUBE_FACES.front) {
      y = 0;
    } else if (face === CUBE_FACES.back) {
      y = -180;
    } else if (face === CUBE_FACES.left) {
      y = 90;
    } else if (face === CUBE_FACES.right) {
      y = -90;
    } else if (face === CUBE_FACES.top) {
      x = -90;
    } else if (face === CUBE_FACES.bottom) {
      x = 90;
    }

    setAngX(x);
    setAngY(y);
  }, [face]);
  Object(react["useEffect"])(() => {
    setStartX(null);
    setStartY(null);
    setMoving(true);
    setTimeout(() => setMoving(false), 500);
  }, [angX, angY]);

  const handleMovement = event => {
    event.preventDefault();

    if (!moving && (startX || startY)) {
      var _event$changedTouches, _event$changedTouches2, _event$changedTouches3, _event$changedTouches4;

      const clientX = (event === null || event === void 0 ? void 0 : (_event$changedTouches = event.changedTouches) === null || _event$changedTouches === void 0 ? void 0 : (_event$changedTouches2 = _event$changedTouches[0]) === null || _event$changedTouches2 === void 0 ? void 0 : _event$changedTouches2.clientX) || event.clientX;
      const clientY = (event === null || event === void 0 ? void 0 : (_event$changedTouches3 = event.changedTouches) === null || _event$changedTouches3 === void 0 ? void 0 : (_event$changedTouches4 = _event$changedTouches3[0]) === null || _event$changedTouches4 === void 0 ? void 0 : _event$changedTouches4.clientY) || event.clientY;
      const diffX = clientX - startX;
      const diffY = clientY - startY;

      if (50 < Math.abs(diffX)) {
        // horizontal swipe
        setAngY(0 < diffX ? angY + 90 : angY - 90);
      }

      if (50 < Math.abs(diffY)) {
        // vertical swipe
        setAngX(0 < diffY ? angX - 90 : angX + 90);
      }
    }
  };

  const handleMovementStart = event => {
    var _event$touches, _event$touches$, _event$touches2, _event$touches2$;

    const clientX = (event === null || event === void 0 ? void 0 : (_event$touches = event.touches) === null || _event$touches === void 0 ? void 0 : (_event$touches$ = _event$touches[0]) === null || _event$touches$ === void 0 ? void 0 : _event$touches$.clientX) || event.clientX;
    const clientY = (event === null || event === void 0 ? void 0 : (_event$touches2 = event.touches) === null || _event$touches2 === void 0 ? void 0 : (_event$touches2$ = _event$touches2[0]) === null || _event$touches2$ === void 0 ? void 0 : _event$touches2$.clientY) || event.clientY;
    setStartX(clientX);
    setStartY(clientY);
  };

  Object(react["useEffect"])(() => {
    document.addEventListener('keydown', handleKeyDown);

    if (withSwipe) {
      document.addEventListener('mouseup', handleMovement);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mouseup', handleMovement);
    };
  });
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-container".concat(className ? " ".concat(className) : ''),
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      position: 'relative',
      perspective: size * 3
    }
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube",
    style: {
      transform: "translateZ(-".concat(size / 2, "px) rotateX(").concat(angX, "deg) rotateY(").concat(angY, "deg)")
    },
    onMouseDown: withSwipe ? handleMovementStart : undefined,
    onMouseUp: withSwipe ? handleMovement : undefined,
    onTouchEnd: withSwipe ? handleMovement : undefined,
    onTouchStart: withSwipe ? handleMovementStart : undefined
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-face cube-front",
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      transform: "rotateX(0deg) translateZ(".concat(size / 2, "px)")
    }
  }, frontContent), /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-face cube-back",
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      transform: "rotateX(180deg) rotateZ(180deg) translateZ(".concat(size / 2, "px)")
    }
  }, backContent), /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-face cube-right",
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      transform: "rotateY(90deg) translateZ(".concat(size / 2, "px)")
    }
  }, rightContent), /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-face cube-left",
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      transform: "rotateY(-90deg) translateZ(".concat(size / 2, "px)")
    }
  }, leftContent), /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-face cube-top",
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      transform: "rotateX(90deg) translateZ(".concat(size / 2, "px)")
    }
  }, topContent), /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-face cube-bottom",
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      transform: "rotateX(-90deg) translateZ(".concat(size / 2, "px)")
    }
  }, bottomContent)));
};

Cube.defaultProps = {
  backContent: undefined,
  bottomContent: undefined,
  className: undefined,
  face: CUBE_FACES.front,
  frontContent: undefined,
  leftContent: undefined,
  rightContent: undefined,
  size: 150,
  topContent: undefined,
  withSwipe: false
};
Cube.propTypes = {
  backContent: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  bottomContent: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  className: prop_types_default.a.string,
  face: prop_types_default.a.oneOf(Object.values(CUBE_FACES)),
  frontContent: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  leftContent: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  rightContent: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  size: prop_types_default.a.number,
  topContent: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  withSwipe: prop_types_default.a.bool
};
/* harmony default export */ var Cube_Cube = (Cube);
// EXTERNAL MODULE: ./src/components/Cube/cube.scss
var cube = __webpack_require__(354);

// CONCATENATED MODULE: ./src/components/Cube/index.js


/* harmony default export */ var components_Cube = (Cube_Cube);
// CONCATENATED MODULE: ./src/components/Hi/Hi.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Hi_slicedToArray(arr, i) { return Hi_arrayWithHoles(arr) || Hi_iterableToArrayLimit(arr, i) || Hi_unsupportedIterableToArray(arr, i) || Hi_nonIterableRest(); }

function Hi_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Hi_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Hi_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hi_arrayLikeToArray(o, minLen); }

function Hi_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function Hi_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Hi_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






const getSize = () => {
  const _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth;
  return Math.floor((innerWidth > innerHeight ? innerHeight : innerWidth) * 0.7 / 10);
};

const content = /*#__PURE__*/react_default.a.createElement("div", {
  className: "white-background"
});
const Hi_size = getSize();
const unanimatedDiv = /*#__PURE__*/react_default.a.createElement("div", {
  style: {
    height: Hi_size,
    width: Hi_size,
    color: 'black'
  }
});
const cubeOptions = {
  bottomContent: content,
  leftContent: content,
  rightContent: content,
  topContent: content
};

const Hi = ({
  onHide
}) => {
  const _useState = Object(react["useState"])(false),
        _useState2 = Hi_slicedToArray(_useState, 2),
        animation = _useState2[0],
        setAnimation = _useState2[1];

  const _useState3 = Object(react["useState"])(false),
        _useState4 = Hi_slicedToArray(_useState3, 2),
        hidden = _useState4[0],
        setHidden = _useState4[1];

  Object(react["useEffect"])(() => {
    setAnimation(true);
    setTimeout(() => setAnimation(false), 2000);
    setTimeout(() => setHidden(true), 2500);
  }, []);
  Object(react["useEffect"])(() => {
    if (hidden && 'function' === typeof onHide) {
      onHide();
    }
  }, [hidden]);
  const show = animation && !hidden;

  const getRandomCube = () => {
    let face = CUBE_FACES.front;

    if (show) {
      const number = Math.floor(Math.random() * 4);
      face = [CUBE_FACES.bottom, CUBE_FACES.left, CUBE_FACES.right, CUBE_FACES.top][number];
    }

    return /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
      size: Hi_size,
      face: face
    }, cubeOptions));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "hi-container".concat(hidden ? ' hidden' : '')
  }, /*#__PURE__*/react_default.a.createElement("h1", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "primary"
  }, "My C", /*#__PURE__*/react_default.a.createElement("span", null, "u"), "V", /*#__PURE__*/react_default.a.createElement("span", null, "e")), ' ', "by ", /*#__PURE__*/react_default.a.createElement("span", {
    className: "secondary"
  }, "Javier Garc\xEDa")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "hi"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "letter"
  }, /*#__PURE__*/react_default.a.createElement("div", null, getRandomCube(), unanimatedDiv, getRandomCube()), /*#__PURE__*/react_default.a.createElement("div", null, getRandomCube(), unanimatedDiv, getRandomCube()), /*#__PURE__*/react_default.a.createElement("div", null, getRandomCube(), getRandomCube(), getRandomCube()), /*#__PURE__*/react_default.a.createElement("div", null, getRandomCube(), unanimatedDiv, getRandomCube()), /*#__PURE__*/react_default.a.createElement("div", null, getRandomCube(), unanimatedDiv, getRandomCube())), /*#__PURE__*/react_default.a.createElement("div", {
    className: "letter"
  }, /*#__PURE__*/react_default.a.createElement("div", null, getRandomCube(), getRandomCube(), getRandomCube()), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, getRandomCube(), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, getRandomCube(), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, getRandomCube(), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, getRandomCube(), getRandomCube(), getRandomCube())), /*#__PURE__*/react_default.a.createElement("div", {
    className: "letter"
  }, /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, getRandomCube(), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, getRandomCube(), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, getRandomCube(), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, unanimatedDiv, unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, getRandomCube(), unanimatedDiv))));
};

Hi.defaultProps = {
  onHide: undefined
};
Hi.propTypes = {
  onHide: prop_types_default.a.func
};
/* harmony default export */ var Hi_Hi = (Hi);
// EXTERNAL MODULE: ./src/components/Hi/hi.scss
var hi = __webpack_require__(356);

// CONCATENATED MODULE: ./src/components/Hi/index.js


/* harmony default export */ var components_Hi = (Hi_Hi);
// CONCATENATED MODULE: ./src/components/Navbar/Navbar.jsx


const Navbar = () => /*#__PURE__*/react_default.a.createElement("nav", {
  className: "navbar shadow"
}, /*#__PURE__*/react_default.a.createElement("div", {
  className: "navbar-content"
}, /*#__PURE__*/react_default.a.createElement("div", {
  className: "navbar-title"
}, "My C", /*#__PURE__*/react_default.a.createElement("span", null, "u"), "V", /*#__PURE__*/react_default.a.createElement("span", null, "e")), /*#__PURE__*/react_default.a.createElement("div", {
  className: "navbar-subtitle"
}, "by ", /*#__PURE__*/react_default.a.createElement("span", null, "Javi Garc\xEDa Fajardo"))));

/* harmony default export */ var Navbar_Navbar = (Navbar);
// EXTERNAL MODULE: ./src/components/Navbar/navbar.scss
var navbar = __webpack_require__(358);

// CONCATENATED MODULE: ./src/components/Navbar/index.js


/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./src/components/Icon/Icon.jsx
function Icon_extends() { Icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Icon_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Icon = (_ref) => {
  let icon = _ref.icon,
      rest = _objectWithoutProperties(_ref, ["icon"]);

  return /*#__PURE__*/react_default.a.createElement("i", Icon_extends({}, rest, {
    "aria-hidden": "true",
    className: icon
  }));
};

Icon.defaultProps = {
  icon: undefined
};
Icon.propTypes = {
  icon: prop_types_default.a.string
};
/* harmony default export */ var Icon_Icon = (Icon);
// EXTERNAL MODULE: ./src/components/Icon/icon.scss
var Icon_icon = __webpack_require__(360);

// CONCATENATED MODULE: ./src/components/Icon/index.js


/* harmony default export */ var components_Icon = (Icon_Icon);
// CONCATENATED MODULE: ./src/components/Button/Button.jsx
function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      text = _ref.text,
      rest = Button_objectWithoutProperties(_ref, ["children", "className", "icon", "text"]);

  return /*#__PURE__*/react_default.a.createElement("button", Button_extends({
    className: "custom-btn".concat(className ? " ".concat(className) : ''),
    type: "button"
  }, rest), icon && /*#__PURE__*/react_default.a.createElement(components_Icon, {
    icon: icon
  }), text && /*#__PURE__*/react_default.a.createElement("span", null, text), children);
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  icon: undefined,
  text: undefined
};
Button.propTypes = {
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  className: prop_types_default.a.string,
  icon: prop_types_default.a.string,
  text: prop_types_default.a.string
};
/* harmony default export */ var Button_Button = (Button);
// EXTERNAL MODULE: ./src/components/Button/button.scss
var Button_button = __webpack_require__(362);

// CONCATENATED MODULE: ./src/components/Button/index.js


/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./src/components/Section/Section.jsx
function Section_slicedToArray(arr, i) { return Section_arrayWithHoles(arr) || Section_iterableToArrayLimit(arr, i) || Section_unsupportedIterableToArray(arr, i) || Section_nonIterableRest(); }

function Section_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Section_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Section_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Section_arrayLikeToArray(o, minLen); }

function Section_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function Section_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Section_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






const Section = ({
  children,
  className,
  disabled,
  title
}) => {
  const _useState = Object(react["useState"])(false),
        _useState2 = Section_slicedToArray(_useState, 2),
        fadeout = _useState2[0],
        setFadeout = _useState2[1];

  const _useState3 = Object(react["useState"])(false),
        _useState4 = Section_slicedToArray(_useState3, 2),
        fullscreen = _useState4[0],
        setFullscreen = _useState4[1];

  Object(react["useEffect"])(() => {
    if (fadeout) {
      setTimeout(() => setFullscreen(false), 400);
    }
  }, [fadeout]);
  Object(react["useEffect"])(() => {
    if (!fullscreen) {
      setFadeout(false);
    }
  }, [fullscreen]);
  return fullscreen ? Object(react_dom["createPortal"])( /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-section cube-section-full ".concat(fadeout ? 'fadeout' : 'fadein').concat(className ? " ".concat(className) : '')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-section-container"
  }, title && /*#__PURE__*/react_default.a.createElement("h2", null, title), /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "close-btn",
    icon: "fas fa-times",
    onClick: () => setFadeout(true)
  }), children)), document.body) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-section fadein".concat(className ? " ".concat(className) : ''),
    onDoubleClick: () => !disabled && setFullscreen(true)
  }, /*#__PURE__*/react_default.a.createElement("div", null, title && /*#__PURE__*/react_default.a.createElement("h2", null, title), children));
};

Section.defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
  title: undefined
};
Section.propTypes = {
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  className: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  title: prop_types_default.a.string
};
/* harmony default export */ var Section_Section = (Section);
// EXTERNAL MODULE: ./src/components/Section/section.scss
var section = __webpack_require__(364);

// CONCATENATED MODULE: ./src/components/Section/index.js


/* harmony default export */ var components_Section = (Section_Section);
// EXTERNAL MODULE: ./src/utils/es/profile.json
var profile = __webpack_require__(140);

// CONCATENATED MODULE: ./src/utils/es.js

const translations = {
  profile: profile
};
/* harmony default export */ var es = (translations);
// EXTERNAL MODULE: ./src/utils/en/profile.json
var en_profile = __webpack_require__(141);

// CONCATENATED MODULE: ./src/utils/en.js

const en_translations = {
  profile: en_profile
};
/* harmony default export */ var en = (en_translations);
// CONCATENATED MODULE: ./src/utils/translator.js


const translator_translations = {
  es: es,
  en: en
};
const LANG_IDS = {
  english: 'en',
  spanish: 'es'
};
const setLocale = lang => {
  localStorage.setItem('language', lang);
};
const getLocale = () => {
  if (!localStorage.language) {
    return LANG_IDS.spanish;
  }

  return localStorage.language;
};
const isSpanish = () => LANG_IDS.spanish === getLocale();
/**
 * Resolves a string 'index' for the JavaScript Object
 */

const resolveIndex = str => {
  str = str.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

  str = str.replace(/^\./, ''); // strip a leading dot

  const array = str.split('.');
  let translationsLang = translator_translations[getLocale()];

  for (let i = 0, length = array.length; i < length; ++i) {
    const elem = array[i];

    if ('object' === typeof translationsLang && elem in translationsLang) {
      translationsLang = translationsLang[elem];
    } else {
      return null;
    }
  }

  return translationsLang;
};

const translate = key => resolveIndex(key);
const LANGUAGES = [{
  name: translate('language.es'),
  value: 'es'
}, {
  name: translate('language.en'),
  value: 'en'
}];
// CONCATENATED MODULE: ./src/components/Bar/Bar.jsx
function Bar_extends() { Bar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Bar_extends.apply(this, arguments); }

function Bar_slicedToArray(arr, i) { return Bar_arrayWithHoles(arr) || Bar_iterableToArrayLimit(arr, i) || Bar_unsupportedIterableToArray(arr, i) || Bar_nonIterableRest(); }

function Bar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Bar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Bar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bar_arrayLikeToArray(o, minLen); }

function Bar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function Bar_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Bar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Bar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Bar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Bar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const BAR_TYPES = {
  primaryDarker: 'primary-darker',
  primaryDark: 'primary-dark',
  primary: 'primary',
  secondaryDarker: 'secondary-darker',
  secondaryDark: 'secondary-dark',
  secondary: 'secondary',
  accentDarker: 'accent-darker',
  accentDark: 'accent-dark',
  accent: 'accent'
};

const getTotal = (total, amount) => amount * 100 / total;

const getColor = total => {
  if (100 === total) {
    return BAR_TYPES.primaryDarker;
  }

  if (90 <= total) {
    return BAR_TYPES.primaryDark;
  }

  if (75 <= total) {
    return BAR_TYPES.primary;
  }

  if (60 <= total) {
    return BAR_TYPES.secondaryDarker;
  }

  if (55 <= total) {
    return BAR_TYPES.secondaryDark;
  }

  if (40 <= total) {
    return BAR_TYPES.secondary;
  }

  if (25 <= total) {
    return BAR_TYPES.accentDarker;
  }

  if (10 <= total) {
    return BAR_TYPES.accentDark;
  }

  return BAR_TYPES.accent;
};

const Bar = (_ref) => {
  let amount = _ref.amount,
      className = _ref.className,
      text = _ref.text,
      totalAmount = _ref.totalAmount,
      vertical = _ref.vertical,
      rest = Bar_objectWithoutProperties(_ref, ["amount", "className", "text", "totalAmount", "vertical"]);

  const _useState = Object(react["useState"])(BAR_TYPES.primary),
        _useState2 = Bar_slicedToArray(_useState, 2),
        color = _useState2[0],
        setColor = _useState2[1];

  const _useState3 = Object(react["useState"])(false),
        _useState4 = Bar_slicedToArray(_useState3, 2),
        mounted = _useState4[0],
        setMounted = _useState4[1];

  const _useState5 = Object(react["useState"])(0),
        _useState6 = Bar_slicedToArray(_useState5, 2),
        total = _useState6[0],
        setTotal = _useState6[1];

  Object(react["useEffect"])(() => {
    if (mounted) {
      const newtotal = getTotal(totalAmount, amount);
      setTimeout(() => setTotal(newtotal), 500);
      setColor(getColor(newtotal));
    } else {
      setMounted(true);
    }
  }, [mounted]);
  Object(react["useState"])(() => {
    if (mounted) {
      const newtotal = getTotal(totalAmount, amount);
      setTotal(newtotal);
      setColor(getColor(newtotal));
    }
  }, [amount, totalAmount]);
  return /*#__PURE__*/react_default.a.createElement("div", Bar_extends({}, rest, {
    className: "bar-total fadein".concat(className ? " ".concat(className) : '', " ").concat(vertical ? 'vertical' : 'horizontal')
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "bar ".concat(color),
    style: vertical ? {
      height: "".concat(total)
    } : {
      width: "".concat(total, "%")
    }
  }, mounted && /*#__PURE__*/react_default.a.createElement("span", {
    className: "fadein"
  }, text, " ", total, "%")));
};

Bar.defaultProps = {
  amount: 0,
  className: undefined,
  text: undefined,
  totalAmount: 100,
  vertical: false
};
Bar.propTypes = {
  amount: prop_types_default.a.number,
  className: prop_types_default.a.string,
  text: prop_types_default.a.string,
  totalAmount: prop_types_default.a.number,
  vertical: prop_types_default.a.bool
};
/* harmony default export */ var Bar_Bar = (Bar);
// EXTERNAL MODULE: ./src/components/Bar/bar.scss
var bar = __webpack_require__(366);

// CONCATENATED MODULE: ./src/components/Bar/index.js


/* harmony default export */ var components_Bar = (Bar_Bar);
// CONCATENATED MODULE: ./src/components/MainCube/Profile/Profile.jsx





const Profile = () => /*#__PURE__*/react_default.a.createElement(components_Section, {
  title: translate('profile.title'),
  className: "profile-section"
}, /*#__PURE__*/react_default.a.createElement("p", {
  className: ""
}, translate('profile.header')), /*#__PURE__*/react_default.a.createElement(components_Bar, {
  text: "React",
  amount: 80
}), /*#__PURE__*/react_default.a.createElement(components_Bar, {
  text: "React Native",
  amount: 50
}), /*#__PURE__*/react_default.a.createElement(components_Bar, {
  text: "HTML",
  amount: 75
}), /*#__PURE__*/react_default.a.createElement(components_Bar, {
  text: "CSS",
  amount: 85
}), /*#__PURE__*/react_default.a.createElement(components_Bar, {
  text: "Node",
  amount: 60
}), /*#__PURE__*/react_default.a.createElement(components_Bar, {
  text: "Mongo",
  amount: 70
}), /*#__PURE__*/react_default.a.createElement(components_Bar, {
  text: "Angular",
  amount: 40
}), /*#__PURE__*/react_default.a.createElement(components_Bar, {
  text: "Java",
  amount: 60
}));

/* harmony default export */ var Profile_Profile = (Profile);
// EXTERNAL MODULE: ./src/components/MainCube/Profile/profile.scss
var Profile_profile = __webpack_require__(368);

// CONCATENATED MODULE: ./src/components/MainCube/Profile/index.js


/* harmony default export */ var MainCube_Profile = (Profile_Profile);
// CONCATENATED MODULE: ./src/components/MainCube/MainCube.jsx
function MainCube_slicedToArray(arr, i) { return MainCube_arrayWithHoles(arr) || MainCube_iterableToArrayLimit(arr, i) || MainCube_unsupportedIterableToArray(arr, i) || MainCube_nonIterableRest(); }

function MainCube_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MainCube_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MainCube_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MainCube_arrayLikeToArray(o, minLen); }

function MainCube_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function MainCube_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MainCube_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







const MainCube_getSize = () => {
  const _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth;
  return (innerWidth > innerHeight ? innerHeight : innerWidth) * 0.8;
};

const MainCube_size = MainCube_getSize();

const MainCube = ({
  hiddenIntro
}) => {
  const _useState = Object(react["useState"])(true),
        _useState2 = MainCube_slicedToArray(_useState, 2),
        initialTransition = _useState2[0],
        setInitialTransition = _useState2[1];

  Object(react["useEffect"])(() => {
    if (hiddenIntro) {
      setTimeout(() => setInitialTransition(false), 1500);
    }
  }, [hiddenIntro]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    id: "main-cube",
    className: hiddenIntro ? '' : 'hidden-cube'
  }, /*#__PURE__*/react_default.a.createElement(components_Cube, {
    className: initialTransition ? 'initial-transition' : '',
    leftContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "FORMACION"
    }),
    frontContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(MainCube_Profile, null),
    rightContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "TRAYECTORIA"
    }),
    backContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "SOCIAL"
    }),
    bottomContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "Made by Javier Garc\xEDa Fajardo",
      disabled: true
    }),
    topContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "Hello :)",
      disabled: true
    }),
    size: MainCube_size,
    withSwipe: true
  }));
};

MainCube.defaultProps = {
  hiddenIntro: false
};
MainCube.propTypes = {
  hiddenIntro: prop_types_default.a.bool
};
/* harmony default export */ var MainCube_MainCube = (MainCube);
// EXTERNAL MODULE: ./src/components/MainCube/mainCube.scss
var mainCube = __webpack_require__(370);

// CONCATENATED MODULE: ./src/components/MainCube/index.js


/* harmony default export */ var components_MainCube = (MainCube_MainCube);
// CONCATENATED MODULE: ./src/pages/Main.jsx
function Main_slicedToArray(arr, i) { return Main_arrayWithHoles(arr) || Main_iterableToArrayLimit(arr, i) || Main_unsupportedIterableToArray(arr, i) || Main_nonIterableRest(); }

function Main_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Main_arrayLikeToArray(o, minLen); }

function Main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function Main_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Main_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






const Main = () => {
  const _useState = Object(react["useState"])(false),
        _useState2 = Main_slicedToArray(_useState, 2),
        hiddenIntro = _useState2[0],
        setHiddenIntro = _useState2[1];

  return /*#__PURE__*/react_default.a.createElement("main", null, /*#__PURE__*/react_default.a.createElement("div", {
    id: "main-container",
    className: "fadein"
  }, /*#__PURE__*/react_default.a.createElement(components_Navbar, null), /*#__PURE__*/react_default.a.createElement(components_Hi, {
    onHide: () => setHiddenIntro(true)
  }), /*#__PURE__*/react_default.a.createElement(components_MainCube, {
    hiddenIntro: hiddenIntro
  }), /*#__PURE__*/react_default.a.createElement("div", {
    id: "selected-section"
  })));
};

/* harmony default export */ var pages_Main = (Main);
// CONCATENATED MODULE: ./src/App.jsx




const App = () => /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, /*#__PURE__*/react_default.a.createElement(pages_Main, null));

/* harmony default export */ var src_App = (App);
// EXTERNAL MODULE: ./src/styles/animations.scss
var animations = __webpack_require__(374);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(376);

// CONCATENATED MODULE: ./src/index.js





react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9zZWN0aW9uLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL3NlY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3M/MmM4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvUHJvZmlsZS9wcm9maWxlLnNjc3M/YjBhNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL3Byb2ZpbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9tYWluQ3ViZS5zY3NzPzIxYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvbWFpbkN1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcz8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL0N1YmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvSGkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2xhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9CYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvTWFpbkN1YmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQ1VCRV9GQUNFUyIsImZyb250IiwiYmFjayIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImlzQXJyb3dMZWZ0IiwiY29kZSIsImtleSIsImtleUNvZGUiLCJpc0Fycm93VXAiLCJpc0Fycm93UmlnaHQiLCJpc0Fycm93RG93biIsIkN1YmUiLCJiYWNrQ29udGVudCIsImJvdHRvbUNvbnRlbnQiLCJjbGFzc05hbWUiLCJmYWNlIiwiZnJvbnRDb250ZW50IiwibGVmdENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJzaXplIiwidG9wQ29udGVudCIsIndpdGhTd2lwZSIsInVzZVN0YXRlIiwiYW5nWCIsInNldEFuZ1giLCJhbmdZIiwic2V0QW5nWSIsIm1vdmluZyIsInNldE1vdmluZyIsInN0YXJ0WCIsInNldFN0YXJ0WCIsInN0YXJ0WSIsInNldFN0YXJ0WSIsImhhbmRsZUtleURvd24iLCJldmVudCIsInVzZUVmZmVjdCIsIngiLCJ5Iiwic2V0VGltZW91dCIsImhhbmRsZU1vdmVtZW50IiwicHJldmVudERlZmF1bHQiLCJjbGllbnRYIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRZIiwiZGlmZlgiLCJkaWZmWSIsIk1hdGgiLCJhYnMiLCJoYW5kbGVNb3ZlbWVudFN0YXJ0IiwidG91Y2hlcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwicGVyc3BlY3RpdmUiLCJ0cmFuc2Zvcm0iLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwibnVtYmVyIiwiYm9vbCIsImdldFNpemUiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJmbG9vciIsImNvbnRlbnQiLCJ1bmFuaW1hdGVkRGl2IiwiY29sb3IiLCJjdWJlT3B0aW9ucyIsIkhpIiwib25IaWRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwiaGlkZGVuIiwic2V0SGlkZGVuIiwic2hvdyIsImdldFJhbmRvbUN1YmUiLCJyYW5kb20iLCJmdW5jIiwiTmF2YmFyIiwiSWNvbiIsImljb24iLCJyZXN0IiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiU2VjdGlvbiIsImRpc2FibGVkIiwidGl0bGUiLCJmYWRlb3V0Iiwic2V0RmFkZW91dCIsImZ1bGxzY3JlZW4iLCJzZXRGdWxsc2NyZWVuIiwiY3JlYXRlUG9ydGFsIiwiYm9keSIsInRyYW5zbGF0aW9ucyIsInByb2ZpbGUiLCJlcyIsImVuIiwiTEFOR19JRFMiLCJlbmdsaXNoIiwic3BhbmlzaCIsInNldExvY2FsZSIsImxhbmciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0TG9jYWxlIiwibGFuZ3VhZ2UiLCJpc1NwYW5pc2giLCJyZXNvbHZlSW5kZXgiLCJzdHIiLCJyZXBsYWNlIiwiYXJyYXkiLCJzcGxpdCIsInRyYW5zbGF0aW9uc0xhbmciLCJpIiwibGVuZ3RoIiwiZWxlbSIsInRyYW5zbGF0ZSIsIkxBTkdVQUdFUyIsIm5hbWUiLCJ2YWx1ZSIsIkJBUl9UWVBFUyIsInByaW1hcnlEYXJrZXIiLCJwcmltYXJ5RGFyayIsInByaW1hcnkiLCJzZWNvbmRhcnlEYXJrZXIiLCJzZWNvbmRhcnlEYXJrIiwic2Vjb25kYXJ5IiwiYWNjZW50RGFya2VyIiwiYWNjZW50RGFyayIsImFjY2VudCIsImdldFRvdGFsIiwidG90YWwiLCJhbW91bnQiLCJnZXRDb2xvciIsIkJhciIsInRvdGFsQW1vdW50IiwidmVydGljYWwiLCJzZXRDb2xvciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwic2V0VG90YWwiLCJuZXd0b3RhbCIsIlByb2ZpbGUiLCJNYWluQ3ViZSIsImhpZGRlbkludHJvIiwiaW5pdGlhbFRyYW5zaXRpb24iLCJzZXRJbml0aWFsVHJhbnNpdGlvbiIsIk1haW4iLCJzZXRIaWRkZW5JbnRybyIsIkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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RUFBeUJsSCxRQUFRLENBQUNtSCxjQUFULENBQXdCLE1BQXhCLENBQXpCLEUiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzE0NSwxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3ViZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3ViZS1jb250YWluZXIgLmN1YmV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNpdGlvbjplYXNlLWluIGFsbCAuNXN9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZT4qe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1yaWdodHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWJhY2t7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtbGVmdHt0cmFuc2Zvcm06cm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtdG9we3RyYW5zZm9ybTpyb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYm90dG9te3RyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCl9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGkuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpLWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO3otaW5kZXg6MTAwMX0uaGktY29udGFpbmVyIGgxe2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTUlO2ZvbnQtc2l6ZToyMHB4fS5oaS1jb250YWluZXIgaDEgc3Bhbi5wcmltYXJ5e2NvbG9yOiNiNzFkMmI7Zm9udC1zaXplOjMycHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnByaW1hcnkgc3Bhbntmb250LXNpemU6MjBweDtmb250LXdlaWdodDozMDB9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnNlY29uZGFyeXtjb2xvcjojNzhiNmE5O2ZvbnQtc2l6ZToyNHB4fS5oaS1jb250YWluZXIgLmhpe2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTIwMHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21hcmdpbjo0cHggMH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyPmRpdj4qe21hcmdpbjowIDRweH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC53aGl0ZS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjhweDtvdmVyZmxvdzpoaWRkZW59LmhpLWNvbnRhaW5lci5oaWRkZW57b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmhpLWNvbnRhaW5lci5oaWRkZW4gKntwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXsuaGktY29udGFpbmVyIGgxe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJuYXYubmF2YmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6OTAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7aGVpZ2h0OjYwcHg7cGFkZGluZzowIDE2cHh9bmF2Lm5hdmJhciAuZXhwYW5kLWJ0bntkaXNwbGF5Om5vbmV9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7bWF4LXdpZHRoOjEyMDBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MzJweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiNmZmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZSBzcGFue2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjMwMH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxle2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjMwMDtmb250LXN0eWxlOml0YWxpY31uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxlIHNwYW57Y29sb3I6I2U5YmJiZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MjBweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxlIHNwYW57Zm9udC1zaXplOjEycHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZXtmb250LXNpemU6MTJweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxlIHNwYW57Zm9udC1zaXplOjE0cHh9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1pY29ue21hcmdpbjowO2hlaWdodDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20tYnRue3BhZGRpbmc6OHB4IDE2cHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXM7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfS5jdXN0b20tYnRuPio6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlY3Rpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1YmUtc2VjdGlvbnttYXJnaW46MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODtjb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6MTZweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47b3ZlcmZsb3c6aGlkZGVufS5jdWJlLXNlY3Rpb24+ZGl2e3dpZHRoOmNhbGMoMTAwJSAtIDY0cHgpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtwYWRkaW5nOjMycHg7b3ZlcmZsb3c6aGlkZGVufS5jdWJlLXNlY3Rpb24+ZGl2IGgye21hcmdpbjowO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uY3ViZS1zZWN0aW9uIC5zZWUtbW9yZS1idG57aGVpZ2h0OjIwJTt3aWR0aDoxMDAlO2FsaWduLXNlbGY6Y2VudGVyO2JvcmRlci1yYWRpdXM6MH0uY3ViZS1zZWN0aW9uLWZ1bGx7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmY7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4Ojk5OTt0cmFuc2l0aW9uOmxpbmVhciBhbGwgMXM7Ym9yZGVyLXJhZGl1czowfS5jdWJlLXNlY3Rpb24tZnVsbD5kaXZ7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDttYXgtd2lkdGg6MTIwMHB4fS5jdWJlLXNlY3Rpb24tZnVsbD5kaXYgLmNsb3NlLWJ0bntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxNnB4O3RvcDoxNnB4O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5iYXItdG90YWx7YmFja2dyb3VuZC1jb2xvcjpzaWx2ZXI7Ym9yZGVyLXJhZGl1czo0cHg7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleH0uYmFyLXRvdGFsIC5iYXJ7cGFkZGluZzo0cHggMDt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzfS5iYXItdG90YWwgLmJhcj5zcGFue21hcmdpbi1sZWZ0OjhweDt3aGl0ZS1zcGFjZTpub3dyYXB9LmJhci10b3RhbCAuYmFyLnByaW1hcnktZGFya2Vye2JhY2tncm91bmQtY29sb3I6IzkwMGExMH0uYmFyLXRvdGFsIC5iYXIucHJpbWFyeS1kYXJre2JhY2tncm91bmQtY29sb3I6I2E3MTUyMH0uYmFyLXRvdGFsIC5iYXIucHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmJ9LmJhci10b3RhbCAuYmFyLnNlY29uZGFyeS1kYXJrZXJ7YmFja2dyb3VuZC1jb2xvcjojNDg4ZTdlfS5iYXItdG90YWwgLmJhci5zZWNvbmRhcnktZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiM2NWE2OTh9LmJhci10b3RhbCAuYmFyLnNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YTl9LmJhci10b3RhbCAuYmFyLmFjY2VudC1kYXJrZXJ7YmFja2dyb3VuZC1jb2xvcjojZThiMzYxfS5iYXItdG90YWwgLmJhci5hY2NlbnQtZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiNlZWM0N2R9LmJhci10b3RhbCAuYmFyLmFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmQwOTB9LmJhci10b3RhbC52ZXJ0aWNhbHttaW4taGVpZ2h0OjEwMHB4O3dpZHRoOjMycHg7aGVpZ2h0OjEwMCU7YWxpZ24taXRlbXM6ZmxleC1lbmR9LmJhci10b3RhbC52ZXJ0aWNhbCAuYmFye3dpZHRoOjEwMCV9LmJhci10b3RhbC52ZXJ0aWNhbCAuYmFyPnNwYW57d3JpdGluZy1tb2RlOnRiLXJsO3RyYW5zZm9ybTpyb3RhdGUoLTE4MGRlZyl9LmJhci10b3RhbC5ob3Jpem9udGFse2hlaWdodDozMnB4O21pbi13aWR0aDoxMDBweDt3aWR0aDoxMDAlfS5iYXItdG90YWwuaG9yaXpvbnRhbCAuYmFye2hlaWdodDoxMDAlfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2ZpbGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2ZpbGUtc2VjdGlvbj5kaXYgLmJhci10b3RhbHttYXJnaW46OHB4IDB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbkN1YmUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW4tY3ViZSAuY3ViZS1jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIDFzIC4yNXN9I21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZXtib3JkZXItcmFkaXVzOjE2cHh9I21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZSAqey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0jbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lci5pbml0aWFsLXRyYW5zaXRpb24gLmN1YmV7dHJhbnNpdGlvbjplYXNlLWluLW91dCBhbGwgMXMgLjI1c30jbWFpbi1jdWJlLmhpZGRlbi1jdWJlIC5jdWJlLWNvbnRhaW5lcnt0cmFuc2Zvcm06c2NhbGUoMCkgcm90YXRlWigyNzBkZWcpfSNtYWluLWN1YmUuaGlkZGVuLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJle3RyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZykgIWltcG9ydGFudH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYWRlaW57LXdlYmtpdC1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1vei1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1zLWFuaW1hdGlvbjpmYWRlaW4gMC41czstby1hbmltYXRpb246ZmFkZWluIDAuNXM7YW5pbWF0aW9uOmZhZGVpbiAwLjVzfUBrZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tb3ota2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW1zLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW8ta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fS5mYWRlb3V0ey13ZWJraXQtYW5pbWF0aW9uOmZhZGVvdXQgMC41czstbW96LWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7LW1zLWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7LW8tYW5pbWF0aW9uOmZhZGVvdXQgMC41czthbmltYXRpb246ZmFkZW91dCAwLjVzO29wYWNpdHk6MH1Aa2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALW1vei1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC1tcy1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtby1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7Zm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowO2NvbG9yOiMwODA4MDg7LXdlYmtpdC1mb250LXNtb290aGluZzpzdWJwaXhlbC1hbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzphdXRvfS5zaGFkb3csbWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZXstd2Via2l0LWJveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSk7LW1vei1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpO2JveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSl9aHRtbHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmZ9bWFpbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbn1tYWluICNtYWluLWNvbnRhaW5lcntwYWRkaW5nLXRvcDo2MHB4O3dpZHRoOjEwMCU7aGVpZ2h0OmNhbGMoMTAwdmggLSA2MHB4KTtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ1VCRV9GQUNFUyA9IHtcbiAgZnJvbnQ6ICdmcm9udCcsXG4gIGJhY2s6ICdiYWNrJyxcbiAgbGVmdDogJ2xlZnQnLFxuICByaWdodDogJ3JpZ2h0JyxcbiAgdG9wOiAndG9wJyxcbiAgYm90dG9tOiAnYm90dG9tJyxcbn07XG5cbmNvbnN0IGlzQXJyb3dMZWZ0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM3ID09PSBrZXlDb2RlIHx8ICdBcnJvd0xlZnQnID09PSBjb2RlIHx8ICdBcnJvd0xlZnQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93VXAgPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gMzggPT09IGtleUNvZGUgfHwgJ0Fycm93VXAnID09PSBjb2RlIHx8ICdBcnJvd1VwJyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd1JpZ2h0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM5ID09PSBrZXlDb2RlIHx8ICdBcnJvd1JpZ2h0JyA9PT0gY29kZSB8fCAnQXJyUmlnaHQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93RG93biA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiA0MCA9PT0ga2V5Q29kZSB8fCAnQXJyb3dEb3duJyA9PT0gY29kZSB8fCAnQXJyb3dEb3duJyA9PT0ga2V5O1xuXG5jb25zdCBDdWJlID0gKHtcbiAgYmFja0NvbnRlbnQsXG4gIGJvdHRvbUNvbnRlbnQsXG4gIGNsYXNzTmFtZSxcbiAgZmFjZSxcbiAgZnJvbnRDb250ZW50LFxuICBsZWZ0Q29udGVudCxcbiAgcmlnaHRDb250ZW50LFxuICBzaXplLFxuICB0b3BDb250ZW50LFxuICB3aXRoU3dpcGUsXG59KSA9PiB7XG4gIGNvbnN0IFsgYW5nWCwgc2V0QW5nWCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgYW5nWSwgc2V0QW5nWSBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgbW92aW5nLCBzZXRNb3ZpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBzdGFydFgsIHNldFN0YXJ0WCBdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFsgc3RhcnRZLCBzZXRTdGFydFkgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIW1vdmluZyAmJiBpc0Fycm93TGVmdChldmVudCkpIHtcbiAgICAgIHNldEFuZ1koYW5nWSArIDkwKTtcbiAgICB9IGVsc2UgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd1VwKGV2ZW50KSkge1xuICAgICAgc2V0QW5nWChhbmdYIC0gOTApO1xuICAgIH0gZWxzZSBpZiAoIW1vdmluZyAmJiBpc0Fycm93UmlnaHQoZXZlbnQpKSB7XG4gICAgICBzZXRBbmdZKGFuZ1kgLSA5MCk7XG4gICAgfSBlbHNlIGlmICghbW92aW5nICYmIGlzQXJyb3dEb3duKGV2ZW50KSkge1xuICAgICAgc2V0QW5nWChhbmdYICsgOTApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG5cbiAgICBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5mcm9udCkge1xuICAgICAgeSA9IDA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJhY2spIHtcbiAgICAgIHkgPSAtMTgwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5sZWZ0KSB7XG4gICAgICB5ID0gOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLnJpZ2h0KSB7XG4gICAgICB5ID0gLTkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy50b3ApIHtcbiAgICAgIHggPSAtOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJvdHRvbSkge1xuICAgICAgeCA9IDkwO1xuICAgIH1cblxuICAgIHNldEFuZ1goeCk7XG4gICAgc2V0QW5nWSh5KTtcbiAgfSwgWyBmYWNlIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhcnRYKG51bGwpO1xuICAgIHNldFN0YXJ0WShudWxsKTtcbiAgICBzZXRNb3ZpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRNb3ZpbmcoZmFsc2UpLCA1MDApO1xuICB9LCBbIGFuZ1gsIGFuZ1kgXSk7XG5cbiAgY29uc3QgaGFuZGxlTW92ZW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbW92aW5nICYmIChzdGFydFggfHwgc3RhcnRZKSkge1xuICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50Py5jaGFuZ2VkVG91Y2hlcz8uWzBdPy5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFg7XG4gICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQ/LmNoYW5nZWRUb3VjaGVzPy5bMF0/LmNsaWVudFkgfHwgZXZlbnQuY2xpZW50WTtcblxuICAgICAgY29uc3QgZGlmZlggPSBjbGllbnRYIC0gc3RhcnRYO1xuICAgICAgY29uc3QgZGlmZlkgPSBjbGllbnRZIC0gc3RhcnRZO1xuXG4gICAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWCkpIHtcbiAgICAgICAgLy8gaG9yaXpvbnRhbCBzd2lwZVxuICAgICAgICBzZXRBbmdZKDAgPCBkaWZmWCA/IGFuZ1kgKyA5MCA6IGFuZ1kgLSA5MCk7XG4gICAgICB9XG4gICAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWSkpIHtcbiAgICAgICAgLy8gdmVydGljYWwgc3dpcGVcbiAgICAgICAgc2V0QW5nWCgwIDwgZGlmZlkgPyBhbmdYIC0gOTAgOiBhbmdYICsgOTApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudFN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2xpZW50WCA9IGV2ZW50Py50b3VjaGVzPy5bMF0/LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WDtcbiAgICBjb25zdCBjbGllbnRZID0gZXZlbnQ/LnRvdWNoZXM/LlswXT8uY2xpZW50WSB8fCBldmVudC5jbGllbnRZO1xuXG4gICAgc2V0U3RhcnRYKGNsaWVudFgpO1xuICAgIHNldFN0YXJ0WShjbGllbnRZKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcblxuICAgIGlmICh3aXRoU3dpcGUpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3ZlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3ZlbWVudCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjdWJlLWNvbnRhaW5lciR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBlcnNwZWN0aXZlOiBzaXplICogMyxcbiAgICAgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjdWJlXCJcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWigtJHtzaXplIC8gMn1weCkgcm90YXRlWCgke2FuZ1h9ZGVnKSByb3RhdGVZKCR7YW5nWX1kZWcpYCB9fVxuICAgICAgICBvbk1vdXNlRG93bj17d2l0aFN3aXBlID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Nb3VzZVVwPXt3aXRoU3dpcGUgPyBoYW5kbGVNb3ZlbWVudCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Ub3VjaEVuZD17d2l0aFN3aXBlID8gaGFuZGxlTW92ZW1lbnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uVG91Y2hTdGFydD17d2l0aFN3aXBlID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1mcm9udFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtmcm9udENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYmFja1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDE4MGRlZykgcm90YXRlWigxODBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtiYWNrQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1yaWdodFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7cmlnaHRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWxlZnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtsZWZ0Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS10b3BcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3RvcENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYm90dG9tXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7Ym90dG9tQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrQ29udGVudDogdW5kZWZpbmVkLFxuICBib3R0b21Db250ZW50OiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBmYWNlOiBDVUJFX0ZBQ0VTLmZyb250LFxuICBmcm9udENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgbGVmdENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgcmlnaHRDb250ZW50OiB1bmRlZmluZWQsXG4gIHNpemU6IDE1MCxcbiAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICB3aXRoU3dpcGU6IGZhbHNlLFxufTtcblxuQ3ViZS5wcm9wVHlwZXMgPSB7XG4gIGJhY2tDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgYm90dG9tQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmFjZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQ1VCRV9GQUNFUykpLFxuICBmcm9udENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBsZWZ0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHJpZ2h0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvcENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICB3aXRoU3dpcGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsImltcG9ydCBDdWJlIGZyb20gJy4vQ3ViZSc7XG5pbXBvcnQgJy4vY3ViZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEN1YmUgZnJvbSAnLi4vQ3ViZSc7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vQ3ViZS9DdWJlJztcblxuY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gIHJldHVybiBNYXRoLmZsb29yKCgoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0ID8gaW5uZXJIZWlnaHQgOiBpbm5lcldpZHRoKSAqIDAuNykgLyAxMCk7XG59O1xuXG5jb25zdCBjb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1iYWNrZ3JvdW5kXCIgLz47XG5jb25zdCBzaXplID0gZ2V0U2l6ZSgpO1xuY29uc3QgdW5hbmltYXRlZERpdiA9IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSwgY29sb3I6ICdibGFjaycgfX0gLz47XG5cbmNvbnN0IGN1YmVPcHRpb25zID0ge1xuICBib3R0b21Db250ZW50OiBjb250ZW50LFxuICBsZWZ0Q29udGVudDogY29udGVudCxcbiAgcmlnaHRDb250ZW50OiBjb250ZW50LFxuICB0b3BDb250ZW50OiBjb250ZW50LFxufTtcblxuY29uc3QgSGkgPSAoeyBvbkhpZGUgfSkgPT4ge1xuICBjb25zdCBbIGFuaW1hdGlvbiwgc2V0QW5pbWF0aW9uIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgaGlkZGVuLCBzZXRIaWRkZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFuaW1hdGlvbih0cnVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QW5pbWF0aW9uKGZhbHNlKSwgMjAwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRIaWRkZW4odHJ1ZSksIDI1MDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBvbkhpZGUpIHtcbiAgICAgIG9uSGlkZSgpO1xuICAgIH1cbiAgfSwgWyBoaWRkZW4gXSk7XG5cbiAgY29uc3Qgc2hvdyA9IGFuaW1hdGlvbiAmJiAhaGlkZGVuO1xuXG4gIGNvbnN0IGdldFJhbmRvbUN1YmUgPSAoKSA9PiB7XG4gICAgbGV0IGZhY2UgPSBDVUJFX0ZBQ0VTLmZyb250O1xuXG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXG4gICAgICBmYWNlID0gWyBDVUJFX0ZBQ0VTLmJvdHRvbSwgQ1VCRV9GQUNFUy5sZWZ0LCBDVUJFX0ZBQ0VTLnJpZ2h0LCBDVUJFX0ZBQ0VTLnRvcCBdW251bWJlcl07XG4gICAgfVxuXG4gICAgcmV0dXJuIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e2ZhY2V9IHsuLi5jdWJlT3B0aW9uc30gLz47XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhpLWNvbnRhaW5lciR7aGlkZGVuID8gJyBoaWRkZW4nIDogJyd9YH0+XG4gICAgICA8aDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaW1hcnlcIj5cbiAgICAgICAgICBNeSBDPHNwYW4+dTwvc3Bhbj5WPHNwYW4+ZTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgIGJ5IDxzcGFuIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPkphdmllciBHYXJjw61hPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGkuZGVmYXVsdFByb3BzID0ge1xuICBvbkhpZGU6IHVuZGVmaW5lZCxcbn07XG5cbkhpLnByb3BUeXBlcyA9IHtcbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpO1xuIiwiaW1wb3J0IEhpIGZyb20gJy4vSGknO1xuaW1wb3J0ICcuL2hpLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBIaTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc2hhZG93XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItdGl0bGVcIj5cbiAgICAgICAgTXkgQzxzcGFuPnU8L3NwYW4+VjxzcGFuPmU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN1YnRpdGxlXCI+XG4gICAgICAgIGJ5IDxzcGFuPkphdmkgR2FyY8OtYSBGYWphcmRvPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgJy4vbmF2YmFyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSWNvbiA9ICh7IGljb24sIC4uLnJlc3QgfSkgPT4gPGkgey4uLnJlc3R9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT17aWNvbn0gLz47XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBpY29uOiB1bmRlZmluZWQsXG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0ICcuL2ljb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpY29uLCB0ZXh0LCAuLi5yZXN0IH0pID0+IChcbiAgPGJ1dHRvbiBjbGFzc05hbWU9e2BjdXN0b20tYnRuJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfSB0eXBlPVwiYnV0dG9uXCIgey4uLnJlc3R9PlxuICAgIHtpY29uICYmIDxJY29uIGljb249e2ljb259IC8+fVxuICAgIHt0ZXh0ICYmIDxzcGFuPnt0ZXh0fTwvc3Bhbj59XG4gICAge2NoaWxkcmVufVxuICA8L2J1dHRvbj5cbik7XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIHRleHQ6IHVuZGVmaW5lZCxcbn07XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgJy4vYnV0dG9uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIHRpdGxlIH0pID0+IHtcbiAgY29uc3QgWyBmYWRlb3V0LCBzZXRGYWRlb3V0IF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgZnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZhZGVvdXQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RnVsbHNjcmVlbihmYWxzZSksIDQwMCk7XG4gICAgfVxuICB9LCBbIGZhZGVvdXQgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWZ1bGxzY3JlZW4pIHtcbiAgICAgIHNldEZhZGVvdXQoZmFsc2UpO1xuICAgIH1cbiAgfSwgWyBmdWxsc2NyZWVuIF0pO1xuXG4gIHJldHVybiBmdWxsc2NyZWVuID8gKFxuICAgIGNyZWF0ZVBvcnRhbChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY3ViZS1zZWN0aW9uIGN1YmUtc2VjdGlvbi1mdWxsICR7ZmFkZW91dCA/ICdmYWRlb3V0JyA6ICdmYWRlaW4nfSR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3ViZS1zZWN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aXRsZSAmJiA8aDI+e3RpdGxlfTwvaDI+fVxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnRuXCIgaWNvbj1cImZhcyBmYS10aW1lc1wiIG9uQ2xpY2s9eygpID0+IHNldEZhZGVvdXQodHJ1ZSl9IC8+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PixcbiAgICAgIGRvY3VtZW50LmJvZHksXG4gICAgKVxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgY3ViZS1zZWN0aW9uIGZhZGVpbiR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gb25Eb3VibGVDbGljaz17KCkgPT4gIWRpc2FibGVkICYmIHNldEZ1bGxzY3JlZW4odHJ1ZSl9PlxuICAgICAgPGRpdj5cbiAgICAgICAge3RpdGxlICYmIDxoMj57dGl0bGV9PC9oMj59XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPVwic2VlLW1vcmUtYnRuXCIgaWNvbj1cImZhcyBmYS1wbHVzXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbHNjcmVlbih0cnVlKX0gLz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbn07XG5cblNlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0ICcuL3NlY3Rpb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgcHJvZmlsZSBmcm9tICcuL2VzL3Byb2ZpbGUuanNvbic7XHJcblxyXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XHJcbiAgcHJvZmlsZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0aW9ucztcclxuIiwiaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi9lbi9wcm9maWxlLmpzb24nO1xyXG5cclxuY29uc3QgdHJhbnNsYXRpb25zID0ge1xyXG4gIHByb2ZpbGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGlvbnM7XHJcbiIsImltcG9ydCBlcyBmcm9tICcuL2VzJztcclxuaW1wb3J0IGVuIGZyb20gJy4vZW4nO1xyXG5cclxuY29uc3QgdHJhbnNsYXRpb25zID0geyBlcywgZW4gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HX0lEUyA9IHtcclxuICBlbmdsaXNoOiAnZW4nLFxyXG4gIHNwYW5pc2g6ICdlcycsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlID0gKGxhbmcpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCBsYW5nKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhbGUgPSAoKSA9PiB7XHJcbiAgaWYgKCFsb2NhbFN0b3JhZ2UubGFuZ3VhZ2UpIHtcclxuICAgIHJldHVybiBMQU5HX0lEUy5zcGFuaXNoO1xyXG4gIH1cclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmxhbmd1YWdlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3BhbmlzaCA9ICgpID0+IExBTkdfSURTLnNwYW5pc2ggPT09IGdldExvY2FsZSgpO1xyXG5cclxuLyoqXHJcbiAqIFJlc29sdmVzIGEgc3RyaW5nICdpbmRleCcgZm9yIHRoZSBKYXZhU2NyaXB0IE9iamVjdFxyXG4gKi9cclxuY29uc3QgcmVzb2x2ZUluZGV4ID0gKHN0cikgPT4ge1xyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cXFsoXFx3KylcXF0vZywgJy4kMScpOyAvLyBjb252ZXJ0IGluZGV4ZXMgdG8gcHJvcGVydGllc1xyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9eXFwuLywgJycpOyAvLyBzdHJpcCBhIGxlYWRpbmcgZG90XHJcbiAgY29uc3QgYXJyYXkgPSBzdHIuc3BsaXQoJy4nKTtcclxuXHJcbiAgbGV0IHRyYW5zbGF0aW9uc0xhbmcgPSB0cmFuc2xhdGlvbnNbZ2V0TG9jYWxlKCldO1xyXG5cclxuICBmb3IgKGxldCBpID0gMCwgeyBsZW5ndGggfSA9IGFycmF5OyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIHRyYW5zbGF0aW9uc0xhbmcgJiYgZWxlbSBpbiB0cmFuc2xhdGlvbnNMYW5nKSB7XHJcbiAgICAgIHRyYW5zbGF0aW9uc0xhbmcgPSB0cmFuc2xhdGlvbnNMYW5nW2VsZW1dO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cmFuc2xhdGlvbnNMYW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZSA9IChrZXkpID0+IHJlc29sdmVJbmRleChrZXkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcclxuICB7IG5hbWU6IHRyYW5zbGF0ZSgnbGFuZ3VhZ2UuZXMnKSwgdmFsdWU6ICdlcycgfSxcclxuICB7IG5hbWU6IHRyYW5zbGF0ZSgnbGFuZ3VhZ2UuZW4nKSwgdmFsdWU6ICdlbicgfSxcclxuXTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEJBUl9UWVBFUyA9IHtcbiAgcHJpbWFyeURhcmtlcjogJ3ByaW1hcnktZGFya2VyJyxcbiAgcHJpbWFyeURhcms6ICdwcmltYXJ5LWRhcmsnLFxuICBwcmltYXJ5OiAncHJpbWFyeScsXG4gIHNlY29uZGFyeURhcmtlcjogJ3NlY29uZGFyeS1kYXJrZXInLFxuICBzZWNvbmRhcnlEYXJrOiAnc2Vjb25kYXJ5LWRhcmsnLFxuICBzZWNvbmRhcnk6ICdzZWNvbmRhcnknLFxuICBhY2NlbnREYXJrZXI6ICdhY2NlbnQtZGFya2VyJyxcbiAgYWNjZW50RGFyazogJ2FjY2VudC1kYXJrJyxcbiAgYWNjZW50OiAnYWNjZW50Jyxcbn07XG5cbmNvbnN0IGdldFRvdGFsID0gKHRvdGFsLCBhbW91bnQpID0+IChhbW91bnQgKiAxMDApIC8gdG90YWw7XG5jb25zdCBnZXRDb2xvciA9ICh0b3RhbCkgPT4ge1xuICBpZiAoMTAwID09PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMucHJpbWFyeURhcmtlcjtcbiAgfVxuICBpZiAoOTAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnByaW1hcnlEYXJrO1xuICB9XG4gIGlmICg3NSA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMucHJpbWFyeTtcbiAgfVxuICBpZiAoNjAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnNlY29uZGFyeURhcmtlcjtcbiAgfVxuICBpZiAoNTUgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnNlY29uZGFyeURhcms7XG4gIH1cbiAgaWYgKDQwIDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5zZWNvbmRhcnk7XG4gIH1cbiAgaWYgKDI1IDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5hY2NlbnREYXJrZXI7XG4gIH1cbiAgaWYgKDEwIDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5hY2NlbnREYXJrO1xuICB9XG4gIHJldHVybiBCQVJfVFlQRVMuYWNjZW50O1xufTtcblxuY29uc3QgQmFyID0gKHsgYW1vdW50LCBjbGFzc05hbWUsIHRleHQsIHRvdGFsQW1vdW50LCB2ZXJ0aWNhbCwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IFsgY29sb3IsIHNldENvbG9yIF0gPSB1c2VTdGF0ZShCQVJfVFlQRVMucHJpbWFyeSk7XG4gIGNvbnN0IFsgbW91bnRlZCwgc2V0TW91bnRlZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIHRvdGFsLCBzZXRUb3RhbCBdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW91bnRlZCkge1xuICAgICAgY29uc3QgbmV3dG90YWwgPSBnZXRUb3RhbCh0b3RhbEFtb3VudCwgYW1vdW50KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VG90YWwobmV3dG90YWwpLCA1MDApO1xuICAgICAgc2V0Q29sb3IoZ2V0Q29sb3IobmV3dG90YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFsgbW91bnRlZCBdKTtcblxuICB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgaWYgKG1vdW50ZWQpIHtcbiAgICAgIGNvbnN0IG5ld3RvdGFsID0gZ2V0VG90YWwodG90YWxBbW91bnQsIGFtb3VudCk7XG4gICAgICBzZXRUb3RhbChuZXd0b3RhbCk7XG4gICAgICBzZXRDb2xvcihnZXRDb2xvcihuZXd0b3RhbCkpO1xuICAgIH1cbiAgfSwgWyBhbW91bnQsIHRvdGFsQW1vdW50IF0pO1xuXG4gIHJldHVybiAoPGRpdlxuICAgIHsuLi5yZXN0fVxuICAgIGNsYXNzTmFtZT17YGJhci10b3RhbCBmYWRlaW4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfSAke3ZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ31gfVxuICA+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgYmFyICR7Y29sb3J9YH1cbiAgICAgIHN0eWxlPXt2ZXJ0aWNhbCA/IHsgaGVpZ2h0OiBgJHt0b3RhbH1gIH0gOiB7IHdpZHRoOiBgJHt0b3RhbH0lYCB9fVxuICAgID57bW91bnRlZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJmYWRlaW5cIj57dGV4dH0ge3RvdGFsfSU8L3NwYW4+fTwvZGl2PlxuICA8L2Rpdj4pO1xufTtcblxuQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYW1vdW50OiAwLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkLFxuICB0b3RhbEFtb3VudDogMTAwLFxuICB2ZXJ0aWNhbDogZmFsc2UsXG59O1xuXG5CYXIucHJvcFR5cGVzID0ge1xuICBhbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG90YWxBbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcjtcbiIsImltcG9ydCBCYXIgZnJvbSAnLi9CYXInO1xuaW1wb3J0ICcuL2Jhci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb24nO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdHJhbnNsYXRvcic7XG5pbXBvcnQgQmFyIGZyb20gJy4uLy4uL0Jhcic7XG5cbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiAoXG4gIDxTZWN0aW9uIHRpdGxlPXt0cmFuc2xhdGUoJ3Byb2ZpbGUudGl0bGUnKX0gY2xhc3NOYW1lPVwicHJvZmlsZS1zZWN0aW9uXCI+XG4gICAgPHAgY2xhc3NOYW1lPVwiXCI+e3RyYW5zbGF0ZSgncHJvZmlsZS5oZWFkZXInKX08L3A+XG4gICAgPEJhciB0ZXh0PVwiUmVhY3RcIiBhbW91bnQ9ezgwfSAvPlxuICAgIDxCYXIgdGV4dD1cIlJlYWN0IE5hdGl2ZVwiIGFtb3VudD17NTB9IC8+XG4gICAgPEJhciB0ZXh0PVwiSFRNTFwiIGFtb3VudD17NzV9IC8+XG4gICAgPEJhciB0ZXh0PVwiQ1NTXCIgYW1vdW50PXs4NX0gLz5cbiAgICA8QmFyIHRleHQ9XCJOb2RlXCIgYW1vdW50PXs2MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJNb25nb1wiIGFtb3VudD17NzB9IC8+XG4gICAgPEJhciB0ZXh0PVwiQW5ndWxhclwiIGFtb3VudD17NDB9IC8+XG4gICAgPEJhciB0ZXh0PVwiSmF2YVwiIGFtb3VudD17NjB9IC8+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnO1xuaW1wb3J0ICcuL3Byb2ZpbGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ3ViZSBmcm9tICcuLi9DdWJlJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9TZWN0aW9uJztcblxuY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gIHJldHVybiAoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0ID8gaW5uZXJIZWlnaHQgOiBpbm5lcldpZHRoKSAqIDAuODtcbn07XG5jb25zdCBzaXplID0gZ2V0U2l6ZSgpO1xuXG5jb25zdCBNYWluQ3ViZSA9ICh7IGhpZGRlbkludHJvIH0pID0+IHtcbiAgY29uc3QgWyBpbml0aWFsVHJhbnNpdGlvbiwgc2V0SW5pdGlhbFRyYW5zaXRpb24gXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZGRlbkludHJvKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEluaXRpYWxUcmFuc2l0aW9uKGZhbHNlKSwgMTUwMCk7XG4gICAgfVxuICB9LCBbIGhpZGRlbkludHJvIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1haW4tY3ViZVwiIGNsYXNzTmFtZT17aGlkZGVuSW50cm8gPyAnJyA6ICdoaWRkZW4tY3ViZSd9PlxuICAgICAgPEN1YmVcbiAgICAgICAgY2xhc3NOYW1lPXtpbml0aWFsVHJhbnNpdGlvbiA/ICdpbml0aWFsLXRyYW5zaXRpb24nIDogJyd9XG4gICAgICAgIGxlZnRDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8U2VjdGlvbiB0aXRsZT1cIkZPUk1BQ0lPTlwiIC8+fVxuICAgICAgICBmcm9udENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxQcm9maWxlIC8+fVxuICAgICAgICByaWdodENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxTZWN0aW9uIHRpdGxlPVwiVFJBWUVDVE9SSUFcIiAvPn1cbiAgICAgICAgYmFja0NvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxTZWN0aW9uIHRpdGxlPVwiU09DSUFMXCIgLz59XG4gICAgICAgIGJvdHRvbUNvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxTZWN0aW9uIHRpdGxlPVwiTWFkZSBieSBKYXZpZXIgR2FyY8OtYSBGYWphcmRvXCIgZGlzYWJsZWQgLz59XG4gICAgICAgIHRvcENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxTZWN0aW9uIHRpdGxlPVwiSGVsbG8gOilcIiBkaXNhYmxlZCAvPn1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgd2l0aFN3aXBlXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTWFpbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBoaWRkZW5JbnRybzogZmFsc2UsXG59O1xuXG5NYWluQ3ViZS5wcm9wVHlwZXMgPSB7XG4gIGhpZGRlbkludHJvOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5DdWJlO1xuIiwiaW1wb3J0IE1haW5DdWJlIGZyb20gJy4vTWFpbkN1YmUnO1xuaW1wb3J0ICcuL21haW5DdWJlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ3ViZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaSBmcm9tICcuLi9jb21wb25lbnRzL0hpJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IE1haW5DdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkN1YmUnO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbIGhpZGRlbkludHJvLCBzZXRIaWRkZW5JbnRybyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJmYWRlaW5cIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8SGkgb25IaWRlPXsoKSA9PiBzZXRIaWRkZW5JbnRybyh0cnVlKX0gLz5cbiAgICAgICAgPE1haW5DdWJlIGhpZGRlbkludHJvPXtoaWRkZW5JbnRyb30gLz5cbiAgICAgICAgPGRpdiBpZD1cInNlbGVjdGVkLXNlY3Rpb25cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPE1haW4gLz5cbiAgPC9Ccm93c2VyUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=