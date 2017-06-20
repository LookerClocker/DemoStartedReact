import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchForm from './search/SearchForm';
import {citiesFormattedForDropdown} from '../../selectors/selectors';
import * as cityActions from '../../actions/cityActions';
import * as photographerActions from '../../actions/photographerActions';

import PhotographersList from '../photographer/PhotographersList';


class HomePage2 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.findPhotographers = this.findPhotographers.bind(this);
  }

  findPhotographers(event) {
    event.preventDefault();

    this.props.actions.loadPhotographers();
  }


  render() {
    return (
      <div>
        <SearchForm
          allCities={this.props.cities}
          onSave={this.findPhotographers}
        />
        <PhotographersList
          photographers={this.props.photographers}
        />
      </div>
    );
  }
}

HomePage2.propTypes = {
  cities: PropTypes.array.isRequired,
  photographers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    cities: citiesFormattedForDropdown(state.cities),
    photographers: state.photographers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, cityActions, photographerActions), dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage2);
