document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");

  let nameInput = document.getElementById('name');
  let nameErr = document.getElementById('nameErr');

  let email = document.getElementById('email');
  let emailErr = document.getElementById('emailErr');

  let age = document.getElementById('age');
  let ageErr = document.getElementById('ageErr');

  let feedback = document.getElementById('feedback');
  let feedbackErr = document.getElementById('feedbackErr');

  let comment = document.getElementById('comment');
  let commentErr = document.getElementById('commentErr');

  nameInput.addEventListener('blur', function (event) {
    if (event.target.value === "") {
      nameErr.textContent = "Required*";
      nameErr.style.color = "red";
    } else {
      nameErr.textContent = "";
    }
  });

  email.addEventListener('blur', function (event) {
    if (event.target.value === "") {
      emailErr.textContent = "Required*";
      emailErr.style.color = "red";
    } else if (!event.target.value.includes("@")) {
      emailErr.textContent = "Invalid email*";
      emailErr.style.color = "red";
    } else {
      emailErr.textContent = "";
    }
  });

  age.addEventListener('blur', function (event) {
    let value = event.target.value.trim();
    if (value === "") {
      ageErr.textContent = "Required*";
      ageErr.style.color = "red";
    } else if (isNaN(value) || value <= 0) {
      ageErr.textContent = "Please enter a valid age*";
      ageErr.style.color = "red";
    } else {
      ageErr.textContent = "";
    }
  });

  feedback.addEventListener('blur', function (event) {
    if (event.target.value === "") {
      feedbackErr.textContent = "Please select a feedback type*";
      feedbackErr.style.color = "red";
    } else {
      feedbackErr.textContent = "";
    }
  });

  comment.addEventListener('blur', function (event) {
    if (event.target.value.length > 0 && event.target.value.length < 5) {
      commentErr.textContent = "Please write at least 5 characters*";
      commentErr.style.color = "red";
    } else {
      commentErr.textContent = "";
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    if (nameInput.value.trim() === "") nameErr.textContent = "Required*"; nameErr.style.color="Red";
    if (email.value.trim() === "") emailErr.textContent = "Required*";emailErr.style.color="Red";
    if (age.value.trim() === "") ageErr.textContent = "Required*";
    ageErr.style.color="Red";
    if (feedback.value === "") feedbackErr.textContent = "Please select a feedback type*";feedbackErr.style.color="Red";


    if (
      nameErr.textContent === "" &&
      emailErr.textContent === "" &&
      ageErr.textContent === "" &&
      feedbackErr.textContent === "" &&
      commentErr.textContent === ""
    ) {
      alert("Thank you for your feedback!");
      form.reset();
    }
  });
});
