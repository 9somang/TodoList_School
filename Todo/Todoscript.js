const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const ul = document.getElementById('todo-list');

let todos = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText.length === 0) {
    return;
  }
  const todo = {
    id: Date.now(),
    text: todoText,
    done: false
  };
  todos.push(todo);
  renderTodos();
  input.value = '';
});

function renderTodos() {
  ul.innerHTML = '';
  for (const todo of todos) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.done;
    checkbox.addEventListener('change', () => {
      todo.done = checkbox.checked;
      renderTodos();
    });
    const span = document.createElement('span');
    span.textContent = todo.text;
    span.contentEditable = 'true'; // 수정 가능하도록 속성 추가
    span.addEventListener('input', () => {
      todo.text = span.textContent;
    });
    const button = document.createElement('button');
    button.textContent = '삭제';
    button.addEventListener('click', () => {
      todos = todos.filter((t) => t.id !== todo.id);
      renderTodos();
    });


    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}