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
/******/ 	deferredModules.push([153,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 140:
/***/ (function(module) {

module.exports = JSON.parse("{\"university\":{\"expeditor\":\"Universidad de Sevilla\",\"title\":\"Ingeniero en Informática\"},\"react\":{\"expeditor\":\"Imagina Formación\",\"title\":\"Curso de React JS\"},\"reactBasic\":{\"expeditor\":\"Udemy\",\"title\":\"React basic\"},\"angular4\":{\"expeditor\":\"Udemy\",\"title\":\"Learn Angular 4 from Scratch\"},\"typescript\":{\"expeditor\":\"Udemy\",\"title\":\"Introduction to TypeScript\"},\"jquery\":{\"expeditor\":\"Udemy\",\"title\":\"Building Websites web Development Introduction to jQuery\"},\"bootstrap\":{\"expeditor\":\"Udemy\",\"title\":\"Web Design Modern SinglePage Website from Scratch Bootstrap\"},\"angularjs\":{\"expeditor\":\"FrontJs\",\"title\":\"Formación en AngularJs\"},\"agile\":{\"expeditor\":\"Universidad Rey Juan Carlos\",\"title\":\"Agilidad y Lean. Gestionando los proyectos y negocios del s. XXI\"},\"android\":{\"expeditor\":\"Universitat Politècnica de Valencia\",\"title\":\"Android: Introducción a la programación\"},\"title\":\"Educación\"}");

/***/ }),

/***/ 141:
/***/ (function(module) {

module.exports = JSON.parse("{\"atos\":{\"role\":\"Programador junior\",\"technologies\":\"Java, Primefaces, JavaScript, jQuery, ExtJs, Oracle\"},\"gmv\":{\"role\":\"Programador senior\",\"technologies\":\"AngularJs, JavaScript, Java, Primefaces, PostgreSQL, Oracle, Talend\"},\"plexus\":{\"role\":\"Analista y desarrollador fullstack\",\"technologies\":\"Java, AngularJs, JavaScript, Node, Springboot, Oracle, Mongo\"},\"oesia\":{\"role\":\"Programador senior\",\"technologies\":\"JavaScript, jQuery, Ajax, Java, Richfaces, MySQL, Oracle\"},\"present\":\"Actualidad\",\"title\":\"Experiencia profesional\",\"wozzo\":{\"role\":\"Analista y desarrollador fullstack\",\"technologies\":\"React, React Native, Redux, GraphQL, Apollo, Express, Node, Mongo\"}}");

/***/ }),

/***/ 142:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Profesional fullstack con más de 6 años de experiencia.\",\"text\":\"More than 6 years as a fullstack developer, initially with Java technologies and since September 2017 focused on Javascript technologies.\",\"text2\":\"The technological stack I'm most comfortable with is React and/or React Native, GraphQL with Apollo and/or Redux, Node and Mongo.\",\"title\":\"Perfil profesional\"}");

/***/ }),

/***/ 143:
/***/ (function(module) {

module.exports = JSON.parse("{\"codeIn\":\"Puedes ver el códigon en\",\"howToUse\":\"¿Cómo usarlo?\",\"info\":\"Se puede ver cualquiera de las caras del cubo arrastrando sobre el mismo en la dirección deseada. Para ver la información completa de cualquiera de las caras, hay que pulsar dos veces sobre la misma. Ambas funcionalidades están disponibles tanto para móvil como para ordenador.\"}");

/***/ }),

/***/ 144:
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Social\"}");

/***/ }),

/***/ 145:
/***/ (function(module) {

module.exports = JSON.parse("{\"university\":{\"expeditor\":\"Universidad de Sevilla\",\"title\":\"Degree in Computer Engineering\"},\"react\":{\"expeditor\":\"Imagina Formación\",\"title\":\"React JS course\"},\"reactBasic\":{\"expeditor\":\"Udemy\",\"title\":\"React basic\"},\"angular4\":{\"expeditor\":\"Udemy\",\"title\":\"Learn Angular 4 from Scratch\"},\"typescript\":{\"expeditor\":\"Udemy\",\"title\":\"Introduction to TypeScript\"},\"jquery\":{\"expeditor\":\"Udemy\",\"title\":\"Building Websites web Development Introduction to jQuery\"},\"bootstrap\":{\"expeditor\":\"Udemy\",\"title\":\"Web Design Modern SinglePage Website from Scratch Bootstrap\"},\"angularjs\":{\"expeditor\":\"FrontJs\",\"title\":\"AngularJs formation\"},\"agile\":{\"expeditor\":\"Universidad Rey Juan Carlos\",\"title\":\"Agilidad y Lean. Gestionando los proyectos y negocios del s. XXI\"},\"android\":{\"expeditor\":\"Universitat Politècnica de Valencia\",\"title\":\"Android: Introduction to programming\"},\"title\":\"Education\"}");

/***/ }),

/***/ 146:
/***/ (function(module) {

module.exports = JSON.parse("{\"atos\":{\"role\":\"Junior developer\",\"technologies\":\"Java, Primefaces, JavaScript, jQuery, ExtJs, Oracle\"},\"gmv\":{\"role\":\"Senior developer\",\"technologies\":\"AngularJs, JavaScript, Java, Primefaces, PostgreSQL, Oracle, Talend\"},\"plexus\":{\"role\":\"Analyst and fullstack developer\",\"technologies\":\"Java, AngularJs, JavaScript, Node, Springboot, Oracle, Mongo\"},\"oesia\":{\"role\":\"Senior developer\",\"technologies\":\"JavaScript, jQuery, Ajax, Java, Richfaces, MySQL, Oracle\"},\"present\":\"Present\",\"title\":\"Professional experience\",\"wozzo\":{\"role\":\"Analyst and fullstack developer\",\"technologies\":\"React, React Native, Redux, GraphQL, Apollo, Express, Node, Mongo\"}}");

/***/ }),

/***/ 147:
/***/ (function(module) {

module.exports = JSON.parse("{\"codeIn\":\"You can see the code in\",\"howToUse\":\"How to use?\",\"info\":\"You can see any of the faces of the cube by dragging on it in the desired direction. To see the complete information of any of the faces, you have to double click on it. Both functionalities are available for mobile and computer.\"}");

/***/ }),

/***/ 148:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Fullstack professional with more than 6 years of experience.\",\"text\":\"Más de 6 años como fullstack developer, inicialmente con tecnologías Java y desde septiembre de 2017 centrado en tecnologías Javascript.\",\"text2\":\"El stack tecnológico con el que más cómodo me siento es React y/o React Native, GraphQL con Apollo y/o Redux, Node y Mongo.\",\"title\":\"Professional profile\"}");

/***/ }),

