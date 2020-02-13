import * as actionTypes from '../actions/actionTypes';
import { createReducer } from '@reduxjs/toolkit';
const initialSelectedToDoId = -1;

export const selectedToDoId = createReducer(initialSelectedToDoId,
    {
        [actionTypes.SELECT_TODO]: (draftState, action) => action.payload
    }
);

