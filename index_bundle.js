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
/******/ 	deferredModules.push([147,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 140:
/***/ (function(module) {

module.exports = JSON.parse("{\"atos\":{\"role\":\"Programador junior\",\"technologies\":\"Java, Primefaces, JavaScript, jQuery, ExtJs, Oracle\"},\"gmv\":{\"role\":\"Programador senior\",\"technologies\":\"AngularJs, JavaScript, Java, Primefaces, PostgreSQL, Oracle, Talend\"},\"plexus\":{\"role\":\"Analista y desarrollador fullstack\",\"technologies\":\"Java, AngularJs, JavaScript, Node, Springboot, Oracle, Mongo\"},\"oesia\":{\"role\":\"Programador senior\",\"technologies\":\"JavaScript, jQuery, Ajax, Java, Richfaces, MySQL, Oracle\"},\"present\":\"Actualidad\",\"title\":\"Experiencia profesional\",\"wozzo\":{\"role\":\"Analista y desarrollador fullstack\",\"technologies\":\"React, React Native, Redux, GraphQL, Apollo, Express, Node, Mongo\"}}");

/***/ }),

/***/ 141:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Profesional fullstack con más de 6 años de experiencia.\",\"text\":\"Más de 6 años como fullstack developer, inicialmente con tecnologías Java y desde septiembre de 2018 centrado en tecnologías Javascript.\",\"text2\":\"El stack tecnológico con el que más cómodo me siento es React y/o React Native, GraphQL con Apollo y/o Redux, Node y Mongo.\",\"title\":\"Perfil profesional\"}");

/***/ }),

/***/ 142:
/***/ (function(module) {

module.exports = JSON.parse("{\"atos\":{\"role\":\"Junior developer\",\"technologies\":\"Java, Primefaces, JavaScript, jQuery, ExtJs, Oracle\"},\"gmv\":{\"role\":\"Senior developer\",\"technologies\":\"AngularJs, JavaScript, Java, Primefaces, PostgreSQL, Oracle, Talend\"},\"plexus\":{\"role\":\"Analyst and fullstack developer\",\"technologies\":\"Java, AngularJs, JavaScript, Node, Springboot, Oracle, Mongo\"},\"oesia\":{\"role\":\"Senior developer\",\"technologies\":\"JavaScript, jQuery, Ajax, Java, Richfaces, MySQL, Oracle\"},\"present\":\"Present\",\"title\":\"Professional experience\",\"wozzo\":{\"role\":\"Analyst and fullstack developer\",\"technologies\":\"React, React Native, Redux, GraphQL, Apollo, Express, Node, Mongo\"}}");

/***/ }),

/***/ 143:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Fullstack professional with more than 6 years of experience.\",\"text\":\"\",\"title\":\"Professional profile\"}");

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
module.exports = __webpack_require__(382);


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-container .cube{width:100%;height:100%;position:absolute;transform-style:preserve-3d;transition:ease-in all .5s}.cube-container .cube .cube-face{position:absolute;width:100%;height:100%;margin:0;background-color:#080808;color:#fff}.cube-container .cube .cube-face>*{height:100%;width:100%}.cube-container .cube .cube-front{transform:rotateY(0deg) translateZ(100px)}.cube-container .cube .cube-right{transform:rotateY(90deg) translateZ(100px)}.cube-container .cube .cube-back{transform:rotateY(180deg) translateZ(100px)}.cube-container .cube .cube-left{transform:rotateZ(180deg) rotateY(-90deg) translateZ(100px)}.cube-container .cube .cube-top{transform:rotateX(90deg) translateZ(100px)}.cube-container .cube .cube-bottom{transform:rotateX(-90deg) translateZ(100px)}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hi-container{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#080808;transition:linear all .5s;z-index:1001}.hi-container h1{color:#fff;text-align:center;width:95%;font-size:20px}.hi-container h1 span.primary{color:#b71d2b;font-size:32px}.hi-container h1 span.primary span{font-size:20px;font-weight:300}.hi-container h1 span.secondary{color:#78b6a9;font-size:24px}.hi-container .hi{display:flex;max-width:1200px}.hi-container .hi .letter{display:flex;flex-wrap:wrap}.hi-container .hi .letter>div{display:flex;flex-direction:row;justify-content:center;width:100%;margin:4px 0}.hi-container .hi .letter>div>*{margin:0 4px}.hi-container .hi .letter .background{border-radius:8px;overflow:hidden}.hi-container .hi .letter .white-background{background-color:#fff}.hi-container .hi .letter .primary-background{background-color:#b71d2b}.hi-container .hi .letter .secondary-background{background-color:#78b6a9}.hi-container .hi .letter .accent-background{background-color:#f2d090}.hi-container.hidden{opacity:0;pointer-events:none}.hi-container.hidden *{pointer-events:none}@media screen and (max-width: 768px){.hi-container h1{display:flex;flex-direction:column}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "nav.navbar{position:fixed;top:0;left:0;right:0;z-index:900;display:flex;align-items:center;justify-content:center;background-color:#b71d2b;height:60px;padding:0 16px}nav.navbar .expand-btn{display:none}nav.navbar .navbar-content{max-width:1200px;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between}nav.navbar .navbar-content .navbar-title{font-size:32px;font-weight:bold;color:#fff}nav.navbar .navbar-content .navbar-title span{font-size:20px;font-weight:300}nav.navbar .navbar-content .navbar-subtitle{font-size:16px;font-weight:300;font-style:italic}nav.navbar .navbar-content .navbar-subtitle span{color:#e9bbbf}@media screen and (max-width: 992px){nav.navbar .navbar-content{justify-content:center;flex-direction:column}nav.navbar .navbar-content .navbar-title{font-size:20px}nav.navbar .navbar-content .navbar-title span{font-size:12px}nav.navbar .navbar-content .navbar-subtitle{font-size:12px}nav.navbar .navbar-content .navbar-subtitle span{font-size:14px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-icon{margin:0;height:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-btn{padding:8px 16px;font-size:16px;border-radius:4px;border:0;color:#fff;background-color:#b71d2b;transition:linear all .25s;outline:0;cursor:pointer}.custom-btn>*:not(:first-child){margin-left:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-container .cube .cube-face .cube-section,.cube-section{margin:0;padding:32px;width:calc(100% - 64px);height:calc(100% - 64px);background-color:#080808;color:#fff;cursor:pointer;border-radius:16px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;overflow:hidden}.cube-container .cube .cube-face .cube-section *,.cube-section *{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cube-container .cube .cube-face .cube-section>div,.cube-section>div{width:100%;height:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden}.cube-container .cube .cube-face .cube-section>div h2,.cube-section>div h2{margin:0;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid #b71d2b;width:100%}.cube-container .cube .cube-face .cube-section .see-more-btn,.cube-section .see-more-btn{height:20%;width:100%;align-self:center;border-radius:0}.cube-section-full{background-color:#080808;color:#fff;display:flex;align-items:center;justify-content:flex-start;position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;transition:linear all 1s;border-radius:0;overflow:auto}.cube-section-full>div{max-width:1200px;overflow:visible}.cube-section-full>div .close-btn{position:absolute;right:16px;top:16px;background-color:transparent}@media screen and (max-width: 1200px){.cube-container .cube .cube-face .cube-section,.cube-section{width:calc(100% - 32px);height:calc(100% - 32px);padding:16px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bar-total{background-color:silver;border-radius:4px;overflow:hidden;display:flex}.bar-total .bar{padding:4px 0;transition:linear all .5s;display:flex;align-items:center}.bar-total .bar>span{margin-left:8px;white-space:nowrap}.bar-total .bar.primary-darker{background-color:#900a10}.bar-total .bar.primary-dark{background-color:#a71520}.bar-total .bar.primary{background-color:#b71d2b}.bar-total .bar.secondary-darker{background-color:#488e7e}.bar-total .bar.secondary-dark{background-color:#65a698}.bar-total .bar.secondary{background-color:#78b6a9}.bar-total .bar.accent-darker{background-color:#e8b361}.bar-total .bar.accent-dark{background-color:#eec47d}.bar-total .bar.accent{background-color:#f2d090}.bar-total.vertical{min-height:100px;min-width:32px;max-width:32px;height:100%;align-items:flex-end}.bar-total.vertical .bar>span{writing-mode:tb-rl;transform:rotate(-180deg)}.bar-total.horizontal{min-height:32px;max-height:32px;min-width:100px;width:100%}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".profile-section>div p{margin:8px 0}.profile-section>div .bar-total{margin:8px 0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
            var content = __webpack_require__(373);

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

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".experience-section>div .company-experience{width:100%;display:flex;flex-wrap:wrap;padding:8px 0;border-bottom:1px solid #b71d2b}.experience-section>div .company-experience>*{width:100%;margin:0}.experience-section>div .company-experience .company-name{font-size:20px;width:60%}.experience-section>div .company-experience .company-duration{width:40%;text-align:right}.experience-section>div .company-experience .company-role{color:#f2d090;font-style:italic;font-weight:300;font-size:12px;margin-top:8px}.experience-section>div .company-experience .company-place{font-size:12px;margin-bottom:8px}.experience-section>div .company-experience:nth-child(even){border-bottom-color:#65a698}@media screen and (max-width: 992px){.experience-section>div .company-experience .company-name,.experience-section>div .company-experience .company-duration{width:100%}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#main-cube .cube-container{transform:scale(1);transition:ease-in-out all 1s .25s}#main-cube .cube-container .cube-face{border-radius:16px}#main-cube .initial-transition .cube{transition:ease-in-out all 1s .25s}#main-cube.hidden-cube .cube-container{transform:scale(0) rotateZ(270deg)}#main-cube.hidden-cube .cube-container .cube{transform:rotateY(360deg) !important}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
            var content = __webpack_require__(379);

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

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fadein{-webkit-animation:fadein 0.5s;-moz-animation:fadein 0.5s;-ms-animation:fadein 0.5s;-o-animation:fadein 0.5s;animation:fadein 0.5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.fadeout{-webkit-animation:fadeout 0.5s;-moz-animation:fadeout 0.5s;-ms-animation:fadeout 0.5s;-o-animation:fadeout 0.5s;animation:fadeout 0.5s;opacity:0}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-ms-keyframes fadeout{from{opacity:1}to{opacity:0}}@-o-keyframes fadeout{from{opacity:1}to{opacity:0}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
            var content = __webpack_require__(381);

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

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{font-family:'Poppins', sans-serif;font-size:14px;margin:0;color:#080808;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow,main #main-container #main-cube .cube-container .cube-face{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);box-shadow:0px 0 8px 2px rgba(136,136,136,0.5)}html{background-color:#fafaff}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;overflow:hidden}main #main-container{padding-top:60px;width:100%;height:calc(100vh - 60px);overflow:auto;display:flex;align-items:center;justify-content:center;flex-direction:column}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 382:
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
var react_router_dom = __webpack_require__(146);

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
  disabled,
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

    if (!disabled && !moving && (startX || startY)) {
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
    onMouseDown: withSwipe && !disabled ? handleMovementStart : undefined,
    onMouseUp: withSwipe && !disabled ? handleMovement : undefined,
    onTouchEnd: withSwipe && !disabled ? handleMovement : undefined,
    onTouchStart: withSwipe && !disabled ? handleMovementStart : undefined
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
  disabled: false,
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
  disabled: prop_types_default.a.bool,
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
var cube = __webpack_require__(356);

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

const whiteContent = /*#__PURE__*/react_default.a.createElement("div", {
  className: "white-background background"
});
const primaryContent = /*#__PURE__*/react_default.a.createElement("div", {
  className: "primary-background background"
});
const secondaryContent = /*#__PURE__*/react_default.a.createElement("div", {
  className: "secondary-background background"
});
const accentContent = /*#__PURE__*/react_default.a.createElement("div", {
  className: "accent-background background"
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
  bottomContent: whiteContent,
  leftContent: primaryContent,
  rightContent: secondaryContent,
  topContent: accentContent
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
var hi = __webpack_require__(358);

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
var navbar = __webpack_require__(360);

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
var Icon_icon = __webpack_require__(362);

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
var Button_button = __webpack_require__(364);

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
  onFullscreen,
  onFullscreenOut,
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

  const _useState5 = Object(react["useState"])(false),
        _useState6 = Section_slicedToArray(_useState5, 2),
        tapped = _useState6[0],
        setTapped = _useState6[1];

  Object(react["useEffect"])(() => {
    if (fadeout && fullscreen) {
      setTimeout(() => setFullscreen(false), 400);
    }
  }, [fadeout]);
  Object(react["useEffect"])(() => {
    if (!fullscreen && fadeout) {
      setFadeout(false);

      if ('function' === typeof onFullscreenOut) {
        onFullscreenOut();
      }
    } else if (fullscreen && 'function' === typeof onFullscreen) {
      onFullscreen();
    }
  }, [fullscreen]);

  const clearTapped = () => setTapped(false);

  const isDoubleTap = () => {
    if (tapped) {
      setFullscreen(true);
      clearTimeout(clearTapped);
    } else {
      setTapped(true);
      setTimeout(clearTapped, 300);
    }
  };

  return fullscreen ? Object(react_dom["createPortal"])( /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-section cube-section-full ".concat(fadeout ? 'fadeout' : 'fadein').concat(className ? " ".concat(className) : '')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-section-container"
  }, title && /*#__PURE__*/react_default.a.createElement("h2", null, title), /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "close-btn",
    icon: "fas fa-times",
    onClick: () => setFadeout(true),
    onTouchEnd: () => setFadeout(true)
  }), children)), document.body) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "cube-section fadein".concat(className ? " ".concat(className) : ''),
    onDoubleClick: () => !disabled && setFullscreen(true),
    onTouchEnd: isDoubleTap
  }, /*#__PURE__*/react_default.a.createElement("div", null, title && /*#__PURE__*/react_default.a.createElement("h2", null, title), children));
};

