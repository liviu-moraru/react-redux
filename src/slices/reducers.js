import todos from "./todosSlice";
import { selectedToDoId } from "./selectedToDoSlice";

export default { todos: todos.reducer, selectedToDoId: selectedToDoId.reducer };
