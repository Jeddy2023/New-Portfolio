const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


var scrolltotop = document.querySelector(".scrollToTop");
console.log(scrolltotop)

let calc = () => {
  let pos = document.documentElement.scrollTop || document.body.scrollTop;

  let calcH = document.documentElement.clientHeight - document.body.clientHeight;

  // let percentVal = Math.round((Math.floor(pos) * 100) / calcH);
  let percentVal = Math.abs(Math.round((Math.floor(pos) * 100) / calcH));
  console.log(calcH)
  console.log(percentVal)

  if (pos > 100) {
    scrolltotop.style.display = "flex";
  } else {
    scrolltotop.style.display = "none";
  }

  scrolltotop.style.background = `conic-gradient(white ${percentVal}%, grey ${percentVal}%)`;
};

scrolltotop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

window.onscroll = calc;
window.onload = calc;



const cursorDot = document.querySelector(".cursor-dot")
const cursorOutline = document.querySelector(".cursor-outline")

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  setTimeout(() => {
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
  }, 100);

})