import React, { Component } from 'react';
import axios from 'axios';

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
    //make call to DB to get past enteries
    console.log(data)
    // axios.get('/pastEntry', {
    //   params: {
    //     data: data
    //   }
    // }).then(function (response) {
    //   //set state to response past entry
    //   //set state for sentiment analysis
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
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