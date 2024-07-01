let todos = [];

const Todo = {
  id: String,
  task: String,
  completed: Boolean
};

function addTodoToDb(todo) {
  todos.push(todo);
}

function deleteTodoFromDb(id) {
  todos = todos.filter(todo => todo.id !== id);
}

function toggleTodoInDb(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
}

module.exports = {
  Todo,
  addTodoToDb,
  deleteTodoFromDb,
  toggleTodoInDb
};