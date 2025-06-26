// login.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBJzZNbsXV-6Fm9yPd_dPbhqc6SA-U12s",
  authDomain: "parcial2-up.firebaseapp.com",
  projectId: "parcial2-up",
  storageBucket: "parcial2-up.firebasestorage.app",
  messagingSenderId: "106779249426",
  appId: "1:106779249426:web:5f864582e91dc9da6341cb",
  measurementId: "G-FDC7L67VRX"
};

// Inicializar Firebase y Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login al enviar formulario
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Inicio de sesión exitoso: " + user.email);
      // Redirige si deseas: window.location.href = "inicio.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
