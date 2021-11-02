import {Dispatch} from 'react'

import { CLEAN_USER_DATA, WRITE_CASH_DATA, WRITE_CURRENT_USER_DATA } from './types'
import {loadUserCash, sendUserCash, sendUserData} from 'api/api'
import {UserDataType} from '../interfaces/navigationPage/navigationPageInterfaces'

export type ActionsTypes = WriteCurrentUserDataType | WriteCashDataType | CleanUserDataType

type WriteCurrentUserDataType = {
  type: typeof WRITE_CURRENT_USER_DATA
  data: UserDataType
}

type WriteCashDataType = {
  type: typeof WRITE_CASH_DATA
  data: number
}

type CleanUserDataType = {
  type: typeof CLEAN_USER_DATA
  data: []
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

export const cleanUserData = () => ({
  type: CLEAN_USER_DATA,
  data: []
})

export const updateUserCash = (cash: number) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await sendUserCash(cash)
  dispatch(writeCashData(response.data.cash))
}

export const fetchUserCash = (email: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadUserCash(email)
  debugger
  dispatch(writeCashData(response.data.cash))
}

export const clearUserData = () => async (dispatch: Dispatch<ActionsTypes>) => {
  // @ts-ignore
  dispatch(cleanUserData())
}