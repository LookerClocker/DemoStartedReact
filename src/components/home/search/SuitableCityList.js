import React, {PropTypes} from 'react';

const SuitableCityList = (({cities}) => {
  return (
    <ul id="suggested_city">
      {cities.map((city) =>
        <li key={cities.indexOf(city)}>{city.charAt(0).toUpperCase() + city.slice(1)}</li>
      )}
    </ul>
  );

});

SuitableCityList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default SuitableCityList;
