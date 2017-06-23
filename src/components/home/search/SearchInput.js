import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import SuitableCityList from './SuitableCityList';

import './SuitableCityList.scss';

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

    /**
     * If value is empty. I deleted or something than just reset all counters and cities
     */
    if (value === '') {

      this.setState({
        filteredCities: '',
        upDownArrowCounter: 0
      });

      return;
    }

    /**
     * Handling down arrow pressing
     */
    if (event.keyCode === 40) {

      /**
       * Check if it is the last element of list
       */
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

      /**
       * Set class attribute to the last element of list
       */

      if (suggestedCitiesList.children[this.state.upDownArrowCounter - 1].id === 'last_search_list_elem') {
        suggestedCitiesList.children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');
        return;
      }

      /**
       * Set class attribute to active element.
       * I`m using class attribute because when
       * i press up arrow key i need to know what
       * element is active now for start counter
       */
      suggestedCitiesList.children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');
    }

    /**
     * Handling up arrow key
     */
    else if (event.keyCode === 38) {

      /**
       * If it is the first element in list, then don`t decrement counter. Just return
       */
      if (suggestedCitiesList.firstChild === suggestedCitiesList.children[this.state.upDownArrowCounter - 1]) {
        return;
      }

      this.state.upDownArrowCounter--;

      /**
       * Set class attribute to the last element of list
       */
      suggestedCitiesList.children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');

      /**
       * If current list element has class, it means that i need to add into fields previous list element`s value
       */
      if (suggestedCitiesList.children[this.state.upDownArrowCounter].hasAttribute('class')) {
        this.setState({value: suggestedCitiesList.children[this.state.upDownArrowCounter - 1].innerText});
      }
    }

    /**
     * If i`ve pressed anything else, than just find if matched
     */
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












// import React, {PropTypes} from 'react';
// import {connect} from 'react-redux';
// import SuitableCityList from './SuitableCityList';
//
// export class SearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       filteredCities: [],
//       upDownArrowCounter: 0,
//       value: '',
//       called: false
//     };
//
//     this.filterCities = this.filterCities.bind(this);
//     this.changeValue = this.changeValue.bind(this);
//   }
//
//   filterCities(event) {
//
//     let value = event.target.value.toLowerCase(),
//       suggestedCitiesList = document.getElementById('suggested_city');
//
//     /**
//      * If value is empty. I deleted or something than just reset all counters and cities
//      */
//     if (value === '') {
//
//       this.setState({
//         filteredCities: '',
//         upDownArrowCounter: 0
//       });
//
//       return;
//     }
//
//     if(event.keyCode === 13) {
//       this.state.value = suggestedCitiesList.children[this.state.upDownArrowCounter -1].innerText;
//     }
//
//     /**
//      * Removing class when press backspace
//      */
//     if (event.keyCode === 8) {
//
//       let onlyOnetime = (() => {
//         return (() => {
//           if(!this.state.called) {
//             this.state.called = true;
//             suggestedCitiesList.children[this.state.upDownArrowCounter -1].removeAttribute('class');
//           }
//         });
//       })();
//
//       onlyOnetime();
//       this.state.upDownArrowCounter = this.state.upDownArrowCounter -1;
//       // console.log('back', this.state.upDownArrowCounter)
//     }
//
//     /**
//      * Handling down arrow pressing
//      */
//     if (event.keyCode === 40) {
//
//       /**
//        * Check if list exist. If not - than return from function
//        */
//       if (!document.getElementById('suggested_city')) {
//         return;
//       }
//
//
//       /**
//        * Check if it is the last element of list
//        */
//       if (suggestedCitiesList.lastChild === suggestedCitiesList.children[this.state.upDownArrowCounter - 1]) {
//         return;
//       }
//
//       if (this.state.upDownArrowCounter >= 0) {
//         this.state.upDownArrowCounter++;
//       }
//
//       if (this.state.upDownArrowCounter >= 2) {
//         suggestedCitiesList.children[this.state.upDownArrowCounter - 2].removeAttribute('class');
//       }
//
//       suggestedCitiesList.lastChild.setAttribute('id', 'last_search_list_elem');
//
//       let allLi = suggestedCitiesList.querySelectorAll('li');
//
//       this.setState({value: allLi[this.state.upDownArrowCounter - 1].innerText});
//
//       /**
//        * Set class attribute to the last element of list
//        */
//
//       if (suggestedCitiesList.children[this.state.upDownArrowCounter - 1].id === 'last_search_list_elem') {
//         suggestedCitiesList.children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');
//         return;
//       }
//
//       /**
//        * Set class attribute to active element.
//        * I`m using class attribute because when
//        * i press up arrow key i need to know what
//        * element is active now for start counter
//        */
//       suggestedCitiesList.children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');
//
//       console.log('40',this.state.upDownArrowCounter);
//     }
//
//     /**
//      * Handling up arrow key
//      */
//     else if (event.keyCode === 38) {
//
//       /**
//        * Check if list exist. If not - than return from function
//        */
//       if (!document.getElementById('suggested_city')) {
//         return;
//       }
//
//       /**
//        * If it is the first element in list, then don`t decrement counter. Just return
//        */
//       if (suggestedCitiesList.firstChild === suggestedCitiesList.children[this.state.upDownArrowCounter - 1]) {
//         return;
//       }
//
//       if(this.state.upDownArrowCounter !== 0) {
//         this.state.upDownArrowCounter--;
//       }
//
//       suggestedCitiesList.children[this.state.upDownArrowCounter].removeAttribute('class');
//
//       /**
//        * Set class attribute to the last element of list
//        */
//       suggestedCitiesList.children[this.state.upDownArrowCounter - 1].setAttribute('class', 'selected');
//
//       /**
//        * If current list element has class, it means that i need to add into fields previous list element`s value
//        */
//       if (suggestedCitiesList.children[this.state.upDownArrowCounter - 1].hasAttribute('class')) {
//         this.setState({value: suggestedCitiesList.children[this.state.upDownArrowCounter - 1].innerText});
//       }
//
//       console.log('38',this.state.upDownArrowCounter);
//     }
//
//     /**
//      * If i`ve pressed anything else, than just find if matched
//      */
//     else {
//       let result = [];
//       for (let i = 0; i < this.props.citiesNames.length; i++) {
//         if (this.props.citiesNames[i].name.indexOf(value) === 0) {
//           result.push(this.props.citiesNames[i]);
//         }
//       }
//
//       this.setState({filteredCities: result});
//     }
//   }
//
//   changeValue(event) {
//     this.setState({value: event.target.value});
//   }
//
//   render() {
//     return (
//       <div>
//         <input
//           className="form-control"
//           type="search"
//           placeholder="Type a city"
//           onKeyUp={this.filterCities}
//           value={this.state.value}
//           onChange={this.changeValue}
//         />
//         {this.state.filteredCities.length ? <SuitableCityList cities={this.state.filteredCities}/> : ''}
//       </div>
//     );
//   }
//
// }
//
// SearchInput.propTypes = {
//   cities: PropTypes.array.isRequired,
//   citiesNames: PropTypes.array.isRequired
// };
//
// function mapStateToProps(state, ownProps) {
//   return {
//     cities: state.cities,
//     citiesNames: state.cities.map((city) => {
//       return {
//         id: city.id,
//         name: city.name.toLowerCase()
//       };
//     })
//   };
// }
//
//
// export default connect(mapStateToProps)(SearchInput);

