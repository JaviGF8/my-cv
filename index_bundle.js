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
exports.push([module.i, ".experience-section>div .company-experience{width:100%;display:flex;flex-wrap:wrap;padding:8px 0;border-bottom:1px solid #b71d2b}.experience-section>div .company-experience>*{width:100%;margin:0}.experience-section>div .company-experience .company-name{font-size:20px;width:60%}.experience-section>div .company-experience .company-duration{width:40%;text-align:right}.experience-section>div .company-experience .company-role{color:#f2d090;font-style:italic;font-weight:300;font-size:12px;margin-top:8px}.experience-section>div .company-experience .company-place{font-size:12px;margin-bottom:8px}.experience-section>div .company-experience:nth-child(even){border-bottom-color:#65a698}@media screen and (max-width: 992px){.experience-section>div .company-experience .company-name,.experience-section>div .company-experience .company-duration{width:100%}}\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9zZWN0aW9uLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL3NlY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3M/MmM4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvUHJvZmlsZS9wcm9maWxlLnNjc3M/YjBhNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL3Byb2ZpbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL2V4cGVyaWVuY2Uuc2Nzcz85MzFhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvZXhwZXJpZW5jZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9zb2NpYWwuc2Nzcz8wMjEyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9zb2NpYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FZHVjYXRpb24vZWR1Y2F0aW9uLnNjc3M/ZDExZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FZHVjYXRpb24vZWR1Y2F0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvbWFpbkN1YmUuc2Nzcz8yMWM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL21haW5DdWJlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mby9pbmZvLnNjc3M/MDcwYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmZvL2luZm8uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcz8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL0N1YmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvSGkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2xhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9CYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvRXhwZXJpZW5jZS9Db21wYW55L0NvbXBhbnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvQ29tcGFueS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL0V4cGVyaWVuY2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL05ldHdvcmsvTmV0d29yay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL05ldHdvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL1NvY2lhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0VkdWNhdGlvbi9UaXRsZS9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvRWR1Y2F0aW9uL1RpdGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0VkdWNhdGlvbi9FZHVjYXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0VkdWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9NYWluQ3ViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mby9JbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmZvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQ1VCRV9GQUNFUyIsImZyb250IiwiYmFjayIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImlzQXJyb3dMZWZ0IiwiY29kZSIsImtleSIsImtleUNvZGUiLCJpc0Fycm93VXAiLCJpc0Fycm93UmlnaHQiLCJpc0Fycm93RG93biIsIkN1YmUiLCJiYWNrQ29udGVudCIsImJvdHRvbUNvbnRlbnQiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImZhY2UiLCJmcm9udENvbnRlbnQiLCJsZWZ0Q29udGVudCIsInJpZ2h0Q29udGVudCIsInNpemUiLCJ0b3BDb250ZW50Iiwid2l0aFN3aXBlIiwidXNlU3RhdGUiLCJhbmdYIiwic2V0QW5nWCIsImFuZ1kiLCJzZXRBbmdZIiwibW92aW5nIiwic2V0TW92aW5nIiwic3RhcnRYIiwic2V0U3RhcnRYIiwic3RhcnRZIiwic2V0U3RhcnRZIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwidXNlRWZmZWN0IiwieCIsInkiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTW92ZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFgiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFkiLCJkaWZmWCIsImRpZmZZIiwiTWF0aCIsImFicyIsImhhbmRsZU1vdmVtZW50U3RhcnQiLCJ0b3VjaGVzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwibnVtYmVyIiwiZ2V0U2l6ZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImZsb29yIiwid2hpdGVDb250ZW50IiwicHJpbWFyeUNvbnRlbnQiLCJzZWNvbmRhcnlDb250ZW50IiwiYWNjZW50Q29udGVudCIsInVuYW5pbWF0ZWREaXYiLCJjb2xvciIsImN1YmVPcHRpb25zIiwiSGkiLCJvbkhpZGUiLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJzaG93IiwiZ2V0UmFuZG9tQ3ViZSIsInJhbmRvbSIsImZ1bmMiLCJOYXZiYXIiLCJJY29uIiwiaWNvbiIsInJlc3QiLCJCdXR0b24iLCJjaGlsZHJlbiIsInRleHQiLCJTZWN0aW9uIiwib25GdWxsc2NyZWVuIiwib25GdWxsc2NyZWVuT3V0IiwidGl0bGUiLCJmYWRlb3V0Iiwic2V0RmFkZW91dCIsImZ1bGxzY3JlZW4iLCJzZXRGdWxsc2NyZWVuIiwidGFwcGVkIiwic2V0VGFwcGVkIiwiY2xlYXJUYXBwZWQiLCJpc0RvdWJsZVRhcCIsImNsZWFyVGltZW91dCIsImNyZWF0ZVBvcnRhbCIsImJvZHkiLCJ0cmFuc2xhdGlvbnMiLCJlZHVjYXRpb24iLCJleHBlcmllbmNlIiwiaW5mbyIsInByb2ZpbGUiLCJzb2NpYWwiLCJlcyIsImVuIiwiTEFOR19JRFMiLCJlbmdsaXNoIiwic3BhbmlzaCIsInNldExvY2FsZSIsImxhbmciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0TG9jYWxlIiwibGFuZ3VhZ2UiLCJpc1NwYW5pc2giLCJyZXNvbHZlSW5kZXgiLCJzdHIiLCJyZXBsYWNlIiwiYXJyYXkiLCJzcGxpdCIsInRyYW5zbGF0aW9uc0xhbmciLCJpIiwibGVuZ3RoIiwiZWxlbSIsInRyYW5zbGF0ZSIsIkxBTkdVQUdFUyIsIm5hbWUiLCJ2YWx1ZSIsIkJBUl9UWVBFUyIsInByaW1hcnlEYXJrZXIiLCJwcmltYXJ5RGFyayIsInByaW1hcnkiLCJzZWNvbmRhcnlEYXJrZXIiLCJzZWNvbmRhcnlEYXJrIiwic2Vjb25kYXJ5IiwiYWNjZW50RGFya2VyIiwiYWNjZW50RGFyayIsImFjY2VudCIsImdldFRvdGFsIiwidG90YWwiLCJhbW91bnQiLCJnZXRDb2xvciIsIkJhciIsInRvdGFsQW1vdW50IiwidmVydGljYWwiLCJzZXRDb2xvciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwic2V0VG90YWwiLCJuZXd0b3RhbCIsIlByb2ZpbGUiLCJDb21wYW55IiwiZW5kIiwicGxhY2UiLCJyb2xlIiwic3RhcnQiLCJ0ZWNobm9sb2dpZXMiLCJpc1JlcXVpcmVkIiwiY29tcGFuaWVzIiwiRXhwZXJpZW5jZSIsIm1hcCIsImNvbXBhbnkiLCJOZXR3b3JrIiwibGluayIsInVzZXJuYW1lIiwibmV0d29ya3MiLCJTb2NpYWwiLCJuZXQiLCJUaXRsZSIsImRhdGUiLCJleHBlZGl0b3IiLCJ0aXRsZXMiLCJFZHVjYXRpb24iLCJNYWluQ3ViZSIsImhpZGRlbkludHJvIiwiaW5pdGlhbFRyYW5zaXRpb24iLCJzZXRJbml0aWFsVHJhbnNpdGlvbiIsImlzRnVsbHNjcmVlbiIsInNldElzRnVsbHNjcmVlbiIsImNvbW1vblByb3BzIiwiSW5mbyIsInNldFNob3ciLCJNYWluIiwic2V0SGlkZGVuSW50cm8iLCJBcHAiLCJSZWFjdERPTSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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d0Qsa0RBQWYsRTs7Ozs7QUNwQkE7QUFDQTtBQUVlQSw2REFBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsSUFBSSxHQUFHLE1BQU07QUFBQSxvQkFDdUJsTCx5QkFBUSxDQUFDLEtBQUQsQ0FEL0I7QUFBQTtBQUFBLFFBQ1QwSyxXQURTO0FBQUEsUUFDSVMsY0FESjs7QUFHakIsc0JBQ0UseURBQ0U7QUFBSyxNQUFFLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFDO0FBQW5DLGtCQUNFLDhCQUFDLGlCQUFELE9BREYsZUFFRSw4QkFBQyxhQUFEO0FBQUksVUFBTSxFQUFFLE1BQU1BLGNBQWMsQ0FBQyxJQUFEO0FBQWhDLElBRkYsZUFHRSw4QkFBQyxtQkFBRDtBQUFVLGVBQVcsRUFBRVQ7QUFBdkIsSUFIRixlQUlFLDhCQUFDLGVBQUQsT0FKRixlQUtFO0FBQUssTUFBRSxFQUFDO0FBQVIsSUFMRixDQURGLENBREY7QUFXRCxDQWREOztBQWdCZVEsbURBQWYsRTs7QUN0QkE7QUFDQTtBQUVBOztBQUVBLE1BQU1FLEdBQUcsR0FBRyxtQkFDViw4QkFBQyx5Q0FBRCxxQkFDRSw4QkFBQyxVQUFELE9BREYsQ0FERjs7QUFNZUEsK0NBQWYsRTs7Ozs7Ozs7QUNYQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUFDLG1CQUFRLENBQUNDLE1BQVQsZUFBZ0IsOEJBQUMsT0FBRCxPQUFoQixFQUF5QjFKLFFBQVEsQ0FBQzJKLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIsRSIsImZpbGUiOiJpbmRleF9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMTUzLDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdWJlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdWJlLWNvbnRhaW5lciAuY3ViZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2l0aW9uOmVhc2UtaW4gYWxsIC41c30uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODtjb2xvcjojZmZmfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlPip7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZnJvbnR7dHJhbnNmb3JtOnJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLXJpZ2h0e3RyYW5zZm9ybTpyb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYmFja3t0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1sZWZ0e3RyYW5zZm9ybTpyb3RhdGVaKDE4MGRlZykgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS10b3B7dHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1ib3R0b217dHJhbnNmb3JtOnJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oaS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXM7ei1pbmRleDoxMDAxfS5oaS1jb250YWluZXIgaDF7Y29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NSU7Zm9udC1zaXplOjIwcHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnByaW1hcnl7Y29sb3I6I2I3MWQyYjtmb250LXNpemU6MzJweH0uaGktY29udGFpbmVyIGgxIHNwYW4ucHJpbWFyeSBzcGFue2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjMwMH0uaGktY29udGFpbmVyIGgxIHNwYW4uc2Vjb25kYXJ5e2NvbG9yOiM3OGI2YTk7Zm9udC1zaXplOjI0cHh9LmhpLWNvbnRhaW5lciAuaGl7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMjAwcHh9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlcntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXB9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlcj5kaXZ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7bWFyZ2luOjRweCAwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2Pip7bWFyZ2luOjAgNHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXIgLmJhY2tncm91bmR7Ym9yZGVyLXJhZGl1czo4cHg7b3ZlcmZsb3c6aGlkZGVufS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXIgLndoaXRlLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXIgLnByaW1hcnktYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmJ9LmhpLWNvbnRhaW5lciAuaGkgLmxldHRlciAuc2Vjb25kYXJ5LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojNzhiNmE5fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXIgLmFjY2VudC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2YyZDA5MH0uaGktY29udGFpbmVyLmhpZGRlbntvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0uaGktY29udGFpbmVyLmhpZGRlbiAqe3BvaW50ZXItZXZlbnRzOm5vbmV9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpey5oaS1jb250YWluZXIgaDF7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm5hdi5uYXZiYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDo5MDA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I2I3MWQyYjtoZWlnaHQ6NjBweDtwYWRkaW5nOjAgMTZweH1uYXYubmF2YmFyIC5leHBhbmQtYnRue2Rpc3BsYXk6bm9uZX1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudHttYXgtd2lkdGg6MTIwMHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxle2ZvbnQtc2l6ZTozMnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6I2ZmZn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxlIHNwYW57Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6MzAwfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItc3VidGl0bGV7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc3R5bGU6aXRhbGljfW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItc3VidGl0bGUgc3Bhbntjb2xvcjojZTliYmJmfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXtuYXYubmF2YmFyIC5uYXZiYXItY29udGVudHtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxle2ZvbnQtc2l6ZToyMHB4fW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItdGl0bGUgc3Bhbntmb250LXNpemU6MTJweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxle2ZvbnQtc2l6ZToxMnB4fW5hdi5uYXZiYXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItc3VidGl0bGUgc3Bhbntmb250LXNpemU6MTRweH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaWNvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3VzdG9tLWljb257bWFyZ2luOjA7aGVpZ2h0OjhweH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1idG57cGFkZGluZzo4cHggMTZweDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MDtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2I3MWQyYjt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjI1cztvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXJ9LmN1c3RvbS1idG4+Kjpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tbGVmdDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VjdGlvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uLC5jdWJlLXNlY3Rpb257bWFyZ2luOjA7cGFkZGluZzozMnB4O3dpZHRoOmNhbGMoMTAwJSAtIDY0cHgpO2hlaWdodDpjYWxjKDEwMCUgLSA2NHB4KTtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjE2cHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO292ZXJmbG93OmhpZGRlbn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uIGEsLmN1YmUtc2VjdGlvbiBhe2NvbG9yOiNmMmQwOTB9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiAqLC5jdWJlLXNlY3Rpb24gKnstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbj5kaXYsLmN1YmUtc2VjdGlvbj5kaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7b3ZlcmZsb3c6aGlkZGVufS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24+ZGl2IGgyLC5jdWJlLXNlY3Rpb24+ZGl2IGgye21hcmdpbjowO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtwYWRkaW5nLWJvdHRvbTo4cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2I3MWQyYjt3aWR0aDoxMDAlfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24gLnNlZS1tb3JlLWJ0biwuY3ViZS1zZWN0aW9uIC5zZWUtbW9yZS1idG57aGVpZ2h0OjIwJTt3aWR0aDoxMDAlO2FsaWduLXNlbGY6Y2VudGVyO2JvcmRlci1yYWRpdXM6MH0uY3ViZS1zZWN0aW9uLWZ1bGx7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmY7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4Ojk5OTt0cmFuc2l0aW9uOmxpbmVhciBhbGwgMXM7Ym9yZGVyLXJhZGl1czowO292ZXJmbG93OmF1dG99LmN1YmUtc2VjdGlvbi1mdWxsPmRpdnttYXgtd2lkdGg6MTIwMHB4O292ZXJmbG93OnZpc2libGV9LmN1YmUtc2VjdGlvbi1mdWxsPmRpdiAuY2xvc2UtYnRue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjE2cHg7dG9wOjE2cHg7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiwuY3ViZS1zZWN0aW9ue3dpZHRoOmNhbGMoMTAwJSAtIDMycHgpO2hlaWdodDpjYWxjKDEwMCUgLSAzMnB4KTtwYWRkaW5nOjE2cHh9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYmFyLXRvdGFse2JhY2tncm91bmQtY29sb3I6c2lsdmVyO2JvcmRlci1yYWRpdXM6NHB4O292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXh9LmJhci10b3RhbCAuYmFye3BhZGRpbmc6NHB4IDA7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC41cztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5iYXItdG90YWwgLmJhcj5zcGFue21hcmdpbi1sZWZ0OjhweDt3aGl0ZS1zcGFjZTpub3dyYXB9LmJhci10b3RhbCAuYmFyLnByaW1hcnktZGFya2Vye2JhY2tncm91bmQtY29sb3I6IzkwMGExMH0uYmFyLXRvdGFsIC5iYXIucHJpbWFyeS1kYXJre2JhY2tncm91bmQtY29sb3I6I2E3MTUyMH0uYmFyLXRvdGFsIC5iYXIucHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmJ9LmJhci10b3RhbCAuYmFyLnNlY29uZGFyeS1kYXJrZXJ7YmFja2dyb3VuZC1jb2xvcjojNDg4ZTdlfS5iYXItdG90YWwgLmJhci5zZWNvbmRhcnktZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiM2NWE2OTh9LmJhci10b3RhbCAuYmFyLnNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YTl9LmJhci10b3RhbCAuYmFyLmFjY2VudC1kYXJrZXJ7YmFja2dyb3VuZC1jb2xvcjojZThiMzYxfS5iYXItdG90YWwgLmJhci5hY2NlbnQtZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiNlZWM0N2R9LmJhci10b3RhbCAuYmFyLmFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmQwOTB9LmJhci10b3RhbC52ZXJ0aWNhbHttaW4taGVpZ2h0OjEwMHB4O21pbi13aWR0aDozMnB4O21heC13aWR0aDozMnB4O2hlaWdodDoxMDAlO2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5iYXItdG90YWwudmVydGljYWwgLmJhcj5zcGFue3dyaXRpbmctbW9kZTp0Yi1ybDt0cmFuc2Zvcm06cm90YXRlKC0xODBkZWcpfS5iYXItdG90YWwuaG9yaXpvbnRhbHttaW4taGVpZ2h0OjMycHg7bWF4LWhlaWdodDozMnB4O21pbi13aWR0aDoxMDBweDt3aWR0aDoxMDAlfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2ZpbGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2ZpbGUtc2VjdGlvbj5kaXYgcHttYXJnaW46OHB4IDB9LnByb2ZpbGUtc2VjdGlvbj5kaXYgLmJhci10b3RhbHttYXJnaW46OHB4IDB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXhwZXJpZW5jZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNle3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO3BhZGRpbmc6OHB4IDA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2I3MWQyYn0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlPip7d2lkdGg6MTAwJTttYXJnaW46MH0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LW5hbWV7Zm9udC1zaXplOjIwcHg7d2lkdGg6NjAlfS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktZHVyYXRpb257d2lkdGg6NDAlO3RleHQtYWxpZ246cmlnaHR9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1yb2xle2NvbG9yOiNmMmQwOTA7Zm9udC1zdHlsZTppdGFsaWM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxMnB4O21hcmdpbi10b3A6OHB4fS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktcGxhY2V7Zm9udC1zaXplOjEycHg7bWFyZ2luLWJvdHRvbTo4cHh9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZTpudGgtY2hpbGQoZXZlbil7Ym9yZGVyLWJvdHRvbS1jb2xvcjojNjVhNjk4fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXsuZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LW5hbWUsLmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1kdXJhdGlvbnt3aWR0aDoxMDAlfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zb2NpYWwuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNvY2lhbC1zZWN0aW9uPmRpdntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXB9LnNvY2lhbC1zZWN0aW9uPmRpdiBhLnNvY2lhbC1uZXR3b3Jre3dpZHRoOmNhbGMoMTAwJSAtIDM0cHgpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7dGV4dC1kZWNvcmF0aW9uOm5vbmU7cGFkZGluZzoxNnB4O21hcmdpbi10b3A6MTZweDtib3JkZXI6MXB4IHNvbGlkICNmZmY7Ym9yZGVyLXJhZGl1czo0cHh9LnNvY2lhbC1zZWN0aW9uPmRpdiBhLnNvY2lhbC1uZXR3b3JrIGl7Zm9udC1zaXplOjMycHg7cGFkZGluZy1yaWdodDozMnB4O3BhZGRpbmctbGVmdDoxNnB4O2NvbG9yOiNmZmZ9LnNvY2lhbC1zZWN0aW9uPmRpdiBhLnNvY2lhbC1uZXR3b3JrIHB7bWFyZ2luOjA7b3ZlcmZsb3c6aGlkZGVuO3dvcmQtYnJlYWs6YnJlYWstd29yZDtjb2xvcjojZmZmfS5zb2NpYWwtc2VjdGlvbj5kaXYgYS5zb2NpYWwtbmV0d29yayAubmV0d29yay1uYW1le2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6Izc4YjZhOX0uc29jaWFsLXNlY3Rpb24+ZGl2IGEuc29jaWFsLW5ldHdvcmsgLm5ldHdvcmstdXNlcm5hbWV7Zm9udC1zdHlsZTppdGFsaWN9LnNvY2lhbC1zZWN0aW9uPmRpdiBhLnNvY2lhbC1uZXR3b3JrIC5uZXR3b3JrLWxpbmt7Zm9udC1zaXplOjEycHg7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtjb2xvcjojZjJkMDkwfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkdWNhdGlvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVze2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcH0uZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGV7ZmxleDowIGNhbGMoNTAlIC0gNHB4KTttYXJnaW46MTZweCAwfS5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZSBwe21hcmdpbjowfS5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZSAudGl0bGUtbmFtZXtmb250LXNpemU6MTZweH0uZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGUgLnRpdGxlLWV4cGVkaXRvcntjb2xvcjojZjJkMDkwO2ZvbnQtc3R5bGU6aXRhbGljO2ZvbnQtd2VpZ2h0OjMwMH0uZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGUgLnRpdGxlLWRhdGV7Y29sb3I6Izc4YjZhOTtmb250LXNpemU6MTJweH0uZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGU6bnRoLWNoaWxkKGV2ZW4pe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1lbmQ7dGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLWxlZnQ6NHB4fS5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZTpudGgtY2hpbGQob2RkKXtwYWRkaW5nLXJpZ2h0OjRweH0uZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGU6bnRoLWNoaWxkKG9kZCkgcHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpey5lZHVjYXRpb24tc2VjdGlvbj5kaXYgLmVkdWNhdGlvbi10aXRsZXMgLmVkdWNhdGlvbi10aXRsZXtmbGV4OjAgMTAwJX0uZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGU6bnRoLWNoaWxkKG9kZCkgcHtib3JkZXItcmlnaHQ6MH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbkN1YmUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW4tY3ViZSAuY3ViZS1jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIDFzIC4yNXN9I21haW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmUtZmFjZXtib3JkZXItcmFkaXVzOjE2cHh9I21haW4tY3ViZSAuaW5pdGlhbC10cmFuc2l0aW9uIC5jdWJle3RyYW5zaXRpb246ZWFzZS1pbi1vdXQgYWxsIDFzIC4yNXN9I21haW4tY3ViZS5oaWRkZW4tY3ViZSAuY3ViZS1jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDApIHJvdGF0ZVooMjcwZGVnKX0jbWFpbi1jdWJlLmhpZGRlbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZXt0cmFuc2Zvcm06cm90YXRlWSgzNjBkZWcpICFpbXBvcnRhbnR9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5mby5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5mby1zZWN0aW9ue3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjMycHg7Ym90dG9tOjMycHg7YmFja2dyb3VuZC1jb2xvcjojZjJkMDkwO3BhZGRpbmc6MTZweDtib3JkZXItcmFkaXVzOjUwJTtjb2xvcjojZmZmO3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXM7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uaW5mby1zZWN0aW9uIGl7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7Zm9udC1zaXplOjMycHh9LmluZm8tc2VjdGlvbiAuaW5mby1jb250YWluZXJ7bWF4LXdpZHRoOjA7bWF4LWhlaWdodDowO3BhZGRpbmc6MDttYXJnaW46MDtvcGFjaXR5OjA7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC41cztvdmVyZmxvdzpoaWRkZW59LmluZm8tc2VjdGlvbiAuaW5mby1jb250YWluZXIgcHtmb250LXNpemU6MDtvcGFjaXR5OjA7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC41cyxsaW5lYXIgb3BhY2l0eSAuNXMgLjVzO3RleHQtYWxpZ246anVzdGlmeX0uaW5mby1zZWN0aW9uLmluZm8tc2VjdGlvbi1mdWxse2JvcmRlci1yYWRpdXM6NHB4fS5pbmZvLXNlY3Rpb24uaW5mby1zZWN0aW9uLWZ1bGwgLmluZm8tY29udGFpbmVye21heC13aWR0aDozMDBweDttYXgtaGVpZ2h0Ojgwdmg7cGFkZGluZzowIDE2cHg7b3BhY2l0eToxO3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXN9LmluZm8tc2VjdGlvbi5pbmZvLXNlY3Rpb24tZnVsbCAuaW5mby1jb250YWluZXIgcHtmb250LXNpemU6MTRweDttYXJnaW46MDtvcGFjaXR5OjF9LmluZm8tc2VjdGlvbi5pbmZvLXNlY3Rpb24tZnVsbCAuaW5mby1jb250YWluZXIgLmluZm8tdGl0bGV7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtmb250LXNpemU6MTZweH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7LmluZm8tc2VjdGlvbntyaWdodDo4cHg7Ym90dG9tOjhweH0uaW5mby1zZWN0aW9uLmluZm8tc2VjdGlvbi1mdWxsIC5pbmZvLWNvbnRhaW5lcnttYXgtd2lkdGg6MjAwcHh9LmluZm8tc2VjdGlvbi5pbmZvLXNlY3Rpb24tZnVsbCAuaW5mby1jb250YWluZXIgcHtmb250LXNpemU6MTJweH0uaW5mby1zZWN0aW9uLmluZm8tc2VjdGlvbi1mdWxsIC5pbmZvLWNvbnRhaW5lciAuaW5mby10aXRsZXtmb250LXNpemU6MTRweH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmFkZWluey13ZWJraXQtYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tb3otYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tcy1hbmltYXRpb246ZmFkZWluIDAuNXM7LW8tYW5pbWF0aW9uOmZhZGVpbiAwLjVzO2FuaW1hdGlvbjpmYWRlaW4gMC41c31Aa2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtbW96LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tcy1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1vLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX0uZmFkZW91dHstd2Via2l0LWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7LW1vei1hbmltYXRpb246ZmFkZW91dCAwLjVzOy1tcy1hbmltYXRpb246ZmFkZW91dCAwLjVzOy1vLWFuaW1hdGlvbjpmYWRlb3V0IDAuNXM7YW5pbWF0aW9uOmZhZGVvdXQgMC41cztvcGFjaXR5OjB9QGtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC1tb3ota2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtbXMta2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALW8ta2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e2ZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDttYXJnaW46MDtjb2xvcjojMDgwODA4Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6c3VicGl4ZWwtYW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6YXV0b30uc2hhZG93LG1haW4gI21haW4tY29udGFpbmVyICNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2V7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpOy1tb3otYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KTtib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjUpfWh0bWx7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZmfW1haW57ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW59bWFpbiAjbWFpbi1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBDVUJFX0ZBQ0VTID0ge1xuICBmcm9udDogJ2Zyb250JyxcbiAgYmFjazogJ2JhY2snLFxuICBsZWZ0OiAnbGVmdCcsXG4gIHJpZ2h0OiAncmlnaHQnLFxuICB0b3A6ICd0b3AnLFxuICBib3R0b206ICdib3R0b20nLFxufTtcblxuY29uc3QgaXNBcnJvd0xlZnQgPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gMzcgPT09IGtleUNvZGUgfHwgJ0Fycm93TGVmdCcgPT09IGNvZGUgfHwgJ0Fycm93TGVmdCcgPT09IGtleTtcbmNvbnN0IGlzQXJyb3dVcCA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiAzOCA9PT0ga2V5Q29kZSB8fCAnQXJyb3dVcCcgPT09IGNvZGUgfHwgJ0Fycm93VXAnID09PSBrZXk7XG5jb25zdCBpc0Fycm93UmlnaHQgPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gMzkgPT09IGtleUNvZGUgfHwgJ0Fycm93UmlnaHQnID09PSBjb2RlIHx8ICdBcnJSaWdodCcgPT09IGtleTtcbmNvbnN0IGlzQXJyb3dEb3duID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDQwID09PSBrZXlDb2RlIHx8ICdBcnJvd0Rvd24nID09PSBjb2RlIHx8ICdBcnJvd0Rvd24nID09PSBrZXk7XG5cbmNvbnN0IEN1YmUgPSAoe1xuICBiYWNrQ29udGVudCxcbiAgYm90dG9tQ29udGVudCxcbiAgY2xhc3NOYW1lLFxuICBkaXNhYmxlZCxcbiAgZmFjZSxcbiAgZnJvbnRDb250ZW50LFxuICBsZWZ0Q29udGVudCxcbiAgcmlnaHRDb250ZW50LFxuICBzaXplLFxuICB0b3BDb250ZW50LFxuICB3aXRoU3dpcGUsXG59KSA9PiB7XG4gIGNvbnN0IFsgYW5nWCwgc2V0QW5nWCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgYW5nWSwgc2V0QW5nWSBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgbW92aW5nLCBzZXRNb3ZpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBzdGFydFgsIHNldFN0YXJ0WCBdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFsgc3RhcnRZLCBzZXRTdGFydFkgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIW1vdmluZyAmJiBpc0Fycm93TGVmdChldmVudCkpIHtcbiAgICAgIHNldEFuZ1koYW5nWSArIDkwKTtcbiAgICB9IGVsc2UgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd1VwKGV2ZW50KSkge1xuICAgICAgc2V0QW5nWChhbmdYIC0gOTApO1xuICAgIH0gZWxzZSBpZiAoIW1vdmluZyAmJiBpc0Fycm93UmlnaHQoZXZlbnQpKSB7XG4gICAgICBzZXRBbmdZKGFuZ1kgLSA5MCk7XG4gICAgfSBlbHNlIGlmICghbW92aW5nICYmIGlzQXJyb3dEb3duKGV2ZW50KSkge1xuICAgICAgc2V0QW5nWChhbmdYICsgOTApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG5cbiAgICBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5mcm9udCkge1xuICAgICAgeSA9IDA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJhY2spIHtcbiAgICAgIHkgPSAtMTgwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5sZWZ0KSB7XG4gICAgICB5ID0gLTkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5yaWdodCkge1xuICAgICAgeSA9IDkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy50b3ApIHtcbiAgICAgIHggPSAtOTA7XG4gICAgfSBlbHNlIGlmIChmYWNlID09PSBDVUJFX0ZBQ0VTLmJvdHRvbSkge1xuICAgICAgeCA9IDkwO1xuICAgIH1cblxuICAgIHNldEFuZ1goeCk7XG4gICAgc2V0QW5nWSh5KTtcbiAgfSwgWyBmYWNlIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhcnRYKG51bGwpO1xuICAgIHNldFN0YXJ0WShudWxsKTtcbiAgICBzZXRNb3ZpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRNb3ZpbmcoZmFsc2UpLCA1MDApO1xuICB9LCBbIGFuZ1gsIGFuZ1kgXSk7XG5cbiAgY29uc3QgaGFuZGxlTW92ZW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZGlzYWJsZWQgJiYgIW1vdmluZyAmJiAoc3RhcnRYIHx8IHN0YXJ0WSkpIHtcbiAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudD8uY2hhbmdlZFRvdWNoZXM/LlswXT8uY2xpZW50WCB8fCBldmVudC5jbGllbnRYO1xuICAgICAgY29uc3QgY2xpZW50WSA9IGV2ZW50Py5jaGFuZ2VkVG91Y2hlcz8uWzBdPy5jbGllbnRZIHx8IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgIGNvbnN0IGRpZmZYID0gY2xpZW50WCAtIHN0YXJ0WDtcbiAgICAgIGNvbnN0IGRpZmZZID0gY2xpZW50WSAtIHN0YXJ0WTtcblxuICAgICAgaWYgKDUwIDwgTWF0aC5hYnMoZGlmZlgpKSB7XG4gICAgICAgIC8vIGhvcml6b250YWwgc3dpcGVcbiAgICAgICAgc2V0QW5nWSgwIDwgZGlmZlggPyBhbmdZICsgOTAgOiBhbmdZIC0gOTApO1xuICAgICAgfVxuICAgICAgaWYgKDUwIDwgTWF0aC5hYnMoZGlmZlkpKSB7XG4gICAgICAgIC8vIHZlcnRpY2FsIHN3aXBlXG4gICAgICAgIHNldEFuZ1goMCA8IGRpZmZZID8gYW5nWCAtIDkwIDogYW5nWCArIDkwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW92ZW1lbnRTdGFydCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudFggPSBldmVudD8udG91Y2hlcz8uWzBdPy5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFg7XG4gICAgY29uc3QgY2xpZW50WSA9IGV2ZW50Py50b3VjaGVzPy5bMF0/LmNsaWVudFkgfHwgZXZlbnQuY2xpZW50WTtcblxuICAgIHNldFN0YXJ0WChjbGllbnRYKTtcbiAgICBzZXRTdGFydFkoY2xpZW50WSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG5cbiAgICBpZiAod2l0aFN3aXBlKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW92ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW92ZW1lbnQpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgY3ViZS1jb250YWluZXIke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBwZXJzcGVjdGl2ZTogc2l6ZSAqIDMsXG4gICAgICB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY3ViZVwiXG4gICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVooLSR7c2l6ZSAvIDJ9cHgpIHJvdGF0ZVgoJHthbmdYfWRlZykgcm90YXRlWSgke2FuZ1l9ZGVnKWAgfX1cbiAgICAgICAgb25Nb3VzZURvd249e3dpdGhTd2lwZSAmJiAhZGlzYWJsZWQgPyBoYW5kbGVNb3ZlbWVudFN0YXJ0IDogdW5kZWZpbmVkfVxuICAgICAgICBvbk1vdXNlVXA9e3dpdGhTd2lwZSAmJiAhZGlzYWJsZWQgPyBoYW5kbGVNb3ZlbWVudCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Ub3VjaEVuZD17d2l0aFN3aXBlICYmICFkaXNhYmxlZCA/IGhhbmRsZU1vdmVtZW50IDogdW5kZWZpbmVkfVxuICAgICAgICBvblRvdWNoU3RhcnQ9e3dpdGhTd2lwZSAmJiAhZGlzYWJsZWQgPyBoYW5kbGVNb3ZlbWVudFN0YXJ0IDogdW5kZWZpbmVkfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWZyb250XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2Zyb250Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1iYWNrXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVaKDE4MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2JhY2tDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLXJpZ2h0XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtyaWdodENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtbGVmdFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge2xlZnRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLXRvcFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7dG9wQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1ib3R0b21cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtib3R0b21Db250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ3ViZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tDb250ZW50OiB1bmRlZmluZWQsXG4gIGJvdHRvbUNvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZmFjZTogQ1VCRV9GQUNFUy5mcm9udCxcbiAgZnJvbnRDb250ZW50OiB1bmRlZmluZWQsXG4gIGxlZnRDb250ZW50OiB1bmRlZmluZWQsXG4gIHJpZ2h0Q29udGVudDogdW5kZWZpbmVkLFxuICBzaXplOiAxNTAsXG4gIHRvcENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgd2l0aFN3aXBlOiBmYWxzZSxcbn07XG5cbkN1YmUucHJvcFR5cGVzID0ge1xuICBiYWNrQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGJvdHRvbUNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmFjZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQ1VCRV9GQUNFUykpLFxuICBmcm9udENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBsZWZ0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHJpZ2h0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvcENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICB3aXRoU3dpcGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsImltcG9ydCBDdWJlIGZyb20gJy4vQ3ViZSc7XG5pbXBvcnQgJy4vY3ViZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEN1YmUgZnJvbSAnLi4vQ3ViZSc7XG5pbXBvcnQgeyBDVUJFX0ZBQ0VTIH0gZnJvbSAnLi4vQ3ViZS9DdWJlJztcblxuY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gIHJldHVybiBNYXRoLmZsb29yKCgoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0ID8gaW5uZXJIZWlnaHQgOiBpbm5lcldpZHRoKSAqIDAuNykgLyAxMCk7XG59O1xuXG5jb25zdCB3aGl0ZUNvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLWJhY2tncm91bmQgYmFja2dyb3VuZFwiIC8+O1xuY29uc3QgcHJpbWFyeUNvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cInByaW1hcnktYmFja2dyb3VuZCBiYWNrZ3JvdW5kXCIgLz47XG5jb25zdCBzZWNvbmRhcnlDb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJzZWNvbmRhcnktYmFja2dyb3VuZCBiYWNrZ3JvdW5kXCIgLz47XG5jb25zdCBhY2NlbnRDb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJhY2NlbnQtYmFja2dyb3VuZCBiYWNrZ3JvdW5kXCIgLz47XG5jb25zdCBzaXplID0gZ2V0U2l6ZSgpO1xuY29uc3QgdW5hbmltYXRlZERpdiA9IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSwgY29sb3I6ICdibGFjaycgfX0gLz47XG5cbmNvbnN0IGN1YmVPcHRpb25zID0ge1xuICBib3R0b21Db250ZW50OiB3aGl0ZUNvbnRlbnQsXG4gIGxlZnRDb250ZW50OiBwcmltYXJ5Q29udGVudCxcbiAgcmlnaHRDb250ZW50OiBzZWNvbmRhcnlDb250ZW50LFxuICB0b3BDb250ZW50OiBhY2NlbnRDb250ZW50LFxufTtcblxuY29uc3QgSGkgPSAoeyBvbkhpZGUgfSkgPT4ge1xuICBjb25zdCBbIGFuaW1hdGlvbiwgc2V0QW5pbWF0aW9uIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgaGlkZGVuLCBzZXRIaWRkZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFuaW1hdGlvbih0cnVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QW5pbWF0aW9uKGZhbHNlKSwgMjAwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRIaWRkZW4odHJ1ZSksIDI1MDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBvbkhpZGUpIHtcbiAgICAgIG9uSGlkZSgpO1xuICAgIH1cbiAgfSwgWyBoaWRkZW4gXSk7XG5cbiAgY29uc3Qgc2hvdyA9IGFuaW1hdGlvbiAmJiAhaGlkZGVuO1xuXG4gIGNvbnN0IGdldFJhbmRvbUN1YmUgPSAoKSA9PiB7XG4gICAgbGV0IGZhY2UgPSBDVUJFX0ZBQ0VTLmZyb250O1xuXG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXG4gICAgICBmYWNlID0gWyBDVUJFX0ZBQ0VTLmJvdHRvbSwgQ1VCRV9GQUNFUy5sZWZ0LCBDVUJFX0ZBQ0VTLnJpZ2h0LCBDVUJFX0ZBQ0VTLnRvcCBdW251bWJlcl07XG4gICAgfVxuXG4gICAgcmV0dXJuIDxDdWJlIHNpemU9e3NpemV9IGZhY2U9e2ZhY2V9IHsuLi5jdWJlT3B0aW9uc30gLz47XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhpLWNvbnRhaW5lciR7aGlkZGVuID8gJyBoaWRkZW4nIDogJyd9YH0+XG4gICAgICA8aDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaW1hcnlcIj5cbiAgICAgICAgICBNeSBDPHNwYW4+dTwvc3Bhbj5WPHNwYW4+ZTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgIGJ5IDxzcGFuIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPkphdmkgR2FyY8OtYSBGYWphcmRvPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGkuZGVmYXVsdFByb3BzID0ge1xuICBvbkhpZGU6IHVuZGVmaW5lZCxcbn07XG5cbkhpLnByb3BUeXBlcyA9IHtcbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpO1xuIiwiaW1wb3J0IEhpIGZyb20gJy4vSGknO1xuaW1wb3J0ICcuL2hpLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBIaTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc2hhZG93XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItdGl0bGVcIj5cbiAgICAgICAgTXkgQzxzcGFuPnU8L3NwYW4+VjxzcGFuPmU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN1YnRpdGxlXCI+XG4gICAgICAgIGJ5IDxzcGFuPkphdmkgR2FyY8OtYSBGYWphcmRvPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgJy4vbmF2YmFyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSWNvbiA9ICh7IGljb24sIC4uLnJlc3QgfSkgPT4gPGkgey4uLnJlc3R9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT17aWNvbn0gLz47XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBpY29uOiB1bmRlZmluZWQsXG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0ICcuL2ljb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpY29uLCB0ZXh0LCAuLi5yZXN0IH0pID0+IChcbiAgPGJ1dHRvbiBjbGFzc05hbWU9e2BjdXN0b20tYnRuJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfSB0eXBlPVwiYnV0dG9uXCIgey4uLnJlc3R9PlxuICAgIHtpY29uICYmIDxJY29uIGljb249e2ljb259IC8+fVxuICAgIHt0ZXh0ICYmIDxzcGFuPnt0ZXh0fTwvc3Bhbj59XG4gICAge2NoaWxkcmVufVxuICA8L2J1dHRvbj5cbik7XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIHRleHQ6IHVuZGVmaW5lZCxcbn07XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgJy4vYnV0dG9uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIG9uRnVsbHNjcmVlbiwgb25GdWxsc2NyZWVuT3V0LCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IFsgZmFkZW91dCwgc2V0RmFkZW91dCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGZ1bGxzY3JlZW4sIHNldEZ1bGxzY3JlZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyB0YXBwZWQsIHNldFRhcHBlZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZhZGVvdXQgJiYgZnVsbHNjcmVlbikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRGdWxsc2NyZWVuKGZhbHNlKSwgNDAwKTtcbiAgICB9XG4gIH0sIFsgZmFkZW91dCBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZnVsbHNjcmVlbiAmJiBmYWRlb3V0KSB7XG4gICAgICBzZXRGYWRlb3V0KGZhbHNlKTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2Ygb25GdWxsc2NyZWVuT3V0KSB7XG4gICAgICAgIG9uRnVsbHNjcmVlbk91dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnVsbHNjcmVlbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb25GdWxsc2NyZWVuKSB7XG4gICAgICBvbkZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH0sIFsgZnVsbHNjcmVlbiBdKTtcbiAgY29uc3QgY2xlYXJUYXBwZWQgPSAoKSA9PiBzZXRUYXBwZWQoZmFsc2UpO1xuXG4gIGNvbnN0IGlzRG91YmxlVGFwID0gKCkgPT4ge1xuICAgIGlmICh0YXBwZWQpIHtcbiAgICAgIHNldEZ1bGxzY3JlZW4odHJ1ZSk7XG4gICAgICBjbGVhclRpbWVvdXQoY2xlYXJUYXBwZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUYXBwZWQodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KGNsZWFyVGFwcGVkLCAzMDApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZnVsbHNjcmVlbiA/IChcbiAgICBjcmVhdGVQb3J0YWwoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGN1YmUtc2VjdGlvbiBjdWJlLXNlY3Rpb24tZnVsbCAke2ZhZGVvdXQgPyAnZmFkZW91dCcgOiAnZmFkZWluJ30ke1xuICAgICAgICAgIGNsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnXG4gICAgICAgIH1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWJlLXNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAge3RpdGxlICYmIDxoMj57dGl0bGV9PC9oMj59XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtYnRuXCJcbiAgICAgICAgICAgIGljb249XCJmYXMgZmEtdGltZXNcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmFkZW91dCh0cnVlKX1cbiAgICAgICAgICAgIG9uVG91Y2hFbmQ9eygpID0+IHNldEZhZGVvdXQodHJ1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+LFxuICAgICAgZG9jdW1lbnQuYm9keSxcbiAgICApXG4gICkgOiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgY3ViZS1zZWN0aW9uIGZhZGVpbiR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH1cbiAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+ICFkaXNhYmxlZCAmJiBzZXRGdWxsc2NyZWVuKHRydWUpfVxuICAgICAgb25Ub3VjaEVuZD17aXNEb3VibGVUYXB9PlxuICAgICAgPGRpdj5cbiAgICAgICAge3RpdGxlICYmIDxoMj57dGl0bGV9PC9oMj59XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPVwic2VlLW1vcmUtYnRuXCIgaWNvbj1cImZhcyBmYS1wbHVzXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbHNjcmVlbih0cnVlKX0gLz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25GdWxsc2NyZWVuOiB1bmRlZmluZWQsXG4gIG9uRnVsbHNjcmVlbk91dDogdW5kZWZpbmVkLFxuICB0aXRsZTogdW5kZWZpbmVkLFxufTtcblxuU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uRnVsbHNjcmVlbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRnVsbHNjcmVlbk91dDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XG5pbXBvcnQgJy4vc2VjdGlvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImltcG9ydCBlZHVjYXRpb24gZnJvbSAnLi9lcy9lZHVjYXRpb24uanNvbic7XG5pbXBvcnQgZXhwZXJpZW5jZSBmcm9tICcuL2VzL2V4cGVyaWVuY2UuanNvbic7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuL2VzL3Byb2ZpbGUuanNvbic7XG5pbXBvcnQgaW5mbyBmcm9tICcuL2VzL2luZm8uanNvbic7XG5pbXBvcnQgc29jaWFsIGZyb20gJy4vZXMvc29jaWFsLmpzb24nO1xuXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XG4gIGVkdWNhdGlvbixcbiAgZXhwZXJpZW5jZSxcbiAgaW5mbyxcbiAgcHJvZmlsZSxcbiAgc29jaWFsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRpb25zO1xuIiwiaW1wb3J0IGVkdWNhdGlvbiBmcm9tICcuL2VuL2VkdWNhdGlvbi5qc29uJztcbmltcG9ydCBleHBlcmllbmNlIGZyb20gJy4vZW4vZXhwZXJpZW5jZS5qc29uJztcbmltcG9ydCBpbmZvIGZyb20gJy4vZW4vaW5mby5qc29uJztcbmltcG9ydCBwcm9maWxlIGZyb20gJy4vZW4vcHJvZmlsZS5qc29uJztcbmltcG9ydCBzb2NpYWwgZnJvbSAnLi9lbi9zb2NpYWwuanNvbic7XG5cbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcbiAgZWR1Y2F0aW9uLFxuICBleHBlcmllbmNlLFxuICBpbmZvLFxuICBwcm9maWxlLFxuICBzb2NpYWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGlvbnM7XG4iLCJpbXBvcnQgZXMgZnJvbSAnLi9lcyc7XG5pbXBvcnQgZW4gZnJvbSAnLi9lbic7XG5cbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHsgZXMsIGVuIH07XG5cbmV4cG9ydCBjb25zdCBMQU5HX0lEUyA9IHtcbiAgZW5nbGlzaDogJ2VuJyxcbiAgc3BhbmlzaDogJ2VzJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMb2NhbGUgPSAobGFuZykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCBsYW5nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhbGUgPSAoKSA9PiB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmxhbmd1YWdlKSB7XG4gICAgcmV0dXJuIExBTkdfSURTLnNwYW5pc2g7XG4gIH1cbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sYW5ndWFnZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1NwYW5pc2ggPSAoKSA9PiBMQU5HX0lEUy5zcGFuaXNoID09PSBnZXRMb2NhbGUoKTtcblxuLyoqXG4gKiBSZXNvbHZlcyBhIHN0cmluZyAnaW5kZXgnIGZvciB0aGUgSmF2YVNjcmlwdCBPYmplY3RcbiAqL1xuY29uc3QgcmVzb2x2ZUluZGV4ID0gKHN0cikgPT4ge1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXFxbKFxcdyspXFxdL2csICcuJDEnKTsgLy8gY29udmVydCBpbmRleGVzIHRvIHByb3BlcnRpZXNcbiAgc3RyID0gc3RyLnJlcGxhY2UoL15cXC4vLCAnJyk7IC8vIHN0cmlwIGEgbGVhZGluZyBkb3RcbiAgY29uc3QgYXJyYXkgPSBzdHIuc3BsaXQoJy4nKTtcblxuICBsZXQgdHJhbnNsYXRpb25zTGFuZyA9IHRyYW5zbGF0aW9uc1tnZXRMb2NhbGUoKV07XG5cbiAgZm9yIChsZXQgaSA9IDAsIHsgbGVuZ3RoIH0gPSBhcnJheTsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgZWxlbSA9IGFycmF5W2ldO1xuICAgIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIHRyYW5zbGF0aW9uc0xhbmcgJiYgZWxlbSBpbiB0cmFuc2xhdGlvbnNMYW5nKSB7XG4gICAgICB0cmFuc2xhdGlvbnNMYW5nID0gdHJhbnNsYXRpb25zTGFuZ1tlbGVtXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cmFuc2xhdGlvbnNMYW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZSA9IChrZXkpID0+IHJlc29sdmVJbmRleChrZXkpO1xuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0gW1xuICB7IG5hbWU6IHRyYW5zbGF0ZSgnbGFuZ3VhZ2UuZXMnKSwgdmFsdWU6ICdlcycgfSxcbiAgeyBuYW1lOiB0cmFuc2xhdGUoJ2xhbmd1YWdlLmVuJyksIHZhbHVlOiAnZW4nIH0sXG5dO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBCQVJfVFlQRVMgPSB7XG4gIHByaW1hcnlEYXJrZXI6ICdwcmltYXJ5LWRhcmtlcicsXG4gIHByaW1hcnlEYXJrOiAncHJpbWFyeS1kYXJrJyxcbiAgcHJpbWFyeTogJ3ByaW1hcnknLFxuICBzZWNvbmRhcnlEYXJrZXI6ICdzZWNvbmRhcnktZGFya2VyJyxcbiAgc2Vjb25kYXJ5RGFyazogJ3NlY29uZGFyeS1kYXJrJyxcbiAgc2Vjb25kYXJ5OiAnc2Vjb25kYXJ5JyxcbiAgYWNjZW50RGFya2VyOiAnYWNjZW50LWRhcmtlcicsXG4gIGFjY2VudERhcms6ICdhY2NlbnQtZGFyaycsXG4gIGFjY2VudDogJ2FjY2VudCcsXG59O1xuXG5jb25zdCBnZXRUb3RhbCA9ICh0b3RhbCwgYW1vdW50KSA9PiAoYW1vdW50ICogMTAwKSAvIHRvdGFsO1xuY29uc3QgZ2V0Q29sb3IgPSAodG90YWwpID0+IHtcbiAgaWYgKDEwMCA9PT0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnByaW1hcnlEYXJrZXI7XG4gIH1cbiAgaWYgKDkwIDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5wcmltYXJ5RGFyaztcbiAgfVxuICBpZiAoNzUgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnByaW1hcnk7XG4gIH1cbiAgaWYgKDYwIDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5zZWNvbmRhcnlEYXJrZXI7XG4gIH1cbiAgaWYgKDU1IDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5zZWNvbmRhcnlEYXJrO1xuICB9XG4gIGlmICg0MCA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMuc2Vjb25kYXJ5O1xuICB9XG4gIGlmICgyNSA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMuYWNjZW50RGFya2VyO1xuICB9XG4gIGlmICgxMCA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMuYWNjZW50RGFyaztcbiAgfVxuICByZXR1cm4gQkFSX1RZUEVTLmFjY2VudDtcbn07XG5cbmNvbnN0IEJhciA9ICh7IGFtb3VudCwgY2xhc3NOYW1lLCB0ZXh0LCB0b3RhbEFtb3VudCwgdmVydGljYWwsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBbIGNvbG9yLCBzZXRDb2xvciBdID0gdXNlU3RhdGUoQkFSX1RZUEVTLnByaW1hcnkpO1xuICBjb25zdCBbIG1vdW50ZWQsIHNldE1vdW50ZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyB0b3RhbCwgc2V0VG90YWwgXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vdW50ZWQpIHtcbiAgICAgIGNvbnN0IG5ld3RvdGFsID0gZ2V0VG90YWwodG90YWxBbW91bnQsIGFtb3VudCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFRvdGFsKG5ld3RvdGFsKSwgNTAwKTtcbiAgICAgIHNldENvbG9yKGdldENvbG9yKG5ld3RvdGFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbIG1vdW50ZWQgXSk7XG5cbiAgdXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmIChtb3VudGVkKSB7XG4gICAgICBjb25zdCBuZXd0b3RhbCA9IGdldFRvdGFsKHRvdGFsQW1vdW50LCBhbW91bnQpO1xuICAgICAgc2V0VG90YWwobmV3dG90YWwpO1xuICAgICAgc2V0Q29sb3IoZ2V0Q29sb3IobmV3dG90YWwpKTtcbiAgICB9XG4gIH0sIFsgYW1vdW50LCB0b3RhbEFtb3VudCBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgY2xhc3NOYW1lPXtgYmFyLXRvdGFsIGZhZGVpbiR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9ICR7dmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BiYXIgJHtjb2xvcn1gfSBzdHlsZT17dmVydGljYWwgPyB7IGhlaWdodDogYCR7dG90YWx9YCB9IDogeyB3aWR0aDogYCR7dG90YWx9JWAgfX0+XG4gICAgICAgIHttb3VudGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYWRlaW5cIj5cbiAgICAgICAgICAgIHt0ZXh0fSB7dG90YWx9JVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYW1vdW50OiAwLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkLFxuICB0b3RhbEFtb3VudDogMTAwLFxuICB2ZXJ0aWNhbDogZmFsc2UsXG59O1xuXG5CYXIucHJvcFR5cGVzID0ge1xuICBhbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG90YWxBbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcjtcbiIsImltcG9ydCBCYXIgZnJvbSAnLi9CYXInO1xuaW1wb3J0ICcuL2Jhci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb24nO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdHJhbnNsYXRvcic7XG5pbXBvcnQgQmFyIGZyb20gJy4uLy4uL0Jhcic7XG5cbmNvbnN0IFByb2ZpbGUgPSAoeyAuLi5yZXN0IH0pID0+IChcbiAgPFNlY3Rpb24gey4uLnJlc3R9IHRpdGxlPXt0cmFuc2xhdGUoJ3Byb2ZpbGUudGl0bGUnKX0gY2xhc3NOYW1lPVwicHJvZmlsZS1zZWN0aW9uXCI+XG4gICAgPHA+e3RyYW5zbGF0ZSgncHJvZmlsZS5oZWFkZXInKX08L3A+XG4gICAgPEJhciB0ZXh0PVwiUmVhY3RcIiBhbW91bnQ9ezgwfSAvPlxuICAgIDxCYXIgdGV4dD1cIlJlYWN0IE5hdGl2ZVwiIGFtb3VudD17NTB9IC8+XG4gICAgPEJhciB0ZXh0PVwiSFRNTFwiIGFtb3VudD17NzV9IC8+XG4gICAgPEJhciB0ZXh0PVwiQ1NTXCIgYW1vdW50PXs4NX0gLz5cbiAgICA8QmFyIHRleHQ9XCJHcmFwaFFMXCIgYW1vdW50PXs1NX0gLz5cbiAgICA8QmFyIHRleHQ9XCJOb2RlXCIgYW1vdW50PXs2NX0gLz5cbiAgICA8QmFyIHRleHQ9XCJNb25nb1wiIGFtb3VudD17NzB9IC8+XG4gICAgPEJhciB0ZXh0PVwiQW5ndWxhclwiIGFtb3VudD17NDB9IC8+XG4gICAgPEJhciB0ZXh0PVwiSmF2YVwiIGFtb3VudD17NjB9IC8+XG4gICAgPEJhciB0ZXh0PVwiU3ByaW5nYm9vdFwiIGFtb3VudD17MjB9IC8+XG4gICAgPEJhciB0ZXh0PVwiVnVlXCIgYW1vdW50PXsyMH0gLz5cbiAgICA8cD57dHJhbnNsYXRlKCdwcm9maWxlLnRleHQnKX08L3A+XG4gICAgPHA+e3RyYW5zbGF0ZSgncHJvZmlsZS50ZXh0MicpfTwvcD5cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiIsImltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSc7XG5pbXBvcnQgJy4vcHJvZmlsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBDb21wYW55ID0gKHsgZW5kLCBuYW1lLCBwbGFjZSwgcm9sZSwgc3RhcnQsIHRlY2hub2xvZ2llcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueS1leHBlcmllbmNlXCI+XG4gICAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS1uYW1lXCI+e25hbWV9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktZHVyYXRpb25cIj5cbiAgICAgIHtzdGFydH0gLSB7ZW5kfVxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LXJvbGVcIj57cm9sZX08L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS1wbGFjZVwiPntwbGFjZX08L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS10ZWNoXCI+e3RlY2hub2xvZ2llc308L3A+XG4gIDwvZGl2PlxuKTtcblxuQ29tcGFueS5wcm9wVHlwZXMgPSB7XG4gIGVuZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhcnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGVjaG5vbG9naWVzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xuIiwiaW1wb3J0IENvbXBhbnkgZnJvbSAnLi9Db21wYW55JztcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9uJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RyYW5zbGF0b3InO1xuaW1wb3J0IENvbXBhbnkgZnJvbSAnLi9Db21wYW55JztcblxuY29uc3QgY29tcGFuaWVzID0gW1xuICB7XG4gICAgbmFtZTogJ1dvenpvJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2Uud296em8ucm9sZScpLFxuICAgIHBsYWNlOiAnUGFsbWEgZGUgTWFsbG9yY2EnLFxuICAgIHN0YXJ0OiAnMDkvMjAxNycsXG4gICAgZW5kOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UucHJlc2VudCcpLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLndvenpvLnRlY2hub2xvZ2llcycpLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1BsZXh1cyBUZWNobm9sb2dpZXMnLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5wbGV4dXMucm9sZScpLFxuICAgIHBsYWNlOiAnUGFsbWEgZGUgTWFsbG9yY2EnLFxuICAgIHN0YXJ0OiAnMDgvMjAxNicsXG4gICAgZW5kOiAnMDkvMjAxNycsXG4gICAgdGVjaG5vbG9naWVzOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UucGxleHVzLnRlY2hub2xvZ2llcycpLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0dNVicsXG4gICAgcm9sZTogdHJhbnNsYXRlKCdleHBlcmllbmNlLmdtdi5yb2xlJyksXG4gICAgcGxhY2U6ICdTZXZpbGxhJyxcbiAgICBzdGFydDogJzA5LzIwMTUnLFxuICAgIGVuZDogJzA4LzIwMTYnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLmdtdi50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPZXPDrWEgTmV0d29ya3MnLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5vZXNpYS5yb2xlJyksXG4gICAgcGxhY2U6ICdTZXZpbGxhJyxcbiAgICBzdGFydDogJzA2LzIwMTUnLFxuICAgIGVuZDogJzA4LzIwMTUnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLm9lc2lhLnRlY2hub2xvZ2llcycpLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0F0b3MnLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5hdG9zLnJvbGUnKSxcbiAgICBwbGFjZTogJ1NldmlsbGEnLFxuICAgIHN0YXJ0OiAnMDgvMjAxMycsXG4gICAgZW5kOiAnMDYvMjAxNScsXG4gICAgdGVjaG5vbG9naWVzOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UuYXRvcy50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbl07XG5cbmNvbnN0IEV4cGVyaWVuY2UgPSAoeyAuLi5yZXN0IH0pID0+IChcbiAgPFNlY3Rpb24gey4uLnJlc3R9IHRpdGxlPXt0cmFuc2xhdGUoJ2V4cGVyaWVuY2UudGl0bGUnKX0gY2xhc3NOYW1lPVwiZXhwZXJpZW5jZS1zZWN0aW9uXCI+XG4gICAge2NvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IChcbiAgICAgIDxDb21wYW55IGtleT17Y29tcGFueS5uYW1lfSB7Li4uY29tcGFueX0gLz5cbiAgICApKX1cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTtcbiIsImltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4vRXhwZXJpZW5jZSc7XG5pbXBvcnQgJy4vZXhwZXJpZW5jZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vLi4vSWNvbic7XG5cbmNvbnN0IE5ldHdvcmsgPSAoeyBpY29uLCBsaW5rLCBuYW1lLCB1c2VybmFtZSB9KSA9PiAoXG4gIDxhIGNsYXNzTmFtZT1cInNvY2lhbC1uZXR3b3JrXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17bGlua30gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgIDxJY29uIGljb249e2ljb259IC8+XG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm5ldHdvcmstbmFtZVwiPntuYW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm5ldHdvcmstdXNlcm5hbWVcIj57dXNlcm5hbWV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibmV0d29yay1saW5rXCI+e2xpbmt9PC9wPlxuICAgIDwvZGl2PlxuICA8L2E+XG4pO1xuXG5OZXR3b3JrLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ldHdvcms7XG4iLCJpbXBvcnQgTmV0d29yayBmcm9tICcuL05ldHdvcmsnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXR3b3JrO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb24nO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdHJhbnNsYXRvcic7XG5pbXBvcnQgTmV0d29yayBmcm9tICcuL05ldHdvcmsnO1xuXG5jb25zdCBuZXR3b3JrcyA9IFtcbiAge1xuICAgIGljb246ICdmYWIgZmEtbGlua2VkaW4nLFxuICAgIGxpbms6ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9qYXZpZ2FyY2lhZmFqYXJkbycsXG4gICAgbmFtZTogJ0xpbmtlZEluJyxcbiAgICB1c2VybmFtZTogJ0phdmllciBHYXJjw61hIEZhamFyZG8nLFxuICB9LFxuICB7XG4gICAgaWNvbjogJ2ZhYiBmYS1naXRodWInLFxuICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vSmF2aUdGOC8nLFxuICAgIG5hbWU6ICdHaXRIdWInLFxuICAgIHVzZXJuYW1lOiAnSmF2aUdGOCcsXG4gIH0sXG5dO1xuXG5jb25zdCBTb2NpYWwgPSAoeyAuLi5yZXN0IH0pID0+IChcbiAgPFNlY3Rpb24gey4uLnJlc3R9IHRpdGxlPXt0cmFuc2xhdGUoJ3NvY2lhbC50aXRsZScpfSBjbGFzc05hbWU9XCJzb2NpYWwtc2VjdGlvblwiPlxuICAgIHtuZXR3b3Jrcy5tYXAoKG5ldCkgPT4gKFxuICAgICAgPE5ldHdvcmsga2V5PXtuZXQubmFtZX0gey4uLm5ldH0gLz5cbiAgICApKX1cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsO1xuIiwiaW1wb3J0IFNvY2lhbCBmcm9tICcuL1NvY2lhbCc7XG5pbXBvcnQgJy4vc29jaWFsLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgVGl0bGUgPSAoeyBkYXRlLCBleHBlZGl0b3IsIG5hbWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbi10aXRsZVwiPlxuICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW5hbWVcIj57bmFtZX08L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtZXhwZWRpdG9yXCI+e2V4cGVkaXRvcn08L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtZGF0ZVwiPntkYXRlfTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXhwZWRpdG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIiwiaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9uJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RyYW5zbGF0b3InO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnO1xuXG5jb25zdCB0aXRsZXMgPSBbXG4gIHtcbiAgICBkYXRlOiAnMjAwNiAtIDIwMTMnLFxuICAgIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24udW5pdmVyc2l0eS5leHBlZGl0b3InKSxcbiAgICBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi51bml2ZXJzaXR5LnRpdGxlJyksXG4gIH0sXG4gIHsgZGF0ZTogJzA0LzIwMTknLCBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLnJlYWN0LmV4cGVkaXRvcicpLCBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5yZWFjdC50aXRsZScpIH0sXG4gIHtcbiAgICBkYXRlOiAnMDYvMjAxNycsXG4gICAgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5yZWFjdEJhc2ljLmV4cGVkaXRvcicpLFxuICAgIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLnJlYWN0QmFzaWMudGl0bGUnKSxcbiAgfSxcbiAge1xuICAgIGRhdGU6ICcwNi8yMDE3JyxcbiAgICBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmFuZ3VsYXI0LmV4cGVkaXRvcicpLFxuICAgIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmFuZ3VsYXI0LnRpdGxlJyksXG4gIH0sXG4gIHtcbiAgICBkYXRlOiAnMDYvMjAxNycsXG4gICAgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi50eXBlc2NyaXB0LmV4cGVkaXRvcicpLFxuICAgIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLnR5cGVzY3JpcHQudGl0bGUnKSxcbiAgfSxcbiAgeyBkYXRlOiAnMDYvMjAxNycsIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24uanF1ZXJ5LmV4cGVkaXRvcicpLCBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5qcXVlcnkudGl0bGUnKSB9LFxuICB7XG4gICAgZGF0ZTogJzA2LzIwMTcnLFxuICAgIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24uYm9vdHN0cmFwLmV4cGVkaXRvcicpLFxuICAgIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmJvb3RzdHJhcC50aXRsZScpLFxuICB9LFxuICB7XG4gICAgZGF0ZTogJzExLzIwMTYnLFxuICAgIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24uYW5ndWxhcmpzLmV4cGVkaXRvcicpLFxuICAgIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmFuZ3VsYXJqcy50aXRsZScpLFxuICB9LFxuICB7XG4gICAgZGF0ZTogJzAzLzIwMTYgLSAwNC8yMDE2JyxcbiAgICBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmFnaWxlLmV4cGVkaXRvcicpLFxuICAgIG5hbWU6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmFnaWxlLnRpdGxlJyksXG4gIH0sXG4gIHtcbiAgICBkYXRlOiAnMDYvMjAxNSAtIDA4LzIwMTUnLFxuICAgIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24uYW5kcm9pZC5leHBlZGl0b3InKSxcbiAgICBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5hbmRyb2lkLnRpdGxlJyksXG4gIH0sXG5dO1xuXG5jb25zdCBFZHVjYXRpb24gPSAoeyAuLi5yZXN0IH0pID0+IChcbiAgPFNlY3Rpb24gey4uLnJlc3R9IHRpdGxlPXt0cmFuc2xhdGUoJ2VkdWNhdGlvbi50aXRsZScpfSBjbGFzc05hbWU9XCJlZHVjYXRpb24tc2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLXRpdGxlc1wiPlxuICAgICAge3RpdGxlcy5tYXAoKHRpdGxlKSA9PiAoXG4gICAgICAgIDxUaXRsZSBrZXk9e3RpdGxlLm5hbWV9IHsuLi50aXRsZX0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb247XG4iLCJpbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4vRWR1Y2F0aW9uJztcbmltcG9ydCAnLi9lZHVjYXRpb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDdWJlIGZyb20gJy4uL0N1YmUnO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL1NlY3Rpb24nO1xuaW1wb3J0IHsgQ1VCRV9GQUNFUyB9IGZyb20gJy4uL0N1YmUvQ3ViZSc7XG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuL0V4cGVyaWVuY2UnO1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuL1NvY2lhbCc7XG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4vRWR1Y2F0aW9uJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0b3InO1xuXG5jb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICBjb25zdCB7IGlubmVySGVpZ2h0LCBpbm5lcldpZHRoIH0gPSB3aW5kb3c7XG5cbiAgcmV0dXJuIChpbm5lcldpZHRoID4gaW5uZXJIZWlnaHQgPyBpbm5lckhlaWdodCA6IGlubmVyV2lkdGgpICogMC44O1xufTtcbmNvbnN0IHNpemUgPSBnZXRTaXplKCk7XG5cbmNvbnN0IE1haW5DdWJlID0gKHsgaGlkZGVuSW50cm8gfSkgPT4ge1xuICBjb25zdCBbIGluaXRpYWxUcmFuc2l0aW9uLCBzZXRJbml0aWFsVHJhbnNpdGlvbiBdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFsgaXNGdWxsc2NyZWVuLCBzZXRJc0Z1bGxzY3JlZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoaWRkZW5JbnRybykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJbml0aWFsVHJhbnNpdGlvbihmYWxzZSksIDc1MCk7XG4gICAgfVxuICB9LCBbIGhpZGRlbkludHJvIF0pO1xuXG4gIGNvbnN0IGNvbW1vblByb3BzID0ge1xuICAgIG9uRnVsbHNjcmVlbjogKCkgPT4gc2V0SXNGdWxsc2NyZWVuKHRydWUpLFxuICAgIG9uRnVsbHNjcmVlbk91dDogKCkgPT4gc2V0SXNGdWxsc2NyZWVuKGZhbHNlKSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJtYWluLWN1YmVcIiBjbGFzc05hbWU9e2hpZGRlbkludHJvID8gJycgOiAnaGlkZGVuLWN1YmUnfT5cbiAgICAgIDxDdWJlXG4gICAgICAgIGNsYXNzTmFtZT17aW5pdGlhbFRyYW5zaXRpb24gPyAnaW5pdGlhbC10cmFuc2l0aW9uJyA6ICcnfVxuICAgICAgICBkaXNhYmxlZD17aXNGdWxsc2NyZWVufVxuICAgICAgICBmYWNlPXtpbml0aWFsVHJhbnNpdGlvbiA/IENVQkVfRkFDRVMuYmFjayA6IENVQkVfRkFDRVMuZnJvbnR9XG4gICAgICAgIGxlZnRDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8RWR1Y2F0aW9uIHsuLi5jb21tb25Qcm9wc30gLz59XG4gICAgICAgIGZyb250Q29udGVudD17aGlkZGVuSW50cm8gJiYgPFByb2ZpbGUgey4uLmNvbW1vblByb3BzfSAvPn1cbiAgICAgICAgcmlnaHRDb250ZW50PXtoaWRkZW5JbnRybyAmJiA8RXhwZXJpZW5jZSB7Li4uY29tbW9uUHJvcHN9IC8+fVxuICAgICAgICBiYWNrQ29udGVudD17aGlkZGVuSW50cm8gJiYgPFNvY2lhbCB7Li4uY29tbW9uUHJvcHN9IC8+fVxuICAgICAgICBib3R0b21Db250ZW50PXtcbiAgICAgICAgICBoaWRkZW5JbnRybyAmJiAoXG4gICAgICAgICAgICA8U2VjdGlvbiB7Li4uY29tbW9uUHJvcHN9IHRpdGxlPVwiTWFkZSBieSBKYXZpIEdhcmPDrWEgRmFqYXJkb1wiIGRpc2FibGVkPlxuICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCdpbmZvLmNvZGVJbicpfTo8L3A+XG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSmF2aUdGOC9teS1jdi9cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL0phdmlHRjgvbXktY3YvXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgdG9wQ29udGVudD17aGlkZGVuSW50cm8gJiYgPFNlY3Rpb24gey4uLmNvbW1vblByb3BzfSB0aXRsZT1cIkhlbGxvIDopXCIgZGlzYWJsZWQgLz59XG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIHdpdGhTd2lwZVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1haW5DdWJlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGlkZGVuSW50cm86IGZhbHNlLFxufTtcblxuTWFpbkN1YmUucHJvcFR5cGVzID0ge1xuICBoaWRkZW5JbnRybzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ3ViZTtcbiIsImltcG9ydCBNYWluQ3ViZSBmcm9tICcuL01haW5DdWJlJztcbmltcG9ydCAnLi9tYWluQ3ViZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkN1YmU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0b3InO1xuXG5jb25zdCBJbmZvID0gKCkgPT4ge1xuICBjb25zdCBbIHNob3csIHNldFNob3cgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BpbmZvLXNlY3Rpb24gc2hhZG93JHtzaG93ID8gJyBpbmZvLXNlY3Rpb24tZnVsbCcgOiAnJ31gfVxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaG93KHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+XG4gICAgICA8SWNvbiBpY29uPVwiZmFzIGZhLWluZm9cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvLXRpdGxlXCI+e3RyYW5zbGF0ZSgnaW5mby5ob3dUb1VzZScpfTwvcD5cbiAgICAgICAgPHA+e3RyYW5zbGF0ZSgnaW5mby5pbmZvJyl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmZvO1xuIiwiaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvJztcbmltcG9ydCAnLi9pbmZvLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBJbmZvO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpIGZyb20gJy4uL2NvbXBvbmVudHMvSGknO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgTWFpbkN1YmUgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluQ3ViZSc7XG5pbXBvcnQgSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL0luZm8nO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbIGhpZGRlbkludHJvLCBzZXRIaWRkZW5JbnRybyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9XCJmYWRlaW5cIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8SGkgb25IaWRlPXsoKSA9PiBzZXRIaWRkZW5JbnRybyh0cnVlKX0gLz5cbiAgICAgICAgPE1haW5DdWJlIGhpZGRlbkludHJvPXtoaWRkZW5JbnRyb30gLz5cbiAgICAgICAgPEluZm8gLz5cbiAgICAgICAgPGRpdiBpZD1cInNlbGVjdGVkLXNlY3Rpb25cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPE1haW4gLz5cbiAgPC9Ccm93c2VyUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=