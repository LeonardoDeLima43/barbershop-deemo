// ===== Header-Button: scrollt zum Kontakt im Footer =====
const headerButton = document.getElementsByClassName("header-btn")[0];
const footerStandort = document.getElementsByClassName("footer")[0];

headerButton.addEventListener("click", () => {
  footerStandort.scrollIntoView({ behavior: "smooth", block: "end" });
});

// ===== Header bekommt ab 50px Scroll einen dunklen Hintergrund =====
const header = document.getElementsByClassName("header")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===== Scroll-Up-Button im Footer =====
const scrollUpButton =document.getElementsByClassName("scrollUp")[0];

scrollUpButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Bild-Slider in der About-Section =====
// 300px Schrittweite = Bildbreite (280px) + gap (20px) aus style.css
const prevButton =document.getElementsByClassName("slider-btn")[0];
const nextButton = document.getElementsByClassName("slider-btn")[1];
const sliderTrack = document.getElementsByClassName("slider-track")[0];
const slides = sliderTrack.children;
const counter = document.querySelector(".slider-controls span"); // Zähler "(1/7)"
let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex++;

  // nach dem letzten Bild wieder von vorne
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  sliderTrack.style.transform = `translateX(-${currentIndex * 300}px)`;
  counter.textContent = `(${currentIndex + 1}/${slides.length})`;
});

prevButton.addEventListener("click", () => {
  currentIndex--;

  // vor dem ersten Bild zum letzten springen
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  sliderTrack.style.transform = `translateX(-${currentIndex * 300}px)`;
  counter.textContent = `(${currentIndex + 1}/${slides.length})`;
});

// ===== Review-Card (kommt noch) =====
