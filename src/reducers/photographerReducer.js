import initialState from './initialState';
import * as types from '../actions/actionsTypes';

export default function photographerReducer(state = initialState.photographers, action){
  switch (action.type) {
    case types.LOAD_PHOTOGRAPHERS_SUCCESS:
      return action.photographers;
    default:
      return state;
  }
}
