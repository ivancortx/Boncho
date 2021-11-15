import { Dispatch } from 'react'

import { FETCH_CURRENT_PRICE, FETCH_PRODUCT } from './types'
import { ProductDataType } from '../interfaces/ProductPage/ProductPageInterfaces'
import { buyCurrentProduct, loadCurrentPrice, loadProduct } from '@/api/api'
import { UserDataType } from '../../navigation/interfaces/navigationPage/navigationPageInterfaces'
import { fetchUserCash } from '../../navigation'

export type ActionsTypes = SetProductType | SetCurrentPriceType;

type SetProductType = {
  type: typeof FETCH_PRODUCT;
  data: ProductDataType[];
};

type SetCurrentPriceType = {
  type: typeof FETCH_CURRENT_PRICE;
  data: string;
};

export const setProduct = (data: ProductDataType[]): SetProductType => ({
  type: FETCH_PRODUCT,
  data,
})

export const setCurrentPrice = (data: string): SetCurrentPriceType => ({
  type: FETCH_CURRENT_PRICE,
  data,
})

export const fetchProduct = (auctionId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadProduct(auctionId),
    data: ProductDataType[] = await response.data
  dispatch(setProduct(data))
}

export const fetchCurrentPrice =
  (auctionId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    const response = await loadCurrentPrice(auctionId),
      data = await response.data.currentPrice
    dispatch(setCurrentPrice(data))
  }

export const clearCurrentPrice = () => (dispatch: Dispatch<ActionsTypes>) => {
  dispatch(setCurrentPrice(''))
}

export const buyProduct =
  (currentPrice: string, productData: ProductDataType, userData: UserDataType, token: string) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
      const response = await buyCurrentProduct(currentPrice, productData, userData, token),
        data = await response.data
      if (data.status === 'good') {
      // @ts-ignore
        dispatch(fetchProduct(productData.auctionId))
        // @ts-ignore
        dispatch(fetchUserCash(userData.email, token))
      }
    }
