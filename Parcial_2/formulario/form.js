import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBJzZNbsXV-6Fm9yPd_dPbhqc6SA-U12s",
  authDomain: "parcial2-up.firebaseapp.com",
  projectId: "parcial2-up",
  storageBucket: "parcial2-up.appspot.com",
  messagingSenderId: "106779249426",
  appId: "1:106779249426:web:5f864582e91dc9da6341cb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById("formVisita");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;
  const primeraVez = form.primeraVez.value;
  const fechaVisita = document.getElementById("fechaVisita").value;

  try {
    await addDoc(collection(db, "solicitudesVisita"), {
      nombre,
      telefono,
      correo,
      direccion,
      primeraVez,
      fechaVisita,
      timestamp: new Date()
    });

    alert("¡Solicitud enviada con éxito!");
    form.reset();
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    alert("Hubo un error al enviar tu solicitud.");
  }
});
