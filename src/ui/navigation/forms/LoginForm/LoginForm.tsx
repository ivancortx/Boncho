import React, { useContext } from 'react'
import { Field, Form, Formik } from 'formik'
import firebaseApp, { auth } from 'firebase/firebase'
import { useDispatch } from "react-redux";
import { updateUserRole } from "../../store/action";
import Cookies from 'js-cookie'
import firebase from 'firebase/compat'

import { validate } from './validate'
import { AuthUpdateContext, AuthUpdateTokenContext } from "context/AuthContext";

import styles from './LoginForm.module.scss'

export const LoginForm: React.VFC = () => {
  const dispatch = useDispatch()
  const setIsAuth = useContext(AuthUpdateContext)
  const setToken = useContext(AuthUpdateTokenContext)

  const addUser = async (email: string, password: string) => {
    firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

      .then(() => {
        auth.signInWithEmailAndPassword(email, password)

          .then(() => {
            firebaseApp.auth().onAuthStateChanged((userCred) => {
              userCred?.getIdToken()

                .then(idToken => {
                  setIsAuth(true)
                  setToken(idToken)
                  Cookies.set('token', idToken, { expires: 5 })
                  return dispatch(updateUserRole(idToken))
                })
            })
          })
      })
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        addUser(values.email, values.password)
      }}>
      <div className={styles.container}>
        <Form className={styles.form}>
          <div className={styles.fieldName}>Введите email</div>
          <div className={styles.fieldInput}>
            <Field component="input" className="form-control" id="email" name="email" placeholder="Введите логин"/>
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