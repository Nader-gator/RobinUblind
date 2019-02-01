import React from 'react'
import Chart from '../chart/chart_for_stock'

class StockChart extends React.Component{
  
  constructor(props){
    super(props)
    this.state = { viewsMode: 30, d:false,w:false,m:true,tm:false,y:false }
    this.color = 'green'
  }


  changeColor(data) {
    if (Object.keys(data).length === 0) {
      return null
    }
    debugger
    const first = data[0].close;
    const last = data[data.length - 1].close;
    // let stroke
    if (first < last) {
      this.color = "green"} else{this.color = "red"}
    // this.color = stroke
  }


  dataSlice(arr, size) {
    if (size === false || size === 1) {
      return arr
    }
    let result = []
    arr.slice(Math.max(arr.length - size, 1)).forEach(el => {
      result.push({ date: el.date, close: el.close })
    })
    this.changeColor(result)
    return result
  }

  render(){
    return (

      <div className="porfolio-chart">
        <Chart data={this.dataSlice(this.props.stock.chart, this.state.viewsMode)}
          color={this.color}
        />


        <div className="stock-show-span-selectors">
          <p onClick={() => {
            this.props.fetchCurrentStock(this.props.stock.quote.symbol, "1d", false).then(() =>{
              this.setState({ viewsMode: 1 });
              this.setState({ d: true, w: false, m: false, tm: false, y: false });
            })
          }}
            className={this.state.d ? `range-selected ${this.color}` : null}
          >1D</p>

          <p
            onClick={() => {
              this.props.fetchCurrentStock(this.props.stock.quote.symbol, "1y", false).then(() =>
                this.setState({ viewsMode: 7 }))
              this.setState({ d: false, w: true, m: false, tm: false, y: false })
            }}
            className={this.state.w ? `range-selected ${this.color}` : null}
          >1W</p>

          <p onClick={() => {
            this.props.fetchCurrentStock(this.props.stock.quote.symbol, "1y", false).then(() =>
              this.setState({ viewsMode: 30 }))
            this.setState({ d: false, w: false, m: true, tm: false, y: false })
          }}
            className={this.state.m ? `range-selected ${this.color}` : null}
          >1M</p>

          <p onClick={() => {
            this.props.fetchCurrentStock(this.props.stock.quote.symbol, "1y", false).then(() =>
              this.setState({ viewsMode: 90 }))
            this.setState({ d: false, w: false, m: false, tm: true, y: false })
          }}
            className={this.state.tm ? `range-selected ${this.color}` : null}
          >3M</p>

          <p onClick={() => {
            this.props.fetchCurrentStock(this.props.stock.quote.symbol, "1y", false).then(() =>
              this.setState({ viewsMode: 365 }))
            this.setState({ d: false, w: false, m: false, tm: false, y: true })
          }}
            className={this.state.y ? `range-selected ${this.color}` : null}
          >1Y</p>
        </div>
      </div>
    )
  }
}

export default StockChart