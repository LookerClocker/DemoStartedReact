import React, {PropTypes} from 'react';
import PhotographerListRow from './PhotographerListRow';

const PhotographersList = ({photographers}) => {

  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Name</th>
        <th>City</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {photographers.map(photograph =>
        <PhotographerListRow
          key={photograph.id}
          photograph={photograph}
        />
      )}
      </tbody>
    </table>
  );

};

export default PhotographersList;

PhotographersList.propTypes = {
  photographers: PropTypes.array.isRequired
};
