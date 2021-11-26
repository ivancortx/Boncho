import { useSelector } from 'react-redux'
import { AppStateType } from '@/store'

export const useRegistrationOfDeliveriesPage = () => {
  const allDeliveries = useSelector((state: AppStateType) =>
    state.registrationDeliveriesData.allDeliveries)
  return { allDeliveries }
}
