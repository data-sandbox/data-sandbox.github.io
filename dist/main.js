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
  --padding-side-smaller: 1rem;
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
  /* color: var(--dark-green); */
  height: 100%;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
    padding: 0 var(--padding-side-smaller);
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

  .project-card {
    padding: 1.9rem var(--padding-side-smaller);
  }
}

@media screen and (max-width: 600px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 3rem var(--padding-side-smaller);
  }

  .avatar {
    max-width: min(100%, 250px);
    justify-self: left;
  }

  .about,
  .projects {
    padding: 1rem var(--padding-side-smaller);
  }

  .projects-container {
    grid-template-columns: 1fr;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,700&display=swap\");\n\n:root {\n  --font-family: \"Roboto\", sans-serf;\n  --normal-font: 400;\n  --bold-font: 700;\n  --bolder-font: 900;\n\n  --primary-color: #1b494b;\n  --secondary-color: #c4d4be;\n  --bg-color: #1b494b;\n\n  --white-light: rgb(246, 249, 246);\n  --primary-shadow: black;\n\n  --bottom-margin: 0.5rem;\n  --bottom-margin-2: 1rem;\n  --padding-side: 2.5rem;\n  --padding-side-smaller: 1rem;\n  --line-height: 1.7rem;\n\n  --transition: 0.3s;\n\n  --content-width: 1160px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n/* CSS Resets */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\na:hover {\n  color: var(--secondary-color);\n}\n\nbody {\n  font-family: var(--font-family);\n}\n\n/* Layout container */\n\n.layout {\n  background-color: var(--primary-color);\n  /* color: var(--dark-green); */\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Navbar */\n\nnav {\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: var(--primary-color);\n  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.4);\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  flex-grow: 1;\n  max-width: var(--content-width);\n  padding: 0 var(--padding-side);\n  height: 67px;\n}\n\nnav a {\n  color: var(--secondary-color);\n  transition: var(--transition);\n}\n\nnav a:hover {\n  color: white;\n  border-bottom: 2px solid white;\n}\n\nnav ul {\n  display: flex;\n  gap: 1.5rem;\n}\n\nnav ul li {\n  font-weight: var(--bold-font);\n}\n\n.hamburger {\n  z-index: 100;\n  color: var(--secondary-color);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: none;\n}\n\nbutton .close-icon {\n  display: none;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: var(--content-width);\n}\n\n.header {\n  color: var(--secondary-color);\n  margin-bottom: var(--bottom-margin);\n}\n\nsection {\n  scroll-margin-top: 5rem;\n}\n\n/* Hero */\n\n.hero {\n  color: var(--secondary-color);\n  display: grid;\n  width: 100%;\n  align-items: center;\n  gap: 4rem;\n  grid-template-columns: 3fr 2fr;\n  padding: 3rem var(--padding-side);\n  max-width: var(--content-width);\n}\n\n.hero h1 {\n  font-size: 3rem;\n}\n\n.hero p {\n  padding-top: 2rem;\n  font-size: 1.2rem;\n  line-height: 1.6;\n}\n\n.avatar {\n  max-width: min(100%, 300px);\n  border-radius: 12px;\n  transform: rotate(5deg);\n  justify-self: right;\n  box-shadow: 3px 3px 8px var(--primary-shadow);\n}\n\n.hero a {\n  text-decoration: underline;\n  color: white;\n}\n\n.hero a:hover {\n  color: var(--secondary-color);\n}\n\n/* About */\n\n.about {\n  padding: 1rem var(--padding-side);\n}\n\n.about p {\n  line-height: var(--line-height);\n  color: white;\n  max-width: min(100%, 800px);\n}\n\n/* Projects */\n\n.projects {\n  padding: 1rem var(--padding-side);\n  margin-top: 2rem;\n  width: 100%;\n}\n\n.project-pic {\n  width: 65%;\n  height: 60%;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-template-rows: auto;\n  gap: 2rem;\n  justify-content: center;\n  padding-bottom: 2rem;\n  color: var(--primary-color);\n}\n\n.projects-title {\n  margin-bottom: 1rem;\n}\n\n.project-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n\n.project-title {\n  margin-bottom: var(--bottom-margin);\n}\n\n.project-details {\n  margin-bottom: var(--bottom-margin);\n}\n\n.project-card {\n  background-color: var(--white-light);\n  border-radius: 11px;\n  box-shadow: 0 3px 8px var(--primary-shadow);\n  padding: 1.9rem 2.5rem;\n}\n\n.project-card:hover {\n  transform: scale(1.01);\n  transition: transform 0.3s ease-in;\n}\n\n.links-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n\nfooter {\n  background-color: rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  color: var(--secondary-color);\n  padding: 1rem;\n}\n\n@media screen and (max-width: 720px) {\n  .navbar {\n    padding: 0 var(--padding-side-smaller);\n  }\n\n  .navbar ul {\n    position: fixed;\n    z-index: 99;\n    background-color: var(--bg-color);\n    flex-direction: column;\n    padding-top: 30px;\n    top: 0;\n    right: 0;\n    width: 50%;\n    text-align: center;\n    transform: translateY(-110%);\n    transition: transform 0.3s ease-in;\n    padding-bottom: 1.5rem;\n    border: 1px solid var(--secondary-color);\n  }\n\n  .navbar ul li {\n    margin: 8px;\n  }\n\n  .hamburger {\n    display: block;\n  }\n\n  .navbar ul.show {\n    transform: translateY(0);\n  }\n\n  button .close-icon.show {\n    display: block;\n  }\n\n  button .menu-icon.hide {\n    display: none;\n  }\n\n  .project-card {\n    padding: 1.9rem var(--padding-side-smaller);\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .hero {\n    grid-template-columns: 1fr;\n    padding: 3rem var(--padding-side-smaller);\n  }\n\n  .avatar {\n    max-width: min(100%, 250px);\n    justify-self: left;\n  }\n\n  .about,\n  .projects {\n    padding: 1rem var(--padding-side-smaller);\n  }\n\n  .projects-container {\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
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
  const avatarImg = document.createElement("img");
  avatarImg.classList.add("avatar");
  avatarImg.setAttribute("src", _images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__);
  avatarImg.setAttribute("alt", "Avatar");

  const avatarContainer = document.getElementById("hero");
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
function createProject(title, description, repo, liveLink = null) {
  const projCard = document.createElement("div");
  projCard.classList.add("project-container");
  projCard.classList.add("project-card");

  const projTitle = document.createElement("h3");
  projTitle.classList.add("project-title");
  projTitle.textContent = title;

  const projDetails = document.createElement("p");
  projDetails.classList.add("project-details");
  projDetails.textContent = description;

  const projLinks = document.createElement("div");
  projLinks.classList.add("links-container");

  const demoLink = document.createElement("a");
  demoLink.textContent = "👉 Live Demo";
  if (liveLink && liveLink !== "none") {
    demoLink.setAttribute("href", liveLink);
  } else {
    demoLink.setAttribute("href", `https://data-sandbox.github.io/${repo}/`);
  }
  demoLink.setAttribute("target", "_blank");

  const sourceLink = document.createElement("a");
  sourceLink.textContent = "⚛️ Source Code";
  sourceLink.setAttribute("href", `https://github.com/data-sandbox/${repo}/`);
  sourceLink.setAttribute("target", "_blank");

  if (liveLink !== "none") {
    projLinks.appendChild(demoLink);
  }
  projLinks.appendChild(sourceLink);

  projCard.appendChild(projTitle);
  projCard.appendChild(projDetails);
  projCard.appendChild(projLinks);

  return projCard;
}

function loadProjects() {
  const projects = document.getElementById("projects-container");

  projects.appendChild(
    createProject(
      "Etch-a-Sketch",
      "Modern Etch-a-sketch game using JS, HTML, CSS.",
      "etch-a-sketch",
    ),
  );

  projects.appendChild(
    createProject(
      "Dynamic Single Page",
      "Restaurant website dynamically rendered by JS.",
      "restaurant",
    ),
  );

  projects.appendChild(
    createProject(
      "Library App",
      "Store your reading list in one place.",
      "library",
    ),
  );

  projects.appendChild(
    createProject(
      "Tic-Tac-Toe",
      "Tic Tac Toe game built with JS, HTML, CSS.",
      "tic-tac-toe",
    ),
  );

  projects.appendChild(
    createProject(
      "Admin Dashboard",
      "Responsive dashboard built with grid and flexbox.",
      "admin-dashboard",
    ),
  );

  projects.appendChild(
    createProject(
      "My Website",
      "Source files for this custom website.",
      "data-sandbox.github.io",
    ),
  );

  projects.appendChild(
    createProject(
      "Bluebikes",
      "Boston bike demand forecasting with Python and machine learning.",
      "ml-bluebikes-forecasting",
      "none",
    ),
  );

  projects.appendChild(
    createProject(
      "BREWYOU",
      "Find the perfect brewery for you with Python, machine learning, and NLP.",
      "nlp-brewer-finder",
      "https://brewyou.streamlit.app/",
    ),
  );
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




(0,_images__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_projects__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Nav hamburger selections
const burger = document.querySelector("#hamburger");
const ul = document.querySelector("nav ul");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

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
  }),
);

