// registro.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBJzZNbsXV-6Fm9yPd_dPbhqc6SA-U12s",
  authDomain: "parcial2-up.firebaseapp.com",
  projectId: "parcial2-up",
  storageBucket: "parcial2-up.firebasestorage.app",
  messagingSenderId: "106779249426",
  appId: "1:106779249426:web:5f864582e91dc9da6341cb",
  measurementId: "G-FDC7L67VRX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registroForm = document.getElementById("registroForm");
registroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("¡Usuario registrado con éxito!");
        window.location.href = "index.html"; // Redirección
    })
    .catch((error) => {
        alert("Error al registrar: " + error.message);
    });

});


