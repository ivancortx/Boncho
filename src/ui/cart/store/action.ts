import { Dispatch } from 'react'

import { FETCH_ITEMS_IN_CART } from './types'
import { AuctionDataType } from '@/ui/auctions'
import { loadItemsInCart } from '@/api/api'

export type ActionsTypes = writeItemsType;

type writeItemsType = {
  type: typeof FETCH_ITEMS_IN_CART;
  data: AuctionDataType[];
};

export const writeItems = (data: AuctionDataType[]): writeItemsType => ({
  type: FETCH_ITEMS_IN_CART,
  data
})

export const fetchItemsInCart = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadItemsInCart(),
    data = await response.data
  dispatch(writeItems(data.auctions))
}
