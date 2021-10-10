type RoutesType = {
  Home: string
  Products: string
  AddProductPage: string
  AuctionsPage: string
  AuctionsPageItem: string
}

export const Routes: RoutesType = {
  Home: '/',
  Products: '/products',
  AddProductPage: '/add-product',
  AuctionsPage: '/auctions-page',
  AuctionsPageItem: '/auctions-page/:auctionId?'
}

