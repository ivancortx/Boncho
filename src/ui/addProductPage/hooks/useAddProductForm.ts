import { useSelector } from "react-redux";
import { AppStateType } from "store";

export const useAddProductForm = () => {
  const categoriesData = useSelector((state: AppStateType) => state.categoriesData.categories)

  return ({categoriesData})
}