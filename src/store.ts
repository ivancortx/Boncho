import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {reducer as loginDataReducer} from 'ui/navigation'
import {reducer as categoriesDatareducer} from  'ui/products'
import {reducer as addProductPageDataReducer} from './ui/addProductPage'
import {reducer as auctionsDataReducer} from './ui/auctions'


let reducers = combineReducers({
  loginData: loginDataReducer,
  categoriesData: categoriesDatareducer,
  addProductPageData: addProductPageDataReducer,
  auctionsData: auctionsDataReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
))

// @ts-ignore
window.store = store

export default store