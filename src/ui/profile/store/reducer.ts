import { WRITE_PROFILE_DATA } from './types'
import { ActionsTypes } from './action'
import { ProfileDataType } from '../interfaces/PrfilePageInterfaces'

type InitialStateType = {
  profileData: ProfileDataType[];
};

const initialState: InitialStateType = {
  profileData: [],
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
  case WRITE_PROFILE_DATA:
    return {
      ...state,
      profileData: [action.data],
    }
  default:
    return state
  }
}
