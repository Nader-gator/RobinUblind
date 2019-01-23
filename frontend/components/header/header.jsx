import React from 'react'
import {Link} from 'react-router-dom'


const Greeting = ({ currentUser, logout, demoUser }) => {

  const notLoggedIn = () => {
    return (
      <nav id="navbar" className="login-signup-bar sticky">

        <Link className="home-link-button" to="/main">
        <img className="mainlogo" src={window.logoURL} />

        <span>
          RobinUblind
        </span>
        
        </Link>
        <div className="middle-filler">
          <Link to="/main" className="filler-link">Investing</Link>
          <Link to="/main" className="filler-link">Cash Management</Link>
          <Link to="/main" className="filler-link">Blog</Link>
          <Link to="/main" className="filler-link">Help</Link>
          <button className="demo-user" onClick={demoUser}>Demo User</button>
        </div>
        

        <Link className="login-button"  to="/login">Log in</Link>
        <Link className="sign-up"  to="/signup">Sign Up</Link>
        <div className="flex-box-divider-2"></div>

      </nav>
    )
  }

  const isloggedIn = () => {
    
    return (
      <hgroup>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </hgroup>
    )
  }
  
  return currentUser ? isloggedIn() : notLoggedIn()
}

export default Greeting