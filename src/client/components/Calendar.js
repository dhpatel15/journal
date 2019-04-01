import React, { Component } from 'react';
import Calendar from 'react-calendar';

import CalendarTitle from '../css/CalendarTitle'

export default class Calendars extends Component {
  constructor(){
    super()
    this.state = {
      date: new Date(),
      type: 'US'
    }
  }

  componentDidMount = () => {
    const {date} = this.state;
    this.props.getEntry(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
  }
  
  onChange = date => {
    this.setState({date})
  }
  
  onClickDay = value => {
    let dateVal = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
    this.props.getEntry(dateVal)
  }

  render() {
    return (
      <React.Fragment>
        <CalendarTitle>Daily Journal</CalendarTitle>
        <Calendar
          onClickDay={this.onClickDay}
          calendarType={this.state.type}
          value={this.state.date}
        />
      </React.Fragment>
    );
  }
}