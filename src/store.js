import { combineReducers } from 'redux';
import todos from './reducers/toDoReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import * as actionTypes from './actions/actionTypes';

// We need to wrap the base reducer, as this is the place where the loaded
// state will be injected.
//
// Note: The reducer does nothing special! It just listens for the LOAD
//       action and merge in the provided state :)
// Note: A custom merger function can be passed as second argument
const reducer = storage.reducer(combineReducers(todos));

// Now it's time to decide which storage engine should be used
//
// Note: The arguments to `createEngine` are different for every engine!
const engine = createEngine('my-save-key');

// And with the engine we can create our middleware function. The middleware
// is responsible for calling `engine.save` with the current state afer
// every dispatched action.
//
// Note: You can provide a list of action types as second argument, those
//       actions will be filtered and WON'T trigger calls to `engine.save`!
const storageMiddleware = storage.createMiddleware(engine, [actionTypes.SELECT_TODO]);
export const storageLoader = storage.createLoader(engine);

export default configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), storageMiddleware ]
});
