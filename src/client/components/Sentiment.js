import React, { Component } from 'react';
import BarGraph from './BarGraph';
import PieChart from './PieChart';

export default class Sentiment extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div>
        <h1>
          Sentiment Analysis
        </h1>
        <BarGraph />
        <PieChart />
      </div>
    );
  }
}