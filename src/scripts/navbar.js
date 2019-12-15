// Adds accordion functionality to the navbar
// for mobile users
window.onload = () => {
  const accordionButton = document.querySelector("#menu_btn");

  accordionButton.addEventListener("click", function(e) {
    e.preventDefault();
    const panel = this.nextElementSibling;
    if (panel.classList.contains("opened")) {
      panel.classList.remove("opened");
      accordionButton.classList.remove("active");
    } else {
      panel.classList.add("opened");
      accordionButton.classList.add("active");
    }
  });
};
