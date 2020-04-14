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
module.exports = __webpack_require__(368);


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(45);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-container .cube{width:100%;height:100%;position:absolute;transform-style:preserve-3d;transition:ease-in all .5s}.cube-container .cube .cube-face{position:absolute;width:100%;height:100%;margin:0;background-color:#080808;color:#fff}.cube-container .cube .cube-face>*{height:100%;width:100%}.cube-container .cube .cube-front{transform:rotateY(0deg) translateZ(100px)}.cube-container .cube .cube-right{transform:rotateY(90deg) translateZ(100px)}.cube-container .cube .cube-back{transform:rotateY(180deg) translateZ(100px)}.cube-container .cube .cube-left{transform:rotateZ(180deg) rotateY(-90deg) translateZ(100px)}.cube-container .cube .cube-top{transform:rotateX(90deg) translateZ(100px)}.cube-container .cube .cube-bottom{transform:rotateX(-90deg) translateZ(100px)}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(45);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hi-container{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#080808;transition:linear all .5s;z-index:1001}.hi-container h1{color:#fff;text-align:center;width:95%;font-size:20px}.hi-container h1 span.primary{color:#b71d2b;font-size:32px}.hi-container h1 span.secondary{color:#78b6a9;font-size:24px}.hi-container .hi{display:flex;max-width:1200px}.hi-container .hi .letter{display:flex;flex-wrap:wrap}.hi-container .hi .letter>div{display:flex;flex-direction:row;justify-content:center;width:100%;margin:4px 0}.hi-container .hi .letter>div>*{margin:0 4px}.hi-container .hi .letter .white-background{background-color:#fff;border-radius:8px;overflow:hidden}.hi-container.hidden{opacity:0;pointer-events:none}.hi-container.hidden *{pointer-events:none}@media screen and (max-width: 768px){.hi-container h1{display:flex;flex-direction:column}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(45);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-icon{margin:0;height:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(45);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-btn{padding:8px 16px;font-size:16px;border-radius:4px;border:0;color:#fff;background-color:#b71d2b;transition:linear all .25s;outline:0;cursor:pointer}.custom-btn>*:not(:first-child){margin-left:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(45);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "nav.navbar{position:fixed;top:0;left:0;right:0;z-index:900;display:flex;align-items:center;justify-content:center;background-color:#b71d2b;height:60px;padding:0 16px}nav.navbar .expand-btn{display:none}nav.navbar .navbar-content{max-width:1200px;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between}nav.navbar .navbar-content .navbar-title{font-size:32px;font-weight:bold;color:#fff}nav.navbar .navbar-content .navbar-subtitle{font-size:16px;font-weight:300;font-style:italic}nav.navbar .navbar-content .navbar-subtitle span{color:#e9bbbf}nav.navbar .navbar-content .navbar-btns .navbar-btn{border-bottom:2px solid transparent;border-radius:0;height:100%;height:60px}nav.navbar .navbar-content .navbar-btns .navbar-btn:hover{background-color:#cd616b}nav.navbar .navbar-content .navbar-btns .navbar-btn.navbar-btn-selected{border-bottom-color:#fff;background-color:#e9bbbf}@media screen and (max-width: 992px){nav.navbar .navbar-content{justify-content:center;flex-direction:column}nav.navbar .navbar-content .navbar-title{font-size:20px}nav.navbar .navbar-content .navbar-subtitle{font-size:12px}nav.navbar .navbar-content .navbar-subtitle span{font-size:14px}nav.navbar .navbar-content .navbar-btns{display:flex;flex-direction:column;position:fixed;top:60px;left:0;right:0}nav.navbar .navbar-content .navbar-btns .custom-btn{max-height:0;padding:0;border:0;opacity:0;pointer-events:none;transition:ease-in-out all .25s}nav.navbar .navbar-content .navbar-btns.expanded{border-top:1px solid #fff}nav.navbar .navbar-content .navbar-btns.expanded .custom-btn{max-height:32px;padding:inherit;opacity:1;pointer-events:all}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(45);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fadein{-webkit-animation:fadein 0.5s;-moz-animation:fadein 0.5s;-ms-animation:fadein 0.5s;-o-animation:fadein 0.5s;animation:fadein 0.5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(45);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{font-family:'Poppins', sans-serif;font-size:14px;margin:0;color:#080808;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow,main #main-container #main-cube .cube-container .cube-face{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);box-shadow:0px 0 8px 2px rgba(136,136,136,0.5)}html{background-color:#fafaff}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;overflow:hidden}main #main-container{padding-top:60px;width:100%;height:calc(100vh - 60px);overflow:auto;display:flex;align-items:center;justify-content:center;flex-direction:column}main #main-container #main-cube .cube-container{transform:scale(1);transition:ease-in-out all 1s .25s}main #main-container #main-cube .cube-container .cube-face{cursor:pointer;border-radius:16px}main #main-container #main-cube .cube-container .cube-face>*{padding:32px}main #main-container #main-cube .cube-container .cube-face>* h2{margin:0}main #main-container #main-cube .cube-container.initial-transition .cube{transition:ease-in-out all 1s .25s}main #main-container #main-cube.hidden-cube .cube-container{transform:scale(0) rotateZ(270deg)}main #main-container #main-cube.hidden-cube .cube-container .cube{transform:rotateY(360deg) !important}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(139);
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

const Box = ({
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

Box.defaultProps = {
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
Box.propTypes = {
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
/* harmony default export */ var Cube = (Box);
// EXTERNAL MODULE: ./src/components/Cube/cube.scss
var cube = __webpack_require__(352);

// CONCATENATED MODULE: ./src/components/Cube/index.js


/* harmony default export */ var components_Cube = (Cube);
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

const getOption = () => {
  const number = Math.floor(Math.random() * 4);
  return ['bottom', 'left', 'right', 'top'][number];
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
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "hi-container".concat(hidden ? ' hidden' : '')
  }, /*#__PURE__*/react_default.a.createElement("h1", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "primary"
  }, "My CuVe"), " by ", /*#__PURE__*/react_default.a.createElement("span", {
    className: "secondary"
  }, "Javier Garc\xEDa")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "hi"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "letter"
  }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions))), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions))), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions))), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions))), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "letter"
  }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions))), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "letter"
  }, /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, unanimatedDiv, unanimatedDiv), /*#__PURE__*/react_default.a.createElement("div", null, unanimatedDiv, /*#__PURE__*/react_default.a.createElement(components_Cube, _extends({
    size: Hi_size,
    face: show ? getOption() : 'front'
  }, cubeOptions)), unanimatedDiv))));
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
var Icon_icon = __webpack_require__(356);

