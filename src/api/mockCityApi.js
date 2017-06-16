import delay from './delay';

const cities = [
  {id: 1, name: 'Barcelona'},
  {id: 2, name: 'Madrid'},
  {id: 3, name: 'Malaga'},
  {id: 4, name: 'Sevilla'}
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
