import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';
import { deleteTodoFromDb, toggleTodoInDb } from '../lib/db.js';

const TodoItem = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const toggleTodo = async () => {
    setCompleted(!completed);
    await toggleTodoInDb(todo.id);
  };

  const deleteTodo = async () => {
    await deleteTodoFromDb(todo.id);
  };

  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleTodo}
      />
      <p className={completed ? styles.completed : ''}>{todo.task}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;