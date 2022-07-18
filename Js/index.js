//variables
const error = document.querySelector(".error");
const error2 = document.querySelector(".error2");
const input = document.querySelector("input");

//validate Email, if email not good = true, if have nothing = 1, and if email is good false
function validate() {
  var mail = document.getElementById("email").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (mail.match(mailformat)) {
    return true;
  } else if (mail === "") return 1;
  else {
    return false;
  }
}
//that a Js DIY:) I guess we can do something cleaner... but its work.
// If email form is  good => we remove "active" and "hide" from CSS, the form have a green border, and we add the thank you message
send.addEventListener("click", (e) => {
  e.preventDefault();
  if (validate() === true) {
    error.parentNode.classList.remove("active");
    error2.parentNode.classList.remove("hide");
    input.style.border = "2px solid rgb(7, 163, 7)";
    thanks.parentNode.classList.add("display");
    // If email form is empty=> we remove "active" and "display" from CSS, the form have a red border, and we add the error2 message
  } else if (validate() === 1) {
    error.parentNode.classList.remove("active");
    thanks.parentNode.classList.remove("display");
    error2.parentNode.classList.add("hide");
    input.style.border = "2px solid red";
    // If email form is not fill good=> we add "active" from CSS, we remove "hide" and "display", the form have a red border, and we add the error message
  } else {
    input.style.border = "2px solid red";
    error.parentNode.classList.add("active");
    error2.parentNode.classList.remove("hide");
    thanks.parentNode.classList.remove("display");
  }
});
