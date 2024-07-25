let currentVisibleContent = null;

export function setupNavigation() {
  document.querySelectorAll(".main__navigation-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (currentVisibleContent && currentVisibleContent !== targetElement) {
        currentVisibleContent.classList.add("hidden");
      }

      if (targetElement.classList.contains("hidden")) {
        targetElement.classList.remove("hidden");
        currentVisibleContent = targetElement;
      } else {
        targetElement.classList.add("hidden");
        currentVisibleContent = null;
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (currentVisibleContent && !event.target.closest(".main__navigation")) {
      currentVisibleContent.classList.add("hidden");
      currentVisibleContent = null;
    }
  });
}
