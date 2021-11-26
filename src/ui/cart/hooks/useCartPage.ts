import { useSelector } from 'react-redux'
import { AppStateType } from '@/store'

export const useCartPage = () => {
  const auctionsData = useSelector((state: AppStateType) => state.cartData.auctions)
  const waitingDeliveries = useSelector((state: AppStateType) => state.cartData.waitingDeliveries)
  return { auctionsData, waitingDeliveries }
}
