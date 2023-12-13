export default function initFaq() {
  const faqDt = document.querySelectorAll(".js-faq-dl dt");
  const faqDd = document.querySelectorAll(".js-faq-dl dd");
  const activeClass = "ativo";

  if (faqDd.length && faqDt.length) {
    faqDd[0].classList.add(activeClass);

    function handleFaq() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    faqDt.forEach((item) => {
      item.addEventListener("click", handleFaq);
    });
  }
}
