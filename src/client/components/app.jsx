import React, { Component } from 'react';
import axios from 'axios';

import Journal from './Journal';
import Calendar from './Calendar';
import Sentiment from './Sentiment';

import Wrapper from '../css/Wrapper';
import CalendarWrapper from '../css/CalendarWrapper';
import JournalWrapper from '../css/JournalWrapper';
import { createGlobalStyle } from 'styled-components'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      pastEnteries : false,
      info: {},
      date: ''
    }
    this.updateJournal = this.updateJournal.bind(this);
    this.getEntry = this.getEntry.bind(this);
  }
  componentDidMount(){
    document.body.style.margin = "0";
  }

  updateJournal(data){
    axios.post('/postJournal', {
      data: data,
      date: this.state.date
    })
    .then(function (response) {
      this.getEntry(this.state.date)
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  getEntry(date){
    axios.get('/calendar', {
      params: {
        data: date
      }
    }).then(({data}) => {
      this.setState({
        info: data || {},
        date: date
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  render() {
    const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Lato;
    div, textarea { box-sizing: border-box };


    
    p { font-weight: 700; font-size: 24px }
  }
`
    return (
        <Wrapper>
        <GlobalStyle whiteColor />
        <CalendarWrapper>
          <Calendar getEntry={this.getEntry}/>  
        </CalendarWrapper>
      <JournalWrapper>
        <Journal 
          updateJournal={this.updateJournal}
          jounalEntry={this.state.info}
          journalDate={this.state.date}/> 
      </JournalWrapper>
      <Sentiment emotions={this.state.info}/> 
      </Wrapper>
    );
  }
}

// Watching you walk across a room is the greatest gift. The way you move is so graceful and easy. The way you smile makes me feel at peace. Knowing you’re walking towards me is a feeling so hard to describe. It’s like coming home, a comfort, only the home is coming to me. I will never know such love, such peace, as you. You’re my home. You are more than a friend. You’re my sister, my partner-in-crime, my other half. You know me better than I know myself. You know what I like, what I love, what I hate. You applaud my passions and tolerate my faults. You’re there for me, always. And it’s not always about what we say, or what we do – because you, by yourself, is enough. You, with your smile, your laugh, your friendship – it’s more than I deserve. We’ve laughed, we’ve cried, and we’re stronger than ever. Because there’s no me without you. You’re part of me – part of me, my life, my family, my entire world