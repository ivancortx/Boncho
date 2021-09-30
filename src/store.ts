import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {reducer as loginDataReducer} from 'ui/navigation'


let reducers = combineReducers({
  loginData: loginDataReducer
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