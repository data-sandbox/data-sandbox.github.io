/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --font-family: "Roboto", sans-serf;
  --normal-font: 400;
  --bold-font: 700;
  --bolder-font: 900;

  --primary-color: #1b494b;
  --secondary-color: #c4d4be;
  --bg-color: #1b494b;

  --white-light: rgb(246, 249, 246);
  --primary-shadow: black;

  --bottom-margin: 0.5rem;
  --bottom-margin-2: 1rem;
  --padding-side: 2.5rem;
  --line-height: 1.7rem;

  --transition: 0.3s;

  --content-width: 1160px;
}


html {
  scroll-behavior: smooth;
}

/* CSS Resets */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

a:hover {
  color: var(--secondary-color);
}

body {
  font-family: var(--font-family);
}

/* Layout container */

.layout {
  background-color: var(--primary-color);
  color: var(--dark-green);
  height: 100%;
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Navbar */

nav {
  position: sticky;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: var(--primary-color);
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.4);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: right;
  flex-grow: 1;
  max-width: var(--content-width);
  padding: 0 var(--padding-side);
  height: 67px;
}

nav a {
  color: var(--secondary-color);
  transition: var(--transition);
}

nav a:hover {
  color: white;
  border-bottom: 2px solid white;
}

nav ul {
  display: flex;
  gap: 1.5rem;
}

nav ul li {
  font-weight: var(--bold-font);
}

.hamburger {
  z-index: 100;
  color: var(--secondary-color);
  border: none;
  background: transparent;
  cursor: pointer;
  display: none;
}

button .close-icon {
  display: none;
}


main {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--content-width);
}

.header {
  color: var(--secondary-color);
  margin-bottom: var(--bottom-margin);
}

section {
  scroll-margin-top: 5rem;
}

/* Hero */

.hero {
  color: var(--secondary-color);
  display: grid;
  width: 100%;
  align-items: center;
  gap: 4rem;
  grid-template-columns: 3fr 2fr;
  padding: 3rem var(--padding-side);
  max-width: var(--content-width);
}

.hero h1 {
  font-size: 3rem;
}

.hero p {
  padding-top: 2rem;
  font-size: 1.2rem;
  line-height: 1.6;
}

.avatar {
  max-width: min(100%, 300px);
  border-radius: 12px;
  transform: rotate(5deg);
  justify-self: right;
  box-shadow: 3px 3px 8px var(--primary-shadow);
}

.hero a {
  text-decoration: underline;
  color: white;
}

.hero a:hover {
  color: var(--secondary-color);
}

/* About */

.about {
  padding: 1rem var(--padding-side);
}

.about p {
  line-height: var(--line-height);
  color: white;
  max-width: min(100%, 800px);
}

/* Projects */

.projects {
  padding: 1rem var(--padding-side);
  margin-top: 2rem;
  width: 100%;
}

.project-pic {
  width: 65%;
  height: 60%;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: auto;
  gap: 2rem;
  justify-content: center;
  padding-bottom: 2rem;
  color: var(--primary-color);
}

.projects-title {
  margin-bottom: 1rem;
}

.project-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.project-title {
  margin-bottom: var(--bottom-margin);
}

.project-details {
  margin-bottom: var(--bottom-margin);
}

.project-card {
  background-color: var(--white-light);
  border-radius: 11px;
  box-shadow: 0 3px 8px var(--primary-shadow);
  padding: 1.9rem 2.5rem;
}

.project-card:hover {
  transform: scale(1.01);
  transition: transform 0.3s ease-in;
}

.links-container {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

footer {
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--secondary-color);
  padding: 1rem;
}

@media screen and (max-width: 720px) {
  .navbar {
    padding: 0 1.5rem;
  }

  .navbar ul {
    position: fixed;
    z-index: 99;
    background-color: var(--bg-color);
    flex-direction: column;
    padding-top: 30px;
    top: 0;
    right: 0;
    width: 50%;
    text-align: center;
    transform: translateY(-110%);
    transition: transform 0.3s ease-in;
    padding-bottom: 1.5rem;
    border: 1px solid var(--secondary-color);
  }

  .navbar ul li {
    margin: 8px;
  }

  .hamburger {
    display: block;
  }

  .navbar ul.show {
    transform: translateY(0);
  }

  button .close-icon.show {
    display: block;
  }

  button .menu-icon.hide {
    display: none;
  }

}

