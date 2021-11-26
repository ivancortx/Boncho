import { Dispatch } from 'react'

import { FETCH_ITEMS_IN_CART, WRITE_WAITING_DELIVERIES } from './types'
import { AuctionDataType } from '@/ui/auctions'
import { loadItemsInCart, loadWaitingDeliveries } from '@/api/api'
import { WaitingDeliveryDataType } from '@/ui/cart/interfaces/CartPageInterfaces'

export type ActionsTypes = writeItemsType | WaitingDeliveriesType

type writeItemsType = {
  type: typeof FETCH_ITEMS_IN_CART
  data: AuctionDataType[]
}

export const writeItems = (data: AuctionDataType[]): writeItemsType => ({
  type: FETCH_ITEMS_IN_CART,
  data
})

type WaitingDeliveriesType = {
  type: typeof WRITE_WAITING_DELIVERIES
  data: WaitingDeliveryDataType[]
}

export const writeWaitingDeliveries = (data: WaitingDeliveryDataType[]): WaitingDeliveriesType => ({
  type: WRITE_WAITING_DELIVERIES,
  data
})

export const fetchItemsInCart = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadItemsInCart(),
    data = await response.data
  dispatch(writeItems(data.auctions))
}

export const fetchWaitingDeliveries = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadWaitingDeliveries()
  const data = await response.data
  dispatch(writeWaitingDeliveries(data.products))
}


