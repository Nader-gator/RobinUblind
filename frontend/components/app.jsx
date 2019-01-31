import React from 'react'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LogInFormContainter from "./session_form/login_form_container"
import SignUpFormContainter from "./session_form/sign_up_form_container"
import MainBodyContainer from "./login_body/body_container"
import Main from "./main_page_body/main_page_container"
import StockShow from "../components/stock_show/stock_show_container"
import Unknown from './loading_page/unknown_stock'

const App = () => {
  return <div>
      <header />

      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainter} />
        <AuthRoute exact path="/signup" component={SignUpFormContainter} />
        <AuthRoute exact path="/main" component={MainBodyContainer} />
        <ProtectedRoute exact path="/" component={Main}/>
        <ProtectedRoute exact path="/:stockCode" component={StockShow}/>
        <Route exact path="/404" component={Unknown}/>
      </Switch>
    </div>;
}

export default App
