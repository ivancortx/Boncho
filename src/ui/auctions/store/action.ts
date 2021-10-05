import { Dispatch } from 'react'

import { WRITE_AUCTIONS } from './types'
import { loadAuctions } from 'api/api'
import { AuctionDataType } from '../interfaces/AddProductPage/addProductPageInterfaces'

export type ActionsTypes = writeAuctionsType

type writeAuctionsType = {
  type: typeof WRITE_AUCTIONS
  data: AuctionDataType[]
}

export const writeAuctions = (data: AuctionDataType[]): writeAuctionsType => ({
  type: WRITE_AUCTIONS,
  data
})

export const fetchAuctions = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadAuctions()
  const data = await response.data
  console.log()
  dispatch(writeAuctions(data.auctions))
}