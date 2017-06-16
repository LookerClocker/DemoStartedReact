import React, {PropTypes} from 'react';

const SelectCity = ({name, label, options, defaultOption, value}) => {
  return (
    <div className="form-group">
      <lable htmlFor={name}>{label}</lable>
      <div className="field">
        <select
          name={name}
          value={value}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map((option)=>{
            return <option value={option.value} key={option.value}>{option.text}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

SelectCity.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultOption: PropTypes.string.isRequired
};

export default SelectCity;
