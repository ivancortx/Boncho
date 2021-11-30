import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import firebaseApp from '@/firebase/firebase'
import { useDispatch } from 'react-redux'

import { validate } from './validate'
import { TextlField } from '../LoginForm/TextlField/TextlField'
import { addProfile } from '@/ui/profile/store/action'

import styles from './RegForm.module.scss'

type Props = {
  closeModal: () => void
}

export const RegForm: React.VFC<Props> = ({ closeModal }) => {
  const [isRegister, setIsRegister] = useState<boolean>(false),
    [errorMessage, setErrorMessage] = useState(''),
    dispatch = useDispatch(),
    addUser = async (email: string, password: string) => {
      try {
        await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        setErrorMessage('')
        setIsRegister(true)
        setTimeout(closeModal, 2000)
      } catch (error: any) {
        const errorMessage = error.message
        if (
          errorMessage ===
          'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'
        ) {
          setErrorMessage('Указанный Вами email уже используется')
        }
      }
    }

  return (
    <Formik
      initialValues={{
        email: '',
        login: '',
        regPassword: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
        await addUser(values.email, values.regPassword)
        dispatch(
          addProfile({ login: values.login, name: '', secondName: '' }, values.email, '', [])
        )
      }}
    >
      <div className={styles.container}>
        <Form className={styles.form}>
          <TextlField label={'Введите email'} name={'email'} type={'input'}/>
          <TextlField label={'Введите логин'} name={'login'} type={'input'}/>
          <TextlField label={'Введите пароль'} name={'regPassword'} type={'password'}/>
          <TextlField label={'Повторите пароль'} name={'confirmPassword'} type={'password'}/>
          {errorMessage !== '' && <div className={styles.error}>{errorMessage}</div>}
          <button type="submit" className={styles.button}>
            Зарегистрировать
          </button>
          {isRegister && (
            <div className={styles.userIsRegistred}>Пользователь успешно зарегистрирован</div>
          )}
        </Form>
      </div>
    </Formik>
  )
}
