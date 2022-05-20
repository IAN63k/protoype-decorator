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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://prototype/./src/style.css?");

/***/ }),

/***/ "./src/classes/Enemy.js":
/*!******************************!*\
  !*** ./src/classes/Enemy.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Enemy\": () => (/* binding */ Enemy)\n/* harmony export */ });\n\r\n\r\nclass Enemy {\r\n\r\n    constructor(name = '', lvl = 1, damage = 10, life = 100) {\r\n        this.name = name;\r\n        this.lvl = (lvl < 1) ? lvl = 1 : lvl;\r\n        this.damage = (damage < 1) ? damage = 10 : damage;\r\n        this.life = (life < 100) ? life = 100 : life;\r\n\r\n    }\r\n\r\n    getEnemy() {\r\n        return `Un ${this.name} de nvl ${this.lvl} con ${this.life} pts de vida te a provocado un daño de ${this.damage}.`;\r\n    }\r\n}\n\n//# sourceURL=webpack://prototype/./src/classes/Enemy.js?");

/***/ }),

/***/ "./src/classes/EnemyArmour.js":
/*!************************************!*\
  !*** ./src/classes/EnemyArmour.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EnemyArmour\": () => (/* binding */ EnemyArmour)\n/* harmony export */ });\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/componentes */ \"./src/js/componentes.js\");\n\r\n\r\nclass EnemyArmour {\r\n\r\n    constructor(enemy, armuor = 'Desnudo') {\r\n        this.enemy = enemy;\r\n        this.enemy.armuor= armuor;\r\n    }\r\n\r\n    EnemyModel({enemy}) {\r\n        (enemy.lvl < 50) \r\n            ? (enemy.lvl < 25)  ? (0,_js_componentes__WEBPACK_IMPORTED_MODULE_0__.addEnemy)(enemy) : (0,_js_componentes__WEBPACK_IMPORTED_MODULE_0__.addKnight)(enemy)\r\n        : (0,_js_componentes__WEBPACK_IMPORTED_MODULE_0__.addBoss)(enemy);\r\n        return `Un ${this.enemy.name} -${this.enemy.armuor}- de nvl ${this.enemy.lvl}, te a provocado un daño de ${this.enemy.damage}.`;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://prototype/./src/classes/EnemyArmour.js?");

/***/ }),

