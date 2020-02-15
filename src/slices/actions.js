import { actions as todos } from "./todosSlice";
import { actions as selectedToDoId } from "./selectedToDoSlice";
import { getInitialData } from "./getInitialDataActionCreator";

export default {
  todos,
  selectedToDoId,
  getInitialData
};
