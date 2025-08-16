

const Navbar = document.getElementById("navbar");
const Hambuger = document.getElementById("hamboger");

Hambuger.addEventListener("click", showNav);
function showNav(e) {
  e.preventDefault()
  Navbar.classList.toggle("show");
}
