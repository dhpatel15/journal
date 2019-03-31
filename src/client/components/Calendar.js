import React, { Component } from 'react';
import Calendar from 'react-calendar';

import CalendarTitle from '../css/CalendarTitle'

export default class Calendars extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      type: 'US'
    }
    this.onClickDay = this.onClickDay.bind(this);
  }

  componentDidMount(){
    this.props.getEntry(`${this.state.date.getFullYear()}-${this.state.date.getMonth() +1 }-${this.state.date.getDate()}`)
  }
  

  onChange(date){
    this.setState({ date })
  }
  
  onClickDay(value){
    let dateVal = `${value.getFullYear()}-${value.getMonth() +1 }-${value.getDate()}`
    this.props.getEntry(dateVal)
  }

  render() {
    return (
      <React.Fragment>
        <CalendarTitle>Daily Journal</CalendarTitle>
        <Calendar
          // onChange={this.onChange}
          onClickDay={this.onClickDay}
          calendarType={this.state.type}
          value={this.state.date}
        />
      </React.Fragment>
    );
  }
}