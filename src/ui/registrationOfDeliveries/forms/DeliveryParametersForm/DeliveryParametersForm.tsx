import React from 'react'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'

import { validate } from './validate'
import { TextlField } from './TextlField/TextlField'

import { SendButton } from '../../components/SendButton/SendButton'
import { WaitingDeliveryDataType } from
    '@/ui/registrationOfDeliveries/interfaces/RegistrationOfDeliveriesPageInterfaces'
import { fetchAllWaitingDeliveries } from '@/ui/registrationOfDeliveries/store/action'
import { sendDeliveryItemWithDeliveryStatus } from '@/api/api'

import styles from './DeliveryParametersForm.module.scss'

type Props = {
  closeModal: () => void
  productData: WaitingDeliveryDataType
  setShowMessage: (arg: boolean) => void
}

export const DeliveryParametersForm: React.VFC<Props> =
  ({ closeModal, productData, setShowMessage }) => {
    const dispatch = useDispatch()

    return (
      <Formik
        initialValues={{
          orderDescription: ''
        }}
        validationSchema={validate}
        onSubmit={async (values) => {
          productData.deliveryStatus = 'sent'
          productData.deliveryStatusDescription = values.orderDescription
          await sendDeliveryItemWithDeliveryStatus(productData)

          setShowMessage(true)
          setTimeout(() => {
            closeModal()
            setShowMessage(false)
            dispatch(fetchAllWaitingDeliveries())
          }, 1500)
        }}
      >
        <div>
          <Form className={styles.form}>
            <TextlField label={'Статус заказа*'} name={'orderDescription'} type={'input'}/>
            <button type="submit" className={styles.button}>
              <SendButton/>
            </button>
          </Form>
        </div>
      </Formik>
    )
  }
