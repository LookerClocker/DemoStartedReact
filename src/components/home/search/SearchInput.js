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
    this.test = this.test.bind(this);
  }

  filterCities(event) {

    let value = event.target.value.toLowerCase();

    if (value === '') {

      this.setState({
        filteredCities: '',
        upDownArrowCounter: 0
      });

      return;
    }

    if (event.keyCode === 40) {
      if (document.getElementById('suggested_city').lastChild === document.getElementById('suggested_city').children[this.state.upDownArrowCounter - 1]) {
        return;
      }


      if (this.state.upDownArrowCounter >= 0) {
        this.state.upDownArrowCounter++;

        console.log('40', this.state.upDownArrowCounter - 1);
      }


      if (this.state.upDownArrowCounter >= 2) {
        document.getElementById('suggested_city').children[this.state.upDownArrowCounter - 2].removeAttribute('class');
      }

      document.getElementById('suggested_city').lastChild.setAttribute('id', 'last_search_list_elem');

      let allLi = document.getElementById('suggested_city').querySelectorAll('li');

      this.setState({value: allLi[this.state.upDownArrowCounter - 1].innerText});

      if (document.getElementById('suggested_city').children[this.state.upDownArrowCounter - 1].id === 'last_search_list_elem') {
        document.getElementById('suggested_city').children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');
        return;
      }

      document.getElementById('suggested_city').children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');
    }

    else if (event.keyCode === 38) {
      if (document.getElementById('suggested_city').firstChild === document.getElementById('suggested_city').children[this.state.upDownArrowCounter - 1]) {
        return;
      }

      console.log('38', this.state.upDownArrowCounter);
      console.log('38', document.getElementById('suggested_city').children[this.state.upDownArrowCounter]);

      if (document.getElementById('suggested_city').children[this.state.upDownArrowCounter - 1].hasAttribute('class')) {
        this.setState({value: document.getElementById('suggested_city').children[this.state.upDownArrowCounter].innerText});
        console.log('38 value state', this.state.value);
        this.state.upDownArrowCounter--;
      }
    }

    else {
      let result = [];
      for (let i = 0; i < this.props.citiesNames.length; i++) {
        if (this.props.citiesNames[i].indexOf(value) === 0) {
          result.push(this.props.citiesNames[i]);
        }
      }

      this.setState({filteredCities: result});
    }

  }

  test(value) {

    if (event.keyCode === 38) {
      console.log('val-', value);
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
      return city.name.toLowerCase();
    })
  };
}


export default connect(mapStateToProps)(SearchInput);
