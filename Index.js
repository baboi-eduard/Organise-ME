var inputText = document.querySelector(".the-new-task");
inputText.addEventListener("keypress", function (submit) {
  if (submit.key === "Enter") {
    submit.preventDefault();
    document.getElementById("add-tsk-btn").click();
  }
});

function addTask() {
  const div = document.createElement("div");

  div.className = "confirmed-task";

  div.innerHTML =
    inputText.value +
    ` <button class="edit-btn btn ">
  <i class="bi bi-pencil-square"></i>
</button>`;
  document.getElementById("task-container").appendChild(div);

  inputText.value = "";
}
