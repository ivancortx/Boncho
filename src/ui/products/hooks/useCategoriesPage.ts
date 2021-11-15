import { useSelector } from 'react-redux'
import { AppStateType } from 'store'

export const useCategoriesPage = () => {
  const categoriesData = useSelector((state: AppStateType) => state.categoriesData.categories),
    productsData = useSelector((state: AppStateType) => state.categoriesData.productsByCategory)

  return { categoriesData, productsData }
}
