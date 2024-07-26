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
    if (
      currentVisibleContent &&
      !event.target.closest(".main__navigation") &&
      !event.target.closest(".lang-btn") &&
      !event.target.closest("#eng-content")
    ) {
      currentVisibleContent.classList.add("hidden");
      currentVisibleContent = null;
    }
  });

  const langBtn = document.querySelector(".lang-btn");
  langBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    const engContent = document.getElementById("eng-content");

    if (currentVisibleContent && currentVisibleContent !== engContent) {
      currentVisibleContent.classList.add("hidden");
    }

    if (engContent.classList.contains("hidden")) {
      engContent.classList.remove("hidden");
      currentVisibleContent = engContent;
    } else {
      engContent.classList.add("hidden");
      currentVisibleContent = null;
    }
  });
}
