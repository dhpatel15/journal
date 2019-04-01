import React, { Component } from 'react';
import axios from 'axios';

import Journal from './Journal';
import Calendar from './Calendar';
import Sentiment from './Sentiment';

import Wrapper from '../css/Wrapper';
import CalendarWrapper from '../css/CalendarWrapper';
import JournalWrapper from '../css/JournalWrapper';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Lato;
  div, textarea { box-sizing: border-box };

  p { font-weight: 700; font-size: 24px }
}`

export default class App extends Component {

  state ={
    pastEnteries : false,
    info: {},
    date: ''
  }

  componentDidMount = () =>{
    document.body.style.margin = "0";
  }

  updateJournal = data =>{
    axios.post('/dates', {
      data: data,
      date: this.state.date
    })
    .then(() => {
      this.getEntry(this.state.date)
    })
    .catch(error => {
      console.log(error);
    });
  }

  getEntry = date => {
    axios.get('/dates', {
      params: {
        data: date
      }
    }).then(({data}) => {
      this.setState({
        info: data || {},
        date: date
      })
    })
    .catch(error => {
      console.log(error);
    });
  }


  render() {
    return (
      <React.Fragment>
        <GlobalStyle whiteColor />
        <Wrapper>
          <CalendarWrapper>
            <Calendar getEntry={this.getEntry} />
          </CalendarWrapper>
          <JournalWrapper>
            <Journal
              updateJournal={this.updateJournal}
              jounalEntry={this.state.info}
              journalDate={this.state.date}
            />
          </JournalWrapper>
          <Sentiment emotions={this.state.info} />
        </Wrapper>
      </React.Fragment>
    );
  }
}