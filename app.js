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
