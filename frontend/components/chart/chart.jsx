import ReactChartkick, { AreaChart } from 'react-chartkick'
import Chart from 'chart.js'
import React from 'react'
ReactChartkick.addAdapter(Chart)


const DrawChart = ({data}) => {
  return (
    <AreaChart data={data} width="710px" height="300px" colors={["#61ca9d"]} />
  )
}



export default DrawChart