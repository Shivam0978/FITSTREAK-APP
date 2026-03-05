const imgInput = document.getElementById("imgInput");
const profileImg = document.getElementById("profileImg");
const imageMenu = document.getElementById("imageMenu");

function focusInput(id){
  document.getElementById(id).focus();
}

function toggleMenu(){
  imageMenu.style.display =
    imageMenu.style.display === "flex" ? "none" : "flex";
}

function pickImage(){
  imgInput.click();
  imageMenu.style.display = "none";
}

imgInput.onchange = () =>{
  const file = imgInput.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = () =>{
    profileImg.src = reader.result;
    localStorage.setItem("profileImg", reader.result);
  };
  reader.readAsDataURL(file);
};

function removeImage(){
  profileImg.src = "";
  localStorage.removeItem("profileImg");
  imageMenu.style.display = "none";
}

function saveProfile(){
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value;

  if(name === ""){
    alert("Name required");
    return;
  }
  if(!email.endsWith("@gmail.com")){
    alert("Only @gmail.com allowed");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("dob", dob);

  alert("Profile updated successfully ✅");
}

function loadProfile(){
  if(localStorage.getItem("name"))
    document.getElementById("name").value = localStorage.getItem("name");

  if(localStorage.getItem("email"))
    document.getElementById("email").value = localStorage.getItem("email");

  if(localStorage.getItem("dob"))
    document.getElementById("dob").value = localStorage.getItem("dob");

  if(localStorage.getItem("profileImg"))
    profileImg.src = localStorage.getItem("profileImg");
}

loadProfile();
