import './style.scss';
import {
  AddToDoList,
  setTasks,
  showTasks,
  GetToDoList,
  updateLocalStorage,
} from './modules/AddToDoItems.js';
import { clearAllCompletedTasks } from './modules/Completed.js';

const newTodolistInput = document.querySelector('#add-to-do > input');
const addTaskButton = document.querySelector('#add-task-button');
const clearCompletedTasksButton = document.querySelector('#btn-Clear-completed-todos');

newTodolistInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    AddToDoList(newTodolistInput);
    showTasks();
  }
});

addTaskButton.addEventListener('click', () => {
  AddToDoList(newTodolistInput);
  showTasks();
});

clearCompletedTasksButton.addEventListener('click', () => {
  setTasks(clearAllCompletedTasks(GetToDoList()));
  updateLocalStorage();
  showTasks();
});

setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
showTasks();
