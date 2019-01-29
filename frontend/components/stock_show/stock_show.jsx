import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../header/header_container"
import Loading from '../loading_page/loading_page'
import Chart from '../chart/chart'
import AddWatchlistButton from '../watchlist_button/add_watch_list_button'
import RemoveWatchlistButton from '../watchlist_button/remove_watch_list_button'
import { withRouter } from 'react-router-dom';


class ShowAndBuyForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {numShares: 0, viewsMode: 30, d:false,w:false,m:true,tm:false,y:false}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  checkWatchlist(){
    let ownership = false
    this.props.watchlist.forEach(el => {
      if (el.nasdaq_code === this.props.match.params.stockCode) {
        ownership = true
      }
    });
    return ownership
  }

  numberWithCommas(x){
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  prepData(data){
    //used for deprecated chartkick
    let chartData = {}
    data.forEach(el => {
      chartData[el.date] = el.close
    });
    return chartData
  }

  dataSlice(arr,size){
    if(size === false || size === 1) {
      return arr
    }
    return arr.slice(Math.max(arr.length - size, 1))
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.sendTransaction({
      category: "buy",
      stock_code: this.props.stock.quote.symbol,
      price: this.props.stock.quote.delayedPrice,
      amount: this.state.numShares
    })
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

          <script>
            {document.addEventListener("DOMContentLoaded", () => {
              window.onscroll = function () { myFunction2() };
              var navbar = document.getElementById("watchlist-button");
              var sticky = navbar.offsetTop;

              function myFunction2() {
                if (window.pageYOffset >= sticky) {
                  navbar.classList.add("lsticky")
                } else {
                  navbar.classList.remove("lsticky");
                }
              }
            })}
          </script>


          <script>
            {document.addEventListener("DOMContentLoaded", ()=>{
              var el = document.getElementsByClassName("range-selected")
            })}

          </script>


        </header>
        <div className="entire-main-body">



          <div className="porfolio-performance">
            <h1>${this.props.stock.quote.close}</h1>
            <h2>${this.props.stock.quote.change} ({(this.props.stock.quote.changePercent * 100).toFixed(2)}%)<span>Today</span></h2>
          </div>

          <div className="porfolio-chart">
            <Chart data={this.dataSlice(this.props.stock.chart, this.state.viewsMode) } />

              {/* SPAGHETTI CODE AHEAD, ENTER AT YOUR OWN RISK (it works tho) */}
            <div className="stock-show-span-selectors">
              <p onClick={() => 
              {this.props.fetchCurrentStock(this.props.stock.quote.symbol,"1d",false).then(()=>
                this.setState({ viewsMode: 1 }))
                this.setState({ d: true, w: false, m: false, tm: false, y: false})
              }}
            className={this.state.d ? "range-selected" : null}
              >1D</p>

              <p 
                onClick={() => {
                  this.props.fetchCurrentStock(this.props.stock.quote.symbol, "1y", false).then(() =>
                    this.setState({ viewsMode: 7 }))
                  this.setState({ d: false, w: true, m: false, tm: false, y: false })
                }}
                className={this.state.w ? "range-selected" : null}
              >1W</p>

              <p onClick={() => {
                this.props.fetchCurrentStock(this.props.stock.quote.symbol, "1y", false).then(() =>
                  this.setState({ viewsMode: 30 }))
                this.setState({ d: false, w: false, m: true, tm: false, y: false })
              }}
              className={this.state.m ? "range-selected" : null}
              >1M</p>

              <p onClick={() => {
                this.props.fetchCurrentStock(this.props.stock.quote.symbol, "1y", false).then(() =>
                  this.setState({ viewsMode: 90 }))
                this.setState({ d: false, w: false, m: false, tm: true, y: false })
              }}
              className={this.state.tm ? "range-selected" : null}
              >3M</p>

              <p onClick={() => {
                this.props.fetchCurrentStock(this.props.stock.quote.symbol, "1y", false).then(() =>
                  this.setState({ viewsMode: false }))
                this.setState({ d: false, w: false, m: false, tm: false, y: true })
              }}
              className={this.state.y ? "range-selected" : null}
              >1Y</p>
            </div>
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
              <form onSubmit={this.handleSubmit}>
                <input className="number-shares-input" onChange={this.update("numShares")} type="number" />
                <input className="buy-button" type="submit" value="Submit Order" />
              </form>
              <span className="divider"></span>
              <div className="buyingPower">${this.numberWithCommas(this.props.user.bankroll)} is Available for Trading</div>
              <div className="markey-price">${this.props.stock.quote.delayedPrice}</div>
              <div className="estimated-cost-calc">${this.numberWithCommas(parseInt(this.props.stock.quote.delayedPrice) * this.state.numShares)}</div>
            </div>


            {this.checkWatchlist() ? (<RemoveWatchlistButton 
            user={this.props.user} 
            fetchWatchlist={this.props.fetchWatchlist} />) :
             (<AddWatchlistButton 
            fetchWatchlist={this.props.fetchWatchlist} 
            user={this.props.user} /> )}

            
          </div>

        </div>

      </div>
    )
  }

}




export default withRouter(ShowAndBuyForm)
