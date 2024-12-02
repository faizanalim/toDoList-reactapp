import { useDispatch } from "react-redux";
import { markTodoAsCompleted } from "./todosSlice";
import { deleteTodo } from "./thunks";
export default function ToDoListItems({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{todo.text}</h3>

      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete Item
        </button>
      ) : (
        <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>
          Mark as Completed
        </button>
      )}
    </div>
  );
}
