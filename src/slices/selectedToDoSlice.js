import { createSlice } from "@reduxjs/toolkit";
const initialSelectedToDoId = -1;

const selectedToDoId = createSlice({
  name: "selectedToDoId",
  initialState: initialSelectedToDoId,
  reducers: {
    selectedToDoId: (draftState, action) => action.payload
  }
});

const actions = selectedToDoId.actions;
const reducer = selectedToDoId.reducer;

export { reducer, actions };
