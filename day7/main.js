const inputEl = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn");
const todoBlock = document.querySelector(".todo-block");

let todoList = JSON.parse(localStorage.getItem("myTodoList")) || [];

const generateId = () => {
  if (!todoList.length) {
    return 0;
  }
  return Math.max(...todoList.map(todo => todo.id)) + 1;
};

const getTodo = () => {
  const todoId = generateId();
  const todoName = inputEl.value;
  const todo = { id: todoId, name: todoName, isCompleted: false };
  return todo;
};

const renderTodoList = () => {
  if (!todoList.length) {
    inputEl.classList.remove("bbr");
  } else {
    inputEl.classList.add("bbr");
  }

  const htmls = todoList.map(
    (todo) =>
      `<li class="todo" onclick="markTodoAsCompleted(${todo.id})"><p class="todo-list ${todo.isCompleted ? 'clicked' : ''}">${todo.name}</p>
      <span class="material-symbols-outlined" onclick="removeTodo(${todo.id})">
        delete
      </span></li>`
  );
  const html = htmls.join("");
  todoBlock.innerHTML = html;
};

const clearInput = () => {
  inputEl.value = "";
}

const saveTodoToLocal = () => {
  localStorage.setItem("myTodoList", JSON.stringify(todoList));
}

const markTodoAsCompleted = (id) => {
  todoList = todoList.map((todo) => todo.id == id ? {...todo, isCompleted: !todo.isCompleted} : todo);
  renderTodoList();
  saveTodoToLocal();
};

const removeTodo = (id) => {
  todoList = todoList.filter((todo) => todo.id != id);
  renderTodoList();
  saveTodoToLocal();
};

const addTodo = () => {
  const todo = getTodo();
  todoList.push(todo);
  renderTodoList();
  saveTodoToLocal();
  clearInput();
};

inputEl.onkeydown = (e) => {
  if (e.which === 13) {
    if (inputEl.value !== "") {
      addTodo();
    }
  }
};

addBtn.onclick = (e) => {
  if (inputEl.value !== "") {
    addTodo();
  }
};

renderTodoList();
