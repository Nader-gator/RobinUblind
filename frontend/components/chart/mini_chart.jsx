import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';



const DrawChart = ({ data }) => {
  
  // debugger
  data = data.chart
  const dataMin = function (data) {
    let min = Math.pow(10, 20)
    data.forEach(dataEl => {
      if (dataEl.close < min) {
        min = dataEl.close
      }
    });
    return min
  };

  const dataMax = function (data) {
    let max = 0
    data.forEach(dataEl => {
      if (dataEl.close > max) {
        max = dataEl.close
      }
    });
    return max
  };
  const first = data[0].close
  const last = data[data.length - 1].close
  const stroke = (first < last) ? "#61ca9d" : "#e3603f";
  const min = dataMin(data)
  const max = dataMax(data)

  return (
    < LineChart width={85} height={50} data={data} >
      <Line type="monotone" dataKey="close" stroke={stroke} dot={false} />
      <XAxis dataKey="minute" domain={["9:30", "16:00"]} hide={true} />
      <YAxis domain={[min, max]} hide={true} />
      />
    </LineChart >)
}


export default DrawChart