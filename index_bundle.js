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
/******/ 	deferredModules.push([149,1]);
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

module.exports = JSON.parse("{\"title\":\"Social\"}");

/***/ }),

/***/ 143:
/***/ (function(module) {

module.exports = JSON.parse("{\"atos\":{\"role\":\"Junior developer\",\"technologies\":\"Java, Primefaces, JavaScript, jQuery, ExtJs, Oracle\"},\"gmv\":{\"role\":\"Senior developer\",\"technologies\":\"AngularJs, JavaScript, Java, Primefaces, PostgreSQL, Oracle, Talend\"},\"plexus\":{\"role\":\"Analyst and fullstack developer\",\"technologies\":\"Java, AngularJs, JavaScript, Node, Springboot, Oracle, Mongo\"},\"oesia\":{\"role\":\"Senior developer\",\"technologies\":\"JavaScript, jQuery, Ajax, Java, Richfaces, MySQL, Oracle\"},\"present\":\"Present\",\"title\":\"Professional experience\",\"wozzo\":{\"role\":\"Analyst and fullstack developer\",\"technologies\":\"React, React Native, Redux, GraphQL, Apollo, Express, Node, Mongo\"}}");

/***/ }),

/***/ 144:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Fullstack professional with more than 6 years of experience.\",\"text\":\"\",\"title\":\"Professional profile\"}");

/***/ }),

