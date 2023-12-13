export default function toooltip() {
  // Selecionando todas as data-tooltip
  const tooltips = document.querySelectorAll("[data-tooltip]");

  // Loop para "logar" uma por uma e seu respectivo evento
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  // Function de callback
  function onMouseOver(event) {
    // O this nesse caso é o local por onde eu passo o mouse
    const tooltipBox = criarTooltipBox(this);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
  }

  const onMouseLeave = {
    // Essas definicões abaixo não são necessárias
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  // Function para criar a tooltip
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");

    // O element esta definido como parâmetro
    const text = element.getAttribute("aria-label");

    // Definindo o texto da div como a aria-label
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;

    // Aqui é o local onde a div que foi criada recentemente vai ser adicionada
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
