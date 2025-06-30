import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDBJzZNbsXV-6Fm9yPd_dPbhqc6SA-U12s",
  authDomain: "parcial2-up.firebaseapp.com",
  projectId: "parcial2-up",
  appId: "1:106779249426:web:5f864582e91dc9da6341cb"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Elementos del DOM
const bienvenida = document.getElementById("bienvenida");
const linkLogin = document.getElementById("link-login");
const cerrarSesion = document.getElementById("cerrarSesion");
const btnVerMascotas = document.getElementById("btn-ver-mascotas");

// Detectar si el usuario está logueado
onAuthStateChanged(auth, (user) => {
  if (user) {
    const nombre = user.displayName || user.email.split('@')[0]; // ✅ Más confiable
    if (bienvenida) bienvenida.textContent = `👋 ¡Hola, ${nombre}!`;
    if (linkLogin) linkLogin.style.display = "none";
    if (cerrarSesion) cerrarSesion.style.display = "inline-block";
  } else {
    if (bienvenida) bienvenida.textContent = "";
    if (linkLogin) linkLogin.style.display = "inline-block";
    if (cerrarSesion) cerrarSesion.style.display = "none";
  }
});



// Cerrar sesión
cerrarSesion?.addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Has cerrado sesión.");
    location.reload();
  });
});

if (btnVerMascotas) {
  btnVerMascotas.addEventListener("click", (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      // Usuario logueado, ir a la página de adopta
      window.location.href = "Parcial_2/adopta/adopta.html";
    } else {
      // Usuario NO logueado, mostrar alerta con dos opciones
      if (confirm("Debes iniciar sesión para ver las mascotas disponibles.\n¿Deseas iniciar sesión ahora?")) {
        window.location.href = "Parcial_2/registro/registro.html";
      } // Si cancela, se queda en index.html
    }
  });
}

function toggleMenu() {
  const menu = document.querySelector('nav.menu');
  menu.classList.toggle('menu-activo');
}

window.toggleMenu = toggleMenu;
