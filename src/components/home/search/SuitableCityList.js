import React, {PropTypes} from 'react';

import './SuitableCityList.scss';

const SuitableCityList = (({cities, cityClick}) => {
  return (
    <ul id="suggested_city">
      {cities.map((city) => {

        /**
         * Formatted output
         */
          let name = city.name.charAt(0).toUpperCase() + city.name.slice(1),
              country = city.country.charAt(0).toUpperCase() + city.country.slice(1),
              fullTitle;

          if (name && country) {
            fullTitle = [name, country].join(', ');
          }
          else {
            fullTitle = [name, country];
          }
          return <li onClick={cityClick} key={city.id}>{fullTitle}</li>;
        }
      )}
    </ul>
  );

});

SuitableCityList.propTypes = {
  cities: PropTypes.array.isRequired,
  cityClick: PropTypes.func.isRequired
};

export default SuitableCityList;
