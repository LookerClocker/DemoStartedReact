import * as types from './actionsTypes';
import photographerApi from '../api/mockPhotographerApi';

export function loadPhotographersSuccess (photographers) {
  return {type: types.LOAD_PHOTOGRAPHERS_SUCCESS, photographers};
}


export function loadPhotographers(){
  return function (dispatch){
    return photographerApi.getAllPhotographers().then(photographers => {
      dispatch(loadPhotographersSuccess(photographers));
    }).catch(error => {
      throw (error);
    });
  };
}
