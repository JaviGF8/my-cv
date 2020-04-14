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
exports.push([module.i, "body{font-family:'Poppins', sans-serif;font-size:14px;margin:0;color:#080808;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow,main #main-container #main-cube .cube-container .cube-face{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);box-shadow:0px 0 8px 2px rgba(136,136,136,0.5)}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;height:100vh;overflow:hidden;background-color:#fafaff}main #main-container{width:100%;height:100vh;overflow:auto;display:flex;align-items:center;justify-content:center;flex-direction:column}main #main-container #main-cube .cube-container{transform:scale(1);transition:ease-in-out all 1s .25s}main #main-container #main-cube .cube-container .cube{transition:ease-in-out all 1s .25s}main #main-container #main-cube .cube-container .cube-face{border-radius:16px}main #main-container #main-cube .cube-container .cube-face>*{padding:32px}main #main-container #main-cube .cube-container .cube-face>* h2{margin:0}main #main-container #main-cube.hidden-cube .cube-container{transform:scale(0) rotateZ(180deg)}main #main-container #main-cube.hidden-cube .cube-container .cube{transform:rotateY(360deg) !important}\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2Nzcz8xZDc4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaWNvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uc2Nzcz9jNGI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3M/Mjk0OCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NGMzNyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9DdWJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL0hpLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNVQkVfRkFDRVMiLCJmcm9udCIsImJhY2siLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJCb3giLCJiYWNrQ29udGVudCIsImJvdHRvbUNvbnRlbnQiLCJjbGFzc05hbWUiLCJmYWNlIiwiZnJvbnRDb250ZW50IiwibGVmdENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJzaXplIiwidG9wQ29udGVudCIsIndpdGhTd2lwZSIsInVzZVN0YXRlIiwiYW5nWCIsInNldEFuZ1giLCJhbmdZIiwic2V0QW5nWSIsInN0YXJ0WCIsInNldFN0YXJ0WCIsInN0YXJ0WSIsInNldFN0YXJ0WSIsInVzZUVmZmVjdCIsIngiLCJ5IiwiaGFuZGxlTW92ZW1lbnRTdGFydCIsImV2ZW50IiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW92ZW1lbnQiLCJjaGFuZ2VkVG91Y2hlcyIsImRpZmZYIiwiZGlmZlkiLCJNYXRoIiwiYWJzIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm51bWJlciIsImJvb2wiLCJDdWJlIiwiZ2V0U2l6ZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImdldE9wdGlvbiIsImZsb29yIiwicmFuZG9tIiwiY29udGVudCIsInVuYW5pbWF0ZWREaXYiLCJjb2xvciIsImN1YmVPcHRpb25zIiwiSGkiLCJvbkhpZGUiLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJzZXRUaW1lb3V0Iiwic2hvdyIsImZ1bmMiLCJJY29uIiwiaWNvbiIsInJlc3QiLCJCdXR0b24iLCJ0ZXh0IiwiTmF2YmFyIiwib25TZWxlY3QiLCJzZWxlY3RlZCIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJpc1JlcXVpcmVkIiwiTWFpbiIsInNldEZhY2UiLCJoaWRkZW5JbnRybyIsInNldEhpZGRlbkludHJvIiwiQXBwIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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LGtCQUNFLDhCQUFDLGVBQUQ7QUFDRSxRQUFJLEVBQUVsRixJQURSO0FBRUUsZUFBVyxlQUNULHdEQUNFLGlEQURGLENBSEo7QUFPRSxnQkFBWSxlQUNWLHdEQUNFLHNEQURGLENBUko7QUFZRSxnQkFBWSxlQUNWLHdEQUNFLHdEQURGLENBYko7QUFpQkUsZUFBVyxlQUNULHdEQUNFLG1EQURGLENBbEJKO0FBc0JFLGlCQUFhLGVBQUUsOEVBdEJqQjtBQXVCRSxjQUFVLGVBQ1Isd0RBQ0UscURBREYsQ0F4Qko7QUE0QkUsUUFBSSxFQUFFSSxTQTVCUjtBQTZCRSxhQUFTO0FBN0JYLElBREYsQ0FIRixDQURGLENBREY7QUF5Q0QsQ0E3Q0Q7O0FBK0NlNEUsbURBQWYsRTs7QUM1REE7QUFDQTtBQUVBOztBQUVBLE1BQU1JLEdBQUcsR0FBRyxtQkFDViw4QkFBQyx5Q0FBRCxxQkFDRSw4QkFBQyxVQUFELE9BREYsQ0FERjs7QUFNZUEsK0NBQWYsRTs7Ozs7Ozs7QUNYQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUFDLG1CQUFRLENBQUNDLE1BQVQsZUFBZ0IsOEJBQUMsT0FBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXpCLEUiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzE0MywxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3ViZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3ViZS1jb250YWluZXIgLmN1YmV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNpdGlvbjplYXNlLWluIGFsbCAuNXN9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZT4qe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1yaWdodHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWJhY2t7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtbGVmdHt0cmFuc2Zvcm06cm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtdG9we3RyYW5zZm9ybTpyb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYm90dG9te3RyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCl9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGkuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpLWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO3otaW5kZXg6MTAwMX0uaGktY29udGFpbmVyIGgxe2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTUlO2ZvbnQtc2l6ZToyMHB4fS5oaS1jb250YWluZXIgaDEgc3Bhbi5wcmltYXJ5e2NvbG9yOiNiNzFkMmI7Zm9udC1zaXplOjMycHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnNlY29uZGFyeXtjb2xvcjojNzhiNmE5O2ZvbnQtc2l6ZToyNHB4fS5oaS1jb250YWluZXIgLmhpe2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTIwMHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21hcmdpbjo0cHggMH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyPmRpdj4qe21hcmdpbjowIDRweH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC53aGl0ZS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjhweDtvdmVyZmxvdzpoaWRkZW59LmhpLWNvbnRhaW5lci5oaWRkZW57b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmhpLWNvbnRhaW5lci5oaWRkZW4gKntwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXsuaGktY29udGFpbmVyIGgxe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1pY29ue21hcmdpbjowO2hlaWdodDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20tYnRue3BhZGRpbmc6OHB4IDE2cHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXM7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfS5jdXN0b20tYnRuPio6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJuYXYubmF2YmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6OTAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7aGVpZ2h0OjYwcHg7cGFkZGluZzowIDE2cHh9bmF2Lm5hdmJhciAuZXhwYW5kLWJ0bntkaXNwbGF5Om5vbmV9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7bWF4LXdpZHRoOjEyMDBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MzJweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiNmZmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zIC5uYXZiYXItYnRue2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MDtoZWlnaHQ6MTAwJTtoZWlnaHQ6NjBweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLWJ0bnMgLm5hdmJhci1idG46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojY2Q2MTZifW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItYnRucyAubmF2YmFyLWJ0bi5uYXZiYXItYnRuLXNlbGVjdGVke2JvcmRlci1ib3R0b20tY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNlOWJiYmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe25hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50e2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItYnRuc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3Bvc2l0aW9uOmZpeGVkO3RvcDo2MHB4O2xlZnQ6MDtyaWdodDowfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItYnRucyAuY3VzdG9tLWJ0bnttYXgtaGVpZ2h0OjA7cGFkZGluZzowO2JvcmRlcjowO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIC4yNXN9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zLmV4cGFuZGVke2JvcmRlci10b3A6MXB4IHNvbGlkICNmZmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zLmV4cGFuZGVkIC5jdXN0b20tYnRue21heC1oZWlnaHQ6MzJweDtwYWRkaW5nOmluaGVyaXQ7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmFsbH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmFkZWluey13ZWJraXQtYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tb3otYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tcy1hbmltYXRpb246ZmFkZWluIDAuNXM7LW8tYW5pbWF0aW9uOmZhZGVpbiAwLjVzO2FuaW1hdGlvbjpmYWRlaW4gMC41c31Aa2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtbW96LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tcy1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1vLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e2ZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDttYXJnaW46MDtjb2xvcjojMDgwODA4Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6c3VicGl4ZWwtYW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6YXV0b30uc2hhZG93LG1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2V7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpOy1tb3otYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KTtib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpfW1haW57ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6I2ZhZmFmZn1tYWluICNtYWluLWNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDB2aDtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIDFzIC4yNXN9bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmV7dHJhbnNpdGlvbjplYXNlLWluLW91dCBhbGwgMXMgLjI1c31tYWluICNtYWluLWNvbnRhaW5lciAjbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZS1mYWNle2JvcmRlci1yYWRpdXM6MTZweH1tYWluICNtYWluLWNvbnRhaW5lciAjbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZS1mYWNlPip7cGFkZGluZzozMnB4fW1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2U+KiBoMnttYXJnaW46MH1tYWluICNtYWluLWNvbnRhaW5lciAjbWFpbi1jdWJlLmhpZGRlbi1jdWJlIC5jdWJlLWNvbnRhaW5lcnt0cmFuc2Zvcm06c2NhbGUoMCkgcm90YXRlWigxODBkZWcpfW1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUuaGlkZGVuLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJle3RyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZykgIWltcG9ydGFudH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ1VCRV9GQUNFUyA9IHtcbiAgZnJvbnQ6ICdmcm9udCcsXG4gIGJhY2s6ICdiYWNrJyxcbiAgbGVmdDogJ2xlZnQnLFxuICByaWdodDogJ3JpZ2h0JyxcbiAgdG9wOiAndG9wJyxcbiAgYm90dG9tOiAnYm90dG9tJyxcbn07XG5cbmNvbnN0IEJveCA9ICh7XG4gIGJhY2tDb250ZW50LFxuICBib3R0b21Db250ZW50LFxuICBjbGFzc05hbWUsXG4gIGZhY2UsXG4gIGZyb250Q29udGVudCxcbiAgbGVmdENvbnRlbnQsXG4gIHJpZ2h0Q29udGVudCxcbiAgc2l6ZSxcbiAgdG9wQ29udGVudCxcbiAgd2l0aFN3aXBlLFxufSkgPT4ge1xuICBjb25zdCBbIGFuZ1gsIHNldEFuZ1ggXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGFuZ1ksIHNldEFuZ1kgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHN0YXJ0WCwgc2V0U3RhcnRYIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgWyBzdGFydFksIHNldFN0YXJ0WSBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuXG4gICAgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuZnJvbnQpIHtcbiAgICAgIHkgPSAwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5iYWNrKSB7XG4gICAgICB5ID0gLTE4MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMubGVmdCkge1xuICAgICAgeSA9IDkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5yaWdodCkge1xuICAgICAgeSA9IC05MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMudG9wKSB7XG4gICAgICB4ID0gLTkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5ib3R0b20pIHtcbiAgICAgIHggPSA5MDtcbiAgICB9XG5cbiAgICBzZXRBbmdYKHgpO1xuICAgIHNldEFuZ1koeSk7XG4gIH0sIFsgZmFjZSBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXJ0WChudWxsKTtcbiAgICBzZXRTdGFydFkobnVsbCk7XG4gIH0sIFsgYW5nWCwgYW5nWSBdKTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudFN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgWyB7IGNsaWVudFgsIGNsaWVudFkgfSBdID0gZXZlbnQudG91Y2hlcztcblxuICAgIHNldFN0YXJ0WChjbGllbnRYKTtcbiAgICBzZXRTdGFydFkoY2xpZW50WSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW92ZW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBbIHsgY2xpZW50WCwgY2xpZW50WSB9IF0gPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcblxuICAgIGNvbnN0IGRpZmZYID0gY2xpZW50WCAtIHN0YXJ0WDtcbiAgICBjb25zdCBkaWZmWSA9IGNsaWVudFkgLSBzdGFydFk7XG5cbiAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWCkpIHtcbiAgICAgIHNldEFuZ1koMCA8IGRpZmZYID8gYW5nWSArIDkwIDogYW5nWSAtIDkwKTtcbiAgICB9XG4gICAgaWYgKDUwIDwgTWF0aC5hYnMoZGlmZlkpKSB7XG4gICAgICBzZXRBbmdYKDAgPCBkaWZmWSA/IGFuZ1ggLSA5MCA6IGFuZ1ggKyA5MCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgY3ViZS1jb250YWluZXIke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBwZXJzcGVjdGl2ZTogc2l6ZSAqIDMsXG4gICAgICB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY3ViZVwiXG4gICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVooLSR7c2l6ZSAvIDJ9cHgpIHJvdGF0ZVgoJHthbmdYfWRlZykgcm90YXRlWSgke2FuZ1l9ZGVnKWAgfX1cbiAgICAgICAgb25Ub3VjaEVuZD17d2l0aFN3aXBlID8gaGFuZGxlTW92ZW1lbnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uVG91Y2hTdGFydD17d2l0aFN3aXBlID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1mcm9udFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtmcm9udENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYmFja1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDE4MGRlZykgcm90YXRlWigxODBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtiYWNrQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1yaWdodFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7cmlnaHRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWxlZnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtsZWZ0Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS10b3BcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3RvcENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYm90dG9tXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7Ym90dG9tQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tDb250ZW50OiB1bmRlZmluZWQsXG4gIGJvdHRvbUNvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGZhY2U6IENVQkVfRkFDRVMuZnJvbnQsXG4gIGZyb250Q29udGVudDogdW5kZWZpbmVkLFxuICBsZWZ0Q29udGVudDogdW5kZWZpbmVkLFxuICByaWdodENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgc2l6ZTogMTUwLFxuICB0b3BDb250ZW50OiB1bmRlZmluZWQsXG4gIHdpdGhTd2lwZTogZmFsc2UsXG59O1xuXG5Cb3gucHJvcFR5cGVzID0ge1xuICBiYWNrQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGJvdHRvbUNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZhY2U6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKENVQkVfRkFDRVMpKSxcbiAgZnJvbnRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgbGVmdENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICByaWdodENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3BDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgd2l0aFN3aXBlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCBDdWJlIGZyb20gJy4vQ3ViZSc7XG5pbXBvcnQgJy4vY3ViZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEN1YmUgZnJvbSAnLi4vQ3ViZSc7XG5cbmNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICByZXR1cm4gKChpbm5lcldpZHRoID4gaW5uZXJIZWlnaHQgPyBpbm5lckhlaWdodCA6IGlubmVyV2lkdGgpICogMC43KSAvIDEwO1xufTtcblxuY29uc3QgZ2V0T3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcblxuICByZXR1cm4gWyAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJyBdW251bWJlcl07XG59O1xuXG5jb25zdCBjb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1iYWNrZ3JvdW5kXCIgLz47XG5jb25zdCBzaXplID0gZ2V0U2l6ZSgpO1xuY29uc3QgdW5hbmltYXRlZERpdiA9IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSwgY29sb3I6ICdibGFjaycgfX0gLz47XG5cbmNvbnN0IGN1YmVPcHRpb25zID0ge1xuICBib3R0b21Db250ZW50OiBjb250ZW50LFxuICBsZWZ0Q29udGVudDogY29udGVudCxcbiAgcmlnaHRDb250ZW50OiBjb250ZW50LFxuICB0b3BDb250ZW50OiBjb250ZW50LFxufTtcblxuY29uc3QgSGkgPSAoeyBvbkhpZGUgfSkgPT4ge1xuICBjb25zdCBbIGFuaW1hdGlvbiwgc2V0QW5pbWF0aW9uIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgaGlkZGVuLCBzZXRIaWRkZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFuaW1hdGlvbih0cnVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QW5pbWF0aW9uKGZhbHNlKSwgMjAwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRIaWRkZW4odHJ1ZSksIDI1MDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBvbkhpZGUpIHtcbiAgICAgIG9uSGlkZSgpO1xuICAgIH1cbiAgfSwgWyBoaWRkZW4gXSk7XG5cbiAgY29uc3Qgc2hvdyA9IGFuaW1hdGlvbiAmJiAhaGlkZGVuO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BoaS1jb250YWluZXIke2hpZGRlbiA/ICcgaGlkZGVuJyA6ICcnfWB9PlxuICAgICAgPGgxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmltYXJ5XCI+TXkgQ3VWZTwvc3Bhbj4gYnkgPHNwYW4gY2xhc3NOYW1lPVwic2Vjb25kYXJ5XCI+SmF2aWVyIEdhcmPDrWE8L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5IaS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uSGlkZTogdW5kZWZpbmVkLFxufTtcblxuSGkucHJvcFR5cGVzID0ge1xuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGk7XG4iLCJpbXBvcnQgSGkgZnJvbSAnLi9IaSc7XG5pbXBvcnQgJy4vaGkuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEhpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEljb24gPSAoeyBpY29uLCAuLi5yZXN0IH0pID0+IDxpIHsuLi5yZXN0fSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9e2ljb259IC8+O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCAnLi9pY29uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuY29uc3QgQnV0dG9uID0gKHsgY2xhc3NOYW1lLCBpY29uLCB0ZXh0LCAuLi5yZXN0IH0pID0+IChcbiAgPGJ1dHRvbiBjbGFzc05hbWU9e2BjdXN0b20tYnRuJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfSB0eXBlPVwiYnV0dG9uXCIgey4uLnJlc3R9PlxuICAgIHtpY29uICYmIDxJY29uIGljb249e2ljb259IC8+fVxuICAgIHt0ZXh0ICYmIDxzcGFuPnt0ZXh0fTwvc3Bhbj59XG4gIDwvYnV0dG9uPlxuKTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkLFxufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgJy4vYnV0dG9uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vQ3ViZS9DdWJlJztcblxuY29uc3QgTmF2YmFyID0gKHsgb25TZWxlY3QsIHNlbGVjdGVkIH0pID0+IHtcbiAgY29uc3QgWyBleHBhbmRlZCwgc2V0RXhwYW5kZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEV4cGFuZGVkKGZhbHNlKTtcbiAgfSwgWyBzZWxlY3RlZCBdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHNoYWRvd1wiPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJleHBhbmQtYnRuXCIgaWNvbj1cImZhcyBmYS1iYXJzXCIgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItdGl0bGVcIj5KR0Y8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXZiYXItYnRucyR7ZXhwYW5kZWQgPyAnIGV4cGFuZGVkJyA6ICcnfWB9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci1idG4ke0NVQkVfRkFDRVMubGVmdCA9PT0gc2VsZWN0ZWQgPyAnIG5hdmJhci1idG4tc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIHRleHQ9XCJJbmZvXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtaW5mb1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChDVUJFX0ZBQ0VTLmxlZnQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyLWJ0biR7Q1VCRV9GQUNFUy5mcm9udCA9PT0gc2VsZWN0ZWQgPyAnIG5hdmJhci1idG4tc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIHRleHQ9XCJGb3JtYWNpw7NuXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtZ3JhZHVhdGlvbi1jYXBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoQ1VCRV9GQUNFUy5mcm9udCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZiYXItYnRuJHtDVUJFX0ZBQ0VTLnJpZ2h0ID09PSBzZWxlY3RlZCA/ICcgbmF2YmFyLWJ0bi1zZWxlY3RlZCcgOiAnJ31gfVxuICAgICAgICAgICAgdGV4dD1cIlRyYXllY3RvcmlhXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtY29kZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChDVUJFX0ZBQ0VTLnJpZ2h0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci1idG4ke0NVQkVfRkFDRVMuYmFjayA9PT0gc2VsZWN0ZWQgPyAnIG5hdmJhci1idG4tc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIHRleHQ9XCJTb2NpYWxcIlxuICAgICAgICAgICAgaWNvbj1cImZhYiBmYS1naXRodWJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoQ1VCRV9GQUNFUy5iYWNrKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuTmF2YmFyLnByb3BUeXBlcyA9IHtcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcbmltcG9ydCAnLi9uYXZiYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaSBmcm9tICcuLi9jb21wb25lbnRzL0hpJztcbmltcG9ydCBDdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3ViZSc7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DdWJlL0N1YmUnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5cbmNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICByZXR1cm4gKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjg7XG59O1xuY29uc3Qgc2l6ZSA9IGdldFNpemUoKTtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgWyBmYWNlLCBzZXRGYWNlIF0gPSB1c2VTdGF0ZShDVUJFX0ZBQ0VTLmxlZnQpO1xuICBjb25zdCBbIGhpZGRlbkludHJvLCBzZXRIaWRkZW5JbnRybyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJmYWRlaW5cIj5cbiAgICAgICAgPE5hdmJhciBvblNlbGVjdD17c2V0RmFjZX0gc2VsZWN0ZWQ9e2ZhY2V9IC8+XG4gICAgICAgIDxIaSBvbkhpZGU9eygpID0+IHNldEhpZGRlbkludHJvKHRydWUpfSAvPlxuICAgICAgICA8ZGl2IGlkPVwibWFpbi1jdWJlXCIgY2xhc3NOYW1lPXtoaWRkZW5JbnRybyA/ICcnIDogJ2hpZGRlbi1jdWJlJ30+XG4gICAgICAgICAgPEN1YmVcbiAgICAgICAgICAgIGZhY2U9e2ZhY2V9XG4gICAgICAgICAgICBsZWZ0Q29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPklORk88L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyb250Q29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkZPUk1BQ0lPTjwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRDb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+VFJBWUVDVE9SSUE8L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJhY2tDb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+U09DSUFMPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib3R0b21Db250ZW50PXs8ZGl2Pk1hZGUgYnkgSmF2aWVyIEdhcmPDrWEgRmFqYXJkbzwvZGl2Pn1cbiAgICAgICAgICAgIHRvcENvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5IZWxsbyA6KTwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgIHdpdGhTd2lwZVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPE1haW4gLz5cbiAgPC9Ccm93c2VyUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=