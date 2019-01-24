import React from 'react'
import {Link} from 'react-router-dom'
import Header from "../header/header_container"

const MainPage = ({ }) => {

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


      </header>
      <div className="entire-main-body">



        <div className="porfolio-performance">
          <h1>portfolio value goes here</h1>
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




        <div className="watch-list">
          <ul>
            <li>
              <p>Placeholder</p>
            </li>
            <li>
              <p>Placeholder</p>
            </li>
            <li>
              <p>Placeholder</p>
            </li>
            <li>
              <p>Placeholder</p>
            </li>
            <li>
              <p>Placeholder</p>
            </li>
            <li>
              <p>Placeholder</p>
            </li>
            <li>
              <p>Placeholder</p>
            </li>
            <li>
              <p>Placeholder</p>
            </li>
            <li>
              <p>Placeholder</p>
            </li>
          </ul>
        </div>







      </div>

    </div>
  )
}

export default MainPage