import { db } from './db';

export async function getTodos() {
  const todos = await db.collection('todos').get();
  return todos.docs.map(doc => doc.data());
}

export async function addTodoToDb(todo) {
  const newTodo = await db.collection('todos').add(todo);
  return newTodo.id;
}

export async function deleteTodoFromDb(id) {
  await db.collection('todos').doc(id).delete();
}

export async function toggleTodoInDb(id, completed) {
  await db.collection('todos').doc(id).update({ completed });
}