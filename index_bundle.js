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
/******/ 	deferredModules.push([143,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
module.exports = __webpack_require__(372);


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(31);
            var content = __webpack_require__(353);

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

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-container .cube{width:100%;height:100%;position:absolute;transform-style:preserve-3d;transition:ease-in all .5s}.cube-container .cube .cube-face{position:absolute;width:100%;height:100%;margin:0;background-color:#080808;color:#fff}.cube-container .cube .cube-face>*{height:100%;width:100%}.cube-container .cube .cube-front{transform:rotateY(0deg) translateZ(100px)}.cube-container .cube .cube-right{transform:rotateY(90deg) translateZ(100px)}.cube-container .cube .cube-back{transform:rotateY(180deg) translateZ(100px)}.cube-container .cube .cube-left{transform:rotateZ(180deg) rotateY(-90deg) translateZ(100px)}.cube-container .cube .cube-top{transform:rotateX(90deg) translateZ(100px)}.cube-container .cube .cube-bottom{transform:rotateX(-90deg) translateZ(100px)}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(31);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hi-container{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#080808;transition:linear all .5s;z-index:1001}.hi-container h1{color:#fff;text-align:center;width:95%;font-size:20px}.hi-container h1 span.primary{color:#b71d2b;font-size:32px}.hi-container h1 span.primary span{font-size:20px;font-weight:300}.hi-container h1 span.secondary{color:#78b6a9;font-size:24px}.hi-container .hi{display:flex;max-width:1200px}.hi-container .hi .letter{display:flex;flex-wrap:wrap}.hi-container .hi .letter>div{display:flex;flex-direction:row;justify-content:center;width:100%;margin:4px 0}.hi-container .hi .letter>div>*{margin:0 4px}.hi-container .hi .letter .white-background{background-color:#fff;border-radius:8px;overflow:hidden}.hi-container.hidden{opacity:0;pointer-events:none}.hi-container.hidden *{pointer-events:none}@media screen and (max-width: 768px){.hi-container h1{display:flex;flex-direction:column}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(31);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "nav.navbar{position:fixed;top:0;left:0;right:0;z-index:900;display:flex;align-items:center;justify-content:center;background-color:#b71d2b;height:60px;padding:0 16px}nav.navbar .expand-btn{display:none}nav.navbar .navbar-content{max-width:1200px;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between}nav.navbar .navbar-content .navbar-title{font-size:32px;font-weight:bold;color:#fff}nav.navbar .navbar-content .navbar-title span{font-size:20px;font-weight:300}nav.navbar .navbar-content .navbar-subtitle{font-size:16px;font-weight:300;font-style:italic}nav.navbar .navbar-content .navbar-subtitle span{color:#e9bbbf}@media screen and (max-width: 992px){nav.navbar .navbar-content{justify-content:center;flex-direction:column}nav.navbar .navbar-content .navbar-title{font-size:20px}nav.navbar .navbar-content .navbar-title span{font-size:12px}nav.navbar .navbar-content .navbar-subtitle{font-size:12px}nav.navbar .navbar-content .navbar-subtitle span{font-size:14px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(31);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-icon{margin:0;height:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(31);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-btn{padding:8px 16px;font-size:16px;border-radius:4px;border:0;color:#fff;background-color:#b71d2b;transition:linear all .25s;outline:0;cursor:pointer}.custom-btn>*:not(:first-child){margin-left:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(31);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-section{margin:0;height:100%;width:100%;background-color:#080808;color:#fff;cursor:pointer;border-radius:16px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;overflow:hidden}.cube-section>div{display:flex;align-items:flex-start;justify-content:flex-start;padding:32px;max-height:80%;overflow:hidden}.cube-section>div h2{margin:0}.cube-section .see-more-btn{height:20%;width:100%;align-self:center;border-radius:0}.cube-section-full{background-color:#080808;color:#fff;display:flex;align-items:flex-start;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;transition:linear all 1s}.cube-section-full>div{width:100%;display:flex;align-items:flex-start;justify-content:flex-start;max-width:1200px}.cube-section-full>div .close-btn{position:absolute;right:16px;top:16px;background-color:transparent}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(31);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#main-cube .cube-container{transform:scale(1);transition:ease-in-out all 1s .25s}#main-cube .cube-container .cube-face{border-radius:16px}#main-cube .cube-container .cube-face *{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#main-cube .cube-container.initial-transition .cube{transition:ease-in-out all 1s .25s}#main-cube.hidden-cube .cube-container{transform:scale(0) rotateZ(270deg)}#main-cube.hidden-cube .cube-container .cube{transform:rotateY(360deg) !important}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(31);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fadein{-webkit-animation:fadein 0.5s;-moz-animation:fadein 0.5s;-ms-animation:fadein 0.5s;-o-animation:fadein 0.5s;animation:fadein 0.5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.fadeout{-webkit-animation:fadeout 0.5s;-moz-animation:fadeout 0.5s;-ms-animation:fadeout 0.5s;-o-animation:fadeout 0.5s;animation:fadeout 0.5s;opacity:0}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-ms-keyframes fadeout{from{opacity:1}to{opacity:0}}@-o-keyframes fadeout{from{opacity:1}to{opacity:0}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(31);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{font-family:'Poppins', sans-serif;font-size:14px;margin:0;color:#080808;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow,main #main-container #main-cube .cube-container .cube-face{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);box-shadow:0px 0 8px 2px rgba(136,136,136,0.5)}html{background-color:#fafaff}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;overflow:hidden}main #main-container{padding-top:60px;width:100%;height:calc(100vh - 60px);overflow:auto;display:flex;align-items:center;justify-content:center;flex-direction:column}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 372:
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
var react_router_dom = __webpack_require__(142);

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
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
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

  const handleMovementStart = event => {
    var _event$touches, _event$touches$, _event$touches2, _event$touches2$;

    // const [ { clientX, clientY } ] = event.touches;
    const clientX = (event === null || event === void 0 ? void 0 : (_event$touches = event.touches) === null || _event$touches === void 0 ? void 0 : (_event$touches$ = _event$touches[0]) === null || _event$touches$ === void 0 ? void 0 : _event$touches$.clientX) || event.clientX;
    const clientY = (event === null || event === void 0 ? void 0 : (_event$touches2 = event.touches) === null || _event$touches2 === void 0 ? void 0 : (_event$touches2$ = _event$touches2[0]) === null || _event$touches2$ === void 0 ? void 0 : _event$touches2$.clientY) || event.clientY;
    setStartX(clientX);
    setStartY(clientY);
  };

  const handleMovement = event => {
    var _event$changedTouches, _event$changedTouches2, _event$changedTouches3, _event$changedTouches4;

    // const [ { clientX, clientY } ] = event.changedTouches;
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
  };

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
var cube = __webpack_require__(352);

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
var hi = __webpack_require__(354);

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
var navbar = __webpack_require__(356);

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
var Icon_icon = __webpack_require__(358);

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
var Button_button = __webpack_require__(360);

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
    className: "cube-section-full ".concat(fadeout ? 'fadeout' : 'fadein')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-section-container"
  }, title && /*#__PURE__*/react_default.a.createElement("h2", null, title), /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "close-btn",
    icon: "fas fa-times",
    onClick: () => setFadeout(true)
  }), children)), document.body) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-section fadein",
    onDoubleClick: () => !disabled && setFullscreen(true)
  }, /*#__PURE__*/react_default.a.createElement("div", null, title && /*#__PURE__*/react_default.a.createElement("h2", null, title), children));
};

