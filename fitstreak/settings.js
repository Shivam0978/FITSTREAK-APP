const phone = document.getElementById("phone");
const darkToggle = document.getElementById("darkToggle");

/* LOAD DARK MODE */
if (localStorage.getItem("darkMode") === "on") {
  phone.classList.add("dark");
  darkToggle.checked = true;
}

/* TOGGLE DARK MODE */
darkToggle.addEventListener("change", () => {
  if (darkToggle.checked) {
    phone.classList.add("dark");
    localStorage.setItem("darkMode", "on");
  } else {
    phone.classList.remove("dark");
    localStorage.setItem("darkMode", "off");
  }
});
// APPLY THEME ON EVERY PAGE LOAD
// window.addEventListener("DOMContentLoaded", () => {
//   if (localStorage.getItem("darkMode") === "on") {
//     document.body.classList.add("dark");
//   }
// });

// // GLOBAL FUNCTION
// function toggleDarkMode(isDark) {
//   if (isDark) {
//     document.body.classList.add("dark");
//     localStorage.setItem("darkMode", "on");
//   } else {
//     document.body.classList.remove("dark");
//     localStorage.setItem("darkMode", "off");
//   }
// }

/* LOGOUT */
function openLogout(){
  document.getElementById("logoutBox").style.display = "flex";
}

function closeLogout(){
  document.getElementById("logoutBox").style.display = "none";
}

function doLogout(){
  localStorage.clear();
  window.location.href = "login.html";
}
