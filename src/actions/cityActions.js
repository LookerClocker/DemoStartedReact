import * as types from './actionsTypes';
import cityApi from '../api/mockCityApi';

export function loadCitiesSuccess (cities) {
  return {type: types.LOAD_CITIES_SUCCESS, cities};
}

export function loadCities() {
  return function (dispatch){
    return cityApi.getAllCities().then(cities => {
      dispatch(loadCitiesSuccess(cities));
    }).catch(error => {
      throw (error);
    });
  };
}
