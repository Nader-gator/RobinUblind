import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from '../search_bar/search_bar_container'

const Greeting = ({ currentUser, logout, demoUser,resetNews }) => {

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
          {/* <Link to="/main" className="filler-link">Investing</Link>
          <Link to="/main" className="filler-link">Cash Management</Link>
          <Link to="/main" className="filler-link">Blog</Link>
          <Link to="/main" className="filler-link">Help</Link> */}
          <button className="demo-user" onClick={demoUser}>Demo User</button>
        </div>
        

        <Link className="login-button"  to="/login">Log in</Link>
        <Link className="sign-up"  to="/signup">Sign Up</Link>
        <div className="flex-box-divider-2"></div>

      </nav>
    )
  }
  const isloggedIn = () => {
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
      <hgroup id="loggedin-navbar" className="logged-in-nav-bar sticky">



        <div className="navbar_logo">
          <Link 
          to="/" 
          className="navbar_logo"
            onClick={() => { 
              window.scrollTo(0, 0) 
              resetNews()
            }}
           >
            <img className="navbar_logo" src={window.logoURL} />
          </Link>
        </div>

        <SearchBar />
        {/* <div className="search-bar">
            <input type="text" placeholder=" 🔍 Search"/>
        </div> */}

        <nav className="navbar">

            



          <div className="dropdown">
            <button className="dropbtn">Account
            </button>

            <div className="dropdown-content">
              <ul>
                <li className="user-email">
                  {currentUser.email}
                </li>
                <li className="user-portfolio">
                  <div>
                    <span>{numberWithCommas(currentUser.bankroll)}</span>
                    <p>Available Funds</p>
                  </div>
                  <div className="fix2"></div>
                </li>


                {/* <li>
                  <a href="#">💼 Account</a>
                </li> */}
                <li>
                  <Link to='history'>🕑 History</Link>
                  {/* <a href="/history">🕑 History</a> */}
                </li>
                <li className="log-out">
                  <div className="fix"></div>
                  <a href="#" onClick={logout}>↪ Sign Out</a>
                </li>
              </ul>
              
            </div>

          </div>
          {/* <div className="dropdown2">
            <button className="dropbtn2">Notifications
            </button>

            <div className="dropdown-content2">
              <ul>
                <li>
                  <Link to="/">Congrats you just lost all your money</Link>
                </li>
                  <div className="notf-separator"></div>
                <li>
                  <Link to="/">Your trade for 50 Theranos shares was executed</Link>
                </li>
                  <div className="notf-separator"></div>
                <li>
                  <Link to="/">Your $100 is deposited and ready for trading</Link>
                </li>
              </ul>
              
            </div>

          </div> */}

          
          <Link to="/" onClick={() => { window.scrollTo(0, 0) }}>Home</Link>

      </nav>

      </hgroup>
    )
  }
  
  return currentUser ? isloggedIn() : notLoggedIn()
}

export default Greeting

  // < button className = "logout-button" onClick = { logout } > Log Out</button >