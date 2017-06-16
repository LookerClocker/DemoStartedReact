import React, {PropTypes} from 'react';
// import DateInput from '../common/DateInput';
import SelectCity from '../../common/inputs/SelectCity';

const SearchForm = ({allCities}) => {
  return (
    <form>
      <SelectCity
        name="City"
        label="List of cities"
        value={allCities.value}
        defaultOption="Select City"
        options={allCities}
      />

      <input
        type="submit"
        value="Find City"
        className="btn btn-primary"
      />
    </form>
  );
};

SearchForm.propTypes = {
  allCities: PropTypes.array.isRequired
  // onSave: PropTypes.func.isRequired
};


export default SearchForm;