/* @media screen and (max-width: 600px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .avatar {
    justify-self: left;
  }
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,700&display=swap\");\n\n:root {\n  --font-family: \"Roboto\", sans-serf;\n  --normal-font: 400;\n  --bold-font: 700;\n  --bolder-font: 900;\n\n  --primary-color: #1b494b;\n  --secondary-color: #c4d4be;\n  --bg-color: #1b494b;\n\n  --white-light: rgb(246, 249, 246);\n  --primary-shadow: black;\n\n  --bottom-margin: 0.5rem;\n  --bottom-margin-2: 1rem;\n  --padding-side: 2.5rem;\n  --line-height: 1.7rem;\n\n  --transition: 0.3s;\n\n  --content-width: 1160px;\n}\n\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n/* CSS Resets */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\na:hover {\n  color: var(--secondary-color);\n}\n\nbody {\n  font-family: var(--font-family);\n}\n\n/* Layout container */\n\n.layout {\n  background-color: var(--primary-color);\n  color: var(--dark-green);\n  height: 100%;\n  /* width: 100vw; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Navbar */\n\nnav {\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: var(--primary-color);\n  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.4);\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  flex-grow: 1;\n  max-width: var(--content-width);\n  padding: 0 var(--padding-side);\n  height: 67px;\n}\n\nnav a {\n  color: var(--secondary-color);\n  transition: var(--transition);\n}\n\nnav a:hover {\n  color: white;\n  border-bottom: 2px solid white;\n}\n\nnav ul {\n  display: flex;\n  gap: 1.5rem;\n}\n\nnav ul li {\n  font-weight: var(--bold-font);\n}\n\n.hamburger {\n  z-index: 100;\n  color: var(--secondary-color);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: none;\n}\n\nbutton .close-icon {\n  display: none;\n}\n\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: var(--content-width);\n}\n\n.header {\n  color: var(--secondary-color);\n  margin-bottom: var(--bottom-margin);\n}\n\nsection {\n  scroll-margin-top: 5rem;\n}\n\n/* Hero */\n\n.hero {\n  color: var(--secondary-color);\n  display: grid;\n  width: 100%;\n  align-items: center;\n  gap: 4rem;\n  grid-template-columns: 3fr 2fr;\n  padding: 3rem var(--padding-side);\n  max-width: var(--content-width);\n}\n\n.hero h1 {\n  font-size: 3rem;\n}\n\n.hero p {\n  padding-top: 2rem;\n  font-size: 1.2rem;\n  line-height: 1.6;\n}\n\n.avatar {\n  max-width: min(100%, 300px);\n  border-radius: 12px;\n  transform: rotate(5deg);\n  justify-self: right;\n  box-shadow: 3px 3px 8px var(--primary-shadow);\n}\n\n.hero a {\n  text-decoration: underline;\n  color: white;\n}\n\n.hero a:hover {\n  color: var(--secondary-color);\n}\n\n/* About */\n\n.about {\n  padding: 1rem var(--padding-side);\n}\n\n.about p {\n  line-height: var(--line-height);\n  color: white;\n  max-width: min(100%, 800px);\n}\n\n/* Projects */\n\n.projects {\n  padding: 1rem var(--padding-side);\n  margin-top: 2rem;\n  width: 100%;\n}\n\n.project-pic {\n  width: 65%;\n  height: 60%;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-template-rows: auto;\n  gap: 2rem;\n  justify-content: center;\n  padding-bottom: 2rem;\n  color: var(--primary-color);\n}\n\n.projects-title {\n  margin-bottom: 1rem;\n}\n\n.project-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n\n.project-title {\n  margin-bottom: var(--bottom-margin);\n}\n\n.project-details {\n  margin-bottom: var(--bottom-margin);\n}\n\n.project-card {\n  background-color: var(--white-light);\n  border-radius: 11px;\n  box-shadow: 0 3px 8px var(--primary-shadow);\n  padding: 1.9rem 2.5rem;\n}\n\n.project-card:hover {\n  transform: scale(1.01);\n  transition: transform 0.3s ease-in;\n}\n\n.links-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n\nfooter {\n  background-color: rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  color: var(--secondary-color);\n  padding: 1rem;\n}\n\n@media screen and (max-width: 720px) {\n  .navbar {\n    padding: 0 1.5rem;\n  }\n\n  .navbar ul {\n    position: fixed;\n    z-index: 99;\n    background-color: var(--bg-color);\n    flex-direction: column;\n    padding-top: 30px;\n    top: 0;\n    right: 0;\n    width: 50%;\n    text-align: center;\n    transform: translateY(-110%);\n    transition: transform 0.3s ease-in;\n    padding-bottom: 1.5rem;\n    border: 1px solid var(--secondary-color);\n  }\n\n  .navbar ul li {\n    margin: 8px;\n  }\n\n  .hamburger {\n    display: block;\n  }\n\n  .navbar ul.show {\n    transform: translateY(0);\n  }\n\n  button .close-icon.show {\n    display: block;\n  }\n\n  button .menu-icon.hide {\n    display: none;\n  }\n\n}\n\n/* @media screen and (max-width: 600px) {\n  .hero {\n    grid-template-columns: 1fr;\n  }\n\n  .avatar {\n    justify-self: left;\n  }\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/avatar.jpg */ "./src/images/avatar.jpg");


