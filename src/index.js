import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile'
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom'

import Login from './containers/login/login'
import Register from "./containers/register/register";
import Dashboard from "./containers/dashboard/dashboard";

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route component={Dashboard}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))