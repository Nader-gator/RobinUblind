import React from 'react'
import {Link} from 'react-router-dom'


const Greeting = ({ currentUser }) => {

  const notLoggedIn = () => {
    return (
        
      <div className="main_body_container">
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
     <div></div>
    )
  }
  
  return currentUser ? isloggedIn() : notLoggedIn()
}

export default Greeting