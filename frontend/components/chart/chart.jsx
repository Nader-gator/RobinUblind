import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';



const DrawChart = ({data}) => {

  if (Object.keys(data).length === 0){
    return null
  }
  const dataMin = function (data) {
    let min = Math.pow(10,20)
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
  < LineChart width={710} height={300} data={data} >
      <Line type="monotone" dataKey="close" stroke={stroke} dot={false} />
    <XAxis dataKey="date" hide={true} />
    <YAxis  domain={[min, max]} hide={true} />
    <Tooltip
      formatter={(value) => new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(value)}
      labelFormatter={(value) => {
        if (value.includes("-")) {
          return <span className="chart-time">{value}</span>
        } else {
          value = value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
        return (<span className="chart-time">{value}</span>)}}
      }
    />
  </LineChart >)
}


export default DrawChart