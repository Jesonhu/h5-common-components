/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer */ \"./src/components/layer.js\");\n/* harmony import */ var _util_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/selector */ \"./src/components/util/selector.js\");\n\r\n\r\n\r\nconst cComponents = {\r\n  Layer: _layer__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n  Selector: _util_selector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n}\r\n\r\nwindow.cComponents = cComponents;\n\n//# sourceURL=webpack:///./src/components/index.js?");

/***/ }),

/***/ "./src/components/layer.js":
/*!*********************************!*\
  !*** ./src/components/layer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/BaseComponent */ \"./src/components/util/BaseComponent.js\");\n\r\n\r\n/** 弹层组件 */\r\nclass Layer extends _util_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(selector, config) {\r\n    super();\r\n    /** `Dom`元素 */\r\n    this._element = this.Selector(selector)[0];\r\n    /** 遮罩层元素 */\r\n    this._maskElement = null;\r\n    /** 内容元素 */\r\n    this._contentElement = null;\r\n\r\n    /** 默认配置 */\r\n    this._config = {\r\n      hasMask: true,\r\n      veritcalCenter: true,\r\n      /** 遮罩层是否可以点击 */\r\n      maskCanTap: true,\r\n      isCanDrag: false\r\n    }\r\n\r\n    // 混入配置参数\r\n    if (typeof config === 'object') {\r\n      for (let key in config) {\r\n        if (config.hasOwnProperty(key)) {\r\n          this._config[key] = config[key]\r\n        }\r\n      }\r\n    }\r\n\r\n    // 是否需要生成`遮罩`层\r\n    if (this._config[`hasMask`]) {\r\n      this._createMaskElement();\r\n    }\r\n  }\r\n  /** 生成遮罩层元素 */\r\n  _createMaskElement() {\r\n    this['_maskElement'] = document.createElement('div');\r\n    this['_maskElement'].classList.add('mask-wrap');\r\n    this._element.appendChild(this['_maskElement']);\r\n    this._element.style.display = 'none';\r\n\r\n    // 点击遮罩层可以关闭\r\n    if (this._config['maskCanTap']) {\r\n      this._addMaskHandle();\r\n    }\r\n  }\r\n  /** 遮罩层可以进行操作 */\r\n  _addMaskHandle() {\r\n    // 这里是事件中`this`的处理\r\n    // 在事件回调中`this`为`this._maskElement`\r\n    // 为了在回调中能够操作整个弹层，使用了这种方式\r\n    // 其他方式等待探索\r\n    this._maskElement['$layer'] = this;\r\n    this._maskElement.addEventListener('click', this._onMaskHandle);\r\n  }\r\n  _onMaskHandle() {\r\n    this['$layer'].close();\r\n  }\r\n  /**\r\n   * 弹层`显示`,并`派发`事件\r\n   * \r\n   * @see https://github.com/Jesonhu/js-event-handle/blob/master/script/04.js\r\n   */\r\n  open() {\r\n    this._element.style.display = 'block';\r\n    if (this._config['hasMask']) this['_maskElement'].style.opacity = 1;\r\n    const event_open = this.createCustomEvent(Layer.EVENT_TYPE.open);\r\n    this._element.dispatchEvent(event_open);\r\n    // this.dispatchEvent(event_open);\r\n  }\r\n  /** \r\n   * 弹层`关闭`,并`派发`事件\r\n   */\r\n  close() {\r\n    const event_close = this.createCustomEvent(Layer.EVENT_TYPE.close);\r\n    this._element.dispatchEvent(event_close);\r\n    // this.dispatchEvent(event_close);\r\n    if (this._config['hasMask']) this['_maskElement'].style.opacity = 0;\r\n    this._element.style.display = 'none';\r\n  }\r\n\r\n  // /** 静态属性 */\r\n  // static EVENT_TYPE = {\r\n  //   open: 'layer_open',\r\n  //   close: 'layer_close'\r\n  // }\r\n}\r\n\r\n/** 静态属性 */\r\nLayer.EVENT_TYPE = {\r\n  open: 'layer_open',\r\n  close: 'layer_close'\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layer);\n\n//# sourceURL=webpack:///./src/components/layer.js?");

/***/ }),

/***/ "./src/components/util/BaseComponent.js":
/*!**********************************************!*\
  !*** ./src/components/util/BaseComponent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ \"./src/components/util/event.js\");\n/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector */ \"./src/components/util/selector.js\");\n\r\n\r\n\r\nclass BaseComponent extends _event__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.Selector = _selector__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseComponent);\n\n//# sourceURL=webpack:///./src/components/util/BaseComponent.js?");

/***/ }),

