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

module.exports = JSON.parse("{\"atos\":{\"role\":\"Programador junior\",\"technologies\":\"Java, Primefaces, JavaScript, jQuery, ExtJs, Oracle\"},\"gmv\":{\"role\":\"Programador senior\",\"technologies\":\"AngularJs, JavaScript, Java, Primefaces, PostgreSQL, Oracle, Talend\"},\"plexus\":{\"role\":\"Analista y desarrollador fullstack\",\"technologies\":\"Java, AngularJs, JavaScript, Node, Springboot, Oracle, Mongo\"},\"plexus2\":{\"role\":\"Desarrollador\",\"technologies\":\"React\"},\"oesia\":{\"role\":\"Programador senior\",\"technologies\":\"JavaScript, jQuery, Ajax, Java, Richfaces, MySQL, Oracle\"},\"present\":\"Actualidad\",\"title\":\"Experiencia profesional\",\"wozzo\":{\"role\":\"Analista y desarrollador fullstack\",\"technologies\":\"React, React Native, Redux, GraphQL, Apollo, Express, Node, Mongo\"}}");

/***/ }),

/***/ 142:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Profesional fullstack con más de 6 años de experiencia.\",\"text\":\"Más de 6 años como fullstack developer, inicialmente con tecnologías Java y desde septiembre de 2017 centrado en tecnologías Javascript.\",\"text2\":\"El stack tecnológico con el que más cómodo me siento es React y/o React Native, GraphQL con Apollo y/o Redux, Node y Mongo.\",\"title\":\"Perfil profesional\"}");

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

module.exports = JSON.parse("{\"atos\":{\"role\":\"Junior developer\",\"technologies\":\"Java, Primefaces, JavaScript, jQuery, ExtJs, Oracle\"},\"gmv\":{\"role\":\"Senior developer\",\"technologies\":\"AngularJs, JavaScript, Java, Primefaces, PostgreSQL, Oracle, Talend\"},\"plexus\":{\"role\":\"Analyst and fullstack developer\",\"technologies\":\"Java, AngularJs, JavaScript, Node, Springboot, Oracle, Mongo\"},\"plexus2\":{\"role\":\"Developer\",\"technologies\":\"React\"},\"oesia\":{\"role\":\"Senior developer\",\"technologies\":\"JavaScript, jQuery, Ajax, Java, Richfaces, MySQL, Oracle\"},\"present\":\"Present\",\"title\":\"Professional experience\",\"wozzo\":{\"role\":\"Analyst and fullstack developer\",\"technologies\":\"React, React Native, Redux, GraphQL, Apollo, Express, Node, Mongo\"}}");

/***/ }),

/***/ 147:
/***/ (function(module) {

module.exports = JSON.parse("{\"codeIn\":\"You can see the code in\",\"howToUse\":\"How to use?\",\"info\":\"You can see any of the faces of the cube by dragging on it in the desired direction. To see the complete information of any of the faces, you have to double click on it. Both functionalities are available for mobile and computer.\"}");

/***/ }),

