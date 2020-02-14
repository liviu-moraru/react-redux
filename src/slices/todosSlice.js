import { createSlice } from "@reduxjs/toolkit";
import * as apis from "../apis/api";
import _ from "lodash";

const initialToDos = [];

const todos = createSlice({
  name: "todos",
  initialState: initialToDos,
  reducers: {
    addToDo: (draftState, action) => {
      draftState.push(action.payload);
    },
    removeToDo: (draftState, action) =>
      draftState.filter(item => item.id !== action.payload),
    updateToDo: (draftState, action) => {
      draftState[
        _.findIndex(draftState, item => item.id === action.payload.id)
      ] = action.payload;
    },
    toggleToDo: (draftState, action) => {
      const index = _.findIndex(draftState, item => item.id === action.payload);
      draftState[index].checked = !draftState[index].checked;
    },
    getToDos: (draftState, action) => [...action.payload]
  }
});

const getInitialData = () => async (dispatch, getState) => {
  let result = await apis.getToDos();
  dispatch(todos.actions.getToDos(result.data));
};

const addToDo = text => async dispatch => {
  let newToDo = {
    content: text,
    checked: false
  };
  const newData = await apis.postToDo(newToDo);
  dispatch(todos.actions.addToDo(newData.data));
};

const removeToDo = id => async dispatch => {
  await apis.deleteToDo(id);
  dispatch(todos.actions.removeToDo(id));
};

const updateToDo = toDo => async dispatch => {
  let response = await apis.patchToDo(toDo);
  dispatch(todos.actions.updateToDo({ ...toDo, ...response.data }));
};

const actions = {
  getInitialData,
  addToDo,
  removeToDo,
  updateToDo,
  toggleToDo: todos.actions.toggleToDo
};

export default { reducer: todos.reducer, actions: actions };
