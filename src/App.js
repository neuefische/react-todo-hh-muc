import { useEffect, useState } from "react";

import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import Form from "./Form";
import saveLocally from "./lib/saveLocally";
import loadLocally from "./lib/loadLocally";
import getTodos from "./services/getTodos";
import getCharacters from "./services/getCharacters";


function App() {
  const [todos, setTodos] = useState(loadLocally('todos') ?? [])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getTodos().then(todos => setTodos(todos))
  }, [])

  useEffect(() => getCharacters().then(data => setCharacters(data.results)), [])

  useEffect(() => {
    saveLocally('todos', todos)
  }, [todos])

  return (
    <div className="App">
      <Form onCreateTodo={addTodo} />
      {todos.map(({title, isDone, id}, index) =>
      <Todo onClick={() => toggleTodo(index)} title={title} isDone={isDone} key={id} />)}

      {characters.map(char => <div>{char.name}</div>)}
    </div>
  );

  function toggleTodo(index) {
    const todo = todos[index]
    setTodos([
      ...todos.slice(0, index),
      {...todo, isDone: !todo.isDone},
      ...todos.slice(index + 1)
    ])
  }

  function addTodo(title) {
    setTodos([...todos, {title, isDone: false, id: uuidv4() }])
  }

}

export default App;
