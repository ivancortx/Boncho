import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Routes } from '../../const/routes'
import {HomePage} from "ui/home";
import {CategoriesPage} from "../../../products/pages/CategoriesPage";


export const AppRoutes: React.VFC = () => {
  return<Switch>
    <Route path={Routes.Home} exact component={HomePage}/>
    <Route path={Routes.Products} exact component={CategoriesPage}/>

    <Redirect to={Routes.Home}/>
  </Switch>
}