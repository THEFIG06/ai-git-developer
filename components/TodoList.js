import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import styles from '../styles/TodoList.module.css';
import { getTodos } from '../lib/todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const todosFromServer = await getTodos();
      setTodos(todosFromServer);
    }
    fetchTodos();
  }, []);

  return (
    <div className={styles.todoList} id="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;