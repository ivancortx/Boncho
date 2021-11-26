import { FETCH_ITEMS_IN_CART, WRITE_WAITING_DELIVERIES } from './types'
import { ActionsTypes } from './action'
import { AuctionDataType } from '@/ui/auctions'
import { WaitingDeliveryDataType } from '@/ui/cart/interfaces/CartPageInterfaces'

type InitialStateType = {
  auctions: AuctionDataType[]
  waitingDeliveries: WaitingDeliveryDataType[]
}

const initialState: InitialStateType = {
  auctions: [],
  waitingDeliveries: []
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FETCH_ITEMS_IN_CART:
      return {
        ...state,
        auctions: action.data
      }

    case WRITE_WAITING_DELIVERIES:
      return {
        ...state,
        waitingDeliveries: action.data
      }

    default:
      return state
  }
}
