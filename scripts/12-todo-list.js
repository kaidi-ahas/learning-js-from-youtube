const savedTodoList = localStorage.getItem('todoList');
const todoList = JSON.parse(savedTodoList) || [];

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button 
        class="delete-todo-btn js-delete-todo-btn"
        data-index="${index}"
      >Delete</button>
`; // Generating the HTML
    
      todoListHTML += html;
  })

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-btn')
    .forEach((deleteBtn, index) => {
      deleteBtn.addEventListener('click', (event) => {
        const indexToRemove = event.target.getAttribute('data-index');
        todoList.splice(indexToRemove, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        renderTodoList();
      })
    });
  
}

renderTodoList();

const addBtnElement = document.querySelector('.js-add-btn')
  .addEventListener('click', () => {
    addToTodo();
  })

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

  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
}

const calculateWithEnterKey = (event) => event.key === 'Enter' && addToTodo();