
export function initializeAccordion() {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach((accordion) => {
      const btn = accordion.querySelector('.acc-toggle');
      btn.addEventListener('click', () => {
        accordion.classList.toggle('active');
      });
    });
  }
  