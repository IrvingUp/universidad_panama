// registro.js
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBJzZNbsXV-6Fm9yPd_dPbhqc6SA-U12s",
  authDomain: "parcial2-up.firebaseapp.com",
  projectId: "parcial2-up",
  storageBucket: "parcial2-up.firebasestorage.app", // <-- CORREGIDO
  messagingSenderId: "106779249426",
  appId: "1:106779249426:web:5f864582e91dc9da6341cb",
  measurementId: "G-FDC7L67VRX"
};

console.log("Inicializando Firebase...");
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registroForm = document.getElementById("registroForm");
console.log("registroForm:", registroForm);

registroForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Evento submit detectado");

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const mascota = document.getElementById("mascota").value;

  console.log("Datos capturados:", { nombre, telefono, email, password, mascota });

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario creado:", user.uid);

    await setDoc(doc(db, "usuarios", user.uid), {
      nombre,
      telefono,
      email,
      //mascotaPreferible: mascota
    });
    console.log("Datos guardados en Firestore");
    //alert("¡Registro exitoso! Serás redirigido al inicio.");
    window.location.href = "../../../index.html";
  } catch (error) {
    console.error("Error en el registro:", error);
    alert("Error al registrar: " + error.message);
  }
});


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

  //const email = document.getElementById("email").value;
  //const password = document.getElementById("password").value;
  //const nombre = document.getElementById("nombre").value;
  //const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  //const mascota = document.getElementById("mascota").value;


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("¡Usuario registrado con éxito!");
        window.location.href = "../../../index.html"; // Redirección
    })
    .catch((error) => {
        alert("Error al registrar: " + error.message);
    });

});*/

// registro.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDBJzZNbsXV-6Fm9yPd_dPbhqc6SA-U12s",
  authDomain: "parcial2-up.firebaseapp.com",
  projectId: "parcial2-up",
  storageBucket: "parcial2-up.appspot.com", // CORREGIDO para Firestore
  messagingSenderId: "106779249426",
  appId: "1:106779249426:web:5f864582e91dc9da6341cb",
  measurementId: "G-FDC7L67VRX"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Captura el formulario
const registroForm = document.getElementById("registroForm");

registroForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Captura los campos
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const mascota = document.getElementById("mascota").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // Crear usuario
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar datos adicionales en Firestore
    await setDoc(doc(db, "usuarios", user.uid), {
      nombre: nombre,
      telefono: telefono,
      mascota: mascota,
      email: email
    });

    alert("¡Registro exitoso!");
    window.location.href = "../../../index.html"; // Redirección
  } catch (error) {
    console.error("Error al registrar:", error);
    alert("Error al registrar: " + error.message);
  }
});

