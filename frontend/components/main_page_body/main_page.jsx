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
      <br/><br/><br/><br/>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        <h1>Sup my dude</h1>
        

        <div className="porfolio-performance">
          
        </div>

        <div className="porfolio-chart"></div>


        <div className="news"></div>





        <div className="watch-list"></div>

      </div>

    </div>
  )
}

export default MainPage