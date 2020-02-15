import store, { storageLoader } from "../store";
import { actions } from "./todosSlice";
export const getInitialData = () => async dispatch => {
  try {
    let result = await storageLoader(store);
    dispatch(actions.getToDos(result.todos));
  } catch (error) {
    dispatch(actions.getToDos([]));
  }
};
