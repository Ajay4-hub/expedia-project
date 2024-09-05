document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Registering user:", email, password);
    window.location.href = "signup-success.html"; // Redirect to the success page
  });
  