window.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const content = document.querySelector(".banner");
  const scrollUp = document.querySelector(".scroll-up");

  logo.addEventListener("click", (event) => {
    event.preventDefault();
    content.classList.add("hide");
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      scrollUp.classList.add("active");
    } else {
      scrollUp.classList.remove("active");
    }
  });

  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
