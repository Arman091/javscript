/*
// Select the first element with class "my-class"
const element = document.querySelector('.my-class');

// Select all elements with class "my-class"
const elements = document.querySelectorAll('.my-class');

// Select the element with ID "my-id"
const elementById = document.getElementById('my-id');

// Select all elements with class "my-class" within the element with ID "my-container"
const elementsInContainer = document.querySelectorAll('#my-container .my-class');

// Select all elements with the tag name "div"
const divElements = document.getElementsByTagName('div');
*/

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
    todoList.appendChild(todoItem);  //adding li element

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"; //addding delete button to li element

    todoItem.appendChild(deleteButton);
  }
}
