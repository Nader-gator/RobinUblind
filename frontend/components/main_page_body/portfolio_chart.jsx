import React from 'react'
import Chart from '../chart/chart'
import Loading from '../loading_page/body_loading'
import { connect } from 'react-redux'

class PortFolioChart extends React.Component{
 


  constructor(props){
    super(props)
    this.state = { w: true, m: false, tm: false, y: false, viewsMode: 7}
    this.color = "green"
  }

  componentDidMount(){
    if (this.props.transactions.length === 0)
      this.props.fetchTransactionsMain(this.props.currentUser.id, "1y", false)
  }


  parseData(data){
    if (data === undefined) {
      return {}
    }
    let parsedData = data.map((el)=>{
      let runningTotal = 0
      Object.values(el.open).forEach(dataTouple => {
        runningTotal = runningTotal + (dataTouple.stats.holding * dataTouple.stats.price)
      });
      runningTotal = runningTotal + el.bankroll
      return {
        date: el.date,
        close: runningTotal
      }
    })
    parsedData = parsedData.slice(this.state.viewsMode * -1)
    this.changeColor(parsedData)
    return parsedData
  }

  changeColor(data){
    if (Object.keys(data).length === 0) {
      return null
    }
    const first = data[0].close
    const last = data[data.length - 1].close
    const stroke = (first < last) ? "green" : "red";
    this.color = stroke
  }
  

  render(){
    if (this.props.ownLoading.transactionLoading) {
      return <Loading />
    }
  
    return (
      <div className="porfolio-chart">
        <Chart data={this.parseData(this.props.transactions[0])} />

        <div className="stock-show-span-selectors">

          <p
            onClick={() => {
                this.setState({ viewsMode: 7 })
              this.setState({ w: true, m: false, tm: false, y: false })
            }}
            className={this.state.w ? `range-selected ${this.color}` : null}
          >1W</p>

          <p onClick={()=>{
              this.setState({ viewsMode: 30 })
              this.setState({ w: false, m: true, tm: false, y: false })
          }}
            className={this.state.m ? `range-selected ${this.color}` : null}
          >1M</p>

          <p onClick={() => {
              this.setState({ viewsMode: 90 })
            this.setState({ w: false, m: false, tm: true, y: false })
          }}
            className={this.state.tm ? `range-selected ${this.color}` : null}
          >3M</p>

          <p onClick={() => {
              this.setState({ viewsMode: false })
            this.setState({ w: false, m: false, tm: false, y: true })
          }}
            className={this.state.y ? `range-selected ${this.color}` : null}
          >1Y</p>
        </div>
      </div>
    )
  }
}
const mstop = ({ui:{loading}}) => {
  return {
    ownLoading: loading
  }
}

export default connect(mstop)(PortFolioChart)