/***/ 149:
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Social\"}");

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154);
module.exports = __webpack_require__(394);


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-container .cube{width:100%;height:100%;position:absolute;transform-style:preserve-3d;transition:ease-in all .5s}.cube-container .cube .cube-face{position:absolute;width:100%;height:100%;margin:0;background-color:#080808;color:#fff}.cube-container .cube .cube-face>*{height:100%;width:100%}.cube-container .cube .cube-front{transform:rotateY(0deg) translateZ(100px)}.cube-container .cube .cube-right{transform:rotateY(90deg) translateZ(100px)}.cube-container .cube .cube-back{transform:rotateY(180deg) translateZ(100px)}.cube-container .cube .cube-left{transform:rotateZ(180deg) rotateY(-90deg) translateZ(100px)}.cube-container .cube .cube-top{transform:rotateX(90deg) translateZ(100px)}.cube-container .cube .cube-bottom{transform:rotateX(-90deg) translateZ(100px)}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hi-container{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#080808;transition:linear all .5s;z-index:1001}.hi-container h1{color:#fff;text-align:center;width:95%;font-size:20px}.hi-container h1 span.primary{color:#b71d2b;font-size:32px}.hi-container h1 span.primary span{font-size:20px;font-weight:300}.hi-container h1 span.secondary{color:#78b6a9;font-size:24px}.hi-container .hi{display:flex;max-width:1200px}.hi-container .hi .letter{display:flex;flex-wrap:wrap}.hi-container .hi .letter>div{display:flex;flex-direction:row;justify-content:center;width:100%;margin:4px 0}.hi-container .hi .letter>div>*{margin:0 4px}.hi-container .hi .letter .background{border-radius:8px;overflow:hidden}.hi-container .hi .letter .white-background{background-color:#fff}.hi-container .hi .letter .primary-background{background-color:#b71d2b}.hi-container .hi .letter .secondary-background{background-color:#78b6a9}.hi-container .hi .letter .accent-background{background-color:#f2d090}.hi-container.hidden{opacity:0;pointer-events:none}.hi-container.hidden *{pointer-events:none}@media screen and (max-width: 768px){.hi-container h1{display:flex;flex-direction:column}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "nav.navbar{position:fixed;top:0;left:0;right:0;z-index:900;display:flex;align-items:center;justify-content:center;background-color:#b71d2b;height:60px;padding:0 16px}nav.navbar .expand-btn{display:none}nav.navbar .navbar-content{max-width:1200px;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between}nav.navbar .navbar-content .navbar-title{font-size:32px;font-weight:bold;color:#fff}nav.navbar .navbar-content .navbar-title span{font-size:20px;font-weight:300}nav.navbar .navbar-content .navbar-subtitle{font-size:16px;font-weight:300;font-style:italic}nav.navbar .navbar-content .navbar-subtitle span{color:#e9bbbf}@media screen and (max-width: 992px){nav.navbar .navbar-content{justify-content:center;flex-direction:column}nav.navbar .navbar-content .navbar-title{font-size:20px}nav.navbar .navbar-content .navbar-title span{font-size:12px}nav.navbar .navbar-content .navbar-subtitle{font-size:12px}nav.navbar .navbar-content .navbar-subtitle span{font-size:14px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-icon{margin:0;height:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-btn{padding:8px 16px;font-size:16px;border-radius:4px;border:0;color:#fff;background-color:#b71d2b;transition:linear all .25s;outline:0;cursor:pointer}.custom-btn>*:not(:first-child){margin-left:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cube-container .cube .cube-face .cube-section,.cube-section{margin:0;padding:32px;width:calc(100% - 64px);height:calc(100% - 64px);background-color:#080808;color:#fff;cursor:pointer;border-radius:16px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;overflow:hidden}.cube-container .cube .cube-face .cube-section a,.cube-section a{color:#f2d090}.cube-container .cube .cube-face .cube-section *,.cube-section *{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cube-container .cube .cube-face .cube-section>div,.cube-section>div{width:100%;height:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden}.cube-container .cube .cube-face .cube-section>div h2,.cube-section>div h2{margin:0;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid #b71d2b;width:100%}.cube-container .cube .cube-face .cube-section .see-more-btn,.cube-section .see-more-btn{height:20%;width:100%;align-self:center;border-radius:0}.cube-section-full{background-color:#080808;color:#fff;display:flex;align-items:center;justify-content:flex-start;position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;transition:linear all 1s;border-radius:0;overflow:auto}.cube-section-full>div{max-width:1200px;overflow:visible}.cube-section-full>div .close-btn{position:absolute;right:16px;top:16px;background-color:#080808}@media screen and (max-width: 1200px){.cube-container .cube .cube-face .cube-section,.cube-section{width:calc(100% - 32px);height:calc(100% - 32px);padding:16px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bar-total{background-color:silver;border-radius:4px;overflow:hidden;display:flex}.bar-total .bar{padding:4px 0;transition:linear all .5s;display:flex;align-items:center}.bar-total .bar>span{margin-left:8px;white-space:nowrap}.bar-total .bar.primary-darker{background-color:#900a10}.bar-total .bar.primary-dark{background-color:#a71520}.bar-total .bar.primary{background-color:#b71d2b}.bar-total .bar.secondary-darker{background-color:#488e7e}.bar-total .bar.secondary-dark{background-color:#65a698}.bar-total .bar.secondary{background-color:#78b6a9}.bar-total .bar.accent-darker{background-color:#e8b361}.bar-total .bar.accent-dark{background-color:#eec47d}.bar-total .bar.accent{background-color:#f2d090}.bar-total.vertical{min-height:100px;min-width:32px;max-width:32px;height:100%;align-items:flex-end}.bar-total.vertical .bar>span{writing-mode:tb-rl;transform:rotate(-180deg)}.bar-total.horizontal{min-height:32px;max-height:32px;min-width:100px;width:100%}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".profile-section>div p{margin:8px 0}.profile-section>div .bar-total{margin:8px 0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".experience-section>div .company-experience{width:100%;min-height:250px;height:fit-content;display:flex;flex-wrap:wrap;padding:8px 0;border-bottom:1px solid #b71d2b}.experience-section>div .company-experience>*{width:100%;margin:0}.experience-section>div .company-experience .company-name{font-size:20px;width:60%}.experience-section>div .company-experience .company-duration{width:40%;text-align:right}.experience-section>div .company-experience .company-role{color:#f2d090;font-style:italic;font-weight:300;font-size:12px;margin-top:8px}.experience-section>div .company-experience .company-place{font-size:12px;margin-bottom:8px}.experience-section>div .company-experience:nth-child(even){border-bottom-color:#65a698}@media screen and (max-width: 992px){.experience-section>div .company-experience .company-name,.experience-section>div .company-experience .company-duration{width:100%}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".social-section>div{display:flex;flex-wrap:wrap}.social-section>div a.social-network{width:calc(100% - 34px);display:flex;align-items:center;text-decoration:none;padding:16px;margin-top:16px;border:1px solid #fff;border-radius:4px}.social-section>div a.social-network i{font-size:32px;padding-right:32px;padding-left:16px;color:#fff}.social-section>div a.social-network p{margin:0;overflow:hidden;word-break:break-word;color:#fff}.social-section>div a.social-network .network-name{font-size:20px;font-weight:bold;color:#78b6a9}.social-section>div a.social-network .network-username{font-style:italic}.social-section>div a.social-network .network-link{font-size:12px;text-decoration:underline;color:#f2d090}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".education-section>div .education-titles{display:flex;flex-wrap:wrap}.education-section>div .education-titles .education-title{flex:0 calc(50% - 4px);margin:16px 0}.education-section>div .education-titles .education-title p{margin:0}.education-section>div .education-titles .education-title .title-name{font-size:16px}.education-section>div .education-titles .education-title .title-expeditor{color:#f2d090;font-style:italic;font-weight:300}.education-section>div .education-titles .education-title .title-date{color:#78b6a9;font-size:12px}.education-section>div .education-titles .education-title:nth-child(even){display:flex;flex-direction:column;align-items:flex-end;text-align:right;padding-left:4px}.education-section>div .education-titles .education-title:nth-child(odd){padding-right:4px}.education-section>div .education-titles .education-title:nth-child(odd) p{border-right:1px solid #fff}@media screen and (max-width: 768px){.education-section>div .education-titles .education-title{flex:0 100%}.education-section>div .education-titles .education-title:nth-child(odd) p{border-right:0}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#main-cube .cube-container{transform:scale(1);transition:ease-in-out all 1s .25s}#main-cube .cube-container .cube-face{border-radius:16px}#main-cube .initial-transition .cube{transition:ease-in-out all 1s .25s}#main-cube.hidden-cube .cube-container{transform:scale(0) rotateZ(270deg)}#main-cube.hidden-cube .cube-container .cube{transform:rotateY(360deg) !important}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
            var content = __webpack_require__(387);

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

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".info-section{position:fixed;right:32px;bottom:32px;background-color:#f2d090;padding:16px;border-radius:50%;color:#fff;transition:linear all .5s;display:flex;align-items:center}.info-section i{display:flex;align-items:center;justify-content:center;width:32px;height:32px;font-size:32px}.info-section .info-container{max-width:0;max-height:0;padding:0;margin:0;opacity:0;transition:linear all .5s;overflow:hidden}.info-section .info-container p{font-size:0;opacity:0;transition:linear all .5s,linear opacity .5s .5s;text-align:justify}.info-section.info-section-full{border-radius:4px}.info-section.info-section-full .info-container{max-width:300px;max-height:80vh;padding:0 16px;opacity:1;transition:linear all .5s}.info-section.info-section-full .info-container p{font-size:14px;margin:0;opacity:1}.info-section.info-section-full .info-container .info-title{text-decoration:underline;font-size:16px}@media screen and (max-width: 992px){.info-section{right:8px;bottom:8px}.info-section.info-section-full .info-container{max-width:200px}.info-section.info-section-full .info-container p{font-size:12px}.info-section.info-section-full .info-container .info-title{font-size:14px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
            var content = __webpack_require__(391);

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

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fadein{-webkit-animation:fadein 0.5s;-moz-animation:fadein 0.5s;-ms-animation:fadein 0.5s;-o-animation:fadein 0.5s;animation:fadein 0.5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.fadeout{-webkit-animation:fadeout 0.5s;-moz-animation:fadeout 0.5s;-ms-animation:fadeout 0.5s;-o-animation:fadeout 0.5s;animation:fadeout 0.5s;opacity:0}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-ms-keyframes fadeout{from{opacity:1}to{opacity:0}}@-o-keyframes fadeout{from{opacity:1}to{opacity:0}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
            var content = __webpack_require__(393);

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

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{font-family:'Poppins', sans-serif;font-size:14px;margin:0;color:#080808;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow,main #main-container #main-cube .cube-container .cube-face{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.5);box-shadow:0px 0 8px 2px rgba(136,136,136,0.5)}html{background-color:#fafaff}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;overflow:hidden}main #main-container{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 394:
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
var react_router_dom = __webpack_require__(152);

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
var cube = __webpack_require__(362);

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
var hi = __webpack_require__(364);

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
var navbar = __webpack_require__(366);

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
var Icon_icon = __webpack_require__(368);

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
var Button_button = __webpack_require__(370);

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
var section = __webpack_require__(372);

// CONCATENATED MODULE: ./src/components/Section/index.js


/* harmony default export */ var components_Section = (Section_Section);
// EXTERNAL MODULE: ./src/utils/es/education.json
var education = __webpack_require__(140);

// EXTERNAL MODULE: ./src/utils/es/experience.json
var experience = __webpack_require__(141);

// EXTERNAL MODULE: ./src/utils/es/profile.json
var profile = __webpack_require__(142);

// EXTERNAL MODULE: ./src/utils/es/info.json
var info = __webpack_require__(143);

// EXTERNAL MODULE: ./src/utils/es/social.json
var social = __webpack_require__(144);

// CONCATENATED MODULE: ./src/utils/es.js





const translations = {
  education: education,
  experience: experience,
  info: info,
  profile: profile,
  social: social
};
/* harmony default export */ var es = (translations);
// EXTERNAL MODULE: ./src/utils/en/education.json
var en_education = __webpack_require__(145);

// EXTERNAL MODULE: ./src/utils/en/experience.json
var en_experience = __webpack_require__(146);

// EXTERNAL MODULE: ./src/utils/en/info.json
var en_info = __webpack_require__(147);

// EXTERNAL MODULE: ./src/utils/en/profile.json
var en_profile = __webpack_require__(148);

// EXTERNAL MODULE: ./src/utils/en/social.json
var en_social = __webpack_require__(149);

// CONCATENATED MODULE: ./src/utils/en.js





const en_translations = {
  education: en_education,
  experience: en_experience,
  info: en_info,
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
var bar = __webpack_require__(374);

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
var Profile_profile = __webpack_require__(376);

// CONCATENATED MODULE: ./src/components/MainCube/Profile/index.js


/* harmony default export */ var MainCube_Profile = (Profile_Profile);
// CONCATENATED MODULE: ./src/components/MainCube/Experience/Company/Company.jsx



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
/* harmony default export */ var Company_Company = (Company);
// CONCATENATED MODULE: ./src/components/MainCube/Experience/Company/index.js

/* harmony default export */ var Experience_Company = (Company_Company);
// CONCATENATED MODULE: ./src/components/MainCube/Experience/Experience.jsx
function Experience_extends() { Experience_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Experience_extends.apply(this, arguments); }





const companies = [{
  name: 'Wozzo',
  role: translate('experience.wozzo.role'),
  place: 'Palma de Mallorca',
  start: '09/2017',
  end: translate('experience.present'),
  technologies: translate('experience.wozzo.technologies')
}, {
  name: 'Plexus Technologies',
  role: translate('experience.plexus.role'),
  place: 'Palma de Mallorca',
  start: '08/2016',
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
var Experience_experience = __webpack_require__(378);

// CONCATENATED MODULE: ./src/components/MainCube/Experience/index.js


/* harmony default export */ var MainCube_Experience = (Experience_Experience);
// CONCATENATED MODULE: ./src/components/MainCube/Social/Network/Network.jsx




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
/* harmony default export */ var Network_Network = (Network);
// CONCATENATED MODULE: ./src/components/MainCube/Social/Network/index.js

/* harmony default export */ var Social_Network = (Network_Network);
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
var Social_social = __webpack_require__(380);

// CONCATENATED MODULE: ./src/components/MainCube/Social/index.js


/* harmony default export */ var MainCube_Social = (Social_Social);
// CONCATENATED MODULE: ./src/components/MainCube/Education/Title/Title.jsx



const Title = ({
  date,
  expeditor,
  name
}) => /*#__PURE__*/react_default.a.createElement("div", {
  className: "education-title"
}, /*#__PURE__*/react_default.a.createElement("p", {
  className: "title-name"
}, name), /*#__PURE__*/react_default.a.createElement("p", {
  className: "title-expeditor"
}, expeditor), /*#__PURE__*/react_default.a.createElement("p", {
  className: "title-date"
}, date));

Title.propTypes = {
  date: prop_types_default.a.string.isRequired,
  expeditor: prop_types_default.a.string.isRequired,
  name: prop_types_default.a.string.isRequired
};
/* harmony default export */ var Title_Title = (Title);
// CONCATENATED MODULE: ./src/components/MainCube/Education/Title/index.js

/* harmony default export */ var Education_Title = (Title_Title);
// CONCATENATED MODULE: ./src/components/MainCube/Education/Education.jsx
function Education_extends() { Education_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Education_extends.apply(this, arguments); }





const titles = [{
  date: '2006 - 2013',
  expeditor: translate('education.university.expeditor'),
  name: translate('education.university.title')
}, {
  date: '04/2019',
  expeditor: translate('education.react.expeditor'),
  name: translate('education.react.title')
}, {
  date: '06/2017',
  expeditor: translate('education.reactBasic.expeditor'),
  name: translate('education.reactBasic.title')
}, {
  date: '06/2017',
  expeditor: translate('education.angular4.expeditor'),
  name: translate('education.angular4.title')
}, {
  date: '06/2017',
  expeditor: translate('education.typescript.expeditor'),
  name: translate('education.typescript.title')
}, {
  date: '06/2017',
  expeditor: translate('education.jquery.expeditor'),
  name: translate('education.jquery.title')
}, {
  date: '06/2017',
  expeditor: translate('education.bootstrap.expeditor'),
  name: translate('education.bootstrap.title')
}, {
  date: '11/2016',
  expeditor: translate('education.angularjs.expeditor'),
  name: translate('education.angularjs.title')
}, {
  date: '03/2016 - 04/2016',
  expeditor: translate('education.agile.expeditor'),
  name: translate('education.agile.title')
}, {
  date: '06/2015 - 08/2015',
  expeditor: translate('education.android.expeditor'),
  name: translate('education.android.title')
}];

const Education = (_ref) => {
  let rest = Education_extends({}, _ref);

  return /*#__PURE__*/react_default.a.createElement(components_Section, Education_extends({}, rest, {
    title: translate('education.title'),
    className: "education-section"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "education-titles"
  }, titles.map(title => /*#__PURE__*/react_default.a.createElement(Education_Title, Education_extends({
    key: title.name
  }, title)))));
};

/* harmony default export */ var Education_Education = (Education);
// EXTERNAL MODULE: ./src/components/MainCube/Education/education.scss
var Education_education = __webpack_require__(382);

// CONCATENATED MODULE: ./src/components/MainCube/Education/index.js


/* harmony default export */ var MainCube_Education = (Education_Education);
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
    leftContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(MainCube_Education, commonProps),
    frontContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(MainCube_Profile, commonProps),
    rightContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(MainCube_Experience, commonProps),
    backContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(MainCube_Social, commonProps),
    bottomContent: hiddenIntro && /*#__PURE__*/react_default.a.createElement(components_Section, MainCube_extends({}, commonProps, {
      title: "Made by Javi Garc\xEDa Fajardo",
      disabled: true
    }), /*#__PURE__*/react_default.a.createElement("p", null, translate('info.codeIn'), ":"), /*#__PURE__*/react_default.a.createElement("a", {
      target: "_blank",
      href: "https://github.com/JaviGF8/my-cv/",
      rel: "noopener noreferrer"
    }, "https://github.com/JaviGF8/my-cv/")),
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
var mainCube = __webpack_require__(384);

// CONCATENATED MODULE: ./src/components/MainCube/index.js


/* harmony default export */ var components_MainCube = (MainCube_MainCube);
// CONCATENATED MODULE: ./src/components/Info/Info.jsx
function Info_slicedToArray(arr, i) { return Info_arrayWithHoles(arr) || Info_iterableToArrayLimit(arr, i) || Info_unsupportedIterableToArray(arr, i) || Info_nonIterableRest(); }

function Info_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Info_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Info_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Info_arrayLikeToArray(o, minLen); }

function Info_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function Info_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Info_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





const Info = () => {
  const _useState = Object(react["useState"])(false),
        _useState2 = Info_slicedToArray(_useState, 2),
        show = _useState2[0],
        setShow = _useState2[1];

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "info-section shadow".concat(show ? ' info-section-full' : ''),
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, /*#__PURE__*/react_default.a.createElement(components_Icon, {
    icon: "fas fa-info"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "info-container"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "info-title"
  }, translate('info.howToUse')), /*#__PURE__*/react_default.a.createElement("p", null, translate('info.info'))));
};

/* harmony default export */ var Info_Info = (Info);
// EXTERNAL MODULE: ./src/components/Info/info.scss
var Info_info = __webpack_require__(386);

// CONCATENATED MODULE: ./src/components/Info/index.js


/* harmony default export */ var components_Info = (Info_Info);
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
  }), /*#__PURE__*/react_default.a.createElement(components_Info, null), /*#__PURE__*/react_default.a.createElement("div", {
    id: "selected-section"
  })));
};

