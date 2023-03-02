/* eslint-disable*/

export class Todo {
   constructor(description,completed = false){
    this.description = description;
    this.completed = completed;
    this.index = Todo.list.length;
    Todo.list.push(this)
    this.getList = () => Todo.list;
   }
   update() {
    if (this.completed) {
      this.completed = false;
    } else {
      this.completed = true;
    }
  }
}
Todo.list = []