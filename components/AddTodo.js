import { useState } from 'react';
import { addTodoToDb } from '../lib/db';
import styles from '../styles/AddTodo.module.css';

const AddTodo = () => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    await addTodoToDb(task);
    setTask('');
  };

  return (
    <form className={styles.addTodo} onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;