/***/ 145:
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Social\"}");

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(150);
module.exports = __webpack_require__(386);


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-container .cube{width:100%;height:100%;position:absolute;transform-style:preserve-3d;transition:ease-in all .5s}.cube-container .cube .cube-face{position:absolute;width:100%;height:100%;margin:0;background-color:#080808;color:#fff}.cube-container .cube .cube-face>*{height:100%;width:100%}.cube-container .cube .cube-front{transform:rotateY(0deg) translateZ(100px)}.cube-container .cube .cube-right{transform:rotateY(90deg) translateZ(100px)}.cube-container .cube .cube-back{transform:rotateY(180deg) translateZ(100px)}.cube-container .cube .cube-left{transform:rotateZ(180deg) rotateY(-90deg) translateZ(100px)}.cube-container .cube .cube-top{transform:rotateX(90deg) translateZ(100px)}.cube-container .cube .cube-bottom{transform:rotateX(-90deg) translateZ(100px)}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hi-container{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#080808;transition:linear all .5s;z-index:1001}.hi-container h1{color:#fff;text-align:center;width:95%;font-size:20px}.hi-container h1 span.primary{color:#b71d2b;font-size:32px}.hi-container h1 span.primary span{font-size:20px;font-weight:300}.hi-container h1 span.secondary{color:#78b6a9;font-size:24px}.hi-container .hi{display:flex;max-width:1200px}.hi-container .hi .letter{display:flex;flex-wrap:wrap}.hi-container .hi .letter>div{display:flex;flex-direction:row;justify-content:center;width:100%;margin:4px 0}.hi-container .hi .letter>div>*{margin:0 4px}.hi-container .hi .letter .background{border-radius:8px;overflow:hidden}.hi-container .hi .letter .white-background{background-color:#fff}.hi-container .hi .letter .primary-background{background-color:#b71d2b}.hi-container .hi .letter .secondary-background{background-color:#78b6a9}.hi-container .hi .letter .accent-background{background-color:#f2d090}.hi-container.hidden{opacity:0;pointer-events:none}.hi-container.hidden *{pointer-events:none}@media screen and (max-width: 768px){.hi-container h1{display:flex;flex-direction:column}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "nav.navbar{position:fixed;top:0;left:0;right:0;z-index:900;display:flex;align-items:center;justify-content:center;background-color:#b71d2b;height:60px;padding:0 16px}nav.navbar .expand-btn{display:none}nav.navbar .navbar-content{max-width:1200px;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between}nav.navbar .navbar-content .navbar-title{font-size:32px;font-weight:bold;color:#fff}nav.navbar .navbar-content .navbar-title span{font-size:20px;font-weight:300}nav.navbar .navbar-content .navbar-subtitle{font-size:16px;font-weight:300;font-style:italic}nav.navbar .navbar-content .navbar-subtitle span{color:#e9bbbf}@media screen and (max-width: 992px){nav.navbar .navbar-content{justify-content:center;flex-direction:column}nav.navbar .navbar-content .navbar-title{font-size:20px}nav.navbar .navbar-content .navbar-title span{font-size:12px}nav.navbar .navbar-content .navbar-subtitle{font-size:12px}nav.navbar .navbar-content .navbar-subtitle span{font-size:14px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-icon{margin:0;height:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-btn{padding:8px 16px;font-size:16px;border-radius:4px;border:0;color:#fff;background-color:#b71d2b;transition:linear all .25s;outline:0;cursor:pointer}.custom-btn>*:not(:first-child){margin-left:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-container .cube .cube-face .cube-section,.cube-section{margin:0;padding:32px;width:calc(100% - 64px);height:calc(100% - 64px);background-color:#080808;color:#fff;cursor:pointer;border-radius:16px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;overflow:hidden}.cube-container .cube .cube-face .cube-section *,.cube-section *{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cube-container .cube .cube-face .cube-section>div,.cube-section>div{width:100%;height:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden}.cube-container .cube .cube-face .cube-section>div h2,.cube-section>div h2{margin:0;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid #b71d2b;width:100%}.cube-container .cube .cube-face .cube-section .see-more-btn,.cube-section .see-more-btn{height:20%;width:100%;align-self:center;border-radius:0}.cube-section-full{background-color:#080808;color:#fff;display:flex;align-items:center;justify-content:flex-start;position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;transition:linear all 1s;border-radius:0;overflow:auto}.cube-section-full>div{max-width:1200px;overflow:visible}.cube-section-full>div .close-btn{position:absolute;right:16px;top:16px;background-color:transparent}@media screen and (max-width: 1200px){.cube-container .cube .cube-face .cube-section,.cube-section{width:calc(100% - 32px);height:calc(100% - 32px);padding:16px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bar-total{background-color:silver;border-radius:4px;overflow:hidden;display:flex}.bar-total .bar{padding:4px 0;transition:linear all .5s;display:flex;align-items:center}.bar-total .bar>span{margin-left:8px;white-space:nowrap}.bar-total .bar.primary-darker{background-color:#900a10}.bar-total .bar.primary-dark{background-color:#a71520}.bar-total .bar.primary{background-color:#b71d2b}.bar-total .bar.secondary-darker{background-color:#488e7e}.bar-total .bar.secondary-dark{background-color:#65a698}.bar-total .bar.secondary{background-color:#78b6a9}.bar-total .bar.accent-darker{background-color:#e8b361}.bar-total .bar.accent-dark{background-color:#eec47d}.bar-total .bar.accent{background-color:#f2d090}.bar-total.vertical{min-height:100px;min-width:32px;max-width:32px;height:100%;align-items:flex-end}.bar-total.vertical .bar>span{writing-mode:tb-rl;transform:rotate(-180deg)}.bar-total.horizontal{min-height:32px;max-height:32px;min-width:100px;width:100%}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".profile-section>div p{margin:8px 0}.profile-section>div .bar-total{margin:8px 0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".experience-section>div .company-experience{width:100%;display:flex;flex-wrap:wrap;padding:8px 0;border-bottom:1px solid #b71d2b}.experience-section>div .company-experience>*{width:100%;margin:0}.experience-section>div .company-experience .company-name{font-size:20px;width:60%}.experience-section>div .company-experience .company-duration{width:40%;text-align:right}.experience-section>div .company-experience .company-role{color:#f2d090;font-style:italic;font-weight:300;font-size:12px;margin-top:8px}.experience-section>div .company-experience .company-place{font-size:12px;margin-bottom:8px}.experience-section>div .company-experience:nth-child(even){border-bottom-color:#65a698}@media screen and (max-width: 992px){.experience-section>div .company-experience .company-name,.experience-section>div .company-experience .company-duration{width:100%}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".social-section>div{display:flex;flex-wrap:wrap}.social-section>div .social-network{width:calc(100% - 34px);display:flex;align-items:center;color:#fff;text-decoration:none;padding:16px;margin-top:16px;border:1px solid #fff;border-radius:4px}.social-section>div .social-network i{font-size:32px;padding-right:32px;padding-left:16px}.social-section>div .social-network p{margin:0}.social-section>div .social-network .network-name{font-size:20px;font-weight:bold;color:#78b6a9}.social-section>div .social-network .network-username{font-style:italic}.social-section>div .social-network .network-link{font-size:12px;text-decoration:underline;color:#f2d090}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#main-cube .cube-container{transform:scale(1);transition:ease-in-out all 1s .25s}#main-cube .cube-container .cube-face{border-radius:16px}#main-cube .initial-transition .cube{transition:ease-in-out all 1s .25s}#main-cube.hidden-cube .cube-container{transform:scale(0) rotateZ(270deg)}#main-cube.hidden-cube .cube-container .cube{transform:rotateY(360deg) !important}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
            var content = __webpack_require__(383);

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

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fadein{-webkit-animation:fadein 0.5s;-moz-animation:fadein 0.5s;-ms-animation:fadein 0.5s;-o-animation:fadein 0.5s;animation:fadein 0.5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.fadeout{-webkit-animation:fadeout 0.5s;-moz-animation:fadeout 0.5s;-ms-animation:fadeout 0.5s;-o-animation:fadeout 0.5s;animation:fadeout 0.5s;opacity:0}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-ms-keyframes fadeout{from{opacity:1}to{opacity:0}}@-o-keyframes fadeout{from{opacity:1}to{opacity:0}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
            var content = __webpack_require__(385);

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

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{font-family:'Poppins', sans-serif;font-size:14px;margin:0;color:#080808;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow,main #main-container #main-cube .cube-container .cube-face{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);box-shadow:0px 0 8px 2px rgba(136,136,136,0.5)}html{background-color:#fafaff}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;overflow:hidden}main #main-container{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 386:
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
var react_router_dom = __webpack_require__(148);

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
      y = -90;
    } else if (face === CUBE_FACES.right) {
      y = 90;
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
var cube = __webpack_require__(358);

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
  }, "Javi Garc\xEDa Fajardo")), /*#__PURE__*/react_default.a.createElement("div", {
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
var hi = __webpack_require__(360);

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
var navbar = __webpack_require__(362);

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
var Icon_icon = __webpack_require__(364);

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
var Button_button = __webpack_require__(366);

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
var section = __webpack_require__(368);

// CONCATENATED MODULE: ./src/components/Section/index.js


/* harmony default export */ var components_Section = (Section_Section);
// EXTERNAL MODULE: ./src/utils/es/experience.json
var experience = __webpack_require__(140);

// EXTERNAL MODULE: ./src/utils/es/profile.json
var profile = __webpack_require__(141);

// EXTERNAL MODULE: ./src/utils/es/social.json
var social = __webpack_require__(142);

// CONCATENATED MODULE: ./src/utils/es.js



const translations = {
  experience: experience,
  profile: profile,
  social: social
};
/* harmony default export */ var es = (translations);
// EXTERNAL MODULE: ./src/utils/en/experience.json
var en_experience = __webpack_require__(143);

// EXTERNAL MODULE: ./src/utils/en/profile.json
var en_profile = __webpack_require__(144);

// EXTERNAL MODULE: ./src/utils/en/social.json
var en_social = __webpack_require__(145);

// CONCATENATED MODULE: ./src/utils/en.js



const en_translations = {
  experience: en_experience,
  profile: en_profile,
  social: en_social
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
var bar = __webpack_require__(370);

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
var Profile_profile = __webpack_require__(372);

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
var Experience_experience = __webpack_require__(374);

// CONCATENATED MODULE: ./src/components/MainCube/Experience/index.js


/* harmony default export */ var MainCube_Experience = (Experience_Experience);
// CONCATENATED MODULE: ./src/components/MainCube/Social/Network.jsx




const Network = ({
  icon,
  link,
  name,
  username
}) => /*#__PURE__*/react_default.a.createElement("a", {
  className: "social-network",
  target: "_blank",
  href: link,
  rel: "noopener noreferrer"
}, /*#__PURE__*/react_default.a.createElement(components_Icon, {
  icon: icon
}), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("p", {
  className: "network-name"
}, name), /*#__PURE__*/react_default.a.createElement("p", {
  className: "network-username"
}, username), /*#__PURE__*/react_default.a.createElement("p", {
  className: "network-link"
}, link)));

Network.propTypes = {
  icon: prop_types_default.a.string.isRequired,
  link: prop_types_default.a.string.isRequired,
  name: prop_types_default.a.string.isRequired,
  username: prop_types_default.a.string.isRequired
};
/* harmony default export */ var Social_Network = (Network);
// CONCATENATED MODULE: ./src/components/MainCube/Social/Social.jsx
function Social_extends() { Social_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Social_extends.apply(this, arguments); }





const networks = [{
  icon: 'fab fa-linkedin',
  link: 'https://linkedin.com/in/javigarciafajardo',
  name: 'LinkedIn',
  username: 'Javier García Fajardo'
}, {
  icon: 'fab fa-github',
  link: 'https://github.com/JaviGF8/',
  name: 'GitHub',
  username: 'JaviGF8'
}];

const Social = (_ref) => {
  let rest = Social_extends({}, _ref);

  return /*#__PURE__*/react_default.a.createElement(components_Section, Social_extends({}, rest, {
    title: translate('social.title'),
    className: "social-section"
  }), networks.map(net => /*#__PURE__*/react_default.a.createElement(Social_Network, Social_extends({
    key: net.name
  }, net))));
};

/* harmony default export */ var Social_Social = (Social);
// EXTERNAL MODULE: ./src/components/MainCube/Social/social.scss
var Social_social = __webpack_require__(376);

// CONCATENATED MODULE: ./src/components/MainCube/Social/index.js


/* harmony default export */ var MainCube_Social = (Social_Social);
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
    backContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(MainCube_Social, commonProps),
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
var mainCube = __webpack_require__(378);

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
var animations = __webpack_require__(382);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(384);

// CONCATENATED MODULE: ./src/index.js





react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9zZWN0aW9uLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL3NlY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3M/MmM4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvUHJvZmlsZS9wcm9maWxlLnNjc3M/YjBhNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL3Byb2ZpbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL2V4cGVyaWVuY2Uuc2Nzcz85MzFhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvZXhwZXJpZW5jZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9zb2NpYWwuc2Nzcz8wMjEyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9zb2NpYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9tYWluQ3ViZS5zY3NzPzIxYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvbWFpbkN1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcz8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL0N1YmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvSGkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2xhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9CYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvRXhwZXJpZW5jZS9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL0V4cGVyaWVuY2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL05ldHdvcmsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9Tb2NpYWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9NYWluQ3ViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDVUJFX0ZBQ0VTIiwiZnJvbnQiLCJiYWNrIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaXNBcnJvd0xlZnQiLCJjb2RlIiwia2V5Iiwia2V5Q29kZSIsImlzQXJyb3dVcCIsImlzQXJyb3dSaWdodCIsImlzQXJyb3dEb3duIiwiQ3ViZSIsImJhY2tDb250ZW50IiwiYm90dG9tQ29udGVudCIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiZmFjZSIsImZyb250Q29udGVudCIsImxlZnRDb250ZW50IiwicmlnaHRDb250ZW50Iiwic2l6ZSIsInRvcENvbnRlbnQiLCJ3aXRoU3dpcGUiLCJ1c2VTdGF0ZSIsImFuZ1giLCJzZXRBbmdYIiwiYW5nWSIsInNldEFuZ1kiLCJtb3ZpbmciLCJzZXRNb3ZpbmciLCJzdGFydFgiLCJzZXRTdGFydFgiLCJzdGFydFkiLCJzZXRTdGFydFkiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJ4IiwieSIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3ZlbWVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WSIsImRpZmZYIiwiZGlmZlkiLCJNYXRoIiwiYWJzIiwiaGFuZGxlTW92ZW1lbnRTdGFydCIsInRvdWNoZXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiLCJudW1iZXIiLCJnZXRTaXplIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZmxvb3IiLCJ3aGl0ZUNvbnRlbnQiLCJwcmltYXJ5Q29udGVudCIsInNlY29uZGFyeUNvbnRlbnQiLCJhY2NlbnRDb250ZW50IiwidW5hbmltYXRlZERpdiIsImNvbG9yIiwiY3ViZU9wdGlvbnMiLCJIaSIsIm9uSGlkZSIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsInNob3ciLCJnZXRSYW5kb21DdWJlIiwicmFuZG9tIiwiZnVuYyIsIk5hdmJhciIsIkljb24iLCJpY29uIiwicmVzdCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwidGV4dCIsIlNlY3Rpb24iLCJvbkZ1bGxzY3JlZW4iLCJvbkZ1bGxzY3JlZW5PdXQiLCJ0aXRsZSIsImZhZGVvdXQiLCJzZXRGYWRlb3V0IiwiZnVsbHNjcmVlbiIsInNldEZ1bGxzY3JlZW4iLCJ0YXBwZWQiLCJzZXRUYXBwZWQiLCJjbGVhclRhcHBlZCIsImlzRG91YmxlVGFwIiwiY2xlYXJUaW1lb3V0IiwiY3JlYXRlUG9ydGFsIiwiYm9keSIsInRyYW5zbGF0aW9ucyIsImV4cGVyaWVuY2UiLCJwcm9maWxlIiwic29jaWFsIiwiZXMiLCJlbiIsIkxBTkdfSURTIiwiZW5nbGlzaCIsInNwYW5pc2giLCJzZXRMb2NhbGUiLCJsYW5nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldExvY2FsZSIsImxhbmd1YWdlIiwiaXNTcGFuaXNoIiwicmVzb2x2ZUluZGV4Iiwic3RyIiwicmVwbGFjZSIsImFycmF5Iiwic3BsaXQiLCJ0cmFuc2xhdGlvbnNMYW5nIiwiaSIsImxlbmd0aCIsImVsZW0iLCJ0cmFuc2xhdGUiLCJMQU5HVUFHRVMiLCJuYW1lIiwidmFsdWUiLCJCQVJfVFlQRVMiLCJwcmltYXJ5RGFya2VyIiwicHJpbWFyeURhcmsiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5RGFya2VyIiwic2Vjb25kYXJ5RGFyayIsInNlY29uZGFyeSIsImFjY2VudERhcmtlciIsImFjY2VudERhcmsiLCJhY2NlbnQiLCJnZXRUb3RhbCIsInRvdGFsIiwiYW1vdW50IiwiZ2V0Q29sb3IiLCJCYXIiLCJ0b3RhbEFtb3VudCIsInZlcnRpY2FsIiwic2V0Q29sb3IiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInNldFRvdGFsIiwibmV3dG90YWwiLCJQcm9maWxlIiwiQ29tcGFueSIsImVuZCIsInBsYWNlIiwicm9sZSIsInN0YXJ0IiwidGVjaG5vbG9naWVzIiwiaXNSZXF1aXJlZCIsImNvbXBhbmllcyIsIkV4cGVyaWVuY2UiLCJtYXAiLCJjb21wYW55IiwiTmV0d29yayIsImxpbmsiLCJ1c2VybmFtZSIsIm5ldHdvcmtzIiwiU29jaWFsIiwibmV0IiwiTWFpbkN1YmUiLCJoaWRkZW5JbnRybyIsImluaXRpYWxUcmFuc2l0aW9uIiwic2V0SW5pdGlhbFRyYW5zaXRpb24iLCJpc0Z1bGxzY3JlZW4iLCJzZXRJc0Z1bGxzY3JlZW4iLCJjb21tb25Qcm9wcyIsIk1haW4iLCJzZXRIaWRkZW5JbnRybyIsIkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTyxJQUFJLEdBQUcsTUFBTTtBQUFBLG9CQUN1QnpLLHlCQUFRLENBQUMsS0FBRCxDQUQvQjtBQUFBO0FBQUEsUUFDVG1LLFdBRFM7QUFBQSxRQUNJTyxjQURKOztBQUdqQixzQkFDRSx5REFDRTtBQUFLLE1BQUUsRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUM7QUFBbkMsa0JBQ0UsOEJBQUMsaUJBQUQsT0FERixlQUVFLDhCQUFDLGFBQUQ7QUFBSSxVQUFNLEVBQUUsTUFBTUEsY0FBYyxDQUFDLElBQUQ7QUFBaEMsSUFGRixlQUdFLDhCQUFDLG1CQUFEO0FBQVUsZUFBVyxFQUFFUDtBQUF2QixJQUhGLGVBSUU7QUFBSyxNQUFFLEVBQUM7QUFBUixJQUpGLENBREYsQ0FERjtBQVVELENBYkQ7O0FBZWVNLG1EQUFmLEU7O0FDcEJBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNRSxHQUFHLEdBQUcsbUJBQ1YsOEJBQUMseUNBQUQscUJBQ0UsOEJBQUMsVUFBRCxPQURGLENBREY7O0FBTWVBLCtDQUFmLEU7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBQyxtQkFBUSxDQUFDQyxNQUFULGVBQWdCLDhCQUFDLE9BQUQsT0FBaEIsRUFBeUJqSixRQUFRLENBQUNrSixjQUFULENBQXdCLE1BQXhCLENBQXpCLEUiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzE0OSwxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3ViZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3ViZS1jb250YWluZXIgLmN1YmV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNpdGlvbjplYXNlLWluIGFsbCAuNXN9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZT4qe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1yaWdodHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWJhY2t7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtbGVmdHt0cmFuc2Zvcm06cm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtdG9we3RyYW5zZm9ybTpyb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYm90dG9te3RyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCl9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGkuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpLWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO3otaW5kZXg6MTAwMX0uaGktY29udGFpbmVyIGgxe2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTUlO2ZvbnQtc2l6ZToyMHB4fS5oaS1jb250YWluZXIgaDEgc3Bhbi5wcmltYXJ5e2NvbG9yOiNiNzFkMmI7Zm9udC1zaXplOjMycHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnByaW1hcnkgc3Bhbntmb250LXNpemU6MjBweDtmb250LXdlaWdodDozMDB9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnNlY29uZGFyeXtjb2xvcjojNzhiNmE5O2ZvbnQtc2l6ZToyNHB4fS5oaS1jb250YWluZXIgLmhpe2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTIwMHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21hcmdpbjo0cHggMH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyPmRpdj4qe21hcmdpbjowIDRweH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5iYWNrZ3JvdW5ke2JvcmRlci1yYWRpdXM6OHB4O292ZXJmbG93OmhpZGRlbn0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC53aGl0ZS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmZn0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5wcmltYXJ5LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJifS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXIgLnNlY29uZGFyeS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6Izc4YjZhOX0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5hY2NlbnQtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmQwOTB9LmhpLWNvbnRhaW5lci5oaWRkZW57b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmhpLWNvbnRhaW5lci5oaWRkZW4gKntwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXsuaGktY29udGFpbmVyIGgxe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJuYXYubmF2YmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6OTAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7aGVpZ2h0OjYwcHg7cGFkZGluZzowIDE2cHh9bmF2Lm5hdmJhciAuZXhwYW5kLWJ0bntkaXNwbGF5Om5vbmV9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7bWF4LXdpZHRoOjEyMDBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MzJweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiNmZmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZSBzcGFue2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjMwMH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxle2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjMwMDtmb250LXN0eWxlOml0YWxpY31uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxlIHNwYW57Y29sb3I6I2U5YmJiZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MjBweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxlIHNwYW57Zm9udC1zaXplOjEycHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZXtmb250LXNpemU6MTJweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxlIHNwYW57Zm9udC1zaXplOjE0cHh9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1pY29ue21hcmdpbjowO2hlaWdodDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20tYnRue3BhZGRpbmc6OHB4IDE2cHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXM7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfS5jdXN0b20tYnRuPio6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlY3Rpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiwuY3ViZS1zZWN0aW9ue21hcmdpbjowO3BhZGRpbmc6MzJweDt3aWR0aDpjYWxjKDEwMCUgLSA2NHB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gNjRweCk7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoxNnB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtvdmVyZmxvdzpoaWRkZW59LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiAqLC5jdWJlLXNlY3Rpb24gKnstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbj5kaXYsLmN1YmUtc2VjdGlvbj5kaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7b3ZlcmZsb3c6aGlkZGVufS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24+ZGl2IGgyLC5jdWJlLXNlY3Rpb24+ZGl2IGgye21hcmdpbjowO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtwYWRkaW5nLWJvdHRvbTo4cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2I3MWQyYjt3aWR0aDoxMDAlfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24gLnNlZS1tb3JlLWJ0biwuY3ViZS1zZWN0aW9uIC5zZWUtbW9yZS1idG57aGVpZ2h0OjIwJTt3aWR0aDoxMDAlO2FsaWduLXNlbGY6Y2VudGVyO2JvcmRlci1yYWRpdXM6MH0uY3ViZS1zZWN0aW9uLWZ1bGx7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmY7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4Ojk5OTt0cmFuc2l0aW9uOmxpbmVhciBhbGwgMXM7Ym9yZGVyLXJhZGl1czowO292ZXJmbG93OmF1dG99LmN1YmUtc2VjdGlvbi1mdWxsPmRpdnttYXgtd2lkdGg6MTIwMHB4O292ZXJmbG93OnZpc2libGV9LmN1YmUtc2VjdGlvbi1mdWxsPmRpdiAuY2xvc2UtYnRue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjE2cHg7dG9wOjE2cHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpey5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24sLmN1YmUtc2VjdGlvbnt3aWR0aDpjYWxjKDEwMCUgLSAzMnB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gMzJweCk7cGFkZGluZzoxNnB4fX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJhci10b3RhbHtiYWNrZ3JvdW5kLWNvbG9yOnNpbHZlcjtib3JkZXItcmFkaXVzOjRweDtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4fS5iYXItdG90YWwgLmJhcntwYWRkaW5nOjRweCAwO3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXM7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uYmFyLXRvdGFsIC5iYXI+c3BhbnttYXJnaW4tbGVmdDo4cHg7d2hpdGUtc3BhY2U6bm93cmFwfS5iYXItdG90YWwgLmJhci5wcmltYXJ5LWRhcmtlcntiYWNrZ3JvdW5kLWNvbG9yOiM5MDBhMTB9LmJhci10b3RhbCAuYmFyLnByaW1hcnktZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiNhNzE1MjB9LmJhci10b3RhbCAuYmFyLnByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJifS5iYXItdG90YWwgLmJhci5zZWNvbmRhcnktZGFya2Vye2JhY2tncm91bmQtY29sb3I6IzQ4OGU3ZX0uYmFyLXRvdGFsIC5iYXIuc2Vjb25kYXJ5LWRhcmt7YmFja2dyb3VuZC1jb2xvcjojNjVhNjk4fS5iYXItdG90YWwgLmJhci5zZWNvbmRhcnl7YmFja2dyb3VuZC1jb2xvcjojNzhiNmE5fS5iYXItdG90YWwgLmJhci5hY2NlbnQtZGFya2Vye2JhY2tncm91bmQtY29sb3I6I2U4YjM2MX0uYmFyLXRvdGFsIC5iYXIuYWNjZW50LWRhcmt7YmFja2dyb3VuZC1jb2xvcjojZWVjNDdkfS5iYXItdG90YWwgLmJhci5hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZjJkMDkwfS5iYXItdG90YWwudmVydGljYWx7bWluLWhlaWdodDoxMDBweDttaW4td2lkdGg6MzJweDttYXgtd2lkdGg6MzJweDtoZWlnaHQ6MTAwJTthbGlnbi1pdGVtczpmbGV4LWVuZH0uYmFyLXRvdGFsLnZlcnRpY2FsIC5iYXI+c3Bhbnt3cml0aW5nLW1vZGU6dGItcmw7dHJhbnNmb3JtOnJvdGF0ZSgtMTgwZGVnKX0uYmFyLXRvdGFsLmhvcml6b250YWx7bWluLWhlaWdodDozMnB4O21heC1oZWlnaHQ6MzJweDttaW4td2lkdGg6MTAwcHg7d2lkdGg6MTAwJX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9maWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9maWxlLXNlY3Rpb24+ZGl2IHB7bWFyZ2luOjhweCAwfS5wcm9maWxlLXNlY3Rpb24+ZGl2IC5iYXItdG90YWx7bWFyZ2luOjhweCAwfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V4cGVyaWVuY2Uuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZXt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtwYWRkaW5nOjhweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNiNzFkMmJ9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZT4qe3dpZHRoOjEwMCU7bWFyZ2luOjB9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1uYW1le2ZvbnQtc2l6ZToyMHB4O3dpZHRoOjYwJX0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LWR1cmF0aW9ue3dpZHRoOjQwJTt0ZXh0LWFsaWduOnJpZ2h0fS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktcm9sZXtjb2xvcjojZjJkMDkwO2ZvbnQtc3R5bGU6aXRhbGljO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTJweDttYXJnaW4tdG9wOjhweH0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LXBsYWNle2ZvbnQtc2l6ZToxMnB4O21hcmdpbi1ib3R0b206OHB4fS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2U6bnRoLWNoaWxkKGV2ZW4pe2JvcmRlci1ib3R0b20tY29sb3I6IzY1YTY5OH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1uYW1lLC5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktZHVyYXRpb257d2lkdGg6MTAwJX19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc29jaWFsLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zb2NpYWwtc2VjdGlvbj5kaXZ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5zb2NpYWwtc2VjdGlvbj5kaXYgLnNvY2lhbC1uZXR3b3Jre3dpZHRoOmNhbGMoMTAwJSAtIDM0cHgpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZTtwYWRkaW5nOjE2cHg7bWFyZ2luLXRvcDoxNnB4O2JvcmRlcjoxcHggc29saWQgI2ZmZjtib3JkZXItcmFkaXVzOjRweH0uc29jaWFsLXNlY3Rpb24+ZGl2IC5zb2NpYWwtbmV0d29yayBpe2ZvbnQtc2l6ZTozMnB4O3BhZGRpbmctcmlnaHQ6MzJweDtwYWRkaW5nLWxlZnQ6MTZweH0uc29jaWFsLXNlY3Rpb24+ZGl2IC5zb2NpYWwtbmV0d29yayBwe21hcmdpbjowfS5zb2NpYWwtc2VjdGlvbj5kaXYgLnNvY2lhbC1uZXR3b3JrIC5uZXR3b3JrLW5hbWV7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojNzhiNmE5fS5zb2NpYWwtc2VjdGlvbj5kaXYgLnNvY2lhbC1uZXR3b3JrIC5uZXR3b3JrLXVzZXJuYW1le2ZvbnQtc3R5bGU6aXRhbGljfS5zb2NpYWwtc2VjdGlvbj5kaXYgLnNvY2lhbC1uZXR3b3JrIC5uZXR3b3JrLWxpbmt7Zm9udC1zaXplOjEycHg7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtjb2xvcjojZjJkMDkwfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5DdWJlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVye3RyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2l0aW9uOmVhc2UtaW4tb3V0IGFsbCAxcyAuMjVzfSNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2V7Ym9yZGVyLXJhZGl1czoxNnB4fSNtYWluLWN1YmUgLmluaXRpYWwtdHJhbnNpdGlvbiAuY3ViZXt0cmFuc2l0aW9uOmVhc2UtaW4tb3V0IGFsbCAxcyAuMjVzfSNtYWluLWN1YmUuaGlkZGVuLWN1YmUgLmN1YmUtY29udGFpbmVye3RyYW5zZm9ybTpzY2FsZSgwKSByb3RhdGVaKDI3MGRlZyl9I21haW4tY3ViZS5oaWRkZW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmV7dHJhbnNmb3JtOnJvdGF0ZVkoMzYwZGVnKSAhaW1wb3J0YW50fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbnMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhZGVpbnstd2Via2l0LWFuaW1hdGlvbjpmYWRlaW4gMC41czstbW96LWFuaW1hdGlvbjpmYWRlaW4gMC41czstbXMtYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1vLWFuaW1hdGlvbjpmYWRlaW4gMC41czthbmltYXRpb246ZmFkZWluIDAuNXN9QGtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW1vei1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtbXMta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtby1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19LmZhZGVvdXR7LXdlYmtpdC1hbmltYXRpb246ZmFkZW91dCAwLjVzOy1tb3otYW5pbWF0aW9uOmZhZGVvdXQgMC41czstbXMtYW5pbWF0aW9uOmZhZGVvdXQgMC41czstby1hbmltYXRpb246ZmFkZW91dCAwLjVzO2FuaW1hdGlvbjpmYWRlb3V0IDAuNXM7b3BhY2l0eTowfUBrZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtbW96LWtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALW1zLWtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC1vLWtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7bWFyZ2luOjA7Y29sb3I6IzA4MDgwODstd2Via2l0LWZvbnQtc21vb3RoaW5nOnN1YnBpeGVsLWFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmF1dG99LnNoYWRvdyxtYWluICNtYWluLWNvbnRhaW5lciAjbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZS1mYWNley13ZWJraXQtYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KTstbW96LWJveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSk7Ym94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KX1odG1se2JhY2tncm91bmQtY29sb3I6I2ZhZmFmZn1tYWlue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVufW1haW4gI21haW4tY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ1VCRV9GQUNFUyA9IHtcbiAgZnJvbnQ6ICdmcm9udCcsXG4gIGJhY2s6ICdiYWNrJyxcbiAgbGVmdDogJ2xlZnQnLFxuICByaWdodDogJ3JpZ2h0JyxcbiAgdG9wOiAndG9wJyxcbiAgYm90dG9tOiAnYm90dG9tJyxcbn07XG5cbmNvbnN0IGlzQXJyb3dMZWZ0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM3ID09PSBrZXlDb2RlIHx8ICdBcnJvd0xlZnQnID09PSBjb2RlIHx8ICdBcnJvd0xlZnQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93VXAgPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gMzggPT09IGtleUNvZGUgfHwgJ0Fycm93VXAnID09PSBjb2RlIHx8ICdBcnJvd1VwJyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd1JpZ2h0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM5ID09PSBrZXlDb2RlIHx8ICdBcnJvd1JpZ2h0JyA9PT0gY29kZSB8fCAnQXJyUmlnaHQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93RG93biA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiA0MCA9PT0ga2V5Q29kZSB8fCAnQXJyb3dEb3duJyA9PT0gY29kZSB8fCAnQXJyb3dEb3duJyA9PT0ga2V5O1xuXG5jb25zdCBDdWJlID0gKHtcbiAgYmFja0NvbnRlbnQsXG4gIGJvdHRvbUNvbnRlbnQsXG4gIGNsYXNzTmFtZSxcbiAgZGlzYWJsZWQsXG4gIGZhY2UsXG4gIGZyb250Q29udGVudCxcbiAgbGVmdENvbnRlbnQsXG4gIHJpZ2h0Q29udGVudCxcbiAgc2l6ZSxcbiAgdG9wQ29udGVudCxcbiAgd2l0aFN3aXBlLFxufSkgPT4ge1xuICBjb25zdCBbIGFuZ1gsIHNldEFuZ1ggXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGFuZ1ksIHNldEFuZ1kgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIG1vdmluZywgc2V0TW92aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgc3RhcnRYLCBzZXRTdGFydFggXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbIHN0YXJ0WSwgc2V0U3RhcnRZIF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd0xlZnQoZXZlbnQpKSB7XG4gICAgICBzZXRBbmdZKGFuZ1kgKyA5MCk7XG4gICAgfSBlbHNlIGlmICghbW92aW5nICYmIGlzQXJyb3dVcChldmVudCkpIHtcbiAgICAgIHNldEFuZ1goYW5nWCAtIDkwKTtcbiAgICB9IGVsc2UgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd1JpZ2h0KGV2ZW50KSkge1xuICAgICAgc2V0QW5nWShhbmdZIC0gOTApO1xuICAgIH0gZWxzZSBpZiAoIW1vdmluZyAmJiBpc0Fycm93RG93bihldmVudCkpIHtcbiAgICAgIHNldEFuZ1goYW5nWCArIDkwKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuXG4gICAgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuZnJvbnQpIHtcbiAgICAgIHkgPSAwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5iYWNrKSB7XG4gICAgICB5ID0gLTE4MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMubGVmdCkge1xuICAgICAgeSA9IC05MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMucmlnaHQpIHtcbiAgICAgIHkgPSA5MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMudG9wKSB7XG4gICAgICB4ID0gLTkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5ib3R0b20pIHtcbiAgICAgIHggPSA5MDtcbiAgICB9XG5cbiAgICBzZXRBbmdYKHgpO1xuICAgIHNldEFuZ1koeSk7XG4gIH0sIFsgZmFjZSBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXJ0WChudWxsKTtcbiAgICBzZXRTdGFydFkobnVsbCk7XG4gICAgc2V0TW92aW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TW92aW5nKGZhbHNlKSwgNTAwKTtcbiAgfSwgWyBhbmdYLCBhbmdZIF0pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWRpc2FibGVkICYmICFtb3ZpbmcgJiYgKHN0YXJ0WCB8fCBzdGFydFkpKSB7XG4gICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQ/LmNoYW5nZWRUb3VjaGVzPy5bMF0/LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WDtcbiAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudD8uY2hhbmdlZFRvdWNoZXM/LlswXT8uY2xpZW50WSB8fCBldmVudC5jbGllbnRZO1xuXG4gICAgICBjb25zdCBkaWZmWCA9IGNsaWVudFggLSBzdGFydFg7XG4gICAgICBjb25zdCBkaWZmWSA9IGNsaWVudFkgLSBzdGFydFk7XG5cbiAgICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZYKSkge1xuICAgICAgICAvLyBob3Jpem9udGFsIHN3aXBlXG4gICAgICAgIHNldEFuZ1koMCA8IGRpZmZYID8gYW5nWSArIDkwIDogYW5nWSAtIDkwKTtcbiAgICAgIH1cbiAgICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZZKSkge1xuICAgICAgICAvLyB2ZXJ0aWNhbCBzd2lwZVxuICAgICAgICBzZXRBbmdYKDAgPCBkaWZmWSA/IGFuZ1ggLSA5MCA6IGFuZ1ggKyA5MCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVtZW50U3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjbGllbnRYID0gZXZlbnQ/LnRvdWNoZXM/LlswXT8uY2xpZW50WCB8fCBldmVudC5jbGllbnRYO1xuICAgIGNvbnN0IGNsaWVudFkgPSBldmVudD8udG91Y2hlcz8uWzBdPy5jbGllbnRZIHx8IGV2ZW50LmNsaWVudFk7XG5cbiAgICBzZXRTdGFydFgoY2xpZW50WCk7XG4gICAgc2V0U3RhcnRZKGNsaWVudFkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuXG4gICAgaWYgKHdpdGhTd2lwZSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdmVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdmVtZW50KTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGN1YmUtY29udGFpbmVyJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgcGVyc3BlY3RpdmU6IHNpemUgKiAzLFxuICAgICAgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImN1YmVcIlxuICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVaKC0ke3NpemUgLyAyfXB4KSByb3RhdGVYKCR7YW5nWH1kZWcpIHJvdGF0ZVkoJHthbmdZfWRlZylgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Nb3VzZVVwPXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uVG91Y2hFbmQ9e3dpdGhTd2lwZSAmJiAhZGlzYWJsZWQgPyBoYW5kbGVNb3ZlbWVudCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1mcm9udFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtmcm9udENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYmFja1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDE4MGRlZykgcm90YXRlWigxODBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtiYWNrQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1yaWdodFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7cmlnaHRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWxlZnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtsZWZ0Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS10b3BcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3RvcENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYm90dG9tXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7Ym90dG9tQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrQ29udGVudDogdW5kZWZpbmVkLFxuICBib3R0b21Db250ZW50OiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZhY2U6IENVQkVfRkFDRVMuZnJvbnQsXG4gIGZyb250Q29udGVudDogdW5kZWZpbmVkLFxuICBsZWZ0Q29udGVudDogdW5kZWZpbmVkLFxuICByaWdodENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgc2l6ZTogMTUwLFxuICB0b3BDb250ZW50OiB1bmRlZmluZWQsXG4gIHdpdGhTd2lwZTogZmFsc2UsXG59O1xuXG5DdWJlLnByb3BUeXBlcyA9IHtcbiAgYmFja0NvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBib3R0b21Db250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGZhY2U6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKENVQkVfRkFDRVMpKSxcbiAgZnJvbnRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgbGVmdENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICByaWdodENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3BDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgd2l0aFN3aXBlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCJpbXBvcnQgQ3ViZSBmcm9tICcuL0N1YmUnO1xuaW1wb3J0ICcuL2N1YmUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDdWJlIGZyb20gJy4uL0N1YmUnO1xuaW1wb3J0IHsgQ1VCRV9GQUNFUyB9IGZyb20gJy4uL0N1YmUvQ3ViZSc7XG5cbmNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICByZXR1cm4gTWF0aC5mbG9vcigoKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjcpIC8gMTApO1xufTtcblxuY29uc3Qgd2hpdGVDb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1iYWNrZ3JvdW5kIGJhY2tncm91bmRcIiAvPjtcbmNvbnN0IHByaW1hcnlDb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJwcmltYXJ5LWJhY2tncm91bmQgYmFja2dyb3VuZFwiIC8+O1xuY29uc3Qgc2Vjb25kYXJ5Q29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWJhY2tncm91bmQgYmFja2dyb3VuZFwiIC8+O1xuY29uc3QgYWNjZW50Q29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwiYWNjZW50LWJhY2tncm91bmQgYmFja2dyb3VuZFwiIC8+O1xuY29uc3Qgc2l6ZSA9IGdldFNpemUoKTtcbmNvbnN0IHVuYW5pbWF0ZWREaXYgPSA8ZGl2IHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUsIGNvbG9yOiAnYmxhY2snIH19IC8+O1xuXG5jb25zdCBjdWJlT3B0aW9ucyA9IHtcbiAgYm90dG9tQ29udGVudDogd2hpdGVDb250ZW50LFxuICBsZWZ0Q29udGVudDogcHJpbWFyeUNvbnRlbnQsXG4gIHJpZ2h0Q29udGVudDogc2Vjb25kYXJ5Q29udGVudCxcbiAgdG9wQ29udGVudDogYWNjZW50Q29udGVudCxcbn07XG5cbmNvbnN0IEhpID0gKHsgb25IaWRlIH0pID0+IHtcbiAgY29uc3QgWyBhbmltYXRpb24sIHNldEFuaW1hdGlvbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFuaW1hdGlvbihmYWxzZSksIDIwMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SGlkZGVuKHRydWUpLCAyNTAwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZGRlbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb25IaWRlKSB7XG4gICAgICBvbkhpZGUoKTtcbiAgICB9XG4gIH0sIFsgaGlkZGVuIF0pO1xuXG4gIGNvbnN0IHNob3cgPSBhbmltYXRpb24gJiYgIWhpZGRlbjtcblxuICBjb25zdCBnZXRSYW5kb21DdWJlID0gKCkgPT4ge1xuICAgIGxldCBmYWNlID0gQ1VCRV9GQUNFUy5mcm9udDtcblxuICAgIGlmIChzaG93KSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcblxuICAgICAgZmFjZSA9IFsgQ1VCRV9GQUNFUy5ib3R0b20sIENVQkVfRkFDRVMubGVmdCwgQ1VCRV9GQUNFUy5yaWdodCwgQ1VCRV9GQUNFUy50b3AgXVtudW1iZXJdO1xuICAgIH1cblxuICAgIHJldHVybiA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtmYWNlfSB7Li4uY3ViZU9wdGlvbnN9IC8+O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BoaS1jb250YWluZXIke2hpZGRlbiA/ICcgaGlkZGVuJyA6ICcnfWB9PlxuICAgICAgPGgxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgTXkgQzxzcGFuPnU8L3NwYW4+VjxzcGFuPmU8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICBieSA8c3BhbiBjbGFzc05hbWU9XCJzZWNvbmRhcnlcIj5KYXZpIEdhcmPDrWEgRmFqYXJkbzwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhpLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25IaWRlOiB1bmRlZmluZWQsXG59O1xuXG5IaS5wcm9wVHlwZXMgPSB7XG4gIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaTtcbiIsImltcG9ydCBIaSBmcm9tICcuL0hpJztcbmltcG9ydCAnLi9oaS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSGk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHNoYWRvd1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXRpdGxlXCI+XG4gICAgICAgIE15IEM8c3Bhbj51PC9zcGFuPlY8c3Bhbj5lPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdWJ0aXRsZVwiPlxuICAgICAgICBieSA8c3Bhbj5KYXZpIEdhcmPDrWEgRmFqYXJkbzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuaW1wb3J0ICcuL25hdmJhci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEljb24gPSAoeyBpY29uLCAuLi5yZXN0IH0pID0+IDxpIHsuLi5yZXN0fSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9e2ljb259IC8+O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCAnLi9pY29uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgaWNvbiwgdGV4dCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxidXR0b24gY2xhc3NOYW1lPXtgY3VzdG9tLWJ0biR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gdHlwZT1cImJ1dHRvblwiIHsuLi5yZXN0fT5cbiAgICB7aWNvbiAmJiA8SWNvbiBpY29uPXtpY29ufSAvPn1cbiAgICB7dGV4dCAmJiA8c3Bhbj57dGV4dH08L3NwYW4+fVxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG4pO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICB0ZXh0OiB1bmRlZmluZWQsXG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcblxuY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpc2FibGVkLCBvbkZ1bGxzY3JlZW4sIG9uRnVsbHNjcmVlbk91dCwgdGl0bGUgfSkgPT4ge1xuICBjb25zdCBbIGZhZGVvdXQsIHNldEZhZGVvdXQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBmdWxsc2NyZWVuLCBzZXRGdWxsc2NyZWVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgdGFwcGVkLCBzZXRUYXBwZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmYWRlb3V0ICYmIGZ1bGxzY3JlZW4pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RnVsbHNjcmVlbihmYWxzZSksIDQwMCk7XG4gICAgfVxuICB9LCBbIGZhZGVvdXQgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWZ1bGxzY3JlZW4gJiYgZmFkZW91dCkge1xuICAgICAgc2V0RmFkZW91dChmYWxzZSk7XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uRnVsbHNjcmVlbk91dCkge1xuICAgICAgICBvbkZ1bGxzY3JlZW5PdXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZ1bGxzY3JlZW4gJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uRnVsbHNjcmVlbikge1xuICAgICAgb25GdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9LCBbIGZ1bGxzY3JlZW4gXSk7XG4gIGNvbnN0IGNsZWFyVGFwcGVkID0gKCkgPT4gc2V0VGFwcGVkKGZhbHNlKTtcblxuICBjb25zdCBpc0RvdWJsZVRhcCA9ICgpID0+IHtcbiAgICBpZiAodGFwcGVkKSB7XG4gICAgICBzZXRGdWxsc2NyZWVuKHRydWUpO1xuICAgICAgY2xlYXJUaW1lb3V0KGNsZWFyVGFwcGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGFwcGVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dChjbGVhclRhcHBlZCwgMzAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZ1bGxzY3JlZW4gPyAoXG4gICAgY3JlYXRlUG9ydGFsKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjdWJlLXNlY3Rpb24gY3ViZS1zZWN0aW9uLWZ1bGwgJHtmYWRlb3V0ID8gJ2ZhZGVvdXQnIDogJ2ZhZGVpbid9JHtcbiAgICAgICAgICBjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ1xuICAgICAgICB9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3ViZS1zZWN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aXRsZSAmJiA8aDI+e3RpdGxlfTwvaDI+fVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlLWJ0blwiXG4gICAgICAgICAgICBpY29uPVwiZmFzIGZhLXRpbWVzXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZhZGVvdXQodHJ1ZSl9XG4gICAgICAgICAgICBvblRvdWNoRW5kPXsoKSA9PiBzZXRGYWRlb3V0KHRydWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PixcbiAgICAgIGRvY3VtZW50LmJvZHksXG4gICAgKVxuICApIDogKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGN1YmUtc2VjdGlvbiBmYWRlaW4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9XG4gICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiAhZGlzYWJsZWQgJiYgc2V0RnVsbHNjcmVlbih0cnVlKX1cbiAgICAgIG9uVG91Y2hFbmQ9e2lzRG91YmxlVGFwfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aXRsZSAmJiA8aDI+e3RpdGxlfTwvaDI+fVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT1cInNlZS1tb3JlLWJ0blwiIGljb249XCJmYXMgZmEtcGx1c1wiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGxzY3JlZW4odHJ1ZSl9IC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2VjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uRnVsbHNjcmVlbjogdW5kZWZpbmVkLFxuICBvbkZ1bGxzY3JlZW5PdXQ6IHVuZGVmaW5lZCxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbn07XG5cblNlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkZ1bGxzY3JlZW46IFByb3BUeXBlcy5mdW5jLFxuICBvbkZ1bGxzY3JlZW5PdXQ6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0ICcuL3NlY3Rpb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgZXhwZXJpZW5jZSBmcm9tICcuL2VzL2V4cGVyaWVuY2UuanNvbic7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuL2VzL3Byb2ZpbGUuanNvbic7XG5pbXBvcnQgc29jaWFsIGZyb20gJy4vZXMvc29jaWFsLmpzb24nO1xuXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XG4gIGV4cGVyaWVuY2UsXG4gIHByb2ZpbGUsXG4gIHNvY2lhbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0aW9ucztcbiIsImltcG9ydCBleHBlcmllbmNlIGZyb20gJy4vZW4vZXhwZXJpZW5jZS5qc29uJztcbmltcG9ydCBwcm9maWxlIGZyb20gJy4vZW4vcHJvZmlsZS5qc29uJztcbmltcG9ydCBzb2NpYWwgZnJvbSAnLi9lbi9zb2NpYWwuanNvbic7XG5cbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcbiAgZXhwZXJpZW5jZSxcbiAgcHJvZmlsZSxcbiAgc29jaWFsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRpb25zO1xuIiwiaW1wb3J0IGVzIGZyb20gJy4vZXMnO1xuaW1wb3J0IGVuIGZyb20gJy4vZW4nO1xuXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7IGVzLCBlbiB9O1xuXG5leHBvcnQgY29uc3QgTEFOR19JRFMgPSB7XG4gIGVuZ2xpc2g6ICdlbicsXG4gIHNwYW5pc2g6ICdlcycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlID0gKGxhbmcpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgbGFuZyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxlID0gKCkgPT4ge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5sYW5ndWFnZSkge1xuICAgIHJldHVybiBMQU5HX0lEUy5zcGFuaXNoO1xuICB9XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UubGFuZ3VhZ2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNTcGFuaXNoID0gKCkgPT4gTEFOR19JRFMuc3BhbmlzaCA9PT0gZ2V0TG9jYWxlKCk7XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBzdHJpbmcgJ2luZGV4JyBmb3IgdGhlIEphdmFTY3JpcHQgT2JqZWN0XG4gKi9cbmNvbnN0IHJlc29sdmVJbmRleCA9IChzdHIpID0+IHtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcWyhcXHcrKVxcXS9nLCAnLiQxJyk7IC8vIGNvbnZlcnQgaW5kZXhlcyB0byBwcm9wZXJ0aWVzXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9eXFwuLywgJycpOyAvLyBzdHJpcCBhIGxlYWRpbmcgZG90XG4gIGNvbnN0IGFycmF5ID0gc3RyLnNwbGl0KCcuJyk7XG5cbiAgbGV0IHRyYW5zbGF0aW9uc0xhbmcgPSB0cmFuc2xhdGlvbnNbZ2V0TG9jYWxlKCldO1xuXG4gIGZvciAobGV0IGkgPSAwLCB7IGxlbmd0aCB9ID0gYXJyYXk7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGVsZW0gPSBhcnJheVtpXTtcbiAgICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiB0cmFuc2xhdGlvbnNMYW5nICYmIGVsZW0gaW4gdHJhbnNsYXRpb25zTGFuZykge1xuICAgICAgdHJhbnNsYXRpb25zTGFuZyA9IHRyYW5zbGF0aW9uc0xhbmdbZWxlbV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhbnNsYXRpb25zTGFuZztcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2xhdGUgPSAoa2V5KSA9PiByZXNvbHZlSW5kZXgoa2V5KTtcblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcbiAgeyBuYW1lOiB0cmFuc2xhdGUoJ2xhbmd1YWdlLmVzJyksIHZhbHVlOiAnZXMnIH0sXG4gIHsgbmFtZTogdHJhbnNsYXRlKCdsYW5ndWFnZS5lbicpLCB2YWx1ZTogJ2VuJyB9LFxuXTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQkFSX1RZUEVTID0ge1xuICBwcmltYXJ5RGFya2VyOiAncHJpbWFyeS1kYXJrZXInLFxuICBwcmltYXJ5RGFyazogJ3ByaW1hcnktZGFyaycsXG4gIHByaW1hcnk6ICdwcmltYXJ5JyxcbiAgc2Vjb25kYXJ5RGFya2VyOiAnc2Vjb25kYXJ5LWRhcmtlcicsXG4gIHNlY29uZGFyeURhcms6ICdzZWNvbmRhcnktZGFyaycsXG4gIHNlY29uZGFyeTogJ3NlY29uZGFyeScsXG4gIGFjY2VudERhcmtlcjogJ2FjY2VudC1kYXJrZXInLFxuICBhY2NlbnREYXJrOiAnYWNjZW50LWRhcmsnLFxuICBhY2NlbnQ6ICdhY2NlbnQnLFxufTtcblxuY29uc3QgZ2V0VG90YWwgPSAodG90YWwsIGFtb3VudCkgPT4gKGFtb3VudCAqIDEwMCkgLyB0b3RhbDtcbmNvbnN0IGdldENvbG9yID0gKHRvdGFsKSA9PiB7XG4gIGlmICgxMDAgPT09IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5wcmltYXJ5RGFya2VyO1xuICB9XG4gIGlmICg5MCA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMucHJpbWFyeURhcms7XG4gIH1cbiAgaWYgKDc1IDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5wcmltYXJ5O1xuICB9XG4gIGlmICg2MCA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMuc2Vjb25kYXJ5RGFya2VyO1xuICB9XG4gIGlmICg1NSA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMuc2Vjb25kYXJ5RGFyaztcbiAgfVxuICBpZiAoNDAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnNlY29uZGFyeTtcbiAgfVxuICBpZiAoMjUgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLmFjY2VudERhcmtlcjtcbiAgfVxuICBpZiAoMTAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLmFjY2VudERhcms7XG4gIH1cbiAgcmV0dXJuIEJBUl9UWVBFUy5hY2NlbnQ7XG59O1xuXG5jb25zdCBCYXIgPSAoeyBhbW91bnQsIGNsYXNzTmFtZSwgdGV4dCwgdG90YWxBbW91bnQsIHZlcnRpY2FsLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgWyBjb2xvciwgc2V0Q29sb3IgXSA9IHVzZVN0YXRlKEJBUl9UWVBFUy5wcmltYXJ5KTtcbiAgY29uc3QgWyBtb3VudGVkLCBzZXRNb3VudGVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgdG90YWwsIHNldFRvdGFsIF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb3VudGVkKSB7XG4gICAgICBjb25zdCBuZXd0b3RhbCA9IGdldFRvdGFsKHRvdGFsQW1vdW50LCBhbW91bnQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRUb3RhbChuZXd0b3RhbCksIDUwMCk7XG4gICAgICBzZXRDb2xvcihnZXRDb2xvcihuZXd0b3RhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNb3VudGVkKHRydWUpO1xuICAgIH1cbiAgfSwgWyBtb3VudGVkIF0pO1xuXG4gIHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAobW91bnRlZCkge1xuICAgICAgY29uc3QgbmV3dG90YWwgPSBnZXRUb3RhbCh0b3RhbEFtb3VudCwgYW1vdW50KTtcbiAgICAgIHNldFRvdGFsKG5ld3RvdGFsKTtcbiAgICAgIHNldENvbG9yKGdldENvbG9yKG5ld3RvdGFsKSk7XG4gICAgfVxuICB9LCBbIGFtb3VudCwgdG90YWxBbW91bnQgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIGNsYXNzTmFtZT17YGJhci10b3RhbCBmYWRlaW4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfSAke3ZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmFyICR7Y29sb3J9YH0gc3R5bGU9e3ZlcnRpY2FsID8geyBoZWlnaHQ6IGAke3RvdGFsfWAgfSA6IHsgd2lkdGg6IGAke3RvdGFsfSVgIH19PlxuICAgICAgICB7bW91bnRlZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFkZWluXCI+XG4gICAgICAgICAgICB7dGV4dH0ge3RvdGFsfSVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFtb3VudDogMCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIHRleHQ6IHVuZGVmaW5lZCxcbiAgdG90YWxBbW91bnQ6IDEwMCxcbiAgdmVydGljYWw6IGZhbHNlLFxufTtcblxuQmFyLnByb3BUeXBlcyA9IHtcbiAgYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvdGFsQW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXI7XG4iLCJpbXBvcnQgQmFyIGZyb20gJy4vQmFyJztcbmltcG9ydCAnLi9iYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9uJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RyYW5zbGF0b3InO1xuaW1wb3J0IEJhciBmcm9tICcuLi8uLi9CYXInO1xuXG5jb25zdCBQcm9maWxlID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxTZWN0aW9uIHsuLi5yZXN0fSB0aXRsZT17dHJhbnNsYXRlKCdwcm9maWxlLnRpdGxlJyl9IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxuICAgIDxwPnt0cmFuc2xhdGUoJ3Byb2ZpbGUuaGVhZGVyJyl9PC9wPlxuICAgIDxCYXIgdGV4dD1cIlJlYWN0XCIgYW1vdW50PXs4MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJSZWFjdCBOYXRpdmVcIiBhbW91bnQ9ezUwfSAvPlxuICAgIDxCYXIgdGV4dD1cIkhUTUxcIiBhbW91bnQ9ezc1fSAvPlxuICAgIDxCYXIgdGV4dD1cIkNTU1wiIGFtb3VudD17ODV9IC8+XG4gICAgPEJhciB0ZXh0PVwiR3JhcGhRTFwiIGFtb3VudD17NTV9IC8+XG4gICAgPEJhciB0ZXh0PVwiTm9kZVwiIGFtb3VudD17NjV9IC8+XG4gICAgPEJhciB0ZXh0PVwiTW9uZ29cIiBhbW91bnQ9ezcwfSAvPlxuICAgIDxCYXIgdGV4dD1cIkFuZ3VsYXJcIiBhbW91bnQ9ezQwfSAvPlxuICAgIDxCYXIgdGV4dD1cIkphdmFcIiBhbW91bnQ9ezYwfSAvPlxuICAgIDxCYXIgdGV4dD1cIlNwcmluZ2Jvb3RcIiBhbW91bnQ9ezIwfSAvPlxuICAgIDxCYXIgdGV4dD1cIlZ1ZVwiIGFtb3VudD17MjB9IC8+XG4gICAgPHA+e3RyYW5zbGF0ZSgncHJvZmlsZS50ZXh0Jyl9PC9wPlxuICAgIDxwPnt0cmFuc2xhdGUoJ3Byb2ZpbGUudGV4dDInKX08L3A+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnO1xuaW1wb3J0ICcuL3Byb2ZpbGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ29tcGFueSA9ICh7IGVuZCwgbmFtZSwgcGxhY2UsIHJvbGUsIHN0YXJ0LCB0ZWNobm9sb2dpZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnktZXhwZXJpZW5jZVwiPlxuICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktbmFtZVwiPntuYW1lfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LWR1cmF0aW9uXCI+XG4gICAgICB7c3RhcnR9IC0ge2VuZH1cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS1yb2xlXCI+e3JvbGV9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktcGxhY2VcIj57cGxhY2V9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktdGVjaFwiPnt0ZWNobm9sb2dpZXN9PC9wPlxuICA8L2Rpdj5cbik7XG5cbkNvbXBhbnkucHJvcFR5cGVzID0ge1xuICBlbmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0YXJ0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRlY2hub2xvZ2llczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9uJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RyYW5zbGF0b3InO1xuaW1wb3J0IENvbXBhbnkgZnJvbSAnLi9Db21wYW55JztcblxuY29uc3QgY29tcGFuaWVzID0gW1xuICB7XG4gICAgbmFtZTogJ1dvenpvJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2Uud296em8ucm9sZScpLFxuICAgIHBsYWNlOiAnUGFsbWEgZGUgTWFsbG9yY2EnLFxuICAgIHN0YXJ0OiAnMDkvMjAxOCcsXG4gICAgZW5kOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UucHJlc2VudCcpLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLndvenpvLnRlY2hub2xvZ2llcycpLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1BsZXh1cyBUZWNobm9sb2dpZXMnLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5wbGV4dXMucm9sZScpLFxuICAgIHBsYWNlOiAnUGFsbWEgZGUgTWFsbG9yY2EnLFxuICAgIHN0YXJ0OiAnMDgvMjAxOCcsXG4gICAgZW5kOiAnMDkvMjAxNycsXG4gICAgdGVjaG5vbG9naWVzOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UucGxleHVzLnRlY2hub2xvZ2llcycpLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0dNVicsXG4gICAgcm9sZTogdHJhbnNsYXRlKCdleHBlcmllbmNlLmdtdi5yb2xlJyksXG4gICAgcGxhY2U6ICdTZXZpbGxhJyxcbiAgICBzdGFydDogJzA5LzIwMTUnLFxuICAgIGVuZDogJzA4LzIwMTYnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLmdtdi50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPZXPDrWEgTmV0d29ya3MnLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5vZXNpYS5yb2xlJyksXG4gICAgcGxhY2U6ICdTZXZpbGxhJyxcbiAgICBzdGFydDogJzA2LzIwMTUnLFxuICAgIGVuZDogJzA4LzIwMTUnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLm9lc2lhLnRlY2hub2xvZ2llcycpLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0F0b3MnLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5hdG9zLnJvbGUnKSxcbiAgICBwbGFjZTogJ1NldmlsbGEnLFxuICAgIHN0YXJ0OiAnMDgvMjAxMycsXG4gICAgZW5kOiAnMDYvMjAxNScsXG4gICAgdGVjaG5vbG9naWVzOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UuYXRvcy50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbl07XG5cbmNvbnN0IEV4cGVyaWVuY2UgPSAoeyAuLi5yZXN0IH0pID0+IChcbiAgPFNlY3Rpb24gey4uLnJlc3R9IHRpdGxlPXt0cmFuc2xhdGUoJ2V4cGVyaWVuY2UudGl0bGUnKX0gY2xhc3NOYW1lPVwiZXhwZXJpZW5jZS1zZWN0aW9uXCI+XG4gICAge2NvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IChcbiAgICAgIDxDb21wYW55IGtleT17Y29tcGFueS5uYW1lfSB7Li4uY29tcGFueX0gLz5cbiAgICApKX1cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTtcbiIsImltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4vRXhwZXJpZW5jZSc7XG5pbXBvcnQgJy4vZXhwZXJpZW5jZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbic7XG5cbmNvbnN0IE5ldHdvcmsgPSAoeyBpY29uLCBsaW5rLCBuYW1lLCB1c2VybmFtZSB9KSA9PiAoXG4gIDxhIGNsYXNzTmFtZT1cInNvY2lhbC1uZXR3b3JrXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17bGlua30gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgIDxJY29uIGljb249e2ljb259IC8+XG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm5ldHdvcmstbmFtZVwiPntuYW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm5ldHdvcmstdXNlcm5hbWVcIj57dXNlcm5hbWV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibmV0d29yay1saW5rXCI+e2xpbmt9PC9wPlxuICAgIDwvZGl2PlxuICA8L2E+XG4pO1xuXG5OZXR3b3JrLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ldHdvcms7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy90cmFuc2xhdG9yJztcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yayc7XG5cbmNvbnN0IG5ldHdvcmtzID0gW1xuICB7XG4gICAgaWNvbjogJ2ZhYiBmYS1saW5rZWRpbicsXG4gICAgbGluazogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2luL2phdmlnYXJjaWFmYWphcmRvJyxcbiAgICBuYW1lOiAnTGlua2VkSW4nLFxuICAgIHVzZXJuYW1lOiAnSmF2aWVyIEdhcmPDrWEgRmFqYXJkbycsXG4gIH0sIHtcbiAgICBpY29uOiAnZmFiIGZhLWdpdGh1YicsXG4gICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9KYXZpR0Y4LycsXG4gICAgbmFtZTogJ0dpdEh1YicsXG4gICAgdXNlcm5hbWU6ICdKYXZpR0Y4JyxcbiAgfSxcbl07XG5cbmNvbnN0IFNvY2lhbCA9ICh7IC4uLnJlc3QgfSkgPT4gKFxuICA8U2VjdGlvbiB7Li4ucmVzdH0gdGl0bGU9e3RyYW5zbGF0ZSgnc29jaWFsLnRpdGxlJyl9IGNsYXNzTmFtZT1cInNvY2lhbC1zZWN0aW9uXCI+XG4gICAge25ldHdvcmtzLm1hcCgobmV0KSA9PiA8TmV0d29yayBrZXk9e25ldC5uYW1lfSB7Li4ubmV0fSAvPil9XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbDtcbiIsImltcG9ydCBTb2NpYWwgZnJvbSAnLi9Tb2NpYWwnO1xuaW1wb3J0ICcuL3NvY2lhbC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEN1YmUgZnJvbSAnLi4vQ3ViZSc7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vU2VjdGlvbic7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vQ3ViZS9DdWJlJztcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4vRXhwZXJpZW5jZSc7XG5pbXBvcnQgU29jaWFsIGZyb20gJy4vU29jaWFsJztcblxuY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gIHJldHVybiAoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0ID8gaW5uZXJIZWlnaHQgOiBpbm5lcldpZHRoKSAqIDAuODtcbn07XG5jb25zdCBzaXplID0gZ2V0U2l6ZSgpO1xuXG5jb25zdCBNYWluQ3ViZSA9ICh7IGhpZGRlbkludHJvIH0pID0+IHtcbiAgY29uc3QgWyBpbml0aWFsVHJhbnNpdGlvbiwgc2V0SW5pdGlhbFRyYW5zaXRpb24gXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbIGlzRnVsbHNjcmVlbiwgc2V0SXNGdWxsc2NyZWVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuSW50cm8pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SW5pdGlhbFRyYW5zaXRpb24oZmFsc2UpLCA3NTApO1xuICAgIH1cbiAgfSwgWyBoaWRkZW5JbnRybyBdKTtcblxuICBjb25zdCBjb21tb25Qcm9wcyA9IHtcbiAgICBvbkZ1bGxzY3JlZW46ICgpID0+IHNldElzRnVsbHNjcmVlbih0cnVlKSxcbiAgICBvbkZ1bGxzY3JlZW5PdXQ6ICgpID0+IHNldElzRnVsbHNjcmVlbihmYWxzZSksXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibWFpbi1jdWJlXCIgY2xhc3NOYW1lPXtoaWRkZW5JbnRybyA/ICcnIDogJ2hpZGRlbi1jdWJlJ30+XG4gICAgICA8Q3ViZVxuICAgICAgICBjbGFzc05hbWU9e2luaXRpYWxUcmFuc2l0aW9uID8gJ2luaXRpYWwtdHJhbnNpdGlvbicgOiAnJ31cbiAgICAgICAgZGlzYWJsZWQ9e2lzRnVsbHNjcmVlbn1cbiAgICAgICAgZmFjZT17aW5pdGlhbFRyYW5zaXRpb24gPyBDVUJFX0ZBQ0VTLmJhY2sgOiBDVUJFX0ZBQ0VTLmZyb250fVxuICAgICAgICBsZWZ0Q29udGVudD17aGlkZGVuSW50cm8gJiYgPFNlY3Rpb24gey4uLmNvbW1vblByb3BzfSB0aXRsZT1cIkZPUk1BQ0lPTlwiIC8+fVxuICAgICAgICBmcm9udENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxQcm9maWxlIHsuLi5jb21tb25Qcm9wc30gLz59XG4gICAgICAgIHJpZ2h0Q29udGVudD17aGlkZGVuSW50cm8gJiYgPEV4cGVyaWVuY2Ugey4uLmNvbW1vblByb3BzfSAvPn1cbiAgICAgICAgYmFja0NvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxTb2NpYWwgey4uLmNvbW1vblByb3BzfSAvPn1cbiAgICAgICAgYm90dG9tQ29udGVudD17aGlkZGVuSW50cm8gJiYgPFNlY3Rpb24gey4uLmNvbW1vblByb3BzfSB0aXRsZT1cIk1hZGUgYnkgSmF2aWVyIEdhcmPDrWEgRmFqYXJkb1wiIGRpc2FibGVkIC8+fVxuICAgICAgICB0b3BDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8U2VjdGlvbiB7Li4uY29tbW9uUHJvcHN9IHRpdGxlPVwiSGVsbG8gOilcIiBkaXNhYmxlZCAvPn1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgd2l0aFN3aXBlXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTWFpbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBoaWRkZW5JbnRybzogZmFsc2UsXG59O1xuXG5NYWluQ3ViZS5wcm9wVHlwZXMgPSB7XG4gIGhpZGRlbkludHJvOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5DdWJlO1xuIiwiaW1wb3J0IE1haW5DdWJlIGZyb20gJy4vTWFpbkN1YmUnO1xuaW1wb3J0ICcuL21haW5DdWJlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ3ViZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaSBmcm9tICcuLi9jb21wb25lbnRzL0hpJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IE1haW5DdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkN1YmUnO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbIGhpZGRlbkludHJvLCBzZXRIaWRkZW5JbnRybyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJmYWRlaW5cIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8SGkgb25IaWRlPXsoKSA9PiBzZXRIaWRkZW5JbnRybyh0cnVlKX0gLz5cbiAgICAgICAgPE1haW5DdWJlIGhpZGRlbkludHJvPXtoaWRkZW5JbnRyb30gLz5cbiAgICAgICAgPGRpdiBpZD1cInNlbGVjdGVkLXNlY3Rpb25cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPE1haW4gLz5cbiAgPC9Ccm93c2VyUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=