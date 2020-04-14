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
exports.push([module.i, "body{font-family:'Poppins', sans-serif;font-size:14px;margin:0;color:#080808;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow,main #main-container #main-cube .cube .cube-face{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);box-shadow:0px 0 8px 2px rgba(136,136,136,0.5)}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;height:100vh;overflow:hidden;background-color:#fafaff}main #main-container{width:100%;height:100vh;overflow:auto;display:flex;align-items:center;justify-content:center;flex-direction:column}main #main-container #main-cube .cube .cube-face{border-radius:16px}main #main-container #main-cube .cube .cube-face>*{padding:32px}main #main-container #main-cube .cube .cube-face>* h2{margin:0}\n", ""]);
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

const Hi = () => {
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

  return /*#__PURE__*/react_default.a.createElement("main", null, /*#__PURE__*/react_default.a.createElement("div", {
    id: "main-container",
    className: "fadein"
  }, /*#__PURE__*/react_default.a.createElement(components_Navbar, {
    onSelect: setFace,
    selected: face
  }), /*#__PURE__*/react_default.a.createElement(components_Hi, null), /*#__PURE__*/react_default.a.createElement("div", {
    id: "main-cube"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2Nzcz8xZDc4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaWNvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uc2Nzcz9jNGI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3M/Mjk0OCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NGMzNyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9DdWJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL0hpLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNVQkVfRkFDRVMiLCJmcm9udCIsImJhY2siLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJCb3giLCJiYWNrQ29udGVudCIsImJvdHRvbUNvbnRlbnQiLCJjbGFzc05hbWUiLCJmYWNlIiwiZnJvbnRDb250ZW50IiwibGVmdENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJzaXplIiwidG9wQ29udGVudCIsIndpdGhTd2lwZSIsInVzZVN0YXRlIiwiYW5nWCIsInNldEFuZ1giLCJhbmdZIiwic2V0QW5nWSIsInN0YXJ0WCIsInNldFN0YXJ0WCIsInN0YXJ0WSIsInNldFN0YXJ0WSIsInVzZUVmZmVjdCIsIngiLCJ5IiwiaGFuZGxlTW92ZW1lbnRTdGFydCIsImV2ZW50IiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW92ZW1lbnQiLCJjaGFuZ2VkVG91Y2hlcyIsImRpZmZYIiwiZGlmZlkiLCJNYXRoIiwiYWJzIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm51bWJlciIsImJvb2wiLCJDdWJlIiwiZ2V0U2l6ZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImdldE9wdGlvbiIsImZsb29yIiwicmFuZG9tIiwiY29udGVudCIsInVuYW5pbWF0ZWREaXYiLCJjb2xvciIsImN1YmVPcHRpb25zIiwiSGkiLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJzZXRUaW1lb3V0Iiwic2hvdyIsIkljb24iLCJpY29uIiwicmVzdCIsIkJ1dHRvbiIsInRleHQiLCJOYXZiYXIiLCJvblNlbGVjdCIsInNlbGVjdGVkIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiTWFpbiIsInNldEZhY2UiLCJBcHAiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7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OiJpbmRleF9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMTQzLDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdWJlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdWJlLWNvbnRhaW5lciAuY3ViZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2l0aW9uOmVhc2UtaW4gYWxsIC41c30uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODtjb2xvcjojZmZmfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlPip7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZnJvbnR7dHJhbnNmb3JtOnJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLXJpZ2h0e3RyYW5zZm9ybTpyb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYmFja3t0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1sZWZ0e3RyYW5zZm9ybTpyb3RhdGVaKDE4MGRlZykgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS10b3B7dHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1ib3R0b217dHJhbnNmb3JtOnJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oaS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXM7ei1pbmRleDoxMDAxfS5oaS1jb250YWluZXIgaDF7Y29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NSU7Zm9udC1zaXplOjIwcHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnByaW1hcnl7Y29sb3I6I2I3MWQyYjtmb250LXNpemU6MzJweH0uaGktY29udGFpbmVyIGgxIHNwYW4uc2Vjb25kYXJ5e2NvbG9yOiM3OGI2YTk7Zm9udC1zaXplOjI0cHh9LmhpLWNvbnRhaW5lciAuaGl7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMjAwcHh9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlcntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXB9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlcj5kaXZ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7bWFyZ2luOjRweCAwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2Pip7bWFyZ2luOjAgNHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXIgLndoaXRlLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6OHB4O292ZXJmbG93OmhpZGRlbn0uaGktY29udGFpbmVyLmhpZGRlbntvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0uaGktY29udGFpbmVyLmhpZGRlbiAqe3BvaW50ZXItZXZlbnRzOm5vbmV9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpey5oaS1jb250YWluZXIgaDF7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaWNvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3VzdG9tLWljb257bWFyZ2luOjA7aGVpZ2h0OjhweH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1idG57cGFkZGluZzo4cHggMTZweDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MDtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2I3MWQyYjt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjI1cztvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXJ9LmN1c3RvbS1idG4+Kjpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tbGVmdDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm5hdi5uYXZiYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDo5MDA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I2I3MWQyYjtoZWlnaHQ6NjBweDtwYWRkaW5nOjAgMTZweH1uYXYubmF2YmFyIC5leHBhbmQtYnRue2Rpc3BsYXk6bm9uZX1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudHttYXgtd2lkdGg6MTIwMHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxle2ZvbnQtc2l6ZTozMnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6I2ZmZn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLWJ0bnMgLm5hdmJhci1idG57Ym9yZGVyLWJvdHRvbToycHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czowO2hlaWdodDoxMDAlO2hlaWdodDo2MHB4fW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItYnRucyAubmF2YmFyLWJ0bjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjZDYxNmJ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zIC5uYXZiYXItYnRuLm5hdmJhci1idG4tc2VsZWN0ZWR7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2U5YmJiZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cG9zaXRpb246Zml4ZWQ7dG9wOjYwcHg7bGVmdDowO3JpZ2h0OjB9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1idG5zIC5jdXN0b20tYnRue21heC1oZWlnaHQ6MDtwYWRkaW5nOjA7Ym9yZGVyOjA7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjplYXNlLWluLW91dCBhbGwgLjI1c31uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLWJ0bnMuZXhwYW5kZWR7Ym9yZGVyLXRvcDoxcHggc29saWQgI2ZmZn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLWJ0bnMuZXhwYW5kZWQgLmN1c3RvbS1idG57bWF4LWhlaWdodDozMnB4O3BhZGRpbmc6aW5oZXJpdDtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YWxsfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYWRlaW57LXdlYmtpdC1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1vei1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1zLWFuaW1hdGlvbjpmYWRlaW4gMC41czstby1hbmltYXRpb246ZmFkZWluIDAuNXM7YW5pbWF0aW9uOmZhZGVpbiAwLjVzfUBrZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tb3ota2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW1zLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW8ta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7Zm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowO2NvbG9yOiMwODA4MDg7LXdlYmtpdC1mb250LXNtb290aGluZzpzdWJwaXhlbC1hbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzphdXRvfS5zaGFkb3csbWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZSAuY3ViZS1mYWNley13ZWJraXQtYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KTstbW96LWJveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSk7Ym94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KX1tYWlue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMHZoO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmZ9bWFpbiAjbWFpbi1jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7b3ZlcmZsb3c6YXV0bztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufW1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUgLmN1YmUtZmFjZXtib3JkZXItcmFkaXVzOjE2cHh9bWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZSAuY3ViZS1mYWNlPip7cGFkZGluZzozMnB4fW1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUgLmN1YmUtZmFjZT4qIGgye21hcmdpbjowfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBDVUJFX0ZBQ0VTID0ge1xuICBmcm9udDogJ2Zyb250JyxcbiAgYmFjazogJ2JhY2snLFxuICBsZWZ0OiAnbGVmdCcsXG4gIHJpZ2h0OiAncmlnaHQnLFxuICB0b3A6ICd0b3AnLFxuICBib3R0b206ICdib3R0b20nLFxufTtcblxuY29uc3QgQm94ID0gKHtcbiAgYmFja0NvbnRlbnQsXG4gIGJvdHRvbUNvbnRlbnQsXG4gIGNsYXNzTmFtZSxcbiAgZmFjZSxcbiAgZnJvbnRDb250ZW50LFxuICBsZWZ0Q29udGVudCxcbiAgcmlnaHRDb250ZW50LFxuICBzaXplLFxuICB0b3BDb250ZW50LFxuICB3aXRoU3dpcGUsXG59KSA9PiB7XG4gIGNvbnN0IFsgYW5nWCwgc2V0QW5nWCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgYW5nWSwgc2V0QW5nWSBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc3RhcnRYLCBzZXRTdGFydFggXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbIHN0YXJ0WSwgc2V0U3RhcnRZIF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG5cbiAgICBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5mcm9udCkge1xuICAgICAgeSA9IDA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJhY2spIHtcbiAgICAgIHkgPSAtMTgwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5sZWZ0KSB7XG4gICAgICB5ID0gOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLnJpZ2h0KSB7XG4gICAgICB5ID0gLTkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy50b3ApIHtcbiAgICAgIHggPSAtOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJvdHRvbSkge1xuICAgICAgeCA9IDkwO1xuICAgIH1cblxuICAgIHNldEFuZ1goeCk7XG4gICAgc2V0QW5nWSh5KTtcbiAgfSwgWyBmYWNlIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhcnRYKG51bGwpO1xuICAgIHNldFN0YXJ0WShudWxsKTtcbiAgfSwgWyBhbmdYLCBhbmdZIF0pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVtZW50U3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBbIHsgY2xpZW50WCwgY2xpZW50WSB9IF0gPSBldmVudC50b3VjaGVzO1xuXG4gICAgc2V0U3RhcnRYKGNsaWVudFgpO1xuICAgIHNldFN0YXJ0WShjbGllbnRZKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IFsgeyBjbGllbnRYLCBjbGllbnRZIH0gXSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgY29uc3QgZGlmZlggPSBjbGllbnRYIC0gc3RhcnRYO1xuICAgIGNvbnN0IGRpZmZZID0gY2xpZW50WSAtIHN0YXJ0WTtcblxuICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZYKSkge1xuICAgICAgc2V0QW5nWSgwIDwgZGlmZlggPyBhbmdZICsgOTAgOiBhbmdZIC0gOTApO1xuICAgIH1cbiAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWSkpIHtcbiAgICAgIHNldEFuZ1goMCA8IGRpZmZZID8gYW5nWCAtIDkwIDogYW5nWCArIDkwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjdWJlLWNvbnRhaW5lciR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBlcnNwZWN0aXZlOiBzaXplICogMyxcbiAgICAgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjdWJlXCJcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWigtJHtzaXplIC8gMn1weCkgcm90YXRlWCgke2FuZ1h9ZGVnKSByb3RhdGVZKCR7YW5nWX1kZWcpYCB9fVxuICAgICAgICBvblRvdWNoRW5kPXt3aXRoU3dpcGUgPyBoYW5kbGVNb3ZlbWVudCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXt3aXRoU3dpcGUgPyBoYW5kbGVNb3ZlbWVudFN0YXJ0IDogdW5kZWZpbmVkfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWZyb250XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2Zyb250Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1iYWNrXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVaKDE4MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2JhY2tDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLXJpZ2h0XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtyaWdodENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtbGVmdFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2xlZnRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLXRvcFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7dG9wQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1ib3R0b21cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtib3R0b21Db250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFja0NvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgYm90dG9tQ29udGVudDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZmFjZTogQ1VCRV9GQUNFUy5mcm9udCxcbiAgZnJvbnRDb250ZW50OiB1bmRlZmluZWQsXG4gIGxlZnRDb250ZW50OiB1bmRlZmluZWQsXG4gIHJpZ2h0Q29udGVudDogdW5kZWZpbmVkLFxuICBzaXplOiAxNTAsXG4gIHRvcENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgd2l0aFN3aXBlOiBmYWxzZSxcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIGJhY2tDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgYm90dG9tQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmFjZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQ1VCRV9GQUNFUykpLFxuICBmcm9udENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBsZWZ0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHJpZ2h0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvcENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICB3aXRoU3dpcGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIiwiaW1wb3J0IEN1YmUgZnJvbSAnLi9DdWJlJztcbmltcG9ydCAnLi9jdWJlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3ViZSBmcm9tICcuLi9DdWJlJztcblxuY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gIHJldHVybiAoKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjcpIC8gMTA7XG59O1xuXG5jb25zdCBnZXRPcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXG4gIHJldHVybiBbICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICd0b3AnIF1bbnVtYmVyXTtcbn07XG5cbmNvbnN0IGNvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLWJhY2tncm91bmRcIiAvPjtcbmNvbnN0IHNpemUgPSBnZXRTaXplKCk7XG5jb25zdCB1bmFuaW1hdGVkRGl2ID0gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplLCBjb2xvcjogJ2JsYWNrJyB9fSAvPjtcblxuY29uc3QgY3ViZU9wdGlvbnMgPSB7XG4gIGJvdHRvbUNvbnRlbnQ6IGNvbnRlbnQsXG4gIGxlZnRDb250ZW50OiBjb250ZW50LFxuICByaWdodENvbnRlbnQ6IGNvbnRlbnQsXG4gIHRvcENvbnRlbnQ6IGNvbnRlbnQsXG59O1xuXG5jb25zdCBIaSA9ICgpID0+IHtcbiAgY29uc3QgWyBhbmltYXRpb24sIHNldEFuaW1hdGlvbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFuaW1hdGlvbihmYWxzZSksIDIwMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SGlkZGVuKHRydWUpLCAyNTAwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNob3cgPSBhbmltYXRpb24gJiYgIWhpZGRlbjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgaGktY29udGFpbmVyJHtoaWRkZW4gPyAnIGhpZGRlbicgOiAnJ31gfT5cbiAgICAgIDxoMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpbWFyeVwiPk15IEN1VmU8L3NwYW4+IGJ5IDxzcGFuIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPkphdmllciBHYXJjw61hPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgICAgPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17c2hvdyA/IGdldE9wdGlvbigpIDogJ2Zyb250J30gey4uLmN1YmVPcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtzaG93ID8gZ2V0T3B0aW9uKCkgOiAnZnJvbnQnfSB7Li4uY3ViZU9wdGlvbnN9IC8+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e3Nob3cgPyBnZXRPcHRpb24oKSA6ICdmcm9udCd9IHsuLi5jdWJlT3B0aW9uc30gLz5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGk7XG4iLCJpbXBvcnQgSGkgZnJvbSAnLi9IaSc7XG5pbXBvcnQgJy4vaGkuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEhpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEljb24gPSAoeyBpY29uLCAuLi5yZXN0IH0pID0+IDxpIHsuLi5yZXN0fSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9e2ljb259IC8+O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCAnLi9pY29uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuY29uc3QgQnV0dG9uID0gKHsgY2xhc3NOYW1lLCBpY29uLCB0ZXh0LCAuLi5yZXN0IH0pID0+IChcbiAgPGJ1dHRvbiBjbGFzc05hbWU9e2BjdXN0b20tYnRuJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfSB0eXBlPVwiYnV0dG9uXCIgey4uLnJlc3R9PlxuICAgIHtpY29uICYmIDxJY29uIGljb249e2ljb259IC8+fVxuICAgIHt0ZXh0ICYmIDxzcGFuPnt0ZXh0fTwvc3Bhbj59XG4gIDwvYnV0dG9uPlxuKTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkLFxufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgJy4vYnV0dG9uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vQ3ViZS9DdWJlJztcblxuY29uc3QgTmF2YmFyID0gKHsgb25TZWxlY3QsIHNlbGVjdGVkIH0pID0+IHtcbiAgY29uc3QgWyBleHBhbmRlZCwgc2V0RXhwYW5kZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEV4cGFuZGVkKGZhbHNlKTtcbiAgfSwgWyBzZWxlY3RlZCBdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHNoYWRvd1wiPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJleHBhbmQtYnRuXCIgaWNvbj1cImZhcyBmYS1iYXJzXCIgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItdGl0bGVcIj5KR0Y8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXZiYXItYnRucyR7ZXhwYW5kZWQgPyAnIGV4cGFuZGVkJyA6ICcnfWB9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci1idG4ke0NVQkVfRkFDRVMubGVmdCA9PT0gc2VsZWN0ZWQgPyAnIG5hdmJhci1idG4tc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIHRleHQ9XCJJbmZvXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtaW5mb1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChDVUJFX0ZBQ0VTLmxlZnQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyLWJ0biR7Q1VCRV9GQUNFUy5mcm9udCA9PT0gc2VsZWN0ZWQgPyAnIG5hdmJhci1idG4tc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIHRleHQ9XCJGb3JtYWNpw7NuXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtZ3JhZHVhdGlvbi1jYXBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoQ1VCRV9GQUNFUy5mcm9udCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZiYXItYnRuJHtDVUJFX0ZBQ0VTLnJpZ2h0ID09PSBzZWxlY3RlZCA/ICcgbmF2YmFyLWJ0bi1zZWxlY3RlZCcgOiAnJ31gfVxuICAgICAgICAgICAgdGV4dD1cIlRyYXllY3RvcmlhXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtY29kZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChDVUJFX0ZBQ0VTLnJpZ2h0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci1idG4ke0NVQkVfRkFDRVMuYmFjayA9PT0gc2VsZWN0ZWQgPyAnIG5hdmJhci1idG4tc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgIHRleHQ9XCJTb2NpYWxcIlxuICAgICAgICAgICAgaWNvbj1cImZhYiBmYS1naXRodWJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoQ1VCRV9GQUNFUy5iYWNrKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuTmF2YmFyLnByb3BUeXBlcyA9IHtcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcbmltcG9ydCAnLi9uYXZiYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaSBmcm9tICcuLi9jb21wb25lbnRzL0hpJztcbmltcG9ydCBDdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3ViZSc7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DdWJlL0N1YmUnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5cbmNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICByZXR1cm4gKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjg7XG59O1xuY29uc3Qgc2l6ZSA9IGdldFNpemUoKTtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgWyBmYWNlLCBzZXRGYWNlIF0gPSB1c2VTdGF0ZShDVUJFX0ZBQ0VTLmxlZnQpO1xuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiZmFkZWluXCI+XG4gICAgICAgIDxOYXZiYXIgb25TZWxlY3Q9e3NldEZhY2V9IHNlbGVjdGVkPXtmYWNlfSAvPlxuICAgICAgICA8SGkgLz5cbiAgICAgICAgPGRpdiBpZD1cIm1haW4tY3ViZVwiPlxuICAgICAgICAgIDxDdWJlXG4gICAgICAgICAgICBmYWNlPXtmYWNlfVxuICAgICAgICAgICAgbGVmdENvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5JTkZPPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcm9udENvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5GT1JNQUNJT048L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0Q29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPlRSQVlFQ1RPUklBPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYWNrQ29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPlNPQ0lBTDwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm90dG9tQ29udGVudD17PGRpdj5NYWRlIGJ5IEphdmllciBHYXJjw61hIEZhamFyZG88L2Rpdj59XG4gICAgICAgICAgICB0b3BDb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+SGVsbG8gOik8L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICB3aXRoU3dpcGVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2VzL01haW4nO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxNYWluIC8+XG4gIDwvQnJvd3NlclJvdXRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEFwcCBmcm9tICdBcHAnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9