/***/ 148:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Fullstack professional with more than 6 years of experience.\",\"text\":\"More than 6 years as a fullstack developer, initially with Java technologies and since September 2017 focused on Javascript technologies.\",\"text2\":\"The technological stack I'm most comfortable with is React and/or React Native, GraphQL with Apollo and/or Redux, Node and Mongo.\",\"title\":\"Professional profile\"}");

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
  name: 'Plexus Technologies',
  role: translate('experience.plexus2.role'),
  place: 'Palma de Mallorca / Sevilla',
  start: '07/2020',
  end: translate('experience.present'),
  technologies: translate('experience.plexus2.technologies')
}, {
  name: 'Wozzo',
  role: translate('experience.wozzo.role'),
  place: 'Palma de Mallorca',
  start: '09/2017',
  end: '07/2020',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3ViZS9jdWJlLnNjc3M/NTViYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL2N1YmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaS9oaS5zY3NzP2UwNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvaGkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3M/YmFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9zZWN0aW9uLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL3NlY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3M/MmM4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXIvYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvUHJvZmlsZS9wcm9maWxlLnNjc3M/YjBhNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL3Byb2ZpbGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL2V4cGVyaWVuY2Uuc2Nzcz85MzFhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvZXhwZXJpZW5jZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9zb2NpYWwuc2Nzcz8wMjEyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1NvY2lhbC9zb2NpYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FZHVjYXRpb24vZWR1Y2F0aW9uLnNjc3M/ZDExZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FZHVjYXRpb24vZWR1Y2F0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvbWFpbkN1YmUuc2Nzcz8yMWM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL21haW5DdWJlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mby9pbmZvLnNjc3M/MDcwYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmZvL2luZm8uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcz8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdWJlL0N1YmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGkvSGkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2xhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9CYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL1Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvRXhwZXJpZW5jZS9Db21wYW55L0NvbXBhbnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvQ29tcGFueS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9FeHBlcmllbmNlL0V4cGVyaWVuY2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0V4cGVyaWVuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL05ldHdvcmsvTmV0d29yay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL05ldHdvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL1NvY2lhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvU29jaWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0VkdWNhdGlvbi9UaXRsZS9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvRWR1Y2F0aW9uL1RpdGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0VkdWNhdGlvbi9FZHVjYXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5DdWJlL0VkdWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluQ3ViZS9NYWluQ3ViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkN1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mby9JbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmZvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQ1VCRV9GQUNFUyIsImZyb250IiwiYmFjayIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImlzQXJyb3dMZWZ0IiwiY29kZSIsImtleSIsImtleUNvZGUiLCJpc0Fycm93VXAiLCJpc0Fycm93UmlnaHQiLCJpc0Fycm93RG93biIsIkN1YmUiLCJiYWNrQ29udGVudCIsImJvdHRvbUNvbnRlbnQiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImZhY2UiLCJmcm9udENvbnRlbnQiLCJsZWZ0Q29udGVudCIsInJpZ2h0Q29udGVudCIsInNpemUiLCJ0b3BDb250ZW50Iiwid2l0aFN3aXBlIiwidXNlU3RhdGUiLCJhbmdYIiwic2V0QW5nWCIsImFuZ1kiLCJzZXRBbmdZIiwibW92aW5nIiwic2V0TW92aW5nIiwic3RhcnRYIiwic2V0U3RhcnRYIiwic3RhcnRZIiwic2V0U3RhcnRZIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwidXNlRWZmZWN0IiwieCIsInkiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTW92ZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFgiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFkiLCJkaWZmWCIsImRpZmZZIiwiTWF0aCIsImFicyIsImhhbmRsZU1vdmVtZW50U3RhcnQiLCJ0b3VjaGVzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybSIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwibnVtYmVyIiwiZ2V0U2l6ZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImZsb29yIiwid2hpdGVDb250ZW50IiwicHJpbWFyeUNvbnRlbnQiLCJzZWNvbmRhcnlDb250ZW50IiwiYWNjZW50Q29udGVudCIsInVuYW5pbWF0ZWREaXYiLCJjb2xvciIsImN1YmVPcHRpb25zIiwiSGkiLCJvbkhpZGUiLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJzaG93IiwiZ2V0UmFuZG9tQ3ViZSIsInJhbmRvbSIsImZ1bmMiLCJOYXZiYXIiLCJJY29uIiwiaWNvbiIsInJlc3QiLCJCdXR0b24iLCJjaGlsZHJlbiIsInRleHQiLCJTZWN0aW9uIiwib25GdWxsc2NyZWVuIiwib25GdWxsc2NyZWVuT3V0IiwidGl0bGUiLCJmYWRlb3V0Iiwic2V0RmFkZW91dCIsImZ1bGxzY3JlZW4iLCJzZXRGdWxsc2NyZWVuIiwidGFwcGVkIiwic2V0VGFwcGVkIiwiY2xlYXJUYXBwZWQiLCJpc0RvdWJsZVRhcCIsImNsZWFyVGltZW91dCIsImNyZWF0ZVBvcnRhbCIsImJvZHkiLCJ0cmFuc2xhdGlvbnMiLCJlZHVjYXRpb24iLCJleHBlcmllbmNlIiwiaW5mbyIsInByb2ZpbGUiLCJzb2NpYWwiLCJlcyIsImVuIiwiTEFOR19JRFMiLCJlbmdsaXNoIiwic3BhbmlzaCIsInNldExvY2FsZSIsImxhbmciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0TG9jYWxlIiwibGFuZ3VhZ2UiLCJpc1NwYW5pc2giLCJyZXNvbHZlSW5kZXgiLCJzdHIiLCJyZXBsYWNlIiwiYXJyYXkiLCJzcGxpdCIsInRyYW5zbGF0aW9uc0xhbmciLCJpIiwibGVuZ3RoIiwiZWxlbSIsInRyYW5zbGF0ZSIsIkxBTkdVQUdFUyIsIm5hbWUiLCJ2YWx1ZSIsIkJBUl9UWVBFUyIsInByaW1hcnlEYXJrZXIiLCJwcmltYXJ5RGFyayIsInByaW1hcnkiLCJzZWNvbmRhcnlEYXJrZXIiLCJzZWNvbmRhcnlEYXJrIiwic2Vjb25kYXJ5IiwiYWNjZW50RGFya2VyIiwiYWNjZW50RGFyayIsImFjY2VudCIsImdldFRvdGFsIiwidG90YWwiLCJhbW91bnQiLCJnZXRDb2xvciIsIkJhciIsInRvdGFsQW1vdW50IiwidmVydGljYWwiLCJzZXRDb2xvciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwic2V0VG90YWwiLCJuZXd0b3RhbCIsIlByb2ZpbGUiLCJDb21wYW55IiwiZW5kIiwicGxhY2UiLCJyb2xlIiwic3RhcnQiLCJ0ZWNobm9sb2dpZXMiLCJpc1JlcXVpcmVkIiwiY29tcGFuaWVzIiwiRXhwZXJpZW5jZSIsIm1hcCIsImNvbXBhbnkiLCJOZXR3b3JrIiwibGluayIsInVzZXJuYW1lIiwibmV0d29ya3MiLCJTb2NpYWwiLCJuZXQiLCJUaXRsZSIsImRhdGUiLCJleHBlZGl0b3IiLCJ0aXRsZXMiLCJFZHVjYXRpb24iLCJNYWluQ3ViZSIsImhpZGRlbkludHJvIiwiaW5pdGlhbFRyYW5zaXRpb24iLCJzZXRJbml0aWFsVHJhbnNpdGlvbiIsImlzRnVsbHNjcmVlbiIsInNldElzRnVsbHNjcmVlbiIsImNvbW1vblByb3BzIiwiSW5mbyIsInNldFNob3ciLCJNYWluIiwic2V0SGlkZGVuSW50cm8iLCJBcHAiLCJSZWFjdERPTSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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Iiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzE1MywxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3ViZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3ViZS1jb250YWluZXIgLmN1YmV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNpdGlvbjplYXNlLWluIGFsbCAuNXN9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDg7Y29sb3I6I2ZmZn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZT4qe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1yaWdodHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMDBweCl9LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWJhY2t7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtbGVmdHt0cmFuc2Zvcm06cm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtdG9we3RyYW5zZm9ybTpyb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtYm90dG9te3RyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCl9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGkuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpLWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6IzA4MDgwODt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO3otaW5kZXg6MTAwMX0uaGktY29udGFpbmVyIGgxe2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTUlO2ZvbnQtc2l6ZToyMHB4fS5oaS1jb250YWluZXIgaDEgc3Bhbi5wcmltYXJ5e2NvbG9yOiNiNzFkMmI7Zm9udC1zaXplOjMycHh9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnByaW1hcnkgc3Bhbntmb250LXNpemU6MjBweDtmb250LXdlaWdodDozMDB9LmhpLWNvbnRhaW5lciBoMSBzcGFuLnNlY29uZGFyeXtjb2xvcjojNzhiNmE5O2ZvbnQtc2l6ZToyNHB4fS5oaS1jb250YWluZXIgLmhpe2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTIwMHB4fS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXI+ZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21hcmdpbjo0cHggMH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyPmRpdj4qe21hcmdpbjowIDRweH0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5iYWNrZ3JvdW5ke2JvcmRlci1yYWRpdXM6OHB4O292ZXJmbG93OmhpZGRlbn0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC53aGl0ZS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmZn0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5wcmltYXJ5LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJifS5oaS1jb250YWluZXIgLmhpIC5sZXR0ZXIgLnNlY29uZGFyeS1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6Izc4YjZhOX0uaGktY29udGFpbmVyIC5oaSAubGV0dGVyIC5hY2NlbnQtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmQwOTB9LmhpLWNvbnRhaW5lci5oaWRkZW57b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmhpLWNvbnRhaW5lci5oaWRkZW4gKntwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXsuaGktY29udGFpbmVyIGgxe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJuYXYubmF2YmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6OTAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7aGVpZ2h0OjYwcHg7cGFkZGluZzowIDE2cHh9bmF2Lm5hdmJhciAuZXhwYW5kLWJ0bntkaXNwbGF5Om5vbmV9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7bWF4LXdpZHRoOjEyMDBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MzJweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiNmZmZ9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZSBzcGFue2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjMwMH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxle2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjMwMDtmb250LXN0eWxlOml0YWxpY31uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxlIHNwYW57Y29sb3I6I2U5YmJiZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci10aXRsZXtmb250LXNpemU6MjBweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXRpdGxlIHNwYW57Zm9udC1zaXplOjEycHh9bmF2Lm5hdmJhciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1zdWJ0aXRsZXtmb250LXNpemU6MTJweH1uYXYubmF2YmFyIC5uYXZiYXItY29udGVudCAubmF2YmFyLXN1YnRpdGxlIHNwYW57Zm9udC1zaXplOjE0cHh9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1pY29ue21hcmdpbjowO2hlaWdodDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20tYnRue3BhZGRpbmc6OHB4IDE2cHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNiNzFkMmI7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXM7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfS5jdXN0b20tYnRuPio6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlY3Rpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiwuY3ViZS1zZWN0aW9ue21hcmdpbjowO3BhZGRpbmc6MzJweDt3aWR0aDpjYWxjKDEwMCUgLSA2NHB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gNjRweCk7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoxNnB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtvdmVyZmxvdzpoaWRkZW59LmN1YmUtY29udGFpbmVyIC5jdWJlIC5jdWJlLWZhY2UgLmN1YmUtc2VjdGlvbiBhLC5jdWJlLXNlY3Rpb24gYXtjb2xvcjojZjJkMDkwfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24gKiwuY3ViZS1zZWN0aW9uICp7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24+ZGl2LC5jdWJlLXNlY3Rpb24+ZGl2e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O292ZXJmbG93OmhpZGRlbn0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uPmRpdiBoMiwuY3ViZS1zZWN0aW9uPmRpdiBoMnttYXJnaW46MDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7cGFkZGluZy1ib3R0b206OHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNiNzFkMmI7d2lkdGg6MTAwJX0uY3ViZS1jb250YWluZXIgLmN1YmUgLmN1YmUtZmFjZSAuY3ViZS1zZWN0aW9uIC5zZWUtbW9yZS1idG4sLmN1YmUtc2VjdGlvbiAuc2VlLW1vcmUtYnRue2hlaWdodDoyMCU7d2lkdGg6MTAwJTthbGlnbi1zZWxmOmNlbnRlcjtib3JkZXItcmFkaXVzOjB9LmN1YmUtc2VjdGlvbi1mdWxse2JhY2tncm91bmQtY29sb3I6IzA4MDgwODtjb2xvcjojZmZmO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDo5OTk7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIDFzO2JvcmRlci1yYWRpdXM6MDtvdmVyZmxvdzphdXRvfS5jdWJlLXNlY3Rpb24tZnVsbD5kaXZ7bWF4LXdpZHRoOjEyMDBweDtvdmVyZmxvdzp2aXNpYmxlfS5jdWJlLXNlY3Rpb24tZnVsbD5kaXYgLmNsb3NlLWJ0bntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxNnB4O3RvcDoxNnB4O2JhY2tncm91bmQtY29sb3I6IzA4MDgwOH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpey5jdWJlLWNvbnRhaW5lciAuY3ViZSAuY3ViZS1mYWNlIC5jdWJlLXNlY3Rpb24sLmN1YmUtc2VjdGlvbnt3aWR0aDpjYWxjKDEwMCUgLSAzMnB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gMzJweCk7cGFkZGluZzoxNnB4fX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJhci10b3RhbHtiYWNrZ3JvdW5kLWNvbG9yOnNpbHZlcjtib3JkZXItcmFkaXVzOjRweDtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4fS5iYXItdG90YWwgLmJhcntwYWRkaW5nOjRweCAwO3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXM7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uYmFyLXRvdGFsIC5iYXI+c3BhbnttYXJnaW4tbGVmdDo4cHg7d2hpdGUtc3BhY2U6bm93cmFwfS5iYXItdG90YWwgLmJhci5wcmltYXJ5LWRhcmtlcntiYWNrZ3JvdW5kLWNvbG9yOiM5MDBhMTB9LmJhci10b3RhbCAuYmFyLnByaW1hcnktZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiNhNzE1MjB9LmJhci10b3RhbCAuYmFyLnByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYjcxZDJifS5iYXItdG90YWwgLmJhci5zZWNvbmRhcnktZGFya2Vye2JhY2tncm91bmQtY29sb3I6IzQ4OGU3ZX0uYmFyLXRvdGFsIC5iYXIuc2Vjb25kYXJ5LWRhcmt7YmFja2dyb3VuZC1jb2xvcjojNjVhNjk4fS5iYXItdG90YWwgLmJhci5zZWNvbmRhcnl7YmFja2dyb3VuZC1jb2xvcjojNzhiNmE5fS5iYXItdG90YWwgLmJhci5hY2NlbnQtZGFya2Vye2JhY2tncm91bmQtY29sb3I6I2U4YjM2MX0uYmFyLXRvdGFsIC5iYXIuYWNjZW50LWRhcmt7YmFja2dyb3VuZC1jb2xvcjojZWVjNDdkfS5iYXItdG90YWwgLmJhci5hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZjJkMDkwfS5iYXItdG90YWwudmVydGljYWx7bWluLWhlaWdodDoxMDBweDttaW4td2lkdGg6MzJweDttYXgtd2lkdGg6MzJweDtoZWlnaHQ6MTAwJTthbGlnbi1pdGVtczpmbGV4LWVuZH0uYmFyLXRvdGFsLnZlcnRpY2FsIC5iYXI+c3Bhbnt3cml0aW5nLW1vZGU6dGItcmw7dHJhbnNmb3JtOnJvdGF0ZSgtMTgwZGVnKX0uYmFyLXRvdGFsLmhvcml6b250YWx7bWluLWhlaWdodDozMnB4O21heC1oZWlnaHQ6MzJweDttaW4td2lkdGg6MTAwcHg7d2lkdGg6MTAwJX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9maWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9maWxlLXNlY3Rpb24+ZGl2IHB7bWFyZ2luOjhweCAwfS5wcm9maWxlLXNlY3Rpb24+ZGl2IC5iYXItdG90YWx7bWFyZ2luOjhweCAwfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V4cGVyaWVuY2Uuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZXt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MjUwcHg7aGVpZ2h0OmZpdC1jb250ZW50O2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtwYWRkaW5nOjhweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNiNzFkMmJ9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZT4qe3dpZHRoOjEwMCU7bWFyZ2luOjB9LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1uYW1le2ZvbnQtc2l6ZToyMHB4O3dpZHRoOjYwJX0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LWR1cmF0aW9ue3dpZHRoOjQwJTt0ZXh0LWFsaWduOnJpZ2h0fS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktcm9sZXtjb2xvcjojZjJkMDkwO2ZvbnQtc3R5bGU6aXRhbGljO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTJweDttYXJnaW4tdG9wOjhweH0uZXhwZXJpZW5jZS1zZWN0aW9uPmRpdiAuY29tcGFueS1leHBlcmllbmNlIC5jb21wYW55LXBsYWNle2ZvbnQtc2l6ZToxMnB4O21hcmdpbi1ib3R0b206OHB4fS5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2U6bnRoLWNoaWxkKGV2ZW4pe2JvcmRlci1ib3R0b20tY29sb3I6IzY1YTY5OH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7LmV4cGVyaWVuY2Utc2VjdGlvbj5kaXYgLmNvbXBhbnktZXhwZXJpZW5jZSAuY29tcGFueS1uYW1lLC5leHBlcmllbmNlLXNlY3Rpb24+ZGl2IC5jb21wYW55LWV4cGVyaWVuY2UgLmNvbXBhbnktZHVyYXRpb257d2lkdGg6MTAwJX19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc29jaWFsLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zb2NpYWwtc2VjdGlvbj5kaXZ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfS5zb2NpYWwtc2VjdGlvbj5kaXYgYS5zb2NpYWwtbmV0d29ya3t3aWR0aDpjYWxjKDEwMCUgLSAzNHB4KTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3BhZGRpbmc6MTZweDttYXJnaW4tdG9wOjE2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZmZmO2JvcmRlci1yYWRpdXM6NHB4fS5zb2NpYWwtc2VjdGlvbj5kaXYgYS5zb2NpYWwtbmV0d29yayBpe2ZvbnQtc2l6ZTozMnB4O3BhZGRpbmctcmlnaHQ6MzJweDtwYWRkaW5nLWxlZnQ6MTZweDtjb2xvcjojZmZmfS5zb2NpYWwtc2VjdGlvbj5kaXYgYS5zb2NpYWwtbmV0d29yayBwe21hcmdpbjowO292ZXJmbG93OmhpZGRlbjt3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7Y29sb3I6I2ZmZn0uc29jaWFsLXNlY3Rpb24+ZGl2IGEuc29jaWFsLW5ldHdvcmsgLm5ldHdvcmstbmFtZXtmb250LXNpemU6MjBweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiM3OGI2YTl9LnNvY2lhbC1zZWN0aW9uPmRpdiBhLnNvY2lhbC1uZXR3b3JrIC5uZXR3b3JrLXVzZXJuYW1le2ZvbnQtc3R5bGU6aXRhbGljfS5zb2NpYWwtc2VjdGlvbj5kaXYgYS5zb2NpYWwtbmV0d29yayAubmV0d29yay1saW5re2ZvbnQtc2l6ZToxMnB4O3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7Y29sb3I6I2YyZDA5MH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZHVjYXRpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlc3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXB9LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxle2ZsZXg6MCBjYWxjKDUwJSAtIDRweCk7bWFyZ2luOjE2cHggMH0uZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGUgcHttYXJnaW46MH0uZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGUgLnRpdGxlLW5hbWV7Zm9udC1zaXplOjE2cHh9LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxlIC50aXRsZS1leHBlZGl0b3J7Y29sb3I6I2YyZDA5MDtmb250LXN0eWxlOml0YWxpYztmb250LXdlaWdodDozMDB9LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxlIC50aXRsZS1kYXRle2NvbG9yOiM3OGI2YTk7Zm9udC1zaXplOjEycHh9LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxlOm50aC1jaGlsZChldmVuKXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmZsZXgtZW5kO3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1sZWZ0OjRweH0uZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGU6bnRoLWNoaWxkKG9kZCl7cGFkZGluZy1yaWdodDo0cHh9LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxlOm50aC1jaGlsZChvZGQpIHB7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXsuZWR1Y2F0aW9uLXNlY3Rpb24+ZGl2IC5lZHVjYXRpb24tdGl0bGVzIC5lZHVjYXRpb24tdGl0bGV7ZmxleDowIDEwMCV9LmVkdWNhdGlvbi1zZWN0aW9uPmRpdiAuZWR1Y2F0aW9uLXRpdGxlcyAuZWR1Y2F0aW9uLXRpdGxlOm50aC1jaGlsZChvZGQpIHB7Ym9yZGVyLXJpZ2h0OjB9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5DdWJlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVye3RyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2l0aW9uOmVhc2UtaW4tb3V0IGFsbCAxcyAuMjVzfSNtYWluLWN1YmUgLmN1YmUtY29udGFpbmVyIC5jdWJlLWZhY2V7Ym9yZGVyLXJhZGl1czoxNnB4fSNtYWluLWN1YmUgLmluaXRpYWwtdHJhbnNpdGlvbiAuY3ViZXt0cmFuc2l0aW9uOmVhc2UtaW4tb3V0IGFsbCAxcyAuMjVzfSNtYWluLWN1YmUuaGlkZGVuLWN1YmUgLmN1YmUtY29udGFpbmVye3RyYW5zZm9ybTpzY2FsZSgwKSByb3RhdGVaKDI3MGRlZyl9I21haW4tY3ViZS5oaWRkZW4tY3ViZSAuY3ViZS1jb250YWluZXIgLmN1YmV7dHJhbnNmb3JtOnJvdGF0ZVkoMzYwZGVnKSAhaW1wb3J0YW50fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZm8uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZm8tc2VjdGlvbntwb3NpdGlvbjpmaXhlZDtyaWdodDozMnB4O2JvdHRvbTozMnB4O2JhY2tncm91bmQtY29sb3I6I2YyZDA5MDtwYWRkaW5nOjE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6I2ZmZjt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9LmluZm8tc2VjdGlvbiBpe2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDozMnB4O2hlaWdodDozMnB4O2ZvbnQtc2l6ZTozMnB4fS5pbmZvLXNlY3Rpb24gLmluZm8tY29udGFpbmVye21heC13aWR0aDowO21heC1oZWlnaHQ6MDtwYWRkaW5nOjA7bWFyZ2luOjA7b3BhY2l0eTowO3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXM7b3ZlcmZsb3c6aGlkZGVufS5pbmZvLXNlY3Rpb24gLmluZm8tY29udGFpbmVyIHB7Zm9udC1zaXplOjA7b3BhY2l0eTowO3RyYW5zaXRpb246bGluZWFyIGFsbCAuNXMsbGluZWFyIG9wYWNpdHkgLjVzIC41czt0ZXh0LWFsaWduOmp1c3RpZnl9LmluZm8tc2VjdGlvbi5pbmZvLXNlY3Rpb24tZnVsbHtib3JkZXItcmFkaXVzOjRweH0uaW5mby1zZWN0aW9uLmluZm8tc2VjdGlvbi1mdWxsIC5pbmZvLWNvbnRhaW5lcnttYXgtd2lkdGg6MzAwcHg7bWF4LWhlaWdodDo4MHZoO3BhZGRpbmc6MCAxNnB4O29wYWNpdHk6MTt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjVzfS5pbmZvLXNlY3Rpb24uaW5mby1zZWN0aW9uLWZ1bGwgLmluZm8tY29udGFpbmVyIHB7Zm9udC1zaXplOjE0cHg7bWFyZ2luOjA7b3BhY2l0eToxfS5pbmZvLXNlY3Rpb24uaW5mby1zZWN0aW9uLWZ1bGwgLmluZm8tY29udGFpbmVyIC5pbmZvLXRpdGxle3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7Zm9udC1zaXplOjE2cHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpey5pbmZvLXNlY3Rpb257cmlnaHQ6OHB4O2JvdHRvbTo4cHh9LmluZm8tc2VjdGlvbi5pbmZvLXNlY3Rpb24tZnVsbCAuaW5mby1jb250YWluZXJ7bWF4LXdpZHRoOjIwMHB4fS5pbmZvLXNlY3Rpb24uaW5mby1zZWN0aW9uLWZ1bGwgLmluZm8tY29udGFpbmVyIHB7Zm9udC1zaXplOjEycHh9LmluZm8tc2VjdGlvbi5pbmZvLXNlY3Rpb24tZnVsbCAuaW5mby1jb250YWluZXIgLmluZm8tdGl0bGV7Zm9udC1zaXplOjE0cHh9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbnMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhZGVpbnstd2Via2l0LWFuaW1hdGlvbjpmYWRlaW4gMC41czstbW96LWFuaW1hdGlvbjpmYWRlaW4gMC41czstbXMtYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1vLWFuaW1hdGlvbjpmYWRlaW4gMC41czthbmltYXRpb246ZmFkZWluIDAuNXN9QGtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW1vei1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtbXMta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtby1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19LmZhZGVvdXR7LXdlYmtpdC1hbmltYXRpb246ZmFkZW91dCAwLjVzOy1tb3otYW5pbWF0aW9uOmZhZGVvdXQgMC41czstbXMtYW5pbWF0aW9uOmZhZGVvdXQgMC41czstby1hbmltYXRpb246ZmFkZW91dCAwLjVzO2FuaW1hdGlvbjpmYWRlb3V0IDAuNXM7b3BhY2l0eTowfUBrZXlmcmFtZXMgZmFkZW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtbW96LWtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALW1zLWtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QC1vLWtleWZyYW1lcyBmYWRlb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7bWFyZ2luOjA7Y29sb3I6IzA4MDgwODstd2Via2l0LWZvbnQtc21vb3RoaW5nOnN1YnBpeGVsLWFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmF1dG99LnNoYWRvdyxtYWluICNtYWluLWNvbnRhaW5lciAjbWFpbi1jdWJlIC5jdWJlLWNvbnRhaW5lciAuY3ViZS1mYWNley13ZWJraXQtYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KTstbW96LWJveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuNSk7Ym94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC41KX1odG1se2JhY2tncm91bmQtY29sb3I6I2ZhZmFmZn1tYWlue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVufW1haW4gI21haW4tY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ1VCRV9GQUNFUyA9IHtcbiAgZnJvbnQ6ICdmcm9udCcsXG4gIGJhY2s6ICdiYWNrJyxcbiAgbGVmdDogJ2xlZnQnLFxuICByaWdodDogJ3JpZ2h0JyxcbiAgdG9wOiAndG9wJyxcbiAgYm90dG9tOiAnYm90dG9tJyxcbn07XG5cbmNvbnN0IGlzQXJyb3dMZWZ0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM3ID09PSBrZXlDb2RlIHx8ICdBcnJvd0xlZnQnID09PSBjb2RlIHx8ICdBcnJvd0xlZnQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93VXAgPSAoeyBjb2RlLCBrZXksIGtleUNvZGUgfSkgPT4gMzggPT09IGtleUNvZGUgfHwgJ0Fycm93VXAnID09PSBjb2RlIHx8ICdBcnJvd1VwJyA9PT0ga2V5O1xuY29uc3QgaXNBcnJvd1JpZ2h0ID0gKHsgY29kZSwga2V5LCBrZXlDb2RlIH0pID0+IDM5ID09PSBrZXlDb2RlIHx8ICdBcnJvd1JpZ2h0JyA9PT0gY29kZSB8fCAnQXJyUmlnaHQnID09PSBrZXk7XG5jb25zdCBpc0Fycm93RG93biA9ICh7IGNvZGUsIGtleSwga2V5Q29kZSB9KSA9PiA0MCA9PT0ga2V5Q29kZSB8fCAnQXJyb3dEb3duJyA9PT0gY29kZSB8fCAnQXJyb3dEb3duJyA9PT0ga2V5O1xuXG5jb25zdCBDdWJlID0gKHtcbiAgYmFja0NvbnRlbnQsXG4gIGJvdHRvbUNvbnRlbnQsXG4gIGNsYXNzTmFtZSxcbiAgZGlzYWJsZWQsXG4gIGZhY2UsXG4gIGZyb250Q29udGVudCxcbiAgbGVmdENvbnRlbnQsXG4gIHJpZ2h0Q29udGVudCxcbiAgc2l6ZSxcbiAgdG9wQ29udGVudCxcbiAgd2l0aFN3aXBlLFxufSkgPT4ge1xuICBjb25zdCBbIGFuZ1gsIHNldEFuZ1ggXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGFuZ1ksIHNldEFuZ1kgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIG1vdmluZywgc2V0TW92aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgc3RhcnRYLCBzZXRTdGFydFggXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbIHN0YXJ0WSwgc2V0U3RhcnRZIF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd0xlZnQoZXZlbnQpKSB7XG4gICAgICBzZXRBbmdZKGFuZ1kgKyA5MCk7XG4gICAgfSBlbHNlIGlmICghbW92aW5nICYmIGlzQXJyb3dVcChldmVudCkpIHtcbiAgICAgIHNldEFuZ1goYW5nWCAtIDkwKTtcbiAgICB9IGVsc2UgaWYgKCFtb3ZpbmcgJiYgaXNBcnJvd1JpZ2h0KGV2ZW50KSkge1xuICAgICAgc2V0QW5nWShhbmdZIC0gOTApO1xuICAgIH0gZWxzZSBpZiAoIW1vdmluZyAmJiBpc0Fycm93RG93bihldmVudCkpIHtcbiAgICAgIHNldEFuZ1goYW5nWCArIDkwKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuXG4gICAgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMuZnJvbnQpIHtcbiAgICAgIHkgPSAwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5iYWNrKSB7XG4gICAgICB5ID0gLTE4MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMubGVmdCkge1xuICAgICAgeSA9IC05MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMucmlnaHQpIHtcbiAgICAgIHkgPSA5MDtcbiAgICB9IGVsc2UgaWYgKGZhY2UgPT09IENVQkVfRkFDRVMudG9wKSB7XG4gICAgICB4ID0gLTkwO1xuICAgIH0gZWxzZSBpZiAoZmFjZSA9PT0gQ1VCRV9GQUNFUy5ib3R0b20pIHtcbiAgICAgIHggPSA5MDtcbiAgICB9XG5cbiAgICBzZXRBbmdYKHgpO1xuICAgIHNldEFuZ1koeSk7XG4gIH0sIFsgZmFjZSBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXJ0WChudWxsKTtcbiAgICBzZXRTdGFydFkobnVsbCk7XG4gICAgc2V0TW92aW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TW92aW5nKGZhbHNlKSwgNTAwKTtcbiAgfSwgWyBhbmdYLCBhbmdZIF0pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWRpc2FibGVkICYmICFtb3ZpbmcgJiYgKHN0YXJ0WCB8fCBzdGFydFkpKSB7XG4gICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQ/LmNoYW5nZWRUb3VjaGVzPy5bMF0/LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WDtcbiAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudD8uY2hhbmdlZFRvdWNoZXM/LlswXT8uY2xpZW50WSB8fCBldmVudC5jbGllbnRZO1xuXG4gICAgICBjb25zdCBkaWZmWCA9IGNsaWVudFggLSBzdGFydFg7XG4gICAgICBjb25zdCBkaWZmWSA9IGNsaWVudFkgLSBzdGFydFk7XG5cbiAgICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZYKSkge1xuICAgICAgICAvLyBob3Jpem9udGFsIHN3aXBlXG4gICAgICAgIHNldEFuZ1koMCA8IGRpZmZYID8gYW5nWSArIDkwIDogYW5nWSAtIDkwKTtcbiAgICAgIH1cbiAgICAgIGlmICg1MCA8IE1hdGguYWJzKGRpZmZZKSkge1xuICAgICAgICAvLyB2ZXJ0aWNhbCBzd2lwZVxuICAgICAgICBzZXRBbmdYKDAgPCBkaWZmWSA/IGFuZ1ggLSA5MCA6IGFuZ1ggKyA5MCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVtZW50U3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjbGllbnRYID0gZXZlbnQ/LnRvdWNoZXM/LlswXT8uY2xpZW50WCB8fCBldmVudC5jbGllbnRYO1xuICAgIGNvbnN0IGNsaWVudFkgPSBldmVudD8udG91Y2hlcz8uWzBdPy5jbGllbnRZIHx8IGV2ZW50LmNsaWVudFk7XG5cbiAgICBzZXRTdGFydFgoY2xpZW50WCk7XG4gICAgc2V0U3RhcnRZKGNsaWVudFkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuXG4gICAgaWYgKHdpdGhTd2lwZSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdmVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdmVtZW50KTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGN1YmUtY29udGFpbmVyJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgcGVyc3BlY3RpdmU6IHNpemUgKiAzLFxuICAgICAgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImN1YmVcIlxuICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVaKC0ke3NpemUgLyAyfXB4KSByb3RhdGVYKCR7YW5nWH1kZWcpIHJvdGF0ZVkoJHthbmdZfWRlZylgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Nb3VzZVVwPXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uVG91Y2hFbmQ9e3dpdGhTd2lwZSAmJiAhZGlzYWJsZWQgPyBoYW5kbGVNb3ZlbWVudCA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXt3aXRoU3dpcGUgJiYgIWRpc2FibGVkID8gaGFuZGxlTW92ZW1lbnRTdGFydCA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1mcm9udFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtmcm9udENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYmFja1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDE4MGRlZykgcm90YXRlWigxODBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtiYWNrQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS1yaWdodFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7cmlnaHRDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1YmUtZmFjZSBjdWJlLWxlZnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtsZWZ0Q29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdWJlLWZhY2UgY3ViZS10b3BcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigke3NpemUgLyAyfXB4KWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3RvcENvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3ViZS1mYWNlIGN1YmUtYm90dG9tXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKCR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICB7Ym90dG9tQ29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkN1YmUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrQ29udGVudDogdW5kZWZpbmVkLFxuICBib3R0b21Db250ZW50OiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZhY2U6IENVQkVfRkFDRVMuZnJvbnQsXG4gIGZyb250Q29udGVudDogdW5kZWZpbmVkLFxuICBsZWZ0Q29udGVudDogdW5kZWZpbmVkLFxuICByaWdodENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgc2l6ZTogMTUwLFxuICB0b3BDb250ZW50OiB1bmRlZmluZWQsXG4gIHdpdGhTd2lwZTogZmFsc2UsXG59O1xuXG5DdWJlLnByb3BUeXBlcyA9IHtcbiAgYmFja0NvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBib3R0b21Db250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGZhY2U6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKENVQkVfRkFDRVMpKSxcbiAgZnJvbnRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgbGVmdENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICByaWdodENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlIF0pLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3BDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZSBdKSxcbiAgd2l0aFN3aXBlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCJpbXBvcnQgQ3ViZSBmcm9tICcuL0N1YmUnO1xuaW1wb3J0ICcuL2N1YmUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDdWJlIGZyb20gJy4uL0N1YmUnO1xuaW1wb3J0IHsgQ1VCRV9GQUNFUyB9IGZyb20gJy4uL0N1YmUvQ3ViZSc7XG5cbmNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICByZXR1cm4gTWF0aC5mbG9vcigoKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aCkgKiAwLjcpIC8gMTApO1xufTtcblxuY29uc3Qgd2hpdGVDb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1iYWNrZ3JvdW5kIGJhY2tncm91bmRcIiAvPjtcbmNvbnN0IHByaW1hcnlDb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJwcmltYXJ5LWJhY2tncm91bmQgYmFja2dyb3VuZFwiIC8+O1xuY29uc3Qgc2Vjb25kYXJ5Q29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWJhY2tncm91bmQgYmFja2dyb3VuZFwiIC8+O1xuY29uc3QgYWNjZW50Q29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwiYWNjZW50LWJhY2tncm91bmQgYmFja2dyb3VuZFwiIC8+O1xuY29uc3Qgc2l6ZSA9IGdldFNpemUoKTtcbmNvbnN0IHVuYW5pbWF0ZWREaXYgPSA8ZGl2IHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUsIGNvbG9yOiAnYmxhY2snIH19IC8+O1xuXG5jb25zdCBjdWJlT3B0aW9ucyA9IHtcbiAgYm90dG9tQ29udGVudDogd2hpdGVDb250ZW50LFxuICBsZWZ0Q29udGVudDogcHJpbWFyeUNvbnRlbnQsXG4gIHJpZ2h0Q29udGVudDogc2Vjb25kYXJ5Q29udGVudCxcbiAgdG9wQ29udGVudDogYWNjZW50Q29udGVudCxcbn07XG5cbmNvbnN0IEhpID0gKHsgb25IaWRlIH0pID0+IHtcbiAgY29uc3QgWyBhbmltYXRpb24sIHNldEFuaW1hdGlvbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFuaW1hdGlvbihmYWxzZSksIDIwMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SGlkZGVuKHRydWUpLCAyNTAwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZGRlbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb25IaWRlKSB7XG4gICAgICBvbkhpZGUoKTtcbiAgICB9XG4gIH0sIFsgaGlkZGVuIF0pO1xuXG4gIGNvbnN0IHNob3cgPSBhbmltYXRpb24gJiYgIWhpZGRlbjtcblxuICBjb25zdCBnZXRSYW5kb21DdWJlID0gKCkgPT4ge1xuICAgIGxldCBmYWNlID0gQ1VCRV9GQUNFUy5mcm9udDtcblxuICAgIGlmIChzaG93KSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcblxuICAgICAgZmFjZSA9IFsgQ1VCRV9GQUNFUy5ib3R0b20sIENVQkVfRkFDRVMubGVmdCwgQ1VCRV9GQUNFUy5yaWdodCwgQ1VCRV9GQUNFUy50b3AgXVtudW1iZXJdO1xuICAgIH1cblxuICAgIHJldHVybiA8Q3ViZSBzaXplPXtzaXplfSBmYWNlPXtmYWNlfSB7Li4uY3ViZU9wdGlvbnN9IC8+O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BoaS1jb250YWluZXIke2hpZGRlbiA/ICcgaGlkZGVuJyA6ICcnfWB9PlxuICAgICAgPGgxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgTXkgQzxzcGFuPnU8L3NwYW4+VjxzcGFuPmU8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICBieSA8c3BhbiBjbGFzc05hbWU9XCJzZWNvbmRhcnlcIj5KYXZpIEdhcmPDrWEgRmFqYXJkbzwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7Z2V0UmFuZG9tQ3ViZSgpfVxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgICAge2dldFJhbmRvbUN1YmUoKX1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VuYW5pbWF0ZWREaXZ9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHt1bmFuaW1hdGVkRGl2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICAgIHtnZXRSYW5kb21DdWJlKCl9XG4gICAgICAgICAgICB7dW5hbmltYXRlZERpdn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhpLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25IaWRlOiB1bmRlZmluZWQsXG59O1xuXG5IaS5wcm9wVHlwZXMgPSB7XG4gIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaTtcbiIsImltcG9ydCBIaSBmcm9tICcuL0hpJztcbmltcG9ydCAnLi9oaS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSGk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHNoYWRvd1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXRpdGxlXCI+XG4gICAgICAgIE15IEM8c3Bhbj51PC9zcGFuPlY8c3Bhbj5lPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdWJ0aXRsZVwiPlxuICAgICAgICBieSA8c3Bhbj5KYXZpIEdhcmPDrWEgRmFqYXJkbzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuaW1wb3J0ICcuL25hdmJhci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEljb24gPSAoeyBpY29uLCAuLi5yZXN0IH0pID0+IDxpIHsuLi5yZXN0fSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9e2ljb259IC8+O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCAnLi9pY29uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgaWNvbiwgdGV4dCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxidXR0b24gY2xhc3NOYW1lPXtgY3VzdG9tLWJ0biR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gdHlwZT1cImJ1dHRvblwiIHsuLi5yZXN0fT5cbiAgICB7aWNvbiAmJiA8SWNvbiBpY29uPXtpY29ufSAvPn1cbiAgICB7dGV4dCAmJiA8c3Bhbj57dGV4dH08L3NwYW4+fVxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG4pO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICB0ZXh0OiB1bmRlZmluZWQsXG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcblxuY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpc2FibGVkLCBvbkZ1bGxzY3JlZW4sIG9uRnVsbHNjcmVlbk91dCwgdGl0bGUgfSkgPT4ge1xuICBjb25zdCBbIGZhZGVvdXQsIHNldEZhZGVvdXQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBmdWxsc2NyZWVuLCBzZXRGdWxsc2NyZWVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgdGFwcGVkLCBzZXRUYXBwZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmYWRlb3V0ICYmIGZ1bGxzY3JlZW4pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RnVsbHNjcmVlbihmYWxzZSksIDQwMCk7XG4gICAgfVxuICB9LCBbIGZhZGVvdXQgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWZ1bGxzY3JlZW4gJiYgZmFkZW91dCkge1xuICAgICAgc2V0RmFkZW91dChmYWxzZSk7XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uRnVsbHNjcmVlbk91dCkge1xuICAgICAgICBvbkZ1bGxzY3JlZW5PdXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZ1bGxzY3JlZW4gJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uRnVsbHNjcmVlbikge1xuICAgICAgb25GdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9LCBbIGZ1bGxzY3JlZW4gXSk7XG4gIGNvbnN0IGNsZWFyVGFwcGVkID0gKCkgPT4gc2V0VGFwcGVkKGZhbHNlKTtcblxuICBjb25zdCBpc0RvdWJsZVRhcCA9ICgpID0+IHtcbiAgICBpZiAodGFwcGVkKSB7XG4gICAgICBzZXRGdWxsc2NyZWVuKHRydWUpO1xuICAgICAgY2xlYXJUaW1lb3V0KGNsZWFyVGFwcGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGFwcGVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dChjbGVhclRhcHBlZCwgMzAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZ1bGxzY3JlZW4gPyAoXG4gICAgY3JlYXRlUG9ydGFsKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjdWJlLXNlY3Rpb24gY3ViZS1zZWN0aW9uLWZ1bGwgJHtmYWRlb3V0ID8gJ2ZhZGVvdXQnIDogJ2ZhZGVpbid9JHtcbiAgICAgICAgICBjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ1xuICAgICAgICB9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3ViZS1zZWN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aXRsZSAmJiA8aDI+e3RpdGxlfTwvaDI+fVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlLWJ0blwiXG4gICAgICAgICAgICBpY29uPVwiZmFzIGZhLXRpbWVzXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZhZGVvdXQodHJ1ZSl9XG4gICAgICAgICAgICBvblRvdWNoRW5kPXsoKSA9PiBzZXRGYWRlb3V0KHRydWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PixcbiAgICAgIGRvY3VtZW50LmJvZHksXG4gICAgKVxuICApIDogKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGN1YmUtc2VjdGlvbiBmYWRlaW4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9XG4gICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiAhZGlzYWJsZWQgJiYgc2V0RnVsbHNjcmVlbih0cnVlKX1cbiAgICAgIG9uVG91Y2hFbmQ9e2lzRG91YmxlVGFwfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aXRsZSAmJiA8aDI+e3RpdGxlfTwvaDI+fVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT1cInNlZS1tb3JlLWJ0blwiIGljb249XCJmYXMgZmEtcGx1c1wiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGxzY3JlZW4odHJ1ZSl9IC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2VjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uRnVsbHNjcmVlbjogdW5kZWZpbmVkLFxuICBvbkZ1bGxzY3JlZW5PdXQ6IHVuZGVmaW5lZCxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbn07XG5cblNlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGUgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkZ1bGxzY3JlZW46IFByb3BUeXBlcy5mdW5jLFxuICBvbkZ1bGxzY3JlZW5PdXQ6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0ICcuL3NlY3Rpb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgZWR1Y2F0aW9uIGZyb20gJy4vZXMvZWR1Y2F0aW9uLmpzb24nO1xuaW1wb3J0IGV4cGVyaWVuY2UgZnJvbSAnLi9lcy9leHBlcmllbmNlLmpzb24nO1xuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi9lcy9wcm9maWxlLmpzb24nO1xuaW1wb3J0IGluZm8gZnJvbSAnLi9lcy9pbmZvLmpzb24nO1xuaW1wb3J0IHNvY2lhbCBmcm9tICcuL2VzL3NvY2lhbC5qc29uJztcblxuY29uc3QgdHJhbnNsYXRpb25zID0ge1xuICBlZHVjYXRpb24sXG4gIGV4cGVyaWVuY2UsXG4gIGluZm8sXG4gIHByb2ZpbGUsXG4gIHNvY2lhbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0aW9ucztcbiIsImltcG9ydCBlZHVjYXRpb24gZnJvbSAnLi9lbi9lZHVjYXRpb24uanNvbic7XG5pbXBvcnQgZXhwZXJpZW5jZSBmcm9tICcuL2VuL2V4cGVyaWVuY2UuanNvbic7XG5pbXBvcnQgaW5mbyBmcm9tICcuL2VuL2luZm8uanNvbic7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuL2VuL3Byb2ZpbGUuanNvbic7XG5pbXBvcnQgc29jaWFsIGZyb20gJy4vZW4vc29jaWFsLmpzb24nO1xuXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XG4gIGVkdWNhdGlvbixcbiAgZXhwZXJpZW5jZSxcbiAgaW5mbyxcbiAgcHJvZmlsZSxcbiAgc29jaWFsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRpb25zO1xuIiwiaW1wb3J0IGVzIGZyb20gJy4vZXMnO1xuaW1wb3J0IGVuIGZyb20gJy4vZW4nO1xuXG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7IGVzLCBlbiB9O1xuXG5leHBvcnQgY29uc3QgTEFOR19JRFMgPSB7XG4gIGVuZ2xpc2g6ICdlbicsXG4gIHNwYW5pc2g6ICdlcycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlID0gKGxhbmcpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgbGFuZyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxlID0gKCkgPT4ge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5sYW5ndWFnZSkge1xuICAgIHJldHVybiBMQU5HX0lEUy5zcGFuaXNoO1xuICB9XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UubGFuZ3VhZ2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNTcGFuaXNoID0gKCkgPT4gTEFOR19JRFMuc3BhbmlzaCA9PT0gZ2V0TG9jYWxlKCk7XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBzdHJpbmcgJ2luZGV4JyBmb3IgdGhlIEphdmFTY3JpcHQgT2JqZWN0XG4gKi9cbmNvbnN0IHJlc29sdmVJbmRleCA9IChzdHIpID0+IHtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcWyhcXHcrKVxcXS9nLCAnLiQxJyk7IC8vIGNvbnZlcnQgaW5kZXhlcyB0byBwcm9wZXJ0aWVzXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9eXFwuLywgJycpOyAvLyBzdHJpcCBhIGxlYWRpbmcgZG90XG4gIGNvbnN0IGFycmF5ID0gc3RyLnNwbGl0KCcuJyk7XG5cbiAgbGV0IHRyYW5zbGF0aW9uc0xhbmcgPSB0cmFuc2xhdGlvbnNbZ2V0TG9jYWxlKCldO1xuXG4gIGZvciAobGV0IGkgPSAwLCB7IGxlbmd0aCB9ID0gYXJyYXk7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGVsZW0gPSBhcnJheVtpXTtcbiAgICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiB0cmFuc2xhdGlvbnNMYW5nICYmIGVsZW0gaW4gdHJhbnNsYXRpb25zTGFuZykge1xuICAgICAgdHJhbnNsYXRpb25zTGFuZyA9IHRyYW5zbGF0aW9uc0xhbmdbZWxlbV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhbnNsYXRpb25zTGFuZztcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2xhdGUgPSAoa2V5KSA9PiByZXNvbHZlSW5kZXgoa2V5KTtcblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcbiAgeyBuYW1lOiB0cmFuc2xhdGUoJ2xhbmd1YWdlLmVzJyksIHZhbHVlOiAnZXMnIH0sXG4gIHsgbmFtZTogdHJhbnNsYXRlKCdsYW5ndWFnZS5lbicpLCB2YWx1ZTogJ2VuJyB9LFxuXTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQkFSX1RZUEVTID0ge1xuICBwcmltYXJ5RGFya2VyOiAncHJpbWFyeS1kYXJrZXInLFxuICBwcmltYXJ5RGFyazogJ3ByaW1hcnktZGFyaycsXG4gIHByaW1hcnk6ICdwcmltYXJ5JyxcbiAgc2Vjb25kYXJ5RGFya2VyOiAnc2Vjb25kYXJ5LWRhcmtlcicsXG4gIHNlY29uZGFyeURhcms6ICdzZWNvbmRhcnktZGFyaycsXG4gIHNlY29uZGFyeTogJ3NlY29uZGFyeScsXG4gIGFjY2VudERhcmtlcjogJ2FjY2VudC1kYXJrZXInLFxuICBhY2NlbnREYXJrOiAnYWNjZW50LWRhcmsnLFxuICBhY2NlbnQ6ICdhY2NlbnQnLFxufTtcblxuY29uc3QgZ2V0VG90YWwgPSAodG90YWwsIGFtb3VudCkgPT4gKGFtb3VudCAqIDEwMCkgLyB0b3RhbDtcbmNvbnN0IGdldENvbG9yID0gKHRvdGFsKSA9PiB7XG4gIGlmICgxMDAgPT09IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5wcmltYXJ5RGFya2VyO1xuICB9XG4gIGlmICg5MCA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMucHJpbWFyeURhcms7XG4gIH1cbiAgaWYgKDc1IDw9IHRvdGFsKSB7XG4gICAgcmV0dXJuIEJBUl9UWVBFUy5wcmltYXJ5O1xuICB9XG4gIGlmICg2MCA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMuc2Vjb25kYXJ5RGFya2VyO1xuICB9XG4gIGlmICg1NSA8PSB0b3RhbCkge1xuICAgIHJldHVybiBCQVJfVFlQRVMuc2Vjb25kYXJ5RGFyaztcbiAgfVxuICBpZiAoNDAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLnNlY29uZGFyeTtcbiAgfVxuICBpZiAoMjUgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLmFjY2VudERhcmtlcjtcbiAgfVxuICBpZiAoMTAgPD0gdG90YWwpIHtcbiAgICByZXR1cm4gQkFSX1RZUEVTLmFjY2VudERhcms7XG4gIH1cbiAgcmV0dXJuIEJBUl9UWVBFUy5hY2NlbnQ7XG59O1xuXG5jb25zdCBCYXIgPSAoeyBhbW91bnQsIGNsYXNzTmFtZSwgdGV4dCwgdG90YWxBbW91bnQsIHZlcnRpY2FsLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgWyBjb2xvciwgc2V0Q29sb3IgXSA9IHVzZVN0YXRlKEJBUl9UWVBFUy5wcmltYXJ5KTtcbiAgY29uc3QgWyBtb3VudGVkLCBzZXRNb3VudGVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgdG90YWwsIHNldFRvdGFsIF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb3VudGVkKSB7XG4gICAgICBjb25zdCBuZXd0b3RhbCA9IGdldFRvdGFsKHRvdGFsQW1vdW50LCBhbW91bnQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRUb3RhbChuZXd0b3RhbCksIDUwMCk7XG4gICAgICBzZXRDb2xvcihnZXRDb2xvcihuZXd0b3RhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNb3VudGVkKHRydWUpO1xuICAgIH1cbiAgfSwgWyBtb3VudGVkIF0pO1xuXG4gIHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAobW91bnRlZCkge1xuICAgICAgY29uc3QgbmV3dG90YWwgPSBnZXRUb3RhbCh0b3RhbEFtb3VudCwgYW1vdW50KTtcbiAgICAgIHNldFRvdGFsKG5ld3RvdGFsKTtcbiAgICAgIHNldENvbG9yKGdldENvbG9yKG5ld3RvdGFsKSk7XG4gICAgfVxuICB9LCBbIGFtb3VudCwgdG90YWxBbW91bnQgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIGNsYXNzTmFtZT17YGJhci10b3RhbCBmYWRlaW4ke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfSAke3ZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmFyICR7Y29sb3J9YH0gc3R5bGU9e3ZlcnRpY2FsID8geyBoZWlnaHQ6IGAke3RvdGFsfWAgfSA6IHsgd2lkdGg6IGAke3RvdGFsfSVgIH19PlxuICAgICAgICB7bW91bnRlZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFkZWluXCI+XG4gICAgICAgICAgICB7dGV4dH0ge3RvdGFsfSVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFtb3VudDogMCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIHRleHQ6IHVuZGVmaW5lZCxcbiAgdG90YWxBbW91bnQ6IDEwMCxcbiAgdmVydGljYWw6IGZhbHNlLFxufTtcblxuQmFyLnByb3BUeXBlcyA9IHtcbiAgYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvdGFsQW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXI7XG4iLCJpbXBvcnQgQmFyIGZyb20gJy4vQmFyJztcbmltcG9ydCAnLi9iYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9uJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RyYW5zbGF0b3InO1xuaW1wb3J0IEJhciBmcm9tICcuLi8uLi9CYXInO1xuXG5jb25zdCBQcm9maWxlID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxTZWN0aW9uIHsuLi5yZXN0fSB0aXRsZT17dHJhbnNsYXRlKCdwcm9maWxlLnRpdGxlJyl9IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxuICAgIDxwPnt0cmFuc2xhdGUoJ3Byb2ZpbGUuaGVhZGVyJyl9PC9wPlxuICAgIDxCYXIgdGV4dD1cIlJlYWN0XCIgYW1vdW50PXs4MH0gLz5cbiAgICA8QmFyIHRleHQ9XCJSZWFjdCBOYXRpdmVcIiBhbW91bnQ9ezUwfSAvPlxuICAgIDxCYXIgdGV4dD1cIkhUTUxcIiBhbW91bnQ9ezc1fSAvPlxuICAgIDxCYXIgdGV4dD1cIkNTU1wiIGFtb3VudD17ODV9IC8+XG4gICAgPEJhciB0ZXh0PVwiR3JhcGhRTFwiIGFtb3VudD17NTV9IC8+XG4gICAgPEJhciB0ZXh0PVwiTm9kZVwiIGFtb3VudD17NjV9IC8+XG4gICAgPEJhciB0ZXh0PVwiTW9uZ29cIiBhbW91bnQ9ezcwfSAvPlxuICAgIDxCYXIgdGV4dD1cIkFuZ3VsYXJcIiBhbW91bnQ9ezQwfSAvPlxuICAgIDxCYXIgdGV4dD1cIkphdmFcIiBhbW91bnQ9ezYwfSAvPlxuICAgIDxCYXIgdGV4dD1cIlNwcmluZ2Jvb3RcIiBhbW91bnQ9ezIwfSAvPlxuICAgIDxCYXIgdGV4dD1cIlZ1ZVwiIGFtb3VudD17MjB9IC8+XG4gICAgPHA+e3RyYW5zbGF0ZSgncHJvZmlsZS50ZXh0Jyl9PC9wPlxuICAgIDxwPnt0cmFuc2xhdGUoJ3Byb2ZpbGUudGV4dDInKX08L3A+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnO1xuaW1wb3J0ICcuL3Byb2ZpbGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ29tcGFueSA9ICh7IGVuZCwgbmFtZSwgcGxhY2UsIHJvbGUsIHN0YXJ0LCB0ZWNobm9sb2dpZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnktZXhwZXJpZW5jZVwiPlxuICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktbmFtZVwiPntuYW1lfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJjb21wYW55LWR1cmF0aW9uXCI+XG4gICAgICB7c3RhcnR9IC0ge2VuZH1cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiY29tcGFueS1yb2xlXCI+e3JvbGV9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktcGxhY2VcIj57cGxhY2V9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImNvbXBhbnktdGVjaFwiPnt0ZWNobm9sb2dpZXN9PC9wPlxuICA8L2Rpdj5cbik7XG5cbkNvbXBhbnkucHJvcFR5cGVzID0ge1xuICBlbmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0YXJ0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRlY2hub2xvZ2llczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueTtcbiIsImltcG9ydCBDb21wYW55IGZyb20gJy4vQ29tcGFueSc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy90cmFuc2xhdG9yJztcbmltcG9ydCBDb21wYW55IGZyb20gJy4vQ29tcGFueSc7XG5cbmNvbnN0IGNvbXBhbmllcyA9IFtcbiAge1xuICAgIG5hbWU6ICdQbGV4dXMgVGVjaG5vbG9naWVzJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UucGxleHVzMi5yb2xlJyksXG4gICAgcGxhY2U6ICdQYWxtYSBkZSBNYWxsb3JjYSAvIFNldmlsbGEnLFxuICAgIHN0YXJ0OiAnMDcvMjAyMCcsXG4gICAgZW5kOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UucHJlc2VudCcpLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLnBsZXh1czIudGVjaG5vbG9naWVzJyksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnV296em8nLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS53b3p6by5yb2xlJyksXG4gICAgcGxhY2U6ICdQYWxtYSBkZSBNYWxsb3JjYScsXG4gICAgc3RhcnQ6ICcwOS8yMDE3JyxcbiAgICBlbmQ6ICcwNy8yMDIwJyxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS53b3p6by50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQbGV4dXMgVGVjaG5vbG9naWVzJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UucGxleHVzLnJvbGUnKSxcbiAgICBwbGFjZTogJ1BhbG1hIGRlIE1hbGxvcmNhJyxcbiAgICBzdGFydDogJzA4LzIwMTYnLFxuICAgIGVuZDogJzA5LzIwMTcnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLnBsZXh1cy50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHTVYnLFxuICAgIHJvbGU6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5nbXYucm9sZScpLFxuICAgIHBsYWNlOiAnU2V2aWxsYScsXG4gICAgc3RhcnQ6ICcwOS8yMDE1JyxcbiAgICBlbmQ6ICcwOC8yMDE2JyxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5nbXYudGVjaG5vbG9naWVzJyksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT2Vzw61hIE5ldHdvcmtzJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2Uub2VzaWEucm9sZScpLFxuICAgIHBsYWNlOiAnU2V2aWxsYScsXG4gICAgc3RhcnQ6ICcwNi8yMDE1JyxcbiAgICBlbmQ6ICcwOC8yMDE1JyxcbiAgICB0ZWNobm9sb2dpZXM6IHRyYW5zbGF0ZSgnZXhwZXJpZW5jZS5vZXNpYS50ZWNobm9sb2dpZXMnKSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdBdG9zJyxcbiAgICByb2xlOiB0cmFuc2xhdGUoJ2V4cGVyaWVuY2UuYXRvcy5yb2xlJyksXG4gICAgcGxhY2U6ICdTZXZpbGxhJyxcbiAgICBzdGFydDogJzA4LzIwMTMnLFxuICAgIGVuZDogJzA2LzIwMTUnLFxuICAgIHRlY2hub2xvZ2llczogdHJhbnNsYXRlKCdleHBlcmllbmNlLmF0b3MudGVjaG5vbG9naWVzJyksXG4gIH0sXG5dO1xuXG5jb25zdCBFeHBlcmllbmNlID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxTZWN0aW9uIHsuLi5yZXN0fSB0aXRsZT17dHJhbnNsYXRlKCdleHBlcmllbmNlLnRpdGxlJyl9IGNsYXNzTmFtZT1cImV4cGVyaWVuY2Utc2VjdGlvblwiPlxuICAgIHtjb21wYW5pZXMubWFwKChjb21wYW55KSA9PiAoXG4gICAgICA8Q29tcGFueSBrZXk9e2NvbXBhbnkubmFtZX0gey4uLmNvbXBhbnl9IC8+XG4gICAgKSl9XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7XG4iLCJpbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuL0V4cGVyaWVuY2UnO1xuaW1wb3J0ICcuL2V4cGVyaWVuY2Uuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uLy4uL0ljb24nO1xuXG5jb25zdCBOZXR3b3JrID0gKHsgaWNvbiwgbGluaywgbmFtZSwgdXNlcm5hbWUgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJzb2NpYWwtbmV0d29ya1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2xpbmt9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICA8SWNvbiBpY29uPXtpY29ufSAvPlxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJuZXR3b3JrLW5hbWVcIj57bmFtZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJuZXR3b3JrLXVzZXJuYW1lXCI+e3VzZXJuYW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm5ldHdvcmstbGlua1wiPntsaW5rfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9hPlxuKTtcblxuTmV0d29yay5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGluazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVzZXJuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXR3b3JrO1xuIiwiaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9OZXR3b3JrJztcblxuZXhwb3J0IGRlZmF1bHQgTmV0d29yaztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9uJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RyYW5zbGF0b3InO1xuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9OZXR3b3JrJztcblxuY29uc3QgbmV0d29ya3MgPSBbXG4gIHtcbiAgICBpY29uOiAnZmFiIGZhLWxpbmtlZGluJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vamF2aWdhcmNpYWZhamFyZG8nLFxuICAgIG5hbWU6ICdMaW5rZWRJbicsXG4gICAgdXNlcm5hbWU6ICdKYXZpZXIgR2FyY8OtYSBGYWphcmRvJyxcbiAgfSxcbiAge1xuICAgIGljb246ICdmYWIgZmEtZ2l0aHViJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0phdmlHRjgvJyxcbiAgICBuYW1lOiAnR2l0SHViJyxcbiAgICB1c2VybmFtZTogJ0phdmlHRjgnLFxuICB9LFxuXTtcblxuY29uc3QgU29jaWFsID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxTZWN0aW9uIHsuLi5yZXN0fSB0aXRsZT17dHJhbnNsYXRlKCdzb2NpYWwudGl0bGUnKX0gY2xhc3NOYW1lPVwic29jaWFsLXNlY3Rpb25cIj5cbiAgICB7bmV0d29ya3MubWFwKChuZXQpID0+IChcbiAgICAgIDxOZXR3b3JrIGtleT17bmV0Lm5hbWV9IHsuLi5uZXR9IC8+XG4gICAgKSl9XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbDtcbiIsImltcG9ydCBTb2NpYWwgZnJvbSAnLi9Tb2NpYWwnO1xuaW1wb3J0ICcuL3NvY2lhbC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFRpdGxlID0gKHsgZGF0ZSwgZXhwZWRpdG9yLCBuYW1lIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24tdGl0bGVcIj5cbiAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1uYW1lXCI+e25hbWV9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLWV4cGVkaXRvclwiPntleHBlZGl0b3J9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLWRhdGVcIj57ZGF0ZX08L3A+XG4gIDwvZGl2PlxuKTtcblxuVGl0bGUucHJvcFR5cGVzID0ge1xuICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGV4cGVkaXRvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsImltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJztcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy90cmFuc2xhdG9yJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJztcblxuY29uc3QgdGl0bGVzID0gW1xuICB7XG4gICAgZGF0ZTogJzIwMDYgLSAyMDEzJyxcbiAgICBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLnVuaXZlcnNpdHkuZXhwZWRpdG9yJyksXG4gICAgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24udW5pdmVyc2l0eS50aXRsZScpLFxuICB9LFxuICB7IGRhdGU6ICcwNC8yMDE5JywgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5yZWFjdC5leHBlZGl0b3InKSwgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24ucmVhY3QudGl0bGUnKSB9LFxuICB7XG4gICAgZGF0ZTogJzA2LzIwMTcnLFxuICAgIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24ucmVhY3RCYXNpYy5leHBlZGl0b3InKSxcbiAgICBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5yZWFjdEJhc2ljLnRpdGxlJyksXG4gIH0sXG4gIHtcbiAgICBkYXRlOiAnMDYvMjAxNycsXG4gICAgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5hbmd1bGFyNC5leHBlZGl0b3InKSxcbiAgICBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5hbmd1bGFyNC50aXRsZScpLFxuICB9LFxuICB7XG4gICAgZGF0ZTogJzA2LzIwMTcnLFxuICAgIGV4cGVkaXRvcjogdHJhbnNsYXRlKCdlZHVjYXRpb24udHlwZXNjcmlwdC5leHBlZGl0b3InKSxcbiAgICBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi50eXBlc2NyaXB0LnRpdGxlJyksXG4gIH0sXG4gIHsgZGF0ZTogJzA2LzIwMTcnLCBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmpxdWVyeS5leHBlZGl0b3InKSwgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24uanF1ZXJ5LnRpdGxlJykgfSxcbiAge1xuICAgIGRhdGU6ICcwNi8yMDE3JyxcbiAgICBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmJvb3RzdHJhcC5leHBlZGl0b3InKSxcbiAgICBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5ib290c3RyYXAudGl0bGUnKSxcbiAgfSxcbiAge1xuICAgIGRhdGU6ICcxMS8yMDE2JyxcbiAgICBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmFuZ3VsYXJqcy5leHBlZGl0b3InKSxcbiAgICBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5hbmd1bGFyanMudGl0bGUnKSxcbiAgfSxcbiAge1xuICAgIGRhdGU6ICcwMy8yMDE2IC0gMDQvMjAxNicsXG4gICAgZXhwZWRpdG9yOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5hZ2lsZS5leHBlZGl0b3InKSxcbiAgICBuYW1lOiB0cmFuc2xhdGUoJ2VkdWNhdGlvbi5hZ2lsZS50aXRsZScpLFxuICB9LFxuICB7XG4gICAgZGF0ZTogJzA2LzIwMTUgLSAwOC8yMDE1JyxcbiAgICBleHBlZGl0b3I6IHRyYW5zbGF0ZSgnZWR1Y2F0aW9uLmFuZHJvaWQuZXhwZWRpdG9yJyksXG4gICAgbmFtZTogdHJhbnNsYXRlKCdlZHVjYXRpb24uYW5kcm9pZC50aXRsZScpLFxuICB9LFxuXTtcblxuY29uc3QgRWR1Y2F0aW9uID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxTZWN0aW9uIHsuLi5yZXN0fSB0aXRsZT17dHJhbnNsYXRlKCdlZHVjYXRpb24udGl0bGUnKX0gY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLXNlY3Rpb25cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbi10aXRsZXNcIj5cbiAgICAgIHt0aXRsZXMubWFwKCh0aXRsZSkgPT4gKFxuICAgICAgICA8VGl0bGUga2V5PXt0aXRsZS5uYW1lfSB7Li4udGl0bGV9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uO1xuIiwiaW1wb3J0IEVkdWNhdGlvbiBmcm9tICcuL0VkdWNhdGlvbic7XG5pbXBvcnQgJy4vZWR1Y2F0aW9uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ3ViZSBmcm9tICcuLi9DdWJlJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9TZWN0aW9uJztcbmltcG9ydCB7IENVQkVfRkFDRVMgfSBmcm9tICcuLi9DdWJlL0N1YmUnO1xuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSAnLi9FeHBlcmllbmNlJztcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi9Tb2NpYWwnO1xuaW1wb3J0IEVkdWNhdGlvbiBmcm9tICcuL0VkdWNhdGlvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi91dGlscy90cmFuc2xhdG9yJztcblxuY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gIHJldHVybiAoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0ID8gaW5uZXJIZWlnaHQgOiBpbm5lcldpZHRoKSAqIDAuODtcbn07XG5jb25zdCBzaXplID0gZ2V0U2l6ZSgpO1xuXG5jb25zdCBNYWluQ3ViZSA9ICh7IGhpZGRlbkludHJvIH0pID0+IHtcbiAgY29uc3QgWyBpbml0aWFsVHJhbnNpdGlvbiwgc2V0SW5pdGlhbFRyYW5zaXRpb24gXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbIGlzRnVsbHNjcmVlbiwgc2V0SXNGdWxsc2NyZWVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuSW50cm8pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SW5pdGlhbFRyYW5zaXRpb24oZmFsc2UpLCA3NTApO1xuICAgIH1cbiAgfSwgWyBoaWRkZW5JbnRybyBdKTtcblxuICBjb25zdCBjb21tb25Qcm9wcyA9IHtcbiAgICBvbkZ1bGxzY3JlZW46ICgpID0+IHNldElzRnVsbHNjcmVlbih0cnVlKSxcbiAgICBvbkZ1bGxzY3JlZW5PdXQ6ICgpID0+IHNldElzRnVsbHNjcmVlbihmYWxzZSksXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibWFpbi1jdWJlXCIgY2xhc3NOYW1lPXtoaWRkZW5JbnRybyA/ICcnIDogJ2hpZGRlbi1jdWJlJ30+XG4gICAgICA8Q3ViZVxuICAgICAgICBjbGFzc05hbWU9e2luaXRpYWxUcmFuc2l0aW9uID8gJ2luaXRpYWwtdHJhbnNpdGlvbicgOiAnJ31cbiAgICAgICAgZGlzYWJsZWQ9e2lzRnVsbHNjcmVlbn1cbiAgICAgICAgZmFjZT17aW5pdGlhbFRyYW5zaXRpb24gPyBDVUJFX0ZBQ0VTLmJhY2sgOiBDVUJFX0ZBQ0VTLmZyb250fVxuICAgICAgICBsZWZ0Q29udGVudD17aGlkZGVuSW50cm8gJiYgPEVkdWNhdGlvbiB7Li4uY29tbW9uUHJvcHN9IC8+fVxuICAgICAgICBmcm9udENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxQcm9maWxlIHsuLi5jb21tb25Qcm9wc30gLz59XG4gICAgICAgIHJpZ2h0Q29udGVudD17aGlkZGVuSW50cm8gJiYgPEV4cGVyaWVuY2Ugey4uLmNvbW1vblByb3BzfSAvPn1cbiAgICAgICAgYmFja0NvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxTb2NpYWwgey4uLmNvbW1vblByb3BzfSAvPn1cbiAgICAgICAgYm90dG9tQ29udGVudD17XG4gICAgICAgICAgaGlkZGVuSW50cm8gJiYgKFxuICAgICAgICAgICAgPFNlY3Rpb24gey4uLmNvbW1vblByb3BzfSB0aXRsZT1cIk1hZGUgYnkgSmF2aSBHYXJjw61hIEZhamFyZG9cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZSgnaW5mby5jb2RlSW4nKX06PC9wPlxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0phdmlHRjgvbXktY3YvXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9KYXZpR0Y4L215LWN2L1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHRvcENvbnRlbnQ9e2hpZGRlbkludHJvICYmIDxTZWN0aW9uIHsuLi5jb21tb25Qcm9wc30gdGl0bGU9XCJIZWxsbyA6KVwiIGRpc2FibGVkIC8+fVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB3aXRoU3dpcGVcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5NYWluQ3ViZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhpZGRlbkludHJvOiBmYWxzZSxcbn07XG5cbk1haW5DdWJlLnByb3BUeXBlcyA9IHtcbiAgaGlkZGVuSW50cm86IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkN1YmU7XG4iLCJpbXBvcnQgTWFpbkN1YmUgZnJvbSAnLi9NYWluQ3ViZSc7XG5pbXBvcnQgJy4vbWFpbkN1YmUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5DdWJlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi91dGlscy90cmFuc2xhdG9yJztcblxuY29uc3QgSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgWyBzaG93LCBzZXRTaG93IF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgaW5mby1zZWN0aW9uIHNoYWRvdyR7c2hvdyA/ICcgaW5mby1zZWN0aW9uLWZ1bGwnIDogJyd9YH1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvdyh0cnVlKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2hvdyhmYWxzZSl9PlxuICAgICAgPEljb24gaWNvbj1cImZhcyBmYS1pbmZvXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby10aXRsZVwiPnt0cmFuc2xhdGUoJ2luZm8uaG93VG9Vc2UnKX08L3A+XG4gICAgICAgIDxwPnt0cmFuc2xhdGUoJ2luZm8uaW5mbycpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mbztcbiIsImltcG9ydCBJbmZvIGZyb20gJy4vSW5mbyc7XG5pbXBvcnQgJy4vaW5mby5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSW5mbztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaSBmcm9tICcuLi9jb21wb25lbnRzL0hpJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IE1haW5DdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkN1YmUnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9JbmZvJztcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgWyBoaWRkZW5JbnRybywgc2V0SGlkZGVuSW50cm8gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiZmFkZWluXCI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPEhpIG9uSGlkZT17KCkgPT4gc2V0SGlkZGVuSW50cm8odHJ1ZSl9IC8+XG4gICAgICAgIDxNYWluQ3ViZSBoaWRkZW5JbnRybz17aGlkZGVuSW50cm99IC8+XG4gICAgICAgIDxJbmZvIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJzZWxlY3RlZC1zZWN0aW9uXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2VzL01haW4nO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxNYWluIC8+XG4gIDwvQnJvd3NlclJvdXRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEFwcCBmcm9tICdBcHAnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9