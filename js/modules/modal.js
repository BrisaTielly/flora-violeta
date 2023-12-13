export default function initModal() {
  const abrirModalButton = document.querySelector('[data-modal="abrirmodal"]');
  const fecharModalButton = document.querySelector(
    '[data-modal="fechar-modal"]'
  );
  const modalContainer = document.querySelector('[data-modal="container"]');

  if (abrirModalButton && fecharModalButton && modalContainer) {
    function abrirModal(event) {
      event.preventDefault();
      modalContainer.classList.add("ativo");
    }

    function fecharModal(event) {
      event.preventDefault();
      modalContainer.classList.remove("ativo");
    }

    function foraDoModal(event) {
      if (event.target === this) {
        fecharModal(event);
      }
    }

    abrirModalButton.addEventListener("click", abrirModal);
    fecharModalButton.addEventListener("click", fecharModal);
    modalContainer.addEventListener("click", foraDoModal);
  }
}
