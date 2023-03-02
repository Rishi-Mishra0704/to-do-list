/*eslint-disable */
import { Todo } from "./Todo.js";


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
          <button type = "button">&CircleTimes;</button>
          `;
    todoList.appendChild(listItem);
    const checkbox = listItem.querySelector("input");
  const text = listItem.querySelector("span");
  const textInput = listItem.querySelector("textarea");
  const deleteButton = listItem.querySelector("img");
  checkbox.addEventListener("change", () => {
    const index = parseInt(listItem.id, 10);
    Todo.list[index].update();
    text.classList.toggle("complete");
    textInput.classList.toggle("complete");
    localStorage.setItem("todoList", JSON.stringify(Todo.list));
  });
  textInput.addEventListener("click", () => {
    text.style.display = "none";
    textInput.classList.toggle("edit-item");
  });
  textInput.addEventListener("keydown", (e) => {
    text.innerHTML = textInput.value;

    const index = parseInt(listItem.id, 10);
    Todo.list[index].description = text.innerHTML;

    localStorage.setItem("todoList", JSON.stringify(Todo.list));

    if (e.code === "Enter") {
      text.style.display = "block";
      textInput.classList.toggle("edit-item");
    }
  });
  image.addEventListener("click", () => {
    const index = parseInt(listItem.id, 10);
    Todo.list = Todo.list.filter((item) => item !== Todo.list[index]);
    Todo.list.forEach((item, i) => { item.index = i; });
    localStorage.setItem("todoList", JSON.stringify(Todo.list));
    populateList();
  });
  if (item.complete) {
    checkbox.checked = true;
    text.classList = "complete";
  }
  });
};
export function add(e) {
  if (e.code === "Enter") {
    // Create new item
    const newItem = new Todo(this.value, false);

    // Update local storage
    localStorage.setItem("todoList", JSON.stringify(newItem.getList()));

    // Update UI
    this.value = "";
    fillList();
  }
}