Section.defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
  onFullscreen: undefined,
  onFullscreenOut: undefined,
  title: undefined
};
Section.propTypes = {
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  className: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  onFullscreen: prop_types_default.a.func,
  onFullscreenOut: prop_types_default.a.func,
  title: prop_types_default.a.string
};
/* harmony default export */ var Section_Section = (Section);
// EXTERNAL MODULE: ./src/components/Section/section.scss
var section = __webpack_require__(366);

// CONCATENATED MODULE: ./src/components/Section/index.js


/* harmony default export */ var components_Section = (Section_Section);
// EXTERNAL MODULE: ./src/utils/es/experience.json
var experience = __webpack_require__(140);

// EXTERNAL MODULE: ./src/utils/es/profile.json
var profile = __webpack_require__(141);

// CONCATENATED MODULE: ./src/utils/es.js


const translations = {
  experience: experience,
  profile: profile
};
/* harmony default export */ var es = (translations);
// EXTERNAL MODULE: ./src/utils/en/experience.json
var en_experience = __webpack_require__(142);

// EXTERNAL MODULE: ./src/utils/en/profile.json
var en_profile = __webpack_require__(143);

// CONCATENATED MODULE: ./src/utils/en.js


const en_translations = {
  experience: en_experience,
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
var bar = __webpack_require__(368);

// CONCATENATED MODULE: ./src/components/Bar/index.js


/* harmony default export */ var components_Bar = (Bar_Bar);
// CONCATENATED MODULE: ./src/components/MainCube/Profile/Profile.jsx
function Profile_extends() { Profile_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Profile_extends.apply(this, arguments); }






const Profile = (_ref) => {
  let rest = Profile_extends({}, _ref);

  return /*#__PURE__*/react_default.a.createElement(components_Section, Profile_extends({}, rest, {
    title: translate('profile.title'),
    className: "profile-section"
  }), /*#__PURE__*/react_default.a.createElement("p", null, translate('profile.header')), /*#__PURE__*/react_default.a.createElement(components_Bar, {
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
    text: "GraphQL",
    amount: 55
  }), /*#__PURE__*/react_default.a.createElement(components_Bar, {
    text: "Node",
    amount: 65
  }), /*#__PURE__*/react_default.a.createElement(components_Bar, {
    text: "Mongo",
    amount: 70
  }), /*#__PURE__*/react_default.a.createElement(components_Bar, {
    text: "Angular",
    amount: 40
  }), /*#__PURE__*/react_default.a.createElement(components_Bar, {
    text: "Java",
    amount: 60
  }), /*#__PURE__*/react_default.a.createElement(components_Bar, {
    text: "Springboot",
    amount: 20
  }), /*#__PURE__*/react_default.a.createElement(components_Bar, {
    text: "Vue",
    amount: 20
  }), /*#__PURE__*/react_default.a.createElement("p", null, translate('profile.text')), /*#__PURE__*/react_default.a.createElement("p", null, translate('profile.text2')));
};

/* harmony default export */ var Profile_Profile = (Profile);
// EXTERNAL MODULE: ./src/components/MainCube/Profile/profile.scss
var Profile_profile = __webpack_require__(370);

// CONCATENATED MODULE: ./src/components/MainCube/Profile/index.js


/* harmony default export */ var MainCube_Profile = (Profile_Profile);
// CONCATENATED MODULE: ./src/components/MainCube/Experience/Company.jsx



const Company = ({
  end,
  name,
  place,
  role,
  start,
  technologies
}) => /*#__PURE__*/react_default.a.createElement("div", {
  className: "company-experience"
}, /*#__PURE__*/react_default.a.createElement("p", {
  className: "company-name"
}, name), /*#__PURE__*/react_default.a.createElement("p", {
  className: "company-duration"
}, start, " - ", end), /*#__PURE__*/react_default.a.createElement("p", {
  className: "company-role"
}, role), /*#__PURE__*/react_default.a.createElement("p", {
  className: "company-place"
}, place), /*#__PURE__*/react_default.a.createElement("p", {
  className: "company-tech"
}, technologies));

Company.propTypes = {
  end: prop_types_default.a.string.isRequired,
  name: prop_types_default.a.string.isRequired,
  place: prop_types_default.a.string.isRequired,
  role: prop_types_default.a.string.isRequired,
  start: prop_types_default.a.string.isRequired,
  technologies: prop_types_default.a.string.isRequired
};
/* harmony default export */ var Experience_Company = (Company);
// CONCATENATED MODULE: ./src/components/MainCube/Experience/Experience.jsx
function Experience_extends() { Experience_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Experience_extends.apply(this, arguments); }





const companies = [{
  name: 'Wozzo',
  role: translate('experience.wozzo.role'),
  place: 'Palma de Mallorca',
  start: '09/2018',
  end: translate('experience.present'),
  technologies: translate('experience.wozzo.technologies')
}, {
  name: 'Plexus Technologies',
  role: translate('experience.plexus.role'),
  place: 'Palma de Mallorca',
  start: '08/2018',
  end: '09/2017',
  technologies: translate('experience.plexus.technologies')
}, {
  name: 'GMV',
  role: translate('experience.gmv.role'),
  place: 'Sevilla',
  start: '09/2015',
  end: '08/2016',
  technologies: translate('experience.gmv.technologies')
}, {
  name: 'Oesía Networks',
  role: translate('experience.oesia.role'),
  place: 'Sevilla',
  start: '06/2015',
  end: '08/2015',
  technologies: translate('experience.oesia.technologies')
}, {
  name: 'Atos',
  role: translate('experience.atos.role'),
  place: 'Sevilla',
  start: '08/2013',
  end: '06/2015',
  technologies: translate('experience.atos.technologies')
}];

const Experience = (_ref) => {
  let rest = Experience_extends({}, _ref);

  return /*#__PURE__*/react_default.a.createElement(components_Section, Experience_extends({}, rest, {
    title: translate('experience.title'),
    className: "experience-section"
  }), companies.map(company => /*#__PURE__*/react_default.a.createElement(Experience_Company, Experience_extends({
    key: company.name
  }, company))));
};

/* harmony default export */ var Experience_Experience = (Experience);
// EXTERNAL MODULE: ./src/components/MainCube/Experience/experience.scss
var Experience_experience = __webpack_require__(372);

// CONCATENATED MODULE: ./src/components/MainCube/Experience/index.js


/* harmony default export */ var MainCube_Experience = (Experience_Experience);
// CONCATENATED MODULE: ./src/components/MainCube/MainCube.jsx
function MainCube_extends() { MainCube_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MainCube_extends.apply(this, arguments); }

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

  const _useState3 = Object(react["useState"])(false),
        _useState4 = MainCube_slicedToArray(_useState3, 2),
        isFullscreen = _useState4[0],
        setIsFullscreen = _useState4[1];

  Object(react["useEffect"])(() => {
    if (hiddenIntro) {
      setTimeout(() => setInitialTransition(false), 750);
    }
  }, [hiddenIntro]);
  const commonProps = {
    onFullscreen: () => setIsFullscreen(true),
    onFullscreenOut: () => setIsFullscreen(false)
  };
  return /*#__PURE__*/react_default.a.createElement("div", {
    id: "main-cube",
    className: hiddenIntro ? '' : 'hidden-cube'
  }, /*#__PURE__*/react_default.a.createElement(components_Cube, {
    className: initialTransition ? 'initial-transition' : '',
    disabled: isFullscreen,
    face: initialTransition ? CUBE_FACES.back : CUBE_FACES.front,
    leftContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, MainCube_extends({}, commonProps, {
      title: "FORMACION"
    })),
    frontContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(MainCube_Profile, commonProps),
    rightContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(MainCube_Experience, commonProps),
    backContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, MainCube_extends({}, commonProps, {
      title: "SOCIAL"
    })),
    bottomContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, MainCube_extends({}, commonProps, {
      title: "Made by Javier Garc\xEDa Fajardo",
      disabled: true
    })),
    topContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, MainCube_extends({}, commonProps, {
      title: "Hello :)",
      disabled: true
    })),
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
var mainCube = __webpack_require__(374);

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
var animations = __webpack_require__(378);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(380);

