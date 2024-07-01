import { useState, useEffect } from 'react';
import Head from 'next/head';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import { getTodos } from '../lib/todo';
import '../styles/globals.css';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const todosFromServer = await getTodos();
      setTodos(todosFromServer);
    }
    fetchTodos();
  }, []);

  return (
    <div>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Todo App</h1>
        <AddTodo setTodos={setTodos} todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}