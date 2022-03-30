import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState(["Practice with React", "Watch React Videos"]);
  const [input, setInput] = useState("");

   const addTodo = (event) => {
     event.preventDefault();
     setTodos([...todos, input]);
     setInput("");
   }

   
  return (
    <div className="App">
      <input value={input} onChange={event=> setInput(event.target.value)}/>
      <button disabled={!input} onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
