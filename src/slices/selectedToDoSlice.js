import { createSlice } from "@reduxjs/toolkit";
const initialSelectedToDoId = -1;

export const selectedToDoId = createSlice({
  name: "selectedToDoId",
  initialState: initialSelectedToDoId,
  reducers: {
    selectedToDoId: (draftState, action) => action.payload
  }
});

export default {
  reducer: selectedToDoId.reducer,
  actions: selectedToDoId.actions
};
