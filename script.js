const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#hamburger-menu");

// Toggle class active when menu is clicked
menu.onclick = (e) => {
  e.preventDefault(); // Prevent default link behavior
  navbarNav.classList.toggle("active");
};

// Close the sidebar when clicking on a menu item
const menuItems = document.querySelectorAll(".navbar-nav a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});
