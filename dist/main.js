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

.open-icon {
  font-size: 0.9rem;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,700&display=swap\");\n\n:root {\n  --font-family: \"Roboto\", sans-serf;\n  --normal-font: 400;\n  --bold-font: 700;\n  --bolder-font: 900;\n\n  --primary-color: #1b494b;\n  --secondary-color: #c4d4be;\n  --bg-color: #1b494b;\n\n  --white-light: rgb(246, 249, 246);\n  --primary-shadow: black;\n\n  --bottom-margin: 0.5rem;\n  --bottom-margin-2: 1rem;\n  --padding-side: 2.5rem;\n  --padding-side-smaller: 1rem;\n  --line-height: 1.7rem;\n\n  --transition: 0.3s;\n\n  --content-width: 1160px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n/* CSS Resets */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\na:hover {\n  color: var(--secondary-color);\n}\n\nbody {\n  font-family: var(--font-family);\n}\n\n/* Layout container */\n\n.layout {\n  background-color: var(--primary-color);\n  /* color: var(--dark-green); */\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Navbar */\n\nnav {\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: var(--primary-color);\n  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.4);\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  flex-grow: 1;\n  max-width: var(--content-width);\n  padding: 0 var(--padding-side);\n  height: 67px;\n}\n\nnav a {\n  color: var(--secondary-color);\n  transition: var(--transition);\n}\n\nnav a:hover {\n  color: white;\n  border-bottom: 2px solid white;\n}\n\nnav ul {\n  display: flex;\n  gap: 1.5rem;\n}\n\nnav ul li {\n  font-weight: var(--bold-font);\n}\n\n.open-icon {\n  font-size: 0.9rem;\n}\n\n.hamburger {\n  z-index: 100;\n  color: var(--secondary-color);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: none;\n}\n\nbutton .close-icon {\n  display: none;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: var(--content-width);\n}\n\n.header {\n  color: var(--secondary-color);\n  margin-bottom: var(--bottom-margin);\n}\n\nsection {\n  scroll-margin-top: 5rem;\n}\n\n/* Hero */\n\n.hero {\n  color: var(--secondary-color);\n  display: grid;\n  width: 100%;\n  align-items: center;\n  gap: 4rem;\n  grid-template-columns: 3fr 2fr;\n  padding: 3rem var(--padding-side);\n  max-width: var(--content-width);\n}\n\n.hero h1 {\n  font-size: 3rem;\n}\n\n.hero p {\n  padding-top: 2rem;\n  font-size: 1.2rem;\n  line-height: 1.6;\n}\n\n.avatar {\n  max-width: min(100%, 300px);\n  border-radius: 12px;\n  transform: rotate(5deg);\n  justify-self: right;\n  box-shadow: 3px 3px 8px var(--primary-shadow);\n}\n\n.hero a {\n  text-decoration: underline;\n  color: white;\n}\n\n.hero a:hover {\n  color: var(--secondary-color);\n}\n\n/* About */\n\n.about {\n  padding: 1rem var(--padding-side);\n}\n\n.about p {\n  line-height: var(--line-height);\n  color: white;\n  max-width: min(100%, 800px);\n}\n\n/* Projects */\n\n.projects {\n  padding: 1rem var(--padding-side);\n  margin-top: 2rem;\n  width: 100%;\n}\n\n.project-pic {\n  width: 65%;\n  height: 60%;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-template-rows: auto;\n  gap: 2rem;\n  justify-content: center;\n  padding-bottom: 2rem;\n  color: var(--primary-color);\n}\n\n.projects-title {\n  margin-bottom: 1rem;\n}\n\n.project-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n\n.project-title {\n  margin-bottom: var(--bottom-margin);\n}\n\n.project-details {\n  margin-bottom: var(--bottom-margin);\n}\n\n.project-card {\n  background-color: var(--white-light);\n  border-radius: 11px;\n  box-shadow: 0 3px 8px var(--primary-shadow);\n  padding: 1.9rem 2.5rem;\n}\n\n.project-card:hover {\n  transform: scale(1.02);\n  transition: transform 0.3s ease-in;\n}\n\n.links-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n\n/* Skills */\n\n.skills {\n  padding: 1rem var(--padding-side);\n  margin-top: 2rem;\n  width: 100%;\n  color: var(--secondary-color);\n}\n\n.skills-section {\n  color: var(--white-light);\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.skills-cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2.5rem;\n}\n\n.skill-card {\n  color: var(--secondary-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  font-size: 0.9rem;\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n}\n\nimg.icon {\n  width: 70px;\n  height: auto;\n}\n\n.skill-card:hover {\n  animation-name: bounce;\n  animation-timing-function: ease;\n}\n@keyframes bounce {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-1rem);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n/* Contact form */\n\n.contact {\n  padding: 1rem var(--padding-side);\n  width: 100%;\n  max-width: min(100%, 600px);\n  align-self: flex-start;\n  margin-top: 2rem;\n}\n\n.contact-form-container .input-field {\n  width: 100%;\n  padding: 15px 20px;\n  border-radius: 5px;\n  border: 1px var(--primary-color);\n  background-color: var(--white-light);\n  font-size: 1rem;\n  outline: none;\n  margin-bottom: 15px;\n}\n\n.submit-btn {\n  padding: 15px 40px;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  border: 2px solid var(--primary-color);\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: var(--bold-font);\n  transition: var(--transition);\n}\n\n.submit-btn:hover {\n  color: var(--secondary-color);\n  background-color: var(--primary-color);\n  border: 2px solid var(--secondary-color);\n  cursor: pointer;\n}\n\nfooter {\n  background-color: rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  color: var(--secondary-color);\n  padding: 1rem;\n}\n\n@media screen and (max-width: 720px) {\n  .navbar {\n    padding: 0 var(--padding-side-smaller);\n  }\n\n  .navbar ul {\n    position: fixed;\n    z-index: 99;\n    background-color: var(--bg-color);\n    flex-direction: column;\n    padding-top: 30px;\n    top: 0;\n    right: 0;\n    width: 50%;\n    text-align: center;\n    transform: translateY(-110%);\n    transition: transform 0.3s ease-in;\n    padding-bottom: 1.5rem;\n    border: 1px solid var(--secondary-color);\n  }\n\n  .navbar ul li {\n    margin: 8px;\n  }\n\n  .hamburger {\n    display: block;\n  }\n\n  .navbar ul.show {\n    transform: translateY(0);\n  }\n\n  button .close-icon.show {\n    display: block;\n  }\n\n  button .menu-icon.hide {\n    display: none;\n  }\n\n  .project-card {\n    padding: 1.9rem var(--padding-side-smaller);\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .hero {\n    grid-template-columns: 1fr;\n    padding: 3rem var(--padding-side-smaller);\n  }\n\n  .avatar {\n    max-width: min(100%, 250px);\n    justify-self: left;\n  }\n\n  .about,\n  .projects,\n  .contact,\n  .skills {\n    padding: 1rem var(--padding-side-smaller);\n  }\n\n  .projects-container {\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLG9CQUFvQjtBQUNoSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLHVHQUF1RyxNQUFNLHNCQUFzQixXQUFXLHlDQUF5Qyx1QkFBdUIscUJBQXFCLHVCQUF1QiwrQkFBK0IsK0JBQStCLHdCQUF3Qix3Q0FBd0MsNEJBQTRCLDhCQUE4Qiw0QkFBNEIsMkJBQTJCLGlDQUFpQywwQkFBMEIseUJBQXlCLDhCQUE4QixHQUFHLFVBQVUsNEJBQTRCLEdBQUcseUJBQXlCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxRQUFRLDBCQUEwQixHQUFHLE9BQU8sMEJBQTBCLGdDQUFnQyxHQUFHLGFBQWEsa0NBQWtDLEdBQUcsVUFBVSxvQ0FBb0MsR0FBRyx1Q0FBdUMsMkNBQTJDLGlDQUFpQyxtQkFBbUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyx5QkFBeUIscUJBQXFCLGtCQUFrQiw0QkFBNEIsZ0JBQWdCLFdBQVcsWUFBWSxlQUFlLDJDQUEyQywrQ0FBK0MsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsMkJBQTJCLGlCQUFpQixvQ0FBb0MsbUNBQW1DLGlCQUFpQixHQUFHLFdBQVcsa0NBQWtDLGtDQUFrQyxHQUFHLGlCQUFpQixpQkFBaUIsbUNBQW1DLEdBQUcsWUFBWSxrQkFBa0IsZ0JBQWdCLEdBQUcsZUFBZSxrQ0FBa0MsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsZ0JBQWdCLGlCQUFpQixrQ0FBa0MsaUJBQWlCLDRCQUE0QixvQkFBb0Isa0JBQWtCLEdBQUcsd0JBQXdCLGtCQUFrQixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQix3QkFBd0Isb0NBQW9DLEdBQUcsYUFBYSxrQ0FBa0Msd0NBQXdDLEdBQUcsYUFBYSw0QkFBNEIsR0FBRyx5QkFBeUIsa0NBQWtDLGtCQUFrQixnQkFBZ0Isd0JBQXdCLGNBQWMsbUNBQW1DLHNDQUFzQyxvQ0FBb0MsR0FBRyxjQUFjLG9CQUFvQixHQUFHLGFBQWEsc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRyxhQUFhLGdDQUFnQyx3QkFBd0IsNEJBQTRCLHdCQUF3QixrREFBa0QsR0FBRyxhQUFhLCtCQUErQixpQkFBaUIsR0FBRyxtQkFBbUIsa0NBQWtDLEdBQUcsMkJBQTJCLHNDQUFzQyxHQUFHLGNBQWMsb0NBQW9DLGlCQUFpQixnQ0FBZ0MsR0FBRyxpQ0FBaUMsc0NBQXNDLHFCQUFxQixnQkFBZ0IsR0FBRyxrQkFBa0IsZUFBZSxnQkFBZ0IsR0FBRyx5QkFBeUIsa0JBQWtCLGdFQUFnRSw2QkFBNkIsY0FBYyw0QkFBNEIseUJBQXlCLGdDQUFnQyxHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsd0JBQXdCLGNBQWMsR0FBRyxvQkFBb0Isd0NBQXdDLEdBQUcsc0JBQXNCLHdDQUF3QyxHQUFHLG1CQUFtQix5Q0FBeUMsd0JBQXdCLGdEQUFnRCwyQkFBMkIsR0FBRyx5QkFBeUIsMkJBQTJCLHVDQUF1QyxHQUFHLHNCQUFzQixrQkFBa0IsZ0JBQWdCLGtDQUFrQyxHQUFHLDZCQUE2QixzQ0FBc0MscUJBQXFCLGdCQUFnQixrQ0FBa0MsR0FBRyxxQkFBcUIsOEJBQThCLHdCQUF3QiwyQkFBMkIsa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRyxtQkFBbUIsa0JBQWtCLG9CQUFvQixnQkFBZ0IsR0FBRyxpQkFBaUIsa0NBQWtDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLG1DQUFtQyxjQUFjLHNCQUFzQiw2QkFBNkIsd0NBQXdDLEdBQUcsY0FBYyxnQkFBZ0IsaUJBQWlCLEdBQUcsdUJBQXVCLDJCQUEyQixvQ0FBb0MsR0FBRyxxQkFBcUIsUUFBUSwrQkFBK0IsS0FBSyxTQUFTLG1DQUFtQyxLQUFLLFVBQVUsK0JBQStCLEtBQUssR0FBRyxvQ0FBb0Msc0NBQXNDLGdCQUFnQixnQ0FBZ0MsMkJBQTJCLHFCQUFxQixHQUFHLDBDQUEwQyxnQkFBZ0IsdUJBQXVCLHVCQUF1QixxQ0FBcUMseUNBQXlDLG9CQUFvQixrQkFBa0Isd0JBQXdCLEdBQUcsaUJBQWlCLHVCQUF1QixnQ0FBZ0MsNkNBQTZDLDJDQUEyQyx1QkFBdUIsb0JBQW9CLGtDQUFrQyxrQ0FBa0MsR0FBRyx1QkFBdUIsa0NBQWtDLDJDQUEyQyw2Q0FBNkMsb0JBQW9CLEdBQUcsWUFBWSx5Q0FBeUMsa0JBQWtCLDRCQUE0QixnQkFBZ0Isa0NBQWtDLGtCQUFrQixHQUFHLDBDQUEwQyxhQUFhLDZDQUE2QyxLQUFLLGtCQUFrQixzQkFBc0Isa0JBQWtCLHdDQUF3Qyw2QkFBNkIsd0JBQXdCLGFBQWEsZUFBZSxpQkFBaUIseUJBQXlCLG1DQUFtQyx5Q0FBeUMsNkJBQTZCLCtDQUErQyxLQUFLLHFCQUFxQixrQkFBa0IsS0FBSyxrQkFBa0IscUJBQXFCLEtBQUssdUJBQXVCLCtCQUErQixLQUFLLCtCQUErQixxQkFBcUIsS0FBSyw4QkFBOEIsb0JBQW9CLEtBQUsscUJBQXFCLGtEQUFrRCxLQUFLLEdBQUcsMENBQTBDLFdBQVcsaUNBQWlDLGdEQUFnRCxLQUFLLGVBQWUsa0NBQWtDLHlCQUF5QixLQUFLLHFEQUFxRCxnREFBZ0QsS0FBSywyQkFBMkIsaUNBQWlDLEtBQUssR0FBRyxxQkFBcUI7QUFDbG1WO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDamIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYnlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0NBQU07QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWjFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvRUFBb0UsS0FBSztBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUUsS0FBSztBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEg1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEgxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUNKO0FBQ0E7O0FBRWxDLG1EQUFVO0FBQ1YscURBQVk7QUFDWixtREFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9zcmMvaW1hZ2VzLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL3NyYy9za2lsbHMuanMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw5MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyZjtcbiAgLS1ub3JtYWwtZm9udDogNDAwO1xuICAtLWJvbGQtZm9udDogNzAwO1xuICAtLWJvbGRlci1mb250OiA5MDA7XG5cbiAgLS1wcmltYXJ5LWNvbG9yOiAjMWI0OTRiO1xuICAtLXNlY29uZGFyeS1jb2xvcjogI2M0ZDRiZTtcbiAgLS1iZy1jb2xvcjogIzFiNDk0YjtcblxuICAtLXdoaXRlLWxpZ2h0OiByZ2IoMjQ2LCAyNDksIDI0Nik7XG4gIC0tcHJpbWFyeS1zaGFkb3c6IGJsYWNrO1xuXG4gIC0tYm90dG9tLW1hcmdpbjogMC41cmVtO1xuICAtLWJvdHRvbS1tYXJnaW4tMjogMXJlbTtcbiAgLS1wYWRkaW5nLXNpZGU6IDIuNXJlbTtcbiAgLS1wYWRkaW5nLXNpZGUtc21hbGxlcjogMXJlbTtcbiAgLS1saW5lLWhlaWdodDogMS43cmVtO1xuXG4gIC0tdHJhbnNpdGlvbjogMC4zcztcblxuICAtLWNvbnRlbnQtd2lkdGg6IDExNjBweDtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4vKiBDU1MgUmVzZXRzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xufVxuXG4vKiBMYXlvdXQgY29udGFpbmVyICovXG5cbi5sYXlvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgLyogY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pOyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIE5hdmJhciAqL1xuXG5uYXYge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLXNpZGUpO1xuICBoZWlnaHQ6IDY3cHg7XG59XG5cbm5hdiBhIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5uYXYgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNXJlbTtcbn1cblxubmF2IHVsIGxpIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWJvbGQtZm9udCk7XG59XG5cbi5vcGVuLWljb24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmhhbWJ1cmdlciB7XG4gIHotaW5kZXg6IDEwMDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uIC5jbG9zZS1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aCk7XG59XG5cbi5oZWFkZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYm90dG9tLW1hcmdpbik7XG59XG5cbnNlY3Rpb24ge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuLyogSGVybyAqL1xuXG4uaGVybyB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XG4gIHBhZGRpbmc6IDNyZW0gdmFyKC0tcGFkZGluZy1zaWRlKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcbn1cblxuLmhlcm8gaDEge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5oZXJvIHAge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5hdmF0YXIge1xuICBtYXgtd2lkdGg6IG1pbigxMDAlLCAzMDBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCB2YXIoLS1wcmltYXJ5LXNoYWRvdyk7XG59XG5cbi5oZXJvIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVybyBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi8qIEFib3V0ICovXG5cbi5hYm91dCB7XG4gIHBhZGRpbmc6IDFyZW0gdmFyKC0tcGFkZGluZy1zaWRlKTtcbn1cblxuLmFib3V0IHAge1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1heC13aWR0aDogbWluKDEwMCUsIDgwMHB4KTtcbn1cblxuLyogUHJvamVjdHMgKi9cblxuLnByb2plY3RzIHtcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QtcGljIHtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBnYXA6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4ucHJvamVjdHMtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luKTtcbn1cblxuLnByb2plY3QtZGV0YWlscyB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xufVxuXG4ucHJvamVjdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBib3gtc2hhZG93OiAwIDNweCA4cHggdmFyKC0tcHJpbWFyeS1zaGFkb3cpO1xuICBwYWRkaW5nOiAxLjlyZW0gMi41cmVtO1xufVxuXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcbn1cblxuLmxpbmtzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLyogU2tpbGxzICovXG5cbi5za2lsbHMge1xuICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZSk7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnNraWxscy1zZWN0aW9uIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlLWxpZ2h0KTtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5za2lsbHMtY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMi41cmVtO1xufVxuXG4uc2tpbGwtY2FyZCB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbmltZy5pY29uIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNraWxsLWNhcmQ6aG92ZXIge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xufVxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLyogQ29udGFjdCBmb3JtICovXG5cbi5jb250YWN0IHtcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgNjAwcHgpO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciAuaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1saWdodCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiAxNXB4IDQwcHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogdmFyKC0tYm9sZC1mb250KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zdWJtaXQtYnRuOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLXNpZGUtc21hbGxlcik7XG4gIH1cblxuICAubmF2YmFyIHVsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTEwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIH1cblxuICAubmF2YmFyIHVsIGxpIHtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxuXG4gIC5oYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm5hdmJhciB1bC5zaG93IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cblxuICBidXR0b24gLmNsb3NlLWljb24uc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBidXR0b24gLm1lbnUtaWNvbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnByb2plY3QtY2FyZCB7XG4gICAgcGFkZGluZzogMS45cmVtIHZhcigtLXBhZGRpbmctc2lkZS1zbWFsbGVyKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVybyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogM3JlbSB2YXIoLS1wYWRkaW5nLXNpZGUtc21hbGxlcik7XG4gIH1cblxuICAuYXZhdGFyIHtcbiAgICBtYXgtd2lkdGg6IG1pbigxMDAlLCAyNTBweCk7XG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICB9XG5cbiAgLmFib3V0LFxuICAucHJvamVjdHMsXG4gIC5jb250YWN0LFxuICAuc2tpbGxzIHtcbiAgICBwYWRkaW5nOiAxcmVtIHZhcigtLXBhZGRpbmctc2lkZS1zbWFsbGVyKTtcbiAgfVxuXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsbUJBQW1COztFQUVuQixpQ0FBaUM7RUFDakMsdUJBQXVCOztFQUV2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIscUJBQXFCOztFQUVyQixrQkFBa0I7O0VBRWxCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBLFVBQVU7O0FBRVY7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQSxhQUFhOztBQUViO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCx3QkFBd0I7RUFDeEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxpQ0FBaUM7RUFDakMsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isd0NBQXdDO0VBQ3hDLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isc0NBQXNDO0VBQ3RDLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFFBQVE7SUFDUixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsMkNBQTJDO0VBQzdDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQix5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0VBQ3BCOztFQUVBOzs7O0lBSUUseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDkwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJmO1xcbiAgLS1ub3JtYWwtZm9udDogNDAwO1xcbiAgLS1ib2xkLWZvbnQ6IDcwMDtcXG4gIC0tYm9sZGVyLWZvbnQ6IDkwMDtcXG5cXG4gIC0tcHJpbWFyeS1jb2xvcjogIzFiNDk0YjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYzRkNGJlO1xcbiAgLS1iZy1jb2xvcjogIzFiNDk0YjtcXG5cXG4gIC0td2hpdGUtbGlnaHQ6IHJnYigyNDYsIDI0OSwgMjQ2KTtcXG4gIC0tcHJpbWFyeS1zaGFkb3c6IGJsYWNrO1xcblxcbiAgLS1ib3R0b20tbWFyZ2luOiAwLjVyZW07XFxuICAtLWJvdHRvbS1tYXJnaW4tMjogMXJlbTtcXG4gIC0tcGFkZGluZy1zaWRlOiAyLjVyZW07XFxuICAtLXBhZGRpbmctc2lkZS1zbWFsbGVyOiAxcmVtO1xcbiAgLS1saW5lLWhlaWdodDogMS43cmVtO1xcblxcbiAgLS10cmFuc2l0aW9uOiAwLjNzO1xcblxcbiAgLS1jb250ZW50LXdpZHRoOiAxMTYwcHg7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIENTUyBSZXNldHMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxufVxcblxcbi8qIExheW91dCBjb250YWluZXIgKi9cXG5cXG4ubGF5b3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgLyogY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pOyAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgKi9cXG5cXG5uYXYge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbiAgaGVpZ2h0OiA2N3B4O1xcbn1cXG5cXG5uYXYgYSB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn1cXG5cXG5uYXYgYTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBmb250LXdlaWdodDogdmFyKC0tYm9sZC1mb250KTtcXG59XFxuXFxuLm9wZW4taWNvbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuICB6LWluZGV4OiAxMDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIC5jbG9zZS1pY29uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJvdHRvbS1tYXJnaW4pO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA1cmVtO1xcbn1cXG5cXG4vKiBIZXJvICovXFxuXFxuLmhlcm8ge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xcbiAgcGFkZGluZzogM3JlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcXG59XFxuXFxuLmhlcm8gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uaGVybyBwIHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG5cXG4uYXZhdGFyIHtcXG4gIG1heC13aWR0aDogbWluKDEwMCUsIDMwMHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCB2YXIoLS1wcmltYXJ5LXNoYWRvdyk7XFxufVxcblxcbi5oZXJvIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZXJvIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi8qIEFib3V0ICovXFxuXFxuLmFib3V0IHtcXG4gIHBhZGRpbmc6IDFyZW0gdmFyKC0tcGFkZGluZy1zaWRlKTtcXG59XFxuXFxuLmFib3V0IHAge1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1heC13aWR0aDogbWluKDEwMCUsIDgwMHB4KTtcXG59XFxuXFxuLyogUHJvamVjdHMgKi9cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1waWMge1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNjAlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdhcDogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luKTtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1ib3R0b20tbWFyZ2luKTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IHZhcigtLXByaW1hcnktc2hhZG93KTtcXG4gIHBhZGRpbmc6IDEuOXJlbSAyLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5saW5rcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi8qIFNraWxscyAqL1xcblxcbi5za2lsbHMge1xcbiAgcGFkZGluZzogMXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUpO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5za2lsbHMtc2VjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtbGlnaHQpO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uc2tpbGxzLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnNraWxsLWNhcmQge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5pbWcuaWNvbiB7XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnNraWxsLWNhcmQ6aG92ZXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxufVxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcblxcbi8qIENvbnRhY3QgZm9ybSAqL1xcblxcbi5jb250YWN0IHtcXG4gIHBhZGRpbmc6IDFyZW0gdmFyKC0tcGFkZGluZy1zaWRlKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiBtaW4oMTAwJSwgNjAwcHgpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5jb250YWN0LWZvcm0tY29udGFpbmVyIC5pbnB1dC1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtbGlnaHQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gIHBhZGRpbmc6IDE1cHggNDBweDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2xkLWZvbnQpO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcblxcbi5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLXNpZGUtc21hbGxlcik7XFxuICB9XFxuXFxuICAubmF2YmFyIHVsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMCUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcblxcbiAgLm5hdmJhciB1bCBsaSB7XFxuICAgIG1hcmdpbjogOHB4O1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLm5hdmJhciB1bC5zaG93IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcblxcbiAgYnV0dG9uIC5jbG9zZS1pY29uLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIGJ1dHRvbiAubWVudS1pY29uLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZCB7XFxuICAgIHBhZGRpbmc6IDEuOXJlbSB2YXIoLS1wYWRkaW5nLXNpZGUtc21hbGxlcik7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVybyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBwYWRkaW5nOiAzcmVtIHZhcigtLXBhZGRpbmctc2lkZS1zbWFsbGVyKTtcXG4gIH1cXG5cXG4gIC5hdmF0YXIge1xcbiAgICBtYXgtd2lkdGg6IG1pbigxMDAlLCAyNTBweCk7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gIH1cXG5cXG4gIC5hYm91dCxcXG4gIC5wcm9qZWN0cyxcXG4gIC5jb250YWN0LFxcbiAgLnNraWxscyB7XFxuICAgIHBhZGRpbmc6IDFyZW0gdmFyKC0tcGFkZGluZy1zaWRlLXNtYWxsZXIpO1xcbiAgfVxcblxcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGF2YXRhciBmcm9tIFwiLi9pbWFnZXMvYXZhdGFyLmpwZ1wiO1xuXG5mdW5jdGlvbiBsb2FkSW1hZ2VzKCkge1xuICBjb25zdCBhdmF0YXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBhdmF0YXJJbWcuY2xhc3NMaXN0LmFkZChcImF2YXRhclwiKTtcbiAgYXZhdGFySW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBhdmF0YXIpO1xuICBhdmF0YXJJbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQXZhdGFyXCIpO1xuXG4gIGNvbnN0IGF2YXRhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVyb1wiKTtcbiAgYXZhdGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGF2YXRhckltZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRJbWFnZXM7XG4iLCJmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgcmVwbywgbGl2ZUxpbmsgPSBudWxsKSB7XG4gIGNvbnN0IHByb2pDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvakNhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuICBwcm9qQ2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkXCIpO1xuXG4gIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcHJvalRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICBjb25zdCBwcm9qRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXRhaWxzXCIpO1xuICBwcm9qRGV0YWlscy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IHByb2pMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2pMaW5rcy5jbGFzc0xpc3QuYWRkKFwibGlua3MtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGRlbW9MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGRlbW9MaW5rLnRleHRDb250ZW50ID0gXCLwn5GJIExpdmUgRGVtb1wiO1xuICBpZiAobGl2ZUxpbmsgJiYgbGl2ZUxpbmsgIT09IFwibm9uZVwiKSB7XG4gICAgZGVtb0xpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBsaXZlTGluayk7XG4gIH0gZWxzZSB7XG4gICAgZGVtb0xpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgaHR0cHM6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLyR7cmVwb30vYCk7XG4gIH1cbiAgZGVtb0xpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXG4gIGNvbnN0IHNvdXJjZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgc291cmNlTGluay50ZXh0Q29udGVudCA9IFwi4pqb77iPIFNvdXJjZSBDb2RlXCI7XG4gIHNvdXJjZUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgaHR0cHM6Ly9naXRodWIuY29tL2RhdGEtc2FuZGJveC8ke3JlcG99L2ApO1xuICBzb3VyY2VMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcblxuICBpZiAobGl2ZUxpbmsgIT09IFwibm9uZVwiKSB7XG4gICAgcHJvakxpbmtzLmFwcGVuZENoaWxkKGRlbW9MaW5rKTtcbiAgfVxuICBwcm9qTGlua3MuYXBwZW5kQ2hpbGQoc291cmNlTGluayk7XG5cbiAgcHJvakNhcmQuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbiAgcHJvakNhcmQuYXBwZW5kQ2hpbGQocHJvakRldGFpbHMpO1xuICBwcm9qQ2FyZC5hcHBlbmRDaGlsZChwcm9qTGlua3MpO1xuXG4gIHJldHVybiBwcm9qQ2FyZDtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICBcIkV0Y2gtYS1Ta2V0Y2hcIixcbiAgICAgIFwiTW9kZXJuIEV0Y2gtYS1za2V0Y2ggZ2FtZSB1c2luZyBKUywgSFRNTCwgQ1NTLlwiLFxuICAgICAgXCJldGNoLWEtc2tldGNoXCIsXG4gICAgKSxcbiAgKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgXCJEeW5hbWljIFNpbmdsZSBQYWdlXCIsXG4gICAgICBcIlJlc3RhdXJhbnQgd2Vic2l0ZSBkeW5hbWljYWxseSByZW5kZXJlZCBieSBKUy5cIixcbiAgICAgIFwicmVzdGF1cmFudFwiLFxuICAgICksXG4gICk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgIFwiTGlicmFyeSBBcHBcIixcbiAgICAgIFwiU3RvcmUgeW91ciByZWFkaW5nIGxpc3QgaW4gb25lIHBsYWNlLlwiLFxuICAgICAgXCJsaWJyYXJ5XCIsXG4gICAgKSxcbiAgKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgXCJUaWMtVGFjLVRvZVwiLFxuICAgICAgXCJUaWMgVGFjIFRvZSBnYW1lIGJ1aWx0IHdpdGggSlMsIEhUTUwsIENTUy5cIixcbiAgICAgIFwidGljLXRhYy10b2VcIixcbiAgICApLFxuICApO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICBcIkFkbWluIERhc2hib2FyZFwiLFxuICAgICAgXCJSZXNwb25zaXZlIGRhc2hib2FyZCBidWlsdCB3aXRoIGdyaWQgYW5kIGZsZXhib3guXCIsXG4gICAgICBcImFkbWluLWRhc2hib2FyZFwiLFxuICAgICksXG4gICk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgIFwiTXkgV2Vic2l0ZVwiLFxuICAgICAgXCJTb3VyY2UgZmlsZXMgZm9yIHRoaXMgY3VzdG9tIHdlYnNpdGUuXCIsXG4gICAgICBcImRhdGEtc2FuZGJveC5naXRodWIuaW9cIixcbiAgICApLFxuICApO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICBcIkJsdWViaWtlc1wiLFxuICAgICAgXCJCb3N0b24gYmlrZSBkZW1hbmQgZm9yZWNhc3Rpbmcgd2l0aCBQeXRob24gYW5kIG1hY2hpbmUgbGVhcm5pbmcuXCIsXG4gICAgICBcIm1sLWJsdWViaWtlcy1mb3JlY2FzdGluZ1wiLFxuICAgICAgXCJub25lXCIsXG4gICAgKSxcbiAgKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgXCJCUkVXWU9VXCIsXG4gICAgICBcIkZpbmQgdGhlIHBlcmZlY3QgYnJld2VyeSBmb3IgeW91IHdpdGggUHl0aG9uLCBtYWNoaW5lIGxlYXJuaW5nLCBhbmQgTkxQLlwiLFxuICAgICAgXCJubHAtYnJld2VyLWZpbmRlclwiLFxuICAgICAgXCJodHRwczovL2JyZXd5b3Uuc3RyZWFtbGl0LmFwcC9cIixcbiAgICApLFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUHJvamVjdHM7XG4iLCJmdW5jdGlvbiBjcmVhdGVTa2lsbChpY29uUGF0aCwgbmFtZSkge1xuICBjb25zdCBza2lsbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBza2lsbENhcmQuY2xhc3NMaXN0LmFkZChcInNraWxsLWNhcmRcIik7XG5cbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGljb25QYXRoKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLCBcImxhenlcIik7XG5cbiAgY29uc3Qgc2tpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc2tpbGwuY2xhc3NMaXN0LmFkZChcInNraWxsLXRpdGxlXCIpO1xuICBza2lsbC50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgc2tpbGxDYXJkLmFwcGVuZENoaWxkKGljb24pO1xuICBza2lsbENhcmQuYXBwZW5kQ2hpbGQoc2tpbGwpO1xuXG4gIHJldHVybiBza2lsbENhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24obmFtZSwgc2tpbGxzQXJyYXkpIHtcbiAgY29uc3QgU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNraWxscy1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3Qgc2tpbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2tpbGxzLmNsYXNzTGlzdC5hZGQoXCJza2lsbHMtY2FyZHNcIik7XG4gIHNraWxsc0FycmF5LmZvckVhY2goKHNraWxsKSA9PiB7XG4gICAgc2tpbGxzLmFwcGVuZENoaWxkKGNyZWF0ZVNraWxsKHNraWxsWzBdLCBza2lsbFsxXSkpO1xuICB9KTtcblxuICBTZWN0aW9uLmFwcGVuZENoaWxkKFRpdGxlKTtcbiAgU2VjdGlvbi5hcHBlbmQoc2tpbGxzKTtcblxuICByZXR1cm4gU2VjdGlvbjtcbn1cblxuY29uc3QgZGF0YVNraWxscyA9IFtcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvcHl0aG9uL3B5dGhvbi1vcmlnaW5hbC5zdmdcIixcbiAgICBcInB5dGhvblwiLFxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9wYW5kYXMvcGFuZGFzLW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwicGFuZGFzXCIsXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2p1cHl0ZXIvanVweXRlci1vcmlnaW5hbC5zdmdcIixcbiAgICBcImp1cHl0ZXJcIixcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8wLzA1L1NjaWtpdF9sZWFybl9sb2dvX3NtYWxsLnN2Z1wiLFxuICAgIFwic2Npa2l0LWxlYXJuXCIsXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3RlbnNvcmZsb3cvdGVuc29yZmxvdy1vcmlnaW5hbC5zdmdcIixcbiAgICBcInRlbnNvcmZsb3dcIixcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvcG9zdGdyZXNxbC9wb3N0Z3Jlc3FsLW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwic3FsXCIsXG4gIF0sXG5dO1xuXG5jb25zdCBmcm9udEVuZFNraWxscyA9IFtcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvamF2YXNjcmlwdC9qYXZhc2NyaXB0LW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwiamF2YXNjcmlwdFwiLFxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9jc3MzL2NzczMtb3JpZ2luYWwuc3ZnXCIsXG4gICAgXCJjc3NcIixcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvaHRtbDUvaHRtbDUtb3JpZ2luYWwuc3ZnXCIsXG4gICAgXCJodG1sXCIsXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3JlYWN0L3JlYWN0LW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwicmVhY3RcIixcbiAgXSxcbl07XG5cbmNvbnN0IG1pc2NTa2lsbHMgPSBbXG4gIFtcbiAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2dpdC9naXQtb3JpZ2luYWwuc3ZnXCIsXG4gICAgXCJnaXRcIixcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvYmFzaC9iYXNoLW9yaWdpbmFsLnN2Z1wiLFxuICAgIFwiYmFzaFwiLFxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9ucG0vbnBtLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiLFxuICAgIFwibnBtXCIsXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3dlYnBhY2svd2VicGFjay1vcmlnaW5hbC5zdmdcIixcbiAgICBcIndlYnBhY2tcIixcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvZG9ja2VyL2RvY2tlci1vcmlnaW5hbC5zdmdcIixcbiAgICBcImRvY2tlclwiLFxuICBdLFxuXTtcblxuZnVuY3Rpb24gbG9hZFNraWxscygpIHtcbiAgY29uc3Qgc2tpbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbHMtY29udGFpbmVyXCIpO1xuXG4gIHNraWxscy5hcHBlbmQoY3JlYXRlU2VjdGlvbihcIkRhdGEgU2NpZW5jZVwiLCBkYXRhU2tpbGxzKSk7XG4gIHNraWxscy5hcHBlbmQoY3JlYXRlU2VjdGlvbihcIkZyb250LUVuZFwiLCBmcm9udEVuZFNraWxscykpO1xuICBza2lsbHMuYXBwZW5kKGNyZWF0ZVNlY3Rpb24oXCJNaXNjZWxsYW5lb3VzXCIsIG1pc2NTa2lsbHMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNraWxscztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBsb2FkUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBsb2FkSW1hZ2VzIGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IGxvYWRTa2lsbHMgZnJvbSBcIi4vc2tpbGxzXCI7XG5cbmxvYWRJbWFnZXMoKTtcbmxvYWRQcm9qZWN0cygpO1xubG9hZFNraWxscygpO1xuXG4vLyBOYXYgaGFtYnVyZ2VyIHNlbGVjdGlvbnNcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFtYnVyZ2VyXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IHVsXCIpO1xuY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtaWNvblwiKTtcbmNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtaWNvblwiKTtcblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHVsLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICBjbG9zZUljb24uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xufSk7XG5cbi8vIENsb3NlIGhhbWJ1cmdlciBtZW51IHdoZW4gYSBsaW5rIGlzIGNsaWNrZWQgb3IgY2xpY2sgb3V0c2lkZSBtZW51XG5jb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcblxubmF2TGluay5mb3JFYWNoKChsaW5rKSA9PlxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgY2xvc2VJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICB9KSxcbik7XG5cbmZ1bmN0aW9uIGhhbmRsZU91dHNpZGVDbGljayhlKSB7XG4gIGlmICh1bC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpICYmIGUudGFyZ2V0LmlkICE9PSBcIm1lbnUtaWNvblwiKSB7XG4gICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgY2xvc2VJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9