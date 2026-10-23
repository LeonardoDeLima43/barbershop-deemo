const headerButton = document.getElementsByClassName("header-btn")[0];
const footerStandort = document.getElementsByClassName("footer")[0];

headerButton.addEventListener("click", () => {
  footerStandort.scrollIntoView({ behavior: "smooth", block: "end" });
});
