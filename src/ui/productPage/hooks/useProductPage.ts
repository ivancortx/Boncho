import { useSelector } from 'react-redux'
import { AppStateType } from '../../../store'

export const useProductPage = () => {
  const productData = useSelector((state: AppStateType) => state.productData.product[0])
  return { productData }
}
