import React, {PropTypes} from 'react';
import SelectDate from '../../common/inputs/SelectDate';
import SelectCity from '../../common/inputs/SelectCity';

const SearchForm = ({allCities}) => {
  return (
    <div className="row jumbotron">
      <form>
        <div className="col-md-4">
          <SelectDate/>
        </div>
        <div className="col-md-4">
          <SelectCity
            name="City"
            value={allCities.value}
            defaultOption="Select City"
            options={allCities}
          />
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Find peoples"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>

  );
};

SearchForm.propTypes = {
  allCities: PropTypes.array.isRequired
  // onSave: PropTypes.func.isRequired
};


export default SearchForm;
