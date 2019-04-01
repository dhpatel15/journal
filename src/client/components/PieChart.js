import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';



export default class Example extends PureComponent {
  
  createData = () => {
    const emotionType = ['analytical', 'anger', 'confident', 'fear', 'joy', 'sadness', 'tentative']

    return emotionType.map(emotion => ({
      subject: emotion,
      A: this.props.emotions[emotion],
      fullMark: 1
    }))
  }

  render() {
    return (
      <RadarChart cx={250} cy={175} outerRadius={100} width={500} height={500} data={this.createData()}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 1]} />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    );
  }
}