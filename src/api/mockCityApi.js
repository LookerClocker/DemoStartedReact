import delay from './delay';

const cities = [
  {id: 1, name: 'Barcelona'},
  {id: 2, name: 'Madrid'},
  {id: 3, name: 'Malaga'},
  {id: 4, name: 'Sevilla'},
  {id: 5, name: 'Monte Carlo'},
  {id: 6, name: 'Monaco'},
  {id: 7, name: 'Monte Carlo'},
  {id: 8, name: 'M'},
  {id: 9, name: 'MM'},
  {id: 10, name: 'Monlo'},
  {id: 11, name: 'mm'}
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
