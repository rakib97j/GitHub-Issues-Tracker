const signinBtn = document.getElementById("signinBtn");
signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userNameValue = document.getElementById("username").value;
  const passwordValue = document.getElementById("password").value;

  if (!userNameValue || !passwordValue) {
    alert("please provide username and password");
  } else if (userNameValue === "admin" && passwordValue === "admin123") {
    alert("Sign In Success");
    window.location.href = "./home.html";
  } else {
    alert("Invalid email or password");
  }
});
