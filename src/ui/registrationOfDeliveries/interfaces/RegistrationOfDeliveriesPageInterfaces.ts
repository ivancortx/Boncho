export type DeliveryDataType = {
  name: string
  surname: string
  tel: string
  region: string
  city: string
}

export type WaitingDeliveryDataType = {
  productName: string,
  productId: string,
  productDescription: string,
  productImages: string[],
  deliveryStatus?: string,
  deliveryStatusDescription?: string,
  userName: string,
  surName: string,
  tel: string,
  region: string,
  city: string,
  email:string
}
