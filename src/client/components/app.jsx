import React, { Component } from 'react';
import Journal from './Journal';
import Calendar from './Calendar';
import Sentiment from './Sentiment';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      pastEnteries : false
    }
    this.updateJournal = this.updateJournal.bind(this);
    this.getEntry = this.getEntry.bind(this);
  }

  updateJournal(data){
    //Store to DB and get sentiment analysis
  }

  getEntry(data){
    //Show calendar
    //make call to DB to get past enteries
    //display the days that have enteries logs in higlight
    console.log("data from calendar" ,data)
  }


  render() {
    return (
      <div>
      <Calendar 
        getEntry={this.getEntry}/>  
      <Journal 
        updateJournal={this.updateJournal}/> 
      <Sentiment /> 
      </div>
    );
  }
}