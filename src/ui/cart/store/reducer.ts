import { FETCH_ITEMS_IN_CART } from './types'
import { ActionsTypes } from './action'
import { AuctionDataType } from '@/ui/auctions'

type InitialStateType = {
  auctions: AuctionDataType[];
}

const initialState: InitialStateType = {
  auctions: [],
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
  case FETCH_ITEMS_IN_CART:
    return {
      ...state,
      auctions: action.data,
    }
  default:
    return state
  }
}