/* harmony default export */ var pages_Main = (Main);
// CONCATENATED MODULE: ./src/App.jsx




const App = () => /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, /*#__PURE__*/react_default.a.createElement(pages_Main, null));

/* harmony default export */ var src_App = (App);
// EXTERNAL MODULE: ./src/styles/animations.scss
var animations = __webpack_require__(390);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(392);

// CONCATENATED MODULE: ./src/index.js





react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9zZWN0aW9uLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL3NlY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3M/MmM4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvUHJvZmlsZS9wcm9maWxlLnNjc3M/YjBhNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL3Byb2ZpbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL2V4cGVyaWVuY2Uuc2Nzcz85MzFhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvZXhwZXJpZW5jZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9zb2NpYWwuc2Nzcz8wMjEyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9zb2NpYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FZHVjYXRpb24vZWR1Y2F0aW9uLnNjc3M/ZDExZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FZHVjYXRpb24vZWR1Y2F0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvbWFpbkN1YmUuc2Nzcz8yMWM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL21haW5DdWJlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mby9pbmZvLnNjc3M/MDcwYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmZvL2luZm8uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcz8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL0N1YmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvSGkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2xhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9CYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvRXhwZXJpZW5jZS9Db21wYW55L0NvbXBhbnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvQ29tcGFueS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL0V4cGVyaWVuY2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL05ldHdvcmsvTmV0d29yay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL05ldHdvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL1NvY2lhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0VkdWNhdGlvbi9UaXRsZS9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvRWR1Y2F0aW9uL1RpdGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0VkdWNhdGlvbi9FZHVjYXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0VkdWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9NYWluQ3ViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mby9JbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmZvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQ1VCRV9GQUNFUyIsImZyb250IiwiYmFjayIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImlzQXJyb3dMZWZ0IiwiY29kZSIsImtleSIsImtleUNvZGUiLCJpc0Fycm93VXAiLCJpc0Fycm93UmlnaHQiLCJpc0Fycm93RG93biIsIkN1YmUiLCJiYWNrQ29udGVudCIsImJvdHRvbUNvbnRlbnQiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImZhY2UiLCJmcm9udENvbnRlbnQiLCJsZWZ0Q29udGVudCIsInJpZ2h0Q29udGVudCIsInNpemUiLCJ0b3BDb250ZW50Iiwid2l0aFN3aXBlIiwidXNlU3RhdGUiLCJhbmdYIiwic2V0QW5nWCIsImFuZ1kiLCJzZXRBbmdZIiwibW92aW5nIiwic2V0TW92aW5nIiwic3RhcnRYIiwic2V0U3RhcnRYIiwic3RhcnRZIiwic2V0U3RhcnRZIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwidXNlRWZmZWN0IiwieCIsInkiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTW92ZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFgiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFkiLCJkaWZmWCIsImRpZmZZIiwiTWF0aCIsImFicyIsImhhbmRsZU1vdmVtZW50U3RhcnQiLCJ0b3VjaGVzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwibnVtYmVyIiwiZ2V0U2l6ZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImZsb29yIiwid2hpdGVDb250ZW50IiwicHJpbWFyeUNvbnRlbnQiLCJzZWNvbmRhcnlDb250ZW50IiwiYWNjZW50Q29udGVudCIsInVuYW5pbWF0ZWREaXYiLCJjb2xvciIsImN1YmVPcHRpb25zIiwiSGkiLCJvbkhpZGUiLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJzaG93IiwiZ2V0UmFuZG9tQ3ViZSIsInJhbmRvbSIsImZ1bmMiLCJOYXZiYXIiLCJJY29uIiwiaWNvbiIsInJlc3QiLCJCdXR0b24iLCJjaGlsZHJlbiIsInRleHQiLCJTZWN0aW9uIiwib25GdWxsc2NyZWVuIiwib25GdWxsc2NyZWVuT3V0IiwidGl0bGUiLCJmYWRlb3V0Iiwic2V0RmFkZW91dCIsImZ1bGxzY3JlZW4iLCJzZXRGdWxsc2NyZWVuIiwidGFwcGVkIiwic2V0VGFwcGVkIiwiY2xlYXJUYXBwZWQiLCJpc0RvdWJsZVRhcCIsImNsZWFyVGltZW91dCIsImNyZWF0ZVBvcnRhbCIsImJvZHkiLCJ0cmFuc2xhdGlvbnMiLCJlZHVjYXRpb24iLCJleHBlcmllbmNlIiwiaW5mbyIsInByb2ZpbGUiLCJzb2NpYWwiLCJlcyIsImVuIiwiTEFOR19JRFMiLCJlbmdsaXNoIiwic3BhbmlzaCIsInNldExvY2FsZSIsImxhbmciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0TG9jYWxlIiwibGFuZ3VhZ2UiLCJpc1NwYW5pc2giLCJyZXNvbHZlSW5kZXgiLCJzdHIiLCJyZXBsYWNlIiwiYXJyYXkiLCJzcGxpdCIsInRyYW5zbGF0aW9uc0xhbmciLCJpIiwibGVuZ3RoIiwiZWxlbSIsInRyYW5zbGF0ZSIsIkxBTkdVQUdFUyIsIm5hbWUiLCJ2YWx1ZSIsIkJBUl9UWVBFUyIsInByaW1hcnlEYXJrZXIiLCJwcmltYXJ5RGFyayIsInByaW1hcnkiLCJzZWNvbmRhcnlEYXJrZXIiLCJzZWNvbmRhcnlEYXJrIiwic2Vjb25kYXJ5IiwiYWNjZW50RGFya2VyIiwiYWNjZW50RGFyayIsImFjY2VudCIsImdldFRvdGFsIiwidG90YWwiLCJhbW91bnQiLCJnZXRDb2xvciIsIkJhciIsInRvdGFsQW1vdW50IiwidmVydGljYWwiLCJzZXRDb2xvciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwic2V0VG90YWwiLCJuZXd0b3RhbCIsIlByb2ZpbGUiLCJDb21wYW55IiwiZW5kIiwicGxhY2UiLCJyb2xlIiwic3RhcnQiLCJ0ZWNobm9sb2dpZXMiLCJpc1JlcXVpcmVkIiwiY29tcGFuaWVzIiwiRXhwZXJpZW5jZSIsIm1hcCIsImNvbXBhbnkiLCJOZXR3b3JrIiwibGluayIsInVzZXJuYW1lIiwibmV0d29ya3MiLCJTb2NpYWwiLCJuZXQiLCJUaXRsZSIsImRhdGUiLCJleHBlZGl0b3IiLCJ0aXRsZXMiLCJFZHVjYXRpb24iLCJNYWluQ3ViZSIsImhpZGRlbkludHJvIiwiaW5pdGlhbFRyYW5zaXRpb24iLCJzZXRJbml0aWFsVHJhbnNpdGlvbiIsImlzRnVsbHNjcmVlbiIsInNldElzRnVsbHNjcmVlbiIsImNvbW1vblByb3BzIiwiSW5mbyIsInNldFNob3ciLCJNYWluIiwic2V0SGlkZGVuSW50cm8iLCJBcHAiLCJSZWFjdERPTSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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WUQsQ0FkRDs7QUFnQmV3RCxrREFBZixFOzs7OztBQ3BCQTtBQUNBO0FBRWVBLDZEQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxJQUFJLEdBQUcsTUFBTTtBQUFBLG9CQUN1QmxMLHlCQUFRLENBQUMsS0FBRCxDQUQvQjtBQUFBO0FBQUEsUUFDVDBLLFdBRFM7QUFBQSxRQUNJUyxjQURKOztBQUdqQixzQkFDRSx5REFDRTtBQUFLLE1BQUUsRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUM7QUFBbkMsa0JBQ0UsOEJBQUMsaUJBQUQsT0FERixlQUVFLDhCQUFDLGFBQUQ7QUFBSSxVQUFNLEVBQUUsTUFBTUEsY0FBYyxDQUFDLElBQUQ7QUFBaEMsSUFGRixlQUdFLDhCQUFDLG1CQUFEO0FBQVUsZUFBVyxFQUFFVDtBQUF2QixJQUhGLGVBSUUsOEJBQUMsZUFBRCxPQUpGLGVBS0U7QUFBSyxNQUFFLEVBQUM7QUFBUixJQUxGLENBREYsQ0FERjtBQVdELENBZEQ7O0FBZ0JlUSxtREFBZixFOztBQ3RCQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUUsR0FBRyxHQUFHLG1CQUNWLDhCQUFDLHlDQUFELHFCQUNFLDhCQUFDLFVBQUQsT0FERixDQURGOztBQU1lQSwrQ0FBZixFOzs7Ozs7OztBQ1hBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQUMsbUJBQVEsQ0FBQ0MsTUFBVCxlQUFnQiw4QkFBQyxPQUFELE9BQWhCLEVBQXlCMUosUUFBUSxDQUFDMkosY0FBVCxDQUF3QixNQUF4QixDQUF6QixFIiwiZmlsZSI6ImluZGV4X2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MDogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsxNTMsMV0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2N1YmUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1YmUtY29udGFpbmVyIC5jdWJle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zaXRpb246ZWFzZS1pbiBhbGwgLjVzfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNle3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmZ9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2U+KntoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mcm9udHt0cmFuc2Zvcm06cm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtcmlnaHR7dHJhbnNmb3JtOnJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1iYWNre3RyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWxlZnR7dHJhbnNmb3JtOnJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLXRvcHt0cmFuc2Zvcm06cm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWJvdHRvbXt0cmFuc2Zvcm06cm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hpLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC41czt6LWluZGV4OjEwMDF9LmhpLWNvbnRhaW5lciBoMXtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjk1JTtmb250LXNpemU6MjBweH0uaGktY29udGFpbmVyIGgxIHNwYW4ucHJpbWFyeXtjb2xvcjojYjcxZDJiO2ZvbnQtc2l6ZTozMnB4fS5oaS1jb250YWluZXIgaDEgc3Bhbi5wcmltYXJ5IHNwYW57Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6MzAwfS5oaS1jb250YWluZXIgaDEgc3Bhbi5zZWNvbmRhcnl7Y29sb3I6Izc4YjZhOTtmb250LXNpemU6MjRweH0uaGktY29udGFpbmVyIC5oaXtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEyMDBweH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVye2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyPmRpdntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTttYXJnaW46NHB4IDB9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlcj5kaXY+KnttYXJnaW46MCA0cHh9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlciAuYmFja2dyb3VuZHtib3JkZXItcmFkaXVzOjhweDtvdmVyZmxvdzpoaWRkZW59LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlciAud2hpdGUtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlciAucHJpbWFyeS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2I3MWQyYn0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5zZWNvbmRhcnktYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YTl9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlciAuYWNjZW50LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZjJkMDkwfS5oaS1jb250YWluZXIuaGlkZGVue29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS5oaS1jb250YWluZXIuaGlkZGVuICp7cG9pbnRlci1ldmVudHM6bm9uZX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7LmhpLWNvbnRhaW5lciBoMXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibmF2Lm5hdmJhcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjkwMDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJiO2hlaWdodDo2MHB4O3BhZGRpbmc6MCAxNnB4fW5hdi5uYXZiYXIgLmV4cGFuZC1idG57ZGlzcGxheTpub25lfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50e21heC13aWR0aDoxMjAwcHg7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItdGl0bGV7Zm9udC1zaXplOjMycHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojZmZmfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItdGl0bGUgc3Bhbntmb250LXNpemU6MjBweDtmb250LXdlaWdodDozMDB9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZXtmb250LXNpemU6MTZweDtmb250LXdlaWdodDozMDA7Zm9udC1zdHlsZTppdGFsaWN9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZSBzcGFue2NvbG9yOiNlOWJiYmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe25hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50e2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItdGl0bGV7Zm9udC1zaXplOjIwcHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZSBzcGFue2ZvbnQtc2l6ZToxMnB4fW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItc3VidGl0bGV7Zm9udC1zaXplOjEycHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZSBzcGFue2ZvbnQtc2l6ZToxNHB4fX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pY29uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20taWNvbnttYXJnaW46MDtoZWlnaHQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3VzdG9tLWJ0bntwYWRkaW5nOjhweCAxNnB4O2ZvbnQtc2l6ZToxNnB4O2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjowO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJiO3RyYW5zaXRpb246bGluZWFyIGFsbCAuMjVzO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcn0uY3VzdG9tLWJ0bj4qOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi1sZWZ0OjhweH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWN0aW9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24sLmN1YmUtc2VjdGlvbnttYXJnaW46MDtwYWRkaW5nOjMycHg7d2lkdGg6Y2FsYygxMDAlIC0gNjRweCk7aGVpZ2h0OmNhbGMoMTAwJSAtIDY0cHgpO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODtjb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6MTZweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47b3ZlcmZsb3c6aGlkZGVufS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24gYSwuY3ViZS1zZWN0aW9uIGF7Y29sb3I6I2YyZDA5MH0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uICosLmN1YmUtc2VjdGlvbiAqey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uPmRpdiwuY3ViZS1zZWN0aW9uPmRpdnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtvdmVyZmxvdzpoaWRkZW59LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbj5kaXYgaDIsLmN1YmUtc2VjdGlvbj5kaXYgaDJ7bWFyZ2luOjA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3BhZGRpbmctYm90dG9tOjhweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYjcxZDJiO3dpZHRoOjEwMCV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiAuc2VlLW1vcmUtYnRuLC5jdWJlLXNlY3Rpb24gLnNlZS1tb3JlLWJ0bntoZWlnaHQ6MjAlO3dpZHRoOjEwMCU7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXJhZGl1czowfS5jdWJlLXNlY3Rpb24tZnVsbHtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZjtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6OTk5O3RyYW5zaXRpb246bGluZWFyIGFsbCAxcztib3JkZXItcmFkaXVzOjA7b3ZlcmZsb3c6YXV0b30uY3ViZS1zZWN0aW9uLWZ1bGw+ZGl2e21heC13aWR0aDoxMjAwcHg7b3ZlcmZsb3c6dmlzaWJsZX0uY3ViZS1zZWN0aW9uLWZ1bGw+ZGl2IC5jbG9zZS1idG57cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTZweDt0b3A6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDh9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXsuY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uLC5jdWJlLXNlY3Rpb257d2lkdGg6Y2FsYygxMDAlIC0gMzJweCk7aGVpZ2h0OmNhbGMoMTAwJSAtIDMycHgpO3BhZGRpbmc6MTZweH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5iYXItdG90YWx7YmFja2dyb3VuZC1jb2xvcjpzaWx2ZXI7Ym9yZGVyLXJhZGl1czo0cHg7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleH0uYmFyLXRvdGFsIC5iYXJ7cGFkZGluZzo0cHggMDt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9LmJhci10b3RhbCAuYmFyPnNwYW57bWFyZ2luLWxlZnQ6OHB4O3doaXRlLXNwYWNlOm5vd3JhcH0uYmFyLXRvdGFsIC5iYXIucHJpbWFyeS1kYXJrZXJ7YmFja2dyb3VuZC1jb2xvcjojOTAwYTEwfS5iYXItdG90YWwgLmJhci5wcmltYXJ5LWRhcmt7YmFja2dyb3VuZC1jb2xvcjojYTcxNTIwfS5iYXItdG90YWwgLmJhci5wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6I2I3MWQyYn0uYmFyLXRvdGFsIC5iYXIuc2Vjb25kYXJ5LWRhcmtlcntiYWNrZ3JvdW5kLWNvbG9yOiM0ODhlN2V9LmJhci10b3RhbCAuYmFyLnNlY29uZGFyeS1kYXJre2JhY2tncm91bmQtY29sb3I6IzY1YTY5OH0uYmFyLXRvdGFsIC5iYXIuc2Vjb25kYXJ5e2JhY2tncm91bmQtY29sb3I6Izc4YjZhOX0uYmFyLXRvdGFsIC5iYXIuYWNjZW50LWRhcmtlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGIzNjF9LmJhci10b3RhbCAuYmFyLmFjY2VudC1kYXJre2JhY2tncm91bmQtY29sb3I6I2VlYzQ3ZH0uYmFyLXRvdGFsIC5iYXIuYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2YyZDA5MH0uYmFyLXRvdGFsLnZlcnRpY2Fse21pbi1oZWlnaHQ6MTAwcHg7bWluLXdpZHRoOjMycHg7bWF4LXdpZHRoOjMycHg7aGVpZ2h0OjEwMCU7YWxpZ24taXRlbXM6ZmxleC1lbmR9LmJhci10b3RhbC52ZXJ0aWNhbCAuYmFyPnNwYW57d3JpdGluZy1tb2RlOnRiLXJsO3RyYW5zZm9ybTpyb3RhdGUoLTE4MGRlZyl9LmJhci10b3RhbC5ob3Jpem9udGFse21pbi1oZWlnaHQ6MzJweDttYXgtaGVpZ2h0OjMycHg7bWluLXdpZHRoOjEwMHB4O3dpZHRoOjEwMCV9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZmlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZmlsZS1zZWN0aW9uPmRpdiBwe21hcmdpbjo4cHggMH0ucHJvZmlsZS1zZWN0aW9uPmRpdiAuYmFyLXRvdGFse21hcmdpbjo4cHggMH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9leHBlcmllbmNlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2V7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjI1MHB4O2hlaWdodDpmaXQtY29udGVudDtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7cGFkZGluZzo4cHggMDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYjcxZDJifS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2U+Knt3aWR0aDoxMDAlO21hcmdpbjowfS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktbmFtZXtmb250LXNpemU6MjBweDt3aWR0aDo2MCV9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1kdXJhdGlvbnt3aWR0aDo0MCU7dGV4dC1hbGlnbjpyaWdodH0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LXJvbGV7Y29sb3I6I2YyZDA5MDtmb250LXN0eWxlOml0YWxpYztmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjEycHg7bWFyZ2luLXRvcDo4cHh9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1wbGFjZXtmb250LXNpemU6MTJweDttYXJnaW4tYm90dG9tOjhweH0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlOm50aC1jaGlsZChldmVuKXtib3JkZXItYm90dG9tLWNvbG9yOiM2NWE2OTh9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpey5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktbmFtZSwuZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LWR1cmF0aW9ue3dpZHRoOjEwMCV9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NvY2lhbC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc29jaWFsLXNlY3Rpb24+ZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcH0uc29jaWFsLXNlY3Rpb24+ZGl2IGEuc29jaWFsLW5ldHdvcmt7d2lkdGg6Y2FsYygxMDAlIC0gMzRweCk7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTtwYWRkaW5nOjE2cHg7bWFyZ2luLXRvcDoxNnB4O2JvcmRlcjoxcHggc29saWQgI2ZmZjtib3JkZXItcmFkaXVzOjRweH0uc29jaWFsLXNlY3Rpb24+ZGl2IGEuc29jaWFsLW5ldHdvcmsgaXtmb250LXNpemU6MzJweDtwYWRkaW5nLXJpZ2h0OjMycHg7cGFkZGluZy1sZWZ0OjE2cHg7Y29sb3I6I2ZmZn0uc29jaWFsLXNlY3Rpb24+ZGl2IGEuc29jaWFsLW5ldHdvcmsgcHttYXJnaW46MDtvdmVyZmxvdzpoaWRkZW47d29yZC1icmVhazpicmVhay13b3JkO2NvbG9yOiNmZmZ9LnNvY2lhbC1zZWN0aW9uPmRpdiBhLnNvY2lhbC1uZXR3b3JrIC5uZXR3b3JrLW5hbWV7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojNzhiNmE5fS5zb2NpYWwtc2VjdGlvbj5kaXYgYS5zb2NpYWwtbmV0d29yayAubmV0d29yay11c2VybmFtZXtmb250LXN0eWxlOml0YWxpY30uc29jaWFsLXNlY3Rpb24+ZGl2IGEuc29jaWFsLW5ldHdvcmsgLm5ldHdvcmstbGlua3tmb250LXNpemU6MTJweDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2NvbG9yOiNmMmQwOTB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWR1Y2F0aW9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXN7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZXtmbGV4OjAgY2FsYyg1MCUgLSA0cHgpO21hcmdpbjoxNnB4IDB9LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxlIHB7bWFyZ2luOjB9LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxlIC50aXRsZS1uYW1le2ZvbnQtc2l6ZToxNnB4fS5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZSAudGl0bGUtZXhwZWRpdG9ye2NvbG9yOiNmMmQwOTA7Zm9udC1zdHlsZTppdGFsaWM7Zm9udC13ZWlnaHQ6MzAwfS5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZSAudGl0bGUtZGF0ZXtjb2xvcjojNzhiNmE5O2ZvbnQtc2l6ZToxMnB4fS5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZTpudGgtY2hpbGQoZXZlbil7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LWVuZDt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctbGVmdDo0cHh9LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxlOm50aC1jaGlsZChvZGQpe3BhZGRpbmctcmlnaHQ6NHB4fS5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZTpudGgtY2hpbGQob2RkKSBwe2JvcmRlci1yaWdodDoxcHggc29saWQgI2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxle2ZsZXg6MCAxMDAlfS5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZTpudGgtY2hpbGQob2RkKSBwe2JvcmRlci1yaWdodDowfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluQ3ViZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lcnt0cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNpdGlvbjplYXNlLWluLW91dCBhbGwgMXMgLjI1c30jbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZS1mYWNle2JvcmRlci1yYWRpdXM6MTZweH0jbWFpbi1jdWJlIC5pbml0aWFsLXRyYW5zaXRpb24gLmN1YmV7dHJhbnNpdGlvbjplYXNlLWluLW91dCBhbGwgMXMgLjI1c30jbWFpbi1jdWJlLmhpZGRlbi1jdWJlIC5jdWJlLWNvbnRhaW5lcnt0cmFuc2Zvcm06c2NhbGUoMCkgcm90YXRlWigyNzBkZWcpfSNtYWluLWN1YmUuaGlkZGVuLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJle3RyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZykgIWltcG9ydGFudH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmZvLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvLXNlY3Rpb257cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MzJweDtib3R0b206MzJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMmQwOTA7cGFkZGluZzoxNnB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOiNmZmY7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC41cztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5pbmZvLXNlY3Rpb24gaXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtmb250LXNpemU6MzJweH0uaW5mby1zZWN0aW9uIC5pbmZvLWNvbnRhaW5lcnttYXgtd2lkdGg6MDttYXgtaGVpZ2h0OjA7cGFkZGluZzowO21hcmdpbjowO29wYWNpdHk6MDt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO292ZXJmbG93OmhpZGRlbn0uaW5mby1zZWN0aW9uIC5pbmZvLWNvbnRhaW5lciBwe2ZvbnQtc2l6ZTowO29wYWNpdHk6MDt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzLGxpbmVhciBvcGFjaXR5IC41cyAuNXM7dGV4dC1hbGlnbjpqdXN0aWZ5fS5pbmZvLXNlY3Rpb24uaW5mby1zZWN0aW9uLWZ1bGx7Ym9yZGVyLXJhZGl1czo0cHh9LmluZm8tc2VjdGlvbi5pbmZvLXNlY3Rpb24tZnVsbCAuaW5mby1jb250YWluZXJ7bWF4LXdpZHRoOjMwMHB4O21heC1oZWlnaHQ6ODB2aDtwYWRkaW5nOjAgMTZweDtvcGFjaXR5OjE7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC41c30uaW5mby1zZWN0aW9uLmluZm8tc2VjdGlvbi1mdWxsIC5pbmZvLWNvbnRhaW5lciBwe2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowO29wYWNpdHk6MX0uaW5mby1zZWN0aW9uLmluZm8tc2VjdGlvbi1mdWxsIC5pbmZvLWNvbnRhaW5lciAuaW5mby10aXRsZXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2ZvbnQtc2l6ZToxNnB4fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXsuaW5mby1zZWN0aW9ue3JpZ2h0OjhweDtib3R0b206OHB4fS5pbmZvLXNlY3Rpb24uaW5mby1zZWN0aW9uLWZ1bGwgLmluZm8tY29udGFpbmVye21heC13aWR0aDoyMDBweH0uaW5mby1zZWN0aW9uLmluZm8tc2VjdGlvbi1mdWxsIC5pbmZvLWNvbnRhaW5lciBwe2ZvbnQtc2l6ZToxMnB4fS5pbmZvLXNlY3Rpb24uaW5mby1zZWN0aW9uLWZ1bGwgLmluZm8tY29udGFpbmVyIC5pbmZvLXRpdGxle2ZvbnQtc2l6ZToxNHB4fX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYWRlaW57LXdlYmtpdC1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1vei1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1zLWFuaW1hdGlvbjpmYWRlaW4gMC41czstby1hbmltYXRpb246ZmFkZWluIDAuNXM7YW5pbWF0aW9uOmZhZGVpbiAwLjVzfUBrZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tb3ota2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW1zLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW8ta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fS5mYWRlb3V0ey13ZWJraXQtYW5pbWF0aW9uOmZhZGVvdXQgMC41czstbW96LWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7LW1zLWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7LW8tYW5pbWF0aW9uOmZhZGVvdXQgMC41czthbmltYXRpb246ZmFkZW91dCAwLjVzO29wYWNpdHk6MH1Aa2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALW1vei1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC1tcy1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtby1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7Zm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowO2NvbG9yOiMwODA4MDg7LXdlYmtpdC1mb250LXNtb290aGluZzpzdWJwaXhlbC1hbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzphdXRvfS5zaGFkb3csbWFpbiAjbWFpbi1jb250YWluZXIgI21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZXstd2Via2l0LWJveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSk7LW1vei1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpO2JveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSl9aHRtbHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmZ9bWFpbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbn1tYWluICNtYWluLWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IENVQkVfRkFDRVMgPSB7XG4gIGZyb250OiAnZnJvbnQnLFxuICBiYWNrOiAnYmFjaycsXG4gIGxlZnQ6ICdsZWZ0JyxcbiAgcmlnaHQ6ICdyaWdodCcsXG4gIHRvcDogJ3RvcCcsXG4gIGJvdHRvbTogJ2JvdHRvbScsXG59O1xuXG5jb25zdCBpc0Fycm93TGVmdCA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiAzNyA9PT0ga2V5Q29kZSB8fCAnQXJyb3dMZWZ0JyA9PT0gY29kZSB8fCAnQXJyb3dMZWZ0JyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd1VwID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM4ID09PSBrZXlDb2RlIHx8ICdBcnJvd1VwJyA9PT0gY29kZSB8fCAnQXJyb3dVcCcgPT09IGtleTtcbmNvbnN0IGlzQXJyb3dSaWdodCA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiAzOSA9PT0ga2V5Q29kZSB8fCAnQXJyb3dSaWdodCcgPT09IGNvZGUgfHwgJ0FyclJpZ2h0JyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd0Rvd24gPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gNDAgPT09IGtleUNvZGUgfHwgJ0Fycm93RG93bicgPT09IGNvZGUgfHwgJ0Fycm93RG93bicgPT09IGtleTtcblxuY29uc3QgQ3ViZSA9ICh7XG4gIGJhY2tDb250ZW50LFxuICBib3R0b21Db250ZW50LFxuICBjbGFzc05hbWUsXG4gIGRpc2FibGVkLFxuICBmYWNlLFxuICBmcm9udENvbnRlbnQsXG4gIGxlZnRDb250ZW50LFxuICByaWdodENvbnRlbnQsXG4gIHNpemUsXG4gIHRvcENvbnRlbnQsXG4gIHdpdGhTd2lwZSxcbn0pID0+IHtcbiAgY29uc3QgWyBhbmdYLCBzZXRBbmdYIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBhbmdZLCBzZXRBbmdZIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBtb3ZpbmcsIHNldE1vdmluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIHN0YXJ0WCwgc2V0U3RhcnRYIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgWyBzdGFydFksIHNldFN0YXJ0WSBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgIGlmICghbW92aW5nICYmIGlzQXJyb3dMZWZ0KGV2ZW50KSkge1xuICAgICAgc2V0QW5nWShhbmdZICsgOTApO1xuICAgIH0gZWxzZSBpZiAoIW1vdmluZyAmJiBpc0Fycm93VXAoZXZlbnQpKSB7XG4gICAgICBzZXRBbmdYKGFuZ1ggLSA5MCk7XG4gICAgfSBlbHNlIGlmICghbW92aW5nICYmIGlzQXJyb3dSaWdodChldmVudCkpIHtcbiAgICAgIHNldEFuZ1koYW5nWSAtIDkwKTtcbiAgICB9IGVsc2UgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd0Rvd24oZXZlbnQpKSB7XG4gICAgICBzZXRBbmdYKGFuZ1ggKyA5MCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHggPSAwO1xuICAgIGxldCB5ID0gMDtcblxuICAgIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmZyb250KSB7XG4gICAgICB5ID0gMDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuYmFjaykge1xuICAgICAgeSA9IC0xODA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmxlZnQpIHtcbiAgICAgIHkgPSAtOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLnJpZ2h0KSB7XG4gICAgICB5ID0gOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLnRvcCkge1xuICAgICAgeCA9IC05MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuYm90dG9tKSB7XG4gICAgICB4ID0gOTA7XG4gICAgfVxuXG4gICAgc2V0QW5nWCh4KTtcbiAgICBzZXRBbmdZKHkpO1xuICB9LCBbIGZhY2UgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGFydFgobnVsbCk7XG4gICAgc2V0U3RhcnRZKG51bGwpO1xuICAgIHNldE1vdmluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldE1vdmluZyhmYWxzZSksIDUwMCk7XG4gIH0sIFsgYW5nWCwgYW5nWSBdKTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFkaXNhYmxlZCAmJiAhbW92aW5nICYmIChzdGFydFggfHwgc3RhcnRZKSkge1xuICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50Py5jaGFuZ2VkVG91Y2hlcz8uWzBdPy5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFg7XG4gICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQ/LmNoYW5nZWRUb3VjaGVzPy5bMF0/LmNsaWVudFkgfHwgZXZlbnQuY2xpZW50WTtcblxuICAgICAgY29uc3QgZGlmZlggPSBjbGllbnRYIC0gc3RhcnRYO1xuICAgICAgY29uc3QgZGlmZlkgPSBjbGllbnRZIC0gc3RhcnRZO1xuXG4gICAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWCkpIHtcbiAgICAgICAgLy8gaG9yaXpvbnRhbCBzd2lwZVxuICAgICAgICBzZXRBbmdZKDAgPCBkaWZmWCA/IGFuZ1kgKyA5MCA6IGFuZ1kgLSA5MCk7XG4gICAgICB9XG4gICAgICBpZiAoNTAgPCBNYXRoLmFicyhkaWZmWSkpIHtcbiAgICAgICAgLy8gdmVydGljYWwgc3dpcGVcbiAgICAgICAgc2V0QW5nWCgwIDwgZGlmZlkgPyBhbmdYIC0gOTAgOiBhbmdYICsgOTApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3ZlbWVudFN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2xpZW50WCA9IGV2ZW50Py50b3VjaGVzPy5bMF0/LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WDtcbiAgICBjb25zdCBjbGllbnRZID0gZXZlbnQ/LnRvdWNoZXM/LlswXT8uY2xpZW50WSB8fCBldmVudC5jbGllbnRZO1xuXG4gICAgc2V0U3RhcnRYKGNsaWVudFgpO1xuICAgIHNldFN0YXJ0WShjbGllbnRZKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcblxuICAgIGlmICh3aXRoU3dpcGUpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3ZlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3ZlbWVudCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjdWJlLWNvbnRhaW5lciR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBlcnNwZWN0aXZlOiBzaXplICogMyxcbiAgICAgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjdWJlXCJcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWigtJHtzaXplIC8gMn1weCkgcm90YXRlWCgke2FuZ1h9ZGVnKSByb3RhdGVZKCR7YW5nWX1kZWcpYCB9fVxuICAgICAgICBvbk1vdXNlRG93bj17d2l0aFN3aXBlICYmICFkaXNhYmxlZCA/IGhhbmRsZU1vdmVtZW50U3RhcnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uTW91c2VVcD17d2l0aFN3aXBlICYmICFkaXNhYmxlZCA/IGhhbmRsZU1vdmVtZW50IDogdW5kZWZpbmVkfVxuICAgICAgICBvblRvdWNoRW5kPXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uVG91Y2hTdGFydD17d2l0aFN3aXBlICYmICFkaXNhYmxlZCA/IGhhbmRsZU1vdmVtZW50U3RhcnQgOiB1bmRlZmluZWR9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtZnJvbnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7ZnJvbnRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWJhY2tcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVooMTgwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7YmFja0NvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtcmlnaHRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3JpZ2h0Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1sZWZ0XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7bGVmdENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtdG9wXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHt0b3BDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWJvdHRvbVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2JvdHRvbUNvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DdWJlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFja0NvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgYm90dG9tQ29udGVudDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmYWNlOiBDVUJFX0ZBQ0VTLmZyb250LFxuICBmcm9udENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgbGVmdENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgcmlnaHRDb250ZW50OiB1bmRlZmluZWQsXG4gIHNpemU6IDE1MCxcbiAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICB3aXRoU3dpcGU6IGZhbHNlLFxufTtcblxuQ3ViZS5wcm9wVHlwZXMgPSB7XG4gIGJhY2tDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgYm90dG9tQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBmYWNlOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhDVUJFX0ZBQ0VTKSksXG4gIGZyb250Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGxlZnRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgcmlnaHRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgdG9wQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHdpdGhTd2lwZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIiwiaW1wb3J0IEN1YmUgZnJvbSAnLi9DdWJlJztcbmltcG9ydCAnLi9jdWJlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ3ViZSBmcm9tICcuLi9DdWJlJztcbmltcG9ydCB7IENVQkVfRkFDRVMgfSBmcm9tICcuLi9DdWJlL0N1YmUnO1xuXG5jb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICBjb25zdCB7IGlubmVySGVpZ2h0LCBpbm5lcldpZHRoIH0gPSB3aW5kb3c7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoKChpbm5lcldpZHRoID4gaW5uZXJIZWlnaHQgPyBpbm5lckhlaWdodCA6IGlubmVyV2lkdGgpICogMC43KSAvIDEwKTtcbn07XG5cbmNvbnN0IHdoaXRlQ29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtYmFja2dyb3VuZCBiYWNrZ3JvdW5kXCIgLz47XG5jb25zdCBwcmltYXJ5Q29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwicHJpbWFyeS1iYWNrZ3JvdW5kIGJhY2tncm91bmRcIiAvPjtcbmNvbnN0IHNlY29uZGFyeUNvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZGFyeS1iYWNrZ3JvdW5kIGJhY2tncm91bmRcIiAvPjtcbmNvbnN0IGFjY2VudENvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImFjY2VudC1iYWNrZ3JvdW5kIGJhY2tncm91bmRcIiAvPjtcbmNvbnN0IHNpemUgPSBnZXRTaXplKCk7XG5jb25zdCB1bmFuaW1hdGVkRGl2ID0gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplLCBjb2xvcjogJ2JsYWNrJyB9fSAvPjtcblxuY29uc3QgY3ViZU9wdGlvbnMgPSB7XG4gIGJvdHRvbUNvbnRlbnQ6IHdoaXRlQ29udGVudCxcbiAgbGVmdENvbnRlbnQ6IHByaW1hcnlDb250ZW50LFxuICByaWdodENvbnRlbnQ6IHNlY29uZGFyeUNvbnRlbnQsXG4gIHRvcENvbnRlbnQ6IGFjY2VudENvbnRlbnQsXG59O1xuXG5jb25zdCBIaSA9ICh7IG9uSGlkZSB9KSA9PiB7XG4gIGNvbnN0IFsgYW5pbWF0aW9uLCBzZXRBbmltYXRpb24gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBoaWRkZW4sIHNldEhpZGRlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QW5pbWF0aW9uKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRBbmltYXRpb24oZmFsc2UpLCAyMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEhpZGRlbih0cnVlKSwgMjUwMCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoaWRkZW4gJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uSGlkZSkge1xuICAgICAgb25IaWRlKCk7XG4gICAgfVxuICB9LCBbIGhpZGRlbiBdKTtcblxuICBjb25zdCBzaG93ID0gYW5pbWF0aW9uICYmICFoaWRkZW47XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ3ViZSA9ICgpID0+IHtcbiAgICBsZXQgZmFjZSA9IENVQkVfRkFDRVMuZnJvbnQ7XG5cbiAgICBpZiAoc2hvdykge1xuICAgICAgY29uc3QgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG5cbiAgICAgIGZhY2UgPSBbIENVQkVfRkFDRVMuYm90dG9tLCBDVUJFX0ZBQ0VTLmxlZnQsIENVQkVfRkFDRVMucmlnaHQsIENVQkVfRkFDRVMudG9wIF1bbnVtYmVyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gPEN1YmUgc2l6ZT17c2l6ZX0gZmFjZT17ZmFjZX0gey4uLmN1YmVPcHRpb25zfSAvPjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgaGktY29udGFpbmVyJHtoaWRkZW4gPyAnIGhpZGRlbicgOiAnJ31gfT5cbiAgICAgIDxoMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpbWFyeVwiPlxuICAgICAgICAgIE15IEM8c3Bhbj51PC9zcGFuPlY8c3Bhbj5lPC9zcGFuPlxuICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgYnkgPHNwYW4gY2xhc3NOYW1lPVwic2Vjb25kYXJ5XCI+SmF2aSBHYXJjw61hIEZhamFyZG88L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5IaS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uSGlkZTogdW5kZWZpbmVkLFxufTtcblxuSGkucHJvcFR5cGVzID0ge1xuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGk7XG4iLCJpbXBvcnQgSGkgZnJvbSAnLi9IaSc7XG5pbXBvcnQgJy4vaGkuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEhpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4gKFxuICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBzaGFkb3dcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci10aXRsZVwiPlxuICAgICAgICBNeSBDPHNwYW4+dTwvc3Bhbj5WPHNwYW4+ZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3VidGl0bGVcIj5cbiAgICAgICAgYnkgPHNwYW4+SmF2aSBHYXJjw61hIEZhamFyZG88L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcbmltcG9ydCAnLi9uYXZiYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBJY29uID0gKHsgaWNvbiwgLi4ucmVzdCB9KSA9PiA8aSB7Li4ucmVzdH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPXtpY29ufSAvPjtcblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb246IHVuZGVmaW5lZCxcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgJy4vaWNvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGljb24sIHRleHQsIC4uLnJlc3QgfSkgPT4gKFxuICA8YnV0dG9uIGNsYXNzTmFtZT17YGN1c3RvbS1idG4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9IHR5cGU9XCJidXR0b25cIiB7Li4ucmVzdH0+XG4gICAge2ljb24gJiYgPEljb24gaWNvbj17aWNvbn0gLz59XG4gICAge3RleHQgJiYgPHNwYW4+e3RleHR9PC9zcGFuPn1cbiAgICB7Y2hpbGRyZW59XG4gIDwvYnV0dG9uPlxuKTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkLFxufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgb25GdWxsc2NyZWVuLCBvbkZ1bGxzY3JlZW5PdXQsIHRpdGxlIH0pID0+IHtcbiAgY29uc3QgWyBmYWRlb3V0LCBzZXRGYWRlb3V0IF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgZnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIHRhcHBlZCwgc2V0VGFwcGVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZmFkZW91dCAmJiBmdWxsc2NyZWVuKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZ1bGxzY3JlZW4oZmFsc2UpLCA0MDApO1xuICAgIH1cbiAgfSwgWyBmYWRlb3V0IF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFmdWxsc2NyZWVuICYmIGZhZGVvdXQpIHtcbiAgICAgIHNldEZhZGVvdXQoZmFsc2UpO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBvbkZ1bGxzY3JlZW5PdXQpIHtcbiAgICAgICAgb25GdWxsc2NyZWVuT3V0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmdWxsc2NyZWVuICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBvbkZ1bGxzY3JlZW4pIHtcbiAgICAgIG9uRnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfSwgWyBmdWxsc2NyZWVuIF0pO1xuICBjb25zdCBjbGVhclRhcHBlZCA9ICgpID0+IHNldFRhcHBlZChmYWxzZSk7XG5cbiAgY29uc3QgaXNEb3VibGVUYXAgPSAoKSA9PiB7XG4gICAgaWYgKHRhcHBlZCkge1xuICAgICAgc2V0RnVsbHNjcmVlbih0cnVlKTtcbiAgICAgIGNsZWFyVGltZW91dChjbGVhclRhcHBlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRhcHBlZCh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoY2xlYXJUYXBwZWQsIDMwMCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBmdWxsc2NyZWVuID8gKFxuICAgIGNyZWF0ZVBvcnRhbChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY3ViZS1zZWN0aW9uIGN1YmUtc2VjdGlvbi1mdWxsICR7ZmFkZW91dCA/ICdmYWRlb3V0JyA6ICdmYWRlaW4nfSR7XG4gICAgICAgICAgY2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJydcbiAgICAgICAgfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1YmUtc2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICB7dGl0bGUgJiYgPGgyPnt0aXRsZX08L2gyPn1cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZS1idG5cIlxuICAgICAgICAgICAgaWNvbj1cImZhcyBmYS10aW1lc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGYWRlb3V0KHRydWUpfVxuICAgICAgICAgICAgb25Ub3VjaEVuZD17KCkgPT4gc2V0RmFkZW91dCh0cnVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4sXG4gICAgICBkb2N1bWVudC5ib2R5LFxuICAgIClcbiAgKSA6IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjdWJlLXNlY3Rpb24gZmFkZWluJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfVxuICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4gIWRpc2FibGVkICYmIHNldEZ1bGxzY3JlZW4odHJ1ZSl9XG4gICAgICBvblRvdWNoRW5kPXtpc0RvdWJsZVRhcH0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7dGl0bGUgJiYgPGgyPnt0aXRsZX08L2gyPn1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPEJ1dHRvbiBjbGFzc05hbWU9XCJzZWUtbW9yZS1idG5cIiBpY29uPVwiZmFzIGZhLXBsdXNcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsc2NyZWVuKHRydWUpfSAvPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBvbkZ1bGxzY3JlZW46IHVuZGVmaW5lZCxcbiAgb25GdWxsc2NyZWVuT3V0OiB1bmRlZmluZWQsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG59O1xuXG5TZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25GdWxsc2NyZWVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25GdWxsc2NyZWVuT3V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCAnLi9zZWN0aW9uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IGVkdWNhdGlvbiBmcm9tICcuL2VzL2VkdWNhdGlvbi5qc29uJztcbmltcG9ydCBleHBlcmllbmNlIGZyb20gJy4vZXMvZXhwZXJpZW5jZS5qc29uJztcbmltcG9ydCBwcm9maWxlIGZyb20gJy4vZXMvcHJvZmlsZS5qc29uJztcbmltcG9ydCBpbmZvIGZyb20gJy4vZXMvaW5mby5qc29uJztcbmltcG9ydCBzb2NpYWwgZnJvbSAnLi9lcy9zb2NpYWwuanNvbic7XG5cbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcbiAgZWR1Y2F0aW9uLFxuICBleHBlcmllbmNlLFxuICBpbmZvLFxuICBwcm9maWxlLFxuICBzb2NpYWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGlvbnM7XG4iLCJpbXBvcnQgZWR1Y2F0aW9uIGZyb20gJy4vZW4vZWR1Y2F0aW9uLmpzb24nO1xuaW1wb3J0IGV4cGVyaWVuY2UgZnJvbSAnLi9lbi9leHBlcmllbmNlLmpzb24nO1xuaW1wb3J0IGluZm8gZnJvbSAnLi9lbi9pbmZvLmpzb24nO1xuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi9lbi9wcm9maWxlLmpzb24nO1xuaW1wb3J0IHNvY2lhbCBmcm9tICcuL2VuL3NvY2lhbC5qc29uJztcblxuY29uc3QgdHJhbnNsYXRpb25zID0ge1xuICBlZHVjYXRpb24sXG4gIGV4cGVyaWVuY2UsXG4gIGluZm8sXG4gIHByb2ZpbGUsXG4gIHNvY2lhbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0aW9ucztcbiIsImltcG9ydCBlcyBmcm9tICcuL2VzJztcbmltcG9ydCBlbiBmcm9tICcuL2VuJztcblxuY29uc3QgdHJhbnNsYXRpb25zID0geyBlcywgZW4gfTtcblxuZXhwb3J0IGNvbnN0IExBTkdfSURTID0ge1xuICBlbmdsaXNoOiAnZW4nLFxuICBzcGFuaXNoOiAnZXMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNldExvY2FsZSA9IChsYW5nKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIGxhbmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExvY2FsZSA9ICgpID0+IHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UubGFuZ3VhZ2UpIHtcbiAgICByZXR1cm4gTEFOR19JRFMuc3BhbmlzaDtcbiAgfVxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmxhbmd1YWdlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzU3BhbmlzaCA9ICgpID0+IExBTkdfSURTLnNwYW5pc2ggPT09IGdldExvY2FsZSgpO1xuXG4vKipcbiAqIFJlc29sdmVzIGEgc3RyaW5nICdpbmRleCcgZm9yIHRoZSBKYXZhU2NyaXB0IE9iamVjdFxuICovXG5jb25zdCByZXNvbHZlSW5kZXggPSAoc3RyKSA9PiB7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cXFsoXFx3KylcXF0vZywgJy4kMScpOyAvLyBjb252ZXJ0IGluZGV4ZXMgdG8gcHJvcGVydGllc1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXlxcLi8sICcnKTsgLy8gc3RyaXAgYSBsZWFkaW5nIGRvdFxuICBjb25zdCBhcnJheSA9IHN0ci5zcGxpdCgnLicpO1xuXG4gIGxldCB0cmFuc2xhdGlvbnNMYW5nID0gdHJhbnNsYXRpb25zW2dldExvY2FsZSgpXTtcblxuICBmb3IgKGxldCBpID0gMCwgeyBsZW5ndGggfSA9IGFycmF5OyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBlbGVtID0gYXJyYXlbaV07XG4gICAgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgdHJhbnNsYXRpb25zTGFuZyAmJiBlbGVtIGluIHRyYW5zbGF0aW9uc0xhbmcpIHtcbiAgICAgIHRyYW5zbGF0aW9uc0xhbmcgPSB0cmFuc2xhdGlvbnNMYW5nW2VsZW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRyYW5zbGF0aW9uc0xhbmc7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlID0gKGtleSkgPT4gcmVzb2x2ZUluZGV4KGtleSk7XG5cbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSBbXG4gIHsgbmFtZTogdHJhbnNsYXRlKCdsYW5ndWFnZS5lcycpLCB2YWx1ZTogJ2VzJyB9LFxuICB7IG5hbWU6IHRyYW5zbGF0ZSgnbGFuZ3VhZ2UuZW4nKSwgdmFsdWU6ICdlbicgfSxcbl07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEJBUl9UWVBFUyA9IHtcbiAgcHJpbWFyeURhcmtlcjogJ3ByaW1hcnktZGFya2VyJyxcbiAgcHJpbWFyeURhcms6ICdwcmltYXJ5LWRhcmsnLFxuICBwcmltYXJ5OiAncHJpbWFyeScsXG4gIHNlY29uZGFyeURhcmtlcjogJ3NlY29uZGFyeS1kYXJrZXInLFxuICBzZWNvbmRhcnlEYXJrOiAnc2Vjb25kYXJ5LWRhcmsnLFxuICBzZWNvbmRhcnk6ICdzZWNvbmRhcnknLFxuICBhY2NlbnREYXJrZXI6ICdhY2NlbnQtZGFya2VyJyxcbiAgYWNjZW50RGFyazogJ2FjY2VudC1kYXJrJyxcbiAgYWNjZW50OiAnYWNjZW50Jyxcbn07XG5cbmNvbnN0IGdldFRvdGFsID0gKHRvdGFsLCBhbW91bnQpID0+IChhbW91bnQgKiAxMDApIC8gdG90YWw7XG5jb25zdCBnZXRDb2xvciA9ICh0b3RhbCkgPT4ge1xuICBpZiAoMTAwID09PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMucHJpbWFyeURhcmtlcjtcbiAgfVxuICBpZiAoOTAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnByaW1hcnlEYXJrO1xuICB9XG4gIGlmICg3NSA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMucHJpbWFyeTtcbiAgfVxuICBpZiAoNjAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnNlY29uZGFyeURhcmtlcjtcbiAgfVxuICBpZiAoNTUgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnNlY29uZGFyeURhcms7XG4gIH1cbiAgaWYgKDQwIDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5zZWNvbmRhcnk7XG4gIH1cbiAgaWYgKDI1IDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5hY2NlbnREYXJrZXI7XG4gIH1cbiAgaWYgKDEwIDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5hY2NlbnREYXJrO1xuICB9XG4gIHJldHVybiBCQVJfVFlQRVMuYWNjZW50O1xufTtcblxuY29uc3QgQmFyID0gKHsgYW1vdW50LCBjbGFzc05hbWUsIHRleHQsIHRvdGFsQW1vdW50LCB2ZXJ0aWNhbCwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IFsgY29sb3IsIHNldENvbG9yIF0gPSB1c2VTdGF0ZShCQVJfVFlQRVMucHJpbWFyeSk7XG4gIGNvbnN0IFsgbW91bnRlZCwgc2V0TW91bnRlZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIHRvdGFsLCBzZXRUb3RhbCBdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW91bnRlZCkge1xuICAgICAgY29uc3QgbmV3dG90YWwgPSBnZXRUb3RhbCh0b3RhbEFtb3VudCwgYW1vdW50KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VG90YWwobmV3dG90YWwpLCA1MDApO1xuICAgICAgc2V0Q29sb3IoZ2V0Q29sb3IobmV3dG90YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFsgbW91bnRlZCBdKTtcblxuICB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgaWYgKG1vdW50ZWQpIHtcbiAgICAgIGNvbnN0IG5ld3RvdGFsID0gZ2V0VG90YWwodG90YWxBbW91bnQsIGFtb3VudCk7XG4gICAgICBzZXRUb3RhbChuZXd0b3RhbCk7XG4gICAgICBzZXRDb2xvcihnZXRDb2xvcihuZXd0b3RhbCkpO1xuICAgIH1cbiAgfSwgWyBhbW91bnQsIHRvdGFsQW1vdW50IF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLnJlc3R9XG4gICAgICBjbGFzc05hbWU9e2BiYXItdG90YWwgZmFkZWluJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ30gJHt2ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJhciAke2NvbG9yfWB9IHN0eWxlPXt2ZXJ0aWNhbCA/IHsgaGVpZ2h0OiBgJHt0b3RhbH1gIH0gOiB7IHdpZHRoOiBgJHt0b3RhbH0lYCB9fT5cbiAgICAgICAge21vdW50ZWQgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhZGVpblwiPlxuICAgICAgICAgICAge3RleHR9IHt0b3RhbH0lXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5CYXIuZGVmYXVsdFByb3BzID0ge1xuICBhbW91bnQ6IDAsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICB0ZXh0OiB1bmRlZmluZWQsXG4gIHRvdGFsQW1vdW50OiAxMDAsXG4gIHZlcnRpY2FsOiBmYWxzZSxcbn07XG5cbkJhci5wcm9wVHlwZXMgPSB7XG4gIGFtb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b3RhbEFtb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyO1xuIiwiaW1wb3J0IEJhciBmcm9tICcuL0Jhcic7XG5pbXBvcnQgJy4vYmFyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBCYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy90cmFuc2xhdG9yJztcbmltcG9ydCBCYXIgZnJvbSAnLi4vLi4vQmFyJztcblxuY29uc3QgUHJvZmlsZSA9ICh7IC4uLnJlc3QgfSkgPT4gKFxuICA8U2VjdGlvbiB7Li4ucmVzdH0gdGl0bGU9e3RyYW5zbGF0ZSgncHJvZmlsZS50aXRsZScpfSBjbGFzc05hbWU9XCJwcm9maWxlLXNlY3Rpb25cIj5cbiAgICA8cD57dHJhbnNsYXRlKCdwcm9maWxlLmhlYWRlcicpfTwvcD5cbiAgICA8QmFyIHRleHQ9XCJSZWFjdFwiIGFtb3VudD17ODB9IC8+XG4gICAgPEJhciB0ZXh0PVwiUmVhY3QgTmF0aXZlXCIgYW1vdW50PXs1MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJIVE1MXCIgYW1vdW50PXs3NX0gLz5cbiAgICA8QmFyIHRleHQ9XCJDU1NcIiBhbW91bnQ9ezg1fSAvPlxuICAgIDxCYXIgdGV4dD1cIkdyYXBoUUxcIiBhbW91bnQ9ezU1fSAvPlxuICAgIDxCYXIgdGV4dD1cIk5vZGVcIiBhbW91bnQ9ezY1fSAvPlxuICAgIDxCYXIgdGV4dD1cIk1vbmdvXCIgYW1vdW50PXs3MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJBbmd1bGFyXCIgYW1vdW50PXs0MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJKYXZhXCIgYW1vdW50PXs2MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJTcHJpbmdib290XCIgYW1vdW50PXsyMH0gLz5cbiAgICA8QmFyIHRleHQ9XCJWdWVcIiBhbW91bnQ9ezIwfSAvPlxuICAgIDxwPnt0cmFuc2xhdGUoJ3Byb2ZpbGUudGV4dCcpfTwvcD5cbiAgICA8cD57dHJhbnNsYXRlKCdwcm9maWxlLnRleHQyJyl9PC9wPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJztcbmltcG9ydCAnLi9wcm9maWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENvbXBhbnkgPSAoeyBlbmQsIG5hbWUsIHBsYWNlLCByb2xlLCBzdGFydCwgdGVjaG5vbG9naWVzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55LWV4cGVyaWVuY2VcIj5cbiAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LW5hbWVcIj57bmFtZX08L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS1kdXJhdGlvblwiPlxuICAgICAge3N0YXJ0fSAtIHtlbmR9XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktcm9sZVwiPntyb2xlfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LXBsYWNlXCI+e3BsYWNlfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LXRlY2hcIj57dGVjaG5vbG9naWVzfTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5Db21wYW55LnByb3BUeXBlcyA9IHtcbiAgZW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGxhY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdGFydDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZWNobm9sb2dpZXM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnk7XG4iLCJpbXBvcnQgQ29tcGFueSBmcm9tICcuL0NvbXBhbnknO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb24nO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdHJhbnNsYXRvcic7XG5pbXBvcnQgQ29tcGFueSBmcm9tICcuL0NvbXBhbnknO1xuXG5jb25zdCBjb21wYW5pZXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnV296em8nLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS53b3p6by5yb2xlJyksXG4gICAgcGxhY2U6ICdQYWxtYSBkZSBNYWxsb3JjYScsXG4gICAgc3RhcnQ6ICcwOS8yMDE3JyxcbiAgICBlbmQ6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5wcmVzZW50JyksXG4gICAgdGVjaG5vbG9naWVzOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2Uud296em8udGVjaG5vbG9naWVzJyksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUGxleHVzIFRlY2hub2xvZ2llcycsXG4gICAgcm9sZTogdHJhbnNsYXRlKCdleHBlcmllbmNlLnBsZXh1cy5yb2xlJyksXG4gICAgcGxhY2U6ICdQYWxtYSBkZSBNYWxsb3JjYScsXG4gICAgc3RhcnQ6ICcwOC8yMDE2JyxcbiAgICBlbmQ6ICcwOS8yMDE3JyxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5wbGV4dXMudGVjaG5vbG9naWVzJyksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR01WJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UuZ212LnJvbGUnKSxcbiAgICBwbGFjZTogJ1NldmlsbGEnLFxuICAgIHN0YXJ0OiAnMDkvMjAxNScsXG4gICAgZW5kOiAnMDgvMjAxNicsXG4gICAgdGVjaG5vbG9naWVzOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UuZ212LnRlY2hub2xvZ2llcycpLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ09lc8OtYSBOZXR3b3JrcycsXG4gICAgcm9sZTogdHJhbnNsYXRlKCdleHBlcmllbmNlLm9lc2lhLnJvbGUnKSxcbiAgICBwbGFjZTogJ1NldmlsbGEnLFxuICAgIHN0YXJ0OiAnMDYvMjAxNScsXG4gICAgZW5kOiAnMDgvMjAxNScsXG4gICAgdGVjaG5vbG9naWVzOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2Uub2VzaWEudGVjaG5vbG9naWVzJyksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQXRvcycsXG4gICAgcm9sZTogdHJhbnNsYXRlKCdleHBlcmllbmNlLmF0b3Mucm9sZScpLFxuICAgIHBsYWNlOiAnU2V2aWxsYScsXG4gICAgc3RhcnQ6ICcwOC8yMDEzJyxcbiAgICBlbmQ6ICcwNi8yMDE1JyxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5hdG9zLnRlY2hub2xvZ2llcycpLFxuICB9LFxuXTtcblxuY29uc3QgRXhwZXJpZW5jZSA9ICh7IC4uLnJlc3QgfSkgPT4gKFxuICA8U2VjdGlvbiB7Li4ucmVzdH0gdGl0bGU9e3RyYW5zbGF0ZSgnZXhwZXJpZW5jZS50aXRsZScpfSBjbGFzc05hbWU9XCJleHBlcmllbmNlLXNlY3Rpb25cIj5cbiAgICB7Y29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4gKFxuICAgICAgPENvbXBhbnkga2V5PXtjb21wYW55Lm5hbWV9IHsuLi5jb21wYW55fSAvPlxuICAgICkpfVxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlO1xuIiwiaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSAnLi9FeHBlcmllbmNlJztcbmltcG9ydCAnLi9leHBlcmllbmNlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi8uLi9JY29uJztcblxuY29uc3QgTmV0d29yayA9ICh7IGljb24sIGxpbmssIG5hbWUsIHVzZXJuYW1lIH0pID0+IChcbiAgPGEgY2xhc3NOYW1lPVwic29jaWFsLW5ldHdvcmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtsaW5rfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgPEljb24gaWNvbj17aWNvbn0gLz5cbiAgICA8ZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwibmV0d29yay1uYW1lXCI+e25hbWV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibmV0d29yay11c2VybmFtZVwiPnt1c2VybmFtZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJuZXR3b3JrLWxpbmtcIj57bGlua308L3A+XG4gICAgPC9kaXY+XG4gIDwvYT5cbik7XG5cbk5ldHdvcmsucHJvcFR5cGVzID0ge1xuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV0d29yaztcbiIsImltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yayc7XG5cbmV4cG9ydCBkZWZhdWx0IE5ldHdvcms7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy90cmFuc2xhdG9yJztcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yayc7XG5cbmNvbnN0IG5ldHdvcmtzID0gW1xuICB7XG4gICAgaWNvbjogJ2ZhYiBmYS1saW5rZWRpbicsXG4gICAgbGluazogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2luL2phdmlnYXJjaWFmYWphcmRvJyxcbiAgICBuYW1lOiAnTGlua2VkSW4nLFxuICAgIHVzZXJuYW1lOiAnSmF2aWVyIEdhcmPDrWEgRmFqYXJkbycsXG4gIH0sXG4gIHtcbiAgICBpY29uOiAnZmFiIGZhLWdpdGh1YicsXG4gICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9KYXZpR0Y4LycsXG4gICAgbmFtZTogJ0dpdEh1YicsXG4gICAgdXNlcm5hbWU6ICdKYXZpR0Y4JyxcbiAgfSxcbl07XG5cbmNvbnN0IFNvY2lhbCA9ICh7IC4uLnJlc3QgfSkgPT4gKFxuICA8U2VjdGlvbiB7Li4ucmVzdH0gdGl0bGU9e3RyYW5zbGF0ZSgnc29jaWFsLnRpdGxlJyl9IGNsYXNzTmFtZT1cInNvY2lhbC1zZWN0aW9uXCI+XG4gICAge25ldHdvcmtzLm1hcCgobmV0KSA9PiAoXG4gICAgICA8TmV0d29yayBrZXk9e25ldC5uYW1lfSB7Li4ubmV0fSAvPlxuICAgICkpfVxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWw7XG4iLCJpbXBvcnQgU29jaWFsIGZyb20gJy4vU29jaWFsJztcbmltcG9ydCAnLi9zb2NpYWwuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBUaXRsZSA9ICh7IGRhdGUsIGV4cGVkaXRvciwgbmFtZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLXRpdGxlXCI+XG4gICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtbmFtZVwiPntuYW1lfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1leHBlZGl0b3JcIj57ZXhwZWRpdG9yfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1kYXRlXCI+e2RhdGV9PC9wPlxuICA8L2Rpdj5cbik7XG5cblRpdGxlLnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBleHBlZGl0b3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iLCJpbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb24nO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdHJhbnNsYXRvcic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XG5cbmNvbnN0IHRpdGxlcyA9IFtcbiAge1xuICAgIGRhdGU6ICcyMDA2IC0gMjAxMycsXG4gICAgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi51bml2ZXJzaXR5LmV4cGVkaXRvcicpLFxuICAgIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLnVuaXZlcnNpdHkudGl0bGUnKSxcbiAgfSxcbiAgeyBkYXRlOiAnMDQvMjAxOScsIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24ucmVhY3QuZXhwZWRpdG9yJyksIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLnJlYWN0LnRpdGxlJykgfSxcbiAge1xuICAgIGRhdGU6ICcwNi8yMDE3JyxcbiAgICBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLnJlYWN0QmFzaWMuZXhwZWRpdG9yJyksXG4gICAgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24ucmVhY3RCYXNpYy50aXRsZScpLFxuICB9LFxuICB7XG4gICAgZGF0ZTogJzA2LzIwMTcnLFxuICAgIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24uYW5ndWxhcjQuZXhwZWRpdG9yJyksXG4gICAgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24uYW5ndWxhcjQudGl0bGUnKSxcbiAgfSxcbiAge1xuICAgIGRhdGU6ICcwNi8yMDE3JyxcbiAgICBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLnR5cGVzY3JpcHQuZXhwZWRpdG9yJyksXG4gICAgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24udHlwZXNjcmlwdC50aXRsZScpLFxuICB9LFxuICB7IGRhdGU6ICcwNi8yMDE3JywgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5qcXVlcnkuZXhwZWRpdG9yJyksIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmpxdWVyeS50aXRsZScpIH0sXG4gIHtcbiAgICBkYXRlOiAnMDYvMjAxNycsXG4gICAgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5ib290c3RyYXAuZXhwZWRpdG9yJyksXG4gICAgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24uYm9vdHN0cmFwLnRpdGxlJyksXG4gIH0sXG4gIHtcbiAgICBkYXRlOiAnMTEvMjAxNicsXG4gICAgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5hbmd1bGFyanMuZXhwZWRpdG9yJyksXG4gICAgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24uYW5ndWxhcmpzLnRpdGxlJyksXG4gIH0sXG4gIHtcbiAgICBkYXRlOiAnMDMvMjAxNiAtIDA0LzIwMTYnLFxuICAgIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24uYWdpbGUuZXhwZWRpdG9yJyksXG4gICAgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24uYWdpbGUudGl0bGUnKSxcbiAgfSxcbiAge1xuICAgIGRhdGU6ICcwNi8yMDE1IC0gMDgvMjAxNScsXG4gICAgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5hbmRyb2lkLmV4cGVkaXRvcicpLFxuICAgIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmFuZHJvaWQudGl0bGUnKSxcbiAgfSxcbl07XG5cbmNvbnN0IEVkdWNhdGlvbiA9ICh7IC4uLnJlc3QgfSkgPT4gKFxuICA8U2VjdGlvbiB7Li4ucmVzdH0gdGl0bGU9e3RyYW5zbGF0ZSgnZWR1Y2F0aW9uLnRpdGxlJyl9IGNsYXNzTmFtZT1cImVkdWNhdGlvbi1zZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24tdGl0bGVzXCI+XG4gICAgICB7dGl0bGVzLm1hcCgodGl0bGUpID0+IChcbiAgICAgICAgPFRpdGxlIGtleT17dGl0bGUubmFtZX0gey4uLnRpdGxlfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbjtcbiIsImltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi9FZHVjYXRpb24nO1xuaW1wb3J0ICcuL2VkdWNhdGlvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEN1YmUgZnJvbSAnLi4vQ3ViZSc7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vU2VjdGlvbic7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vQ3ViZS9DdWJlJztcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4vRXhwZXJpZW5jZSc7XG5pbXBvcnQgU29jaWFsIGZyb20gJy4vU29jaWFsJztcbmltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi9FZHVjYXRpb24nO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHJhbnNsYXRvcic7XG5cbmNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICByZXR1cm4gKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjg7XG59O1xuY29uc3Qgc2l6ZSA9IGdldFNpemUoKTtcblxuY29uc3QgTWFpbkN1YmUgPSAoeyBoaWRkZW5JbnRybyB9KSA9PiB7XG4gIGNvbnN0IFsgaW5pdGlhbFRyYW5zaXRpb24sIHNldEluaXRpYWxUcmFuc2l0aW9uIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgWyBpc0Z1bGxzY3JlZW4sIHNldElzRnVsbHNjcmVlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZGRlbkludHJvKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEluaXRpYWxUcmFuc2l0aW9uKGZhbHNlKSwgNzUwKTtcbiAgICB9XG4gIH0sIFsgaGlkZGVuSW50cm8gXSk7XG5cbiAgY29uc3QgY29tbW9uUHJvcHMgPSB7XG4gICAgb25GdWxsc2NyZWVuOiAoKSA9PiBzZXRJc0Z1bGxzY3JlZW4odHJ1ZSksXG4gICAgb25GdWxsc2NyZWVuT3V0OiAoKSA9PiBzZXRJc0Z1bGxzY3JlZW4oZmFsc2UpLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1haW4tY3ViZVwiIGNsYXNzTmFtZT17aGlkZGVuSW50cm8gPyAnJyA6ICdoaWRkZW4tY3ViZSd9PlxuICAgICAgPEN1YmVcbiAgICAgICAgY2xhc3NOYW1lPXtpbml0aWFsVHJhbnNpdGlvbiA/ICdpbml0aWFsLXRyYW5zaXRpb24nIDogJyd9XG4gICAgICAgIGRpc2FibGVkPXtpc0Z1bGxzY3JlZW59XG4gICAgICAgIGZhY2U9e2luaXRpYWxUcmFuc2l0aW9uID8gQ1VCRV9GQUNFUy5iYWNrIDogQ1VCRV9GQUNFUy5mcm9udH1cbiAgICAgICAgbGVmdENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxFZHVjYXRpb24gey4uLmNvbW1vblByb3BzfSAvPn1cbiAgICAgICAgZnJvbnRDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8UHJvZmlsZSB7Li4uY29tbW9uUHJvcHN9IC8+fVxuICAgICAgICByaWdodENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxFeHBlcmllbmNlIHsuLi5jb21tb25Qcm9wc30gLz59XG4gICAgICAgIGJhY2tDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8U29jaWFsIHsuLi5jb21tb25Qcm9wc30gLz59XG4gICAgICAgIGJvdHRvbUNvbnRlbnQ9e1xuICAgICAgICAgIGhpZGRlbkludHJvICYmIChcbiAgICAgICAgICAgIDxTZWN0aW9uIHsuLi5jb21tb25Qcm9wc30gdGl0bGU9XCJNYWRlIGJ5IEphdmkgR2FyY8OtYSBGYWphcmRvXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUoJ2luZm8uY29kZUluJyl9OjwvcD5cbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KYXZpR0Y4L215LWN2L1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vSmF2aUdGOC9teS1jdi9cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB0b3BDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8U2VjdGlvbiB7Li4uY29tbW9uUHJvcHN9IHRpdGxlPVwiSGVsbG8gOilcIiBkaXNhYmxlZCAvPn1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgd2l0aFN3aXBlXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTWFpbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBoaWRkZW5JbnRybzogZmFsc2UsXG59O1xuXG5NYWluQ3ViZS5wcm9wVHlwZXMgPSB7XG4gIGhpZGRlbkludHJvOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5DdWJlO1xuIiwiaW1wb3J0IE1haW5DdWJlIGZyb20gJy4vTWFpbkN1YmUnO1xuaW1wb3J0ICcuL21haW5DdWJlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ3ViZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHJhbnNsYXRvcic7XG5cbmNvbnN0IEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IFsgc2hvdywgc2V0U2hvdyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGluZm8tc2VjdGlvbiBzaGFkb3cke3Nob3cgPyAnIGluZm8tc2VjdGlvbi1mdWxsJyA6ICcnfWB9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNob3codHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3coZmFsc2UpfT5cbiAgICAgIDxJY29uIGljb249XCJmYXMgZmEtaW5mb1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tY29udGFpbmVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tdGl0bGVcIj57dHJhbnNsYXRlKCdpbmZvLmhvd1RvVXNlJyl9PC9wPlxuICAgICAgICA8cD57dHJhbnNsYXRlKCdpbmZvLmluZm8nKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZm87XG4iLCJpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8nO1xuaW1wb3J0ICcuL2luZm8uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEluZm87XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGkgZnJvbSAnLi4vY29tcG9uZW50cy9IaSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBNYWluQ3ViZSBmcm9tICcuLi9jb21wb25lbnRzL01haW5DdWJlJztcbmltcG9ydCBJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvSW5mbyc7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFsgaGlkZGVuSW50cm8sIHNldEhpZGRlbkludHJvIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZhZGVpblwiPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxIaSBvbkhpZGU9eygpID0+IHNldEhpZGRlbkludHJvKHRydWUpfSAvPlxuICAgICAgICA8TWFpbkN1YmUgaGlkZGVuSW50cm89e2hpZGRlbkludHJvfSAvPlxuICAgICAgICA8SW5mbyAvPlxuICAgICAgICA8ZGl2IGlkPVwic2VsZWN0ZWQtc2VjdGlvblwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9NYWluJztcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8QnJvd3NlclJvdXRlcj5cbiAgICA8TWFpbiAvPlxuICA8L0Jyb3dzZXJSb3V0ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnQXBwJztcblxuaW1wb3J0ICcuL3N0eWxlcy9hbmltYXRpb25zLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==