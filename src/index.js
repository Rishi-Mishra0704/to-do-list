/* eslint-disable no-unused-vars */
import { fillList, add } from './add.js';
import './index.css';
import { Todo } from './Todo.js';

const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new Todo(item.description, item.complete));
}
const addInput = document.getElementById('add-input');
addInput.addEventListener('keydown', add);
fillList();