import {useSelector} from "react-redux";
import {AppStateType} from "store";
import {useEffect} from "react";

export const useCategoriesPage = () => {
  const categoriesData = useSelector((state: AppStateType) => state.categoriesData.categories)

  return ({categoriesData})
}