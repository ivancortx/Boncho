import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import {Routes} from '../../const/routes'
import {HomePage} from "ui/home";
import {CategoriesPage} from "ui/products/pages/CategoriesPage";
import {AddProductPage} from 'ui/addProductPage/pages/AddProductPage'
import {AuctionsPage} from 'ui/auctions/pages/AuctionsPage'
import {ProductPage} from 'ui/productPage/pages/ProductPage'
import {ProfilePage} from "ui/profile/pages/ProfilePage";

export const AppRoutes: React.VFC = () => {
  return <Switch>
    <Route path={Routes.Home} exact component={HomePage}/>
    <Route path={Routes.Products} exact component={CategoriesPage}/>
    <Route path={Routes.AddProductPage} exact component={AddProductPage}/>
    <Route path={Routes.AuctionsPage} exact component={AuctionsPage}/>
    <Route path={Routes.AuctionsPageItem} exact component={ProductPage}/>
    <Route path={Routes.ProfilePage} exact component={ProfilePage}/>
    <Redirect to={Routes.Home}/>
  </Switch>
}