/***/ "./src/components/util/event.js":
/*!**************************************!*\
  !*** ./src/components/util/event.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 自定义事件类.\r\n * \r\n * @see [漫谈js自定义事件、DOM/伪DOM自定义事件](https://www.zhangxinxu.com/wordpress/2012/04/js-dom%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6/)\r\n */\r\nclass MeEvent {\r\n  /**\r\n   * 创建一个自定义的事件.\r\n   * \r\n   * @param {string} eventName 自定义事件的类型(名称)\r\n   * @param {[string]} msg 传递的消息\r\n   */\r\n  createCustomEvent(eventType, msg = '') {\r\n    let event;\r\n    if (typeof CustomEvent === 'function') {\r\n      event = new CustomEvent(eventType, {\r\n        detail: {\r\n          message: msg,\r\n          time: new Date()\r\n        },\r\n        bubbles: false,\r\n        cancelable: true\r\n      });\r\n    } else if (typeof document.createEvent === 'function') {\r\n      event = document.createEvent('Event');\r\n      event.initEvent(eventName, capture = false, false);\r\n    }\r\n    return event;\r\n  }\r\n  /**\r\n   * 自定义事件的监听 \r\n   */\r\n  addEventListener(type, fn, capture) {\r\n    const el = this._element;\r\n    if (window.addEventListener) {\r\n      el.addEventListener(type, fn, capture);\r\n    } else if (window.attachEvent) {\r\n      el.attachEvent('on' + type, fn);\r\n    }\r\n    return this;\r\n  }\r\n  /**\r\n   * 自定义事件的移除 \r\n   */\r\n  removeEventListener(type, fn, capture) {\r\n    const el = this._element;\r\n    if (window.removeEventListener) {\r\n      el.removeEventListener(type, fn, capture = false);\r\n    } else if (document.attachEvent) {\r\n      el.detachEvent(\"on\" + type, fn);\r\n      const arrEv = el[\"ev\" + type];\r\n      if (arrEv instanceof Array) {\r\n        for (var i = 0; i < arrEv.length; i += 1) {\r\n          // 删除该方法名下所有绑定的propertychange事件\r\n          el.detachEvent(\"onpropertychange\", arrEv[i]);\r\n        }\r\n      }\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeEvent);\n\n//# sourceURL=webpack:///./src/components/util/event.js?");

/***/ }),

/***/ "./src/components/util/selector.js":
/*!*****************************************!*\
  !*** ./src/components/util/selector.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** \r\n * 准备工作.\r\n * 在`页面加载后`就应该自动执行.\r\n * \r\n * @desc 例如: 判断文档类型是不是`HTML`\r\n */\r\nconst Ready = {\r\n  documentIsHTML: true,\r\n  preferredDoc: window.document,\r\n  document: null,\r\n  init() {\r\n    this.setDocument();\r\n  },\r\n  /**\r\n   * Sets document-related variables once based on the current document\r\n   * 找到document后，就设置与之相关的变量\r\n   * @param {Element|Object} [doc] An element or document object to use to set the document\r\n   * @returns {Object} Returns the current document\r\n   */\r\n  setDocument(node) {\r\n    let hasCompare;\r\n    let subWindow;\r\n\r\n    let doc = node ? (node.owerDocument || node) : this.preferredDoc;\r\n\r\n    if (doc === document || (doc.nodeType !== NODETYPE.doc) || !doc.documentElement) {\r\n      return document;\r\n    }\r\n\r\n    this.document = doc;\r\n    this.documentIsHTML = this.isXML(this.document);\r\n  },\r\n  /**\r\n   * Detects XML nodes\r\n   * 判断是否是`XML`\r\n   * @param {Element|Object} elem An element or a document\r\n   * @returns {Boolean} True iff elem is a non-HTML XML node\r\n   */\r\n  isXML(elem) {\r\n    const documentElement = elem && (elem.owerDocument || elem).documentElement;\r\n    return documentElement ? documentElement.nodeType !== 'HTML' : false;\r\n  },\r\n\r\n}\r\nReady.init();\r\n\r\n/** \r\n * 功能相关正则表达式集合\r\n *\r\n * @see [菜鸟-正则](http://www.runoob.com/js/js-regexp.html)\r\n */\r\nconst regexp_unit = {\r\n  /** \r\n   * Easily-parseable/retrievable ID or TAG or CLASS selectors \r\n   */\r\n  rquickExpr: /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/\r\n}\r\n\r\n// @see http://www.w3school.com.cn/jsref/prop_node_nodetype.asp\r\nconst NODETYPE = {\r\n  /** 此节点为`Document` */\r\n  doc: 9,\r\n  docFragment: 11\r\n}\r\n\r\n/**\r\n * 简单的`css`选择器.\r\n * \r\n * @param {string} selector 筛选器\r\n * @param {[DOMNode]} context\r\n * @param {[Array]} results \r\n * @param {[]} seed\r\n * \r\n * @see [Sizz项目地址](https://github.com/jquery/sizzle)\r\n * @see [sizzle.js](http://sizzlejs.com/)\r\n * @see [分析如何匹配Id](https://gitee.com/weblife/sizzle-analyze/blob/v1.x.x/src/01_id%E7%9A%84%E5%A4%84%E7%90%86.js)\r\n * @example\r\n * ```\r\n * Selector('#app')\r\n * // => <element id=\"app\"></element>\r\n * ```\r\n */\r\nfunction Selector(selector, context, results = [], seed) {\r\n  const { documentIsHTML } = Ready;\r\n  const { rquickExpr } = regexp_unit;\r\n\r\n  let m;\r\n  // 没传范围，默认节点类型为9--`document`\r\n  // @see http://www.w3school.com.cn/jsref/prop_node_nodetype.asp\r\n  let nodeType = context ? context.nodeType : NODETYPE.doc;\r\n  \r\n\r\n  if (!seed) {\r\n    context = context || document;\r\n\r\n    if (documentIsHTML) {\r\n      const match = rquickExpr.exec(selector);\r\n      if ((nodeType != NODETYPE.docFragment) && match) {\r\n\r\n        // ID selector\r\n        if (m = match[1]) {\r\n          if (nodeType === NODETYPE.doc) {\r\n            if (context.getElementById(m)) {\r\n              const elem = context.getElementById(m);\r\n\r\n              // 兼容处理:\r\n              // `id`元素的`id属性`与元素相等.\r\n              // Support: IE, Opera, Webkit\r\n              // TODO: identify versions\r\n              // getElementById can match elements by name instead of ID\r\n              if (elem.id === m) {\r\n                results.push(elem);\r\n                return results;\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\n\n//# sourceURL=webpack:///./src/components/util/selector.js?");

/***/ })

/******/ });