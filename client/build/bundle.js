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
		var solarsystem = new SolarSystemView(solarsystem);
		solarsystem.render();
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	var SolarSystemView = function(solarSystem) {
		this.solarSystem = solarSystem;
	};
	
	SolarSystemView.prototype = {
		render: function() {
			this.show();
			this.coolscrollything();
		},
		coolscrollything: function() {
			var speed = 3;
			var x, y;
			function handleMouse(e) {
			  if (x && y) {
				document.getElementsByClassName("parallax")[0].scrollTop += speed*(e.clientY - y);
				document.getElementsByClassName("parallax")[0].scrollLeft += speed*(e.clientX - x);
			  }
			  x = e.clientX;
			  y = e.clientY;
			}
			document.onmousemove = handleMouse;
		},
		show: function() {
			var showButton = document.getElementsByName("orbit-inner-display")[0];
			showButton.addEventListener("click", function(event) {
				var innerOrbitDisplay = document.getElementsByClassName("orbit-inner-planet-img")[0];
				event.target = innerOrbitDisplay.style.visibility = "visible";
			});
		}
	
	};
	
	module.exports = SolarSystemView;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map