import React, { Component } from 'react';
import PieChart from './PieChart';

import SentimentWrapper from '../css/SentimentWrapper';
import GraphWrapper from '../css/GraphWrapper';

export default  ({emotions}) =>  (
  <SentimentWrapper>
    <h3>Sentiment Analysis</h3>
    <GraphWrapper>
      {emotions ? <PieChart emotions={emotions}/> : <div></div>}
    </GraphWrapper>
  </SentimentWrapper>
)


      
