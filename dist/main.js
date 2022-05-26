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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/setup.js */ \"./src/modules/setup.js\");\n\r\n\r\nconst addBtn = document.getElementById('submit');\r\nconst data = document.getElementById('data');\r\n\r\nconst printList = () => {\r\n  for (let i = 0; i < _modules_setup_js__WEBPACK_IMPORTED_MODULE_0__.scoresList.length; i += 1) {\r\n    const scoreStorage = document.createElement('li');\r\n    scoreStorage.textContent = `${_modules_setup_js__WEBPACK_IMPORTED_MODULE_0__.scoresList[i].name}: ${_modules_setup_js__WEBPACK_IMPORTED_MODULE_0__.scoresList[i].score}`;\r\n    scoreStorage.className = 'scoreStorage';\r\n    _modules_setup_js__WEBPACK_IMPORTED_MODULE_0__.container.append(scoreStorage);\r\n  }\r\n};\r\n\r\nprintList();\r\n\r\naddBtn.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  const score = new _modules_setup_js__WEBPACK_IMPORTED_MODULE_0__.Score(_modules_setup_js__WEBPACK_IMPORTED_MODULE_0__.nameInput.value, _modules_setup_js__WEBPACK_IMPORTED_MODULE_0__.scoreInput.value);\r\n  score.addNew(score);\r\n  data.reset();\r\n  window.location.reload();\r\n});\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/setup.js":
/*!******************************!*\
  !*** ./src/modules/setup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Score\": () => (/* binding */ Score),\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"nameInput\": () => (/* binding */ nameInput),\n/* harmony export */   \"scoreInput\": () => (/* binding */ scoreInput),\n/* harmony export */   \"scoresList\": () => (/* binding */ scoresList)\n/* harmony export */ });\nconst nameInput = document.getElementById('name');\r\nconst scoreInput = document.getElementById('score');\r\nconst container = document.getElementById('scores');\r\nconst scoresList = JSON.parse(localStorage.getItem('score')) || [];\r\nclass Score {\r\n  constructor(name, score) {\r\n    this.list = [name, score];\r\n    this.name = name;\r\n    this.score = score;\r\n  }\r\n\r\n  addNew = (dato) => {\r\n    scoresList.push(dato);\r\n    localStorage.setItem('score', JSON.stringify(scoresList));\r\n  }\r\n}\n\n//# sourceURL=webpack://leaderboard/./src/modules/setup.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;