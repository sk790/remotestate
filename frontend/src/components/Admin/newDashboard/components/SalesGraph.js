
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../styles.css";
const data = [
  { name: '5k', uv: 400 },
  { name: '10k', uv: 500 },
  { name: '15k', uv: 700 },
  { name: '20k', uv: 1400 },
  { name: '25k', uv: 800 },
];

const SalesGraph = () => {
  return (
    <div className="sales-graph">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesGraph;
