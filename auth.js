

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");
const SendMessage = document.getElementById("SendMessage");
const authTitle = document.getElementById("authTitle");
const responce = document.getElementById("responce");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

SendMessage.addEventListener("click", Respond);
function Respond(e) {
    // Validate form fields
    if (username.value.trim() === "") {
        nameError.style.display = "block";
        nameError.style.color = "red";
        nameError.innerHTML = "Please enter your full name.";
        username.focus();
        //remove the error message after 3 seconds
        setTimeout(() => {
          nameError.style.display = "none";
        }, 3000);
        return;
    }
    if (email.value.trim() === "") {
        emailError.style.display = "block";
        emailError.style.color = "red";
        emailError.innerHTML = "Please enter your email address.";
        email.focus();
        //remove the error message after 3 seconds
        setTimeout(() => {
          emailError.style.display = "none";
        }, 3000);
        return;
    }
    if (message.value.trim() === "") {
        messageError.style.display = "block";
        messageError.style.color = "red";
        messageError.innerHTML = "Please enter a message.";
        message.focus();
        //remove the error message after 3 seconds
        setTimeout(() => {
          messageError.style.display = "none";
        }, 3000);
        return;
    }
    // if (message.value.trim() === "") {
    //     alert("Please enter your message.");
    //     message.focus();
    //     return;
    // }

    // Collect form data
    const formData = {
        username: username.value,
        email: email.value,
        message: message.value
    };

    // Store data in localStorage
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("message", message.value);

    // Display response message
    responce.style.display = "block";
    responce.style.animation = "slideDown 1s";
    responce.style.backgroundColor = "aliceblue";
    responce.innerHTML = "Message sent successfully! Thank you for reaching out. I'll get back to you as soon as possible.";
    //reset the response message after 5 seconds
    setTimeout(() => {
      responce.style.animation = "slideOff 1s";
        setTimeout(() => {
          responce.style.animation = "fadeout 1s";
          setTimeout(() => {
            responce.style.display = "none";
          }, 800);
        }, 100);
      }, 2000);

    // Reset the form fields
  e.preventDefault();
  // localStorage.setItem("username", username.value);
  // localStorage.setItem("email", email.value);
  // localStorage.setItem("message", message.value);
    username.value = "";
    email.value = "";
    message.value = "";
    form.reset();

    setTimeout(() => {
      authTitle.innerHTML = "Fill out the form to get in touch with me!"
    }, 100);
}

  //check if the user has already submitted the form
if (localStorage.getItem("username") && localStorage.getItem("email")) {
    // Display the response message
    responce.style.display = "block";
    responce.style.animation = "slideDown 1s";
    responce.style.backgroundColor = "aliceblue";
    responce.innerHTML = "You have already submitted the form. Thank you for reaching out!";
    //reset the response message after 5 seconds
    setTimeout(() => {
      responce.style.animation = "slideOff 1s";
        setTimeout(() => {
          responce.style.animation = "fadeout 1s";
          setTimeout(() => {
            responce.style.display = "none";
          }, 800);
        }, 100);
      }, 5000);
  
    //check if the form fields are not empty
    // if (localStorage.getItem("username") !== "" && localStorage.getItem("email") !== "" && localStorage.getItem("message") !== "") {
    //     username.value = localStorage.getItem("username");
    //     email.value = localStorage.getItem("email");
    //     message.value = localStorage.getItem("message");
    // }
}

  // fetch("/submit", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(formData)
  // })
  // .then(response => {
  //   if (response.ok) {
  //     alert("Message sent successfully!");
  //     form.reset();
  //   } else {
  //     alert("Error sending message.");
  //   }
  // })
  // .catch(error => {
  //   console.error("Error:", error);
  //   alert("Error sending message.");
  // });










// const Navbar = document.getElementById("navbar");
// const Hambuger = document.getElementById("hamboger");

// Hambuger.addEventListener("click", showNav);
// function showNav(e) {
//   e.preventDefault()
//   Navbar.classList.toggle("show");
// }
