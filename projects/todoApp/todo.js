let todos = [];
function handleInput(event) {
  event.preventDefault();
  let input = document.getElementById("todo-input");
  let inputValue = input.value;
  if (inputValue.trim().length > 0) {
    todos.push(inputValue); // adding to array
    toRender(); //rendering function to render
    input.value = "";
  } else {
    alert("Please Fill the Input Field");
  }
}

function toRender() {
  var todoList = document.getElementById("todo-list");
  todoList.innerHTML = ""; // Clear existing list

  for (var i = 0; i < todos.length; i++) {
    var todoItem = document.createElement("li");
    todoItem.textContent = todos[i];
    todoList.appendChild(todoItem); //adding li element

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"; //addding delete button to li element;
    todoItem.appendChild(deleteButton);
  }
}

var todoList = document.getElementById("todo-list");
todoList.addEventListener("click", handleDelete);

function handleDelete(event) {
  if (event.target.nodeName === "BUTTON") {
    var todoItem = event.target.parentNode; // Get the parent li element
    var index = Array.from(todoItem.parentNode.children).indexOf(todoItem); // Get the index of the li element
    deleteTodo(index);
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  toRender();
}
