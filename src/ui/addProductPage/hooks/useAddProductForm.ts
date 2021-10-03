import { useSelector } from "react-redux";
import { AppStateType } from "store";

export const useAddProductForm = () => {
  const categoriesData = useSelector((state: AppStateType) => state.categoriesData.categories)
  const photoUrlsData = useSelector((state: AppStateType) => state.addProductPageData.photoUrls)

  return ({categoriesData, photoUrlsData})
}