import React, { useContext, useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import firebase from 'firebase/compat/app'

import firebaseApp, { auth } from '@/firebase/firebase'
import { updateUserRole } from '../../store/action'
import { validate } from './validate'
import { AuthUpdateContext, AuthUpdateTokenContext, IsAuthContext } from '@/context/AuthContext'
import { TextlField } from './TextlField/TextlField'

import styles from './LoginForm.module.scss'

type Props = {
  closeModal: () => void;
};

export const LoginForm: React.VFC<Props> = ({ closeModal }) => {
  const dispatch = useDispatch(),
    setIsAuth: ((arg: boolean) => void) | undefined = useContext(AuthUpdateContext),
    setToken: ((arg: string) => void) | undefined = useContext(AuthUpdateTokenContext),
    isAuth = useContext(IsAuthContext),
    [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (isAuth) {
      closeModal()
    }
  }, [isAuth])

  const addUser = async (email: string, password: string) => {
    try {
      await firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      await auth.signInWithEmailAndPassword(email, password)
      await firebaseApp.auth().onAuthStateChanged(async (userCred: any) => {
        const idToken = await userCred?.getIdToken()
        setIsAuth!(true)
        setToken!(idToken)
        Cookies.set('token', idToken, { expires: 5 })
        dispatch(updateUserRole(idToken))
      })
    } catch {
      setErrorMessage('Логин и пароль не совпадают!')
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        addUser(values.email, values.password)
      }}
    >
      <div className={styles.container}>
        <Form className={styles.form}>
          <TextlField label={'Введите email'} name={'email'} type={'input'} />
          <TextlField label={'Введите пароль'} name={'password'} type={'password'} />
          {errorMessage !== '' && <div className={styles.error}>{errorMessage}</div>}
          <button type="submit" className={styles.button}>
            Войти
          </button>
        </Form>
      </div>
    </Formik>
  )
}
