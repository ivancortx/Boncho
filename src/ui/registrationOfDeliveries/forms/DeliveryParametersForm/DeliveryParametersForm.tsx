import React from 'react'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { validate } from './validate'
import { TextlField } from './TextlField/TextlField'

import styles from './DeliveryParametersForm.module.scss'
import { SendButton } from '@/ui/cart/components/SendButton/SendButton'
import { AuctionDataType } from '@/ui/auctions'

type Props = {
  closeModal: () => void
  productData: AuctionDataType
  setShowMessage: (arg: boolean) => void
}

export const DeliveryParametersForm: React.VFC<Props> = ({ closeModal, productData, setShowMessage }) => {
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{
        orderDescription: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        // await sendDeliveryForm(values, productData)
        //
        // setShowMessage(true)
        // setTimeout(() => {
        //   closeModal()
        //   setShowMessage(false)
        //   dispatch(fetchItemsInCart())
        // }, 2000)
        console.log(values)
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
