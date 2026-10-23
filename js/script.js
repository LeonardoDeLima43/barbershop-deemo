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
