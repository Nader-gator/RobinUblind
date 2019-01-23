import React from 'react'
import {Link} from 'react-router-dom'


const Greeting = ({ currentUser, logout }) => {

  const notLoggedIn = () => {
    return (
      <nav className="login-signup-group">

        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign Up</Link>

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