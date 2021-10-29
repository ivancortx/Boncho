export type AuctionDataType = {
  userEmail: string
  userUid: string
  productName: string
  category: string
  description: string
  startPrice: string
  priceStep: string
  seePrice: string
  stepTime: string
  percentTimeStep: string
  startDate: Date
  finishDate: Date
  photoUrlsData: string[]
  auctionId: string
  isInStock: boolean
}