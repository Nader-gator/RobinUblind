import React from 'react'
import {Redirect} from 'react-router-dom'

class UnknownPage extends React.Component{

  constructor(props){
    super(props)
    this.state = {wait: true}
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({wait: false})
    },
    1700
    )
  }
  render(){
    if (this.state.wait === true){

      return (

        <div className="unknown-stock">
          <div>
            <h1>Unknown Stock! Redirecting...</h1>
          </div>
        </div>
    )
  }
  return (
    <Redirect to="/"/>
  )
  }
}

export default UnknownPage