import { useEffect, useState } from "react";

import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import Form from "./Form";
import saveLocally from "./lib/saveLocally";
import loadLocally from "./lib/loadLocally";
import getTodos from "./services/getTodos";
import styled from 'styled-components/macro'
import ToggleButton from "./ToggleButton";

function App() {
  const [todos, setTodos] = useState(loadLocally('todos') ?? [])
  const [isDarkmodeOn, setIsDarkmodeOn] = useState(false)

  useEffect(() => {
    getTodos().then(todos => setTodos(todos))
  }, [])

  useEffect(() => {
    saveLocally('todos', todos)
  }, [todos])

  return (
    <Wrapper isDark={isDarkmodeOn}>
      <ToggleButton
                        defaultText="Turn darkmode on"
                        activeText="Turn darkmode off"
                        isActive={isDarkmodeOn}
                        onClick={() => setIsDarkmodeOn(!isDarkmodeOn)}
                        />
      <Form onCreateTodo={addTodo} />
      {todos.map(({title, isDone, id}, index) =>
      <Todo onDelete={() => deleteTodo(index)} onClick={() => toggleTodo(index)} title={title} isDone={isDone} key={id} />)}
    </Wrapper>
  );

  function deleteTodo(index) {
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ])
  }

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

const Wrapper = styled.div`
  display: grid;
  align-content: start;
  justify-items: start;
  gap: 20px;
  padding: 8px;
  background: ${props => props.isDark ? '#336' : '#efefef'};
  color: ${props => props.isDark ? 'white' : '#333'};
  height: 100vh;
`

export default App;
