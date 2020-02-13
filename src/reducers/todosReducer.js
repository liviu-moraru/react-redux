import * as actionTypes from '../actions/actionTypes';
import { createReducer } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialToDos = [];

export const todos = createReducer(initialToDos,
    {
            [actionTypes.ADD_TODO]: (draftState, action) =>  { draftState.push(action.payload) },
            [actionTypes.REMOVE_TODO]: (draftState, action) =>  draftState.filter(item => item.id !== action.payload.id ),
            [actionTypes.UPDATE_TODO]: (draftState, action) => { draftState[_.findIndex(draftState, item => item.id === action.payload.id)] = action.payload },
            [actionTypes.TOGGLE_TODO]: (draftState, action) => {
                const index = _.findIndex(draftState, item => item.id === action.payload);
                draftState[index].checked = !draftState[index].checked;
            },
            [actionTypes.GET_TODO_COLLECTION]: (draftState, action) => [ ...action.payload ]

        }
);