function loadImages() {

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('avatar');
  avatarImg.setAttribute('src', _images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__);
  avatarImg.setAttribute('alt', 'Avatar');

  const avatarContainer = document.getElementById('hero');
  avatarContainer.appendChild(avatarImg);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadImages);

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createProject(title, description, repo) {

  const projCard = document.createElement('div');
  projCard.classList.add('project-container');
  projCard.classList.add('project-card');

  const projTitle = document.createElement('h3');
  projTitle.classList.add('project-title');
  projTitle.textContent = title;

  const projDetails = document.createElement('p');
  projDetails.classList.add('project-details');
  projDetails.textContent = description;

  const projLinks = document.createElement('div');
  projLinks.classList.add('links-container');

  const demoLink = document.createElement('a');
  demoLink.textContent = '👉 Live Demo';
  demoLink.setAttribute('href', `https://data-sandbox.github.io/${repo}/`);
  demoLink.setAttribute('target', '_blank');

  const sourceLink = document.createElement('a');
  sourceLink.textContent = '⚛️ Source Code';
  sourceLink.setAttribute('href', `https://github.com/data-sandbox/${repo}/`);
  sourceLink.setAttribute('target', '_blank');

  projLinks.appendChild(demoLink);
  projLinks.appendChild(sourceLink);

  projCard.appendChild(projTitle);
  projCard.appendChild(projDetails);
  projCard.appendChild(projLinks);

  return projCard;
}

function loadProjects() {
  const projects = document.getElementById('projects-container');

  projects.appendChild(createProject('Etch-a-Sketch', 'Modern Etch-a-sketch game using JS, HTML, CSS.', 'etch-a-sketch'));

  projects.appendChild(createProject('Dynamic Single Page', 'Restaurant website dynamically rendered by JS.', 'restaurant'));

  projects.appendChild(createProject('Library App', 'Store your reading list in one place.', 'library'));

  projects.appendChild(createProject('Tic-Tac-Toe', 'Tic Tac Toe game built with JS, HTML, CSS.', 'tic-tac-toe'));

  projects.appendChild(createProject('Admin Dashboard', 'Responsive dashboard built with grid and flexbox.', 'admin-dashboard'));

  projects.appendChild(createProject('My Website', 'Source files for this awesome website.', 'data-sandbox.github.io'));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjects);

/***/ }),

