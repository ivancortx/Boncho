import { FETCH_CURRENT_PRICE, FETCH_PRODUCT } from './types'
import { ActionsTypes } from './action'
import { ProductDataType } from '../interfaces/ProductPage/ProductPageInterfaces'

type InitialStateType = {
  product: ProductDataType[]
  currentPrice: string
}

const initialState: InitialStateType = {
  product: [],
  currentPrice: ''
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.data
      }

    case FETCH_CURRENT_PRICE:
      return {
        ...state,
        currentPrice: action.data
      }
    default:
      return state
  }
}