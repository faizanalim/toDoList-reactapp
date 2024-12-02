import axios from "axios";
import {
  loadingStarted,
  loadingCompleted,
  loadingFailed,
} from "./loadingSlice";
import { todosUpdated } from "./todosSlice";

export const loadTodos = () => async (dispatch) => {
  dispatch(loadingStarted());
  try {
    const response = await axios.get("/api/todos");
    const todos = response.data;
    console.log(todos);
    dispatch(loadingCompleted(todos));
  } catch (e) {
    loadingFailed(e);
  }
};
export const createTodo = (newTodoText) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/api/todos", { text: newTodoText });
    const newTodo = response.data;
    const updatedTodos = getState().todos.value.concat(newTodo);
    dispatch(todosUpdated(updatedTodos));
  } catch (e) {
    console.log(e);
  }
};
export const deleteTodo = (todoId) => async (dispatch, getState) => {
  try {
    await axios.delete("/api/todos/" + todoId);
    console.log(todoId);
    const updatedTodos = getState().todos.value.filter((t) => t.id !== todoId);
    dispatch(todosUpdated(updatedTodos));
  } catch (e) {
    console.log(e);
  }
};
