import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchForm from './search/SearchForm';
import {citiesFormattedForDropdown} from '../../selectors/selectors';
import * as cityActions from '../../actions/cityActions';
import PhotographerPage from '../photographer/PhotographersPage';
import * as photographerActions from '../../actions/photographerActions';

export class HomePage2 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      photographers: []
    };

    this.findPhotographers = this.findPhotographers.bind(this);
  }

  findPhotographers(event) {

    this.props.photographerActions.loadPhotographers();

  }


  render() {

    console.log('props', this.props);
    console.log('state', this.state);
    return (
      <div>
        <SearchForm
          allCities={this.props.cities}
          onSave={this.findPhotographers}
        />
        <PhotographerPage
          photographers={this.props.photographers}
        />
      </div>
    );
  }
}

HomePage2.propTypes = {
  cities: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired.isRequired,

  photographerActions: PropTypes.object.isRequired.isRequired,
  photographers: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    cities: citiesFormattedForDropdown(state.cities),
    photographers: state.photographers

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cityActions, dispatch),
    photographerActions: bindActionCreators(photographerActions, dispatch)
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({cityActions, photographerActions}, dispatch)
//   };
// }


export default connect(mapStateToProps, mapDispatchToProps)(HomePage2);

