import {ActionsTypes} from './action'
import {Category} from "../interfaces/CategoriesPage/categoriesPageInterfaces";
import {FETCH_CATEGORIES_DATA} from "./types";

type InitialStateType = {
  categories: Category[]
}

const initialState: InitialStateType = {
  categories: []
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FETCH_CATEGORIES_DATA:
        return {
          ...state,
          categories: action.data
        }
    default:
      return state
  }
}










