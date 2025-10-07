document.querySelector("form").addEventListener("submit", check);

function check(event) {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const errors = [];

  if (email === "") {
    errors.push("Please enter your Email.");
  } else if (!isValidEmail(email)) {
    errors.push("Please enter a valid email address.");
  }

  displayErrors(errors);

  if (errors.length === 0) {
    document.querySelector("form").submit();
  }
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function displayErrors(errors) {
  const container = document.querySelector(".errors");
  container.innerHTML = "";
  if (errors.length > 0) {
    errors.forEach((error) => {
      container.innerHTML += `<div class="error">${error}</div>`;
    });
  }
}
