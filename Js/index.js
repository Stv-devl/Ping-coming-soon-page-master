const error = document.querySelector(".error");
const input = document.querySelector("input");

//
function validate() {
  var mail = document.getElementById("email").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (mail.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

send.addEventListener("click", (e) => {
  e.preventDefault();
  if (validate() === true) {
    error.parentNode.classList.remove("active");
    alert("Thank you, we will come back to you soon");
  } else {
    error.parentNode.classList.add("active");
    input.parentNode.classList.add("active");
  }
});
