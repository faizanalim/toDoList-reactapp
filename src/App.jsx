import "./App.css";
import TodoList from "./TodoList";

function App() {
  function createTodo(text) {
    setIncomplete([...incompleteTodos, { text, isComplete: false }]);
  }

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
