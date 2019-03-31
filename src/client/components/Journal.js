import React, { Component } from 'react';

import Button from '../css/Button';
import JournalContainer from '../css/JournalContainer';
import JournalHeader from '../css/JournalHeader';
import ButtonContainer from '../css/ButtonContainer';
import TextArea from '../css/TextArea';



export default class Journal extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: this.props.jounalEntry.journal_entry || ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.jounalEntry.journal_entry !== this.props.jounalEntry.journal_entry)
    this.setState({
      text: this.props.jounalEntry.journal_entry || ''
    }) 
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateJournal(this.state.text)
  }

  formatDate() {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    if(!this.props.journalDate){
      const date = new Date()
      return monthNames[date.getMonth()] + ' ' +  date.getDate(); +  ' ' + date.getFullYear();
    }else{
      var month = Number(this.props.journalDate.substring(5,6)) - 1;
      return monthNames[month] + ' ' +  this.props.journalDate.substring(7);
    }
  }


  render() {
    return (
      
        <JournalContainer>
          <JournalHeader>
            <h3>Journal for {this.formatDate()}</h3>
            <ButtonContainer>
            <Button 
            className="button is-primary"
            onClick={this.handleSubmit}>
              Submit
          </Button>
          </ButtonContainer>
        </JournalHeader>
        <hr style={{width: '100%', height: '0.1px', background: 'lightgrey'}} />
        <TextArea 
          type="text" 
          value={this.state.text}
          placeholder={"Whats on your mind today?"}
          onChange={this.handleChange}>
          </TextArea>
        </JournalContainer>

    );
  }
}