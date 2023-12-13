export default function initScrollPagina() {
  const jsScroll = document.querySelectorAll(".js-scroll");
  function scrollSuave() {
    jsScroll.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const innerHeight = window.innerHeight * 0.6;
      const telaMetade = elementTop - innerHeight;
      if (telaMetade < 0) {
        element.classList.add("ativo");
      } else {
        element.classList.remove("ativo");
      }
    });
  }

  scrollSuave();

  window.addEventListener("scroll", scrollSuave);
}
