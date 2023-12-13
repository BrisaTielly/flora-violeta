export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js a[href^="#"]');

  function scrollToPage(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const hrefInterno = document.querySelector(href);
    // const topo = hrefInterno.offsetTop;

    hrefInterno.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });

    // Mesma funcao porém não suportado em todos os browsers e precisa especificar a distância até o topo, enquanto a scrollintoview trás a section até a sua vista não importa de onde ela saiu
  }

  // A const href está selecionando o atributo específico em que eu clico, por exemplo #plantas, já o hrefInterno está procurando no DOM a id correspondente ao atributo href selecionado (#plantas)

  linksInternos.forEach((element) => {
    element.addEventListener("click", scrollToPage);
  });
}
