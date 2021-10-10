import { Dispatch } from 'react'

import { FETCH_CATEGORIES_DATA } from './types'
import {loadCategories} from "api/api"
import {Category} from ".."

export type ActionsTypes = SetPhotosType

type SetPhotosType = {
  type: typeof FETCH_CATEGORIES_DATA
  data: Category[]
}

export const setCategories = (data: Category[]): SetPhotosType => ({
  type: FETCH_CATEGORIES_DATA,
  data
})

export const fetchCategories = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadCategories()
  const data: Category[] = await response.data.categories
  dispatch(setCategories(data))
}