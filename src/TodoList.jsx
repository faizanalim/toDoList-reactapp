import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./ToDoListItems";
import { useSelector } from "react-redux";
export default function TodoList() {
  const todosAreLoading = useSelector(
    (state) => !state.loading.value.completed
  );
  const todos = useSelector((state) => state.todos.value);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      {todosAreLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
          <h3>Incomplete:</h3>
          {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
}
