import * as actionTypes from './actionTypes';
import { getToDos, postToDo, deleteToDo, patchToDo } from '../apis/api';
import * as storage from 'redux-storage';
import store, { storageLoader } from '../store';

export const addToDo =(text) => async (dispatch)=>{
    let newToDo = {
        content: text,
        checked: false
    };
    let response = await postToDo(newToDo);
    dispatch ({
        type : actionTypes.ADD_TODO,
        payload: response.data
    });
}

export const removeToDo = (id) => async (dispatch)=>{
    await deleteToDo(id);
    dispatch( {
        type: actionTypes.REMOVE_TODO,
        payload: {id}
    });
}

export const selectToDo = (id) => {
    return {
        type: actionTypes.SELECT_TODO,
        payload :  id 
    }
}

export const updateToDo = (toDo) => async (dispatch) =>{
    let response = await patchToDo(toDo);
    dispatch( {
        type: actionTypes.UPDATE_TODO,
        payload: {...toDo, ...response.data}
    });
}

export const toggleToDo = (id) => {
    return {
        type: actionTypes.TOGGLE_TODO,
        payload :  id 
    }
}

// export const getToDoCollection= () => async (dispatch)=>{
//     let response = await getToDos();
//     dispatch({
//         type:actionTypes.GET_TODO_COLLECTION,
//         payload:[...response.data]
//     });
// }

export const getToDoCollection= () => async (dispatch) => {
    try {
        let newState = await storageLoader(store);
        dispatch({
            type:actionTypes.GET_TODO_COLLECTION,
            payload: newState.todos
        });

    }
    catch {
        dispatch({
            type:actionTypes.GET_TODO_COLLECTION,
            payload: []
        });
    }
    
};