function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">🗑</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleComplete(span) {
  span.classList.toggle("completed");
}

function removeTask(button) {
  button.parentElement.remove();
}
