import React, {PropTypes} from 'react';

import './SuitableCityList.scss';

const SuitableCityList = (({cities}) => {
  return (
    <ul id="suggested_city">
      {cities.map((city) =>
        <li key={city.id}>{city.name.charAt(0).toUpperCase() + city.name.slice(1)}</li>
      )}
    </ul>
  );

});

SuitableCityList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default SuitableCityList;
