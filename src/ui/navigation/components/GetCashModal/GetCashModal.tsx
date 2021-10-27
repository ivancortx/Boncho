import React, { useContext } from 'react'

import styles from './GetCashModal.module.scss'
import { GetCashModalStatusContext } from "context/GetCashModalContext";
import { validate } from './validate'
import { ErrorMessage, Field, Form, Formik } from "formik";
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { updateUserCash } from '../../store/action'

export const GetCashModal: React.VFC = () => {
  const dispatch = useDispatch()
  const isActiveModal = useContext(GetCashModalStatusContext)

  return (
    <>
      <div className={isActiveModal ? styles.cashModal : styles.hide}>
        <div className={styles.title}>Сумма пополонения:</div>
        <Formik
          initialValues={{
            cash: 0,
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            dispatch(updateUserCash(Number(values.cash)))
          }}>
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <Field name="cash" type="input"
                     className={cn(styles.input, { [styles.inputError]: errors.cash && touched.cash })}/>
              <span>$</span>
              <ErrorMessage component={'div'} name='cash' className={styles.errorMessage}/>
              <button className={styles.button} type="submit">Пополнить</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}