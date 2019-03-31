import React, { Component } from 'react';
import BarGraph from './BarGraph';
import PieChart from './PieChart';

import SentimentWrapper from '../css/SentimentWrapper';
import GraphWrapper from '../css/GraphWrapper';

export default class Sentiment extends Component {
  constructor(props){
    super(props)
    // this.state = {}
  }

  render() {
    return (
      <SentimentWrapper>
        <h3>Sentiment Analysis</h3>
        <GraphWrapper>
          {this.props.emotions ? <PieChart emotions={this.props.emotions}/> : <div></div>}
        </GraphWrapper>
      </SentimentWrapper>
    );
  }
}