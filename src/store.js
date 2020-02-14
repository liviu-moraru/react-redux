import { combineReducers } from "redux";
import todos from "./slices/reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";

const reducer = storage.reducer(combineReducers(todos));

const engine = createEngine("my-save-key");

const storageMiddleware = storage.createMiddleware(engine, [
  "selectedToDoId/selectedToDoId"
]);
export const storageLoader = storage.createLoader(engine);

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), storageMiddleware]
});
