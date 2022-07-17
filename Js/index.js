const error = document.querySelector(".error");
const error2 = document.querySelector(".error2");
const input = document.querySelector("input");

//
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

send.addEventListener("click", (e) => {
  e.preventDefault();
  if (validate() === true) {
    error.parentNode.classList.remove("active");
    error2.parentNode.classList.remove("hide");
    input.style.border = "2px solid rgb(7, 163, 7)";
    thanks.parentNode.classList.add("display");
  } else if (validate() === 1) {
    error.parentNode.classList.remove("active");
    thanks.parentNode.classList.remove("display");
    error2.parentNode.classList.add("hide");
    input.style.border = "2px solid red";
  } else {
    input.style.border = "2px solid red";
    error.parentNode.classList.add("active");
    error2.parentNode.classList.remove("hide");
    thanks.parentNode.classList.remove("display");
  }
});
