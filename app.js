//UI VARIABLES
const form = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('collection');
const clearBtn = document.getElementById('clear-btn');
const filter = document.getElementById('filter');


//LOAD ALL EVENT LISTENERES
const loadEventListeners = () => {
  //ADD TASK EVENT
  form.addEventListener('submit', addTask)

  //REMOVE TASKS FROM LIST
  taskList.addEventListener('click', removeTask )

  //CLEAR ALL TASKS
  clearBtn.addEventListener('click', clearTasks)

  //FILTER TASKS
  filter.addEventListener('keyup', filterTasks)
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

  //CLEAR INPUT
  taskInput.value = '';
  
  e.preventDefault();
}


//REMOVE TASK FUNCTION
const removeTask = (e) => {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure you want to delte this task?')){e.target.parentElement.parentElement.remove();
    }
  }
}

//CLEAR ALL TASKS FUNCTION
const clearTasks = (e) => {
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}



loadEventListeners();