// CONCATENATED MODULE: ./src/index.js





react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9zZWN0aW9uLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL3NlY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3M/MmM4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvUHJvZmlsZS9wcm9maWxlLnNjc3M/YjBhNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL3Byb2ZpbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL2V4cGVyaWVuY2Uuc2Nzcz85MzFhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvZXhwZXJpZW5jZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL21haW5DdWJlLnNjc3M/MjFjNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9tYWluQ3ViZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzPzI5NDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzRjMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1YmUvQ3ViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9IaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RyYW5zbGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFyL0Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1Byb2ZpbGUvUHJvZmlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvUHJvZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL0NvbXBhbnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvRXhwZXJpZW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9NYWluQ3ViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDVUJFX0ZBQ0VTIiwiZnJvbnQiLCJiYWNrIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaXNBcnJvd0xlZnQiLCJjb2RlIiwia2V5Iiwia2V5Q29kZSIsImlzQXJyb3dVcCIsImlzQXJyb3dSaWdodCIsImlzQXJyb3dEb3duIiwiQ3ViZSIsImJhY2tDb250ZW50IiwiYm90dG9tQ29udGVudCIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiZmFjZSIsImZyb250Q29udGVudCIsImxlZnRDb250ZW50IiwicmlnaHRDb250ZW50Iiwic2l6ZSIsInRvcENvbnRlbnQiLCJ3aXRoU3dpcGUiLCJ1c2VTdGF0ZSIsImFuZ1giLCJzZXRBbmdYIiwiYW5nWSIsInNldEFuZ1kiLCJtb3ZpbmciLCJzZXRNb3ZpbmciLCJzdGFydFgiLCJzZXRTdGFydFgiLCJzdGFydFkiLCJzZXRTdGFydFkiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJ4IiwieSIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3ZlbWVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WSIsImRpZmZYIiwiZGlmZlkiLCJNYXRoIiwiYWJzIiwiaGFuZGxlTW92ZW1lbnRTdGFydCIsInRvdWNoZXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiLCJudW1iZXIiLCJnZXRTaXplIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZmxvb3IiLCJ3aGl0ZUNvbnRlbnQiLCJwcmltYXJ5Q29udGVudCIsInNlY29uZGFyeUNvbnRlbnQiLCJhY2NlbnRDb250ZW50IiwidW5hbmltYXRlZERpdiIsImNvbG9yIiwiY3ViZU9wdGlvbnMiLCJIaSIsIm9uSGlkZSIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsInNob3ciLCJnZXRSYW5kb21DdWJlIiwicmFuZG9tIiwiZnVuYyIsIk5hdmJhciIsIkljb24iLCJpY29uIiwicmVzdCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwidGV4dCIsIlNlY3Rpb24iLCJvbkZ1bGxzY3JlZW4iLCJvbkZ1bGxzY3JlZW5PdXQiLCJ0aXRsZSIsImZhZGVvdXQiLCJzZXRGYWRlb3V0IiwiZnVsbHNjcmVlbiIsInNldEZ1bGxzY3JlZW4iLCJ0YXBwZWQiLCJzZXRUYXBwZWQiLCJjbGVhclRhcHBlZCIsImlzRG91YmxlVGFwIiwiY2xlYXJUaW1lb3V0IiwiY3JlYXRlUG9ydGFsIiwiYm9keSIsInRyYW5zbGF0aW9ucyIsImV4cGVyaWVuY2UiLCJwcm9maWxlIiwiZXMiLCJlbiIsIkxBTkdfSURTIiwiZW5nbGlzaCIsInNwYW5pc2giLCJzZXRMb2NhbGUiLCJsYW5nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldExvY2FsZSIsImxhbmd1YWdlIiwiaXNTcGFuaXNoIiwicmVzb2x2ZUluZGV4Iiwic3RyIiwicmVwbGFjZSIsImFycmF5Iiwic3BsaXQiLCJ0cmFuc2xhdGlvbnNMYW5nIiwiaSIsImxlbmd0aCIsImVsZW0iLCJ0cmFuc2xhdGUiLCJMQU5HVUFHRVMiLCJuYW1lIiwidmFsdWUiLCJCQVJfVFlQRVMiLCJwcmltYXJ5RGFya2VyIiwicHJpbWFyeURhcmsiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5RGFya2VyIiwic2Vjb25kYXJ5RGFyayIsInNlY29uZGFyeSIsImFjY2VudERhcmtlciIsImFjY2VudERhcmsiLCJhY2NlbnQiLCJnZXRUb3RhbCIsInRvdGFsIiwiYW1vdW50IiwiZ2V0Q29sb3IiLCJCYXIiLCJ0b3RhbEFtb3VudCIsInZlcnRpY2FsIiwic2V0Q29sb3IiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInNldFRvdGFsIiwibmV3dG90YWwiLCJQcm9maWxlIiwiQ29tcGFueSIsImVuZCIsInBsYWNlIiwicm9sZSIsInN0YXJ0IiwidGVjaG5vbG9naWVzIiwiaXNSZXF1aXJlZCIsImNvbXBhbmllcyIsIkV4cGVyaWVuY2UiLCJtYXAiLCJjb21wYW55IiwiTWFpbkN1YmUiLCJoaWRkZW5JbnRybyIsImluaXRpYWxUcmFuc2l0aW9uIiwic2V0SW5pdGlhbFRyYW5zaXRpb24iLCJpc0Z1bGxzY3JlZW4iLCJzZXRJc0Z1bGxzY3JlZW4iLCJjb21tb25Qcm9wcyIsIk1haW4iLCJzZXRIaWRkZW5JbnRybyIsIkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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QUQsT0FERixlQUVFLDhCQUFDLGFBQUQ7QUFBSSxVQUFNLEVBQUUsTUFBTUEsY0FBYyxDQUFDLElBQUQ7QUFBaEMsSUFGRixlQUdFLDhCQUFDLG1CQUFEO0FBQVUsZUFBVyxFQUFFUDtBQUF2QixJQUhGLGVBSUU7QUFBSyxNQUFFLEVBQUM7QUFBUixJQUpGLENBREYsQ0FERjtBQVVELENBYkQ7O0FBZWVNLG1EQUFmLEU7O0FDcEJBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNRSxHQUFHLEdBQUcsbUJBQ1YsOEJBQUMseUNBQUQscUJBQ0UsOEJBQUMsVUFBRCxPQURGLENBREY7O0FBTWVBLCtDQUFmLEU7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBQyxtQkFBUSxDQUFDQyxNQUFULGVBQWdCLDhCQUFDLE9BQUQsT0FBaEIsRUFBeUIxSSxRQUFRLENBQUMySSxjQUFULENBQXdCLE1BQXhCLENBQXpCLEUiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzE0NywxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3ViZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3ViZS1jb250YWluZXIgLmN1YmV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNpdGlvbjplYXNlLWluIGFsbCAuNXN9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZT4qe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1yaWdodHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWJhY2t7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtbGVmdHt0cmFuc2Zvcm06cm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtdG9we3RyYW5zZm9ybTpyb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYm90dG9te3RyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCl9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGkuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpLWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO3otaW5kZXg6MTAwMX0uaGktY29udGFpbmVyIGgxe2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTUlO2ZvbnQtc2l6ZToyMHB4fS5oaS1jb250YWluZXIgaDEgc3Bhbi5wcmltYXJ5e2NvbG9yOiNiNzFkMmI7Zm9udC1zaXplOjMycHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnByaW1hcnkgc3Bhbntmb250LXNpemU6MjBweDtmb250LXdlaWdodDozMDB9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnNlY29uZGFyeXtjb2xvcjojNzhiNmE5O2ZvbnQtc2l6ZToyNHB4fS5oaS1jb250YWluZXIgLmhpe2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTIwMHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21hcmdpbjo0cHggMH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyPmRpdj4qe21hcmdpbjowIDRweH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5iYWNrZ3JvdW5ke2JvcmRlci1yYWRpdXM6OHB4O292ZXJmbG93OmhpZGRlbn0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC53aGl0ZS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmZn0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5wcmltYXJ5LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJifS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXIgLnNlY29uZGFyeS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6Izc4YjZhOX0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5hY2NlbnQtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmQwOTB9LmhpLWNvbnRhaW5lci5oaWRkZW57b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmhpLWNvbnRhaW5lci5oaWRkZW4gKntwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXsuaGktY29udGFpbmVyIGgxe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJuYXYubmF2YmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6OTAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7aGVpZ2h0OjYwcHg7cGFkZGluZzowIDE2cHh9bmF2Lm5hdmJhciAuZXhwYW5kLWJ0bntkaXNwbGF5Om5vbmV9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7bWF4LXdpZHRoOjEyMDBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MzJweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiNmZmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZSBzcGFue2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjMwMH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxle2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjMwMDtmb250LXN0eWxlOml0YWxpY31uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxlIHNwYW57Y29sb3I6I2U5YmJiZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MjBweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxlIHNwYW57Zm9udC1zaXplOjEycHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZXtmb250LXNpemU6MTJweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxlIHNwYW57Zm9udC1zaXplOjE0cHh9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1pY29ue21hcmdpbjowO2hlaWdodDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20tYnRue3BhZGRpbmc6OHB4IDE2cHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXM7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfS5jdXN0b20tYnRuPio6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlY3Rpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiwuY3ViZS1zZWN0aW9ue21hcmdpbjowO3BhZGRpbmc6MzJweDt3aWR0aDpjYWxjKDEwMCUgLSA2NHB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gNjRweCk7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoxNnB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtvdmVyZmxvdzpoaWRkZW59LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiAqLC5jdWJlLXNlY3Rpb24gKnstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbj5kaXYsLmN1YmUtc2VjdGlvbj5kaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7b3ZlcmZsb3c6aGlkZGVufS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24+ZGl2IGgyLC5jdWJlLXNlY3Rpb24+ZGl2IGgye21hcmdpbjowO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtwYWRkaW5nLWJvdHRvbTo4cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2I3MWQyYjt3aWR0aDoxMDAlfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24gLnNlZS1tb3JlLWJ0biwuY3ViZS1zZWN0aW9uIC5zZWUtbW9yZS1idG57aGVpZ2h0OjIwJTt3aWR0aDoxMDAlO2FsaWduLXNlbGY6Y2VudGVyO2JvcmRlci1yYWRpdXM6MH0uY3ViZS1zZWN0aW9uLWZ1bGx7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmY7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4Ojk5OTt0cmFuc2l0aW9uOmxpbmVhciBhbGwgMXM7Ym9yZGVyLXJhZGl1czowO292ZXJmbG93OmF1dG99LmN1YmUtc2VjdGlvbi1mdWxsPmRpdnttYXgtd2lkdGg6MTIwMHB4O292ZXJmbG93OnZpc2libGV9LmN1YmUtc2VjdGlvbi1mdWxsPmRpdiAuY2xvc2UtYnRue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjE2cHg7dG9wOjE2cHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpey5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24sLmN1YmUtc2VjdGlvbnt3aWR0aDpjYWxjKDEwMCUgLSAzMnB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gMzJweCk7cGFkZGluZzoxNnB4fX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJhci10b3RhbHtiYWNrZ3JvdW5kLWNvbG9yOnNpbHZlcjtib3JkZXItcmFkaXVzOjRweDtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4fS5iYXItdG90YWwgLmJhcntwYWRkaW5nOjRweCAwO3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXM7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uYmFyLXRvdGFsIC5iYXI+c3BhbnttYXJnaW4tbGVmdDo4cHg7d2hpdGUtc3BhY2U6bm93cmFwfS5iYXItdG90YWwgLmJhci5wcmltYXJ5LWRhcmtlcntiYWNrZ3JvdW5kLWNvbG9yOiM5MDBhMTB9LmJhci10b3RhbCAuYmFyLnByaW1hcnktZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiNhNzE1MjB9LmJhci10b3RhbCAuYmFyLnByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJifS5iYXItdG90YWwgLmJhci5zZWNvbmRhcnktZGFya2Vye2JhY2tncm91bmQtY29sb3I6IzQ4OGU3ZX0uYmFyLXRvdGFsIC5iYXIuc2Vjb25kYXJ5LWRhcmt7YmFja2dyb3VuZC1jb2xvcjojNjVhNjk4fS5iYXItdG90YWwgLmJhci5zZWNvbmRhcnl7YmFja2dyb3VuZC1jb2xvcjojNzhiNmE5fS5iYXItdG90YWwgLmJhci5hY2NlbnQtZGFya2Vye2JhY2tncm91bmQtY29sb3I6I2U4YjM2MX0uYmFyLXRvdGFsIC5iYXIuYWNjZW50LWRhcmt7YmFja2dyb3VuZC1jb2xvcjojZWVjNDdkfS5iYXItdG90YWwgLmJhci5hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZjJkMDkwfS5iYXItdG90YWwudmVydGljYWx7bWluLWhlaWdodDoxMDBweDttaW4td2lkdGg6MzJweDttYXgtd2lkdGg6MzJweDtoZWlnaHQ6MTAwJTthbGlnbi1pdGVtczpmbGV4LWVuZH0uYmFyLXRvdGFsLnZlcnRpY2FsIC5iYXI+c3Bhbnt3cml0aW5nLW1vZGU6dGItcmw7dHJhbnNmb3JtOnJvdGF0ZSgtMTgwZGVnKX0uYmFyLXRvdGFsLmhvcml6b250YWx7bWluLWhlaWdodDozMnB4O21heC1oZWlnaHQ6MzJweDttaW4td2lkdGg6MTAwcHg7d2lkdGg6MTAwJX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9maWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9maWxlLXNlY3Rpb24+ZGl2IHB7bWFyZ2luOjhweCAwfS5wcm9maWxlLXNlY3Rpb24+ZGl2IC5iYXItdG90YWx7bWFyZ2luOjhweCAwfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V4cGVyaWVuY2Uuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZXt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtwYWRkaW5nOjhweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNiNzFkMmJ9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZT4qe3dpZHRoOjEwMCU7bWFyZ2luOjB9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1uYW1le2ZvbnQtc2l6ZToyMHB4O3dpZHRoOjYwJX0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LWR1cmF0aW9ue3dpZHRoOjQwJTt0ZXh0LWFsaWduOnJpZ2h0fS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktcm9sZXtjb2xvcjojZjJkMDkwO2ZvbnQtc3R5bGU6aXRhbGljO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTJweDttYXJnaW4tdG9wOjhweH0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LXBsYWNle2ZvbnQtc2l6ZToxMnB4O21hcmdpbi1ib3R0b206OHB4fS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2U6bnRoLWNoaWxkKGV2ZW4pe2JvcmRlci1ib3R0b20tY29sb3I6IzY1YTY5OH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1uYW1lLC5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktZHVyYXRpb257d2lkdGg6MTAwJX19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbkN1YmUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW4tY3ViZSAuY3ViZS1jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIDFzIC4yNXN9I21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZXtib3JkZXItcmFkaXVzOjE2cHh9I21haW4tY3ViZSAuaW5pdGlhbC10cmFuc2l0aW9uIC5jdWJle3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIDFzIC4yNXN9I21haW4tY3ViZS5oaWRkZW4tY3ViZSAuY3ViZS1jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDApIHJvdGF0ZVooMjcwZGVnKX0jbWFpbi1jdWJlLmhpZGRlbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZXt0cmFuc2Zvcm06cm90YXRlWSgzNjBkZWcpICFpbXBvcnRhbnR9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmFkZWluey13ZWJraXQtYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tb3otYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tcy1hbmltYXRpb246ZmFkZWluIDAuNXM7LW8tYW5pbWF0aW9uOmZhZGVpbiAwLjVzO2FuaW1hdGlvbjpmYWRlaW4gMC41c31Aa2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtbW96LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tcy1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1vLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX0uZmFkZW91dHstd2Via2l0LWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7LW1vei1hbmltYXRpb246ZmFkZW91dCAwLjVzOy1tcy1hbmltYXRpb246ZmFkZW91dCAwLjVzOy1vLWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7YW5pbWF0aW9uOmZhZGVvdXQgMC41cztvcGFjaXR5OjB9QGtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC1tb3ota2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtbXMta2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALW8ta2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e2ZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDttYXJnaW46MDtjb2xvcjojMDgwODA4Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6c3VicGl4ZWwtYW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6YXV0b30uc2hhZG93LG1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2V7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpOy1tb3otYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KTtib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpfWh0bWx7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZmfW1haW57ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW59bWFpbiAjbWFpbi1jb250YWluZXJ7cGFkZGluZy10b3A6NjBweDt3aWR0aDoxMDAlO2hlaWdodDpjYWxjKDEwMHZoIC0gNjBweCk7b3ZlcmZsb3c6YXV0bztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IENVQkVfRkFDRVMgPSB7XG4gIGZyb250OiAnZnJvbnQnLFxuICBiYWNrOiAnYmFjaycsXG4gIGxlZnQ6ICdsZWZ0JyxcbiAgcmlnaHQ6ICdyaWdodCcsXG4gIHRvcDogJ3RvcCcsXG4gIGJvdHRvbTogJ2JvdHRvbScsXG59O1xuXG5jb25zdCBpc0Fycm93TGVmdCA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiAzNyA9PT0ga2V5Q29kZSB8fCAnQXJyb3dMZWZ0JyA9PT0gY29kZSB8fCAnQXJyb3dMZWZ0JyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd1VwID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM4ID09PSBrZXlDb2RlIHx8ICdBcnJvd1VwJyA9PT0gY29kZSB8fCAnQXJyb3dVcCcgPT09IGtleTtcbmNvbnN0IGlzQXJyb3dSaWdodCA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiAzOSA9PT0ga2V5Q29kZSB8fCAnQXJyb3dSaWdodCcgPT09IGNvZGUgfHwgJ0FyclJpZ2h0JyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd0Rvd24gPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gNDAgPT09IGtleUNvZGUgfHwgJ0Fycm93RG93bicgPT09IGNvZGUgfHwgJ0Fycm93RG93bicgPT09IGtleTtcblxuY29uc3QgQ3ViZSA9ICh7XG4gIGJhY2tDb250ZW50LFxuICBib3R0b21Db250ZW50LFxuICBjbGFzc05hbWUsXG4gIGRpc2FibGVkLFxuICBmYWNlLFxuICBmcm9udENvbnRlbnQsXG4gIGxlZnRDb250ZW50LFxuICByaWdodENvbnRlbnQsXG4gIHNpemUsXG4gIHRvcENvbnRlbnQsXG4gIHdpdGhTd2lwZSxcbn0pID0+IHtcbiAgY29uc3QgWyBhbmdYLCBzZXRBbmdYIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBhbmdZLCBzZXRBbmdZIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBtb3ZpbmcsIHNldE1vdmluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIHN0YXJ0WCwgc2V0U3RhcnRYIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgWyBzdGFydFksIHNldFN0YXJ0WSBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgIGlmICghbW92aW5nICYmIGlzQXJyb3dMZWZ0KGV2ZW50KSkge1xuICAgICAgc2V0QW5nWShhbmdZICsgOTApO1xuICAgIH0gZWxzZSBpZiAoIW1vdmluZyAmJiBpc0Fycm93VXAoZXZlbnQpKSB7XG4gICAgICBzZXRBbmdYKGFuZ1ggLSA5MCk7XG4gICAgfSBlbHNlIGlmICghbW92aW5nICYmIGlzQXJyb3dSaWdodChldmVudCkpIHtcbiAgICAgIHNldEFuZ1koYW5nWSAtIDkwKTtcbiAgICB9IGVsc2UgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd0Rvd24oZXZlbnQpKSB7XG4gICAgICBzZXRBbmdYKGFuZ1ggKyA5MCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHggPSAwO1xuICAgIGxldCB5ID0gMDtcblxuICAgIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmZyb250KSB7XG4gICAgICB5ID0gMDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuYmFjaykge1xuICAgICAgeSA9IC0xODA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmxlZnQpIHtcbiAgICAgIHkgPSA5MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMucmlnaHQpIHtcbiAgICAgIHkgPSAtOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLnRvcCkge1xuICAgICAgeCA9IC05MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuYm90dG9tKSB7XG4gICAgICB4ID0gOTA7XG4gICAgfVxuXG4gICAgc2V0QW5nWCh4KTtcbiAgICBzZXRBbmdZKHkpO1xuICB9LCBbIGZhY2UgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGFydFgobnVsbCk7XG4gICAgc2V0U3RhcnRZKG51bGwpO1xuICAgIHNldE1vdmluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldE1vdmluZyhmYWxzZSksIDUwMCk7XG4gIH0sIFsgYW5nWCwgYW5nWSBdKTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFkaXNhYmxlZCAmJiAhbW92aW5nICYmIChzdGFydFggfHwgc3RhcnRZKSkge1xuICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50Py5jaGFuZ2VkVG91Y2hlcz8uWzBdPy5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFg7XG4gICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQ/LmNoYW5nZWRUb3VjaGVzPy5bMF0/LmNsaWVudFkgfHwgZXZlbnQuY2xpZW50WTtcblxuICAgICAgY29uc3QgZGlmZlggPSBjbGllbnRYIC0gc3RhcnRYO1xuICAgICAgY29uc3QgZGlmZlkgPSBjbGllbnRZIC0gc3RhcnRZO1xuXG4gICAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWCkpIHtcbiAgICAgICAgLy8gaG9yaXpvbnRhbCBzd2lwZVxuICAgICAgICBzZXRBbmdZKDAgPCBkaWZmWCA/IGFuZ1kgKyA5MCA6IGFuZ1kgLSA5MCk7XG4gICAgICB9XG4gICAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWSkpIHtcbiAgICAgICAgLy8gdmVydGljYWwgc3dpcGVcbiAgICAgICAgc2V0QW5nWCgwIDwgZGlmZlkgPyBhbmdYIC0gOTAgOiBhbmdYICsgOTApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudFN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2xpZW50WCA9IGV2ZW50Py50b3VjaGVzPy5bMF0/LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WDtcbiAgICBjb25zdCBjbGllbnRZID0gZXZlbnQ/LnRvdWNoZXM/LlswXT8uY2xpZW50WSB8fCBldmVudC5jbGllbnRZO1xuXG4gICAgc2V0U3RhcnRYKGNsaWVudFgpO1xuICAgIHNldFN0YXJ0WShjbGllbnRZKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcblxuICAgIGlmICh3aXRoU3dpcGUpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3ZlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3ZlbWVudCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjdWJlLWNvbnRhaW5lciR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBlcnNwZWN0aXZlOiBzaXplICogMyxcbiAgICAgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjdWJlXCJcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWigtJHtzaXplIC8gMn1weCkgcm90YXRlWCgke2FuZ1h9ZGVnKSByb3RhdGVZKCR7YW5nWX1kZWcpYCB9fVxuICAgICAgICBvbk1vdXNlRG93bj17d2l0aFN3aXBlICYmICFkaXNhYmxlZCA/IGhhbmRsZU1vdmVtZW50U3RhcnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uTW91c2VVcD17d2l0aFN3aXBlICYmICFkaXNhYmxlZCA/IGhhbmRsZU1vdmVtZW50IDogdW5kZWZpbmVkfVxuICAgICAgICBvblRvdWNoRW5kPXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uVG91Y2hTdGFydD17d2l0aFN3aXBlICYmICFkaXNhYmxlZCA/IGhhbmRsZU1vdmVtZW50U3RhcnQgOiB1bmRlZmluZWR9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtZnJvbnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7ZnJvbnRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWJhY2tcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVooMTgwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7YmFja0NvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtcmlnaHRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3JpZ2h0Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1sZWZ0XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7bGVmdENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtdG9wXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHt0b3BDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWJvdHRvbVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2JvdHRvbUNvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DdWJlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFja0NvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgYm90dG9tQ29udGVudDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmYWNlOiBDVUJFX0ZBQ0VTLmZyb250LFxuICBmcm9udENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgbGVmdENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgcmlnaHRDb250ZW50OiB1bmRlZmluZWQsXG4gIHNpemU6IDE1MCxcbiAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICB3aXRoU3dpcGU6IGZhbHNlLFxufTtcblxuQ3ViZS5wcm9wVHlwZXMgPSB7XG4gIGJhY2tDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgYm90dG9tQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBmYWNlOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhDVUJFX0ZBQ0VTKSksXG4gIGZyb250Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGxlZnRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgcmlnaHRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgdG9wQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHdpdGhTd2lwZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIiwiaW1wb3J0IEN1YmUgZnJvbSAnLi9DdWJlJztcbmltcG9ydCAnLi9jdWJlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ3ViZSBmcm9tICcuLi9DdWJlJztcbmltcG9ydCB7IENVQkVfRkFDRVMgfSBmcm9tICcuLi9DdWJlL0N1YmUnO1xuXG5jb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICBjb25zdCB7IGlubmVySGVpZ2h0LCBpbm5lcldpZHRoIH0gPSB3aW5kb3c7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoKChpbm5lcldpZHRoID4gaW5uZXJIZWlnaHQgPyBpbm5lckhlaWdodCA6IGlubmVyV2lkdGgpICogMC43KSAvIDEwKTtcbn07XG5cbmNvbnN0IHdoaXRlQ29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtYmFja2dyb3VuZCBiYWNrZ3JvdW5kXCIgLz47XG5jb25zdCBwcmltYXJ5Q29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwicHJpbWFyeS1iYWNrZ3JvdW5kIGJhY2tncm91bmRcIiAvPjtcbmNvbnN0IHNlY29uZGFyeUNvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZGFyeS1iYWNrZ3JvdW5kIGJhY2tncm91bmRcIiAvPjtcbmNvbnN0IGFjY2VudENvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImFjY2VudC1iYWNrZ3JvdW5kIGJhY2tncm91bmRcIiAvPjtcbmNvbnN0IHNpemUgPSBnZXRTaXplKCk7XG5jb25zdCB1bmFuaW1hdGVkRGl2ID0gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplLCBjb2xvcjogJ2JsYWNrJyB9fSAvPjtcblxuY29uc3QgY3ViZU9wdGlvbnMgPSB7XG4gIGJvdHRvbUNvbnRlbnQ6IHdoaXRlQ29udGVudCxcbiAgbGVmdENvbnRlbnQ6IHByaW1hcnlDb250ZW50LFxuICByaWdodENvbnRlbnQ6IHNlY29uZGFyeUNvbnRlbnQsXG4gIHRvcENvbnRlbnQ6IGFjY2VudENvbnRlbnQsXG59O1xuXG5jb25zdCBIaSA9ICh7IG9uSGlkZSB9KSA9PiB7XG4gIGNvbnN0IFsgYW5pbWF0aW9uLCBzZXRBbmltYXRpb24gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBoaWRkZW4sIHNldEhpZGRlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QW5pbWF0aW9uKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRBbmltYXRpb24oZmFsc2UpLCAyMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEhpZGRlbih0cnVlKSwgMjUwMCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoaWRkZW4gJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uSGlkZSkge1xuICAgICAgb25IaWRlKCk7XG4gICAgfVxuICB9LCBbIGhpZGRlbiBdKTtcblxuICBjb25zdCBzaG93ID0gYW5pbWF0aW9uICYmICFoaWRkZW47XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ3ViZSA9ICgpID0+IHtcbiAgICBsZXQgZmFjZSA9IENVQkVfRkFDRVMuZnJvbnQ7XG5cbiAgICBpZiAoc2hvdykge1xuICAgICAgY29uc3QgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG5cbiAgICAgIGZhY2UgPSBbIENVQkVfRkFDRVMuYm90dG9tLCBDVUJFX0ZBQ0VTLmxlZnQsIENVQkVfRkFDRVMucmlnaHQsIENVQkVfRkFDRVMudG9wIF1bbnVtYmVyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17ZmFjZX0gey4uLmN1YmVPcHRpb25zfSAvPjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgaGktY29udGFpbmVyJHtoaWRkZW4gPyAnIGhpZGRlbicgOiAnJ31gfT5cbiAgICAgIDxoMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpbWFyeVwiPlxuICAgICAgICAgIE15IEM8c3Bhbj51PC9zcGFuPlY8c3Bhbj5lPC9zcGFuPlxuICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgYnkgPHNwYW4gY2xhc3NOYW1lPVwic2Vjb25kYXJ5XCI+SmF2aWVyIEdhcmPDrWE8L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5IaS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uSGlkZTogdW5kZWZpbmVkLFxufTtcblxuSGkucHJvcFR5cGVzID0ge1xuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGk7XG4iLCJpbXBvcnQgSGkgZnJvbSAnLi9IaSc7XG5pbXBvcnQgJy4vaGkuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEhpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4gKFxuICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBzaGFkb3dcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci10aXRsZVwiPlxuICAgICAgICBNeSBDPHNwYW4+dTwvc3Bhbj5WPHNwYW4+ZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3VidGl0bGVcIj5cbiAgICAgICAgYnkgPHNwYW4+SmF2aSBHYXJjw61hIEZhamFyZG88L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcbmltcG9ydCAnLi9uYXZiYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBJY29uID0gKHsgaWNvbiwgLi4ucmVzdCB9KSA9PiA8aSB7Li4ucmVzdH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPXtpY29ufSAvPjtcblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb246IHVuZGVmaW5lZCxcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgJy4vaWNvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGljb24sIHRleHQsIC4uLnJlc3QgfSkgPT4gKFxuICA8YnV0dG9uIGNsYXNzTmFtZT17YGN1c3RvbS1idG4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9IHR5cGU9XCJidXR0b25cIiB7Li4ucmVzdH0+XG4gICAge2ljb24gJiYgPEljb24gaWNvbj17aWNvbn0gLz59XG4gICAge3RleHQgJiYgPHNwYW4+e3RleHR9PC9zcGFuPn1cbiAgICB7Y2hpbGRyZW59XG4gIDwvYnV0dG9uPlxuKTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkLFxufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgb25GdWxsc2NyZWVuLCBvbkZ1bGxzY3JlZW5PdXQsIHRpdGxlIH0pID0+IHtcbiAgY29uc3QgWyBmYWRlb3V0LCBzZXRGYWRlb3V0IF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgZnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIHRhcHBlZCwgc2V0VGFwcGVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZmFkZW91dCAmJiBmdWxsc2NyZWVuKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZ1bGxzY3JlZW4oZmFsc2UpLCA0MDApO1xuICAgIH1cbiAgfSwgWyBmYWRlb3V0IF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFmdWxsc2NyZWVuICYmIGZhZGVvdXQpIHtcbiAgICAgIHNldEZhZGVvdXQoZmFsc2UpO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBvbkZ1bGxzY3JlZW5PdXQpIHtcbiAgICAgICAgb25GdWxsc2NyZWVuT3V0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmdWxsc2NyZWVuICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBvbkZ1bGxzY3JlZW4pIHtcbiAgICAgIG9uRnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfSwgWyBmdWxsc2NyZWVuIF0pO1xuICBjb25zdCBjbGVhclRhcHBlZCA9ICgpID0+IHNldFRhcHBlZChmYWxzZSk7XG5cbiAgY29uc3QgaXNEb3VibGVUYXAgPSAoKSA9PiB7XG4gICAgaWYgKHRhcHBlZCkge1xuICAgICAgc2V0RnVsbHNjcmVlbih0cnVlKTtcbiAgICAgIGNsZWFyVGltZW91dChjbGVhclRhcHBlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRhcHBlZCh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoY2xlYXJUYXBwZWQsIDMwMCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBmdWxsc2NyZWVuID8gKFxuICAgIGNyZWF0ZVBvcnRhbChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY3ViZS1zZWN0aW9uIGN1YmUtc2VjdGlvbi1mdWxsICR7ZmFkZW91dCA/ICdmYWRlb3V0JyA6ICdmYWRlaW4nfSR7XG4gICAgICAgICAgY2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJydcbiAgICAgICAgfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1YmUtc2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICB7dGl0bGUgJiYgPGgyPnt0aXRsZX08L2gyPn1cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZS1idG5cIlxuICAgICAgICAgICAgaWNvbj1cImZhcyBmYS10aW1lc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGYWRlb3V0KHRydWUpfVxuICAgICAgICAgICAgb25Ub3VjaEVuZD17KCkgPT4gc2V0RmFkZW91dCh0cnVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4sXG4gICAgICBkb2N1bWVudC5ib2R5LFxuICAgIClcbiAgKSA6IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjdWJlLXNlY3Rpb24gZmFkZWluJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfVxuICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4gIWRpc2FibGVkICYmIHNldEZ1bGxzY3JlZW4odHJ1ZSl9XG4gICAgICBvblRvdWNoRW5kPXtpc0RvdWJsZVRhcH0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7dGl0bGUgJiYgPGgyPnt0aXRsZX08L2gyPn1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPEJ1dHRvbiBjbGFzc05hbWU9XCJzZWUtbW9yZS1idG5cIiBpY29uPVwiZmFzIGZhLXBsdXNcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsc2NyZWVuKHRydWUpfSAvPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBvbkZ1bGxzY3JlZW46IHVuZGVmaW5lZCxcbiAgb25GdWxsc2NyZWVuT3V0OiB1bmRlZmluZWQsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG59O1xuXG5TZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25GdWxsc2NyZWVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25GdWxsc2NyZWVuT3V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCAnLi9zZWN0aW9uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IGV4cGVyaWVuY2UgZnJvbSAnLi9lcy9leHBlcmllbmNlLmpzb24nO1xuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi9lcy9wcm9maWxlLmpzb24nO1xuXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XG4gIGV4cGVyaWVuY2UsXG4gIHByb2ZpbGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGlvbnM7XG4iLCJpbXBvcnQgZXhwZXJpZW5jZSBmcm9tICcuL2VuL2V4cGVyaWVuY2UuanNvbic7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuL2VuL3Byb2ZpbGUuanNvbic7XG5cbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcbiAgZXhwZXJpZW5jZSxcbiAgcHJvZmlsZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0aW9ucztcbiIsImltcG9ydCBlcyBmcm9tICcuL2VzJztcbmltcG9ydCBlbiBmcm9tICcuL2VuJztcblxuY29uc3QgdHJhbnNsYXRpb25zID0geyBlcywgZW4gfTtcblxuZXhwb3J0IGNvbnN0IExBTkdfSURTID0ge1xuICBlbmdsaXNoOiAnZW4nLFxuICBzcGFuaXNoOiAnZXMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNldExvY2FsZSA9IChsYW5nKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIGxhbmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExvY2FsZSA9ICgpID0+IHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UubGFuZ3VhZ2UpIHtcbiAgICByZXR1cm4gTEFOR19JRFMuc3BhbmlzaDtcbiAgfVxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmxhbmd1YWdlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzU3BhbmlzaCA9ICgpID0+IExBTkdfSURTLnNwYW5pc2ggPT09IGdldExvY2FsZSgpO1xuXG4vKipcbiAqIFJlc29sdmVzIGEgc3RyaW5nICdpbmRleCcgZm9yIHRoZSBKYXZhU2NyaXB0IE9iamVjdFxuICovXG5jb25zdCByZXNvbHZlSW5kZXggPSAoc3RyKSA9PiB7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cXFsoXFx3KylcXF0vZywgJy4kMScpOyAvLyBjb252ZXJ0IGluZGV4ZXMgdG8gcHJvcGVydGllc1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXlxcLi8sICcnKTsgLy8gc3RyaXAgYSBsZWFkaW5nIGRvdFxuICBjb25zdCBhcnJheSA9IHN0ci5zcGxpdCgnLicpO1xuXG4gIGxldCB0cmFuc2xhdGlvbnNMYW5nID0gdHJhbnNsYXRpb25zW2dldExvY2FsZSgpXTtcblxuICBmb3IgKGxldCBpID0gMCwgeyBsZW5ndGggfSA9IGFycmF5OyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBlbGVtID0gYXJyYXlbaV07XG4gICAgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgdHJhbnNsYXRpb25zTGFuZyAmJiBlbGVtIGluIHRyYW5zbGF0aW9uc0xhbmcpIHtcbiAgICAgIHRyYW5zbGF0aW9uc0xhbmcgPSB0cmFuc2xhdGlvbnNMYW5nW2VsZW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRyYW5zbGF0aW9uc0xhbmc7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlID0gKGtleSkgPT4gcmVzb2x2ZUluZGV4KGtleSk7XG5cbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSBbXG4gIHsgbmFtZTogdHJhbnNsYXRlKCdsYW5ndWFnZS5lcycpLCB2YWx1ZTogJ2VzJyB9LFxuICB7IG5hbWU6IHRyYW5zbGF0ZSgnbGFuZ3VhZ2UuZW4nKSwgdmFsdWU6ICdlbicgfSxcbl07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEJBUl9UWVBFUyA9IHtcbiAgcHJpbWFyeURhcmtlcjogJ3ByaW1hcnktZGFya2VyJyxcbiAgcHJpbWFyeURhcms6ICdwcmltYXJ5LWRhcmsnLFxuICBwcmltYXJ5OiAncHJpbWFyeScsXG4gIHNlY29uZGFyeURhcmtlcjogJ3NlY29uZGFyeS1kYXJrZXInLFxuICBzZWNvbmRhcnlEYXJrOiAnc2Vjb25kYXJ5LWRhcmsnLFxuICBzZWNvbmRhcnk6ICdzZWNvbmRhcnknLFxuICBhY2NlbnREYXJrZXI6ICdhY2NlbnQtZGFya2VyJyxcbiAgYWNjZW50RGFyazogJ2FjY2VudC1kYXJrJyxcbiAgYWNjZW50OiAnYWNjZW50Jyxcbn07XG5cbmNvbnN0IGdldFRvdGFsID0gKHRvdGFsLCBhbW91bnQpID0+IChhbW91bnQgKiAxMDApIC8gdG90YWw7XG5jb25zdCBnZXRDb2xvciA9ICh0b3RhbCkgPT4ge1xuICBpZiAoMTAwID09PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMucHJpbWFyeURhcmtlcjtcbiAgfVxuICBpZiAoOTAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnByaW1hcnlEYXJrO1xuICB9XG4gIGlmICg3NSA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMucHJpbWFyeTtcbiAgfVxuICBpZiAoNjAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnNlY29uZGFyeURhcmtlcjtcbiAgfVxuICBpZiAoNTUgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnNlY29uZGFyeURhcms7XG4gIH1cbiAgaWYgKDQwIDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5zZWNvbmRhcnk7XG4gIH1cbiAgaWYgKDI1IDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5hY2NlbnREYXJrZXI7XG4gIH1cbiAgaWYgKDEwIDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5hY2NlbnREYXJrO1xuICB9XG4gIHJldHVybiBCQVJfVFlQRVMuYWNjZW50O1xufTtcblxuY29uc3QgQmFyID0gKHsgYW1vdW50LCBjbGFzc05hbWUsIHRleHQsIHRvdGFsQW1vdW50LCB2ZXJ0aWNhbCwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IFsgY29sb3IsIHNldENvbG9yIF0gPSB1c2VTdGF0ZShCQVJfVFlQRVMucHJpbWFyeSk7XG4gIGNvbnN0IFsgbW91bnRlZCwgc2V0TW91bnRlZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIHRvdGFsLCBzZXRUb3RhbCBdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW91bnRlZCkge1xuICAgICAgY29uc3QgbmV3dG90YWwgPSBnZXRUb3RhbCh0b3RhbEFtb3VudCwgYW1vdW50KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VG90YWwobmV3dG90YWwpLCA1MDApO1xuICAgICAgc2V0Q29sb3IoZ2V0Q29sb3IobmV3dG90YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFsgbW91bnRlZCBdKTtcblxuICB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgaWYgKG1vdW50ZWQpIHtcbiAgICAgIGNvbnN0IG5ld3RvdGFsID0gZ2V0VG90YWwodG90YWxBbW91bnQsIGFtb3VudCk7XG4gICAgICBzZXRUb3RhbChuZXd0b3RhbCk7XG4gICAgICBzZXRDb2xvcihnZXRDb2xvcihuZXd0b3RhbCkpO1xuICAgIH1cbiAgfSwgWyBhbW91bnQsIHRvdGFsQW1vdW50IF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLnJlc3R9XG4gICAgICBjbGFzc05hbWU9e2BiYXItdG90YWwgZmFkZWluJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ30gJHt2ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJhciAke2NvbG9yfWB9IHN0eWxlPXt2ZXJ0aWNhbCA/IHsgaGVpZ2h0OiBgJHt0b3RhbH1gIH0gOiB7IHdpZHRoOiBgJHt0b3RhbH0lYCB9fT5cbiAgICAgICAge21vdW50ZWQgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhZGVpblwiPlxuICAgICAgICAgICAge3RleHR9IHt0b3RhbH0lXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5CYXIuZGVmYXVsdFByb3BzID0ge1xuICBhbW91bnQ6IDAsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICB0ZXh0OiB1bmRlZmluZWQsXG4gIHRvdGFsQW1vdW50OiAxMDAsXG4gIHZlcnRpY2FsOiBmYWxzZSxcbn07XG5cbkJhci5wcm9wVHlwZXMgPSB7XG4gIGFtb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b3RhbEFtb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyO1xuIiwiaW1wb3J0IEJhciBmcm9tICcuL0Jhcic7XG5pbXBvcnQgJy4vYmFyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBCYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy90cmFuc2xhdG9yJztcbmltcG9ydCBCYXIgZnJvbSAnLi4vLi4vQmFyJztcblxuY29uc3QgUHJvZmlsZSA9ICh7IC4uLnJlc3QgfSkgPT4gKFxuICA8U2VjdGlvbiB7Li4ucmVzdH0gdGl0bGU9e3RyYW5zbGF0ZSgncHJvZmlsZS50aXRsZScpfSBjbGFzc05hbWU9XCJwcm9maWxlLXNlY3Rpb25cIj5cbiAgICA8cD57dHJhbnNsYXRlKCdwcm9maWxlLmhlYWRlcicpfTwvcD5cbiAgICA8QmFyIHRleHQ9XCJSZWFjdFwiIGFtb3VudD17ODB9IC8+XG4gICAgPEJhciB0ZXh0PVwiUmVhY3QgTmF0aXZlXCIgYW1vdW50PXs1MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJIVE1MXCIgYW1vdW50PXs3NX0gLz5cbiAgICA8QmFyIHRleHQ9XCJDU1NcIiBhbW91bnQ9ezg1fSAvPlxuICAgIDxCYXIgdGV4dD1cIkdyYXBoUUxcIiBhbW91bnQ9ezU1fSAvPlxuICAgIDxCYXIgdGV4dD1cIk5vZGVcIiBhbW91bnQ9ezY1fSAvPlxuICAgIDxCYXIgdGV4dD1cIk1vbmdvXCIgYW1vdW50PXs3MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJBbmd1bGFyXCIgYW1vdW50PXs0MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJKYXZhXCIgYW1vdW50PXs2MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJTcHJpbmdib290XCIgYW1vdW50PXsyMH0gLz5cbiAgICA8QmFyIHRleHQ9XCJWdWVcIiBhbW91bnQ9ezIwfSAvPlxuICAgIDxwPnt0cmFuc2xhdGUoJ3Byb2ZpbGUudGV4dCcpfTwvcD5cbiAgICA8cD57dHJhbnNsYXRlKCdwcm9maWxlLnRleHQyJyl9PC9wPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJztcbmltcG9ydCAnLi9wcm9maWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENvbXBhbnkgPSAoeyBlbmQsIG5hbWUsIHBsYWNlLCByb2xlLCBzdGFydCwgdGVjaG5vbG9naWVzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55LWV4cGVyaWVuY2VcIj5cbiAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LW5hbWVcIj57bmFtZX08L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS1kdXJhdGlvblwiPlxuICAgICAge3N0YXJ0fSAtIHtlbmR9XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktcm9sZVwiPntyb2xlfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LXBsYWNlXCI+e3BsYWNlfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LXRlY2hcIj57dGVjaG5vbG9naWVzfTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5Db21wYW55LnByb3BUeXBlcyA9IHtcbiAgZW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGxhY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdGFydDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZWNobm9sb2dpZXM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy90cmFuc2xhdG9yJztcbmltcG9ydCBDb21wYW55IGZyb20gJy4vQ29tcGFueSc7XG5cbmNvbnN0IGNvbXBhbmllcyA9IFtcbiAge1xuICAgIG5hbWU6ICdXb3p6bycsXG4gICAgcm9sZTogdHJhbnNsYXRlKCdleHBlcmllbmNlLndvenpvLnJvbGUnKSxcbiAgICBwbGFjZTogJ1BhbG1hIGRlIE1hbGxvcmNhJyxcbiAgICBzdGFydDogJzA5LzIwMTgnLFxuICAgIGVuZDogdHJhbnNsYXRlKCdleHBlcmllbmNlLnByZXNlbnQnKSxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS53b3p6by50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQbGV4dXMgVGVjaG5vbG9naWVzJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UucGxleHVzLnJvbGUnKSxcbiAgICBwbGFjZTogJ1BhbG1hIGRlIE1hbGxvcmNhJyxcbiAgICBzdGFydDogJzA4LzIwMTgnLFxuICAgIGVuZDogJzA5LzIwMTcnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLnBsZXh1cy50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHTVYnLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5nbXYucm9sZScpLFxuICAgIHBsYWNlOiAnU2V2aWxsYScsXG4gICAgc3RhcnQ6ICcwOS8yMDE1JyxcbiAgICBlbmQ6ICcwOC8yMDE2JyxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5nbXYudGVjaG5vbG9naWVzJyksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT2Vzw61hIE5ldHdvcmtzJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2Uub2VzaWEucm9sZScpLFxuICAgIHBsYWNlOiAnU2V2aWxsYScsXG4gICAgc3RhcnQ6ICcwNi8yMDE1JyxcbiAgICBlbmQ6ICcwOC8yMDE1JyxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5vZXNpYS50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdBdG9zJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UuYXRvcy5yb2xlJyksXG4gICAgcGxhY2U6ICdTZXZpbGxhJyxcbiAgICBzdGFydDogJzA4LzIwMTMnLFxuICAgIGVuZDogJzA2LzIwMTUnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLmF0b3MudGVjaG5vbG9naWVzJyksXG4gIH0sXG5dO1xuXG5jb25zdCBFeHBlcmllbmNlID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxTZWN0aW9uIHsuLi5yZXN0fSB0aXRsZT17dHJhbnNsYXRlKCdleHBlcmllbmNlLnRpdGxlJyl9IGNsYXNzTmFtZT1cImV4cGVyaWVuY2Utc2VjdGlvblwiPlxuICAgIHtjb21wYW5pZXMubWFwKChjb21wYW55KSA9PiAoXG4gICAgICA8Q29tcGFueSBrZXk9e2NvbXBhbnkubmFtZX0gey4uLmNvbXBhbnl9IC8+XG4gICAgKSl9XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7XG4iLCJpbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuL0V4cGVyaWVuY2UnO1xuaW1wb3J0ICcuL2V4cGVyaWVuY2Uuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ3ViZSBmcm9tICcuLi9DdWJlJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9TZWN0aW9uJztcbmltcG9ydCB7IENVQkVfRkFDRVMgfSBmcm9tICcuLi9DdWJlL0N1YmUnO1xuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSAnLi9FeHBlcmllbmNlJztcblxuY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gIHJldHVybiAoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0ID8gaW5uZXJIZWlnaHQgOiBpbm5lcldpZHRoKSAqIDAuODtcbn07XG5jb25zdCBzaXplID0gZ2V0U2l6ZSgpO1xuXG5jb25zdCBNYWluQ3ViZSA9ICh7IGhpZGRlbkludHJvIH0pID0+IHtcbiAgY29uc3QgWyBpbml0aWFsVHJhbnNpdGlvbiwgc2V0SW5pdGlhbFRyYW5zaXRpb24gXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbIGlzRnVsbHNjcmVlbiwgc2V0SXNGdWxsc2NyZWVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuSW50cm8pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SW5pdGlhbFRyYW5zaXRpb24oZmFsc2UpLCA3NTApO1xuICAgIH1cbiAgfSwgWyBoaWRkZW5JbnRybyBdKTtcblxuICBjb25zdCBjb21tb25Qcm9wcyA9IHtcbiAgICBvbkZ1bGxzY3JlZW46ICgpID0+IHNldElzRnVsbHNjcmVlbih0cnVlKSxcbiAgICBvbkZ1bGxzY3JlZW5PdXQ6ICgpID0+IHNldElzRnVsbHNjcmVlbihmYWxzZSksXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibWFpbi1jdWJlXCIgY2xhc3NOYW1lPXtoaWRkZW5JbnRybyA/ICcnIDogJ2hpZGRlbi1jdWJlJ30+XG4gICAgICA8Q3ViZVxuICAgICAgICBjbGFzc05hbWU9e2luaXRpYWxUcmFuc2l0aW9uID8gJ2luaXRpYWwtdHJhbnNpdGlvbicgOiAnJ31cbiAgICAgICAgZGlzYWJsZWQ9e2lzRnVsbHNjcmVlbn1cbiAgICAgICAgZmFjZT17aW5pdGlhbFRyYW5zaXRpb24gPyBDVUJFX0ZBQ0VTLmJhY2sgOiBDVUJFX0ZBQ0VTLmZyb250fVxuICAgICAgICBsZWZ0Q29udGVudD17aGlkZGVuSW50cm8gJiYgPFNlY3Rpb24gey4uLmNvbW1vblByb3BzfSB0aXRsZT1cIkZPUk1BQ0lPTlwiIC8+fVxuICAgICAgICBmcm9udENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxQcm9maWxlIHsuLi5jb21tb25Qcm9wc30gLz59XG4gICAgICAgIHJpZ2h0Q29udGVudD17aGlkZGVuSW50cm8gJiYgPEV4cGVyaWVuY2Ugey4uLmNvbW1vblByb3BzfSAvPn1cbiAgICAgICAgYmFja0NvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxTZWN0aW9uIHsuLi5jb21tb25Qcm9wc30gdGl0bGU9XCJTT0NJQUxcIiAvPn1cbiAgICAgICAgYm90dG9tQ29udGVudD17aGlkZGVuSW50cm8gJiYgPFNlY3Rpb24gey4uLmNvbW1vblByb3BzfSB0aXRsZT1cIk1hZGUgYnkgSmF2aWVyIEdhcmPDrWEgRmFqYXJkb1wiIGRpc2FibGVkIC8+fVxuICAgICAgICB0b3BDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8U2VjdGlvbiB7Li4uY29tbW9uUHJvcHN9IHRpdGxlPVwiSGVsbG8gOilcIiBkaXNhYmxlZCAvPn1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgd2l0aFN3aXBlXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTWFpbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBoaWRkZW5JbnRybzogZmFsc2UsXG59O1xuXG5NYWluQ3ViZS5wcm9wVHlwZXMgPSB7XG4gIGhpZGRlbkludHJvOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5DdWJlO1xuIiwiaW1wb3J0IE1haW5DdWJlIGZyb20gJy4vTWFpbkN1YmUnO1xuaW1wb3J0ICcuL21haW5DdWJlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ3ViZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaSBmcm9tICcuLi9jb21wb25lbnRzL0hpJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IE1haW5DdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkN1YmUnO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbIGhpZGRlbkludHJvLCBzZXRIaWRkZW5JbnRybyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJmYWRlaW5cIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8SGkgb25IaWRlPXsoKSA9PiBzZXRIaWRkZW5JbnRybyh0cnVlKX0gLz5cbiAgICAgICAgPE1haW5DdWJlIGhpZGRlbkludHJvPXtoaWRkZW5JbnRyb30gLz5cbiAgICAgICAgPGRpdiBpZD1cInNlbGVjdGVkLXNlY3Rpb25cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPE1haW4gLz5cbiAgPC9Ccm93c2VyUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=