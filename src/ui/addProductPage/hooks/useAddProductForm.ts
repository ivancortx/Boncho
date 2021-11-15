import { useSelector } from 'react-redux'
import { AppStateType } from 'store'

export const useAddProductForm = () => {
  const categoriesData = useSelector((state: AppStateType) => state.categoriesData.categories),
    photoUrlsData = useSelector((state: AppStateType) => state.addProductPageData.photoUrls),
    userData = useSelector((state: AppStateType) => state.loginData.userData)

  return { categoriesData, photoUrlsData, userData }
}
