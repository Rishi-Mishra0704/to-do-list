/* eslint-disable no-unused-vars */

import Todo from './Todo.js';
import { add, fillList, deleteAll } from './add.js';
import './index.css';

// Window load
const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new Todo(item.description, item.complete));
}

// Add
const addInput = document.getElementById('add-input');
addInput.addEventListener('keydown', add);

// Delete all completed
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', deleteAll);
// Populate UI
fillList();