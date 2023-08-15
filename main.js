/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");

// import './style.css';

(0,_projects__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRSxLQUFLO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUUsS0FBSztBQUMxRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDckRmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7QUFDdEM7O0FBRUEscURBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RhdGEtc2FuZGJveC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kYXRhLXNhbmRib3guZ2l0aHViLmlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCByZXBvKSB7XG5cbiAgY29uc3QgcHJvakNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvakNhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgcHJvakNhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkJyk7XG5cbiAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgcHJvalRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgY29uc3QgcHJvakRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2pEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGV0YWlscycpO1xuICBwcm9qRGV0YWlscy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IHByb2pMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qTGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZGVtb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGRlbW9MaW5rLnRleHRDb250ZW50ID0gJ/CfkYkgTGl2ZSBEZW1vJztcbiAgZGVtb0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYGh0dHBzOi8vZGF0YS1zYW5kYm94LmdpdGh1Yi5pby8ke3JlcG99L2ApO1xuICBkZW1vTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICBjb25zdCBzb3VyY2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBzb3VyY2VMaW5rLnRleHRDb250ZW50ID0gJ+Kam++4jyBTb3VyY2UgQ29kZSc7XG4gIHNvdXJjZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRhLXNhbmRib3gvJHtyZXBvfS9gKTtcbiAgc291cmNlTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICBwcm9qTGlua3MuYXBwZW5kQ2hpbGQoZGVtb0xpbmspO1xuICBwcm9qTGlua3MuYXBwZW5kQ2hpbGQoc291cmNlTGluayk7XG5cbiAgcHJvakNhcmQuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbiAgcHJvakNhcmQuYXBwZW5kQ2hpbGQocHJvakRldGFpbHMpO1xuICBwcm9qQ2FyZC5hcHBlbmRDaGlsZChwcm9qTGlua3MpO1xuXG4gIHJldHVybiBwcm9qQ2FyZDtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1jb250YWluZXInKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KCdFdGNoLWEtU2tldGNoJywgJ01vZGVybiBFdGNoLWEtc2tldGNoIGdhbWUgdXNpbmcgSlMsIEhUTUwsIENTUy4nLCAnZXRjaC1hLXNrZXRjaCcpKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KCdEeW5hbWljIFNpbmdsZSBQYWdlJywgJ1Jlc3RhdXJhbnQgd2Vic2l0ZSBkeW5hbWljYWxseSByZW5kZXJlZCBieSBKUy4nLCAncmVzdGF1cmFudCcpKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KCdMaWJyYXJ5IEFwcCcsICdTdG9yZSB5b3VyIHJlYWRpbmcgbGlzdCBpbiBvbmUgcGxhY2UuJywgJ2xpYnJhcnknKSk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCgnVGljLVRhYy1Ub2UnLCAnVGljIFRhYyBUb2UgZ2FtZSBidWlsdCB3aXRoIEpTLCBIVE1MLCBDU1MuJywgJ3RpYy10YWMtdG9lJykpO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QoJ0FkbWluIERhc2hib2FyZCcsICdSZXNwb25zaXZlIGRhc2hib2FyZCBidWlsdCB3aXRoIGdyaWQgYW5kIGZsZXhib3guJywgJ2FkbWluLWRhc2hib2FyZCcpKTtcblxuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KCdNeSBXZWJzaXRlJywgJ1NvdXJjZSBmaWxlcyBmb3IgdGhpcyBhd2Vzb21lIHdlYnNpdGUuJywgJ2RhdGEtc2FuZGJveC5naXRodWIuaW8nKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0cyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmxvYWRQcm9qZWN0cygpO1xuXG4vLyBOYXYgaGFtYnVyZ2VyIHNlbGVjdGlvbnNcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFtYnVyZ2VyXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IHVsXCIpO1xuY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtaWNvblwiKTtcbmNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtaWNvblwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB1bC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgY2xvc2VJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbn0pO1xuXG4vLyBDbG9zZSBoYW1idXJnZXIgbWVudSB3aGVuIGEgbGluayBpcyBjbGlja2VkIG9yIGNsaWNrIG91dHNpZGUgbWVudVxuY29uc3QgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIik7XG5cbm5hdkxpbmsuZm9yRWFjaCgobGluaykgPT5cbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgfSlcbik7XG5cbmZ1bmN0aW9uIGhhbmRsZU91dHNpZGVDbGljayhlKSB7XG4gIGlmICh1bC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSAmJiBlLnRhcmdldC5pZCAhPSAnbWVudS1pY29uJykge1xuICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU91dHNpZGVDbGljaykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=