import React, { useState, useRef } from "react";
import ToDoList from "./ToDoList";
// import uuidv4 from "uuid/v4";
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    console.log(name);
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random() * 100, name: name, complete: false },
      ];
    });
    console.log(todos);
    todoNameRef.current.value = null;
  }
  return (
    <>
      <ToDoList todos={todos} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button>Clear</button>
      <div>0 left</div>
    </>
  );
}

export default App;
