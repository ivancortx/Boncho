import { Dispatch } from 'react'

import { WRITE_PHOTO_URL } from './types'

export type ActionsTypes = WriteCurrentUserDataType

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