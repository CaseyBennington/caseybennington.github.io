(() => {
  const root = document.getElementById("casey-after-dark");
  const copy = {
    soccer: "Off-screen, on the pitch.",
    gaming: "Sometimes the next quest is more interesting than the main one.",
    travel: "A change of scenery is usually a good idea.",
  };
  root.querySelectorAll("[data-interest]").forEach((button) => {
    button.addEventListener("click", () => {
      root
        .querySelectorAll("[data-interest]")
        .forEach((other) =>
          other.setAttribute("aria-pressed", String(other === button)),
        );
      root.querySelector(".cb-interest").textContent =
        copy[button.dataset.interest];
    });
  });
})();
