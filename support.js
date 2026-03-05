// 🔹 EmailJS Init (PUBLIC KEY)
(function(){
  emailjs.init("jyq5Ymn6ZbFHT5JqI"); 
})();

// 🔹 BACK BUTTON
function goBack(){
  window.history.back();
}

// 🔹 SEND MESSAGE
function sendMessage(){

  const msg = document.getElementById("message").value.trim();

  if(msg === ""){
    alert("Please write your message");
    return;
  }

  emailjs.send(
    "service_5cluwss",     // ✅ Support Service ID
    "template_71zq94n",    // ✅ Template ID
    {
      message: msg
    }
  )
  .then(() => {
    alert("Message sent to support team ✅");
    document.getElementById("message").value = "";
  })
  .catch(error => {
    alert("Failed to send message ❌");
    console.error("EmailJS Error:", error);
  });
}
