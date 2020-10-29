import { useState } from "react";

import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import Form from "./Form";


function App() {

  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos([...todos, {title, isDone: false, id: uuidv4() }])
  }


  return (
    <div className="App">
      <Form onCreateTodo={addTodo} />
      {todos.map(({title, isDone, id}) => <Todo title={title} isDone={isDone} key={id} />)}
    </div>
  );
}

export default App;