/***/ "./src/images/avatar.jpg":
/*!*******************************!*\
  !*** ./src/images/avatar.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e45197204f15ef5de7ab.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./src/images.js");

// import '/assets/favicon/apple-touch-icon.png';
// import '/assets/favicon/favicon-32x32.png';
// import '/assets/favicon/favicon-16x16.png';
// import '/assets/favicon/favicon.ico';
// import '/assets/favicon/site.webmanifest';



(0,_images__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_projects__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Nav hamburger selections
const burger = document.querySelector("#hamburger");
const ul = document.querySelector("nav ul");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
  closeIcon.classList.toggle("show");
  menuIcon.classList.toggle("hide");
});

// Close hamburger menu when a link is clicked or click outside menu
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
    closeIcon.classList.remove("show");
    menuIcon.classList.remove("hide");
  })
);

function handleOutsideClick(e) {
  if (ul.classList.contains('show') && e.target.id != 'menu-icon') {
    ul.classList.remove("show");
    closeIcon.classList.remove("show");
    menuIcon.classList.remove("hide");
  }
}

document.addEventListener('click', handleOutsideClick)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLG9CQUFvQjtBQUNoSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxRQUFRLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZ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O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQztBQUNKOztBQUVsQyxtREFBVTtBQUNWLHFEQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vc3JjL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsOTAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmY7XG4gIC0tbm9ybWFsLWZvbnQ6IDQwMDtcbiAgLS1ib2xkLWZvbnQ6IDcwMDtcbiAgLS1ib2xkZXItZm9udDogOTAwO1xuXG4gIC0tcHJpbWFyeS1jb2xvcjogIzFiNDk0YjtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNjNGQ0YmU7XG4gIC0tYmctY29sb3I6ICMxYjQ5NGI7XG5cbiAgLS13aGl0ZS1saWdodDogcmdiKDI0NiwgMjQ5LCAyNDYpO1xuICAtLXByaW1hcnktc2hhZG93OiBibGFjaztcblxuICAtLWJvdHRvbS1tYXJnaW46IDAuNXJlbTtcbiAgLS1ib3R0b20tbWFyZ2luLTI6IDFyZW07XG4gIC0tcGFkZGluZy1zaWRlOiAyLjVyZW07XG4gIC0tbGluZS1oZWlnaHQ6IDEuN3JlbTtcblxuICAtLXRyYW5zaXRpb246IDAuM3M7XG5cbiAgLS1jb250ZW50LXdpZHRoOiAxMTYwcHg7XG59XG5cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4vKiBDU1MgUmVzZXRzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xufVxuXG4vKiBMYXlvdXQgY29udGFpbmVyICovXG5cbi5sYXlvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIHdpZHRoOiAxMDB2dzsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogTmF2YmFyICovXG5cbm5hdiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMXB4IDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctc2lkZSk7XG4gIGhlaWdodDogNjdweDtcbn1cblxubmF2IGEge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG59XG5cbm5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41cmVtO1xufVxuXG5uYXYgdWwgbGkge1xuICBmb250LXdlaWdodDogdmFyKC0tYm9sZC1mb250KTtcbn1cblxuLmhhbWJ1cmdlciB7XG4gIHotaW5kZXg6IDEwMDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uIC5jbG9zZS1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luKTtcbn1cblxuc2VjdGlvbiB7XG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA1cmVtO1xufVxuXG4vKiBIZXJvICovXG5cbi5oZXJvIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcbiAgcGFkZGluZzogM3JlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xufVxuXG4uaGVybyBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmhlcm8gcCB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmF2YXRhciB7XG4gIG1heC13aWR0aDogbWluKDEwMCUsIDMwMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IHZhcigtLXByaW1hcnktc2hhZG93KTtcbn1cblxuLmhlcm8gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZXJvIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLyogQWJvdXQgKi9cblxuLmFib3V0IHtcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xufVxuXG4uYWJvdXQgcCB7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xufVxuXG4vKiBQcm9qZWN0cyAqL1xuXG4ucHJvamVjdHMge1xuICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1waWMge1xuICB3aWR0aDogNjUlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdhcDogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5wcm9qZWN0cy10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xufVxuXG4ucHJvamVjdC1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYm90dG9tLW1hcmdpbik7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCB2YXIoLS1wcmltYXJ5LXNoYWRvdyk7XG4gIHBhZGRpbmc6IDEuOXJlbSAyLjVyZW07XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xufVxuXG4ubGlua3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG5cbiAgLm5hdmJhciB1bCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICB9XG5cbiAgLm5hdmJhciB1bCBsaSB7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cblxuICAuaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5uYXZiYXIgdWwuc2hvdyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgYnV0dG9uIC5jbG9zZS1pY29uLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgYnV0dG9uIC5tZW51LWljb24uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG59XG5cbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZXJvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5hdmF0YXIge1xuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcbiAgfVxufSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixtQkFBbUI7O0VBRW5CLGlDQUFpQztFQUNqQyx1QkFBdUI7O0VBRXZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjs7RUFFckIsa0JBQWtCOztFQUVsQix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQSxxQkFBcUI7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QXdDO0VBQzFDOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0FBRUY7O0FBRUE7Ozs7Ozs7O0dBUUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDkwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJmO1xcbiAgLS1ub3JtYWwtZm9udDogNDAwO1xcbiAgLS1ib2xkLWZvbnQ6IDcwMDtcXG4gIC0tYm9sZGVyLWZvbnQ6IDkwMDtcXG5cXG4gIC0tcHJpbWFyeS1jb2xvcjogIzFiNDk0YjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYzRkNGJlO1xcbiAgLS1iZy1jb2xvcjogIzFiNDk0YjtcXG5cXG4gIC0td2hpdGUtbGlnaHQ6IHJnYigyNDYsIDI0OSwgMjQ2KTtcXG4gIC0tcHJpbWFyeS1zaGFkb3c6IGJsYWNrO1xcblxcbiAgLS1ib3R0b20tbWFyZ2luOiAwLjVyZW07XFxuICAtLWJvdHRvbS1tYXJnaW4tMjogMXJlbTtcXG4gIC0tcGFkZGluZy1zaWRlOiAyLjVyZW07XFxuICAtLWxpbmUtaGVpZ2h0OiAxLjdyZW07XFxuXFxuICAtLXRyYW5zaXRpb246IDAuM3M7XFxuXFxuICAtLWNvbnRlbnQtd2lkdGg6IDExNjBweDtcXG59XFxuXFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogQ1NTIFJlc2V0cyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG59XFxuXFxuLyogTGF5b3V0IGNvbnRhaW5lciAqL1xcblxcbi5sYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiB3aWR0aDogMTAwdnc7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE5hdmJhciAqL1xcblxcbm5hdiB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMXB4IDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aCk7XFxuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctc2lkZSk7XFxuICBoZWlnaHQ6IDY3cHg7XFxufVxcblxcbm5hdiBhIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcblxcbm5hdiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2xkLWZvbnQpO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIHtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24gLmNsb3NlLWljb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYm90dG9tLW1hcmdpbik7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDVyZW07XFxufVxcblxcbi8qIEhlcm8gKi9cXG5cXG4uaGVybyB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxuICBwYWRkaW5nOiAzcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cXG4uaGVybyBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oZXJvIHAge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcblxcbi5hdmF0YXIge1xcbiAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgMzAwcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IHZhcigtLXByaW1hcnktc2hhZG93KTtcXG59XFxuXFxuLmhlcm8gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlcm8gYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLyogQWJvdXQgKi9cXG5cXG4uYWJvdXQge1xcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyAqL1xcblxcbi5wcm9qZWN0cyB7XFxuICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LXBpYyB7XFxuICB3aWR0aDogNjUlO1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICBib3gtc2hhZG93OiAwIDNweCA4cHggdmFyKC0tcHJpbWFyeS1zaGFkb3cpO1xcbiAgcGFkZGluZzogMS45cmVtIDIuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLmxpbmtzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgfVxcblxcbiAgLm5hdmJhciB1bCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTAlKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgdWwgbGkge1xcbiAgICBtYXJnaW46IDhweDtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5uYXZiYXIgdWwuc2hvdyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiAuY2xvc2UtaWNvbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICBidXR0b24gLm1lbnUtaWNvbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG59XFxuXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oZXJvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuXFxuICAuYXZhdGFyIHtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgfVxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGF2YXRhciBmcm9tICcuL2ltYWdlcy9hdmF0YXIuanBnJztcblxuZnVuY3Rpb24gbG9hZEltYWdlcygpIHtcblxuICBjb25zdCBhdmF0YXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYXZhdGFySW1nLmNsYXNzTGlzdC5hZGQoJ2F2YXRhcicpO1xuICBhdmF0YXJJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhdmF0YXIpO1xuICBhdmF0YXJJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnQXZhdGFyJyk7XG5cbiAgY29uc3QgYXZhdGFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlcm8nKTtcbiAgYXZhdGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGF2YXRhckltZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRJbWFnZXMiLCJmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgcmVwbykge1xuXG4gIGNvbnN0IHByb2pDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2pDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gIHByb2pDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2FyZCcpO1xuXG4gIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHByb2pUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGNvbnN0IHByb2pEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRldGFpbHMnKTtcbiAgcHJvakRldGFpbHMudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICBjb25zdCBwcm9qTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvakxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGRlbW9MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBkZW1vTGluay50ZXh0Q29udGVudCA9ICfwn5GJIExpdmUgRGVtbyc7XG4gIGRlbW9MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vJHtyZXBvfS9gKTtcbiAgZGVtb0xpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cbiAgY29uc3Qgc291cmNlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgc291cmNlTGluay50ZXh0Q29udGVudCA9ICfimpvvuI8gU291cmNlIENvZGUnO1xuICBzb3VyY2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovL2dpdGh1Yi5jb20vZGF0YS1zYW5kYm94LyR7cmVwb30vYCk7XG4gIHNvdXJjZUxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cbiAgcHJvakxpbmtzLmFwcGVuZENoaWxkKGRlbW9MaW5rKTtcbiAgcHJvakxpbmtzLmFwcGVuZENoaWxkKHNvdXJjZUxpbmspO1xuXG4gIHByb2pDYXJkLmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gIHByb2pDYXJkLmFwcGVuZENoaWxkKHByb2pEZXRhaWxzKTtcbiAgcHJvakNhcmQuYXBwZW5kQ2hpbGQocHJvakxpbmtzKTtcblxuICByZXR1cm4gcHJvakNhcmQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJyk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCgnRXRjaC1hLVNrZXRjaCcsICdNb2Rlcm4gRXRjaC1hLXNrZXRjaCBnYW1lIHVzaW5nIEpTLCBIVE1MLCBDU1MuJywgJ2V0Y2gtYS1za2V0Y2gnKSk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCgnRHluYW1pYyBTaW5nbGUgUGFnZScsICdSZXN0YXVyYW50IHdlYnNpdGUgZHluYW1pY2FsbHkgcmVuZGVyZWQgYnkgSlMuJywgJ3Jlc3RhdXJhbnQnKSk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCgnTGlicmFyeSBBcHAnLCAnU3RvcmUgeW91ciByZWFkaW5nIGxpc3QgaW4gb25lIHBsYWNlLicsICdsaWJyYXJ5JykpO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QoJ1RpYy1UYWMtVG9lJywgJ1RpYyBUYWMgVG9lIGdhbWUgYnVpbHQgd2l0aCBKUywgSFRNTCwgQ1NTLicsICd0aWMtdGFjLXRvZScpKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KCdBZG1pbiBEYXNoYm9hcmQnLCAnUmVzcG9uc2l2ZSBkYXNoYm9hcmQgYnVpbHQgd2l0aCBncmlkIGFuZCBmbGV4Ym94LicsICdhZG1pbi1kYXNoYm9hcmQnKSk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCgnTXkgV2Vic2l0ZScsICdTb3VyY2UgZmlsZXMgZm9yIHRoaXMgYXdlc29tZSB3ZWJzaXRlLicsICdkYXRhLXNhbmRib3guZ2l0aHViLmlvJykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUHJvamVjdHMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0ICcvYXNzZXRzL2Zhdmljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmcnO1xuLy8gaW1wb3J0ICcvYXNzZXRzL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmcnO1xuLy8gaW1wb3J0ICcvYXNzZXRzL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmcnO1xuLy8gaW1wb3J0ICcvYXNzZXRzL2Zhdmljb24vZmF2aWNvbi5pY28nO1xuLy8gaW1wb3J0ICcvYXNzZXRzL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdCc7XG5pbXBvcnQgbG9hZFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgbG9hZEltYWdlcyBmcm9tICcuL2ltYWdlcyc7XG5cbmxvYWRJbWFnZXMoKTtcbmxvYWRQcm9qZWN0cygpO1xuXG4vLyBOYXYgaGFtYnVyZ2VyIHNlbGVjdGlvbnNcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFtYnVyZ2VyXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IHVsXCIpO1xuY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtaWNvblwiKTtcbmNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtaWNvblwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB1bC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgY2xvc2VJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbn0pO1xuXG4vLyBDbG9zZSBoYW1idXJnZXIgbWVudSB3aGVuIGEgbGluayBpcyBjbGlja2VkIG9yIGNsaWNrIG91dHNpZGUgbWVudVxuY29uc3QgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIik7XG5cbm5hdkxpbmsuZm9yRWFjaCgobGluaykgPT5cbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgfSlcbik7XG5cbmZ1bmN0aW9uIGhhbmRsZU91dHNpZGVDbGljayhlKSB7XG4gIGlmICh1bC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSAmJiBlLnRhcmdldC5pZCAhPSAnbWVudS1pY29uJykge1xuICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU91dHNpZGVDbGljaykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=