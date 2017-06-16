import initialState from './initialState';
import * as types from '../actions/actionsTypes';

export default function photographerReducer (state = initialState.photographers, action){
  switch (action.types) {
    case types.LOAD_PHOTOGRAPHERS_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
