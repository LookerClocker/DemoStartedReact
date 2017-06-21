import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class SelectDate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <DatePicker
        minDate={moment()}
        className="form-control"
        calendarClassName="rasta-stripes"
        placeholderText="Click to select a date"
        selected={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