// CONCATENATED MODULE: ./src/components/Icon/index.js


/* harmony default export */ var components_Icon = (Icon_Icon);
// CONCATENATED MODULE: ./src/components/Button/Button.jsx
function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let className = _ref.className,
      icon = _ref.icon,
      text = _ref.text,
      rest = Button_objectWithoutProperties(_ref, ["className", "icon", "text"]);

  return /*#__PURE__*/react_default.a.createElement("button", Button_extends({
    className: "custom-btn".concat(className ? " ".concat(className) : ''),
    type: "button"
  }, rest), icon && /*#__PURE__*/react_default.a.createElement(components_Icon, {
    icon: icon
  }), text && /*#__PURE__*/react_default.a.createElement("span", null, text));
};

Button.defaultProps = {
  className: undefined,
  icon: undefined,
  text: undefined
};
Button.propTypes = {
  className: prop_types_default.a.string,
  icon: prop_types_default.a.string,
  text: prop_types_default.a.string
};
/* harmony default export */ var Button_Button = (Button);
// EXTERNAL MODULE: ./src/components/Button/button.scss
var Button_button = __webpack_require__(358);

// CONCATENATED MODULE: ./src/components/Button/index.js


/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./src/components/Navbar/Navbar.jsx
function Navbar_slicedToArray(arr, i) { return Navbar_arrayWithHoles(arr) || Navbar_iterableToArrayLimit(arr, i) || Navbar_unsupportedIterableToArray(arr, i) || Navbar_nonIterableRest(); }

function Navbar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Navbar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Navbar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Navbar_arrayLikeToArray(o, minLen); }

function Navbar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function Navbar_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Navbar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // import { CUBE_FACES } from '../Cube/Cube';

const Navbar = ({
  onSelect,
  selected
}) => {
  const _useState = Object(react["useState"])(false),
        _useState2 = Navbar_slicedToArray(_useState, 2),
        expanded = _useState2[0],
        setExpanded = _useState2[1];

  Object(react["useEffect"])(() => {
    setExpanded(false);
  }, [selected]);
  return /*#__PURE__*/react_default.a.createElement("nav", {
    className: "navbar shadow"
  }, /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "expand-btn",
    icon: "fas fa-bars",
    onClick: () => setExpanded(!expanded)
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar-content"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar-title"
  }, "My CuVe"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar-subtitle"
  }, "by ", /*#__PURE__*/react_default.a.createElement("span", null, "Javi Garc\xEDa Fajardo"))));
};

Navbar.propTypes = {
  onSelect: prop_types_default.a.func.isRequired,
  selected: prop_types_default.a.string.isRequired
};
/* harmony default export */ var Navbar_Navbar = (Navbar);
// EXTERNAL MODULE: ./src/components/Navbar/navbar.scss
var navbar = __webpack_require__(360);

