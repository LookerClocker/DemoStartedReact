import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import SuitableCityList from './SuitableCityList';

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredCities: [],
      upDownArrowCounter: 0,
      value: '',
      flag: ''
    };

    this.filterCities = this.filterCities.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.test = this.test.bind(this);
  }

  filterCities(event) {

    let value = event.target.value.toLowerCase();
    let suggestedCitiesList = document.getElementById('suggested_city');

    if (value === '') {

      this.setState({
        filteredCities: '',
        upDownArrowCounter: 0
      });

      return;
    }

    if (event.keyCode === 40) {

      if(this.state.upDownArrowCounter >= 0) {
        this.state.upDownArrowCounter++;
      }

      console.log('40',this.state.upDownArrowCounter);

      if(this.state.upDownArrowCounter) {
        document.getElementById('suggested_city').children[this.state.upDownArrowCounter -1].removeAttribute('class');
      }

      document.getElementById('suggested_city').lastChild.setAttribute('id', 'last_search_list_elem');

      let allLi = document.getElementById('suggested_city').querySelectorAll('li');

      this.setState({value: allLi[this.state.upDownArrowCounter-1].innerText});

      if (document.getElementById('suggested_city').children[this.state.upDownArrowCounter -1].id === 'last_search_list_elem') {
        return;
      }

      document.getElementById('suggested_city').children[this.state.upDownArrowCounter -1].setAttribute('class','selected');

      // this.test(this.state.upDownArrowCounter);

      // this.state.upDownArrowCounter++;









      // if (this.state.flag === 'arrowUp') {
      //   this.state.upDownArrowCounter++;
      // }
      //
      // this.state.flag = 'arrowDown';
      //
      // suggestedCitiesList.lastChild.setAttribute('id', 'last_search_list_elem');
      //
      //
      // if (this.state.upDownArrowCounter < this.state.filteredCities.length) {
      //
      //   let listElement = suggestedCitiesList.children[this.state.upDownArrowCounter];
      //   let listElementText = listElement.innerText;
      //
      //   this.setState({value: listElementText});
      //
      //   if (listElement.id === 'last_search_list_elem') {
      //     return;
      //   }
      //
      //   this.state.upDownArrowCounter++;
      // }
    }

    else if (event.keyCode === 38) {

      console.log('38',this.state.upDownArrowCounter-1);

      if(document.getElementById('suggested_city').children[this.state.upDownArrowCounter -1].hasAttribute('class')) {
        this.setState({value: document.getElementById('suggested_city').children[this.state.upDownArrowCounter -1].innerText});
        this.state.upDownArrowCounter--;
      }



      // this.state.upDownArrowCounter--;
      //
      // console.log('38',this.state.upDownArrowCounter);
      //
      // let allLi = document.getElementById('suggested_city').querySelectorAll('li');
      //
      // this.setState({value: allLi[this.state.upDownArrowCounter].innerText});
      //
      // this.state.upDownArrowCounter--;





      // let listElement = document.getElementById('suggested_city').children[this.state.upDownArrowCounter];
      //
      // suggestedCitiesList.lastChild.setAttribute('id', 'last_search_list_elem');
      //
      // if((this.state.flag === 'arrowDown') && (listElement.id !== 'last_search_list_elem')) {
      //   this.state.upDownArrowCounter--;
      // }
      //
      // this.state.flag = 'arrowUp';
      //
      // if (this.state.upDownArrowCounter) {
      //
      //     this.state.upDownArrowCounter--;
      //     debugger;
      //
      //   let listElementText = suggestedCitiesList.children[this.state.upDownArrowCounter].innerText;
      //   this.setState({value: listElementText});
      // }

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

  test(value){

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
