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
exports.push([module.i, "nav.navbar{position:fixed;top:0;left:0;right:0;z-index:900;display:flex;align-items:center;justify-content:center;background-color:#b71d2b;height:60px;padding:0 16px}nav.navbar .expand-btn{display:none}nav.navbar .navbar-content{max-width:1200px;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between}nav.navbar .navbar-content .navbar-title{font-size:32px;font-weight:bold;color:#fff}nav.navbar .navbar-content .navbar-btns .navbar-btn{border-bottom:2px solid transparent;border-radius:0;height:100%;height:60px}nav.navbar .navbar-content .navbar-btns .navbar-btn:hover{background-color:#cd616b}nav.navbar .navbar-content .navbar-btns .navbar-btn.navbar-btn-selected{border-bottom-color:#fff;background-color:#e9bbbf}@media screen and (max-width: 992px){nav.navbar .navbar-content{justify-content:center;flex-direction:column}nav.navbar .navbar-content .navbar-btns{display:flex;flex-direction:column;position:fixed;top:60px;left:0;right:0}nav.navbar .navbar-content .navbar-btns .custom-btn{max-height:0;padding:0;border:0;opacity:0;pointer-events:none;transition:ease-in-out all .25s}nav.navbar .navbar-content .navbar-btns.expanded{border-top:1px solid #fff}nav.navbar .navbar-content .navbar-btns.expanded .custom-btn{max-height:32px;padding:inherit;opacity:1;pointer-events:all}}\n", ""]);
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
exports.push([module.i, "body{font-family:'Poppins', sans-serif;font-size:14px;margin:0;color:#080808;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow,main #main-container #main-cube .cube-container .cube-face{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);box-shadow:0px 0 8px 2px rgba(136,136,136,0.5)}html{background-color:#fafaff}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;overflow:hidden}main #main-container{padding-top:60px;width:100%;height:calc(100vh - 60px);overflow:auto;display:flex;align-items:center;justify-content:center;flex-direction:column}main #main-container #main-cube .cube-container{transform:scale(1);transition:ease-in-out all 1s .25s}main #main-container #main-cube .cube-container .cube-face{border-radius:16px}main #main-container #main-cube .cube-container .cube-face>*{padding:32px}main #main-container #main-cube .cube-container .cube-face>* h2{margin:0}main #main-container #main-cube .cube-container.initial-transition .cube{transition:ease-in-out all 1s .25s}main #main-container #main-cube.hidden-cube .cube-container{transform:scale(0) rotateZ(270deg)}main #main-container #main-cube.hidden-cube .cube-container .cube{transform:rotateY(360deg) !important}@media screen and (max-width: 8px){main #main-container{height:calc(100vh - 120px)}}\n", ""]);
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



