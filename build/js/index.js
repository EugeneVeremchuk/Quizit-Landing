/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/index.js":
/*!****************************!*\
  !*** ./source/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_engineScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/engineScroll.js */ \"./source/js/modules/engineScroll.js\");\n// import './modules/deviceDetection.js'\r\n// import './modules/menuInterface.js'\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp/./source/js/index.js?");

/***/ }),

/***/ "./source/js/modules/engineScroll.js":
/*!*******************************************!*\
  !*** ./source/js/modules/engineScroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nlet zSpacing = -1000\r\nlet zValues = []\r\nlet lastPosition = zSpacing / 5\r\nconst $frames = document.querySelectorAll('.frame')\r\n\r\nfunction engineScroll(event) {\r\n  \r\n  let top = document.documentElement.scrollTop\r\n  console.log('top', top)\r\n  let delta = lastPosition - top\r\n  console.log('delta', delta)\r\n  lastPosition = top\r\n  console.log('lastPos', lastPosition)\r\n  \r\n  $frames.forEach((frame, index) => {\r\n    zValues.push((index * zSpacing) + zSpacing)\r\n    zValues[index] += delta * -5.5\r\n    let transfrom = `translateZ(${zValues[index]}px)`\r\n    let opacity = zValues[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0\r\n    frame.setAttribute('style', `transform: ${transfrom}; opacity: ${opacity}`)\r\n  })\r\n\r\n}\r\n\r\nwindow.addEventListener('scroll', function(event) {\r\n  console.log(document.documentElement.scrollTop)\r\n})\r\n\r\n//window.scrollTo(0, 10)\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp/./source/js/modules/engineScroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/index.js");
/******/ 	
/******/ })()
;