import { WRITE_PHOTO_URL } from './types'
import { ActionsTypes } from './action'

type InitialStateType = {
  photoUrls: string[]
}

const initialState: InitialStateType = {
  photoUrls: []
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case WRITE_PHOTO_URL:
      return {
        ...state,
        photoUrls: [...state.photoUrls, action.data]
      }
    default:
      return state
  }
}