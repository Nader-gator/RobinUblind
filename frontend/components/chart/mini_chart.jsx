import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';



const DrawChart = ({ data }) => {
  
  function totalSeconds(time) {
    var parts = time.split(':')
    return parts[0] * 3600 + parts[1] * 60
  }

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
  const timeone = data[data.length - 1].minute
  const baseline = "9:30"
  const timetwo = "16:00"
  let width = ((totalSeconds(timeone) - totalSeconds(baseline)) / (totalSeconds(timetwo) - totalSeconds(baseline))  ) * 85 //size of container
  if (width > 85) {
    width = 85
  }
  return (
    < LineChart width={width} height={50} data={data}  >

      <Line type="monotone" dataKey="close" stroke={stroke} dot={false} isAnimationActive={false}/>
      <XAxis dataKey="minute" domain={["9:30", "16:00"]} hide={true} />
      <YAxis domain={[min, max]} hide={true} />
      />
    </LineChart >)
}


export default DrawChart