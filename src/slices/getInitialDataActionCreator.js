import store, { storageLoader } from "../store";
import todos from "./todosSlice";
export const getInitialData = () => async dispatch => {
  try {
    let result = await storageLoader(store);
    dispatch(todos.actions.getToDos(result.todos));
  } catch (error) {
    dispatch(todos.actions.getToDos([]));
  }
};
