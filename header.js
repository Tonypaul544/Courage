

const Navbar = document.getElementById("navbar");
const Hambuger = document.getElementById("hamboger");
document.addEventListener("DOMContentLoaded", function() {
  //check if user is an admin and hide the admin button if not
  const isAdmin = false; // Replace with actual admin check
  const adminButton = document.getElementById("admin-button");
  if (!isAdmin) {
    adminButton.style.display = "none";
  }
});

Hambuger.addEventListener("click", showNav);
function showNav(e) {
  e.preventDefault()
  Navbar.classList.toggle("show");
}