const CUBE_FACES = {
  front: 'front',
  back: 'back',
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom'
};

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

  const _useState5 = Object(react["useState"])(null),
        _useState6 = _slicedToArray(_useState5, 2),
        startX = _useState6[0],
        setStartX = _useState6[1];

  const _useState7 = Object(react["useState"])(null),
        _useState8 = _slicedToArray(_useState7, 2),
        startY = _useState8[0],
        setStartY = _useState8[1];

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
  }, [angX, angY]);

  const handleMovementStart = event => {
    const _event$touches = _slicedToArray(event.touches, 1),
          _event$touches$ = _event$touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;

    setStartX(clientX);
    setStartY(clientY);
  };

  const handleMovement = event => {
    const _event$changedTouches = _slicedToArray(event.changedTouches, 1),
          _event$changedTouches2 = _event$changedTouches[0],
          clientX = _event$changedTouches2.clientX,
          clientY = _event$changedTouches2.clientY;

    const diffX = clientX - startX;
    const diffY = clientY - startY;

    if (50 < Math.abs(diffX)) {
      setAngY(0 < diffX ? angY + 90 : angY - 90);
    }

    if (50 < Math.abs(diffY)) {
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
  return (innerWidth > innerHeight ? innerHeight : innerWidth) * 0.7 / 10;
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
  }, "JGF"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar-btns".concat(expanded ? ' expanded' : '')
  }, /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "navbar-btn".concat(CUBE_FACES.left === selected ? ' navbar-btn-selected' : ''),
    text: "Info",
    icon: "fas fa-info",
    onClick: () => onSelect(CUBE_FACES.left)
  }), /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "navbar-btn".concat(CUBE_FACES.front === selected ? ' navbar-btn-selected' : ''),
    text: "Formaci\xF3n",
    icon: "fas fa-graduation-cap",
    onClick: () => onSelect(CUBE_FACES.front)
  }), /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "navbar-btn".concat(CUBE_FACES.right === selected ? ' navbar-btn-selected' : ''),
    text: "Trayectoria",
    icon: "fas fa-code",
    onClick: () => onSelect(CUBE_FACES.right)
  }), /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "navbar-btn".concat(CUBE_FACES.back === selected ? ' navbar-btn-selected' : ''),
    text: "Social",
    icon: "fab fa-github",
    onClick: () => onSelect(CUBE_FACES.back)
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2Nzcz8xZDc4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaWNvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uc2Nzcz9jNGI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3M/Mjk0OCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NGMzNyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9DdWJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL0hpLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNVQkVfRkFDRVMiLCJmcm9udCIsImJhY2siLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJCb3giLCJiYWNrQ29udGVudCIsImJvdHRvbUNvbnRlbnQiLCJjbGFzc05hbWUiLCJmYWNlIiwiZnJvbnRDb250ZW50IiwibGVmdENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJzaXplIiwidG9wQ29udGVudCIsIndpdGhTd2lwZSIsInVzZVN0YXRlIiwiYW5nWCIsInNldEFuZ1giLCJhbmdZIiwic2V0QW5nWSIsInN0YXJ0WCIsInNldFN0YXJ0WCIsInN0YXJ0WSIsInNldFN0YXJ0WSIsInVzZUVmZmVjdCIsIngiLCJ5IiwiaGFuZGxlTW92ZW1lbnRTdGFydCIsImV2ZW50IiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW92ZW1lbnQiLCJjaGFuZ2VkVG91Y2hlcyIsImRpZmZYIiwiZGlmZlkiLCJNYXRoIiwiYWJzIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm51bWJlciIsImJvb2wiLCJDdWJlIiwiZ2V0U2l6ZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImdldE9wdGlvbiIsImZsb29yIiwicmFuZG9tIiwiY29udGVudCIsInVuYW5pbWF0ZWREaXYiLCJjb2xvciIsImN1YmVPcHRpb25zIiwiSGkiLCJvbkhpZGUiLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJzZXRUaW1lb3V0Iiwic2hvdyIsImZ1bmMiLCJJY29uIiwiaWNvbiIsInJlc3QiLCJCdXR0b24iLCJ0ZXh0IiwiTmF2YmFyIiwib25TZWxlY3QiLCJzZWxlY3RlZCIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJpc1JlcXVpcmVkIiwiTWFpbiIsInNldEZhY2UiLCJoaWRkZW5JbnRybyIsInNldEhpZGRlbkludHJvIiwiaW5pdGlhbFRyYW5zaXRpb24iLCJzZXRJbml0aWFsVHJhbnNpdGlvbiIsIkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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ZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzE0MywxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3ViZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3ViZS1jb250YWluZXIgLmN1YmV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNpdGlvbjplYXNlLWluIGFsbCAuNXN9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZT4qe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1yaWdodHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWJhY2t7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtbGVmdHt0cmFuc2Zvcm06cm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtdG9we3RyYW5zZm9ybTpyb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYm90dG9te3RyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCl9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGkuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpLWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO3otaW5kZXg6MTAwMX0uaGktY29udGFpbmVyIGgxe2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTUlO2ZvbnQtc2l6ZToyMHB4fS5oaS1jb250YWluZXIgaDEgc3Bhbi5wcmltYXJ5e2NvbG9yOiNiNzFkMmI7Zm9udC1zaXplOjMycHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnNlY29uZGFyeXtjb2xvcjojNzhiNmE5O2ZvbnQtc2l6ZToyNHB4fS5oaS1jb250YWluZXIgLmhpe2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTIwMHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21hcmdpbjo0cHggMH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyPmRpdj4qe21hcmdpbjowIDRweH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC53aGl0ZS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjhweDtvdmVyZmxvdzpoaWRkZW59LmhpLWNvbnRhaW5lci5oaWRkZW57b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmhpLWNvbnRhaW5lci5oaWRkZW4gKntwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXsuaGktY29udGFpbmVyIGgxe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1pY29ue21hcmdpbjowO2hlaWdodDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20tYnRue3BhZGRpbmc6OHB4IDE2cHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXM7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfS5jdXN0b20tYnRuPio6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJuYXYubmF2YmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6OTAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7aGVpZ2h0OjYwcHg7cGFkZGluZzowIDE2cHh9bmF2Lm5hdmJhciAuZXhwYW5kLWJ0bntkaXNwbGF5Om5vbmV9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7bWF4LXdpZHRoOjEyMDBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MzJweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiNmZmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zIC5uYXZiYXItYnRue2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MDtoZWlnaHQ6MTAwJTtoZWlnaHQ6NjBweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLWJ0bnMgLm5hdmJhci1idG46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2Q2MTZifW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItYnRucyAubmF2YmFyLWJ0bi5uYXZiYXItYnRuLXNlbGVjdGVke2JvcmRlci1ib3R0b20tY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNlOWJiYmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe25hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50e2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItYnRuc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3Bvc2l0aW9uOmZpeGVkO3RvcDo2MHB4O2xlZnQ6MDtyaWdodDowfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItYnRucyAuY3VzdG9tLWJ0bnttYXgtaGVpZ2h0OjA7cGFkZGluZzowO2JvcmRlcjowO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIC4yNXN9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zLmV4cGFuZGVke2JvcmRlci10b3A6MXB4IHNvbGlkICNmZmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zLmV4cGFuZGVkIC5jdXN0b20tYnRue21heC1oZWlnaHQ6MzJweDtwYWRkaW5nOmluaGVyaXQ7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmFsbH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmFkZWluey13ZWJraXQtYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tb3otYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tcy1hbmltYXRpb246ZmFkZWluIDAuNXM7LW8tYW5pbWF0aW9uOmZhZGVpbiAwLjVzO2FuaW1hdGlvbjpmYWRlaW4gMC41c31Aa2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtbW96LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tcy1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1vLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e2ZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDttYXJnaW46MDtjb2xvcjojMDgwODA4Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6c3VicGl4ZWwtYW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6YXV0b30uc2hhZG93LG1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2V7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpOy1tb3otYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KTtib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpfWh0bWx7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZmfW1haW57ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW59bWFpbiAjbWFpbi1jb250YWluZXJ7cGFkZGluZy10b3A6NjBweDt3aWR0aDoxMDAlO2hlaWdodDpjYWxjKDEwMHZoIC0gNjBweCk7b3ZlcmZsb3c6YXV0bztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufW1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVye3RyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2l0aW9uOmVhc2UtaW4tb3V0IGFsbCAxcyAuMjVzfW1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2V7Ym9yZGVyLXJhZGl1czoxNnB4fW1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2U+KntwYWRkaW5nOjMycHh9bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZT4qIGgye21hcmdpbjowfW1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyLmluaXRpYWwtdHJhbnNpdGlvbiAuY3ViZXt0cmFuc2l0aW9uOmVhc2UtaW4tb3V0IGFsbCAxcyAuMjVzfW1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUuaGlkZGVuLWN1YmUgLmN1YmUtY29udGFpbmVye3RyYW5zZm9ybTpzY2FsZSgwKSByb3RhdGVaKDI3MGRlZyl9bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZS5oaWRkZW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmV7dHJhbnNmb3JtOnJvdGF0ZVkoMzYwZGVnKSAhaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDhweCl7bWFpbiAjbWFpbi1jb250YWluZXJ7aGVpZ2h0OmNhbGMoMTAwdmggLSAxMjBweCl9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBDVUJFX0ZBQ0VTID0ge1xuICBmcm9udDogJ2Zyb250JyxcbiAgYmFjazogJ2JhY2snLFxuICBsZWZ0OiAnbGVmdCcsXG4gIHJpZ2h0OiAncmlnaHQnLFxuICB0b3A6ICd0b3AnLFxuICBib3R0b206ICdib3R0b20nLFxufTtcblxuY29uc3QgQm94ID0gKHtcbiAgYmFja0NvbnRlbnQsXG4gIGJvdHRvbUNvbnRlbnQsXG4gIGNsYXNzTmFtZSxcbiAgZmFjZSxcbiAgZnJvbnRDb250ZW50LFxuICBsZWZ0Q29udGVudCxcbiAgcmlnaHRDb250ZW50LFxuICBzaXplLFxuICB0b3BDb250ZW50LFxuICB3aXRoU3dpcGUsXG59KSA9PiB7XG4gIGNvbnN0IFsgYW5nWCwgc2V0QW5nWCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgYW5nWSwgc2V0QW5nWSBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc3RhcnRYLCBzZXRTdGFydFggXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbIHN0YXJ0WSwgc2V0U3RhcnRZIF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG5cbiAgICBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5mcm9udCkge1xuICAgICAgeSA9IDA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJhY2spIHtcbiAgICAgIHkgPSAtMTgwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5sZWZ0KSB7XG4gICAgICB5ID0gOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLnJpZ2h0KSB7XG4gICAgICB5ID0gLTkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy50b3ApIHtcbiAgICAgIHggPSAtOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJvdHRvbSkge1xuICAgICAgeCA9IDkwO1xuICAgIH1cblxuICAgIHNldEFuZ1goeCk7XG4gICAgc2V0QW5nWSh5KTtcbiAgfSwgWyBmYWNlIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhcnRYKG51bGwpO1xuICAgIHNldFN0YXJ0WShudWxsKTtcbiAgfSwgWyBhbmdYLCBhbmdZIF0pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVtZW50U3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBbIHsgY2xpZW50WCwgY2xpZW50WSB9IF0gPSBldmVudC50b3VjaGVzO1xuXG4gICAgc2V0U3RhcnRYKGNsaWVudFgpO1xuICAgIHNldFN0YXJ0WShjbGllbnRZKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IFsgeyBjbGllbnRYLCBjbGllbnRZIH0gXSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgY29uc3QgZGlmZlggPSBjbGllbnRYIC0gc3RhcnRYO1xuICAgIGNvbnN0IGRpZmZZID0gY2xpZW50WSAtIHN0YXJ0WTtcblxuICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZYKSkge1xuICAgICAgc2V0QW5nWSgwIDwgZGlmZlggPyBhbmdZICsgOTAgOiBhbmdZIC0gOTApO1xuICAgIH1cbiAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWSkpIHtcbiAgICAgIHNldEFuZ1goMCA8IGRpZmZZID8gYW5nWCAtIDkwIDogYW5nWCArIDkwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjdWJlLWNvbnRhaW5lciR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBlcnNwZWN0aXZlOiBzaXplICogMyxcbiAgICAgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjdWJlXCJcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWigtJHtzaXplIC8gMn1weCkgcm90YXRlWCgke2FuZ1h9ZGVnKSByb3RhdGVZKCR7YW5nWX1kZWcpYCB9fVxuICAgICAgICBvblRvdWNoRW5kPXt3aXRoU3dpcGUgPyBoYW5kbGVNb3ZlbWVudCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXt3aXRoU3dpcGUgPyBoYW5kbGVNb3ZlbWVudFN0YXJ0IDogdW5kZWZpbmVkfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWZyb250XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2Zyb250Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1iYWNrXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVaKDE4MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2JhY2tDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLXJpZ2h0XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtyaWdodENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtbGVmdFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2xlZnRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLXRvcFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7dG9wQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1ib3R0b21cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtib3R0b21Db250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFja0NvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgYm90dG9tQ29udGVudDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZmFjZTogQ1VCRV9GQUNFUy5mcm9udCxcbiAgZnJvbnRDb250ZW50OiB1bmRlZmluZWQsXG4gIGxlZnRDb250ZW50OiB1bmRlZmluZWQsXG4gIHJpZ2h0Q29udGVudDogdW5kZWZpbmVkLFxuICBzaXplOiAxNTAsXG4gIHRvcENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgd2l0aFN3aXBlOiBmYWxzZSxcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIGJhY2tDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgYm90dG9tQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmFjZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQ1VCRV9GQUNFUykpLFxuICBmcm9udENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBsZWZ0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHJpZ2h0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvcENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICB3aXRoU3dpcGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIiwiaW1wb3J0IEN1YmUgZnJvbSAnLi9DdWJlJztcbmltcG9ydCAnLi9jdWJlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ3ViZSBmcm9tICcuLi9DdWJlJztcblxuY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gIHJldHVybiAoKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjcpIC8gMTA7XG59O1xuXG5jb25zdCBnZXRPcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXG4gIHJldHVybiBbICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICd0b3AnIF1bbnVtYmVyXTtcbn07XG5cbmNvbnN0IGNvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLWJhY2tncm91bmRcIiAvPjtcbmNvbnN0IHNpemUgPSBnZXRTaXplKCk7XG5jb25zdCB1bmFuaW1hdGVkRGl2ID0gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplLCBjb2xvcjogJ2JsYWNrJyB9fSAvPjtcblxuY29uc3QgY3ViZU9wdGlvbnMgPSB7XG4gIGJvdHRvbUNvbnRlbnQ6IGNvbnRlbnQsXG4gIGxlZnRDb250ZW50OiBjb250ZW50LFxuICByaWdodENvbnRlbnQ6IGNvbnRlbnQsXG4gIHRvcENvbnRlbnQ6IGNvbnRlbnQsXG59O1xuXG5jb25zdCBIaSA9ICh7IG9uSGlkZSB9KSA9PiB7XG4gIGNvbnN0IFsgYW5pbWF0aW9uLCBzZXRBbmltYXRpb24gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBoaWRkZW4sIHNldEhpZGRlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QW5pbWF0aW9uKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRBbmltYXRpb24oZmFsc2UpLCAyMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEhpZGRlbih0cnVlKSwgMjUwMCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoaWRkZW4gJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uSGlkZSkge1xuICAgICAgb25IaWRlKCk7XG4gICAgfVxuICB9LCBbIGhpZGRlbiBdKTtcblxuICBjb25zdCBzaG93ID0gYW5pbWF0aW9uICYmICFoaWRkZW47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhpLWNvbnRhaW5lciR7aGlkZGVuID8gJyBoaWRkZW4nIDogJyd9YH0+XG4gICAgICA8aDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaW1hcnlcIj5NeSBDdVZlPC9zcGFuPiBieSA8c3BhbiBjbGFzc05hbWU9XCJzZWNvbmRhcnlcIj5KYXZpZXIgR2FyY8OtYTwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhpLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25IaWRlOiB1bmRlZmluZWQsXG59O1xuXG5IaS5wcm9wVHlwZXMgPSB7XG4gIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaTtcbiIsImltcG9ydCBIaSBmcm9tICcuL0hpJztcbmltcG9ydCAnLi9oaS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSGk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSWNvbiA9ICh7IGljb24sIC4uLnJlc3QgfSkgPT4gPGkgey4uLnJlc3R9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT17aWNvbn0gLz47XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBpY29uOiB1bmRlZmluZWQsXG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0ICcuL2ljb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5jb25zdCBCdXR0b24gPSAoeyBjbGFzc05hbWUsIGljb24sIHRleHQsIC4uLnJlc3QgfSkgPT4gKFxuICA8YnV0dG9uIGNsYXNzTmFtZT17YGN1c3RvbS1idG4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9IHR5cGU9XCJidXR0b25cIiB7Li4ucmVzdH0+XG4gICAge2ljb24gJiYgPEljb24gaWNvbj17aWNvbn0gLz59XG4gICAge3RleHQgJiYgPHNwYW4+e3RleHR9PC9zcGFuPn1cbiAgPC9idXR0b24+XG4pO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICB0ZXh0OiB1bmRlZmluZWQsXG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IENVQkVfRkFDRVMgfSBmcm9tICcuLi9DdWJlL0N1YmUnO1xuXG5jb25zdCBOYXZiYXIgPSAoeyBvblNlbGVjdCwgc2VsZWN0ZWQgfSkgPT4ge1xuICBjb25zdCBbIGV4cGFuZGVkLCBzZXRFeHBhbmRlZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoZmFsc2UpO1xuICB9LCBbIHNlbGVjdGVkIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc2hhZG93XCI+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImV4cGFuZC1idG5cIiBpY29uPVwiZmFzIGZhLWJhcnNcIiBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci10aXRsZVwiPkpHRjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmJhci1idG5zJHtleHBhbmRlZCA/ICcgZXhwYW5kZWQnIDogJyd9YH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyLWJ0biR7Q1VCRV9GQUNFUy5sZWZ0ID09PSBzZWxlY3RlZCA/ICcgbmF2YmFyLWJ0bi1zZWxlY3RlZCcgOiAnJ31gfVxuICAgICAgICAgICAgdGV4dD1cIkluZm9cIlxuICAgICAgICAgICAgaWNvbj1cImZhcyBmYS1pbmZvXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KENVQkVfRkFDRVMubGVmdCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZiYXItYnRuJHtDVUJFX0ZBQ0VTLmZyb250ID09PSBzZWxlY3RlZCA/ICcgbmF2YmFyLWJ0bi1zZWxlY3RlZCcgOiAnJ31gfVxuICAgICAgICAgICAgdGV4dD1cIkZvcm1hY2nDs25cIlxuICAgICAgICAgICAgaWNvbj1cImZhcyBmYS1ncmFkdWF0aW9uLWNhcFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChDVUJFX0ZBQ0VTLmZyb250KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci1idG4ke0NVQkVfRkFDRVMucmlnaHQgPT09IHNlbGVjdGVkID8gJyBuYXZiYXItYnRuLXNlbGVjdGVkJyA6ICcnfWB9XG4gICAgICAgICAgICB0ZXh0PVwiVHJheWVjdG9yaWFcIlxuICAgICAgICAgICAgaWNvbj1cImZhcyBmYS1jb2RlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KENVQkVfRkFDRVMucmlnaHQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyLWJ0biR7Q1VCRV9GQUNFUy5iYWNrID09PSBzZWxlY3RlZCA/ICcgbmF2YmFyLWJ0bi1zZWxlY3RlZCcgOiAnJ31gfVxuICAgICAgICAgICAgdGV4dD1cIlNvY2lhbFwiXG4gICAgICAgICAgICBpY29uPVwiZmFiIGZhLWdpdGh1YlwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChDVUJFX0ZBQ0VTLmJhY2spfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5OYXZiYXIucHJvcFR5cGVzID0ge1xuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuaW1wb3J0ICcuL25hdmJhci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGkgZnJvbSAnLi4vY29tcG9uZW50cy9IaSc7XG5pbXBvcnQgQ3ViZSBmcm9tICcuLi9jb21wb25lbnRzL0N1YmUnO1xuaW1wb3J0IHsgQ1VCRV9GQUNFUyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ3ViZS9DdWJlJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuXG5jb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICBjb25zdCB7IGlubmVySGVpZ2h0LCBpbm5lcldpZHRoIH0gPSB3aW5kb3c7XG5cbiAgcmV0dXJuIChpbm5lcldpZHRoID4gaW5uZXJIZWlnaHQgPyBpbm5lckhlaWdodCA6IGlubmVyV2lkdGgpICogMC44O1xufTtcbmNvbnN0IHNpemUgPSBnZXRTaXplKCk7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFsgZmFjZSwgc2V0RmFjZSBdID0gdXNlU3RhdGUoQ1VCRV9GQUNFUy5sZWZ0KTtcbiAgY29uc3QgWyBoaWRkZW5JbnRybywgc2V0SGlkZGVuSW50cm8gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBpbml0aWFsVHJhbnNpdGlvbiwgc2V0SW5pdGlhbFRyYW5zaXRpb24gXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZGRlbkludHJvKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEluaXRpYWxUcmFuc2l0aW9uKGZhbHNlKSwgMTUwMCk7XG4gICAgfVxuICB9LCBbIGhpZGRlbkludHJvIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJmYWRlaW5cIj5cbiAgICAgICAgPE5hdmJhciBvblNlbGVjdD17c2V0RmFjZX0gc2VsZWN0ZWQ9e2ZhY2V9IC8+XG4gICAgICAgIDxIaSBvbkhpZGU9eygpID0+IHNldEhpZGRlbkludHJvKHRydWUpfSAvPlxuICAgICAgICA8ZGl2IGlkPVwibWFpbi1jdWJlXCIgY2xhc3NOYW1lPXtoaWRkZW5JbnRybyA/ICcnIDogJ2hpZGRlbi1jdWJlJ30+XG4gICAgICAgICAgPEN1YmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5pdGlhbFRyYW5zaXRpb24gPyAnaW5pdGlhbC10cmFuc2l0aW9uJyA6ICcnfVxuICAgICAgICAgICAgZmFjZT17ZmFjZX1cbiAgICAgICAgICAgIGxlZnRDb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+SU5GTzwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJvbnRDb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+Rk9STUFDSU9OPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodENvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5UUkFZRUNUT1JJQTwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmFja0NvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5TT0NJQUw8L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvdHRvbUNvbnRlbnQ9ezxkaXY+TWFkZSBieSBKYXZpZXIgR2FyY8OtYSBGYWphcmRvPC9kaXY+fVxuICAgICAgICAgICAgdG9wQ29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkhlbGxvIDopPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgd2l0aFN3aXBlXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9NYWluJztcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8QnJvd3NlclJvdXRlcj5cbiAgICA8TWFpbiAvPlxuICA8L0Jyb3dzZXJSb3V0ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnQXBwJztcblxuaW1wb3J0ICcuL3N0eWxlcy9hbmltYXRpb25zLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==