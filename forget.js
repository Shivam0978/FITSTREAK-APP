function sendCode(){

  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg");

  if(email === ""){
    msg.style.color = "red";
    msg.innerText = "Please enter your email!";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Reset code sent to your email ✔";

  document.getElementById("email").value = "";
}