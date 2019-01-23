import React from 'react'
import {Link} from 'react-router-dom'


const Greeting = ({ currentUser, logout }) => {

  const notLoggedIn = () => {
    return (
        <nav className="login-signup-bar">

        <Link className="home-link-button" to="/">
        <img className="mainlogo" src={window.logoURL} />
        RobinUblind</Link>
        <div className="middle-filler">
          <Link to="/" className="filler-link">Investing</Link>
          <Link to="/" className="filler-link">Cash Management</Link>
          <Link to="/" className="filler-link">Blog</Link>
          <Link to="/" className="filler-link">Help</Link>
          <Link to="/" className="filler-link">Careers</Link>
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
        <h2 className="user-greet-message">Back to gamblin eh?</h2>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </hgroup>
    )
  }
  
  return currentUser ? isloggedIn() : notLoggedIn()
}

export default Greeting