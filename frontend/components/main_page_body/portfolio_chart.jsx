import React from 'react'
import Chart from '../chart/chart'
import Loading from '../loading_page/body_loading'


class PortFolioChart extends React.Component{



  constructor(props){
    super(props)
    this.state = { w: true, m: false, tm: false, y: false }
  }



  //data for chart should be:
  // [
  //   {
  //     date: "01/01/2001",
  //     close: "125"
  //   }
  // ]
  // _______incoming data:
  // [
  //   (el=) {
  //     closed:[],
  //     date: 01/01/2001,
  //     open: {
  //       APPL: {
  //         data:[transaction detail],
  //         stats:{holidng: 50,price:125}
  //       }
  //     }
  //   }
  // ]

  parseData(data){
    if (data === undefined) {
      return {}
    }
    return data.map((el)=>{
      let runningTotal = 0
      Object.values(el.open).forEach(dataTouple => {
        runningTotal = runningTotal + (dataTouple.stats.holding * dataTouple.stats.price)
      });
      return {
        date: el.date,
        close: runningTotal
      }
    })
  }



  render(){
    if (this.props.loading) {
      return <Loading />
    }
  
    return (
      <div className="porfolio-chart">
        <Chart data={this.parseData(this.props.transactions[0])} />

        {/* SPAGHETTI CODE AHEAD, ENTER AT YOUR OWN RISK (it works tho :D ) */}
        <div className="stock-show-span-selectors">

          <p
            onClick={() => {
              this.props.fetchTransactions(this.props.currentUser.id, "1w",false).then(() =>
                this.setState({ viewsMode: 7 }))
              this.setState({ w: true, m: false, tm: false, y: false })
            }}
            className={this.state.w ? "range-selected" : null}
          >1W</p>

          <p onClick={() => {
            this.props.fetchTransactions(this.props.currentUser.id, "1m",false).then(() =>
              this.setState({ viewsMode: 30 }))
            this.setState({ w: false, m: true, tm: false, y: false })
          }}
            className={this.state.m ? "range-selected" : null}
          >1M</p>

          <p onClick={() => {
            this.props.fetchTransactions(this.props.currentUser.id, "3m",false).then(() =>
              this.setState({ viewsMode: 90 }))
            this.setState({ w: false, m: false, tm: true, y: false })
          }}
            className={this.state.tm ? "range-selected" : null}
          >3M</p>

          <p onClick={() => {
            this.props.fetchTransactions(this.props.currentUser.id, "1y",false).then(() =>
              this.setState({ viewsMode: false }))
            this.setState({ w: false, m: false, tm: false, y: true })
          }}
            className={this.state.y ? "range-selected" : null}
          >1Y</p>
        </div>
      </div>
    )
  }
}

export default PortFolioChart