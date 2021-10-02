import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Routes } from '../../const/routes'
import { HomePage } from "ui/home";
import { CategoriesPage } from "ui/products/pages/CategoriesPage";
import { AddProductPage } from '../../../addProductPage/pages/AddProductPage'


export const AppRoutes: React.VFC = () => {
  return<Switch>
    <Route path={Routes.Home} exact component={HomePage}/>
    <Route path={Routes.Products} exact component={CategoriesPage}/>
    <Route path={Routes.AddProductPage} exact component={AddProductPage}/>

    <Redirect to={Routes.Home}/>
  </Switch>
}