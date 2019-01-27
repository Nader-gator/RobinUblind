import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../header/header_container"
import Loading from '../loading_page/loading_page'


const StockShowPage = ({user, news, stock, loading }) => {

  if (loading.newsLoading || loading.stockLoading) {
    return <Loading/>
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
          <h1>Chart goes here</h1>
        </div>
        {/* 22 Articles in here */}
        <div className="news-list">
          <h1>Recent News</h1>
          <ul>
            {news}
          </ul>

        </div>



        <div id='stock-buy' className=" bsticky stock-buy">
          <h2>
            Buy {stock.quote.symbol}
          </h2>
          <span></span>
          <div className="bottom-container">
            <div className="share-selector">
            <p>Shares</p>
            </div>
            <div className="market-price">
              <p>Market Price</p>
            </div>
            <div className="estimated-cost">
              <p>Estimated Cost</p>
            </div>
            <button className="buy-button" type="submit" value="submit-order">Submit Order</button>
            <span className="divider"></span>
            <div className="buyingPower">${user.bankroll} is Available for Trading</div>
            {/* new line here */}
            <input className="number-shares-input" type="text" onClick={()=>{return 0}} />
            <div className="markey-price">{stock.quote.delayedPrice}</div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default StockShowPage
