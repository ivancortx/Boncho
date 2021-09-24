import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Routes } from '../../const/routes'
import {HomePage} from "ui/home";


export const AppRoutes: React.VFC = () => {
  return<Switch>
    <Route path={Routes.Home} exact component={HomePage}/>

    <Redirect to={Routes.Home}/>
  </Switch>
}