document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  if (user === "") {
    alert("Please enter your email or phone number.");
    return;
  }

  if (pass === "") {
    alert("Please enter your password.");
    return;
  }

  if (pass.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert("You have successfully signed in!");
});
