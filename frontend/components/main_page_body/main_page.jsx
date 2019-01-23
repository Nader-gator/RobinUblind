import React from 'react'
import {Link} from 'react-router-dom'
import Header from "../header/header_container"

const MainPage = ({ }) => {

  return (
    <div>
      <header>
        <Header/>
      </header>
      <h1>Sup, you're logged in..for now</h1>
    </div>
  )
}

export default MainPage