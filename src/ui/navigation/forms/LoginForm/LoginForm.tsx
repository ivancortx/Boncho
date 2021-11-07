import React, { useContext, useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import firebase from 'firebase/compat'

import firebaseApp, { auth } from 'firebase/firebase'
import { updateUserRole } from '../../store/action'
import { validate } from './validate'
import { AuthUpdateContext, AuthUpdateTokenContext, IsAuthContext } from 'context/AuthContext'
import { TextlField } from './TextlField/TextlField'

import styles from './LoginForm.module.scss'

type Props = {
  closeModal: () => void
}

export const LoginForm: React.VFC<Props> = ({ closeModal }) => {
  const dispatch = useDispatch()
  const setIsAuth = useContext(AuthUpdateContext)
  const setToken = useContext(AuthUpdateTokenContext)
  const isAuth = useContext(IsAuthContext)
  const [errorMessage, setErrorMessage] = useState('')


  useEffect(() => {
    if (isAuth) {
      closeModal()
    }
  }, [isAuth])

  const addUser = async (email: string, password: string) => {
    firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

      .then(() => {
        auth.signInWithEmailAndPassword(email, password)

          .then(() => {
            firebaseApp.auth().onAuthStateChanged((userCred) => {
              userCred?.getIdToken()

                .then(idToken => {
                  setIsAuth!(true)
                  setToken!(idToken)
                  Cookies.set('token', idToken, { expires: 5 })
                  dispatch(updateUserRole(idToken))
                })
            })
          })
          .catch((error) => {
            setErrorMessage('Логин и пароль не совпадают!')
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
          <TextlField label={'Введите email'} name={'email'} type={'input'}/>
          <TextlField label={'Введите пароль'} name={'password'} type={'password'}/>
          {errorMessage !== '' && <div className={styles.error}>{errorMessage}</div>}
          <button type='submit' className={styles.button}>Войти</button>
        </Form>
      </div>
    </Formik>
  )
}