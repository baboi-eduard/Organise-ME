function addTask() {
  const div = document.createElement("div");

  div.className = "confirmed-task";

  div.innerHTML = `
    <div class="container">
      <div class="task-name">Fa-ti patul</div>
      <div class="task-hour">8:00</div>
    </div>
    `;
  document.getElementById("task-container").appendChild(div);
}
