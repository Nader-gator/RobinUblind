import React from 'react'
import {connect} from 'react-redux'
import Odometer from '../odometer/odometer'

class ValueDisplay extends React.Component{

  render(){
    if (this.props.value === "00.00"){
      return (
        
        <h1>
        <Odometer value= {this.props.begin}/>
      </h1>
            )
    }
    return (
      <h1>
        <Odometer value= {this.props.value}/>
      </h1>
    )
  }
}

const mstop=({ui})=>{
  return{
    value: ui.chartData
  }
}


export default connect(mstop)(ValueDisplay)
