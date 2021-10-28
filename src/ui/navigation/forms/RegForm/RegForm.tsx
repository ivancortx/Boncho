import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { auth } from 'firebase/firebase'
import {useDispatch} from 'react-redux'

import { validate } from './validate'
import { TextlField } from '../LoginForm/TextlField/TextlField'
import {addProfile} from 'ui/profile/store/action'

import styles from './RegForm.module.scss'

type Props = {
  closeModal: () => void
}

export const RegForm: React.VFC<Props> = ({ closeModal }) => {
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  const addUser = async (email: string, password: string) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        setErrorMessage('')
        setIsRegister(true)
        setTimeout(closeModal, 2500);
      })

      .catch((error: any) => {
        const errorMessage = error.message;
        if (errorMessage === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).')
        {setErrorMessage('Указанный Вами email уже используется')}
      });
  }

  return (
    <Formik
      initialValues={{
        email: '',
        login: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        addUser(values.email, values.password)
        dispatch(addProfile({login: values.login, name: '', secondName: ''},
        values.email, '', []))
      }}>
      <div className={styles.container}>
        <Form className={styles.form}>
          <TextlField label={'Введите email'} name={'email'} type={'input'}/>
          <TextlField label={'Введите логин'} name={'login'} type={'input'}/>
          <TextlField label={'Введите пароль'} name={'password'} type={'password'}/>
          <TextlField label={'Повторите пароль'} name={'confirmPassword'} type={'password'}/>
          {errorMessage !== '' && <div className={styles.error}>{errorMessage}</div>}
          <button type='submit' className="btn btn-success mt-3">Зарегистрировать</button>
          {isRegister && <div className={styles.userIsRegistred}>Пользователь успешно зарегистрирован</div>}
        </Form>
      </div>
    </Formik>
  )
}