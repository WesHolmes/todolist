import { useState } from 'react';
import TodoList from './Todolist';

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'Meet Masao for Udon'},
    {id: 2, content: 'Fix up these horrible React notes'},
  ]);
  return (
    <div>
      <h1>My Tasks</h1>
      <TodoList todos={todos} />

    </div>
  );
}