import * as actionTypes from '../actions/actionTypes';
import produce  from 'immer';
import _ from 'lodash';

const initialSelectedToDoId = -1;
const initialToDos = [];

const todos = (state = initialToDos, action) => {
    if (action.type === actionTypes.ADD_TODO) {
        return produce(state, draftState => {
            draftState.push(action.payload);
        });
    }
    if (action.type === actionTypes.REMOVE_TODO) {
        return produce(state, draftState => {
           // _.remove(draftState, item => item.id === action.payload.id );
            return draftState.filter(item => item.id !== action.payload.id );
        });
        
    }

    if (action.type === actionTypes.UPDATE_TODO) {
        
        return produce(state, draftState => {
            draftState[_.findIndex(draftState, item => item.id === action.payload.id)] = action.payload;
        });
    }

    if (action.type === actionTypes.TOGGLE_TODO) {
        return produce(state, draftState => {
             const index = _.findIndex(draftState, item => item.id === action.payload);
             draftState[index].checked = !draftState[index].checked;
        });
    }

    if (action.type === actionTypes.GET_TODO_COLLECTION) {
        return [ ...action.payload ]
    }

    return state;
}


const selectedToDoId = (state = initialSelectedToDoId, action) => {
    if (action.type === actionTypes.SELECT_TODO) {
        return action.payload;
    }

    return state;
}

export default { todos, selectedToDoId };