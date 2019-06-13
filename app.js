//UI VARIABLES
const form = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('collection');
const clearBtn = document.getElementById('clear-btn');
const filter = document.getElementById('filter');


//LOAD ALL EVENT LISTENERES
const loadEventListeners = () => {
  //DOM LOAD EVENT
  document.addEventListener('DOMContentLoaded', getTasks)
  
  //ADD TASK EVENT
  form.addEventListener('submit', addTask)

  //REMOVE TASKS FROM LIST
  taskList.addEventListener('click', removeTask )

  //CLEAR ALL TASKS
  clearBtn.addEventListener('click', clearTasks)

  //FILTER TASKS
  filter.addEventListener('keyup', filterTasks)
}

//GET TASKS FROM LOCAL STORAGE
const getTasks = () => {
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task) => {

  const li = document.createElement('li');
 
  li.className = 'collection-item';

  li.appendChild(document.createTextNode(task));

  const link = document.createElement('a');

  link.className = 'delete-item secondary-content';

  link.innerHTML = '<i class="fa fa-remove"></i>'

  li.appendChild(link); 

  taskList.appendChild(li);
  })
}


//ADD TASK FUNCTION
const addTask = (e) => {
  if(taskInput.value === ''){
    alert('Add a task!');
  }

  //CREATE LI ELEMENT
  const li = document.createElement('li');

  //ADD CLASS TO LI ELEMENT ADDED
  li.className = 'collection-item';

  //CREATE TEXT NODE AND APPEND TO LI
  li.appendChild(document.createTextNode(taskInput.value));

  //CREATE NEW LINK ELEMENT
  const link = document.createElement('a');

  //ADD CLASS TO LINK
  link.className = 'delete-item secondary-content';

  //ADD ICON FOR DELETE TASK
  link.innerHTML = '<i class="fa fa-remove"></i>'

  //APPEND TO LI ELEMENT
  li.appendChild(link); 

  //APPEND NEW LI ELEMENT TO UL
  taskList.appendChild(li);

  //LOCAL STORAGE
  storeTask(taskInput.value);

  //CLEAR INPUT
  taskInput.value = '';
  
  e.preventDefault();
}

//STORE TASK IN LOCAL STORAGE
const storeTask = (task) => {
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}



//REMOVE TASK FUNCTION
const removeTask = (e) => {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure you want to delte this task?')){e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//REMOVE FROM LOCAL STORAGE
const removeTaskFromLocalStorage = (taskItem) => {
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) =>{
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  })
localStorage.setItem('tasks', JSON.stringify(tasks));
}

//CLEAR ALL TASKS FUNCTION
const clearTasks = (e) => {
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  localStorage.clear();
}

//FILTER TASKS FUNCTION
const filterTasks = (e => {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
});


loadEventListeners();
