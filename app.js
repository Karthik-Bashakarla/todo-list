//DOM Elements
const addTaskInput = document.querySelector(".addlist-input");
const addTaskButton = document.querySelector(".addlist-btn");
const tasksDiv = document.querySelector(".tasks-div");

//Event Listeners
addTaskButton.addEventListener("click", addTask);
tasksDiv.addEventListener("click", modifyTask);

//Functions
function addTask(e) {
  e.preventDefault();

  const taskDiv = document.createElement("div");
  const taskList = document.createElement("li");
  const checkButton = document.createElement("button");
  checkButton.innerHTML = "<i class='fas fa-check'></i>";
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-minus'></i>";

  taskDiv.classList.add("task-div");
  taskList.classList.add("task-list");
  checkButton.classList.add("check-btn");
  deleteButton.classList.add("delete-btn");

  taskList.innerText = addTaskInput.value;

  taskDiv.appendChild(taskList);
  taskDiv.appendChild(checkButton);
  taskDiv.appendChild(deleteButton);
  tasksDiv.appendChild(taskDiv);

  addTaskInput.value = "";
}

function modifyTask(e) {
  const item = e.target;
  const parent = item.parentElement;
  if (item.classList[0] === "delete-btn") {
    parent.remove();
  }
  if (item.classList[0] === "check-btn") {
    parent.firstChild.classList.toggle("completed");
  }
}
