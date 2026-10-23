const headerButton = document.getElementsByClassName("header-btn")[0];
const footerStandort = document.getElementsByClassName("footer")[0];

headerButton.addEventListener("click", () => {
  footerStandort.scrollIntoView({ behavior: "smooth", block: "end" });
});

const header = document.getElementsByClassName("header")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const scrollUpButton = document.getElementsByClassName("scrollUp")[0];

scrollUpButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const prevButton = document.getElementsByClassName("slider-btn")[0];
const nextButton = document.getElementsByClassName("slider-btn")[1];
const sliderTrack = document.getElementsByClassName("slider-track")[0];
const slides = sliderTrack.children;
const counter = document.querySelector(".slider-controls span"); // ← nach oben
let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  sliderTrack.style.transform = `translateX(-${currentIndex * 300}px)`;
  counter.textContent = `(${currentIndex + 1}/${slides.length})`; // ← hier rein
});

prevButton.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  sliderTrack.style.transform = `translateX(-${currentIndex * 300}px)`;
  counter.textContent = `(${currentIndex + 1}/${slides.length})`; // ← und hier rein
});
