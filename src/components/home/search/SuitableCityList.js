import React, {PropTypes} from 'react';

import './SuitableCityList.scss';

const SuitableCityList = (({cities, cityClick}) => {
  return (
    <ul id="suggested_city">
      {cities.map((city) =>
        <li onClick={cityClick} key={city.id}>{city.name.charAt(0).toUpperCase() + city.name.slice(1)}</li>
      )}
    </ul>
  );

});

SuitableCityList.propTypes = {
  cities: PropTypes.array.isRequired,
  cityClick: PropTypes.func.isRequired
};

export default SuitableCityList;
