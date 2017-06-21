import React, {PropTypes} from 'react';

const SuitableCityList = (({cities}) => {
  return (
    <ul>
      {cities.map((city) =>
        <li key={cities.indexOf(city)}>{city}</li>
      )}
    </ul>
  );

});

SuitableCityList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default SuitableCityList;
