const inputArea = document.getElementById("input-area");
const submitHandler = document.getElementById("submit-handler");

const todos = [];

let text = "";
inputArea.addEventListener("change", function (event) {
  text = event.target.value;
});

submitHandler.addEventListener("submit", function (event) {
  event.preventDefault();
  const todo = {
    id: new Date().getMilliseconds(),
    content: text,
    completed: false,
  };

  if (inputArea.value.trim() != "") {
    todos.push(todo);
    getTodos();
    inputArea.value = "";
  }
});

function getTodos() {
  let output = "";
  todos.forEach(function (value) {
    output += `<li>
            <label for="">
                <input type="checkbox" name="" onclick="completeHanlder(${
                  value.id
                })" ${value.completed && "checked"}>
                ${value.completed ? `<s>${value.content}</s>` : value.content}
            </label>
            <button type="button" onclick="deleteHandler(${
              value.id
            })">X</button>
        </li>`;
  });

  document.getElementById("todo_counts").innerHTML = todos.length;
  document.getElementById("todo_container").innerHTML = output;
}

function completeHanlder(id) {
  todos.find(function (todo) {
    if (todo.id == id) {
      todo.completed = todo.completed == true ? false : true;
      getTodos();
    }
  });
}

function deleteHandler(id) {
  todos.find(function (todo) {
    if (todo.id == id) {
      todos.splice(todos.indexOf(todo), 1);
      getTodos();
    }
  });
}