import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import React from 'react'
ReactChartkick.addAdapter(Chart)


const DrawChart = ({data}) => {
  return (
    <LineChart data={data} />
  )
}



export default DrawChart