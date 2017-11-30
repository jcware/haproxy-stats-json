(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("haproxyStats", [], factory);
	else if(typeof exports === 'object')
		exports["haproxyStats"] = factory();
	else
		root["haproxyStats"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJson = exports.toArray = undefined;

var _main = __webpack_require__(1);

exports.toArray = _main.toArray;
exports.toJson = _main.toJson;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray2(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var toArray = function toArray(strData) {
  if (typeof strData !== 'string') {
    throw new TypeError('strData must be a string');
  }
  if (strData.length === 0) {
    throw new Error('strData length must be greater than 0');
  }

  return strData.slice(2).split('\n');
};

var toJson = function toJson(strData) {
  var _toArray = toArray(strData),
      _toArray3 = _toArray2(_toArray),
      head = _toArray3[0],
      tail = _toArray3.slice(1);

  var fields = head.split(',');
  var strJson = tail.reduce(function (acc, atual, index, array) {
    var line = atual.split(',').slice(0, -1);

    return acc.concat('{' + line.map(function (lineItem, ind) {
      return '"' + fields[ind].trim() + '":"' + lineItem.trim() + '"';
    })).concat('},');
  }, '');
  strJson = '[' + strJson.slice(0, -1).replace(/'/g, '') + ']';

  return JSON.parse(strJson);
};

exports.toArray = toArray;
exports.toJson = toJson;

/***/ })
/******/ ]);
});
//# sourceMappingURL=haproxy-stats-json.js.map