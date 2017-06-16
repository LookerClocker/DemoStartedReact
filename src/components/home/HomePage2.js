import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchForm from './search/SearchForm';
import {citiesFormattedForDropdown} from '../../selectors/selectors';
import * as cityActions from '../../actions/cityActions';

export class HomePage2 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state ={};
  }

  render() {
    return (
      <SearchForm
        allCities={this.props.cities}
      />
    );
  }
}

HomePage2.propTypes = {
  cities: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// HomePage2.contextTypes = {
//   router: PropTypes.object
// };

function mapStateToProps(state, ownProps){
  return {
    cities: citiesFormattedForDropdown(state.cities)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cityActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage2);

