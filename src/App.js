import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); 
    setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className="app">
      <h1>Welcome to the Todo list</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        <button onClick={addTodo}>Add Todo</button>
      </form>
      <h2>Lists of Todos</h2>
      {todos.map((todos) => (
        <p>{todos}</p>
      ))}
    </div>
  );
}
export default App