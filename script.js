// Java script for Navigation Toggle button

const mainNavbarToggle = document.querySelector(".main-navbar-toggle");
const mainNavbarMenu = document.querySelector(".main-navbar-menu");

mainNavbarToggle.addEventListener("click", () => {
    mainNavbarToggle.classList.toggle("active");
    mainNavbarMenu.classList.toggle("active");
});
