document.getElementById("it").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    Criar();
  }
});

// Carregar tarefas ao iniciar
window.onload = function () {
  carregarTarefas();
};

function Criar() {
  const input = document.getElementById("it");
  const tarefa = input.value.trim();

  if (tarefa === "") return;

  adicionarNaTela(tarefa);
  salvarTarefa(tarefa);
  input.value = "";
}

function adicionarNaTela(tarefa) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${tarefa}</span>
    <button onclick="removerDaTela(this)" class="del">❌</button>
  `;
  document.getElementById("list").appendChild(li);
}

function toggleComplete(span) {
  span.classList.toggle("completed");
}

// Remove do HTML e do localStorage
function removerDaTela(button) {
  const tarefa = button.parentElement.innerText.replace("❌", "").trim();
  removerTarefa(tarefa);
  button.parentElement.remove();
}

// === LocalStorage ===
function salvarTarefa(tarefa) {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function removerTarefa(tarefa) {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas = tarefas.filter(t => t !== tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.forEach(tarefa => adicionarNaTela(tarefa));
}

