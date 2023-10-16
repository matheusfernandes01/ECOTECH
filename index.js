const low = document.querySelector(".indicar");

low.addEventListener("click", () => {
  window.scroll({ top: window.innerHeight, behavior: "smooth" });
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".banner .content", { duration: 1500 });

const imagensEnergias = document.querySelectorAll(
  ".energias .container3 .imagens"
);

imagensEnergias.forEach((imagem) => {
  imagem.addEventListener("click", () => {
    imagem.classList.toggle("active");
  });
});

// Agricultura
const imagensAgricultura = document.querySelectorAll(
  ".agricultura .container4 .imagens2"
);

imagensAgricultura.forEach((imagem) => {
  imagem.addEventListener("click", () => {
    imagem.classList.toggle("active");
  });
});

// Saúde
const imagensSaude = document.querySelectorAll(".saude .container5 .imagens3");

imagensSaude.forEach((imagem) => {
  imagem.addEventListener("click", () => {
    imagem.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("rolagem", window.scrollY > 0);
});

function scrrolComplex(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}

function onclicklink(url) {
  window.open(url);
}

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
