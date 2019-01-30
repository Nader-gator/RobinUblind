import React from 'react'
import {Link} from 'react-router-dom'
import HeaderContainer from "../header/header_container"
import Loading from '../loading_page/loading_page'
import PorfolioChart from './portfolio_chart'

import Chart from "../chart/mini_chart"

const MainPage = ({ news, currentUser, loading, watchlist, data, stock, fetchTransactions, transactionLoading, transactions}) => {
  if (loading) {
    return <Loading/>
  } 

  const numberWithCommas = (x)=>{
    return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const mappedWatchlist = () => { 
    const list =watchlist.map((el,idx) => {
    if (data[el.nasdaq_code] === undefined) {
      return []
    }
    if (positions().length > 0) {
      if (Object.keys(transactions[1][1].open).includes(el.nasdaq_code))
      return []
    }
    
    return (
      <Link key={idx} to={el.nasdaq_code}>
        <h3>{el.nasdaq_code}</h3>
        <div>
          <Chart data={data[el.nasdaq_code]} />
        </div>
        <p>${(data[el.nasdaq_code].quote).toFixed(2)}</p>
      </Link>
    )
  })
  return list.reverse()
}
  const parsePortfolioVal = (type) => {

    if (transactions.length == 0 || typeof transactions == "object") {
      return "00.00"
    }
    switch (type) {
      case "totalVal":
        let tally = 0
        Object.values(transactions[1][1].open).forEach(el => {
          tally = tally + (el.stats.holding * el.stats.price)
        });
        return numberWithCommas(tally)
      case "dayChange":
        let todaysTally = 0
        let yesterdayssTally = 0
        Object.values(transactions[1][1].open).forEach(el => {
          todaysTally = todaysTally + (el.stats.holding * el.stats.price)
        });
        Object.values(transactions[1][0].open).forEach(el => {
          yesterdayssTally = yesterdayssTally + (el.stats.holding * el.stats.price)
        });
        
        return numberWithCommas(todaysTally - yesterdayssTally)
      case "percentChange":
        todaysTally = 0
        yesterdayssTally = 0
        Object.values(transactions[1][1].open).forEach(el => {
          todaysTally = todaysTally + (el.stats.holding * el.stats.price)
        });
        Object.values(transactions[1][0].open).forEach(el => {
          yesterdayssTally = yesterdayssTally + (el.stats.holding * el.stats.price)
        });
        return numberWithCommas((todaysTally - yesterdayssTally) / yesterdayssTally)
      default:
        return "00"
    }
  }

  const positions = () => {
    if (transactions[1] === undefined) {
      return []
    }
    
    return Object.keys(transactions[1][1].open).map((el,idx) => {
      return (<Link key={idx} to={el}>
        <h3>{el}</h3>
        <div>
          <Chart data={data[el]} />
        </div>
        <p>${(data[el].quote).toFixed(2)}</p>
      </Link>)
    })
    


  }

  return (
    <div>
      <header>
        <HeaderContainer/>

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
            window.onscroll = function () { myFunction() };
            var navbar = document.getElementById("watchlist");
            var sticky = navbar.offsetTop;

            function myFunction() {
              if (window.pageYOffset >= sticky) {
                navbar.classList.add("wsticky")
              } else {
                navbar.classList.remove("wsticky");
              }
            }
          })}

        </script>


      </header>
      <div className="entire-main-body">



        <div className="porfolio-performance">
          <h1>${parsePortfolioVal("totalVal")}</h1>
          <h2>${parsePortfolioVal("dayChange")} ({parsePortfolioVal("percentChange")}%)<span>Today</span></h2> 
        </div>

        
          <PorfolioChart 
          stock={stock}
          fetchTransactions={fetchTransactions}
          currentUser={currentUser}
          transactions={transactions}
          loading={transactionLoading}
          />

          {/* 22 Articles in here */}
        <div className="news-list">
          <h1>Recent News</h1>
          <ul>
            {news}
          </ul>
        
        </div>




        <div id='watchlist' className="watch-list wsticky">
          
          <h2>
            { positions().length > 1 ? "Positions" : ""}
          </h2>
          {positions().length > 1 ? (<span></span>) : null}
          {positions().length > 1 ? (<ul className="buying-list">
            {positions()}
          </ul>) : null}
          {/* {positions().length > 1 ? (<span className="optional-divider"></span>) : null} */}
          <h2>
            Watchlist
          </h2>
          <span></span>
          <ul>
            {mappedWatchlist()}
          </ul>
        </div>







      </div>

    </div>
  )
}

export default MainPage
