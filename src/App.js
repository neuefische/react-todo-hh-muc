import Form from "./Form";
import Todo from "./Todo";

function App() {

  return (
    <div className="App">
      <Form />
      <Todo title="Milk" />
      <Todo title="Coffee" isDone />
    </div>
  );
}

export default App;
