import { Dispatch } from 'react'

import { WRITE_ALL_WAITING_DELIVERIES } from './types'
import { loadAllWaitingDeliveries } from '@/api/api'
import { WaitingDeliveryDataType } from '@/ui/cart/interfaces/CartPageInterfaces'

export type ActionsTypes = WaitingDeliveriesType

type WaitingDeliveriesType = {
  type: typeof WRITE_ALL_WAITING_DELIVERIES
  data: WaitingDeliveryDataType[]
}

export const writeAllDeliveries = (data: WaitingDeliveryDataType[]): WaitingDeliveriesType => ({
  type: WRITE_ALL_WAITING_DELIVERIES,
  data
})

export const fetchAllWaitingDeliveries = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadAllWaitingDeliveries()
  const data: WaitingDeliveryDataType[] = await response.data

  //--------------Сотрировка...сначала необработаные посылки--------------//
  const acceptedDeliveries: WaitingDeliveryDataType[] = []
  const newDeliveries: WaitingDeliveryDataType[] = []
  data.forEach(item => {
    if (item.deliveryStatus === 'sent') {
      acceptedDeliveries.push(item)
    } else {
      newDeliveries.push(item)
    }
  })
  dispatch(writeAllDeliveries([...newDeliveries, ...acceptedDeliveries]))
}


