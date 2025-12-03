import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7LGUjilFIRXzj8jECrbgODMkQmoOpzJw",
  authDomain: "avivamentos-53c6c.firebaseapp.com",
  projectId: "avivamentos-53c6c",
  storageBucket: "avivamentos-53c6c.firebasestorage.app",
  messagingSenderId: "94723879230",
  appId: "1:94723879230:web:de0dad5ba3b62f7d967c6f",
  measurementId: "G-B63PB5B60H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Carregar itens da coleção
async function carregar() {
  const querySnapshot = await getDocs(collection(db, "itens"));
  const lista = document.getElementById("lista");

  lista.innerHTML = ""; 

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    li.innerHTML = `<strong>${data.nome}</strong> — ${data.item}`;
    lista.appendChild(li);
  });
}

// Enviar dados
document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const item = document.getElementById("item").value;

  await addDoc(collection(db, "itens"), { nome, item });

  document.getElementById("form").reset();
  carregar();
});

// Carregar ao iniciar
carregar();
