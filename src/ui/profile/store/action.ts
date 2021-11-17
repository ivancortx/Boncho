import { Dispatch } from 'react'

import { WRITE_PROFILE_DATA } from './types'
import { ProfileDataType } from '../interfaces/PrfilePageInterfaces'
import { addNewProfile, loadProfile } from '@/api/api'

export type ActionsTypes = writeProfileType;

type writeProfileType = {
  type: typeof WRITE_PROFILE_DATA;
  data: ProfileDataType;
};

export const writeProfile = (data: ProfileDataType): writeProfileType => ({
  type: WRITE_PROFILE_DATA,
  data
})

export const addProfile =
  (
    formValues: ProfileDataType,
    email: string,
    photoUrl: string,
    currentUserProfile: ProfileDataType[]
  ) =>
    async () => {
      const obj = {
        email: email,
        login: formValues.login,
        name: formValues.login,
        secondName: formValues.secondName,
        photoUrl
      }
      if (obj.photoUrl == '' && currentUserProfile[0] !== undefined) {
        if (currentUserProfile[0].photoUrl !== undefined) {
          if (currentUserProfile[0].photoUrl.length > 0) {
            obj.photoUrl = currentUserProfile[0].photoUrl
          }
        }
      }
      try {
        await addNewProfile(obj)
      } catch (e) {
        console.log(e)
      }
    }

export const addPhotoToProfile =
  (email: string, photoUrl: string, currentUserProfile: ProfileDataType[]) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
      const obj = {
        email: email,
        login: currentUserProfile[0].login,
        name: currentUserProfile[0].name,
        secondName: currentUserProfile[0].secondName,
        photoUrl: photoUrl
      }
      await addNewProfile(obj)
      // @ts-ignore
      dispatch(fetchProfileData(email))
    }

export const fetchProfileData = (email: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const res = await loadProfile(email),
    data = await res.data
  dispatch(writeProfile(data))
}
