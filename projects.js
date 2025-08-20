
const project = document.querySelector(".projectItem");
const projectSubaheading = document.querySelector(".subheading");
const projectDesc = document.querySelector(".projectDesc");

const viewProject = document.querySelectorAll('.projectBTN');
viewProject.forEach(btn => {
  btn.addEventListener('click', function() {
    let projectResponce = document.querySelector(".projectResponce");
    projectResponce.innerHTML = "<p class='msg'>This project is currently under development. Please check back later for updates.</p>";
    projectResponce.style.display = "block";//make the responce visible.
    projectResponce.style.display = "block";
    projectResponce.style.textAlign = "center";
    //clear the responce after 3 second
    setTimeout(() => {
      projectResponce.style.display = "none";
      projectResponce.style.animation = "fadeout 1s"
    }, 3500)
  });
});


