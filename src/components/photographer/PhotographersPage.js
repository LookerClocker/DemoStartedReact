import React, {PropTypes} from 'react';
import PhotographersList from './PhotographersList';


export class PhotographersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <PhotographersList/>
    );
  }
}

export default PhotographersPage;
