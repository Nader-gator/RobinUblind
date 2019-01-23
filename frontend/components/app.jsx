import React from 'react'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute } from "../util/route_util"

import Greetingcontainer from "./greet/greeting_container"
import LogInFormContainter from "./session_form/login_form_container"
import SignUpFormContainter from "./session_form/sign_up_form"

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>RobinUblind</h1>
        </Link>
        <Greetingcontainer />
      </header>

      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainter}/>
        <AuthRoute exact path="/signup" component={SignUpFormContainter}/>


      </Switch>

    </div>
  )
}

export default App
