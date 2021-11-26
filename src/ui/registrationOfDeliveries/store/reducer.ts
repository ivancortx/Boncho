import { WRITE_ALL_WAITING_DELIVERIES } from './types'
import { ActionsTypes } from './action'
import { WaitingDeliveryDataType } from '@/ui/cart/interfaces/CartPageInterfaces'

type InitialStateType = {
  allDeliveries: WaitingDeliveryDataType[]
}

const initialState: InitialStateType = {
  allDeliveries: []
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case WRITE_ALL_WAITING_DELIVERIES:
      return {
        ...state,
        allDeliveries: action.data
      }
    default:
      return state
  }
}
