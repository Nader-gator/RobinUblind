import React from 'react'
import {Link} from 'react-router-dom'
import HeaderContainer from "./../header/header_container";


const Greeting = ({ currentUser }) => {

  const notLoggedIn = () => {
    return (
     
      <div className="main_body_container">
        <header>
          <HeaderContainer />

          <script>

            {document.addEventListener("DOMContentLoaded", () => {
              window.onscroll = function () { myFunction() };
            var navbar = document.getElementById("navbar");
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



        <div className="main-text">
          <h1>Invest for Free</h1>
          <p>nvest in stocks, ETFs, options, and cryptocurrencies, all commission-free, right from your phone or desktop.</p>

          <div className="body-signup">
            <Link className="sign-up"  to="/signup">Sign Up</Link>

          </div>
          
        </div>

        <div className="body-image-container">
          <img className="mainlogo" src={window.homeimgURL} />
        </div>

      </div>
      
    )
  }

  const isloggedIn = () => {
    
    return (
     <div id="tester">
        <header>
          <HeaderContainer />

          <script>

            {document.addEventListener("DOMContentLoaded", () => {
              window.onscroll = function () { myFunction() };
              var navbar = document.getElementById("navbar");
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
     </div>
    )
  }
  
  return currentUser ? isloggedIn() : notLoggedIn()
}

export default Greeting