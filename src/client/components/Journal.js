import React, { Component } from 'react';

export default class Journal extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state.text;
    console.log(data)
    this.props.updateJournal(data)
  }

  render() {
    return (
      <div className="container">
        <div>
            Today is {this.state.date}
        <textarea 
          type="text" 
          value={this.state.text}
          placeholder={"Whats on your mind today?"}
          onChange={this.handleChange}/>
        <button 
          className="button is-primary"
          onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}