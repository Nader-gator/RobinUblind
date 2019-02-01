import React from 'react'
import {connect} from 'react-redux'
class ValueDisplay extends React.Component{
  numberWithCommas = (x) => {
    x = parseInt(x)
    return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  render(){
    return (
      <h1>{this.numberWithCommas(this.props.value)}</h1>
    )
  }
}

const mstop=({ui})=>{
  return{
    value: ui.chartData
  }
}


export default connect(mstop)(ValueDisplay)
