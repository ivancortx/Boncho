import {ActionsTypes} from './action'
import {Category} from '..'
import { FETCH_CATEGORIES_DATA, FETCH_PRODUCTS_DATA } from './types'
import { ProductDataType } from '../interfaces/CategoriesPage/categoriesPageInterfaces'

type InitialStateType = {
  categories: Category[],
  productsByCategory: ProductDataType[]
}

const initialState: InitialStateType = {
  categories: [],
  productsByCategory: []
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FETCH_CATEGORIES_DATA:
        return {
          ...state,
          categories: action.data
        }
    case FETCH_PRODUCTS_DATA:
      return  {
        ...state,
        productsByCategory: action.data
      }
    default:
      return state
  }
}










