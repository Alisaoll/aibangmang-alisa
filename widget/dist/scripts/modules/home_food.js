/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _common = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../common/common.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _common2 = _interopRequireDefault(_common);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.apiready = function () {
	  (0, _common2.default)();
	  setReflash();
	  new Vue({
	    el: '#foods',
	    data: {
	      foods: []
	    },
	    created: function created() {
	      getFoods.call(this);
	    }
	  });
	};

	function getFoods() {
	  var _this = this;

	  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

	  window.lib.$api.get('http://www.abangmang.cn/e/extend/app/home.php?enews=queryInfoOne&classid=7&limit=0,' + limit, function (res) {
	    _this.foods = res.list;
	  }, 'json');
	}

	function setReflash() {
	  api.setRefreshHeaderInfo({
	    visible: true,
	    loadingImg: 'widget://image/refresh.png',
	    bgColor: '#ccc',
	    textColor: '#fff',
	    textDown: '下拉刷新...',
	    textUp: '松开刷新...',
	    showTime: true
	  }, function (ret, err) {
	    getFoods(10);
	  });
	}

/***/ }
/******/ ]);