Section.defaultProps = {
  children: undefined,
  disabled: false,
  title: undefined
};
Section.propTypes = {
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  disabled: prop_types_default.a.bool,
  title: prop_types_default.a.string
};
/* harmony default export */ var Section_Section = (Section);
// EXTERNAL MODULE: ./src/components/Section/section.scss
var section = __webpack_require__(362);

// CONCATENATED MODULE: ./src/components/Section/index.js


/* harmony default export */ var components_Section = (Section_Section);
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
    leftContent: /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "FORMACION"
    }),
    frontContent: /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "INFO"
    }),
    rightContent: /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "TRAYECTORIA"
    }),
    backContent: /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "SOCIAL"
    }),
    bottomContent: /*#__PURE__*/react_default.a.createElement(components_Section, {
      title: "Made by Javier Garc\xEDa Fajardo",
      disabled: true
    }),
    topContent: /*#__PURE__*/react_default.a.createElement(components_Section, {
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
var mainCube = __webpack_require__(364);

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
var animations = __webpack_require__(368);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(370);

// CONCATENATED MODULE: ./src/index.js





react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9zZWN0aW9uLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL3NlY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9tYWluQ3ViZS5zY3NzPzIxYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvbWFpbkN1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcz8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL0N1YmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvSGkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9NYWluQ3ViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDVUJFX0ZBQ0VTIiwiZnJvbnQiLCJiYWNrIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaXNBcnJvd0xlZnQiLCJjb2RlIiwia2V5Iiwia2V5Q29kZSIsImlzQXJyb3dVcCIsImlzQXJyb3dSaWdodCIsImlzQXJyb3dEb3duIiwiQ3ViZSIsImJhY2tDb250ZW50IiwiYm90dG9tQ29udGVudCIsImNsYXNzTmFtZSIsImZhY2UiLCJmcm9udENvbnRlbnQiLCJsZWZ0Q29udGVudCIsInJpZ2h0Q29udGVudCIsInNpemUiLCJ0b3BDb250ZW50Iiwid2l0aFN3aXBlIiwidXNlU3RhdGUiLCJhbmdYIiwic2V0QW5nWCIsImFuZ1kiLCJzZXRBbmdZIiwibW92aW5nIiwic2V0TW92aW5nIiwic3RhcnRYIiwic2V0U3RhcnRYIiwic3RhcnRZIiwic2V0U3RhcnRZIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIngiLCJ5Iiwic2V0VGltZW91dCIsImhhbmRsZU1vdmVtZW50U3RhcnQiLCJjbGllbnRYIiwidG91Y2hlcyIsImNsaWVudFkiLCJoYW5kbGVNb3ZlbWVudCIsImNoYW5nZWRUb3VjaGVzIiwiZGlmZlgiLCJkaWZmWSIsIk1hdGgiLCJhYnMiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwicGVyc3BlY3RpdmUiLCJ0cmFuc2Zvcm0iLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwibnVtYmVyIiwiYm9vbCIsImdldFNpemUiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJmbG9vciIsImNvbnRlbnQiLCJ1bmFuaW1hdGVkRGl2IiwiY29sb3IiLCJjdWJlT3B0aW9ucyIsIkhpIiwib25IaWRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwiaGlkZGVuIiwic2V0SGlkZGVuIiwic2hvdyIsImdldFJhbmRvbUN1YmUiLCJyYW5kb20iLCJmdW5jIiwiTmF2YmFyIiwiSWNvbiIsImljb24iLCJyZXN0IiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiU2VjdGlvbiIsImRpc2FibGVkIiwidGl0bGUiLCJmYWRlb3V0Iiwic2V0RmFkZW91dCIsImZ1bGxzY3JlZW4iLCJzZXRGdWxsc2NyZWVuIiwiY3JlYXRlUG9ydGFsIiwiYm9keSIsIk1haW5DdWJlIiwiaGlkZGVuSW50cm8iLCJpbml0aWFsVHJhbnNpdGlvbiIsInNldEluaXRpYWxUcmFuc2l0aW9uIiwiTWFpbiIsInNldEhpZGRlbkludHJvIiwiQXBwIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdI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R0FBRyxHQUFHLG1CQUNWLDhCQUFDLHlDQUFELHFCQUNFLDhCQUFDLFVBQUQsT0FERixDQURGOztBQU1lQSwrQ0FBZixFOzs7Ozs7OztBQ1hBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQUMsbUJBQVEsQ0FBQ0MsTUFBVCxlQUFnQiw4QkFBQyxPQUFELE9BQWhCLEVBQXlCN0UsUUFBUSxDQUFDOEUsY0FBVCxDQUF3QixNQUF4QixDQUF6QixFIiwiZmlsZSI6ImluZGV4X2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MDogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsxNDMsMV0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2N1YmUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1YmUtY29udGFpbmVyIC5jdWJle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zaXRpb246ZWFzZS1pbiBhbGwgLjVzfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNle3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmZ9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2U+KntoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mcm9udHt0cmFuc2Zvcm06cm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtcmlnaHR7dHJhbnNmb3JtOnJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1iYWNre3RyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWxlZnR7dHJhbnNmb3JtOnJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLXRvcHt0cmFuc2Zvcm06cm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWJvdHRvbXt0cmFuc2Zvcm06cm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hpLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC41czt6LWluZGV4OjEwMDF9LmhpLWNvbnRhaW5lciBoMXtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjk1JTtmb250LXNpemU6MjBweH0uaGktY29udGFpbmVyIGgxIHNwYW4ucHJpbWFyeXtjb2xvcjojYjcxZDJiO2ZvbnQtc2l6ZTozMnB4fS5oaS1jb250YWluZXIgaDEgc3Bhbi5wcmltYXJ5IHNwYW57Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6MzAwfS5oaS1jb250YWluZXIgaDEgc3Bhbi5zZWNvbmRhcnl7Y29sb3I6Izc4YjZhOTtmb250LXNpemU6MjRweH0uaGktY29udGFpbmVyIC5oaXtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEyMDBweH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVye2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyPmRpdntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTttYXJnaW46NHB4IDB9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlcj5kaXY+KnttYXJnaW46MCA0cHh9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlciAud2hpdGUtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo4cHg7b3ZlcmZsb3c6aGlkZGVufS5oaS1jb250YWluZXIuaGlkZGVue29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS5oaS1jb250YWluZXIuaGlkZGVuICp7cG9pbnRlci1ldmVudHM6bm9uZX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7LmhpLWNvbnRhaW5lciBoMXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibmF2Lm5hdmJhcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjkwMDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJiO2hlaWdodDo2MHB4O3BhZGRpbmc6MCAxNnB4fW5hdi5uYXZiYXIgLmV4cGFuZC1idG57ZGlzcGxheTpub25lfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50e21heC13aWR0aDoxMjAwcHg7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItdGl0bGV7Zm9udC1zaXplOjMycHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojZmZmfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItdGl0bGUgc3Bhbntmb250LXNpemU6MjBweDtmb250LXdlaWdodDozMDB9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZXtmb250LXNpemU6MTZweDtmb250LXdlaWdodDozMDA7Zm9udC1zdHlsZTppdGFsaWN9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZSBzcGFue2NvbG9yOiNlOWJiYmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe25hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50e2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItdGl0bGV7Zm9udC1zaXplOjIwcHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZSBzcGFue2ZvbnQtc2l6ZToxMnB4fW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItc3VidGl0bGV7Zm9udC1zaXplOjEycHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZSBzcGFue2ZvbnQtc2l6ZToxNHB4fX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pY29uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20taWNvbnttYXJnaW46MDtoZWlnaHQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3VzdG9tLWJ0bntwYWRkaW5nOjhweCAxNnB4O2ZvbnQtc2l6ZToxNnB4O2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjowO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJiO3RyYW5zaXRpb246bGluZWFyIGFsbCAuMjVzO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcn0uY3VzdG9tLWJ0bj4qOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi1sZWZ0OjhweH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWN0aW9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdWJlLXNlY3Rpb257bWFyZ2luOjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjE2cHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO292ZXJmbG93OmhpZGRlbn0uY3ViZS1zZWN0aW9uPmRpdntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtwYWRkaW5nOjMycHg7bWF4LWhlaWdodDo4MCU7b3ZlcmZsb3c6aGlkZGVufS5jdWJlLXNlY3Rpb24+ZGl2IGgye21hcmdpbjowfS5jdWJlLXNlY3Rpb24gLnNlZS1tb3JlLWJ0bntoZWlnaHQ6MjAlO3dpZHRoOjEwMCU7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXJhZGl1czowfS5jdWJlLXNlY3Rpb24tZnVsbHtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZjtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6OTk5O3RyYW5zaXRpb246bGluZWFyIGFsbCAxc30uY3ViZS1zZWN0aW9uLWZ1bGw+ZGl2e3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7bWF4LXdpZHRoOjEyMDBweH0uY3ViZS1zZWN0aW9uLWZ1bGw+ZGl2IC5jbG9zZS1idG57cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTZweDt0b3A6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5DdWJlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVye3RyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2l0aW9uOmVhc2UtaW4tb3V0IGFsbCAxcyAuMjVzfSNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2V7Ym9yZGVyLXJhZGl1czoxNnB4fSNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2UgKnstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9I21haW4tY3ViZSAuY3ViZS1jb250YWluZXIuaW5pdGlhbC10cmFuc2l0aW9uIC5jdWJle3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIDFzIC4yNXN9I21haW4tY3ViZS5oaWRkZW4tY3ViZSAuY3ViZS1jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDApIHJvdGF0ZVooMjcwZGVnKX0jbWFpbi1jdWJlLmhpZGRlbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZXt0cmFuc2Zvcm06cm90YXRlWSgzNjBkZWcpICFpbXBvcnRhbnR9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmFkZWluey13ZWJraXQtYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tb3otYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tcy1hbmltYXRpb246ZmFkZWluIDAuNXM7LW8tYW5pbWF0aW9uOmZhZGVpbiAwLjVzO2FuaW1hdGlvbjpmYWRlaW4gMC41c31Aa2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtbW96LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tcy1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1vLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX0uZmFkZW91dHstd2Via2l0LWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7LW1vei1hbmltYXRpb246ZmFkZW91dCAwLjVzOy1tcy1hbmltYXRpb246ZmFkZW91dCAwLjVzOy1vLWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7YW5pbWF0aW9uOmZhZGVvdXQgMC41cztvcGFjaXR5OjB9QGtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC1tb3ota2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtbXMta2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALW8ta2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e2ZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDttYXJnaW46MDtjb2xvcjojMDgwODA4Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6c3VicGl4ZWwtYW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6YXV0b30uc2hhZG93LG1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2V7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpOy1tb3otYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KTtib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpfWh0bWx7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZmfW1haW57ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW59bWFpbiAjbWFpbi1jb250YWluZXJ7cGFkZGluZy10b3A6NjBweDt3aWR0aDoxMDAlO2hlaWdodDpjYWxjKDEwMHZoIC0gNjBweCk7b3ZlcmZsb3c6YXV0bztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IENVQkVfRkFDRVMgPSB7XG4gIGZyb250OiAnZnJvbnQnLFxuICBiYWNrOiAnYmFjaycsXG4gIGxlZnQ6ICdsZWZ0JyxcbiAgcmlnaHQ6ICdyaWdodCcsXG4gIHRvcDogJ3RvcCcsXG4gIGJvdHRvbTogJ2JvdHRvbScsXG59O1xuXG5jb25zdCBpc0Fycm93TGVmdCA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiAzNyA9PT0ga2V5Q29kZSB8fCAnQXJyb3dMZWZ0JyA9PT0gY29kZSB8fCAnQXJyb3dMZWZ0JyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd1VwID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM4ID09PSBrZXlDb2RlIHx8ICdBcnJvd1VwJyA9PT0gY29kZSB8fCAnQXJyb3dVcCcgPT09IGtleTtcbmNvbnN0IGlzQXJyb3dSaWdodCA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiAzOSA9PT0ga2V5Q29kZSB8fCAnQXJyb3dSaWdodCcgPT09IGNvZGUgfHwgJ0FyclJpZ2h0JyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd0Rvd24gPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gNDAgPT09IGtleUNvZGUgfHwgJ0Fycm93RG93bicgPT09IGNvZGUgfHwgJ0Fycm93RG93bicgPT09IGtleTtcblxuY29uc3QgQ3ViZSA9ICh7XG4gIGJhY2tDb250ZW50LFxuICBib3R0b21Db250ZW50LFxuICBjbGFzc05hbWUsXG4gIGZhY2UsXG4gIGZyb250Q29udGVudCxcbiAgbGVmdENvbnRlbnQsXG4gIHJpZ2h0Q29udGVudCxcbiAgc2l6ZSxcbiAgdG9wQ29udGVudCxcbiAgd2l0aFN3aXBlLFxufSkgPT4ge1xuICBjb25zdCBbIGFuZ1gsIHNldEFuZ1ggXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGFuZ1ksIHNldEFuZ1kgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIG1vdmluZywgc2V0TW92aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgc3RhcnRYLCBzZXRTdGFydFggXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbIHN0YXJ0WSwgc2V0U3RhcnRZIF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd0xlZnQoZXZlbnQpKSB7XG4gICAgICBzZXRBbmdZKGFuZ1kgKyA5MCk7XG4gICAgfSBlbHNlIGlmICghbW92aW5nICYmIGlzQXJyb3dVcChldmVudCkpIHtcbiAgICAgIHNldEFuZ1goYW5nWCAtIDkwKTtcbiAgICB9IGVsc2UgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd1JpZ2h0KGV2ZW50KSkge1xuICAgICAgc2V0QW5nWShhbmdZIC0gOTApO1xuICAgIH0gZWxzZSBpZiAoIW1vdmluZyAmJiBpc0Fycm93RG93bihldmVudCkpIHtcbiAgICAgIHNldEFuZ1goYW5nWCArIDkwKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgIH07XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHggPSAwO1xuICAgIGxldCB5ID0gMDtcblxuICAgIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmZyb250KSB7XG4gICAgICB5ID0gMDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuYmFjaykge1xuICAgICAgeSA9IC0xODA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmxlZnQpIHtcbiAgICAgIHkgPSA5MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMucmlnaHQpIHtcbiAgICAgIHkgPSAtOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLnRvcCkge1xuICAgICAgeCA9IC05MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuYm90dG9tKSB7XG4gICAgICB4ID0gOTA7XG4gICAgfVxuXG4gICAgc2V0QW5nWCh4KTtcbiAgICBzZXRBbmdZKHkpO1xuICB9LCBbIGZhY2UgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGFydFgobnVsbCk7XG4gICAgc2V0U3RhcnRZKG51bGwpO1xuICAgIHNldE1vdmluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldE1vdmluZyhmYWxzZSksIDUwMCk7XG4gIH0sIFsgYW5nWCwgYW5nWSBdKTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudFN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc3QgWyB7IGNsaWVudFgsIGNsaWVudFkgfSBdID0gZXZlbnQudG91Y2hlcztcbiAgICBjb25zdCBjbGllbnRYID0gZXZlbnQ/LnRvdWNoZXM/LlswXT8uY2xpZW50WCB8fCBldmVudC5jbGllbnRYO1xuICAgIGNvbnN0IGNsaWVudFkgPSBldmVudD8udG91Y2hlcz8uWzBdPy5jbGllbnRZIHx8IGV2ZW50LmNsaWVudFk7XG5cbiAgICBzZXRTdGFydFgoY2xpZW50WCk7XG4gICAgc2V0U3RhcnRZKGNsaWVudFkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc3QgWyB7IGNsaWVudFgsIGNsaWVudFkgfSBdID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG4gICAgY29uc3QgY2xpZW50WCA9IGV2ZW50Py5jaGFuZ2VkVG91Y2hlcz8uWzBdPy5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFg7XG4gICAgY29uc3QgY2xpZW50WSA9IGV2ZW50Py5jaGFuZ2VkVG91Y2hlcz8uWzBdPy5jbGllbnRZIHx8IGV2ZW50LmNsaWVudFk7XG5cbiAgICBjb25zdCBkaWZmWCA9IGNsaWVudFggLSBzdGFydFg7XG4gICAgY29uc3QgZGlmZlkgPSBjbGllbnRZIC0gc3RhcnRZO1xuXG4gICAgaWYgKDUwIDwgTWF0aC5hYnMoZGlmZlgpKSB7XG4gICAgICAvLyBob3Jpem9udGFsIHN3aXBlXG4gICAgICBzZXRBbmdZKDAgPCBkaWZmWCA/IGFuZ1kgKyA5MCA6IGFuZ1kgLSA5MCk7XG4gICAgfVxuICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZZKSkge1xuICAgICAgLy8gdmVydGljYWwgc3dpcGVcbiAgICAgIHNldEFuZ1goMCA8IGRpZmZZID8gYW5nWCAtIDkwIDogYW5nWCArIDkwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjdWJlLWNvbnRhaW5lciR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBlcnNwZWN0aXZlOiBzaXplICogMyxcbiAgICAgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjdWJlXCJcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWigtJHtzaXplIC8gMn1weCkgcm90YXRlWCgke2FuZ1h9ZGVnKSByb3RhdGVZKCR7YW5nWX1kZWcpYCB9fVxuICAgICAgICBvbk1vdXNlRG93bj17d2l0aFN3aXBlID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Nb3VzZVVwPXt3aXRoU3dpcGUgPyBoYW5kbGVNb3ZlbWVudCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Ub3VjaEVuZD17d2l0aFN3aXBlID8gaGFuZGxlTW92ZW1lbnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uVG91Y2hTdGFydD17d2l0aFN3aXBlID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1mcm9udFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtmcm9udENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYmFja1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDE4MGRlZykgcm90YXRlWigxODBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtiYWNrQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1yaWdodFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7cmlnaHRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWxlZnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtsZWZ0Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS10b3BcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3RvcENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYm90dG9tXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7Ym90dG9tQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrQ29udGVudDogdW5kZWZpbmVkLFxuICBib3R0b21Db250ZW50OiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBmYWNlOiBDVUJFX0ZBQ0VTLmZyb250LFxuICBmcm9udENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgbGVmdENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgcmlnaHRDb250ZW50OiB1bmRlZmluZWQsXG4gIHNpemU6IDE1MCxcbiAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICB3aXRoU3dpcGU6IGZhbHNlLFxufTtcblxuQ3ViZS5wcm9wVHlwZXMgPSB7XG4gIGJhY2tDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgYm90dG9tQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmFjZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQ1VCRV9GQUNFUykpLFxuICBmcm9udENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBsZWZ0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHJpZ2h0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvcENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICB3aXRoU3dpcGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsImltcG9ydCBDdWJlIGZyb20gJy4vQ3ViZSc7XG5pbXBvcnQgJy4vY3ViZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEN1YmUgZnJvbSAnLi4vQ3ViZSc7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vQ3ViZS9DdWJlJztcblxuY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gIHJldHVybiBNYXRoLmZsb29yKCgoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0ID8gaW5uZXJIZWlnaHQgOiBpbm5lcldpZHRoKSAqIDAuNykgLyAxMCk7XG59O1xuXG5jb25zdCBjb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1iYWNrZ3JvdW5kXCIgLz47XG5jb25zdCBzaXplID0gZ2V0U2l6ZSgpO1xuY29uc3QgdW5hbmltYXRlZERpdiA9IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSwgY29sb3I6ICdibGFjaycgfX0gLz47XG5cbmNvbnN0IGN1YmVPcHRpb25zID0ge1xuICBib3R0b21Db250ZW50OiBjb250ZW50LFxuICBsZWZ0Q29udGVudDogY29udGVudCxcbiAgcmlnaHRDb250ZW50OiBjb250ZW50LFxuICB0b3BDb250ZW50OiBjb250ZW50LFxufTtcblxuY29uc3QgSGkgPSAoeyBvbkhpZGUgfSkgPT4ge1xuICBjb25zdCBbIGFuaW1hdGlvbiwgc2V0QW5pbWF0aW9uIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgaGlkZGVuLCBzZXRIaWRkZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFuaW1hdGlvbih0cnVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QW5pbWF0aW9uKGZhbHNlKSwgMjAwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRIaWRkZW4odHJ1ZSksIDI1MDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBvbkhpZGUpIHtcbiAgICAgIG9uSGlkZSgpO1xuICAgIH1cbiAgfSwgWyBoaWRkZW4gXSk7XG5cbiAgY29uc3Qgc2hvdyA9IGFuaW1hdGlvbiAmJiAhaGlkZGVuO1xuXG4gIGNvbnN0IGdldFJhbmRvbUN1YmUgPSAoKSA9PiB7XG4gICAgbGV0IGZhY2UgPSBDVUJFX0ZBQ0VTLmZyb250O1xuXG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXG4gICAgICBmYWNlID0gWyBDVUJFX0ZBQ0VTLmJvdHRvbSwgQ1VCRV9GQUNFUy5sZWZ0LCBDVUJFX0ZBQ0VTLnJpZ2h0LCBDVUJFX0ZBQ0VTLnRvcCBdW251bWJlcl07XG4gICAgfVxuXG4gICAgcmV0dXJuIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e2ZhY2V9IHsuLi5jdWJlT3B0aW9uc30gLz47XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhpLWNvbnRhaW5lciR7aGlkZGVuID8gJyBoaWRkZW4nIDogJyd9YH0+XG4gICAgICA8aDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaW1hcnlcIj5cbiAgICAgICAgICBNeSBDPHNwYW4+dTwvc3Bhbj5WPHNwYW4+ZTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgIGJ5IDxzcGFuIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPkphdmllciBHYXJjw61hPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGkuZGVmYXVsdFByb3BzID0ge1xuICBvbkhpZGU6IHVuZGVmaW5lZCxcbn07XG5cbkhpLnByb3BUeXBlcyA9IHtcbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpO1xuIiwiaW1wb3J0IEhpIGZyb20gJy4vSGknO1xuaW1wb3J0ICcuL2hpLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBIaTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc2hhZG93XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItdGl0bGVcIj5cbiAgICAgICAgTXkgQzxzcGFuPnU8L3NwYW4+VjxzcGFuPmU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN1YnRpdGxlXCI+XG4gICAgICAgIGJ5IDxzcGFuPkphdmkgR2FyY8OtYSBGYWphcmRvPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgJy4vbmF2YmFyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSWNvbiA9ICh7IGljb24sIC4uLnJlc3QgfSkgPT4gPGkgey4uLnJlc3R9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT17aWNvbn0gLz47XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBpY29uOiB1bmRlZmluZWQsXG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0ICcuL2ljb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpY29uLCB0ZXh0LCAuLi5yZXN0IH0pID0+IChcbiAgPGJ1dHRvbiBjbGFzc05hbWU9e2BjdXN0b20tYnRuJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfSB0eXBlPVwiYnV0dG9uXCIgey4uLnJlc3R9PlxuICAgIHtpY29uICYmIDxJY29uIGljb249e2ljb259IC8+fVxuICAgIHt0ZXh0ICYmIDxzcGFuPnt0ZXh0fTwvc3Bhbj59XG4gICAge2NoaWxkcmVufVxuICA8L2J1dHRvbj5cbik7XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIHRleHQ6IHVuZGVmaW5lZCxcbn07XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgJy4vYnV0dG9uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIGRpc2FibGVkLCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IFsgZmFkZW91dCwgc2V0RmFkZW91dCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGZ1bGxzY3JlZW4sIHNldEZ1bGxzY3JlZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmYWRlb3V0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZ1bGxzY3JlZW4oZmFsc2UpLCA0MDApO1xuICAgIH1cbiAgfSwgWyBmYWRlb3V0IF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFmdWxsc2NyZWVuKSB7XG4gICAgICBzZXRGYWRlb3V0KGZhbHNlKTtcbiAgICB9XG4gIH0sIFsgZnVsbHNjcmVlbiBdKTtcblxucmV0dXJuIGZ1bGxzY3JlZW4gP1xuICBjcmVhdGVQb3J0YWwoPGRpdiBjbGFzc05hbWU9e2BjdWJlLXNlY3Rpb24tZnVsbCAke2ZhZGVvdXQgPyAnZmFkZW91dCcgOiAnZmFkZWluJ31gfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1YmUtc2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgIHt0aXRsZSAmJiA8aDI+e3RpdGxlfTwvaDI+fVxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idG5cIiBpY29uPVwiZmFzIGZhLXRpbWVzXCIgb25DbGljaz17KCkgPT4gc2V0RmFkZW91dCh0cnVlKX0gLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+LCBkb2N1bWVudC5ib2R5KSA6XG4gIDxkaXYgY2xhc3NOYW1lPVwiY3ViZS1zZWN0aW9uIGZhZGVpblwiIG9uRG91YmxlQ2xpY2s9eygpID0+ICFkaXNhYmxlZCAmJiBzZXRGdWxsc2NyZWVuKHRydWUpfT5cbiAgICA8ZGl2PlxuICAgICAge3RpdGxlICYmIDxoMj57dGl0bGV9PC9oMj59XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPVwic2VlLW1vcmUtYnRuXCIgaWNvbj1cImZhcyBmYS1wbHVzXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbHNjcmVlbih0cnVlKX0gLz4gKi99XG4gIDwvZGl2Pjtcbn07XG5cblNlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG59O1xuXG5TZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XG5pbXBvcnQgJy4vc2VjdGlvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDdWJlIGZyb20gJy4uL0N1YmUnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vU2VjdGlvbic7XG5cbmNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICByZXR1cm4gKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjg7XG59O1xuY29uc3Qgc2l6ZSA9IGdldFNpemUoKTtcblxuY29uc3QgTWFpbkN1YmUgPSAoeyBoaWRkZW5JbnRybyB9KSA9PiB7XG4gIGNvbnN0IFsgaW5pdGlhbFRyYW5zaXRpb24sIHNldEluaXRpYWxUcmFuc2l0aW9uIF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoaWRkZW5JbnRybykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJbml0aWFsVHJhbnNpdGlvbihmYWxzZSksIDE1MDApO1xuICAgIH1cbiAgfSwgWyBoaWRkZW5JbnRybyBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJtYWluLWN1YmVcIiBjbGFzc05hbWU9e2hpZGRlbkludHJvID8gJycgOiAnaGlkZGVuLWN1YmUnfT5cbiAgICAgIDxDdWJlXG4gICAgICAgIGNsYXNzTmFtZT17aW5pdGlhbFRyYW5zaXRpb24gPyAnaW5pdGlhbC10cmFuc2l0aW9uJyA6ICcnfVxuICAgICAgICBsZWZ0Q29udGVudD17XG4gICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJGT1JNQUNJT05cIiAvPlxuICAgICAgICB9XG4gICAgICAgIGZyb250Q29udGVudD17XG4gICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJJTkZPXCIgLz5cbiAgICAgICAgfVxuICAgICAgICByaWdodENvbnRlbnQ9e1xuICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiVFJBWUVDVE9SSUFcIiAvPlxuICAgICAgICB9XG4gICAgICAgIGJhY2tDb250ZW50PXtcbiAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIlNPQ0lBTFwiIC8+XG4gICAgICAgIH1cbiAgICAgICAgYm90dG9tQ29udGVudD17PFNlY3Rpb24gdGl0bGU9XCJNYWRlIGJ5IEphdmllciBHYXJjw61hIEZhamFyZG9cIiBkaXNhYmxlZCAvPn1cbiAgICAgICAgdG9wQ29udGVudD17XG4gICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJIZWxsbyA6KVwiIGRpc2FibGVkIC8+XG4gICAgICAgIH1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgd2l0aFN3aXBlXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTWFpbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBoaWRkZW5JbnRybzogZmFsc2UsXG59O1xuXG5NYWluQ3ViZS5wcm9wVHlwZXMgPSB7XG4gIGhpZGRlbkludHJvOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5DdWJlO1xuIiwiaW1wb3J0IE1haW5DdWJlIGZyb20gJy4vTWFpbkN1YmUnO1xuaW1wb3J0ICcuL21haW5DdWJlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ3ViZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaSBmcm9tICcuLi9jb21wb25lbnRzL0hpJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IE1haW5DdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkN1YmUnO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbIGhpZGRlbkludHJvLCBzZXRIaWRkZW5JbnRybyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJmYWRlaW5cIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8SGkgb25IaWRlPXsoKSA9PiBzZXRIaWRkZW5JbnRybyh0cnVlKX0gLz5cbiAgICAgICAgPE1haW5DdWJlIGhpZGRlbkludHJvPXtoaWRkZW5JbnRyb30gLz5cbiAgICAgICAgPGRpdiBpZD1cInNlbGVjdGVkLXNlY3Rpb25cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPE1haW4gLz5cbiAgPC9Ccm93c2VyUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=