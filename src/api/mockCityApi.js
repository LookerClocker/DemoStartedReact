import delay from './delay';

const cities = [
  {id: 1, name: 'Barcelona', country: 'Spain'},
  {id: 2, name: 'Madrid', country: 'Spain'},
  {id: 3, name: 'Malaga', country: 'Spain'},
  {id: 4, name: 'Sevilla', country: 'Spain'},
  {id: 5, name: 'Monte Carlo', country: 'Monaco'},
  {id: 6, name: 'Kyiv', country: 'Ukraine'},
  {id: 7, name: 'Rome', country: 'Italy'},
  {id: 8, name: 'Venezia', country: 'Italy'},
  {id: 9, name: 'Florence', country: 'Italy'},
  {id: 10, name: 'Paris', country: 'France'},
  {id: 11, name: 'Marcel', country: 'France'},
  {id: 12, name: 'New York', country: ''}
];

class CityApi {
  static getAllCities() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], cities));
      }, delay);
    });
  }
}

export default CityApi;
