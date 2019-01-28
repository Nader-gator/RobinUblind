import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../header/header_container"
import Loading from '../loading_page/loading_page'
import Chart from '../chart/chart'
class ShowAndBuyForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {numShares: 0, viewsMode: 7}
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  numberWithCommas(x){
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  prepData(data){
    //to be used for deprecated chartkick
    let chartData = {}
    data.forEach(el => {
      chartData[el.date] = el.close
    });
    return chartData
  }

  dataSlice(arr,size){
    return arr.slice(Math.max(arr.length - size, 1))
  }

  render(){
    if (this.props.loading.newsLoading || this.props.loading.stockLoading) {
      return <Loading />
    }


    return (
      <div>
        <header>
          <Header />

          <script>

            {document.addEventListener("DOMContentLoaded", () => {
              window.onscroll = function () { myFunction() };
              var navbar = document.getElementById("loggedin-navbar");
              var sticky = navbar.offsetTop;

              function myFunction() {
                if (window.pageYOffset >= sticky) {
                  navbar.classList.add("sticky")
                } else {
                  navbar.classList.remove("sticky");
                }
              }
            })}

          </script>

          <script>

            {document.addEventListener("DOMContentLoaded", () => {
              window.onscroll = function () { myFunction2() };
              var navbar = document.getElementById("stock-buy");
              var sticky = navbar.offsetTop;

              function myFunction2() {
                if (window.pageYOffset >= sticky) {
                  navbar.classList.add("bsticky")
                } else {
                  navbar.classList.remove("bsticky");
                }
              }
            })}

          </script>


        </header>
        <div className="entire-main-body">



          <div className="porfolio-performance">
            <h1>$0.00</h1>
            <h2>$0.00 (0.00%)<span>Today</span></h2>
          </div>

          <div className="porfolio-chart">
            {/* ---------------------------CHART GOES HERE----------------------------------- */}
            <Chart data={this.dataSlice(this.props.stock.chart, this.state.viewsMode) } />
          </div>
          {/* 22 Articles in here */}
          <div className="news-list">
            <h1>Recent News</h1>
            <ul>
              {this.props.news}
            </ul>

          </div>



          <div id='stock-buy' className=" bsticky stock-buy">
            <h2>
              Buy {this.props.stock.quote.symbol}
            </h2>
            <span></span>
            <div className="bottom-container">
              <div className="share-selector">
                <p>Shares</p>
              </div>
              <div className="market-price">
                <p>Market Price</p>
              </div>
              <span className="divider"></span>

              <div className="estimated-cost">
                <p>Estimated Cost</p>
              </div>
              {/* new line here */}
              <form >
                <input className="number-shares-input" onChange={this.update("numShares")} type="number" />
                <input className="buy-button" type="submit" value="submit-order" value="Submit Order" />
              </form>
              <span className="divider"></span>
              <div className="buyingPower">${this.props.user.bankroll} is Available for Trading</div>
              <div className="markey-price">${this.props.stock.quote.delayedPrice}</div>
              <div className="estimated-cost-calc">${this.numberWithCommas(parseInt(this.props.stock.quote.delayedPrice) * this.state.numShares)}</div>
            </div>
          </div>
        </div>

      </div>
    )
  }

}




export default ShowAndBuyForm
