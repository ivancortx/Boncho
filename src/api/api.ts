import axios from 'axios'
import { ProductDataType } from '@/ui/productPage/interfaces/ProductPage/ProductPageInterfaces'
import { UserDataType } from '@/ui/navigation/interfaces/navigationPage/navigationPageInterfaces'
import Cookies from 'js-cookie'
import { DeliveryDataType } from '@/ui/cart'
import { AuctionDataType } from '@/ui/auctions'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {},
})

export const loadAuctions = () => {
  return instance.get('api/fetch-auctions')
}

export const loadProduct = (auctionId: string) => {
  return instance.get(`api/fetch-product/${auctionId}`)
}

export const loadCurrentPrice = (auctionId: string) => {
  return instance.get(`api/fetch-currentPrice/${auctionId}`)
}

export const modificatedCurrentPrice = (auctionId: string, stepPrice: string, seePrice: string) => {
  return instance.get(`api/modificated-currentPrice/${auctionId}&${stepPrice}&${seePrice}`, {
    headers: {
      token: Cookies.get('token'),
    },
  })
}

export const addNewProfile = (profile: object) => {
  return instance.post('api/add-profile', {
    profile,
  })
}

export const loadProfile = (email: string) => {
  return instance.get(`api/fetch-profile/${email}`)
}

export const loadCategories = async () => {
  return instance.get('api/fetch-categories', {
    headers: {
      token: Cookies.get('token'),
    },
  })
}

export const sendUserData = async (token: string) => {
  return instance.post('api/save-user', {
    token,
  })
}

export const addNewAuction = (data: object) => {
  return instance.post('api/add-auction', {
    data,
  })
}

export const loadProductsByCategory = (category: string) => {
  return instance.get(`api/fetch-products-by-category/${category}`, {
    headers: {
      token: Cookies.get('token'),
    },
  })
}

export const sendUserCash = (cash: number, token: string) => {
  return instance.post('api/update-user-cash', {
    cash,
    token,
  })
}

export const loadUserCash = (email: string, token: string) => {
  return instance.post('api/fetch-user-cash', {
    email,
    token,
  })
}

export const loadItemsInCart = () => {
  return instance.get('api/fetch-items-in-cart', {
    headers: {
      token: Cookies.get('token'),
    },
  })
}

export const buyCurrentProduct = (
  currentPrice: string,
  productData: ProductDataType,
  userData: UserDataType,
  token: string
) => {
  return instance.post('api/buy-product', {
    currentPrice,
    productData,
    userData,
    token,
  })
}

export const sendDeliveryForm = (deliveryData: DeliveryDataType,
                                 productData: AuctionDataType) => {
  return instance.post('api/send-delivery-data', {
    deliveryData,
    productData,
    token: Cookies.get('token')
  })
}

