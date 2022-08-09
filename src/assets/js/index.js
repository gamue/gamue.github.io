document.addEventListener("DOMContentLoaded", function () {
  initBurgerMenu();
  initNavDropdown();
});

function initBurgerMenu() {
  let navButton = document.getElementById("navbarBtn");
  let navMenu = document.getElementById("navbarMenu");

  navButton.addEventListener("click", function () {
    navMenu.classList.toggle("hidden");
  });
}

function initNavDropdown() {
  const dropdownBtns = document.querySelectorAll(".navToggle");
  dropdownBtns.forEach(function (dropdownBtn) {
    dropdownBtn.addEventListener("click", function (event) {
      const targetBtn = event.target;
      const navItem = targetBtn.closest(".navbarItem");
      const drop = navItem.querySelector(".dropdownContent");
      drop.classList.toggle("block");
    });
  });
}
