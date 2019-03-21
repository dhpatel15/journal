import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class Calendars extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      type: 'US'
    }
    this.onClickDay = this.onClickDay.bind(this);
  }

  onChange(date){
    this.setState({ date })
  }
  
  onClickDay(value){
    let dateVal = `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`
    this.props.getEntry(dateVal)
  }

  render() {
    return (
      <div>
        <div>Daily Journal</div>
          <Calendar
            // onChange={this.onChange}
            onClickDay={this.onClickDay}
            calendarType={this.state.type}
            value={this.state.date}
          />
      </div>
    );
  }
}