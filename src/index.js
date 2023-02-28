/* eslint-disable no-unused-vars */
import css from './index.css';

const todoList = document.getElementById('todo-container');

const tasks = [
  {
    index: 1,
    description: 'Add list-structure to the project',
    completed: true,
  },
  {
    index: 2,
    description: 'put add-remove function to the project',
    completed: false,
  },
  {
    index: 3,
    description: 'make project interactive',
    completed: false,
  },
];
const fillList = () => {
  tasks.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <input class="checkbox" type="checkbox" name="" value="">
        <span>${item.description}</span>
        `;
    todoList.appendChild(listItem);
  });
};
fillList();