import React, { Component } from 'react';

export default class Sentiment extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
        <h1>
          Sentiment Analysis
        </h1>
    );
  }
}