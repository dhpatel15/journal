import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';



export default class Example extends PureComponent {
  constructor(props) {
  	super(props);

  	this.createData = this.createData.bind(this);
  }

  createData(){
    const emotionType = ['analytical', 'anger', 'confident', 'fear', 'joy', 'sadness', 'tentative']
  	let result = []

  	for(let i = 0; i < 7; i++){
      let obj = {
        subject: emotionType[i],
        A: this.props.emotions[emotionType[i]],
        fullMark: 1,
      }
  		result.push(obj)
    }

  	return result
  }

  render() {
    let data = this.createData()
    return (
      <RadarChart cx={250} cy={175} outerRadius={100} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 1]} />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    );
  }
}