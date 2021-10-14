import { Dispatch } from 'react'

import { FETCH_CURRENT_PRICE, FETCH_PRODUCT } from './types'
import { ProductDataType } from '../interfaces/ProductPage/ProductPageInterfaces'
import { loadCurrentPrice, loadProduct } from 'api/api'

export type ActionsTypes = SetProductType | SetCurrentPriceType

type SetProductType = {
  type: typeof FETCH_PRODUCT
  data: ProductDataType[]
}

type SetCurrentPriceType = {
  type: typeof FETCH_CURRENT_PRICE
  data: string
}

export const setProduct = (data: ProductDataType[]): SetProductType => ({
  type: FETCH_PRODUCT,
  data
})

export const  setCurrentPrice = (data: string) : SetCurrentPriceType => ({
  type: FETCH_CURRENT_PRICE,
  data
})

export const fetchProduct = (auctionId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadProduct(auctionId)
  const data: ProductDataType[] = await response.data
  dispatch(setProduct(data))
}

export const fetchCurrentPrice = (auctionId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadCurrentPrice(auctionId)
  const data = await response.data.currentPrice
  dispatch(setCurrentPrice(data))
}

export const clearCurrentPrice = () => (dispatch: Dispatch<ActionsTypes>) => {
  dispatch(setCurrentPrice(''))
}

// export const updatePhotos = (title: string, data: object, token: string) => async (dispatch: any) => {
//   await sendPhoto(title, data, token)
//     .then (response => dispatch(fetchPhotos(title))
//     )
//
// }