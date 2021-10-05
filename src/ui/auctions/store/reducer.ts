import { WRITE_AUCTIONS } from './types'
import { ActionsTypes } from './action'
import { AuctionDataType } from '../interfaces/AddProductPage/addProductPageInterfaces'

type InitialStateType = {
  auctions: AuctionDataType[]
}

const initialState: InitialStateType = {
  auctions: []
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case WRITE_AUCTIONS:
      return {
        ...state,
        auctions: action.data
      }
    default:
      return state
  }
}