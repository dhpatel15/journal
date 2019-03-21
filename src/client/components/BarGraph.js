import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', Anger: 4000, Fear: 2400, Confident: 2400,
  },
  {
    name: 'Page B', Anger: 4000, Fear: 2400, Confident: 2400,
  },
  {
    name: 'Page C', Anger: 4000, Fear: 2400, Confident: 2400,
  },
  {
    name: 'Page D', Anger: 4000, Fear: 2400, Confident: 2400,
  },
  {
    name: 'Page E', Anger: 4000, Fear: 2400, Confident: 2400,
  },
  {
    name: 'Page F', Anger: 4000, Fear: 2400, Confident: 2400,
  },
  {
    name: 'Page G', Anger: 4000, Fear: 2400, Confident: 2400,
  },
];

export default class Example extends PureComponent {
  
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Fear" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Anger" stroke="#82ca9d" />
      </LineChart>
    );
  }
}