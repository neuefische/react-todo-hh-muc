import { useEffect, useState } from "react";

import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import Form from "./Form";
import saveLocally from "./lib/saveLocally";
import loadLocally from "./lib/loadLocally";
import getTodos from "./services/getTodos";


function App() {
  const [todos, setTodos] = useState(loadLocally('todos') ?? [])

  useEffect(() => {
    getTodos().then(todos => setTodos(todos))
  }, [])

  useEffect(() => {
    saveLocally('todos', todos)
  }, [todos])

  return (
    <div className="App">
      <Form onCreateTodo={addTodo} />
      {todos.map(({title, isDone, id}, index) =>
      <Todo onClick={() => toggleTodo(index)} title={title} isDone={isDone} key={id} />)}
    </div>
  );

  function toggleTodo(index) {
    const todo = todos[index]
    // save to localStorage
    setTodos([
      ...todos.slice(0, index),
      {...todo, isDone: !todo.isDone},
      ...todos.slice(index + 1)
    ])
  }

  function addTodo(title) {
    // save to localStorage
    setTodos([...todos, {title, isDone: false, id: uuidv4() }])
  }

}

export default App;
