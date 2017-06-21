import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import SuitableCityList from './SuitableCityList';

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredCities: []
    };

    this.filterCities = this.filterCities.bind(this);
  }

  filterCities(event) {

    if(event.target.value === '') {
      this.setState({
        filteredCities: ''
      });

      return;
    }

    let result = [];
    for (let i = 0; i < this.props.citiesNames.length; i++) {
      if (this.props.citiesNames[i].indexOf(event.target.value) == 0) {
        result.push(this.props.citiesNames[i]);
      }
    }

    this.setState({
      filteredCities: result
    });
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="search"
          placeholder="Type a city"
          onChange={this.filterCities}
        />
        {this.state.filteredCities.length ? <SuitableCityList cities={this.state.filteredCities}/> : ''}
      </div>
    );
  }

}

SearchInput.propTypes = {
  cities: PropTypes.array.isRequired,
  citiesNames: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cities: state.cities,
    citiesNames: state.cities.map((city) => {
      return city.name;
    })
  };
}


export default connect(mapStateToProps)(SearchInput);
