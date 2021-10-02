import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from "react-redux";

import { validate } from './validate'

import styles from './AddProductForm.module.scss'
import { useAddProductForm } from '../../hooks/useAddProductForm'

export const AddProductForm: React.VFC = () => {
  const dispatch = useDispatch()
  const {categoriesData} = useAddProductForm()
  console.log(categoriesData)




  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values)
        // addUser(values.email, values.password)
      }}>
      <div className={styles.container}>
        <Form className={styles.form}>
          <div className={styles.fieldName}>Выберите категорию</div>
          <div className={styles.fieldInput}>
            <Field
              className="form-control"
              as="select"
              onChange={categoriesData}
              name="itemType"
            >
              <option>{categoriesData}</option>
            </Field>
          </div>
          <div className={styles.fieldName}>Введите пароль</div>
          <div className={styles.fieldInput}>
            <Field component="input" className="form-control" id="password" name="password"
                   placeholder="Введите пароль"/>
          </div>
          <button type='submit' className="btn btn-success">Войти</button>
        </Form>
      </div>
    </Formik>
  )
}