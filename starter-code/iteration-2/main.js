class Todo {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        return this.tasks.length;
    }
    ;
    listAllTasks() {
        this.tasks.forEach(e => {
            return e;
        });
    }
    deleteTask(task) {
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        return this.tasks.length;
    }
}
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
