// For demonstration purposes only -- replace with actual backend authentication for production!
const DEMO_USER = {
    email: "student1@example.com",
    password: "password123"
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Simulated login check
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMessage").textContent = "Invalid email or password.";
    }
});
