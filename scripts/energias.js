// Energias
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