// CONCATENATED MODULE: ./src/components/Navbar/index.js


/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./src/pages/Main.jsx
function Main_slicedToArray(arr, i) { return Main_arrayWithHoles(arr) || Main_iterableToArrayLimit(arr, i) || Main_unsupportedIterableToArray(arr, i) || Main_nonIterableRest(); }

function Main_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Main_arrayLikeToArray(o, minLen); }

function Main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function Main_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Main_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







const Main_getSize = () => {
  const _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth;
  return (innerWidth > innerHeight ? innerHeight : innerWidth) * 0.8;
};

const Main_size = Main_getSize();

const Main = () => {
  const _useState = Object(react["useState"])(CUBE_FACES.left),
        _useState2 = Main_slicedToArray(_useState, 2),
        face = _useState2[0],
        setFace = _useState2[1];

  const _useState3 = Object(react["useState"])(false),
        _useState4 = Main_slicedToArray(_useState3, 2),
        hiddenIntro = _useState4[0],
        setHiddenIntro = _useState4[1];

  const _useState5 = Object(react["useState"])(true),
        _useState6 = Main_slicedToArray(_useState5, 2),
        initialTransition = _useState6[0],
        setInitialTransition = _useState6[1];

  Object(react["useEffect"])(() => {
    if (hiddenIntro) {
      setTimeout(() => setInitialTransition(false), 1500);
    }
  }, [hiddenIntro]);
  return /*#__PURE__*/react_default.a.createElement("main", null, /*#__PURE__*/react_default.a.createElement("div", {
    id: "main-container",
    className: "fadein"
  }, /*#__PURE__*/react_default.a.createElement(components_Navbar, {
    onSelect: setFace,
    selected: face
  }), /*#__PURE__*/react_default.a.createElement(components_Hi, {
    onHide: () => setHiddenIntro(true)
  }), /*#__PURE__*/react_default.a.createElement("div", {
    id: "main-cube",
    className: hiddenIntro ? '' : 'hidden-cube'
  }, /*#__PURE__*/react_default.a.createElement(components_Cube, {
    className: initialTransition ? 'initial-transition' : '',
    face: face,
    leftContent: /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h2", null, "INFO")),
    frontContent: /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h2", null, "FORMACION")),
    rightContent: /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h2", null, "TRAYECTORIA")),
    backContent: /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h2", null, "SOCIAL")),
    bottomContent: /*#__PURE__*/react_default.a.createElement("div", null, "Made by Javier Garc\xEDa Fajardo"),
    topContent: /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h2", null, "Hello :)")),
    size: Main_size,
    withSwipe: true
  }))));
};

/* harmony default export */ var pages_Main = (Main);
// CONCATENATED MODULE: ./src/App.jsx




const App = () => /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, /*#__PURE__*/react_default.a.createElement(pages_Main, null));

/* harmony default export */ var src_App = (App);
// EXTERNAL MODULE: ./src/styles/animations.scss
var animations = __webpack_require__(364);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(366);

// CONCATENATED MODULE: ./src/index.js





