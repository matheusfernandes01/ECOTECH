const imagens = document.querySelectorAll(".energias .container3 .imagens");

imagens.forEach((imagem) => {
  imagem.addEventListener("click", () => {
    imagem.classList.toggle("active");
  });
});
