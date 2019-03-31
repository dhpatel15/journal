import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', Anger: 4000, Fear: 2400, Confident: 2400,
  },
  {
    name: 'Page B', Anger: 4000, Fear: 2400, Confident: 2400,
  },
];

export default class BarGraph extends React.Component {
  constructor(props) {
  	super(props);

  	this.createData = this.createData.bind(this);
  }
  createData(){
    const emotionType = ['analytical', 'anger', 'confident', 'fear', 'joy', 'sadness', 'tentative']
  	let result = []

  	for(let i = 0; i < 7; i++){
      let obj = {
        name: emotionType[i],
        score: this.props.emotions[emotionType[i]]
      }
  		result.push(obj)
    }

  	return result
  }
  
  render(){
    let data = this.createData()
        return(
          <div>
            <BarChart
              width={300}
              height={400}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
            <YAxis />
            <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#0000FF" />
             </BarChart>
          </div>
        )
  }
}