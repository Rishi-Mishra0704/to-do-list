/*eslint-disable */
import { Todo } from "./Todo.js";
import deleteBtn from './delete.png'

export const fillList = () => {
  const todoList = document.getElementById('todo-list');
 
  Todo.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id',item.index)
    listItem.classList = "item-container";
    listItem.innerHTML = `
          <input class='checkbox' type='checkbox' name='' value=''>
          <span>${item.description}</span>
          <textarea class="text-area" maxlength="30">${item.description}</textarea>
          <img class="cancel-btn" src="${deleteBtn}">
          `;
    todoList.appendChild(listItem);
  });
};
