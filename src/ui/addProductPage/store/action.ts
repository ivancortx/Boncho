import { Dispatch } from 'react'

import { WRITE_PHOTO_URL } from './types'
import { addNewAuction } from 'api/api'
import { UserDataType } from '../../navigation/interfaces/navigationPage/navigationPageInterfaces'

export type ActionsTypes = WriteCurrentUserDataType
export type formValuesType = {
  productName: string,
  category: string,
  description: string,
  startPrice: string,
  priceStep: string,
  seePrice: string,
  stepTime: string,
  percentTimeStep: string
}

type WriteCurrentUserDataType = {
  type: typeof WRITE_PHOTO_URL
  data: string
}

export const writePhotoUrlAction = (data: string): WriteCurrentUserDataType => ({
  type: WRITE_PHOTO_URL,
  data
})

export const writePhotoUrl = (url: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  dispatch(writePhotoUrlAction(url))
}

export const addAuction = (formValues: formValuesType, startDate: Date|null, finishDate: Date|null, photoUrlsData: string[], auctionId: string, userData: UserDataType[]) => async (dispatch: Dispatch<ActionsTypes>) => {
  const obj = {
    userEmail: userData[0].email,
    userUid: userData[0].uid,
    productName: formValues.productName,
    category: formValues.category,
    description: formValues.description,
    startPrice: formValues.startPrice,
    priceStep: formValues.priceStep,
    seePrice: formValues.seePrice,
    stepTime: formValues.stepTime,
    percentTimeStep: formValues.percentTimeStep,
    startDate,
    finishDate,
    photoUrlsData: photoUrlsData,
    auctionId
  }

   addNewAuction(obj)
}