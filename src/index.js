import './style.css';
// import '/assets/favicon/apple-touch-icon.png';
// import '/assets/favicon/favicon-32x32.png';
// import '/assets/favicon/favicon-16x16.png';
// import '/assets/favicon/favicon.ico';
// import '/assets/favicon/site.webmanifest';
import loadProjects from "./projects";
import loadImages from './images';

loadImages();
loadProjects();

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