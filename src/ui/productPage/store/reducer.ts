import { FETCH_PRODUCT } from './types'
import { ActionsTypes } from './action'
import { ProductDataType } from '../interfaces/ProductPage/ProductPageInterfaces'

type InitialStateType = {
  product: ProductDataType[]
}

const initialState: InitialStateType = {
  product: []
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.data
      }
    default:
      return state
  }
}