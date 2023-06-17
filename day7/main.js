const inputEl = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn");
const todoBlock = document.querySelector(".todo-block");

if (!localStorage.getItem("myTodoList")) {
  localStorage.setItem("myTodoList", "[]");
}

let todoList = JSON.parse(localStorage.getItem("myTodoList"));
let todoId = 0;

console.log(todoList);

const getTodo = () => {
  let todo = { value: `${inputEl.value}`, id: `${todoId}` };
  todoList.push(todo);
  todoId++;
  localStorage.setItem("myTodoList", JSON.stringify(todoList));
};

const renderTodoList = (todoList) => {
  const htmls = todoList.map(
    (todo) =>
      `<li class="todo"><p class="todo-list">${todo.value}</p>
      <span class="material-symbols-outlined" onclick="removeTodo(${todo.id})">
        delete
        </span></li>`
  );
  const html = htmls.join("");
  todoBlock.innerHTML = html;
};

const addClass = () => {
  const todoEl = document.querySelectorAll(".todo");
  todoEl.forEach((el) => {
    el.onclick = (e) => {
      el.querySelector(".todo-list").classList.toggle("clicked");
    };
  });
};

const removeTodo = (id) => {
  const todoId = todoList.map((todo, index) => {
    console.log(index);
  });

  const todoDelete = todoList.find((todo, index) => {
    if (index === id) {
      return todo;
    }
  });

  todoList = todoList.filter((todo) => todo !== todoDelete);
  todoList.forEach((todo, index) => (todo.id = index));
  renderTodoList(todoList);
  console.log(todoList);

  localStorage.setItem("myTodoList", JSON.stringify(todoList));
  addClass();
};

inputEl.onkeydown = (e) => {
  if (e.which === 13) {
    if (inputEl.value !== "") {
      getTodo();
      renderTodoList(todoList);
      addClass();
      inputEl.value = "";
      inputEl.classList.add("bbr");
      todoList.forEach((todo, index) => (todo.id = index));
    }
  }
};

addBtn.onclick = (e) => {
  if (inputEl.value !== "") {
    getTodo();
    renderTodoList(todoList);
    addClass();
    inputEl.value = "";
    inputEl.classList.add("bbr");
    todoList.forEach((todo, index) => (todo.id = index));
    console.log(todoList);
  }
};

renderTodoList(todoList);
addClass();

// localStorage.removeItem("myTodoList");
