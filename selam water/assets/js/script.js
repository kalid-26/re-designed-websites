/* =====================================

Developed by Kalid Mohammed.
Fullstack Web Developer and Designer.

Version 0.1.0
2025(2017)

======================================== */

// ======== LENIS FOR SMOOTH SCROLLING ========
const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.0001 - Math.pow(2, -10 * t)),
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  // ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ========DARK AND LIGHT MODE ========

// let darkmode = localStorage.getItem("darkmode");
// const themeSwitch = document.querySelector("#themeSwitch");

// const enableDarkmode = () => {
//   document.body.classList.add("darkmode");
//   localStorage.setItem("darkmode", "active");
// };

// const disableDarkmode = () => {
//   document.body.classList.remove("darkmode");
//   localStorage.setItem("darkmode", null);
// };

// if (darkmode === "active") {
//   enableDarkmode();
// }

// themeSwitch.addEventListener("click", () => {
//   darkmode = localStorage.getItem("darkmode");
//   darkmode !== "active" ? enableDarkmode() : disableDarkmode();
// });


// // ======== NAVIGATION TOGGLER ========
// const menuIcon = document.querySelector("#navToggler");
// const menuLists = document.querySelector(".nav-menus");

// menuIcon.addEventListener("click", () => {
//   menuLists.classList.toggle("active");
// });




// ======== GSAP SCROLL ANIMATIONS ========
gsap.registerPlugin(ScrollTrigger);



