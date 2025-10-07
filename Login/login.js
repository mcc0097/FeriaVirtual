document.querySelector("form").addEventListener("submit", check);

function check(event) {
  //only checks
  event.preventDefault();

  const login = document.querySelector("#login").value.trim();
  const password = document.querySelector("#password").value.trim();
  const errors = [];

  //validation

  const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (login === "") {
    errors.push("Username or email is required");
  } else if (login.includes("@") && !regExpEmail.test(login)) {
    errors.push("Invalid email format");
  } else {
    if (login.length < 3) {
      errors.push("Username must be at least 3 characters");
    }
  }
  if (password === "") {
    errors.push("Password is required"); //don't check pass now, must compare pass in server
  }
  if (errors.length > 0) {
    document.querySelector(".errors").innerHTML = "";
    errors.map(
      (error) =>
        (document.querySelector(
          ".errors"
        ).innerHTML += `<div class="error">${error}</div>`)
    );
  } else {
    document.querySelector("form").submit(); // Send values
  }
}
