
export function initializeAccordion() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    const btn = accordion.querySelector('.acc-toggle');
    btn.addEventListener('click', () => {
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.classList.remove('active');
        }
      });
      accordion.classList.toggle('active');
    });
  });
}
