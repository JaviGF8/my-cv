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
exports.push([module.i, ".hi-container{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#080808;transition:linear all .5s;z-index:1001}.hi-container h1{color:#fff;text-align:center;width:95%;font-size:20px}.hi-container h1 span.primary{color:#b71d2b;font-size:32px}.hi-container h1 span.primary span{font-size:20px;font-weight:300}.hi-container h1 span.secondary{color:#78b6a9;font-size:24px}.hi-container .hi{display:flex;max-width:1200px}.hi-container .hi .letter{display:flex;flex-wrap:wrap}.hi-container .hi .letter>div{display:flex;flex-direction:row;justify-content:center;width:100%;margin:4px 0}.hi-container .hi .letter>div>*{margin:0 4px}.hi-container .hi .letter .white-background{background-color:#fff;border-radius:8px;overflow:hidden}.hi-container.hidden{opacity:0;pointer-events:none}.hi-container.hidden *{pointer-events:none}@media screen and (max-width: 768px){.hi-container h1{display:flex;flex-direction:column}}\n", ""]);
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
exports.push([module.i, ".experience-section>div .company-experience{width:100%;display:flex;flex-wrap:wrap;padding:8px 0;border-bottom:1px solid #b71d2b}.experience-section>div .company-experience>*{width:100%;margin:0}.experience-section>div .company-experience .company-name{font-size:20px;width:60%}.experience-section>div .company-experience .company-place{font-size:12px;margin-bottom:8px}.experience-section>div .company-experience .company-duration{width:40%;text-align:right}.experience-section>div .company-experience .company-role{font-style:italic;font-weight:300;font-size:12px;margin-top:8px}.experience-section>div .company-experience:nth-child(even){border-bottom-color:#65a698}@media screen and (max-width: 992px){.experience-section>div .company-experience .company-name,.experience-section>div .company-experience company-duration{width:100%}}\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9zZWN0aW9uLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL3NlY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3M/MmM4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvUHJvZmlsZS9wcm9maWxlLnNjc3M/YjBhNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL3Byb2ZpbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL2V4cGVyaWVuY2Uuc2Nzcz85MzFhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvZXhwZXJpZW5jZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL21haW5DdWJlLnNjc3M/MjFjNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9tYWluQ3ViZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzPzI5NDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzRjMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1YmUvQ3ViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9IaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RyYW5zbGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFyL0Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1Byb2ZpbGUvUHJvZmlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvUHJvZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL0NvbXBhbnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvRXhwZXJpZW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9NYWluQ3ViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDVUJFX0ZBQ0VTIiwiZnJvbnQiLCJiYWNrIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaXNBcnJvd0xlZnQiLCJjb2RlIiwia2V5Iiwia2V5Q29kZSIsImlzQXJyb3dVcCIsImlzQXJyb3dSaWdodCIsImlzQXJyb3dEb3duIiwiQ3ViZSIsImJhY2tDb250ZW50IiwiYm90dG9tQ29udGVudCIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiZmFjZSIsImZyb250Q29udGVudCIsImxlZnRDb250ZW50IiwicmlnaHRDb250ZW50Iiwic2l6ZSIsInRvcENvbnRlbnQiLCJ3aXRoU3dpcGUiLCJ1c2VTdGF0ZSIsImFuZ1giLCJzZXRBbmdYIiwiYW5nWSIsInNldEFuZ1kiLCJtb3ZpbmciLCJzZXRNb3ZpbmciLCJzdGFydFgiLCJzZXRTdGFydFgiLCJzdGFydFkiLCJzZXRTdGFydFkiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJ4IiwieSIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3ZlbWVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WSIsImRpZmZYIiwiZGlmZlkiLCJNYXRoIiwiYWJzIiwiaGFuZGxlTW92ZW1lbnRTdGFydCIsInRvdWNoZXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiLCJudW1iZXIiLCJnZXRTaXplIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZmxvb3IiLCJjb250ZW50IiwidW5hbmltYXRlZERpdiIsImNvbG9yIiwiY3ViZU9wdGlvbnMiLCJIaSIsIm9uSGlkZSIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsInNob3ciLCJnZXRSYW5kb21DdWJlIiwicmFuZG9tIiwiZnVuYyIsIk5hdmJhciIsIkljb24iLCJpY29uIiwicmVzdCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwidGV4dCIsIlNlY3Rpb24iLCJvbkZ1bGxzY3JlZW4iLCJvbkZ1bGxzY3JlZW5PdXQiLCJ0aXRsZSIsImZhZGVvdXQiLCJzZXRGYWRlb3V0IiwiZnVsbHNjcmVlbiIsInNldEZ1bGxzY3JlZW4iLCJ0YXBwZWQiLCJzZXRUYXBwZWQiLCJjbGVhclRhcHBlZCIsImlzRG91YmxlVGFwIiwiY2xlYXJUaW1lb3V0IiwiY3JlYXRlUG9ydGFsIiwiYm9keSIsInRyYW5zbGF0aW9ucyIsImV4cGVyaWVuY2UiLCJwcm9maWxlIiwiZXMiLCJlbiIsIkxBTkdfSURTIiwiZW5nbGlzaCIsInNwYW5pc2giLCJzZXRMb2NhbGUiLCJsYW5nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldExvY2FsZSIsImxhbmd1YWdlIiwiaXNTcGFuaXNoIiwicmVzb2x2ZUluZGV4Iiwic3RyIiwicmVwbGFjZSIsImFycmF5Iiwic3BsaXQiLCJ0cmFuc2xhdGlvbnNMYW5nIiwiaSIsImxlbmd0aCIsImVsZW0iLCJ0cmFuc2xhdGUiLCJMQU5HVUFHRVMiLCJuYW1lIiwidmFsdWUiLCJCQVJfVFlQRVMiLCJwcmltYXJ5RGFya2VyIiwicHJpbWFyeURhcmsiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5RGFya2VyIiwic2Vjb25kYXJ5RGFyayIsInNlY29uZGFyeSIsImFjY2VudERhcmtlciIsImFjY2VudERhcmsiLCJhY2NlbnQiLCJnZXRUb3RhbCIsInRvdGFsIiwiYW1vdW50IiwiZ2V0Q29sb3IiLCJCYXIiLCJ0b3RhbEFtb3VudCIsInZlcnRpY2FsIiwic2V0Q29sb3IiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInNldFRvdGFsIiwibmV3dG90YWwiLCJQcm9maWxlIiwiQ29tcGFueSIsImVuZCIsInBsYWNlIiwicm9sZSIsInN0YXJ0IiwidGVjaG5vbG9naWVzIiwiaXNSZXF1aXJlZCIsImNvbXBhbmllcyIsIkV4cGVyaWVuY2UiLCJtYXAiLCJjb21wYW55IiwiTWFpbkN1YmUiLCJoaWRkZW5JbnRybyIsImluaXRpYWxUcmFuc2l0aW9uIiwic2V0SW5pdGlhbFRyYW5zaXRpb24iLCJpc0Z1bGxzY3JlZW4iLCJzZXRJc0Z1bGxzY3JlZW4iLCJjb21tb25Qcm9wcyIsIk1haW4iLCJzZXRIaWRkZW5JbnRybyIsIkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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RSw4QkFBQyxVQUFELE9BREYsQ0FERjs7QUFNZUEsK0NBQWYsRTs7Ozs7Ozs7QUNYQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUFDLG1CQUFRLENBQUNDLE1BQVQsZUFBZ0IsOEJBQUMsT0FBRCxPQUFoQixFQUF5QnZJLFFBQVEsQ0FBQ3dJLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIsRSIsImZpbGUiOiJpbmRleF9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMTQ3LDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdWJlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdWJlLWNvbnRhaW5lciAuY3ViZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2l0aW9uOmVhc2UtaW4gYWxsIC41c30uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODtjb2xvcjojZmZmfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlPip7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZnJvbnR7dHJhbnNmb3JtOnJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLXJpZ2h0e3RyYW5zZm9ybTpyb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYmFja3t0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1sZWZ0e3RyYW5zZm9ybTpyb3RhdGVaKDE4MGRlZykgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS10b3B7dHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1ib3R0b217dHJhbnNmb3JtOnJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oaS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXM7ei1pbmRleDoxMDAxfS5oaS1jb250YWluZXIgaDF7Y29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NSU7Zm9udC1zaXplOjIwcHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnByaW1hcnl7Y29sb3I6I2I3MWQyYjtmb250LXNpemU6MzJweH0uaGktY29udGFpbmVyIGgxIHNwYW4ucHJpbWFyeSBzcGFue2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjMwMH0uaGktY29udGFpbmVyIGgxIHNwYW4uc2Vjb25kYXJ5e2NvbG9yOiM3OGI2YTk7Zm9udC1zaXplOjI0cHh9LmhpLWNvbnRhaW5lciAuaGl7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMjAwcHh9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlcntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXB9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlcj5kaXZ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7bWFyZ2luOjRweCAwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2Pip7bWFyZ2luOjAgNHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXIgLndoaXRlLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6OHB4O292ZXJmbG93OmhpZGRlbn0uaGktY29udGFpbmVyLmhpZGRlbntvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0uaGktY29udGFpbmVyLmhpZGRlbiAqe3BvaW50ZXItZXZlbnRzOm5vbmV9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpey5oaS1jb250YWluZXIgaDF7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm5hdi5uYXZiYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDo5MDA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I2I3MWQyYjtoZWlnaHQ6NjBweDtwYWRkaW5nOjAgMTZweH1uYXYubmF2YmFyIC5leHBhbmQtYnRue2Rpc3BsYXk6bm9uZX1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudHttYXgtd2lkdGg6MTIwMHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxle2ZvbnQtc2l6ZTozMnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6I2ZmZn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxlIHNwYW57Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6MzAwfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItc3VidGl0bGV7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc3R5bGU6aXRhbGljfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItc3VidGl0bGUgc3Bhbntjb2xvcjojZTliYmJmfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXtuYXYubmF2YmFyIC5uYXZiYXItY29udGVudHtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxle2ZvbnQtc2l6ZToyMHB4fW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItdGl0bGUgc3Bhbntmb250LXNpemU6MTJweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxle2ZvbnQtc2l6ZToxMnB4fW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItc3VidGl0bGUgc3Bhbntmb250LXNpemU6MTRweH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaWNvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3VzdG9tLWljb257bWFyZ2luOjA7aGVpZ2h0OjhweH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1idG57cGFkZGluZzo4cHggMTZweDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MDtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2I3MWQyYjt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjI1cztvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXJ9LmN1c3RvbS1idG4+Kjpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tbGVmdDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VjdGlvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uLC5jdWJlLXNlY3Rpb257bWFyZ2luOjA7cGFkZGluZzozMnB4O3dpZHRoOmNhbGMoMTAwJSAtIDY0cHgpO2hlaWdodDpjYWxjKDEwMCUgLSA2NHB4KTtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjE2cHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO292ZXJmbG93OmhpZGRlbn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uICosLmN1YmUtc2VjdGlvbiAqey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uPmRpdiwuY3ViZS1zZWN0aW9uPmRpdnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtvdmVyZmxvdzpoaWRkZW59LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbj5kaXYgaDIsLmN1YmUtc2VjdGlvbj5kaXYgaDJ7bWFyZ2luOjA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3BhZGRpbmctYm90dG9tOjhweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYjcxZDJiO3dpZHRoOjEwMCV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiAuc2VlLW1vcmUtYnRuLC5jdWJlLXNlY3Rpb24gLnNlZS1tb3JlLWJ0bntoZWlnaHQ6MjAlO3dpZHRoOjEwMCU7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXJhZGl1czowfS5jdWJlLXNlY3Rpb24tZnVsbHtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZjtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6OTk5O3RyYW5zaXRpb246bGluZWFyIGFsbCAxcztib3JkZXItcmFkaXVzOjA7b3ZlcmZsb3c6YXV0b30uY3ViZS1zZWN0aW9uLWZ1bGw+ZGl2e21heC13aWR0aDoxMjAwcHg7b3ZlcmZsb3c6dmlzaWJsZX0uY3ViZS1zZWN0aW9uLWZ1bGw+ZGl2IC5jbG9zZS1idG57cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTZweDt0b3A6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiwuY3ViZS1zZWN0aW9ue3dpZHRoOmNhbGMoMTAwJSAtIDMycHgpO2hlaWdodDpjYWxjKDEwMCUgLSAzMnB4KTtwYWRkaW5nOjE2cHh9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYmFyLXRvdGFse2JhY2tncm91bmQtY29sb3I6c2lsdmVyO2JvcmRlci1yYWRpdXM6NHB4O292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXh9LmJhci10b3RhbCAuYmFye3BhZGRpbmc6NHB4IDA7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC41cztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5iYXItdG90YWwgLmJhcj5zcGFue21hcmdpbi1sZWZ0OjhweDt3aGl0ZS1zcGFjZTpub3dyYXB9LmJhci10b3RhbCAuYmFyLnByaW1hcnktZGFya2Vye2JhY2tncm91bmQtY29sb3I6IzkwMGExMH0uYmFyLXRvdGFsIC5iYXIucHJpbWFyeS1kYXJre2JhY2tncm91bmQtY29sb3I6I2E3MTUyMH0uYmFyLXRvdGFsIC5iYXIucHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmJ9LmJhci10b3RhbCAuYmFyLnNlY29uZGFyeS1kYXJrZXJ7YmFja2dyb3VuZC1jb2xvcjojNDg4ZTdlfS5iYXItdG90YWwgLmJhci5zZWNvbmRhcnktZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiM2NWE2OTh9LmJhci10b3RhbCAuYmFyLnNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YTl9LmJhci10b3RhbCAuYmFyLmFjY2VudC1kYXJrZXJ7YmFja2dyb3VuZC1jb2xvcjojZThiMzYxfS5iYXItdG90YWwgLmJhci5hY2NlbnQtZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiNlZWM0N2R9LmJhci10b3RhbCAuYmFyLmFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmQwOTB9LmJhci10b3RhbC52ZXJ0aWNhbHttaW4taGVpZ2h0OjEwMHB4O21pbi13aWR0aDozMnB4O21heC13aWR0aDozMnB4O2hlaWdodDoxMDAlO2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5iYXItdG90YWwudmVydGljYWwgLmJhcj5zcGFue3dyaXRpbmctbW9kZTp0Yi1ybDt0cmFuc2Zvcm06cm90YXRlKC0xODBkZWcpfS5iYXItdG90YWwuaG9yaXpvbnRhbHttaW4taGVpZ2h0OjMycHg7bWF4LWhlaWdodDozMnB4O21pbi13aWR0aDoxMDBweDt3aWR0aDoxMDAlfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2ZpbGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2ZpbGUtc2VjdGlvbj5kaXYgcHttYXJnaW46OHB4IDB9LnByb2ZpbGUtc2VjdGlvbj5kaXYgLmJhci10b3RhbHttYXJnaW46OHB4IDB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXhwZXJpZW5jZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNle3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO3BhZGRpbmc6OHB4IDA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2I3MWQyYn0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlPip7d2lkdGg6MTAwJTttYXJnaW46MH0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LW5hbWV7Zm9udC1zaXplOjIwcHg7d2lkdGg6NjAlfS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktcGxhY2V7Zm9udC1zaXplOjEycHg7bWFyZ2luLWJvdHRvbTo4cHh9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1kdXJhdGlvbnt3aWR0aDo0MCU7dGV4dC1hbGlnbjpyaWdodH0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LXJvbGV7Zm9udC1zdHlsZTppdGFsaWM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxMnB4O21hcmdpbi10b3A6OHB4fS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2U6bnRoLWNoaWxkKGV2ZW4pe2JvcmRlci1ib3R0b20tY29sb3I6IzY1YTY5OH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1uYW1lLC5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgY29tcGFueS1kdXJhdGlvbnt3aWR0aDoxMDAlfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluQ3ViZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lcnt0cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNpdGlvbjplYXNlLWluLW91dCBhbGwgMXMgLjI1c30jbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZS1mYWNle2JvcmRlci1yYWRpdXM6MTZweH0jbWFpbi1jdWJlIC5pbml0aWFsLXRyYW5zaXRpb24gLmN1YmV7dHJhbnNpdGlvbjplYXNlLWluLW91dCBhbGwgMXMgLjI1c30jbWFpbi1jdWJlLmhpZGRlbi1jdWJlIC5jdWJlLWNvbnRhaW5lcnt0cmFuc2Zvcm06c2NhbGUoMCkgcm90YXRlWigyNzBkZWcpfSNtYWluLWN1YmUuaGlkZGVuLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJle3RyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZykgIWltcG9ydGFudH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYWRlaW57LXdlYmtpdC1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1vei1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1zLWFuaW1hdGlvbjpmYWRlaW4gMC41czstby1hbmltYXRpb246ZmFkZWluIDAuNXM7YW5pbWF0aW9uOmZhZGVpbiAwLjVzfUBrZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tb3ota2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW1zLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW8ta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fS5mYWRlb3V0ey13ZWJraXQtYW5pbWF0aW9uOmZhZGVvdXQgMC41czstbW96LWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7LW1zLWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7LW8tYW5pbWF0aW9uOmZhZGVvdXQgMC41czthbmltYXRpb246ZmFkZW91dCAwLjVzO29wYWNpdHk6MH1Aa2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALW1vei1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC1tcy1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtby1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7Zm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowO2NvbG9yOiMwODA4MDg7LXdlYmtpdC1mb250LXNtb290aGluZzpzdWJwaXhlbC1hbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzphdXRvfS5zaGFkb3csbWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZXstd2Via2l0LWJveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSk7LW1vei1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpO2JveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSl9aHRtbHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmZ9bWFpbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbn1tYWluICNtYWluLWNvbnRhaW5lcntwYWRkaW5nLXRvcDo2MHB4O3dpZHRoOjEwMCU7aGVpZ2h0OmNhbGMoMTAwdmggLSA2MHB4KTtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ1VCRV9GQUNFUyA9IHtcbiAgZnJvbnQ6ICdmcm9udCcsXG4gIGJhY2s6ICdiYWNrJyxcbiAgbGVmdDogJ2xlZnQnLFxuICByaWdodDogJ3JpZ2h0JyxcbiAgdG9wOiAndG9wJyxcbiAgYm90dG9tOiAnYm90dG9tJyxcbn07XG5cbmNvbnN0IGlzQXJyb3dMZWZ0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM3ID09PSBrZXlDb2RlIHx8ICdBcnJvd0xlZnQnID09PSBjb2RlIHx8ICdBcnJvd0xlZnQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93VXAgPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gMzggPT09IGtleUNvZGUgfHwgJ0Fycm93VXAnID09PSBjb2RlIHx8ICdBcnJvd1VwJyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd1JpZ2h0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM5ID09PSBrZXlDb2RlIHx8ICdBcnJvd1JpZ2h0JyA9PT0gY29kZSB8fCAnQXJyUmlnaHQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93RG93biA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiA0MCA9PT0ga2V5Q29kZSB8fCAnQXJyb3dEb3duJyA9PT0gY29kZSB8fCAnQXJyb3dEb3duJyA9PT0ga2V5O1xuXG5jb25zdCBDdWJlID0gKHtcbiAgYmFja0NvbnRlbnQsXG4gIGJvdHRvbUNvbnRlbnQsXG4gIGNsYXNzTmFtZSxcbiAgZGlzYWJsZWQsXG4gIGZhY2UsXG4gIGZyb250Q29udGVudCxcbiAgbGVmdENvbnRlbnQsXG4gIHJpZ2h0Q29udGVudCxcbiAgc2l6ZSxcbiAgdG9wQ29udGVudCxcbiAgd2l0aFN3aXBlLFxufSkgPT4ge1xuICBjb25zdCBbIGFuZ1gsIHNldEFuZ1ggXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGFuZ1ksIHNldEFuZ1kgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIG1vdmluZywgc2V0TW92aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgc3RhcnRYLCBzZXRTdGFydFggXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbIHN0YXJ0WSwgc2V0U3RhcnRZIF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd0xlZnQoZXZlbnQpKSB7XG4gICAgICBzZXRBbmdZKGFuZ1kgKyA5MCk7XG4gICAgfSBlbHNlIGlmICghbW92aW5nICYmIGlzQXJyb3dVcChldmVudCkpIHtcbiAgICAgIHNldEFuZ1goYW5nWCAtIDkwKTtcbiAgICB9IGVsc2UgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd1JpZ2h0KGV2ZW50KSkge1xuICAgICAgc2V0QW5nWShhbmdZIC0gOTApO1xuICAgIH0gZWxzZSBpZiAoIW1vdmluZyAmJiBpc0Fycm93RG93bihldmVudCkpIHtcbiAgICAgIHNldEFuZ1goYW5nWCArIDkwKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuXG4gICAgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuZnJvbnQpIHtcbiAgICAgIHkgPSAwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5iYWNrKSB7XG4gICAgICB5ID0gLTE4MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMubGVmdCkge1xuICAgICAgeSA9IDkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5yaWdodCkge1xuICAgICAgeSA9IC05MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMudG9wKSB7XG4gICAgICB4ID0gLTkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5ib3R0b20pIHtcbiAgICAgIHggPSA5MDtcbiAgICB9XG5cbiAgICBzZXRBbmdYKHgpO1xuICAgIHNldEFuZ1koeSk7XG4gIH0sIFsgZmFjZSBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXJ0WChudWxsKTtcbiAgICBzZXRTdGFydFkobnVsbCk7XG4gICAgc2V0TW92aW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TW92aW5nKGZhbHNlKSwgNTAwKTtcbiAgfSwgWyBhbmdYLCBhbmdZIF0pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWRpc2FibGVkICYmICFtb3ZpbmcgJiYgKHN0YXJ0WCB8fCBzdGFydFkpKSB7XG4gICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQ/LmNoYW5nZWRUb3VjaGVzPy5bMF0/LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WDtcbiAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudD8uY2hhbmdlZFRvdWNoZXM/LlswXT8uY2xpZW50WSB8fCBldmVudC5jbGllbnRZO1xuXG4gICAgICBjb25zdCBkaWZmWCA9IGNsaWVudFggLSBzdGFydFg7XG4gICAgICBjb25zdCBkaWZmWSA9IGNsaWVudFkgLSBzdGFydFk7XG5cbiAgICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZYKSkge1xuICAgICAgICAvLyBob3Jpem9udGFsIHN3aXBlXG4gICAgICAgIHNldEFuZ1koMCA8IGRpZmZYID8gYW5nWSArIDkwIDogYW5nWSAtIDkwKTtcbiAgICAgIH1cbiAgICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZZKSkge1xuICAgICAgICAvLyB2ZXJ0aWNhbCBzd2lwZVxuICAgICAgICBzZXRBbmdYKDAgPCBkaWZmWSA/IGFuZ1ggLSA5MCA6IGFuZ1ggKyA5MCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVtZW50U3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjbGllbnRYID0gZXZlbnQ/LnRvdWNoZXM/LlswXT8uY2xpZW50WCB8fCBldmVudC5jbGllbnRYO1xuICAgIGNvbnN0IGNsaWVudFkgPSBldmVudD8udG91Y2hlcz8uWzBdPy5jbGllbnRZIHx8IGV2ZW50LmNsaWVudFk7XG5cbiAgICBzZXRTdGFydFgoY2xpZW50WCk7XG4gICAgc2V0U3RhcnRZKGNsaWVudFkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuXG4gICAgaWYgKHdpdGhTd2lwZSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdmVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdmVtZW50KTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGN1YmUtY29udGFpbmVyJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgcGVyc3BlY3RpdmU6IHNpemUgKiAzLFxuICAgICAgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImN1YmVcIlxuICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVaKC0ke3NpemUgLyAyfXB4KSByb3RhdGVYKCR7YW5nWH1kZWcpIHJvdGF0ZVkoJHthbmdZfWRlZylgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Nb3VzZVVwPXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uVG91Y2hFbmQ9e3dpdGhTd2lwZSAmJiAhZGlzYWJsZWQgPyBoYW5kbGVNb3ZlbWVudCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1mcm9udFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtmcm9udENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYmFja1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDE4MGRlZykgcm90YXRlWigxODBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtiYWNrQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1yaWdodFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7cmlnaHRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWxlZnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtsZWZ0Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS10b3BcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3RvcENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYm90dG9tXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7Ym90dG9tQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrQ29udGVudDogdW5kZWZpbmVkLFxuICBib3R0b21Db250ZW50OiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZhY2U6IENVQkVfRkFDRVMuZnJvbnQsXG4gIGZyb250Q29udGVudDogdW5kZWZpbmVkLFxuICBsZWZ0Q29udGVudDogdW5kZWZpbmVkLFxuICByaWdodENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgc2l6ZTogMTUwLFxuICB0b3BDb250ZW50OiB1bmRlZmluZWQsXG4gIHdpdGhTd2lwZTogZmFsc2UsXG59O1xuXG5DdWJlLnByb3BUeXBlcyA9IHtcbiAgYmFja0NvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBib3R0b21Db250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGZhY2U6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKENVQkVfRkFDRVMpKSxcbiAgZnJvbnRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgbGVmdENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICByaWdodENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3BDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgd2l0aFN3aXBlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCJpbXBvcnQgQ3ViZSBmcm9tICcuL0N1YmUnO1xuaW1wb3J0ICcuL2N1YmUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDdWJlIGZyb20gJy4uL0N1YmUnO1xuaW1wb3J0IHsgQ1VCRV9GQUNFUyB9IGZyb20gJy4uL0N1YmUvQ3ViZSc7XG5cbmNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICByZXR1cm4gTWF0aC5mbG9vcigoKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjcpIC8gMTApO1xufTtcblxuY29uc3QgY29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtYmFja2dyb3VuZFwiIC8+O1xuY29uc3Qgc2l6ZSA9IGdldFNpemUoKTtcbmNvbnN0IHVuYW5pbWF0ZWREaXYgPSA8ZGl2IHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUsIGNvbG9yOiAnYmxhY2snIH19IC8+O1xuXG5jb25zdCBjdWJlT3B0aW9ucyA9IHtcbiAgYm90dG9tQ29udGVudDogY29udGVudCxcbiAgbGVmdENvbnRlbnQ6IGNvbnRlbnQsXG4gIHJpZ2h0Q29udGVudDogY29udGVudCxcbiAgdG9wQ29udGVudDogY29udGVudCxcbn07XG5cbmNvbnN0IEhpID0gKHsgb25IaWRlIH0pID0+IHtcbiAgY29uc3QgWyBhbmltYXRpb24sIHNldEFuaW1hdGlvbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFuaW1hdGlvbihmYWxzZSksIDIwMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SGlkZGVuKHRydWUpLCAyNTAwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZGRlbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb25IaWRlKSB7XG4gICAgICBvbkhpZGUoKTtcbiAgICB9XG4gIH0sIFsgaGlkZGVuIF0pO1xuXG4gIGNvbnN0IHNob3cgPSBhbmltYXRpb24gJiYgIWhpZGRlbjtcblxuICBjb25zdCBnZXRSYW5kb21DdWJlID0gKCkgPT4ge1xuICAgIGxldCBmYWNlID0gQ1VCRV9GQUNFUy5mcm9udDtcblxuICAgIGlmIChzaG93KSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcblxuICAgICAgZmFjZSA9IFsgQ1VCRV9GQUNFUy5ib3R0b20sIENVQkVfRkFDRVMubGVmdCwgQ1VCRV9GQUNFUy5yaWdodCwgQ1VCRV9GQUNFUy50b3AgXVtudW1iZXJdO1xuICAgIH1cblxuICAgIHJldHVybiA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtmYWNlfSB7Li4uY3ViZU9wdGlvbnN9IC8+O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BoaS1jb250YWluZXIke2hpZGRlbiA/ICcgaGlkZGVuJyA6ICcnfWB9PlxuICAgICAgPGgxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgTXkgQzxzcGFuPnU8L3NwYW4+VjxzcGFuPmU8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICBieSA8c3BhbiBjbGFzc05hbWU9XCJzZWNvbmRhcnlcIj5KYXZpZXIgR2FyY8OtYTwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhpLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25IaWRlOiB1bmRlZmluZWQsXG59O1xuXG5IaS5wcm9wVHlwZXMgPSB7XG4gIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaTtcbiIsImltcG9ydCBIaSBmcm9tICcuL0hpJztcbmltcG9ydCAnLi9oaS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSGk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHNoYWRvd1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXRpdGxlXCI+XG4gICAgICAgIE15IEM8c3Bhbj51PC9zcGFuPlY8c3Bhbj5lPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdWJ0aXRsZVwiPlxuICAgICAgICBieSA8c3Bhbj5KYXZpIEdhcmPDrWEgRmFqYXJkbzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuaW1wb3J0ICcuL25hdmJhci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEljb24gPSAoeyBpY29uLCAuLi5yZXN0IH0pID0+IDxpIHsuLi5yZXN0fSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9e2ljb259IC8+O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCAnLi9pY29uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgaWNvbiwgdGV4dCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxidXR0b24gY2xhc3NOYW1lPXtgY3VzdG9tLWJ0biR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gdHlwZT1cImJ1dHRvblwiIHsuLi5yZXN0fT5cbiAgICB7aWNvbiAmJiA8SWNvbiBpY29uPXtpY29ufSAvPn1cbiAgICB7dGV4dCAmJiA8c3Bhbj57dGV4dH08L3NwYW4+fVxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG4pO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICB0ZXh0OiB1bmRlZmluZWQsXG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcblxuY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpc2FibGVkLCBvbkZ1bGxzY3JlZW4sIG9uRnVsbHNjcmVlbk91dCwgdGl0bGUgfSkgPT4ge1xuICBjb25zdCBbIGZhZGVvdXQsIHNldEZhZGVvdXQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBmdWxsc2NyZWVuLCBzZXRGdWxsc2NyZWVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgdGFwcGVkLCBzZXRUYXBwZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmYWRlb3V0ICYmIGZ1bGxzY3JlZW4pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RnVsbHNjcmVlbihmYWxzZSksIDQwMCk7XG4gICAgfVxuICB9LCBbIGZhZGVvdXQgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWZ1bGxzY3JlZW4gJiYgZmFkZW91dCkge1xuICAgICAgc2V0RmFkZW91dChmYWxzZSk7XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uRnVsbHNjcmVlbk91dCkge1xuICAgICAgICBvbkZ1bGxzY3JlZW5PdXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZ1bGxzY3JlZW4gJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uRnVsbHNjcmVlbikge1xuICAgICAgb25GdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9LCBbIGZ1bGxzY3JlZW4gXSk7XG4gIGNvbnN0IGNsZWFyVGFwcGVkID0gKCkgPT4gc2V0VGFwcGVkKGZhbHNlKTtcblxuICBjb25zdCBpc0RvdWJsZVRhcCA9ICgpID0+IHtcbiAgICBpZiAodGFwcGVkKSB7XG4gICAgICBzZXRGdWxsc2NyZWVuKHRydWUpO1xuICAgICAgY2xlYXJUaW1lb3V0KGNsZWFyVGFwcGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGFwcGVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dChjbGVhclRhcHBlZCwgMzAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZ1bGxzY3JlZW4gPyAoXG4gICAgY3JlYXRlUG9ydGFsKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjdWJlLXNlY3Rpb24gY3ViZS1zZWN0aW9uLWZ1bGwgJHtmYWRlb3V0ID8gJ2ZhZGVvdXQnIDogJ2ZhZGVpbid9JHtcbiAgICAgICAgICBjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ1xuICAgICAgICB9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3ViZS1zZWN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aXRsZSAmJiA8aDI+e3RpdGxlfTwvaDI+fVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlLWJ0blwiXG4gICAgICAgICAgICBpY29uPVwiZmFzIGZhLXRpbWVzXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZhZGVvdXQodHJ1ZSl9XG4gICAgICAgICAgICBvblRvdWNoRW5kPXsoKSA9PiBzZXRGYWRlb3V0KHRydWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PixcbiAgICAgIGRvY3VtZW50LmJvZHksXG4gICAgKVxuICApIDogKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGN1YmUtc2VjdGlvbiBmYWRlaW4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9XG4gICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiAhZGlzYWJsZWQgJiYgc2V0RnVsbHNjcmVlbih0cnVlKX1cbiAgICAgIG9uVG91Y2hFbmQ9e2lzRG91YmxlVGFwfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aXRsZSAmJiA8aDI+e3RpdGxlfTwvaDI+fVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT1cInNlZS1tb3JlLWJ0blwiIGljb249XCJmYXMgZmEtcGx1c1wiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGxzY3JlZW4odHJ1ZSl9IC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2VjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uRnVsbHNjcmVlbjogdW5kZWZpbmVkLFxuICBvbkZ1bGxzY3JlZW5PdXQ6IHVuZGVmaW5lZCxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbn07XG5cblNlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkZ1bGxzY3JlZW46IFByb3BUeXBlcy5mdW5jLFxuICBvbkZ1bGxzY3JlZW5PdXQ6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0ICcuL3NlY3Rpb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgZXhwZXJpZW5jZSBmcm9tICcuL2VzL2V4cGVyaWVuY2UuanNvbic7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuL2VzL3Byb2ZpbGUuanNvbic7XG5cbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcbiAgZXhwZXJpZW5jZSxcbiAgcHJvZmlsZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0aW9ucztcbiIsImltcG9ydCBleHBlcmllbmNlIGZyb20gJy4vZW4vZXhwZXJpZW5jZS5qc29uJztcbmltcG9ydCBwcm9maWxlIGZyb20gJy4vZW4vcHJvZmlsZS5qc29uJztcblxuY29uc3QgdHJhbnNsYXRpb25zID0ge1xuICBleHBlcmllbmNlLFxuICBwcm9maWxlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRpb25zO1xuIiwiaW1wb3J0IGVzIGZyb20gJy4vZXMnO1xuaW1wb3J0IGVuIGZyb20gJy4vZW4nO1xuXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7IGVzLCBlbiB9O1xuXG5leHBvcnQgY29uc3QgTEFOR19JRFMgPSB7XG4gIGVuZ2xpc2g6ICdlbicsXG4gIHNwYW5pc2g6ICdlcycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlID0gKGxhbmcpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgbGFuZyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxlID0gKCkgPT4ge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5sYW5ndWFnZSkge1xuICAgIHJldHVybiBMQU5HX0lEUy5zcGFuaXNoO1xuICB9XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UubGFuZ3VhZ2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNTcGFuaXNoID0gKCkgPT4gTEFOR19JRFMuc3BhbmlzaCA9PT0gZ2V0TG9jYWxlKCk7XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBzdHJpbmcgJ2luZGV4JyBmb3IgdGhlIEphdmFTY3JpcHQgT2JqZWN0XG4gKi9cbmNvbnN0IHJlc29sdmVJbmRleCA9IChzdHIpID0+IHtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcWyhcXHcrKVxcXS9nLCAnLiQxJyk7IC8vIGNvbnZlcnQgaW5kZXhlcyB0byBwcm9wZXJ0aWVzXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9eXFwuLywgJycpOyAvLyBzdHJpcCBhIGxlYWRpbmcgZG90XG4gIGNvbnN0IGFycmF5ID0gc3RyLnNwbGl0KCcuJyk7XG5cbiAgbGV0IHRyYW5zbGF0aW9uc0xhbmcgPSB0cmFuc2xhdGlvbnNbZ2V0TG9jYWxlKCldO1xuXG4gIGZvciAobGV0IGkgPSAwLCB7IGxlbmd0aCB9ID0gYXJyYXk7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGVsZW0gPSBhcnJheVtpXTtcbiAgICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiB0cmFuc2xhdGlvbnNMYW5nICYmIGVsZW0gaW4gdHJhbnNsYXRpb25zTGFuZykge1xuICAgICAgdHJhbnNsYXRpb25zTGFuZyA9IHRyYW5zbGF0aW9uc0xhbmdbZWxlbV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhbnNsYXRpb25zTGFuZztcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2xhdGUgPSAoa2V5KSA9PiByZXNvbHZlSW5kZXgoa2V5KTtcblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcbiAgeyBuYW1lOiB0cmFuc2xhdGUoJ2xhbmd1YWdlLmVzJyksIHZhbHVlOiAnZXMnIH0sXG4gIHsgbmFtZTogdHJhbnNsYXRlKCdsYW5ndWFnZS5lbicpLCB2YWx1ZTogJ2VuJyB9LFxuXTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQkFSX1RZUEVTID0ge1xuICBwcmltYXJ5RGFya2VyOiAncHJpbWFyeS1kYXJrZXInLFxuICBwcmltYXJ5RGFyazogJ3ByaW1hcnktZGFyaycsXG4gIHByaW1hcnk6ICdwcmltYXJ5JyxcbiAgc2Vjb25kYXJ5RGFya2VyOiAnc2Vjb25kYXJ5LWRhcmtlcicsXG4gIHNlY29uZGFyeURhcms6ICdzZWNvbmRhcnktZGFyaycsXG4gIHNlY29uZGFyeTogJ3NlY29uZGFyeScsXG4gIGFjY2VudERhcmtlcjogJ2FjY2VudC1kYXJrZXInLFxuICBhY2NlbnREYXJrOiAnYWNjZW50LWRhcmsnLFxuICBhY2NlbnQ6ICdhY2NlbnQnLFxufTtcblxuY29uc3QgZ2V0VG90YWwgPSAodG90YWwsIGFtb3VudCkgPT4gKGFtb3VudCAqIDEwMCkgLyB0b3RhbDtcbmNvbnN0IGdldENvbG9yID0gKHRvdGFsKSA9PiB7XG4gIGlmICgxMDAgPT09IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5wcmltYXJ5RGFya2VyO1xuICB9XG4gIGlmICg5MCA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMucHJpbWFyeURhcms7XG4gIH1cbiAgaWYgKDc1IDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5wcmltYXJ5O1xuICB9XG4gIGlmICg2MCA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMuc2Vjb25kYXJ5RGFya2VyO1xuICB9XG4gIGlmICg1NSA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMuc2Vjb25kYXJ5RGFyaztcbiAgfVxuICBpZiAoNDAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnNlY29uZGFyeTtcbiAgfVxuICBpZiAoMjUgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLmFjY2VudERhcmtlcjtcbiAgfVxuICBpZiAoMTAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLmFjY2VudERhcms7XG4gIH1cbiAgcmV0dXJuIEJBUl9UWVBFUy5hY2NlbnQ7XG59O1xuXG5jb25zdCBCYXIgPSAoeyBhbW91bnQsIGNsYXNzTmFtZSwgdGV4dCwgdG90YWxBbW91bnQsIHZlcnRpY2FsLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgWyBjb2xvciwgc2V0Q29sb3IgXSA9IHVzZVN0YXRlKEJBUl9UWVBFUy5wcmltYXJ5KTtcbiAgY29uc3QgWyBtb3VudGVkLCBzZXRNb3VudGVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgdG90YWwsIHNldFRvdGFsIF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb3VudGVkKSB7XG4gICAgICBjb25zdCBuZXd0b3RhbCA9IGdldFRvdGFsKHRvdGFsQW1vdW50LCBhbW91bnQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRUb3RhbChuZXd0b3RhbCksIDUwMCk7XG4gICAgICBzZXRDb2xvcihnZXRDb2xvcihuZXd0b3RhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNb3VudGVkKHRydWUpO1xuICAgIH1cbiAgfSwgWyBtb3VudGVkIF0pO1xuXG4gIHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAobW91bnRlZCkge1xuICAgICAgY29uc3QgbmV3dG90YWwgPSBnZXRUb3RhbCh0b3RhbEFtb3VudCwgYW1vdW50KTtcbiAgICAgIHNldFRvdGFsKG5ld3RvdGFsKTtcbiAgICAgIHNldENvbG9yKGdldENvbG9yKG5ld3RvdGFsKSk7XG4gICAgfVxuICB9LCBbIGFtb3VudCwgdG90YWxBbW91bnQgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIGNsYXNzTmFtZT17YGJhci10b3RhbCBmYWRlaW4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfSAke3ZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmFyICR7Y29sb3J9YH0gc3R5bGU9e3ZlcnRpY2FsID8geyBoZWlnaHQ6IGAke3RvdGFsfWAgfSA6IHsgd2lkdGg6IGAke3RvdGFsfSVgIH19PlxuICAgICAgICB7bW91bnRlZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFkZWluXCI+XG4gICAgICAgICAgICB7dGV4dH0ge3RvdGFsfSVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFtb3VudDogMCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIHRleHQ6IHVuZGVmaW5lZCxcbiAgdG90YWxBbW91bnQ6IDEwMCxcbiAgdmVydGljYWw6IGZhbHNlLFxufTtcblxuQmFyLnByb3BUeXBlcyA9IHtcbiAgYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvdGFsQW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXI7XG4iLCJpbXBvcnQgQmFyIGZyb20gJy4vQmFyJztcbmltcG9ydCAnLi9iYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9uJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RyYW5zbGF0b3InO1xuaW1wb3J0IEJhciBmcm9tICcuLi8uLi9CYXInO1xuXG5jb25zdCBQcm9maWxlID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxTZWN0aW9uIHsuLi5yZXN0fSB0aXRsZT17dHJhbnNsYXRlKCdwcm9maWxlLnRpdGxlJyl9IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxuICAgIDxwPnt0cmFuc2xhdGUoJ3Byb2ZpbGUuaGVhZGVyJyl9PC9wPlxuICAgIDxCYXIgdGV4dD1cIlJlYWN0XCIgYW1vdW50PXs4MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJSZWFjdCBOYXRpdmVcIiBhbW91bnQ9ezUwfSAvPlxuICAgIDxCYXIgdGV4dD1cIkhUTUxcIiBhbW91bnQ9ezc1fSAvPlxuICAgIDxCYXIgdGV4dD1cIkNTU1wiIGFtb3VudD17ODV9IC8+XG4gICAgPEJhciB0ZXh0PVwiR3JhcGhRTFwiIGFtb3VudD17NTV9IC8+XG4gICAgPEJhciB0ZXh0PVwiTm9kZVwiIGFtb3VudD17NjV9IC8+XG4gICAgPEJhciB0ZXh0PVwiTW9uZ29cIiBhbW91bnQ9ezcwfSAvPlxuICAgIDxCYXIgdGV4dD1cIkFuZ3VsYXJcIiBhbW91bnQ9ezQwfSAvPlxuICAgIDxCYXIgdGV4dD1cIkphdmFcIiBhbW91bnQ9ezYwfSAvPlxuICAgIDxCYXIgdGV4dD1cIlNwcmluZ2Jvb3RcIiBhbW91bnQ9ezIwfSAvPlxuICAgIDxCYXIgdGV4dD1cIlZ1ZVwiIGFtb3VudD17MjB9IC8+XG4gICAgPHA+e3RyYW5zbGF0ZSgncHJvZmlsZS50ZXh0Jyl9PC9wPlxuICAgIDxwPnt0cmFuc2xhdGUoJ3Byb2ZpbGUudGV4dDInKX08L3A+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnO1xuaW1wb3J0ICcuL3Byb2ZpbGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ29tcGFueSA9ICh7IGVuZCwgbmFtZSwgcGxhY2UsIHJvbGUsIHN0YXJ0LCB0ZWNobm9sb2dpZXMgfSkgPT4gKDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueS1leHBlcmllbmNlXCI+XG4gIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktbmFtZVwiPntuYW1lfTwvcD5cbiAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS1kdXJhdGlvblwiPntzdGFydH0gLSB7ZW5kfTwvcD5cbiAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS1yb2xlXCI+e3JvbGV9PC9wPlxuICA8cCBjbGFzc05hbWU9XCJjb21wYW55LXBsYWNlXCI+e3BsYWNlfTwvcD5cbiAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS10ZWNoXCI+e3RlY2hub2xvZ2llc308L3A+XG48L2Rpdj4pO1xuXG5Db21wYW55LnByb3BUeXBlcyA9IHtcbiAgZW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGxhY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdGFydDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZWNobm9sb2dpZXM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy90cmFuc2xhdG9yJztcbmltcG9ydCBDb21wYW55IGZyb20gJy4vQ29tcGFueSc7XG5cbmNvbnN0IGNvbXBhbmllcyA9IFtcbiAge1xuICAgIG5hbWU6ICdXb3p6bycsXG4gICAgcm9sZTogdHJhbnNsYXRlKCdleHBlcmllbmNlLndvenpvLnJvbGUnKSxcbiAgICBwbGFjZTogJ1BhbG1hIGRlIE1hbGxvcmNhJyxcbiAgICBzdGFydDogJzA5LzIwMTgnLFxuICAgIGVuZDogdHJhbnNsYXRlKCdleHBlcmllbmNlLnByZXNlbnQnKSxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS53b3p6by50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQbGV4dXMgVGVjaG5vbG9naWVzJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UucGxleHVzLnJvbGUnKSxcbiAgICBwbGFjZTogJ1BhbG1hIGRlIE1hbGxvcmNhJyxcbiAgICBzdGFydDogJzA4LzIwMTgnLFxuICAgIGVuZDogJzA5LzIwMTcnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLnBsZXh1cy50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHTVYnLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5nbXYucm9sZScpLFxuICAgIHBsYWNlOiAnU2V2aWxsYScsXG4gICAgc3RhcnQ6ICcwOS8yMDE1JyxcbiAgICBlbmQ6ICcwOC8yMDE2JyxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5nbXYudGVjaG5vbG9naWVzJyksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT2Vzw61hIE5ldHdvcmtzJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2Uub2VzaWEucm9sZScpLFxuICAgIHBsYWNlOiAnU2V2aWxsYScsXG4gICAgc3RhcnQ6ICcwNi8yMDE1JyxcbiAgICBlbmQ6ICcwOC8yMDE1JyxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5vZXNpYS50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdBdG9zJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UuYXRvcy5yb2xlJyksXG4gICAgcGxhY2U6ICdTZXZpbGxhJyxcbiAgICBzdGFydDogJzA4LzIwMTMnLFxuICAgIGVuZDogJzA2LzIwMTUnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLmF0b3MudGVjaG5vbG9naWVzJyksXG4gIH0sXG5dO1xuXG5jb25zdCBFeHBlcmllbmNlID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxTZWN0aW9uIHsuLi5yZXN0fSB0aXRsZT17dHJhbnNsYXRlKCdleHBlcmllbmNlLnRpdGxlJyl9IGNsYXNzTmFtZT1cImV4cGVyaWVuY2Utc2VjdGlvblwiPlxuICAgIHtjb21wYW5pZXMubWFwKChjb21wYW55KSA9PiA8Q29tcGFueSBrZXk9e2NvbXBhbnkubmFtZX0gey4uLmNvbXBhbnl9IC8+KX1cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTtcbiIsImltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4vRXhwZXJpZW5jZSc7XG5pbXBvcnQgJy4vZXhwZXJpZW5jZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDdWJlIGZyb20gJy4uL0N1YmUnO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL1NlY3Rpb24nO1xuaW1wb3J0IHsgQ1VCRV9GQUNFUyB9IGZyb20gJy4uL0N1YmUvQ3ViZSc7XG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuL0V4cGVyaWVuY2UnO1xuXG5jb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICBjb25zdCB7IGlubmVySGVpZ2h0LCBpbm5lcldpZHRoIH0gPSB3aW5kb3c7XG5cbiAgcmV0dXJuIChpbm5lcldpZHRoID4gaW5uZXJIZWlnaHQgPyBpbm5lckhlaWdodCA6IGlubmVyV2lkdGgpICogMC44O1xufTtcbmNvbnN0IHNpemUgPSBnZXRTaXplKCk7XG5cbmNvbnN0IE1haW5DdWJlID0gKHsgaGlkZGVuSW50cm8gfSkgPT4ge1xuICBjb25zdCBbIGluaXRpYWxUcmFuc2l0aW9uLCBzZXRJbml0aWFsVHJhbnNpdGlvbiBdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFsgaXNGdWxsc2NyZWVuLCBzZXRJc0Z1bGxzY3JlZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoaWRkZW5JbnRybykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJbml0aWFsVHJhbnNpdGlvbihmYWxzZSksIDc1MCk7XG4gICAgfVxuICB9LCBbIGhpZGRlbkludHJvIF0pO1xuXG4gIGNvbnN0IGNvbW1vblByb3BzID0ge1xuICAgIG9uRnVsbHNjcmVlbjogKCkgPT4gc2V0SXNGdWxsc2NyZWVuKHRydWUpLFxuICAgIG9uRnVsbHNjcmVlbk91dDogKCkgPT4gc2V0SXNGdWxsc2NyZWVuKGZhbHNlKSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJtYWluLWN1YmVcIiBjbGFzc05hbWU9e2hpZGRlbkludHJvID8gJycgOiAnaGlkZGVuLWN1YmUnfT5cbiAgICAgIDxDdWJlXG4gICAgICAgIGNsYXNzTmFtZT17aW5pdGlhbFRyYW5zaXRpb24gPyAnaW5pdGlhbC10cmFuc2l0aW9uJyA6ICcnfVxuICAgICAgICBkaXNhYmxlZD17aXNGdWxsc2NyZWVufVxuICAgICAgICBmYWNlPXtpbml0aWFsVHJhbnNpdGlvbiA/IENVQkVfRkFDRVMuYmFjayA6IENVQkVfRkFDRVMuZnJvbnR9XG4gICAgICAgIGxlZnRDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8U2VjdGlvbiB7Li4uY29tbW9uUHJvcHN9IHRpdGxlPVwiRk9STUFDSU9OXCIgLz59XG4gICAgICAgIGZyb250Q29udGVudD17aGlkZGVuSW50cm8gJiYgPFByb2ZpbGUgey4uLmNvbW1vblByb3BzfSAvPn1cbiAgICAgICAgcmlnaHRDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8RXhwZXJpZW5jZSB7Li4uY29tbW9uUHJvcHN9IC8+fVxuICAgICAgICBiYWNrQ29udGVudD17aGlkZGVuSW50cm8gJiYgPFNlY3Rpb24gey4uLmNvbW1vblByb3BzfSB0aXRsZT1cIlNPQ0lBTFwiIC8+fVxuICAgICAgICBib3R0b21Db250ZW50PXtoaWRkZW5JbnRybyAmJiA8U2VjdGlvbiB7Li4uY29tbW9uUHJvcHN9IHRpdGxlPVwiTWFkZSBieSBKYXZpZXIgR2FyY8OtYSBGYWphcmRvXCIgZGlzYWJsZWQgLz59XG4gICAgICAgIHRvcENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxTZWN0aW9uIHsuLi5jb21tb25Qcm9wc30gdGl0bGU9XCJIZWxsbyA6KVwiIGRpc2FibGVkIC8+fVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB3aXRoU3dpcGVcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5NYWluQ3ViZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhpZGRlbkludHJvOiBmYWxzZSxcbn07XG5cbk1haW5DdWJlLnByb3BUeXBlcyA9IHtcbiAgaGlkZGVuSW50cm86IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkN1YmU7XG4iLCJpbXBvcnQgTWFpbkN1YmUgZnJvbSAnLi9NYWluQ3ViZSc7XG5pbXBvcnQgJy4vbWFpbkN1YmUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5DdWJlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpIGZyb20gJy4uL2NvbXBvbmVudHMvSGknO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgTWFpbkN1YmUgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluQ3ViZSc7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFsgaGlkZGVuSW50cm8sIHNldEhpZGRlbkludHJvIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZhZGVpblwiPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxIaSBvbkhpZGU9eygpID0+IHNldEhpZGRlbkludHJvKHRydWUpfSAvPlxuICAgICAgICA8TWFpbkN1YmUgaGlkZGVuSW50cm89e2hpZGRlbkludHJvfSAvPlxuICAgICAgICA8ZGl2IGlkPVwic2VsZWN0ZWQtc2VjdGlvblwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9NYWluJztcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8QnJvd3NlclJvdXRlcj5cbiAgICA8TWFpbiAvPlxuICA8L0Jyb3dzZXJSb3V0ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnQXBwJztcblxuaW1wb3J0ICcuL3N0eWxlcy9hbmltYXRpb25zLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==