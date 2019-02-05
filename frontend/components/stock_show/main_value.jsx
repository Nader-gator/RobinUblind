import React from 'react'
import {connect} from 'react-redux'
import Odometer from '../odometer/odometer'

class ValueDisplay extends React.Component{

  constructor(props){
    super(props)
    this.state = {initialState: true}
  }
  numberWithCommas = (x) => {
    x = parseInt(x)
    return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  componentDidUpdate(prevProps){
    if (prevProps.value != this.props.value){
      this.setState({initialState: false})
    }
  }
  render(){
    if (this.state.initialState){
      return (
        <Odometer value={this.props.begin}/>
      )
    }
    return (
      <Odometer value={this.props.value}/>
    )
  }
}

const mstop=({ui})=>{
  return{
    value: ui.chartData
  }
}


export default connect(mstop)(ValueDisplay)
