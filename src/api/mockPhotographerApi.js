import delay from './delay';

const  photographers = [
  {id: 1, firstName: 'Billy', lastName: 'Scott', country: 'USA', city: 'New York', price: 7},
  {id: 2, firstName: 'Enrique', lastName: 'Martines', country: 'Spain', city: 'Barcelona', price: 4},
  {id: 3, firstName: 'Carlos', lastName: 'Puyol', country: 'Spain', city: 'Barcelona', price: 4},
  {id: 4, firstName: 'Juan', lastName: 'Versa', country: 'Spain', city: 'Malaga', price: 3}
];

class photographerApi {
  static getAllPhotographers() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Object.assign([], photographers));
    }, delay);
    });
  }
}

export default photographerApi;
