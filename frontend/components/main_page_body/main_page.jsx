import React from 'react'
import {Link} from 'react-router-dom'
import HeaderContainer from "../header/header_container"
import Loading from '../loading_page/loading_page'

import Chart from "../chart/mini_chart"

const MainPage = ({news, currentUser, loading, watchlist, data}) => {
  if (loading) {
    return <Loading/>
  } 



  const mappedWatchlist = () => { 
    const list =watchlist.map((el,idx) => {
    if (data[el.nasdaq_code] === undefined) {
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




        <div id='watchlist' className="watch-list wsticky">
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