function handleOutsideClick(e) {
  if (ul.classList.contains("show") && e.target.id !== "menu-icon") {
    ul.classList.remove("show");
    closeIcon.classList.remove("show");
    menuIcon.classList.remove("hide");
  }
}

document.addEventListener("click", handleOutsideClick);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLG9CQUFvQjtBQUNoSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxV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O0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vc3JjL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsOTAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmY7XG4gIC0tbm9ybWFsLWZvbnQ6IDQwMDtcbiAgLS1ib2xkLWZvbnQ6IDcwMDtcbiAgLS1ib2xkZXItZm9udDogOTAwO1xuXG4gIC0tcHJpbWFyeS1jb2xvcjogIzFiNDk0YjtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNjNGQ0YmU7XG4gIC0tYmctY29sb3I6ICMxYjQ5NGI7XG5cbiAgLS13aGl0ZS1saWdodDogcmdiKDI0NiwgMjQ5LCAyNDYpO1xuICAtLXByaW1hcnktc2hhZG93OiBibGFjaztcblxuICAtLWJvdHRvbS1tYXJnaW46IDAuNXJlbTtcbiAgLS1ib3R0b20tbWFyZ2luLTI6IDFyZW07XG4gIC0tcGFkZGluZy1zaWRlOiAyLjVyZW07XG4gIC0tcGFkZGluZy1zaWRlLXNtYWxsZXI6IDFyZW07XG4gIC0tbGluZS1oZWlnaHQ6IDEuN3JlbTtcblxuICAtLXRyYW5zaXRpb246IDAuM3M7XG5cbiAgLS1jb250ZW50LXdpZHRoOiAxMTYwcHg7XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogQ1NTIFJlc2V0cyAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbn1cblxuLyogTGF5b3V0IGNvbnRhaW5lciAqL1xuXG4ubGF5b3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIC8qIGNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBOYXZiYXIgKi9cblxubmF2IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3gtc2hhZG93OiAxcHggM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aCk7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy1zaWRlKTtcbiAgaGVpZ2h0OiA2N3B4O1xufVxuXG5uYXYgYSB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxubmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbm5hdiB1bCBsaSB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2xkLWZvbnQpO1xufVxuXG4uaGFtYnVyZ2VyIHtcbiAgei1pbmRleDogMTAwO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24gLmNsb3NlLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luKTtcbn1cblxuc2VjdGlvbiB7XG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA1cmVtO1xufVxuXG4vKiBIZXJvICovXG5cbi5oZXJvIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcbiAgcGFkZGluZzogM3JlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xufVxuXG4uaGVybyBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmhlcm8gcCB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmF2YXRhciB7XG4gIG1heC13aWR0aDogbWluKDEwMCUsIDMwMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IHZhcigtLXByaW1hcnktc2hhZG93KTtcbn1cblxuLmhlcm8gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZXJvIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLyogQWJvdXQgKi9cblxuLmFib3V0IHtcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xufVxuXG4uYWJvdXQgcCB7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xufVxuXG4vKiBQcm9qZWN0cyAqL1xuXG4ucHJvamVjdHMge1xuICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1waWMge1xuICB3aWR0aDogNjUlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdhcDogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5wcm9qZWN0cy10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xufVxuXG4ucHJvamVjdC1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYm90dG9tLW1hcmdpbik7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCB2YXIoLS1wcmltYXJ5LXNoYWRvdyk7XG4gIHBhZGRpbmc6IDEuOXJlbSAyLjVyZW07XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xufVxuXG4ubGlua3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy1zaWRlLXNtYWxsZXIpO1xuICB9XG5cbiAgLm5hdmJhciB1bCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICB9XG5cbiAgLm5hdmJhciB1bCBsaSB7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cblxuICAuaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5uYXZiYXIgdWwuc2hvdyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgYnV0dG9uIC5jbG9zZS1pY29uLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgYnV0dG9uIC5tZW51LWljb24uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wcm9qZWN0LWNhcmQge1xuICAgIHBhZGRpbmc6IDEuOXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUtc21hbGxlcik7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlcm8ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmc6IDNyZW0gdmFyKC0tcGFkZGluZy1zaWRlLXNtYWxsZXIpO1xuICB9XG5cbiAgLmF2YXRhciB7XG4gICAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgMjUwcHgpO1xuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcbiAgfVxuXG4gIC5hYm91dCxcbiAgLnByb2plY3RzIHtcbiAgICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZS1zbWFsbGVyKTtcbiAgfVxuXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsbUJBQW1COztFQUVuQixpQ0FBaUM7RUFDakMsdUJBQXVCOztFQUV2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIscUJBQXFCOztFQUVyQixrQkFBa0I7O0VBRWxCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBLFVBQVU7O0FBRVY7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQSxhQUFhOztBQUViO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCx3QkFBd0I7RUFDeEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixRQUFRO0lBQ1IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qix3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDJDQUEyQztFQUM3QztBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSx5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsOTAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmY7XFxuICAtLW5vcm1hbC1mb250OiA0MDA7XFxuICAtLWJvbGQtZm9udDogNzAwO1xcbiAgLS1ib2xkZXItZm9udDogOTAwO1xcblxcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMWI0OTRiO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNjNGQ0YmU7XFxuICAtLWJnLWNvbG9yOiAjMWI0OTRiO1xcblxcbiAgLS13aGl0ZS1saWdodDogcmdiKDI0NiwgMjQ5LCAyNDYpO1xcbiAgLS1wcmltYXJ5LXNoYWRvdzogYmxhY2s7XFxuXFxuICAtLWJvdHRvbS1tYXJnaW46IDAuNXJlbTtcXG4gIC0tYm90dG9tLW1hcmdpbi0yOiAxcmVtO1xcbiAgLS1wYWRkaW5nLXNpZGU6IDIuNXJlbTtcXG4gIC0tcGFkZGluZy1zaWRlLXNtYWxsZXI6IDFyZW07XFxuICAtLWxpbmUtaGVpZ2h0OiAxLjdyZW07XFxuXFxuICAtLXRyYW5zaXRpb246IDAuM3M7XFxuXFxuICAtLWNvbnRlbnQtd2lkdGg6IDExNjBweDtcXG59XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogQ1NTIFJlc2V0cyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG59XFxuXFxuLyogTGF5b3V0IGNvbnRhaW5lciAqL1xcblxcbi5sYXlvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAvKiBjb2xvcjogdmFyKC0tZGFyay1ncmVlbik7ICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE5hdmJhciAqL1xcblxcbm5hdiB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMXB4IDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aCk7XFxuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctc2lkZSk7XFxuICBoZWlnaHQ6IDY3cHg7XFxufVxcblxcbm5hdiBhIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcblxcbm5hdiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2xkLWZvbnQpO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIHtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24gLmNsb3NlLWljb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYm90dG9tLW1hcmdpbik7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDVyZW07XFxufVxcblxcbi8qIEhlcm8gKi9cXG5cXG4uaGVybyB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxuICBwYWRkaW5nOiAzcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cXG4uaGVybyBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oZXJvIHAge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcblxcbi5hdmF0YXIge1xcbiAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgMzAwcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IHZhcigtLXByaW1hcnktc2hhZG93KTtcXG59XFxuXFxuLmhlcm8gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlcm8gYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLyogQWJvdXQgKi9cXG5cXG4uYWJvdXQge1xcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyAqL1xcblxcbi5wcm9qZWN0cyB7XFxuICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LXBpYyB7XFxuICB3aWR0aDogNjUlO1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzIwcHgsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICBib3gtc2hhZG93OiAwIDNweCA4cHggdmFyKC0tcHJpbWFyeS1zaGFkb3cpO1xcbiAgcGFkZGluZzogMS45cmVtIDIuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLmxpbmtzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy1zaWRlLXNtYWxsZXIpO1xcbiAgfVxcblxcbiAgLm5hdmJhciB1bCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTAlKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgdWwgbGkge1xcbiAgICBtYXJnaW46IDhweDtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5uYXZiYXIgdWwuc2hvdyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiAuY2xvc2UtaWNvbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICBidXR0b24gLm1lbnUtaWNvbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQge1xcbiAgICBwYWRkaW5nOiAxLjlyZW0gdmFyKC0tcGFkZGluZy1zaWRlLXNtYWxsZXIpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmhlcm8ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogM3JlbSB2YXIoLS1wYWRkaW5nLXNpZGUtc21hbGxlcik7XFxuICB9XFxuXFxuICAuYXZhdGFyIHtcXG4gICAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgMjUwcHgpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICB9XFxuXFxuICAuYWJvdXQsXFxuICAucHJvamVjdHMge1xcbiAgICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZS1zbWFsbGVyKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhdmF0YXIgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci5qcGdcIjtcblxuZnVuY3Rpb24gbG9hZEltYWdlcygpIHtcbiAgY29uc3QgYXZhdGFySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYXZhdGFySW1nLmNsYXNzTGlzdC5hZGQoXCJhdmF0YXJcIik7XG4gIGF2YXRhckltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYXZhdGFyKTtcbiAgYXZhdGFySW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkF2YXRhclwiKTtcblxuICBjb25zdCBhdmF0YXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlcm9cIik7XG4gIGF2YXRhckNvbnRhaW5lci5hcHBlbmRDaGlsZChhdmF0YXJJbWcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSW1hZ2VzO1xuIiwiZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIHJlcG8sIGxpdmVMaW5rID0gbnVsbCkge1xuICBjb25zdCBwcm9qQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2pDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgcHJvakNhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKTtcblxuICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHByb2pUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgY29uc3QgcHJvakRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvakRldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGV0YWlsc1wiKTtcbiAgcHJvakRldGFpbHMudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICBjb25zdCBwcm9qTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qTGlua3MuY2xhc3NMaXN0LmFkZChcImxpbmtzLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBkZW1vTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBkZW1vTGluay50ZXh0Q29udGVudCA9IFwi8J+RiSBMaXZlIERlbW9cIjtcbiAgaWYgKGxpdmVMaW5rICYmIGxpdmVMaW5rICE9PSBcIm5vbmVcIikge1xuICAgIGRlbW9MaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbGl2ZUxpbmspO1xuICB9IGVsc2Uge1xuICAgIGRlbW9MaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYGh0dHBzOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8ke3JlcG99L2ApO1xuICB9XG4gIGRlbW9MaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcblxuICBjb25zdCBzb3VyY2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHNvdXJjZUxpbmsudGV4dENvbnRlbnQgPSBcIuKam++4jyBTb3VyY2UgQ29kZVwiO1xuICBzb3VyY2VMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRhLXNhbmRib3gvJHtyZXBvfS9gKTtcbiAgc291cmNlTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cbiAgaWYgKGxpdmVMaW5rICE9PSBcIm5vbmVcIikge1xuICAgIHByb2pMaW5rcy5hcHBlbmRDaGlsZChkZW1vTGluayk7XG4gIH1cbiAgcHJvakxpbmtzLmFwcGVuZENoaWxkKHNvdXJjZUxpbmspO1xuXG4gIHByb2pDYXJkLmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gIHByb2pDYXJkLmFwcGVuZENoaWxkKHByb2pEZXRhaWxzKTtcbiAgcHJvakNhcmQuYXBwZW5kQ2hpbGQocHJvakxpbmtzKTtcblxuICByZXR1cm4gcHJvakNhcmQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgXCJFdGNoLWEtU2tldGNoXCIsXG4gICAgICBcIk1vZGVybiBFdGNoLWEtc2tldGNoIGdhbWUgdXNpbmcgSlMsIEhUTUwsIENTUy5cIixcbiAgICAgIFwiZXRjaC1hLXNrZXRjaFwiLFxuICAgICksXG4gICk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgIFwiRHluYW1pYyBTaW5nbGUgUGFnZVwiLFxuICAgICAgXCJSZXN0YXVyYW50IHdlYnNpdGUgZHluYW1pY2FsbHkgcmVuZGVyZWQgYnkgSlMuXCIsXG4gICAgICBcInJlc3RhdXJhbnRcIixcbiAgICApLFxuICApO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICBcIkxpYnJhcnkgQXBwXCIsXG4gICAgICBcIlN0b3JlIHlvdXIgcmVhZGluZyBsaXN0IGluIG9uZSBwbGFjZS5cIixcbiAgICAgIFwibGlicmFyeVwiLFxuICAgICksXG4gICk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgIFwiVGljLVRhYy1Ub2VcIixcbiAgICAgIFwiVGljIFRhYyBUb2UgZ2FtZSBidWlsdCB3aXRoIEpTLCBIVE1MLCBDU1MuXCIsXG4gICAgICBcInRpYy10YWMtdG9lXCIsXG4gICAgKSxcbiAgKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgXCJBZG1pbiBEYXNoYm9hcmRcIixcbiAgICAgIFwiUmVzcG9uc2l2ZSBkYXNoYm9hcmQgYnVpbHQgd2l0aCBncmlkIGFuZCBmbGV4Ym94LlwiLFxuICAgICAgXCJhZG1pbi1kYXNoYm9hcmRcIixcbiAgICApLFxuICApO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICBcIk15IFdlYnNpdGVcIixcbiAgICAgIFwiU291cmNlIGZpbGVzIGZvciB0aGlzIGN1c3RvbSB3ZWJzaXRlLlwiLFxuICAgICAgXCJkYXRhLXNhbmRib3guZ2l0aHViLmlvXCIsXG4gICAgKSxcbiAgKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgXCJCbHVlYmlrZXNcIixcbiAgICAgIFwiQm9zdG9uIGJpa2UgZGVtYW5kIGZvcmVjYXN0aW5nIHdpdGggUHl0aG9uIGFuZCBtYWNoaW5lIGxlYXJuaW5nLlwiLFxuICAgICAgXCJtbC1ibHVlYmlrZXMtZm9yZWNhc3RpbmdcIixcbiAgICAgIFwibm9uZVwiLFxuICAgICksXG4gICk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgIFwiQlJFV1lPVVwiLFxuICAgICAgXCJGaW5kIHRoZSBwZXJmZWN0IGJyZXdlcnkgZm9yIHlvdSB3aXRoIFB5dGhvbiwgbWFjaGluZSBsZWFybmluZywgYW5kIE5MUC5cIixcbiAgICAgIFwibmxwLWJyZXdlci1maW5kZXJcIixcbiAgICAgIFwiaHR0cHM6Ly9icmV3eW91LnN0cmVhbWxpdC5hcHAvXCIsXG4gICAgKSxcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFByb2plY3RzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGxvYWRQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IGxvYWRJbWFnZXMgZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmxvYWRJbWFnZXMoKTtcbmxvYWRQcm9qZWN0cygpO1xuXG4vLyBOYXYgaGFtYnVyZ2VyIHNlbGVjdGlvbnNcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFtYnVyZ2VyXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IHVsXCIpO1xuY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtaWNvblwiKTtcbmNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtaWNvblwiKTtcblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHVsLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICBjbG9zZUljb24uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xufSk7XG5cbi8vIENsb3NlIGhhbWJ1cmdlciBtZW51IHdoZW4gYSBsaW5rIGlzIGNsaWNrZWQgb3IgY2xpY2sgb3V0c2lkZSBtZW51XG5jb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcblxubmF2TGluay5mb3JFYWNoKChsaW5rKSA9PlxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgY2xvc2VJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICB9KSxcbik7XG5cbmZ1bmN0aW9uIGhhbmRsZU91dHNpZGVDbGljayhlKSB7XG4gIGlmICh1bC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpICYmIGUudGFyZ2V0LmlkICE9PSBcIm1lbnUtaWNvblwiKSB7XG4gICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgY2xvc2VJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9