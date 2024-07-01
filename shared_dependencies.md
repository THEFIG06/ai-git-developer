1. Exported Variables:
   - `TodoList` from `components/TodoList.js`
   - `TodoItem` from `components/TodoItem.js`
   - `AddTodo` from `components/AddTodo.js`
   - `todos` from `lib/todo.js`
   - `db` from `lib/db.js`

2. Data Schemas:
   - `Todo` schema in `lib/db.js` which includes fields like `id`, `task`, `completed`

3. ID Names of DOM Elements:
   - `todo-input` in `components/AddTodo.js`
   - `todo-item` in `components/TodoItem.js`
   - `todo-list` in `components/TodoList.js`

4. Message Names:
   - `ADD_TODO` for adding a new todo
   - `DELETE_TODO` for deleting a todo
   - `TOGGLE_TODO` for marking a todo as completed or not

5. Function Names:
   - `addTodo` in `components/AddTodo.js`
   - `deleteTodo` in `components/TodoItem.js`
   - `toggleTodo` in `components/TodoItem.js`
   - `getTodos` in `lib/todo.js`
   - `addTodoToDb` in `lib/db.js`
   - `deleteTodoFromDb` in `lib/db.js`
   - `toggleTodoInDb` in `lib/db.js`

6. Shared Styles:
   - `globals.css` is shared across all pages and components
   - `TodoList.module.css` is used in `components/TodoList.js`
   - `TodoItem.module.css` is used in `components/TodoItem.js`
   - `AddTodo.module.css` is used in `components/AddTodo.js`