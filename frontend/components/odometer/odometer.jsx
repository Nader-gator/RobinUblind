import React from "react"

class Odometer extends React.Component{
  constructor(props){
    super(props)
    this.columMapper = this.columMapper.bind(this)
  }


  numberWithOutPeriods = (x) => {
    x = parseFloat(x)
    return x.toFixed(2).toString().replace(".", "")
  }

  columMapper(el, idx) {
    const fontSize = 36
    const yOffset = -(9-el) * (fontSize+6)

    return(
      <div key={idx} className= 'number-column' style={{ height: fontSize - 2 }}>
        <div className="number-wrapper" style={{ transform: `translateY(${yOffset}px)`, transition: "transform 1s ease"}}>
          <span style={{ fontSize,width: "20px" }}>9</span>
          <span style={{ fontSize,width: "20px" }}>8</span>
          <span style={{ fontSize,width: "20px" }}>7</span>
          <span style={{ fontSize,width: "20px" }}>6</span>
          <span style={{ fontSize,width: "20px" }}>5</span>
          <span style={{ fontSize,width: "20px" }}>4</span>
          <span style={{ fontSize,width: "20px" }}>3</span>
          <span style={{ fontSize,width: "20px" }}>2</span>
          <span style={{ fontSize,width: "20px" }}>1</span>
          <span style={{ fontSize,width: "20px" }}>0</span>
        </div>
      </div >
    )
  }




  render(){
    const fontSize = 36
    const splitNums = this.numberWithOutPeriods(this.props.value).split('')
    const columns = splitNums.map((el, idx) => {
      return this.columMapper(el, idx)
    })
    columns.splice(columns.length - 2, 0, <p key="decimal" style={{fontSize}} className="value-decimal">.</p>)
    return(
      <div className="odometer" style={{height: fontSize-2}}>
        <div className="odometer-wrapper" style={{fontSize}}>
          ${columns}
        </div>
      </div>
    )
  }
  }


export default Odometer