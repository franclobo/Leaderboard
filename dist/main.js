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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _modules_setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/setup.js */ \"./src/modules/setup.js\");\n\r\n\r\n\r\n\r\nconst addBtn = document.getElementById('submit');\r\nconst refreshBtn = document.getElementById('refresh');\r\n\r\nif (_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.gameID === null) { (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.gameName)(); }\r\n\r\naddBtn.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.populate)(_modules_setup_js__WEBPACK_IMPORTED_MODULE_1__.nameInput, _modules_setup_js__WEBPACK_IMPORTED_MODULE_1__.scoreInput, _modules_API_js__WEBPACK_IMPORTED_MODULE_0__.gameID);\r\n});\r\n\r\nrefreshBtn.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.listScores)(_modules_API_js__WEBPACK_IMPORTED_MODULE_0__.gameID, _modules_setup_js__WEBPACK_IMPORTED_MODULE_1__.container);\r\n});\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameID\": () => (/* binding */ gameID),\n/* harmony export */   \"gameName\": () => (/* binding */ gameName),\n/* harmony export */   \"listScores\": () => (/* binding */ listScores),\n/* harmony export */   \"populate\": () => (/* binding */ populate)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.js */ \"./src/modules/setup.js\");\n\r\n\r\nconst gameID = localStorage.getItem('scores');\r\nconst apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';\r\n\r\nconst hide = () => {\r\n  _setup_js__WEBPACK_IMPORTED_MODULE_0__.msg.setAttribute('style', 'display: none');\r\n};\r\n\r\nconst gameName = async (gameID) => {\r\n  let response = await fetch(apiURL, {\r\n    method: 'POST',\r\n    body: JSON.stringify({ name: 'Ready player one' }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  response = await response.json();\r\n  gameID = await response.result.slice(14, 34);\r\n  localStorage.setItem('scores', gameID);\r\n  window.location.reload();\r\n};\r\n\r\nconst populate = async (nameInput, scoreInput, gameID) => {\r\n  if (nameInput.value !== '' && scoreInput.value !== '' && Number.isNaN(scoreInput.value) === false) {\r\n    await fetch(`${apiURL}/${gameID}/scores/`, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        user: `${nameInput.value}:`,\r\n        score: `${scoreInput.value}`,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n    _setup_js__WEBPACK_IMPORTED_MODULE_0__.msg.textContent = 'New score!';\r\n    nameInput.value = '';\r\n    scoreInput.value = '';\r\n    setTimeout(hide, 3000);\r\n  } else {\r\n    _setup_js__WEBPACK_IMPORTED_MODULE_0__.msg.textContent = 'Complete all';\r\n    setTimeout(hide, 3000);\r\n  }\r\n};\r\n\r\nconst listScores = async (gameID, container) => {\r\n  container.innerHTML = '';\r\n  let response = await fetch(`${apiURL}/${gameID}/scores`, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  response = await response.json();\r\n  response = response.result.sort((a, b) => (b.score - a.score));\r\n  response.forEach((element) => {\r\n    container.innerHTML += `<li>${element.user} ${element.score}</li>`;\r\n  });\r\n};\n\n//# sourceURL=webpack://leaderboard/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/setup.js":
/*!******************************!*\
  !*** ./src/modules/setup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"msg\": () => (/* binding */ msg),\n/* harmony export */   \"nameInput\": () => (/* binding */ nameInput),\n/* harmony export */   \"scoreInput\": () => (/* binding */ scoreInput)\n/* harmony export */ });\nconst nameInput = document.getElementById('name');\r\nconst scoreInput = document.getElementById('score');\r\nconst msg = document.getElementById('msg');\r\nconst container = document.getElementById('scores');\n\n//# sourceURL=webpack://leaderboard/./src/modules/setup.js?");

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