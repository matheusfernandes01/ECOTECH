const low = document.querySelector(".indicar");

low.addEventListener("click", () => {
  window.scroll({ top: window.innerHeight, behavior: "smooth" });
});
