import { Dispatch } from 'react'

import { FETCH_CATEGORIES_DATA } from './types'
import {loadCategories} from "api/api";
import {Category} from "../interfaces/CategoriesPage/categoriesPageInterfaces";

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

// export const updatePhotos = (title: string, data: object, token: string) => async (dispatch: any) => {
//   await sendPhoto(title, data, token)
//     .then (response => dispatch(fetchPhotos(title))
//   )

