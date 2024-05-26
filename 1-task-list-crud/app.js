const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const collection = document.querySelector(".collection");
const clearTaskBTN = document.querySelector(".clear-tasks");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = taskInput.value;
  if (!inputValue) {
    alert("please Fill the Input Value");
    return;
  }

  const createElementLi = document.createElement("li");
  createElementLi.classList = "collection-item";
  createElementLi.innerHTML = `${inputValue}<a href="#" class="delete-item secondary-content">
                              <i class="fa fa-remove"></i>
                            </a>`;
  collection.appendChild(createElementLi);
  taskInput.value = "";
  saveAllTasksOnLocalStorage(); 
});

clearTaskBTN.addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("Are you sure ?")) {
    collection.innerHTML = "";
  }
});

collection.addEventListener("click", function (event) {
  event.preventDefault();

  const currentElement = event.target;
  console.log(currentElement);
  if (currentElement.className === "fa fa-remove") {
    if (confirm("are you sure ? ")) {
      currentElement.parentElement.parentElement.remove();
    }
  }
});



function saveAllTasksOnLocalStorage() {
  const selectAllCollectionItems =
    document.querySelectorAll(".collection-item");
  // console.log(selectAllCollectionItems, "selectAllCollectionItems");

  let tasks = [];
  selectAllCollectionItems.forEach(function (singleCollectionItem) {
    tasks.push(singleCollectionItem.innerText);
  });

  console.log(tasks, "tasks");

  localStorage.setItem("tasks", JSON.stringify(tasks));
}