react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2Nzcz8xZDc4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaWNvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uc2Nzcz9jNGI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3M/Mjk0OCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NGMzNyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9DdWJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL0hpLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNVQkVfRkFDRVMiLCJmcm9udCIsImJhY2siLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJpc0Fycm93TGVmdCIsImNvZGUiLCJrZXkiLCJrZXlDb2RlIiwiaXNBcnJvd1VwIiwiaXNBcnJvd1JpZ2h0IiwiaXNBcnJvd0Rvd24iLCJCb3giLCJiYWNrQ29udGVudCIsImJvdHRvbUNvbnRlbnQiLCJjbGFzc05hbWUiLCJmYWNlIiwiZnJvbnRDb250ZW50IiwibGVmdENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJzaXplIiwidG9wQ29udGVudCIsIndpdGhTd2lwZSIsInVzZVN0YXRlIiwiYW5nWCIsInNldEFuZ1giLCJhbmdZIiwic2V0QW5nWSIsIm1vdmluZyIsInNldE1vdmluZyIsInN0YXJ0WCIsInNldFN0YXJ0WCIsInN0YXJ0WSIsInNldFN0YXJ0WSIsImhhbmRsZUtleURvd24iLCJldmVudCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ4IiwieSIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3ZlbWVudFN0YXJ0IiwiY2xpZW50WCIsInRvdWNoZXMiLCJjbGllbnRZIiwiaGFuZGxlTW92ZW1lbnQiLCJjaGFuZ2VkVG91Y2hlcyIsImRpZmZYIiwiZGlmZlkiLCJNYXRoIiwiYWJzIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm51bWJlciIsImJvb2wiLCJDdWJlIiwiZ2V0U2l6ZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImZsb29yIiwiZ2V0T3B0aW9uIiwicmFuZG9tIiwiY29udGVudCIsInVuYW5pbWF0ZWREaXYiLCJjb2xvciIsImN1YmVPcHRpb25zIiwiSGkiLCJvbkhpZGUiLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJzaG93IiwiZnVuYyIsIkljb24iLCJpY29uIiwicmVzdCIsIkJ1dHRvbiIsInRleHQiLCJOYXZiYXIiLCJvblNlbGVjdCIsInNlbGVjdGVkIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImlzUmVxdWlyZWQiLCJNYWluIiwic2V0RmFjZSIsImhpZGRlbkludHJvIiwic2V0SGlkZGVuSW50cm8iLCJpbml0aWFsVHJhbnNpdGlvbiIsInNldEluaXRpYWxUcmFuc2l0aW9uIiwiQXBwIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFD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RixDQURGO0FBMENELENBckREOztBQXVEZWtGLG1EQUFmLEU7O0FDcEVBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNTSxHQUFHLEdBQUcsbUJBQ1YsOEJBQUMseUNBQUQscUJBQ0UsOEJBQUMsVUFBRCxPQURGLENBREY7O0FBTWVBLCtDQUFmLEU7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBQyxtQkFBUSxDQUFDQyxNQUFULGVBQWdCLDhCQUFDLE9BQUQsT0FBaEIsRUFBeUJ6RSxRQUFRLENBQUMwRSxjQUFULENBQXdCLE1BQXhCLENBQXpCLEUiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzE0MywxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3ViZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3ViZS1jb250YWluZXIgLmN1YmV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNpdGlvbjplYXNlLWluIGFsbCAuNXN9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZT4qe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1yaWdodHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWJhY2t7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtbGVmdHt0cmFuc2Zvcm06cm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtdG9we3RyYW5zZm9ybTpyb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYm90dG9te3RyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCl9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGkuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpLWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO3otaW5kZXg6MTAwMX0uaGktY29udGFpbmVyIGgxe2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTUlO2ZvbnQtc2l6ZToyMHB4fS5oaS1jb250YWluZXIgaDEgc3Bhbi5wcmltYXJ5e2NvbG9yOiNiNzFkMmI7Zm9udC1zaXplOjMycHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnNlY29uZGFyeXtjb2xvcjojNzhiNmE5O2ZvbnQtc2l6ZToyNHB4fS5oaS1jb250YWluZXIgLmhpe2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTIwMHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21hcmdpbjo0cHggMH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyPmRpdj4qe21hcmdpbjowIDRweH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC53aGl0ZS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjhweDtvdmVyZmxvdzpoaWRkZW59LmhpLWNvbnRhaW5lci5oaWRkZW57b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmhpLWNvbnRhaW5lci5oaWRkZW4gKntwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXsuaGktY29udGFpbmVyIGgxe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1pY29ue21hcmdpbjowO2hlaWdodDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20tYnRue3BhZGRpbmc6OHB4IDE2cHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXM7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfS5jdXN0b20tYnRuPio6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJuYXYubmF2YmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6OTAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7aGVpZ2h0OjYwcHg7cGFkZGluZzowIDE2cHh9bmF2Lm5hdmJhciAuZXhwYW5kLWJ0bntkaXNwbGF5Om5vbmV9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7bWF4LXdpZHRoOjEyMDBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MzJweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiNmZmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZXtmb250LXNpemU6MTZweDtmb250LXdlaWdodDozMDA7Zm9udC1zdHlsZTppdGFsaWN9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZSBzcGFue2NvbG9yOiNlOWJiYmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zIC5uYXZiYXItYnRue2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MDtoZWlnaHQ6MTAwJTtoZWlnaHQ6NjBweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLWJ0bnMgLm5hdmJhci1idG46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2Q2MTZifW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItYnRucyAubmF2YmFyLWJ0bi5uYXZiYXItYnRuLXNlbGVjdGVke2JvcmRlci1ib3R0b20tY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNlOWJiYmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe25hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50e2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItdGl0bGV7Zm9udC1zaXplOjIwcHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZXtmb250LXNpemU6MTJweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxlIHNwYW57Zm9udC1zaXplOjE0cHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cG9zaXRpb246Zml4ZWQ7dG9wOjYwcHg7bGVmdDowO3JpZ2h0OjB9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zIC5jdXN0b20tYnRue21heC1oZWlnaHQ6MDtwYWRkaW5nOjA7Ym9yZGVyOjA7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjplYXNlLWluLW91dCBhbGwgLjI1c31uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLWJ0bnMuZXhwYW5kZWR7Ym9yZGVyLXRvcDoxcHggc29saWQgI2ZmZn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLWJ0bnMuZXhwYW5kZWQgLmN1c3RvbS1idG57bWF4LWhlaWdodDozMnB4O3BhZGRpbmc6aW5oZXJpdDtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YWxsfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYWRlaW57LXdlYmtpdC1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1vei1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1zLWFuaW1hdGlvbjpmYWRlaW4gMC41czstby1hbmltYXRpb246ZmFkZWluIDAuNXM7YW5pbWF0aW9uOmZhZGVpbiAwLjVzfUBrZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tb3ota2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW1zLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW8ta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7Zm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowO2NvbG9yOiMwODA4MDg7LXdlYmtpdC1mb250LXNtb290aGluZzpzdWJwaXhlbC1hbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzphdXRvfS5zaGFkb3csbWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZXstd2Via2l0LWJveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSk7LW1vei1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpO2JveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSl9aHRtbHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmZ9bWFpbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbn1tYWluICNtYWluLWNvbnRhaW5lcntwYWRkaW5nLXRvcDo2MHB4O3dpZHRoOjEwMCU7aGVpZ2h0OmNhbGMoMTAwdmggLSA2MHB4KTtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIDFzIC4yNXN9bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZXtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjE2cHh9bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZT4qe3BhZGRpbmc6MzJweH1tYWluICNtYWluLWNvbnRhaW5lciAjbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZS1mYWNlPiogaDJ7bWFyZ2luOjB9bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXIuaW5pdGlhbC10cmFuc2l0aW9uIC5jdWJle3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIDFzIC4yNXN9bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZS5oaWRkZW4tY3ViZSAuY3ViZS1jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDApIHJvdGF0ZVooMjcwZGVnKX1tYWluICNtYWluLWNvbnRhaW5lciAjbWFpbi1jdWJlLmhpZGRlbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZXt0cmFuc2Zvcm06cm90YXRlWSgzNjBkZWcpICFpbXBvcnRhbnR9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ1VCRV9GQUNFUyA9IHtcbiAgZnJvbnQ6ICdmcm9udCcsXG4gIGJhY2s6ICdiYWNrJyxcbiAgbGVmdDogJ2xlZnQnLFxuICByaWdodDogJ3JpZ2h0JyxcbiAgdG9wOiAndG9wJyxcbiAgYm90dG9tOiAnYm90dG9tJyxcbn07XG5cbmNvbnN0IGlzQXJyb3dMZWZ0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM3ID09PSBrZXlDb2RlIHx8ICdBcnJvd0xlZnQnID09PSBjb2RlIHx8ICdBcnJvd0xlZnQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93VXAgPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gMzggPT09IGtleUNvZGUgfHwgJ0Fycm93VXAnID09PSBjb2RlIHx8ICdBcnJvd1VwJyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd1JpZ2h0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM5ID09PSBrZXlDb2RlIHx8ICdBcnJvd1JpZ2h0JyA9PT0gY29kZSB8fCAnQXJyUmlnaHQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93RG93biA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiA0MCA9PT0ga2V5Q29kZSB8fCAnQXJyb3dEb3duJyA9PT0gY29kZSB8fCAnQXJyb3dEb3duJyA9PT0ga2V5O1xuXG5jb25zdCBCb3ggPSAoe1xuICBiYWNrQ29udGVudCxcbiAgYm90dG9tQ29udGVudCxcbiAgY2xhc3NOYW1lLFxuICBmYWNlLFxuICBmcm9udENvbnRlbnQsXG4gIGxlZnRDb250ZW50LFxuICByaWdodENvbnRlbnQsXG4gIHNpemUsXG4gIHRvcENvbnRlbnQsXG4gIHdpdGhTd2lwZSxcbn0pID0+IHtcbiAgY29uc3QgWyBhbmdYLCBzZXRBbmdYIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBhbmdZLCBzZXRBbmdZIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBtb3ZpbmcsIHNldE1vdmluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIHN0YXJ0WCwgc2V0U3RhcnRYIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgWyBzdGFydFksIHNldFN0YXJ0WSBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgIGlmICghbW92aW5nICYmIGlzQXJyb3dMZWZ0KGV2ZW50KSkge1xuICAgICAgc2V0QW5nWShhbmdZICsgOTApO1xuICAgIH0gZWxzZSBpZiAoIW1vdmluZyAmJiBpc0Fycm93VXAoZXZlbnQpKSB7XG4gICAgICBzZXRBbmdYKGFuZ1ggLSA5MCk7XG4gICAgfSBlbHNlIGlmICghbW92aW5nICYmIGlzQXJyb3dSaWdodChldmVudCkpIHtcbiAgICAgIHNldEFuZ1koYW5nWSAtIDkwKTtcbiAgICB9IGVsc2UgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd0Rvd24oZXZlbnQpKSB7XG4gICAgICBzZXRBbmdYKGFuZ1ggKyA5MCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICB9O1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG5cbiAgICBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5mcm9udCkge1xuICAgICAgeSA9IDA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJhY2spIHtcbiAgICAgIHkgPSAtMTgwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5sZWZ0KSB7XG4gICAgICB5ID0gOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLnJpZ2h0KSB7XG4gICAgICB5ID0gLTkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy50b3ApIHtcbiAgICAgIHggPSAtOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJvdHRvbSkge1xuICAgICAgeCA9IDkwO1xuICAgIH1cblxuICAgIHNldEFuZ1goeCk7XG4gICAgc2V0QW5nWSh5KTtcbiAgfSwgWyBmYWNlIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhcnRYKG51bGwpO1xuICAgIHNldFN0YXJ0WShudWxsKTtcbiAgICBzZXRNb3ZpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRNb3ZpbmcoZmFsc2UpLCA1MDApO1xuICB9LCBbIGFuZ1gsIGFuZ1kgXSk7XG5cbiAgY29uc3QgaGFuZGxlTW92ZW1lbnRTdGFydCA9IChldmVudCkgPT4ge1xuICAgIC8vIGNvbnN0IFsgeyBjbGllbnRYLCBjbGllbnRZIH0gXSA9IGV2ZW50LnRvdWNoZXM7XG4gICAgY29uc3QgY2xpZW50WCA9IGV2ZW50Py50b3VjaGVzPy5bMF0/LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WDtcbiAgICBjb25zdCBjbGllbnRZID0gZXZlbnQ/LnRvdWNoZXM/LlswXT8uY2xpZW50WSB8fCBldmVudC5jbGllbnRZO1xuXG4gICAgc2V0U3RhcnRYKGNsaWVudFgpO1xuICAgIHNldFN0YXJ0WShjbGllbnRZKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudCA9IChldmVudCkgPT4ge1xuICAgIC8vIGNvbnN0IFsgeyBjbGllbnRYLCBjbGllbnRZIH0gXSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuICAgIGNvbnN0IGNsaWVudFggPSBldmVudD8uY2hhbmdlZFRvdWNoZXM/LlswXT8uY2xpZW50WCB8fCBldmVudC5jbGllbnRYO1xuICAgIGNvbnN0IGNsaWVudFkgPSBldmVudD8uY2hhbmdlZFRvdWNoZXM/LlswXT8uY2xpZW50WSB8fCBldmVudC5jbGllbnRZO1xuXG4gICAgY29uc3QgZGlmZlggPSBjbGllbnRYIC0gc3RhcnRYO1xuICAgIGNvbnN0IGRpZmZZID0gY2xpZW50WSAtIHN0YXJ0WTtcblxuICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZYKSkge1xuICAgICAgLy8gaG9yaXpvbnRhbCBzd2lwZVxuICAgICAgc2V0QW5nWSgwIDwgZGlmZlggPyBhbmdZICsgOTAgOiBhbmdZIC0gOTApO1xuICAgIH1cbiAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWSkpIHtcbiAgICAgIC8vIHZlcnRpY2FsIHN3aXBlXG4gICAgICBzZXRBbmdYKDAgPCBkaWZmWSA/IGFuZ1ggLSA5MCA6IGFuZ1ggKyA5MCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgY3ViZS1jb250YWluZXIke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBwZXJzcGVjdGl2ZTogc2l6ZSAqIDMsXG4gICAgICB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY3ViZVwiXG4gICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVooLSR7c2l6ZSAvIDJ9cHgpIHJvdGF0ZVgoJHthbmdYfWRlZykgcm90YXRlWSgke2FuZ1l9ZGVnKWAgfX1cbiAgICAgICAgb25Nb3VzZURvd249e3dpdGhTd2lwZSA/IGhhbmRsZU1vdmVtZW50U3RhcnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uTW91c2VVcD17d2l0aFN3aXBlID8gaGFuZGxlTW92ZW1lbnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uVG91Y2hFbmQ9e3dpdGhTd2lwZSA/IGhhbmRsZU1vdmVtZW50IDogdW5kZWZpbmVkfVxuICAgICAgICBvblRvdWNoU3RhcnQ9e3dpdGhTd2lwZSA/IGhhbmRsZU1vdmVtZW50U3RhcnQgOiB1bmRlZmluZWR9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtZnJvbnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7ZnJvbnRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWJhY2tcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVooMTgwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7YmFja0NvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtcmlnaHRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3JpZ2h0Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1sZWZ0XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7bGVmdENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtdG9wXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHt0b3BDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWJvdHRvbVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2JvdHRvbUNvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Cb3guZGVmYXVsdFByb3BzID0ge1xuICBiYWNrQ29udGVudDogdW5kZWZpbmVkLFxuICBib3R0b21Db250ZW50OiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBmYWNlOiBDVUJFX0ZBQ0VTLmZyb250LFxuICBmcm9udENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgbGVmdENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgcmlnaHRDb250ZW50OiB1bmRlZmluZWQsXG4gIHNpemU6IDE1MCxcbiAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICB3aXRoU3dpcGU6IGZhbHNlLFxufTtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgYmFja0NvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBib3R0b21Db250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmYWNlOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhDVUJFX0ZBQ0VTKSksXG4gIGZyb250Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGxlZnRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgcmlnaHRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgdG9wQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHdpdGhTd2lwZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iLCJpbXBvcnQgQ3ViZSBmcm9tICcuL0N1YmUnO1xuaW1wb3J0ICcuL2N1YmUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDdWJlIGZyb20gJy4uL0N1YmUnO1xuXG5jb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICBjb25zdCB7IGlubmVySGVpZ2h0LCBpbm5lcldpZHRoIH0gPSB3aW5kb3c7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoKChpbm5lcldpZHRoID4gaW5uZXJIZWlnaHQgPyBpbm5lckhlaWdodCA6IGlubmVyV2lkdGgpICogMC43KSAvIDEwKTtcbn07XG5cbmNvbnN0IGdldE9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG5cbiAgcmV0dXJuIFsgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcgXVtudW1iZXJdO1xufTtcblxuY29uc3QgY29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtYmFja2dyb3VuZFwiIC8+O1xuY29uc3Qgc2l6ZSA9IGdldFNpemUoKTtcbmNvbnN0IHVuYW5pbWF0ZWREaXYgPSA8ZGl2IHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUsIGNvbG9yOiAnYmxhY2snIH19IC8+O1xuXG5jb25zdCBjdWJlT3B0aW9ucyA9IHtcbiAgYm90dG9tQ29udGVudDogY29udGVudCxcbiAgbGVmdENvbnRlbnQ6IGNvbnRlbnQsXG4gIHJpZ2h0Q29udGVudDogY29udGVudCxcbiAgdG9wQ29udGVudDogY29udGVudCxcbn07XG5cbmNvbnN0IEhpID0gKHsgb25IaWRlIH0pID0+IHtcbiAgY29uc3QgWyBhbmltYXRpb24sIHNldEFuaW1hdGlvbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFuaW1hdGlvbihmYWxzZSksIDIwMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SGlkZGVuKHRydWUpLCAyNTAwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZGRlbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb25IaWRlKSB7XG4gICAgICBvbkhpZGUoKTtcbiAgICB9XG4gIH0sIFsgaGlkZGVuIF0pO1xuXG4gIGNvbnN0IHNob3cgPSBhbmltYXRpb24gJiYgIWhpZGRlbjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgaGktY29udGFpbmVyJHtoaWRkZW4gPyAnIGhpZGRlbicgOiAnJ31gfT5cbiAgICAgIDxoMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpbWFyeVwiPk15IEN1VmU8L3NwYW4+IGJ5IDxzcGFuIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPkphdmllciBHYXJjw61hPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGkuZGVmYXVsdFByb3BzID0ge1xuICBvbkhpZGU6IHVuZGVmaW5lZCxcbn07XG5cbkhpLnByb3BUeXBlcyA9IHtcbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpO1xuIiwiaW1wb3J0IEhpIGZyb20gJy4vSGknO1xuaW1wb3J0ICcuL2hpLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBIaTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBJY29uID0gKHsgaWNvbiwgLi4ucmVzdCB9KSA9PiA8aSB7Li4ucmVzdH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPXtpY29ufSAvPjtcblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb246IHVuZGVmaW5lZCxcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgJy4vaWNvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGNsYXNzTmFtZSwgaWNvbiwgdGV4dCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxidXR0b24gY2xhc3NOYW1lPXtgY3VzdG9tLWJ0biR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gdHlwZT1cImJ1dHRvblwiIHsuLi5yZXN0fT5cbiAgICB7aWNvbiAmJiA8SWNvbiBpY29uPXtpY29ufSAvPn1cbiAgICB7dGV4dCAmJiA8c3Bhbj57dGV4dH08L3NwYW4+fVxuICA8L2J1dHRvbj5cbik7XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIHRleHQ6IHVuZGVmaW5lZCxcbn07XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuLy8gaW1wb3J0IHsgQ1VCRV9GQUNFUyB9IGZyb20gJy4uL0N1YmUvQ3ViZSc7XG5cbmNvbnN0IE5hdmJhciA9ICh7IG9uU2VsZWN0LCBzZWxlY3RlZCB9KSA9PiB7XG4gIGNvbnN0IFsgZXhwYW5kZWQsIHNldEV4cGFuZGVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFeHBhbmRlZChmYWxzZSk7XG4gIH0sIFsgc2VsZWN0ZWQgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBzaGFkb3dcIj5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZXhwYW5kLWJ0blwiIGljb249XCJmYXMgZmEtYmFyc1wiIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXRpdGxlXCI+TXkgQ3VWZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdWJ0aXRsZVwiPmJ5IDxzcGFuPkphdmkgR2FyY8OtYSBGYWphcmRvPC9zcGFuPjwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2BuYXZiYXItYnRucyR7ZXhwYW5kZWQgPyAnIGV4cGFuZGVkJyA6ICcnfWB9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci1idG4ke0NVQkVfRkFDRVMubGVmdCA9PT0gc2VsZWN0ZWQgPyAnIG5hdmJhci1idG4tc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIHRleHQ9XCJJbmZvXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtaW5mb1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChDVUJFX0ZBQ0VTLmxlZnQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyLWJ0biR7Q1VCRV9GQUNFUy5mcm9udCA9PT0gc2VsZWN0ZWQgPyAnIG5hdmJhci1idG4tc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIHRleHQ9XCJGb3JtYWNpw7NuXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtZ3JhZHVhdGlvbi1jYXBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoQ1VCRV9GQUNFUy5mcm9udCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZiYXItYnRuJHtDVUJFX0ZBQ0VTLnJpZ2h0ID09PSBzZWxlY3RlZCA/ICcgbmF2YmFyLWJ0bi1zZWxlY3RlZCcgOiAnJ31gfVxuICAgICAgICAgICAgdGV4dD1cIlRyYXllY3RvcmlhXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtY29kZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChDVUJFX0ZBQ0VTLnJpZ2h0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci1idG4ke0NVQkVfRkFDRVMuYmFjayA9PT0gc2VsZWN0ZWQgPyAnIG5hdmJhci1idG4tc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIHRleHQ9XCJTb2NpYWxcIlxuICAgICAgICAgICAgaWNvbj1cImZhYiBmYS1naXRodWJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoQ1VCRV9GQUNFUy5iYWNrKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbk5hdmJhci5wcm9wVHlwZXMgPSB7XG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgJy4vbmF2YmFyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaSBmcm9tICcuLi9jb21wb25lbnRzL0hpJztcbmltcG9ydCBDdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3ViZSc7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DdWJlL0N1YmUnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5cbmNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICByZXR1cm4gKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjg7XG59O1xuY29uc3Qgc2l6ZSA9IGdldFNpemUoKTtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgWyBmYWNlLCBzZXRGYWNlIF0gPSB1c2VTdGF0ZShDVUJFX0ZBQ0VTLmxlZnQpO1xuICBjb25zdCBbIGhpZGRlbkludHJvLCBzZXRIaWRkZW5JbnRybyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGluaXRpYWxUcmFuc2l0aW9uLCBzZXRJbml0aWFsVHJhbnNpdGlvbiBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuSW50cm8pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SW5pdGlhbFRyYW5zaXRpb24oZmFsc2UpLCAxNTAwKTtcbiAgICB9XG4gIH0sIFsgaGlkZGVuSW50cm8gXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZhZGVpblwiPlxuICAgICAgICA8TmF2YmFyIG9uU2VsZWN0PXtzZXRGYWNlfSBzZWxlY3RlZD17ZmFjZX0gLz5cbiAgICAgICAgPEhpIG9uSGlkZT17KCkgPT4gc2V0SGlkZGVuSW50cm8odHJ1ZSl9IC8+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWN1YmVcIiBjbGFzc05hbWU9e2hpZGRlbkludHJvID8gJycgOiAnaGlkZGVuLWN1YmUnfT5cbiAgICAgICAgICA8Q3ViZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbml0aWFsVHJhbnNpdGlvbiA/ICdpbml0aWFsLXRyYW5zaXRpb24nIDogJyd9XG4gICAgICAgICAgICBmYWNlPXtmYWNlfVxuICAgICAgICAgICAgbGVmdENvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5JTkZPPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcm9udENvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5GT1JNQUNJT048L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0Q29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPlRSQVlFQ1RPUklBPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYWNrQ29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPlNPQ0lBTDwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm90dG9tQ29udGVudD17PGRpdj5NYWRlIGJ5IEphdmllciBHYXJjw61hIEZhamFyZG88L2Rpdj59XG4gICAgICAgICAgICB0b3BDb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+SGVsbG8gOik8L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICB3aXRoU3dpcGVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2VzL01haW4nO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxNYWluIC8+XG4gIDwvQnJvd3NlclJvdXRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEFwcCBmcm9tICdBcHAnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9