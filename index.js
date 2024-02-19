// Selecting elements
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
const scrolltotop = document.querySelector(".scrollToTop");
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const loader = document.getElementById('preloader');

// Function to handle header and go top button visibility on scroll
function handleScroll() {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
}

// Function to handle scroll to top button visibility and background color
function handleScrollToTop() {
  let pos = document.documentElement.scrollTop || document.body.scrollTop;
  let calcH = document.documentElement.clientHeight - document.body.clientHeight;
  let percentVal = Math.abs(Math.round((Math.floor(pos) * 100) / calcH));

  if (pos > 100) {
    scrolltotop.style.display = "flex";
  } else {
    scrolltotop.style.display = "none";
  }

  scrolltotop.style.background = `conic-gradient(grey ${percentVal}%, white ${percentVal}%)`;
}

// Function to scroll to top when the scroll to top button is clicked
scrolltotop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

// Function to handle cursor movement
function handleCursorMovement(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  setTimeout(() => {
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
  }, 100);
}

// Function to hide loader after window load
function hideLoader() {
  loader.style.display = "none";
}



// Selecting elements
const themeBtn = document.querySelector("nav .theme-icon");
const body = document.body;
let darkModeEnabled = localStorage.getItem('darkmode');

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add("dark-theme");
  localStorage.setItem('darkmode', 'enabled');
  darkModeEnabled = true;
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove("dark-theme");
  localStorage.removeItem('darkmode');
  darkModeEnabled = false;
}

// Toggle dark mode
function toggleDarkMode() {
  if (darkModeEnabled) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// Event listener for theme toggle button
themeBtn.addEventListener('click', () => {
  toggleDarkMode();
  themeBtn.classList.toggle("dark", darkModeEnabled);
});

// Set initial theme on page load
window.addEventListener('DOMContentLoaded', () => {
  if (darkModeEnabled) {
    enableDarkMode();
    themeBtn.classList.add("dark");
  }
});


// Event listeners
window.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", handleScrollToTop);
window.addEventListener("mousemove", handleCursorMovement);
window.addEventListener("load", hideLoader);

// if (lightMode !== "enabled") {
//   enableLightMode()
// }

// themeBtn.addEventListener('click', () => {
//   themeBtn.classList.toggle("dark")
//   lightMode = localStorage.getItem('lightMode')
//   if (lightMode !== "enabled") {
//     enableLightMode()
//   } else {
//     disableLightMode()
//   }
// })





// let darkModeStorage = localStorage.getItem('darkmode')
// const themeBtn = document.querySelector("nav .theme-icon")
// console.log(themeBtn)