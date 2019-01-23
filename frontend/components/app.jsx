import React from 'react'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Greetingcontainer from "./greet/greeting_container"

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
        <Route exact path="/login" component={LogInFormContainter}/>
        <Route exact path="/signup" component={SignUpFormContainter}/>


      </Switch>

    </div>
  )
}

export default App
