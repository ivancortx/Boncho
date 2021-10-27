import { WRITE_CASH_DATA, WRITE_CURRENT_USER_DATA } from './types'
import { ActionsTypes } from './action'
import { UserDataType } from '../interfaces/navigationPage/navigationPageInterfaces'

type InitialStateType = {
  userData: UserDataType[]
  currentCash: number
}

const initialState: InitialStateType = {
  userData: [],
  currentCash: 0
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case WRITE_CURRENT_USER_DATA:
      return {
        ...state,
        userData: [action.data]
      }
    case WRITE_CASH_DATA:
      return {
        ...state,
        currentCash: action.data
      }
    default:
      return state
  }
}