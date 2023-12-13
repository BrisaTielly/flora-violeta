export default function initTabNav() {
  const imagemUl = document.querySelectorAll(".js-img-ul li");
  const textJs = document.querySelectorAll(".js-text section");
  textJs[0].classList.add("ativo");

  if (imagemUl.length && textJs.length) {
    function tabEvent(index) {
      textJs.forEach((element) => {
        element.classList.remove("ativo");
      });
      const direction = textJs[index].dataset.anime;
      textJs[index].classList.add("ativo", direction);
    }

    imagemUl.forEach((imagem, teste) => {
      imagem.addEventListener("click", function () {
        tabEvent(teste);
      });
    });
  }
}
