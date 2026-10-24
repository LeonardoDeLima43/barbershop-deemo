// ===== Header-Button: scrollt zum Kontakt im Footer =====
const headerButton = document.getElementsByClassName("header-btn")[0];
const footerStandort = document.getElementsByClassName("footer")[0];

headerButton.addEventListener("click", () => {
  footerStandort.scrollIntoView({ behavior: "smooth", block: "end" });
});

// ===== Burger-Menü (nur auf Tablet/Handy sichtbar) =====
const burgerButton = document.getElementsByClassName("burger-btn")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const burgerIcon = burgerButton.querySelector("i");
const navLinks = navbar.querySelectorAll("a");

function toggleMenu() {
  // toggle gibt zurück, ob die Klasse jetzt gesetzt ist
  const isOpen = navbar.classList.toggle("open");

  // Icon wechselt zwischen ☰ und ✕
  burgerIcon.classList.toggle("fa-bars", !isOpen);
  burgerIcon.classList.toggle("fa-xmark", isOpen);

  // für Screenreader
  burgerButton.setAttribute("aria-expanded", isOpen);
  burgerButton.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
}

burgerButton.addEventListener("click", toggleMenu);

// nach dem Klick auf einen Link das Menü wieder schließen
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("open")) {
      toggleMenu();
    }
  });
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
const scrollUpButton = document.getElementsByClassName("scrollUp")[0];

scrollUpButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Bild-Slider in der About-Section =====
// 300px Schrittweite = Bildbreite (280px) + gap (20px) aus style.css
const prevButton = document.getElementsByClassName("slider-btn")[0];
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

// ===== Review-Card =====
const bewertungen = [
  {
    name: "Dennis",
    text: "ich komme seit über fünf Jahren hierher und wurde noch nie enttäuscht. Die Barbiere sind talentiert, freundlich und kennen immer die neuesten Trends.",
  },
  {
    name: "Felix",
    text: "Fresh Fade, fresh Life! Bester Barber in der Stadt! 🔥 Der Fade sitzt auf den Millimeter, die Übergänge sind clean und der Service ist 10/10. Einmal hier gewesen, nie wieder woanders!",
  },
  {
    name: "Jason",
    text: "Mehr als nur ein Haarschnitt! Starke Atmosphäre, gute Musik und echte Barber-Kunst. 💈 Man merkt sofort, dass hier mit Leidenschaft gearbeitet wird. Bin mit einem komplett neuen Look rausgegangen! ",
  },
];

const review = document.getElementsByClassName("review")[0];
const reviewName = document.getElementsByClassName("review-name")[0];
const dots = document.getElementsByClassName("dot");
const prevReviewButton = document.getElementsByClassName("review-btn")[0];
const nextReviewButton = document.getElementsByClassName("review-btn")[1];

let reviewIndex = 0;

function showReview() {
  review.textContent = bewertungen[reviewIndex].text;
  reviewName.textContent = bewertungen[reviewIndex].name;
  prevReviewButton.disabled = reviewIndex === 0;
  nextReviewButton.disabled = reviewIndex === bewertungen.length - 1;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[reviewIndex].classList.add("active");
}

showReview();

nextReviewButton.addEventListener("click", () => {
  reviewIndex++;
  showReview();
});

prevReviewButton.addEventListener("click", () => {
  reviewIndex--;
  showReview();
});
