import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./ToDoListItems"

export default function TodoList({ completedTodos, incompleteTodos }) {
    console.log(completedTodos);
    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm />
            <h3>Completed:</h3>
            {completedTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index} />
            ))}
            <h3>Incomplete:</h3>
            {incompleteTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index} />
            ))}
        </div>

    )
}