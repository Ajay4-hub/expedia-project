document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Logging in user:", email, password);
    window.location.href = "dashboard.html"; // Redirect to dashboard
  });
  