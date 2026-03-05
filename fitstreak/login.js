function togglePassword(){
  const pass = document.getElementById("password");
  const eye = document.getElementById("eye");

  if(pass.type === "password"){
    pass.type = "text";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }else{
    pass.type = "password";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }
}

function login(){
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if(email === "" || password === ""){
    alert("Please enter Gmail and Password");
    return;
  }

  if(!email.endsWith("@gmail.com")){
    alert("Only Gmail allowed");
    return;
  }

  localStorage.setItem("loggedIn","true");
  localStorage.setItem("userEmail",email);

  alert("Login Successful ✅");
  window.location.href = "home.html";
}
