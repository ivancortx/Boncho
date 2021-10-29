import axios from 'axios'
import {ProductDataType} from "../ui/productPage/interfaces/ProductPage/ProductPageInterfaces";
import {UserDataType} from "../ui/navigation/interfaces/navigationPage/navigationPageInterfaces";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }
})

export const loadAuctions = () => {
  return instance.get(`api/fetch-auctions`)
}

export const loadProduct = (auctionId: string) => {
  return instance.get(`api/fetch-product/${auctionId}`)
}

export const loadCurrentPrice = (auctionId: string) => {
  return instance.get(`api/fetch-currentPrice/${auctionId}`)
}

export const modificatedCurrentPrice = (auctionId: string, stepPrice: string, seePrice: string) => {
  return instance.get(`api/modificated-currentPrice/${auctionId}&${stepPrice}&${seePrice}`)
}

export const addNewProfile = (profile: object) => {
  return instance.post(`api/add-profile`, {
        profile
      }
  )
}

export const loadProfile = (email: string) => {
  return instance.get(`api/fetch-profile/${email}`)
}

export const loadCategories = async () => {
  return instance.get(`api/fetch-categories`, {
    withCredentials: false
  })
}

export const sendUserData = async (token: string) => {
  return instance.post('api/save-user')
}

export const addNewAuction = (data: object) => {
  return instance.post(`api/add-auction`, {
        data
      }
  )
}

export const loadProductsByCategory = (category: string) => {
  return instance.get(`api/fetch-products-by-category/${category}`)
}

export const sendUserCash = (cash: number) => {
  return instance.post(`api/update-user-cash`, {
    cash
  })
}

export const loadUserCash = (email: string) => {
  return instance.post(`api/fetch-user-cash`, {
    email
  })
}

export const buyCurrentProduct = (currentPrice: string, productData: ProductDataType, userData: UserDataType) => {
  return instance.post(`api/buy-product`, {
    currentPrice,
    productData,
    userData
  })
}




