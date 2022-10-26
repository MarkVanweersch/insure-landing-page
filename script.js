const mobileMenuImg = document.getElementById("mobile-menu-img");
const navMobile = document.getElementById("nav-mobile");
const mainWrapper = document.getElementById("main-wrapper");


mobileMenuImg.addEventListener("click", showNavMobile);

function showNavMobile() {
  navMobile.classList.toggle("hidden");
  mainWrapper.classList.toggle("hidden");
  if (mobileMenuImg.src.includes("hamburger")) {
    console.log("Has hamburger");
    mobileMenuImg.src = "./images/icon-close.svg";
  } else {
    mobileMenuImg.src = "./images/icon-hamburger.svg";
  }
}