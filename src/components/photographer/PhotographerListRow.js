import React, {PropTypes} from 'react';

const PhotographerListRow = ({photograph}) => {
  return (
    <tr>
      <td>&nbsp;</td>
      <td>{photograph.firstName + ' ' + photograph.lastName}</td>
      <td>{photograph.city}</td>
      <td>{photograph.price}</td>
    </tr>
  );
};

export default PhotographerListRow;

PhotographerListRow.propTypes = {
  photograph: PropTypes.object.isRequired
};
