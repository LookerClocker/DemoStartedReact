import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import SuitableCityList from './SuitableCityList';

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredCities: [],
      upDownArrowCounter: 0,
      value: ''
    };

    this.filterCities = this.filterCities.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  filterCities(event) {

    let value = event.target.value.toLowerCase(),
      suggestedCitiesList = document.getElementById('suggested_city');

    if (value === '') {

      this.setState({
        filteredCities: '',
        upDownArrowCounter: 0
      });

      return;
    }

    if (event.keyCode === 40) {
      if (suggestedCitiesList.lastChild === suggestedCitiesList.children[this.state.upDownArrowCounter - 1]) {
        return;
      }

      if (this.state.upDownArrowCounter >= 0) {
        this.state.upDownArrowCounter++;
      }

      if (this.state.upDownArrowCounter >= 2) {
        suggestedCitiesList.children[this.state.upDownArrowCounter - 2].removeAttribute('class');
      }

      suggestedCitiesList.lastChild.setAttribute('id', 'last_search_list_elem');

      let allLi = suggestedCitiesList.querySelectorAll('li');

      this.setState({value: allLi[this.state.upDownArrowCounter - 1].innerText});

      if (suggestedCitiesList.children[this.state.upDownArrowCounter - 1].id === 'last_search_list_elem') {
        suggestedCitiesList.children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');
        return;
      }

      suggestedCitiesList.children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');
    }

    else if (event.keyCode === 38) {
      if (suggestedCitiesList.firstChild === document.getElementById('suggested_city').children[this.state.upDownArrowCounter - 1]) {
        return;
      }

      this.state.upDownArrowCounter--;

      suggestedCitiesList.children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');

      if (suggestedCitiesList.children[this.state.upDownArrowCounter].hasAttribute('class')) {
        this.setState({value: suggestedCitiesList.children[this.state.upDownArrowCounter - 1].innerText});
      }
    }

    else {
      let result = [];
      for (let i = 0; i < this.props.citiesNames.length; i++) {
        if (this.props.citiesNames[i].name.indexOf(value) === 0) {
          result.push(this.props.citiesNames[i]);
        }
      }

      this.setState({filteredCities: result});
    }
  }

  changeValue(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="search"
          placeholder="Type a city"
          onKeyUp={this.filterCities}
          value={this.state.value}
          onChange={this.changeValue}
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
      return {
        id: city.id,
        name: city.name.toLowerCase()
      };
    })
  };
}


export default connect(mapStateToProps)(SearchInput);
