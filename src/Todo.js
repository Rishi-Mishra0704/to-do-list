class Todo {
  constructor(description, complete = false) {
    this.description = description;
    this.complete = complete;
    this.index = Todo.list.length;
    Todo.list.push(this);
    this.getList = () => Todo.list;
  }

  update() {
    if (this.complete) {
      this.complete = false;
    } else {
      this.complete = true;
    }
  }
}
Todo.list = []; // Initialize the static list variable outside the class
export default Todo;