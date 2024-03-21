const todoList = [{
  name: 'dance',
  dueDate: '17-03-2024'
}, {
  name: 'run',
  dueDate: '17-03-2024'
}];

function renderTodoList() {
  let todoListHTML = '';
  for (let i=0; i<todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button 
        class="delete-todo-btn"
        onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        "
        >Delete</button>
`; // Generating the HTML
    
      todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

renderTodoList();

function addToTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}

const calculateWithEnterKey = (event) => event.key === 'Enter' && addToTodo();