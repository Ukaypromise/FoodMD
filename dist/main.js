"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone2_foodmd"] = self["webpackChunkcapstone2_foodmd"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgb(243, 232, 159);\\r\\n}\\r\\n\\r\\n.header {\\r\\n  height: 85px;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  font-size: 2rem;\\r\\n  align-items: center;\\r\\n  margin-bottom: 0.9rem;\\r\\n}\\r\\n\\r\\n.header a {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\nheader img {\\r\\n  height: 80px;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 85vh;\\r\\n  width: 90vw;\\r\\n  background-color: gray;\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n  margin-inline: 5vw;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 2rem;\\r\\n  margin-top: 5px;\\r\\n  justify-self: center;\\r\\n}\\r\\n\\r\\n.meal {\\r\\n  padding: 1rem;\\r\\n  margin: 1rem auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 0 10rem;\\r\\n}\\r\\n\\r\\n.meal-item {\\r\\n  border-radius: 1rem;\\r\\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\\r\\n  margin: 1rem auto;\\r\\n  text-align: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 330px;\\r\\n  background-color: whitesmoke;\\r\\n}\\r\\n\\r\\n.meal-img img {\\r\\n  width: 250px;\\r\\n  display: block;\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.meal-name {\\r\\n  padding: 1rem 0.5rem;\\r\\n}\\r\\n\\r\\n.meal-name p {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.involvement p {\\r\\n  margin-top: 7px;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  margin-top: 2rem;\\r\\n  padding: 0.5rem 0.9rem;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  height: 70px;\\r\\n  width: 99vw;\\r\\n  border: 1.5px solid black;\\r\\n  border-radius: 5px;\\r\\n  color: black;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding-left: 2rem;\\r\\n  margin-top: 1rem;\\r\\n  margin-inline: 0.5vw;\\r\\n}\\r\\n\\r\\n/* Modal */\\r\\n.modal-details {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  color: #fff;\\r\\n  background: slategray;\\r\\n  border-radius: 1rem;\\r\\n  width: 60%;\\r\\n  height: 60%;\\r\\n  overflow-y: scroll;\\r\\n  display: none;\\r\\n  padding: 2rem 0;\\r\\n}\\r\\n\\r\\n.modal-details::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n.modal-details::-webkit-scrollbar-thumb {\\r\\n  background: #f0f0f0;\\r\\n  border-radius: 2rem;\\r\\n}\\r\\n\\r\\n/* js related */\\r\\n.showModal {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.modal-details-content {\\r\\n  margin: 2rem;\\r\\n}\\r\\n\\r\\n.modal-close-btn {\\r\\n  position: absolute;\\r\\n  right: 2rem;\\r\\n  top: 2rem;\\r\\n  font-size: 1.8rem;\\r\\n  background: #fff;\\r\\n  border: none;\\r\\n  width: 35px;\\r\\n  height: 35px;\\r\\n  border-radius: 50%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\\r\\n.modal-title {\\r\\n  letter-spacing: 1px;\\r\\n  padding-bottom: 1rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.modal-meal-img img {\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  border-radius: 50%;\\r\\n  margin: 0 auto;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.item-details {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin: 0 7rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone2_foodmd/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone2_foodmd/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone2_foodmd/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone2_foodmd/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone2_foodmd/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone2_foodmd/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone2_foodmd/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone2_foodmd/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone2_foodmd/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone2_foodmd/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayFoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayFoods.js */ \"./src/modules/displayFoods.js\");\n\n\n\n(0,_modules_displayFoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://capstone2_foodmd/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayFoods.js":
/*!*************************************!*\
  !*** ./src/modules/displayFoods.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getMealinfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMealinfo.js */ \"./src/modules/getMealinfo.js\");\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n\n\n\nconst foodItemsDiv = document.getElementById('food-items');\n// const usrlikes = document.getElementById('likes');\n\n// event listeners\nfoodItemsDiv.addEventListener('click', _getMealinfo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconst displayFoods = () => {\n  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')\n    .then((res) => res.json())\n    .then((data) => {\n      (0,_involvement_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)().then((datalikes) => {\n        let html = '';\n        data.meals.forEach((meal) => {\n          const arrLikes = datalikes.filter(\n            (item) => item.item_id === meal.idMeal,\n          );\n\n          // ckeck if the objct is empty\n          let pickLikes = '';\n          if (arrLikes.length !== 0) {\n            pickLikes = arrLikes[0].likes;\n          }\n\n          html += `\n      <div class='meal-item' data-id = '${meal.idMeal}'> \n        <div class = 'meal-img'>     \n          <img src='${meal.strMealThumb}'>\n        </div>\n        <div class = 'involvement'> \n        <p>Show me how much you....<p>\n        <a>${pickLikes}  <i class='fa-regular fa-heart' id='like-${meal.idMeal}'>  Like</i></a>\n        </div>\n        <div class = 'meal-name'>\n          <p>${meal.strMeal}</p>\n          <p>Category: ${meal.strCategory}</p>\n          <button class = 'comment-btn'>Comment</button>\n        </div>\n      </div>\n      `;\n        });\n        foodItemsDiv.innerHTML = html;\n      });\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayFoods);\n\n\n//# sourceURL=webpack://capstone2_foodmd/./src/modules/displayFoods.js?");

/***/ }),

/***/ "./src/modules/getMealinfo.js":
/*!************************************!*\
  !*** ./src/modules/getMealinfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n/* harmony import */ var _mealInfoModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealInfoModal.js */ \"./src/modules/mealInfoModal.js\");\n\n\n\nconst modalDetailsContent = document.querySelector('.modal-details-content');\nconst recipeCloseBtn = document.getElementById('modal-close-btn');\n\nrecipeCloseBtn.addEventListener('click', () => {\n  modalDetailsContent.parentElement.classList.remove('showModal');\n});\n\n// get the meal\nfunction getMealInfo(e) {\n  e.preventDefault();\n\n  // if the like button was pressed\n\n  if (/like-/.test(e.target.id)) {\n    const { id } = e.target;\n    const foodNum = id.match(/\\d+$/)[0];\n    (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(foodNum);\n  }\n\n\n  if (e.target.classList.contains('comment-btn')) {\n    const mealItem = e.target.parentElement.parentElement;\n    fetch(\n      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`,\n    )\n      .then((response) => response.json())\n      .then((data) => (0,_mealInfoModal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.meals));\n  }\n}\n\n// create a modal\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMealInfo);\n\n//# sourceURL=webpack://capstone2_foodmd/./src/modules/getMealinfo.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\n// import displayFoods from './displayFoods.js';\n\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst key = '4ZfW9Nw9KyQJZ8SztYPH';\n\nconst getLikes = async () => {\n  const result = await fetch(`${url}${key}/likes`);\n  const data = await result.json();\n  return data;\n};\n\nconst addLike = async (id) => {\n  const body = JSON.stringify({ item_id: id });\n  const headers = { 'Content-type': 'application/json; charset=UTF-8' };\n  const result = await fetch(`${url}${key}/likes`, {\n    method: 'POST',\n    body,\n    headers,\n  });\n  result();\n};\n\n\n\n//# sourceURL=webpack://capstone2_foodmd/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/mealInfoModal.js":
/*!**************************************!*\
  !*** ./src/modules/mealInfoModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalDetailsContent = document.querySelector('.modal-details-content');\nfunction mealInfoModal(meal) {\n  const {\n    strMeal,\n    strMealThumb,\n    strCategory,\n    strArea,\n    strIngredient4,\n    strMeasure1,\n  } = meal[0];\n  // meal = meal[0];\n  const html = `\n        <div class=\"modal-meal-img\">\n              <img src=\"${strMealThumb}\" alt=\"\" />\n            </div>\n            <h2 class=\"modal-title\">${strMeal}</h2>\n            <div class=\"item-details\">\n              <div>\n                <p>${strCategory}</p>\n                <p>${strArea}</p>\n              </div>\n              <div>\n                <p>${strIngredient4}</p>\n                <p>${strMeasure1}</p>\n              </div>\n            </div>\n    `;\n  modalDetailsContent.innerHTML = html;\n  modalDetailsContent.parentElement.classList.add('showModal');\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealInfoModal);\n\n//# sourceURL=webpack://capstone2_foodmd/./src/modules/mealInfoModal.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);