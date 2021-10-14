import { useSelector } from 'react-redux'
import { AppStateType } from '../../../store'

export const useProductPageWithData = () => {
  const currentPrice = useSelector((state: AppStateType) => state.productData.currentPrice)
  return ({ currentPrice })
}