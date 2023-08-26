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
  transform: scale(1.02);
  transition: transform 0.3s ease-in;
}

.links-container {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

/* Skills */

.skills {
  padding: 1rem var(--padding-side);
  margin-top: 2rem;
  width: 100%;
  color: var(--secondary-color);
}

.skills-section {
  color: var(--white-light);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skills-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.skill-card {
  color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 70px;
  font-size: 0.9rem;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

img.icon {
  width: 70px;
  height: auto;
}

.skill-card:hover {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
  }
  100% {
    transform: translateY(0);
  }
}

/* Contact form */

.contact {
  padding: 1rem var(--padding-side);
  width: 100%;
  max-width: min(100%, 600px);
  align-self: flex-start;
  margin-top: 2rem;
}

.contact-form-container .input-field {
  width: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px var(--primary-color);
  background-color: var(--white-light);
  font-size: 1rem;
  outline: none;
  margin-bottom: 15px;
}

.submit-btn {
  padding: 15px 40px;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: var(--bold-font);
  transition: var(--transition);
}

.submit-btn:hover {
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border: 2px solid var(--secondary-color);
  cursor: pointer;
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
  .projects,
  .contact,
  .skills {
    padding: 1rem var(--padding-side-smaller);
  }

  .projects-container {
    grid-template-columns: 1fr;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,700&display=swap\");\n\n:root {\n  --font-family: \"Roboto\", sans-serf;\n  --normal-font: 400;\n  --bold-font: 700;\n  --bolder-font: 900;\n\n  --primary-color: #1b494b;\n  --secondary-color: #c4d4be;\n  --bg-color: #1b494b;\n\n  --white-light: rgb(246, 249, 246);\n  --primary-shadow: black;\n\n  --bottom-margin: 0.5rem;\n  --bottom-margin-2: 1rem;\n  --padding-side: 2.5rem;\n  --padding-side-smaller: 1rem;\n  --line-height: 1.7rem;\n\n  --transition: 0.3s;\n\n  --content-width: 1160px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n/* CSS Resets */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\na:hover {\n  color: var(--secondary-color);\n}\n\nbody {\n  font-family: var(--font-family);\n}\n\n/* Layout container */\n\n.layout {\n  background-color: var(--primary-color);\n  /* color: var(--dark-green); */\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Navbar */\n\nnav {\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: var(--primary-color);\n  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.4);\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  flex-grow: 1;\n  max-width: var(--content-width);\n  padding: 0 var(--padding-side);\n  height: 67px;\n}\n\nnav a {\n  color: var(--secondary-color);\n  transition: var(--transition);\n}\n\nnav a:hover {\n  color: white;\n  border-bottom: 2px solid white;\n}\n\nnav ul {\n  display: flex;\n  gap: 1.5rem;\n}\n\nnav ul li {\n  font-weight: var(--bold-font);\n}\n\n.hamburger {\n  z-index: 100;\n  color: var(--secondary-color);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: none;\n}\n\nbutton .close-icon {\n  display: none;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: var(--content-width);\n}\n\n.header {\n  color: var(--secondary-color);\n  margin-bottom: var(--bottom-margin);\n}\n\nsection {\n  scroll-margin-top: 5rem;\n}\n\n/* Hero */\n\n.hero {\n  color: var(--secondary-color);\n  display: grid;\n  width: 100%;\n  align-items: center;\n  gap: 4rem;\n  grid-template-columns: 3fr 2fr;\n  padding: 3rem var(--padding-side);\n  max-width: var(--content-width);\n}\n\n.hero h1 {\n  font-size: 3rem;\n}\n\n.hero p {\n  padding-top: 2rem;\n  font-size: 1.2rem;\n  line-height: 1.6;\n}\n\n.avatar {\n  max-width: min(100%, 300px);\n  border-radius: 12px;\n  transform: rotate(5deg);\n  justify-self: right;\n  box-shadow: 3px 3px 8px var(--primary-shadow);\n}\n\n.hero a {\n  text-decoration: underline;\n  color: white;\n}\n\n.hero a:hover {\n  color: var(--secondary-color);\n}\n\n/* About */\n\n.about {\n  padding: 1rem var(--padding-side);\n}\n\n.about p {\n  line-height: var(--line-height);\n  color: white;\n  max-width: min(100%, 800px);\n}\n\n/* Projects */\n\n.projects {\n  padding: 1rem var(--padding-side);\n  margin-top: 2rem;\n  width: 100%;\n}\n\n.project-pic {\n  width: 65%;\n  height: 60%;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-template-rows: auto;\n  gap: 2rem;\n  justify-content: center;\n  padding-bottom: 2rem;\n  color: var(--primary-color);\n}\n\n.projects-title {\n  margin-bottom: 1rem;\n}\n\n.project-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n\n.project-title {\n  margin-bottom: var(--bottom-margin);\n}\n\n.project-details {\n  margin-bottom: var(--bottom-margin);\n}\n\n.project-card {\n  background-color: var(--white-light);\n  border-radius: 11px;\n  box-shadow: 0 3px 8px var(--primary-shadow);\n  padding: 1.9rem 2.5rem;\n}\n\n.project-card:hover {\n  transform: scale(1.02);\n  transition: transform 0.3s ease-in;\n}\n\n.links-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n\n/* Skills */\n\n.skills {\n  padding: 1rem var(--padding-side);\n  margin-top: 2rem;\n  width: 100%;\n  color: var(--secondary-color);\n}\n\n.skills-section {\n  color: var(--white-light);\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.skills-cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2.5rem;\n}\n\n.skill-card {\n  color: var(--secondary-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  width: 70px;\n  font-size: 0.9rem;\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n}\n\nimg.icon {\n  width: 70px;\n  height: auto;\n}\n\n.skill-card:hover {\n  animation-name: bounce;\n  animation-timing-function: ease;\n}\n@keyframes bounce {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-1rem);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n/* Contact form */\n\n.contact {\n  padding: 1rem var(--padding-side);\n  width: 100%;\n  max-width: min(100%, 600px);\n  align-self: flex-start;\n  margin-top: 2rem;\n}\n\n.contact-form-container .input-field {\n  width: 100%;\n  padding: 15px 20px;\n  border-radius: 5px;\n  border: 1px var(--primary-color);\n  background-color: var(--white-light);\n  font-size: 1rem;\n  outline: none;\n  margin-bottom: 15px;\n}\n\n.submit-btn {\n  padding: 15px 40px;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  border: 2px solid var(--primary-color);\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: var(--bold-font);\n  transition: var(--transition);\n}\n\n.submit-btn:hover {\n  color: var(--secondary-color);\n  background-color: var(--primary-color);\n  border: 2px solid var(--secondary-color);\n  cursor: pointer;\n}\n\nfooter {\n  background-color: rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  color: var(--secondary-color);\n  padding: 1rem;\n}\n\n@media screen and (max-width: 720px) {\n  .navbar {\n    padding: 0 var(--padding-side-smaller);\n  }\n\n  .navbar ul {\n    position: fixed;\n    z-index: 99;\n    background-color: var(--bg-color);\n    flex-direction: column;\n    padding-top: 30px;\n    top: 0;\n    right: 0;\n    width: 50%;\n    text-align: center;\n    transform: translateY(-110%);\n    transition: transform 0.3s ease-in;\n    padding-bottom: 1.5rem;\n    border: 1px solid var(--secondary-color);\n  }\n\n  .navbar ul li {\n    margin: 8px;\n  }\n\n  .hamburger {\n    display: block;\n  }\n\n  .navbar ul.show {\n    transform: translateY(0);\n  }\n\n  button .close-icon.show {\n    display: block;\n  }\n\n  button .menu-icon.hide {\n    display: none;\n  }\n\n  .project-card {\n    padding: 1.9rem var(--padding-side-smaller);\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .hero {\n    grid-template-columns: 1fr;\n    padding: 3rem var(--padding-side-smaller);\n  }\n\n  .avatar {\n    max-width: min(100%, 250px);\n    justify-self: left;\n  }\n\n  .about,\n  .projects,\n  .contact,\n  .skills {\n    padding: 1rem var(--padding-side-smaller);\n  }\n\n  .projects-container {\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/skills.js":
/*!***********************!*\
  !*** ./src/skills.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createSkill(iconPath, name) {
  const skillCard = document.createElement("div");
  skillCard.classList.add("skill-card");

  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.setAttribute("src", iconPath);
  icon.setAttribute("alt", "");
  icon.setAttribute("loading", "lazy");

  const skill = document.createElement("p");
  skill.classList.add("skill-title");
  skill.textContent = name;

  skillCard.appendChild(icon);
  skillCard.appendChild(skill);

  return skillCard;
}

function createSection(name, skillsArray) {
  const Section = document.createElement("div");
  Section.classList.add("skills-section");

  const Title = document.createElement("h3");
  Title.textContent = name;

  const skills = document.createElement("div");
  skills.classList.add("skills-cards");
  skillsArray.forEach((skill) => {
    skills.appendChild(createSkill(skill[0], skill[1]));
  });

  Section.appendChild(Title);
  Section.append(skills);

  return Section;
}

const dataSkills = [
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "python",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "pandas",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    "jupyter",
  ],
  [
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    "scikit-learn",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "tensorflow",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "sql",
  ],
];

const frontEndSkills = [
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "javascript",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "css",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "html",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "react",
  ],
];

const miscSkills = [
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "git",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    "bash",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    "npm",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    "webpack",
  ],
  [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "docker",
  ],
];

function loadSkills() {
  const skills = document.getElementById("skills-container");

  skills.append(createSection("Data Science", dataSkills));
  skills.append(createSection("Front-End", frontEndSkills));
  skills.append(createSection("Miscellaneous", miscSkills));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSkills);


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
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills */ "./src/skills.js");





(0,_images__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_projects__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_skills__WEBPACK_IMPORTED_MODULE_3__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLG9CQUFvQjtBQUNoSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYnlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0NBQU07QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWjFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvRUFBb0UsS0FBSztBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUUsS0FBSztBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEg1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEgxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUNKO0FBQ0E7O0FBRWxDLG1EQUFVO0FBQ1YscURBQVk7QUFDWixtREFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9zcmMvaW1hZ2VzLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL3NyYy9za2lsbHMuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw5MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyZjtcbiAgLS1ub3JtYWwtZm9udDogNDAwO1xuICAtLWJvbGQtZm9udDogNzAwO1xuICAtLWJvbGRlci1mb250OiA5MDA7XG5cbiAgLS1wcmltYXJ5LWNvbG9yOiAjMWI0OTRiO1xuICAtLXNlY29uZGFyeS1jb2xvcjogI2M0ZDRiZTtcbiAgLS1iZy1jb2xvcjogIzFiNDk0YjtcblxuICAtLXdoaXRlLWxpZ2h0OiByZ2IoMjQ2LCAyNDksIDI0Nik7XG4gIC0tcHJpbWFyeS1zaGFkb3c6IGJsYWNrO1xuXG4gIC0tYm90dG9tLW1hcmdpbjogMC41cmVtO1xuICAtLWJvdHRvbS1tYXJnaW4tMjogMXJlbTtcbiAgLS1wYWRkaW5nLXNpZGU6IDIuNXJlbTtcbiAgLS1wYWRkaW5nLXNpZGUtc21hbGxlcjogMXJlbTtcbiAgLS1saW5lLWhlaWdodDogMS43cmVtO1xuXG4gIC0tdHJhbnNpdGlvbjogMC4zcztcblxuICAtLWNvbnRlbnQtd2lkdGg6IDExNjBweDtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4vKiBDU1MgUmVzZXRzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xufVxuXG4vKiBMYXlvdXQgY29udGFpbmVyICovXG5cbi5sYXlvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgLyogY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pOyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIE5hdmJhciAqL1xuXG5uYXYge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLXNpZGUpO1xuICBoZWlnaHQ6IDY3cHg7XG59XG5cbm5hdiBhIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5uYXYgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNXJlbTtcbn1cblxubmF2IHVsIGxpIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWJvbGQtZm9udCk7XG59XG5cbi5oYW1idXJnZXIge1xuICB6LWluZGV4OiAxMDA7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbiAuY2xvc2UtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xufVxuXG4uaGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xufVxuXG5zZWN0aW9uIHtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDVyZW07XG59XG5cbi8qIEhlcm8gKi9cblxuLmhlcm8ge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xuICBwYWRkaW5nOiAzcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aCk7XG59XG5cbi5oZXJvIGgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uaGVybyBwIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uYXZhdGFyIHtcbiAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgMzAwcHgpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggdmFyKC0tcHJpbWFyeS1zaGFkb3cpO1xufVxuXG4uaGVybyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlcm8gYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4vKiBBYm91dCAqL1xuXG4uYWJvdXQge1xuICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XG59XG5cbi5hYm91dCBwIHtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IG1pbigxMDAlLCA4MDBweCk7XG59XG5cbi8qIFByb2plY3RzICovXG5cbi5wcm9qZWN0cyB7XG4gIHBhZGRpbmc6IDFyZW0gdmFyKC0tcGFkZGluZy1zaWRlKTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LXBpYyB7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ2FwOiAycmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnByb2plY3RzLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYm90dG9tLW1hcmdpbik7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luKTtcbn1cblxuLnByb2plY3QtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IHZhcigtLXByaW1hcnktc2hhZG93KTtcbiAgcGFkZGluZzogMS45cmVtIDIuNXJlbTtcbn1cblxuLnByb2plY3QtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG59XG5cbi5saW5rcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi8qIFNraWxscyAqL1xuXG4uc2tpbGxzIHtcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5za2lsbHMtc2VjdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1saWdodCk7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuXG4uc2tpbGxzLWNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDIuNXJlbTtcbn1cblxuLnNraWxsLWNhcmQge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuaW1nLmljb24ge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2tpbGwtY2FyZDpob3ZlciB7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vKiBDb250YWN0IGZvcm0gKi9cblxuLmNvbnRhY3Qge1xuICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IG1pbigxMDAlLCA2MDBweCk7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5jb250YWN0LWZvcm0tY29udGFpbmVyIC5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2xkLWZvbnQpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnN1Ym1pdC1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAubmF2YmFyIHtcbiAgICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctc2lkZS1zbWFsbGVyKTtcbiAgfVxuXG4gIC5uYXZiYXIgdWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgfVxuXG4gIC5uYXZiYXIgdWwgbGkge1xuICAgIG1hcmdpbjogOHB4O1xuICB9XG5cbiAgLmhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubmF2YmFyIHVsLnNob3cge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuXG4gIGJ1dHRvbiAuY2xvc2UtaWNvbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGJ1dHRvbiAubWVudS1pY29uLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHJvamVjdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAxLjlyZW0gdmFyKC0tcGFkZGluZy1zaWRlLXNtYWxsZXIpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZXJvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nOiAzcmVtIHZhcigtLXBhZGRpbmctc2lkZS1zbWFsbGVyKTtcbiAgfVxuXG4gIC5hdmF0YXIge1xuICAgIG1heC13aWR0aDogbWluKDEwMCUsIDI1MHB4KTtcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gIH1cblxuICAuYWJvdXQsXG4gIC5wcm9qZWN0cyxcbiAgLmNvbnRhY3QsXG4gIC5za2lsbHMge1xuICAgIHBhZGRpbmc6IDFyZW0gdmFyKC0tcGFkZGluZy1zaWRlLXNtYWxsZXIpO1xuICB9XG5cbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixtQkFBbUI7O0VBRW5CLGlDQUFpQztFQUNqQyx1QkFBdUI7O0VBRXZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qixx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QUFzQztFQUN4Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFFBQVE7SUFDUixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsMkNBQTJDO0VBQzdDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQix5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0VBQ3BCOztFQUVBOzs7O0lBSUUseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDkwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJmO1xcbiAgLS1ub3JtYWwtZm9udDogNDAwO1xcbiAgLS1ib2xkLWZvbnQ6IDcwMDtcXG4gIC0tYm9sZGVyLWZvbnQ6IDkwMDtcXG5cXG4gIC0tcHJpbWFyeS1jb2xvcjogIzFiNDk0YjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYzRkNGJlO1xcbiAgLS1iZy1jb2xvcjogIzFiNDk0YjtcXG5cXG4gIC0td2hpdGUtbGlnaHQ6IHJnYigyNDYsIDI0OSwgMjQ2KTtcXG4gIC0tcHJpbWFyeS1zaGFkb3c6IGJsYWNrO1xcblxcbiAgLS1ib3R0b20tbWFyZ2luOiAwLjVyZW07XFxuICAtLWJvdHRvbS1tYXJnaW4tMjogMXJlbTtcXG4gIC0tcGFkZGluZy1zaWRlOiAyLjVyZW07XFxuICAtLXBhZGRpbmctc2lkZS1zbWFsbGVyOiAxcmVtO1xcbiAgLS1saW5lLWhlaWdodDogMS43cmVtO1xcblxcbiAgLS10cmFuc2l0aW9uOiAwLjNzO1xcblxcbiAgLS1jb250ZW50LXdpZHRoOiAxMTYwcHg7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIENTUyBSZXNldHMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxufVxcblxcbi8qIExheW91dCBjb250YWluZXIgKi9cXG5cXG4ubGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgLyogY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pOyAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgKi9cXG5cXG5uYXYge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbiAgaGVpZ2h0OiA2N3B4O1xcbn1cXG5cXG5uYXYgYSB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn1cXG5cXG5uYXYgYTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBmb250LXdlaWdodDogdmFyKC0tYm9sZC1mb250KTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuICB6LWluZGV4OiAxMDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIC5jbG9zZS1pY29uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA1cmVtO1xcbn1cXG5cXG4vKiBIZXJvICovXFxuXFxuLmhlcm8ge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xcbiAgcGFkZGluZzogM3JlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcXG59XFxuXFxuLmhlcm8gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uaGVybyBwIHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG5cXG4uYXZhdGFyIHtcXG4gIG1heC13aWR0aDogbWluKDEwMCUsIDMwMHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCB2YXIoLS1wcmltYXJ5LXNoYWRvdyk7XFxufVxcblxcbi5oZXJvIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZXJvIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi8qIEFib3V0ICovXFxuXFxuLmFib3V0IHtcXG4gIHBhZGRpbmc6IDFyZW0gdmFyKC0tcGFkZGluZy1zaWRlKTtcXG59XFxuXFxuLmFib3V0IHAge1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1heC13aWR0aDogbWluKDEwMCUsIDgwMHB4KTtcXG59XFxuXFxuLyogUHJvamVjdHMgKi9cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1waWMge1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNjAlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdhcDogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luKTtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luKTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IHZhcigtLXByaW1hcnktc2hhZG93KTtcXG4gIHBhZGRpbmc6IDEuOXJlbSAyLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5saW5rcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi8qIFNraWxscyAqL1xcblxcbi5za2lsbHMge1xcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5za2lsbHMtc2VjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtbGlnaHQpO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uc2tpbGxzLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnNraWxsLWNhcmQge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogNzBweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcblxcbmltZy5pY29uIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2tpbGwtY2FyZDpob3ZlciB7XFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG59XFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuXFxuLyogQ29udGFjdCBmb3JtICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IG1pbigxMDAlLCA2MDBweCk7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybS1jb250YWluZXIgLmlucHV0LWZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1saWdodCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgcGFkZGluZzogMTVweCA0MHB4O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWJvbGQtZm9udCk7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG59XFxuXFxuLnN1Ym1pdC1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctc2lkZS1zbWFsbGVyKTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIgdWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTEwJSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAubmF2YmFyIHVsIGxpIHtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICB9XFxuXFxuICAuaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubmF2YmFyIHVsLnNob3cge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICBidXR0b24gLmNsb3NlLWljb24uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgYnV0dG9uIC5tZW51LWljb24uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkIHtcXG4gICAgcGFkZGluZzogMS45cmVtIHZhcigtLXBhZGRpbmctc2lkZS1zbWFsbGVyKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oZXJvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmc6IDNyZW0gdmFyKC0tcGFkZGluZy1zaWRlLXNtYWxsZXIpO1xcbiAgfVxcblxcbiAgLmF2YXRhciB7XFxuICAgIG1heC13aWR0aDogbWluKDEwMCUsIDI1MHB4KTtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgfVxcblxcbiAgLmFib3V0LFxcbiAgLnByb2plY3RzLFxcbiAgLmNvbnRhY3QsXFxuICAuc2tpbGxzIHtcXG4gICAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUtc21hbGxlcik7XFxuICB9XFxuXFxuICAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYXZhdGFyIGZyb20gXCIuL2ltYWdlcy9hdmF0YXIuanBnXCI7XG5cbmZ1bmN0aW9uIGxvYWRJbWFnZXMoKSB7XG4gIGNvbnN0IGF2YXRhckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGF2YXRhckltZy5jbGFzc0xpc3QuYWRkKFwiYXZhdGFyXCIpO1xuICBhdmF0YXJJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGF2YXRhcik7XG4gIGF2YXRhckltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJBdmF0YXJcIik7XG5cbiAgY29uc3QgYXZhdGFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZXJvXCIpO1xuICBhdmF0YXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYXZhdGFySW1nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEltYWdlcztcbiIsImZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCByZXBvLCBsaXZlTGluayA9IG51bGwpIHtcbiAgY29uc3QgcHJvakNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qQ2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gIHByb2pDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XG5cbiAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBwcm9qVGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGNvbnN0IHByb2pEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2pEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRldGFpbHNcIik7XG4gIHByb2pEZXRhaWxzLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgcHJvakxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvakxpbmtzLmNsYXNzTGlzdC5hZGQoXCJsaW5rcy1jb250YWluZXJcIik7XG5cbiAgY29uc3QgZGVtb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZGVtb0xpbmsudGV4dENvbnRlbnQgPSBcIvCfkYkgTGl2ZSBEZW1vXCI7XG4gIGlmIChsaXZlTGluayAmJiBsaXZlTGluayAhPT0gXCJub25lXCIpIHtcbiAgICBkZW1vTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGxpdmVMaW5rKTtcbiAgfSBlbHNlIHtcbiAgICBkZW1vTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGBodHRwczovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vJHtyZXBvfS9gKTtcbiAgfVxuICBkZW1vTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cbiAgY29uc3Qgc291cmNlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBzb3VyY2VMaW5rLnRleHRDb250ZW50ID0gXCLimpvvuI8gU291cmNlIENvZGVcIjtcbiAgc291cmNlTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGBodHRwczovL2dpdGh1Yi5jb20vZGF0YS1zYW5kYm94LyR7cmVwb30vYCk7XG4gIHNvdXJjZUxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXG4gIGlmIChsaXZlTGluayAhPT0gXCJub25lXCIpIHtcbiAgICBwcm9qTGlua3MuYXBwZW5kQ2hpbGQoZGVtb0xpbmspO1xuICB9XG4gIHByb2pMaW5rcy5hcHBlbmRDaGlsZChzb3VyY2VMaW5rKTtcblxuICBwcm9qQ2FyZC5hcHBlbmRDaGlsZChwcm9qVGl0bGUpO1xuICBwcm9qQ2FyZC5hcHBlbmRDaGlsZChwcm9qRGV0YWlscyk7XG4gIHByb2pDYXJkLmFwcGVuZENoaWxkKHByb2pMaW5rcyk7XG5cbiAgcmV0dXJuIHByb2pDYXJkO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgIFwiRXRjaC1hLVNrZXRjaFwiLFxuICAgICAgXCJNb2Rlcm4gRXRjaC1hLXNrZXRjaCBnYW1lIHVzaW5nIEpTLCBIVE1MLCBDU1MuXCIsXG4gICAgICBcImV0Y2gtYS1za2V0Y2hcIixcbiAgICApLFxuICApO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICBcIkR5bmFtaWMgU2luZ2xlIFBhZ2VcIixcbiAgICAgIFwiUmVzdGF1cmFudCB3ZWJzaXRlIGR5bmFtaWNhbGx5IHJlbmRlcmVkIGJ5IEpTLlwiLFxuICAgICAgXCJyZXN0YXVyYW50XCIsXG4gICAgKSxcbiAgKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgXCJMaWJyYXJ5IEFwcFwiLFxuICAgICAgXCJTdG9yZSB5b3VyIHJlYWRpbmcgbGlzdCBpbiBvbmUgcGxhY2UuXCIsXG4gICAgICBcImxpYnJhcnlcIixcbiAgICApLFxuICApO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICBcIlRpYy1UYWMtVG9lXCIsXG4gICAgICBcIlRpYyBUYWMgVG9lIGdhbWUgYnVpbHQgd2l0aCBKUywgSFRNTCwgQ1NTLlwiLFxuICAgICAgXCJ0aWMtdGFjLXRvZVwiLFxuICAgICksXG4gICk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgIFwiQWRtaW4gRGFzaGJvYXJkXCIsXG4gICAgICBcIlJlc3BvbnNpdmUgZGFzaGJvYXJkIGJ1aWx0IHdpdGggZ3JpZCBhbmQgZmxleGJveC5cIixcbiAgICAgIFwiYWRtaW4tZGFzaGJvYXJkXCIsXG4gICAgKSxcbiAgKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgXCJNeSBXZWJzaXRlXCIsXG4gICAgICBcIlNvdXJjZSBmaWxlcyBmb3IgdGhpcyBjdXN0b20gd2Vic2l0ZS5cIixcbiAgICAgIFwiZGF0YS1zYW5kYm94LmdpdGh1Yi5pb1wiLFxuICAgICksXG4gICk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgIFwiQmx1ZWJpa2VzXCIsXG4gICAgICBcIkJvc3RvbiBiaWtlIGRlbWFuZCBmb3JlY2FzdGluZyB3aXRoIFB5dGhvbiBhbmQgbWFjaGluZSBsZWFybmluZy5cIixcbiAgICAgIFwibWwtYmx1ZWJpa2VzLWZvcmVjYXN0aW5nXCIsXG4gICAgICBcIm5vbmVcIixcbiAgICApLFxuICApO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICBcIkJSRVdZT1VcIixcbiAgICAgIFwiRmluZCB0aGUgcGVyZmVjdCBicmV3ZXJ5IGZvciB5b3Ugd2l0aCBQeXRob24sIG1hY2hpbmUgbGVhcm5pbmcsIGFuZCBOTFAuXCIsXG4gICAgICBcIm5scC1icmV3ZXItZmluZGVyXCIsXG4gICAgICBcImh0dHBzOi8vYnJld3lvdS5zdHJlYW1saXQuYXBwL1wiLFxuICAgICksXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0cztcbiIsImZ1bmN0aW9uIGNyZWF0ZVNraWxsKGljb25QYXRoLCBuYW1lKSB7XG4gIGNvbnN0IHNraWxsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNraWxsQ2FyZC5jbGFzc0xpc3QuYWRkKFwic2tpbGwtY2FyZFwiKTtcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaWNvblBhdGgpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJsb2FkaW5nXCIsIFwibGF6eVwiKTtcblxuICBjb25zdCBza2lsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBza2lsbC5jbGFzc0xpc3QuYWRkKFwic2tpbGwtdGl0bGVcIik7XG4gIHNraWxsLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBza2lsbENhcmQuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHNraWxsQ2FyZC5hcHBlbmRDaGlsZChza2lsbCk7XG5cbiAgcmV0dXJuIHNraWxsQ2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihuYW1lLCBza2lsbHNBcnJheSkge1xuICBjb25zdCBTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2tpbGxzLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIFRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBza2lsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBza2lsbHMuY2xhc3NMaXN0LmFkZChcInNraWxscy1jYXJkc1wiKTtcbiAgc2tpbGxzQXJyYXkuZm9yRWFjaCgoc2tpbGwpID0+IHtcbiAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY3JlYXRlU2tpbGwoc2tpbGxbMF0sIHNraWxsWzFdKSk7XG4gIH0pO1xuXG4gIFNlY3Rpb24uYXBwZW5kQ2hpbGQoVGl0bGUpO1xuICBTZWN0aW9uLmFwcGVuZChza2lsbHMpO1xuXG4gIHJldHVybiBTZWN0aW9uO1xufVxuXG5jb25zdCBkYXRhU2tpbGxzID0gW1xuICBbXG4gICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9weXRob24vcHl0aG9uLW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwicHl0aG9uXCIsXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3BhbmRhcy9wYW5kYXMtb3JpZ2luYWwuc3ZnXCIsXG4gICAgXCJwYW5kYXNcIixcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvanVweXRlci9qdXB5dGVyLW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwianVweXRlclwiLFxuICBdLFxuICBbXG4gICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzAvMDUvU2Npa2l0X2xlYXJuX2xvZ29fc21hbGwuc3ZnXCIsXG4gICAgXCJzY2lraXQtbGVhcm5cIixcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvdGVuc29yZmxvdy90ZW5zb3JmbG93LW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwidGVuc29yZmxvd1wiLFxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9wb3N0Z3Jlc3FsL3Bvc3RncmVzcWwtb3JpZ2luYWwuc3ZnXCIsXG4gICAgXCJzcWxcIixcbiAgXSxcbl07XG5cbmNvbnN0IGZyb250RW5kU2tpbGxzID0gW1xuICBbXG4gICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9qYXZhc2NyaXB0L2phdmFzY3JpcHQtb3JpZ2luYWwuc3ZnXCIsXG4gICAgXCJqYXZhc2NyaXB0XCIsXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2NzczMvY3NzMy1vcmlnaW5hbC5zdmdcIixcbiAgICBcImNzc1wiLFxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9odG1sNS9odG1sNS1vcmlnaW5hbC5zdmdcIixcbiAgICBcImh0bWxcIixcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvcmVhY3QvcmVhY3Qtb3JpZ2luYWwuc3ZnXCIsXG4gICAgXCJyZWFjdFwiLFxuICBdLFxuXTtcblxuY29uc3QgbWlzY1NraWxscyA9IFtcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvZ2l0L2dpdC1vcmlnaW5hbC5zdmdcIixcbiAgICBcImdpdFwiLFxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9iYXNoL2Jhc2gtb3JpZ2luYWwuc3ZnXCIsXG4gICAgXCJiYXNoXCIsXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL25wbS9ucG0tb3JpZ2luYWwtd29yZG1hcmsuc3ZnXCIsXG4gICAgXCJucG1cIixcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvd2VicGFjay93ZWJwYWNrLW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwid2VicGFja1wiLFxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9kb2NrZXIvZG9ja2VyLW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwiZG9ja2VyXCIsXG4gIF0sXG5dO1xuXG5mdW5jdGlvbiBsb2FkU2tpbGxzKCkge1xuICBjb25zdCBza2lsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxscy1jb250YWluZXJcIik7XG5cbiAgc2tpbGxzLmFwcGVuZChjcmVhdGVTZWN0aW9uKFwiRGF0YSBTY2llbmNlXCIsIGRhdGFTa2lsbHMpKTtcbiAgc2tpbGxzLmFwcGVuZChjcmVhdGVTZWN0aW9uKFwiRnJvbnQtRW5kXCIsIGZyb250RW5kU2tpbGxzKSk7XG4gIHNraWxscy5hcHBlbmQoY3JlYXRlU2VjdGlvbihcIk1pc2NlbGxhbmVvdXNcIiwgbWlzY1NraWxscykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2tpbGxzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGxvYWRQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IGxvYWRJbWFnZXMgZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgbG9hZFNraWxscyBmcm9tIFwiLi9za2lsbHNcIjtcblxubG9hZEltYWdlcygpO1xubG9hZFByb2plY3RzKCk7XG5sb2FkU2tpbGxzKCk7XG5cbi8vIE5hdiBoYW1idXJnZXIgc2VsZWN0aW9uc1xuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1idXJnZXJcIik7XG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgdWxcIik7XG5jb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1pY29uXCIpO1xuY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1pY29uXCIpO1xuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdWwuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIGNsb3NlSWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgbWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG59KTtcblxuLy8gQ2xvc2UgaGFtYnVyZ2VyIG1lbnUgd2hlbiBhIGxpbmsgaXMgY2xpY2tlZCBvciBjbGljayBvdXRzaWRlIG1lbnVcbmNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rXCIpO1xuXG5uYXZMaW5rLmZvckVhY2goKGxpbmspID0+XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICBjbG9zZUljb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgbWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIH0pLFxuKTtcblxuZnVuY3Rpb24gaGFuZGxlT3V0c2lkZUNsaWNrKGUpIHtcbiAgaWYgKHVsLmNsYXNzTGlzdC5jb250YWlucyhcInNob3dcIikgJiYgZS50YXJnZXQuaWQgIT09IFwibWVudS1pY29uXCIpIHtcbiAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICBjbG9zZUljb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgbWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU91dHNpZGVDbGljayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=