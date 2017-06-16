
export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

export function citiesFormattedForDropdown(cities) {
  return cities.map(city => {
    return {
      value: city.id,
      text: city.name
    };
  });
}
