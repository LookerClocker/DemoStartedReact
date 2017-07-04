import React, {PropTypes} from 'react';
import SelectDate from '../../common/inputs/SelectDate';
import SearchInput from '../../home/search/SearchInput';

import './SearchForm.scss';

const SearchForm = ({onSave}) => {
  return (
    <div className="row jumbotron">
      <form>
        <div className="col-md-4">
          <SelectDate/>
        </div>
        <div className="col-md-4">
          <SearchInput/>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            value="Find peoples"
            className="btn btn-primary"
            onClick={onSave}
          />
        </div>
      </form>
    </div>

  );
};

SearchForm.propTypes = {
  allCities: PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired
};


export default SearchForm;
