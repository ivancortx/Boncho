import { Dispatch } from 'react'

import { FETCH_CATEGORIES_DATA, FETCH_PRODUCTS_DATA } from './types'
import { loadCategories, loadProductsByCategory } from '@/api/api'
import { Category } from '..'
import { ProductDataType } from '../interfaces/CategoriesPage/categoriesPageInterfaces'

export type ActionsTypes = SetCategoryesType | SetProductsType;

type SetCategoryesType = {
  type: typeof FETCH_CATEGORIES_DATA
  data: Category[]
}

type SetProductsType = {
  type: typeof FETCH_PRODUCTS_DATA
  data: ProductDataType[]
}

export const setCategories = (data: Category[]): SetCategoryesType => ({
  type: FETCH_CATEGORIES_DATA,
  data,
})

export const setProducts = (data: ProductDataType[]): SetProductsType => ({
  type: FETCH_PRODUCTS_DATA,
  data,
})

export const fetchCategories = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadCategories(),
    data: Category[] = await response.data.categories
  dispatch(setCategories(data))
}

export const fetchProductsByCategory =
  (category: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    const response = await loadProductsByCategory(category),
      data: ProductDataType[] = await response.data
    dispatch(setProducts(data))
  }
