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
  if (inputText.value === "") {
    alert("Please enter task name!");
  } else {
    div.innerHTML =
      inputText.value +
      ` <button class="edit-btn btn ">
  <i class="bi bi-pencil-square"></i>
</button> 
       <button class="delete-btn btn">
  <i class="bi bi-x-circle"></i>
  </button>`;
    document.getElementById("task-container").appendChild(div);

    inputText.value = "";
  }
}

var thatsIt = document.querySelector(".confirmation-button");
thatsIt.addEventListener("click", () => {
  let container = document.getElementById("task-container");
  container.innerHTML = "";
});
