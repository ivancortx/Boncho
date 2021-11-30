import React from 'react'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'

import { validate } from './validate'
import { TextlField } from './TextlField/TextlField'
import { SendButton } from '@/ui/cart/components/SendButton/SendButton'
import { sendDeliveryForm } from '@/api/api'
import { AuctionDataType } from '@/ui/auctions'
import { fetchItemsInCart } from '@/ui/cart/store/action'

import styles from './DeliveryOrderForm.module.scss'

type Props = {
  closeModal: () => void
  productData: AuctionDataType
  setShowMessage: (arg: boolean) => void
}

export const DeliveryOrderForm: React.VFC<Props> =
  ({ closeModal, productData, setShowMessage }) => {

  const dispatch = useDispatch()
    return (
      <Formik
        initialValues={{
          name: '',
          surname: '',
          tel: '',
          region: '',
          city: ''
        }}
        validationSchema={validate}
        onSubmit={async (values) => {
          await sendDeliveryForm(values, productData)

          setShowMessage(true)
          setTimeout(() => {
            closeModal()
            setShowMessage(false)
            dispatch(fetchItemsInCart())
          }, 2000)
        }}
      >
        <div>
          <Form className={styles.form}>
            <TextlField label={'Имя*'} name={'name'} type={'input'}/>
            <TextlField label={'Фамилия*'} name={'surname'} type={'input'}/>
            <TextlField label={'Телефон*'} name={'tel'} type={'input'}/>
            <TextlField label={'Область*'} name={'region'} type={'input'}/>
            <TextlField label={'Город*'} name={'city'} type={'input'}/>
            <button type="submit" className={styles.button}>
              <SendButton/>
            </button>
          </Form>
        </div>
      </Formik>
    )
  }
