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
    this.props.updateJournal(this.state.text)
    event.preventDefault();
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
        <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}