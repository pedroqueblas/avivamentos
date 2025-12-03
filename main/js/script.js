const form = document.getElementById("form");
const lista = document.getElementById("lista");

let dados = JSON.parse(localStorage.getItem("jantar-lista")) || [];

function atualizarLista() {
  lista.innerHTML = "";

  dados.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span><strong>${item.nome}</strong> — ${item.item}</span>
      <button class="remove-btn" onclick="remover(${index})">X</button>
    `;

    lista.appendChild(li);
  });

  localStorage.setItem("jantar-lista", JSON.stringify(dados));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const item = document.getElementById("item").value;

  dados.push({ nome, item });
  atualizarLista();

  form.reset();
});

function remover(i) {
  dados.splice(i, 1);
  atualizarLista();
}

atualizarLista();
