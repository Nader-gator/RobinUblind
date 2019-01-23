import React from 'react'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, MainAuth } from "../util/route_util";

import LogInFormContainter from "./session_form/login_form_container"
import SignUpFormContainter from "./session_form/sign_up_form_container"
import MainBodyContainer from "./login_body/body_container"

const App = () => {
  return <div>
      <Switch>

      </Switch>

      <header>

      </header>


      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainter} />
        <AuthRoute exact path="/signup" component={SignUpFormContainter} />
        <MainAuth exact path="/main" component={MainBodyContainer} />
        <Redirect from="/" to="/main"/>
      </Switch>
    </div>;
}

export default App
