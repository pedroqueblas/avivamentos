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

async function carregar(){
  const query = await getDocs(collection(db,"itens"));
  const lista=document.getElementById('lista');
  lista.innerHTML="";
  query.forEach(doc=>{
    const d=doc.data();
    let li=document.createElement("li");
    li.textContent = d.nome + " — " + d.item;
    lista.appendChild(li);
  });
}

document.getElementById("form").addEventListener("submit",async e=>{
  e.preventDefault();
  const nome=document.getElementById("nome").value;
  const item=document.getElementById("item").value;

  await addDoc(collection(db,"itens"),{nome,item});
  carregar();
});

carregar();
