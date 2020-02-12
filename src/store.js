import { combineReducers } from 'redux';
import todos from './reducers/toDoReducer';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: combineReducers(todos)
});
