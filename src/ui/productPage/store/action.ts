import { Dispatch } from 'react'

import { FETCH_PRODUCT } from './types'
import { ProductDataType } from '../interfaces/ProductPage/ProductPageInterfaces'
import { loadProduct } from '../../../api/api'

export type ActionsTypes = SetPhotosType

type SetPhotosType = {
  type: typeof FETCH_PRODUCT
  data: ProductDataType[]
}

export const setPropduct = (data: ProductDataType[]): SetPhotosType => ({
  type: FETCH_PRODUCT,
  data
})

export const fetchProduct = (auctionId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadProduct(auctionId)
  const data: ProductDataType[] = await response.data
  dispatch(setPropduct(data))
}

// export const updatePhotos = (title: string, data: object, token: string) => async (dispatch: any) => {
//   await sendPhoto(title, data, token)
//     .then (response => dispatch(fetchPhotos(title))
//     )
//
// }