function toggle(id, icon){
  let input = document.getElementById(id);

  if(input.type === "password"){
    input.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }else{
    input.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

function savePass(){
  let n = newp.value;
  let c = conf.value;

  if(n !== c){
    alert("New password and confirm password not match!");
  }else{
    alert("Password changed successfully ✅");
  }
}