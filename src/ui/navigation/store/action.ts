import { Dispatch } from 'react'

import { WRITE_CASH_DATA, WRITE_CURRENT_USER_DATA } from './types'
import { sendUserCash, sendUserData } from 'api/api'
import { UserDataType } from '../interfaces/navigationPage/navigationPageInterfaces'

export type ActionsTypes = WriteCurrentUserDataType | WriteCashDataType

type WriteCurrentUserDataType = {
  type: typeof WRITE_CURRENT_USER_DATA
  data: UserDataType
}

type WriteCashDataType = {
  type: typeof WRITE_CASH_DATA
  data: number
}

export const writeCurrentUserData = (data: UserDataType): WriteCurrentUserDataType => ({
  type: WRITE_CURRENT_USER_DATA,
  data
})

export const writeCashData = (data: number): WriteCashDataType => ({
  type: WRITE_CASH_DATA,
  data
})

export const updateUserRole = (token: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await sendUserData(token)
  const newObj: UserDataType = {
    auth_time: response.data.auth_time,
    email: response.data.email,
    email_verified: response.data.email_verified,
    name: response.data.name,
    picture: response.data.picture,
    roles: response.data.roles,
    uid: response.data.uid
  }
  dispatch(writeCurrentUserData(newObj))
}

export const updateUserCash = (cash: number) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await sendUserCash(cash)

  console.log(response.data)
  // const confirmCash: number = response.data.cash
  // dispatch(writeCashData(confirmCash))
}