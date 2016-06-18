/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var SolarSystemView = __webpack_require__(1);
	
	window.onload = function() {
		//Solar System Setup
		var height = document.documentElement.scrollHeight;
		var width = document.documentElement.scrollWidth;
	
		var scroll = function (event) {
			console.log(event);
			var y = event.clientY;
			var x = event.clientX;
			var yPercentage = y / screen.height;
			var xPercentage = x / screen.width;
			window.scrollTo(xPercentage * width, yPercentage * height);
		};
		scroll(window.onmousemove);
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	var SolarSystemView = function(solarSystem) {
		this.solarSystem = solarSystem;
	};
	
	SolarSystemView.prototype = {
		render: function() {
	
		},
	
		scroll: function (event) {
			var y = event.clientY;
			var x = event.clientX;
			var yPercentage = y / screen.height;
			var xPercentage = x / screen.width;
			window.scrollTo(xPercentage * width, yPercentage * height);
		}
	};
	
	module.exports = SolarSystemView;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map