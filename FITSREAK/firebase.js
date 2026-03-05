// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAGzWQPulyW3NnsnZZ-AwKMuhS83pkCjMk",
    authDomain: "fitstreak-e059b.firebaseapp.com",
    projectId: "fitstreak-e059b",
    storageBucket: "fitstreak-e059b.firebasestorage.app",
    messagingSenderId: "949565187136",
    appId: "1:949565187136:web:c57ad23cf79b66edeb2ba5",
    measurementId: "G-T3MTPY5Y9N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //inputs
  const email = document.getElementById('email').ariaValueMax;
  const password = document.getElementById('password').ariaValueMax;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Login Successful ✅");
  window.location.href = "home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

