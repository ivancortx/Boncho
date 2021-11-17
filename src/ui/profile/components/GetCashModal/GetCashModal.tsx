import React, { useContext } from 'react'

import styles from './GetCashModal.module.scss'
import { GetCashModalShowContext, GetCashModalStatusContext } from '@/context/GetCashModalContext'
import { validate } from './validate'
import { Field, Form, Formik } from 'formik'

export const GetCashModal: React.VFC = () => {
  const showModal = useContext(GetCashModalShowContext),
    isActiveModal = useContext(GetCashModalStatusContext)

  return (
    <>
      <div onClick={showModal} className={styles.getCash}>
        Пополнить счёт
      </div>
      <div className={isActiveModal ? styles.cashModal : styles.hide}>
        <div className={styles.title}>Сумма пополонения</div>
        <Formik
          initialValues={{
            cash: '',
          }}
          validationSchema={validate}
          onSubmit={() => {
            //empty
          }}
        >
          <Form>
            <Field name="cash" type="input" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  )
}
