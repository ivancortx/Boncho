import { useSelector } from 'react-redux'
import { AppStateType } from '@/store'

export const useAuctionPage = () => {
  const auctionsData = useSelector((state: AppStateType) => state.auctionsData.auctions)
  return { auctionsData }
}
