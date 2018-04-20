import React from 'react';
import {LineChart, Line, YAxis} from 'recharts';

const Graph = (props) => {
  return(
  <LineChart className="graph" width={250} height={200} data={props.dataObject}
    margin={{ left: 0, top: 10, bottom: 10, right: 50}}>
    <YAxis domain={[props.yDomainMin, props.yDomainMax]} />
    <Line type="natural" dot={false} dataKey="uv" stroke="#8884d8" />
 </LineChart>
  )
}
export default Graph;
