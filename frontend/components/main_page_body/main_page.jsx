import React from 'react'
import {Link} from 'react-router-dom'
import Header from "../header/header_container"



const MainPage = ({articles, currentUser}) => {
  

  return (
    <div>
      <header>
        <Header/>

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
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>
            <Link to="/">
              <img src="https://designshack.net/wp-content/uploads/placekitten.jpg"/>
              <h2>Title</h2>
              <p>The actual news</p>
            </Link>

          </ul>
        
        </div>




        <div id='watchlist' className="watch-list wsticky">
          <h2>
            Watchlist
          </h2>
          <span></span>
          <ul>
            <Link to="/" >
              <h3>M</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBEX</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>ADBE</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
            <Link to="/" >
              <h3>LAST</h3>
              <div></div>
              <p>$0.00</p>
            </Link>
          </ul>
        </div>







      </div>

    </div>
  )
}

export default MainPage