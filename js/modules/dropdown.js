export default function initDropDOwn() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");

  dropdownMenu.forEach((menu) => {
    ["touchstart", "click"].forEach((user) => {
      menu.addEventListener(user, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this, () => {
      this.classList.remove("ativo");
    });

    // Essa function que eu passei como parâmetro vai ser utilizada como callback, então é como se eu estivesse chamando ela lá embaixo
  }

  // Quando clicarmos no menu, essa function será criada, jutamente a ela será criado também a constante html e o evento respectivo
  function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    if (!element.hasAttribute(outside)) {
      html.addEventListener("click", handleOutsideClick);
      element.setAttribute(outside);
    }
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        html.removeEventListener("click", handleOutsideClick);
        callback();
      }
    }
  }
}
