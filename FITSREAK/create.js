// -------- SELECT ELEMENTS --------

const inputs = document.querySelectorAll(".input-box input");
const signupBtn = document.querySelector(".signup-btn");
const eyeIcon = document.querySelector(".fa-eye");
const backBtn = document.querySelector(".back");
const loginText = document.querySelector(".login-text span");

const nameInput = inputs[0];
const emailInput = inputs[1];
const passInput = inputs[2];
const confirmInput = inputs[3];


// -------- BACK TO LOGIN --------

backBtn.addEventListener("click", () => {
    window.location.href = "login.html"; // apna login file name yaha daalna
});

loginText.addEventListener("click", () => {
    window.location.href = "login.html";
});


// -------- SHOW / HIDE PASSWORD --------

eyeIcon.addEventListener("click", () => {
    if (passInput.type === "password") {
        passInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
});


// -------- SIGNUP VALIDATION --------

signupBtn.addEventListener("click", () => {

    if (
        nameInput.value === "" ||
        emailInput.value === "" ||
        passInput.value === "" ||
        confirmInput.value === ""
    ) {
        alert("Please fill all fields ❗");
        return;
    }

    if (!emailInput.value.includes("@")) {
        alert("Enter valid email ❗");
        return;
    }

    if (passInput.value.length < 6) {
        alert("Password must be at least 6 characters ❗");
        return;
    }

    if (passInput.value !== confirmInput.value) {
        alert("Passwords do not match ❗");
        return;
    }

    // -------- DEMO SUCCESS --------
    alert("Account Created Successfully 🎉 (Demo)");

    // Future: backend ke baad yaha API call hoga
    // abhi ke liye login page bhej do
    window.location.href = "login.html";
});