/***/ "./src/classes/Prototype.js":
/*!**********************************!*\
  !*** ./src/classes/Prototype.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Prototype\": () => (/* binding */ Prototype)\n/* harmony export */ });\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ \"./src/classes/Enemy.js\");\n\r\n\r\nclass Prototype {\r\n    // Clase inicial\r\n    constructor(proto) {\r\n        // proto es el prototipo.\r\n        this.proto = proto;\r\n        return this.clone();\r\n    }\r\n\r\n    clone() { // Clona el prototipo que se ha enviado.\r\n        let baseEney = new _Enemy__WEBPACK_IMPORTED_MODULE_0__.Enemy();\r\n        baseEney.name = this.proto.name;\r\n        baseEney.lvl = this.proto.lvl;\r\n        baseEney.damage = this.proto.damage;\r\n\r\n        return baseEney;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://prototype/./src/classes/Prototype.js?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Enemy\": () => (/* reexport safe */ _Enemy__WEBPACK_IMPORTED_MODULE_0__.Enemy),\n/* harmony export */   \"EnemyArmour\": () => (/* reexport safe */ _EnemyArmour__WEBPACK_IMPORTED_MODULE_2__.EnemyArmour),\n/* harmony export */   \"Prototype\": () => (/* reexport safe */ _Prototype__WEBPACK_IMPORTED_MODULE_1__.Prototype)\n/* harmony export */ });\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ \"./src/classes/Enemy.js\");\n/* harmony import */ var _Prototype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prototype */ \"./src/classes/Prototype.js\");\n/* harmony import */ var _EnemyArmour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnemyArmour */ \"./src/classes/EnemyArmour.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://prototype/./src/classes/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n\r\n\r\n\r\n/** --------------------------------\r\n -- MAIN\r\n-------------------------------- */\r\n\r\n/** ------\r\n -- Creación del primer enemigo\r\n----- */\r\nconst baseEnemyPrototype = new _classes__WEBPACK_IMPORTED_MODULE_1__.Enemy('Enemigo', 15, 0);\r\nconst baseEnemy          = new _classes__WEBPACK_IMPORTED_MODULE_1__.Prototype(baseEnemyPrototype);// Copia del enemigo base atravéz del constructor.\r\nconst baseEnemyArmour    = new _classes__WEBPACK_IMPORTED_MODULE_1__.EnemyArmour(baseEnemy);//        Creamos una instancia del enemigo decorado.\r\nconst baseEnemyPrototypeArmour    = new _classes__WEBPACK_IMPORTED_MODULE_1__.EnemyArmour(baseEnemyPrototype);\r\n\r\nconst bossEnemyFinalPrototype = new _classes__WEBPACK_IMPORTED_MODULE_1__.Enemy('Boss Final', 100, 15000, 999999); // Jefe de piso final\r\nconst bossFinalModed = new _classes__WEBPACK_IMPORTED_MODULE_1__.EnemyArmour(bossEnemyFinalPrototype, 'Dragón');\r\n\r\n// baseEnemy.lvl = 38; // Esta linea de codigo modifica el clon\r\n\r\nbossFinalModed.EnemyModel(bossFinalModed);\r\nbaseEnemyArmour.EnemyModel(baseEnemyArmour);\r\nbaseEnemyPrototypeArmour.EnemyModel(baseEnemyPrototypeArmour);\r\n\n\n//# sourceURL=webpack://prototype/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBoss\": () => (/* binding */ addBoss),\n/* harmony export */   \"addEnemy\": () => (/* binding */ addEnemy),\n/* harmony export */   \"addKnight\": () => (/* binding */ addKnight)\n/* harmony export */ });\n\r\nconst divEnemy = document.querySelector('.enemys-view');\r\n\r\nconst addEnemy = (enemy) => {\r\n  const htmlGif = `\r\n    <div>\r\n        <img src=\"https://i.pinimg.com/originals/2a/5a/5e/2a5a5e43117e61814bf3c0074196b5cb.gif\" alt=\"\">\r\n        <figcaption>\r\n          ${enemy.lvl}  \r\n        </figcaption>\r\n        <figcaption>\r\n         ${enemy.life}  \r\n        </figcaption>\r\n        <figcaption>\r\n         ${enemy.damage}  \r\n        </figcaption>\r\n    </div>\r\n    `;\r\n  const div = document.createElement('div');\r\n  div.innerHTML = htmlGif;\r\n\r\n  divEnemy.append(div.firstElementChild);\r\n\r\n  return div.firstElementChild;\r\n}\r\n\r\nconst addBoss = (enemy) => {\r\n  const htmlGifBoss = `\r\n  <div>\r\n      <img src=\"https://orig14.deviantart.net/67d6/f/2016/057/7/8/goaliath___attack_by_porforever-d9t68uk.gif\" alt=\"\">\r\n      <figcaption>\r\n        ${enemy.lvl}  \r\n      </figcaption>\r\n      <figcaption>\r\n      ${enemy.life}  \r\n    </figcaption>\r\n    <figcaption>\r\n         ${enemy.damage}  \r\n        </figcaption>\r\n  </div>\r\n  `;\r\n  const div = document.createElement('div');\r\n  div.innerHTML = htmlGifBoss;\r\n\r\n  divEnemy.append(div.firstElementChild);\r\n\r\n  return div.firstElementChild;\r\n}\r\nconst addKnight = (enemy) => {\r\n  const htmlGif = `\r\n  <div>\r\n      <img src=\"https://i.pinimg.com/originals/89/3a/8a/893a8a600dbd6bf31a3242c896c6d3ff.gif\" alt=\"\">\r\n      <figcaption>\r\n        ${enemy.lvl}  \r\n      </figcaption>\r\n      <figcaption>\r\n      ${enemy.life}  \r\n    </figcaption>\r\n    <figcaption>\r\n         ${enemy.damage}  \r\n        </figcaption>\r\n  </div>\r\n  `;\r\n  const div = document.createElement('div');\r\n  div.innerHTML = htmlGif;\r\n\r\n  divEnemy.append(div.firstElementChild);\r\n\r\n  return div.firstElementChild;\r\n}\n\n//# sourceURL=webpack://prototype/./src/js/componentes.js?");

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