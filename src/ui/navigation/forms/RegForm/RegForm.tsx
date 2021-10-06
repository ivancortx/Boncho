import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { auth } from 'firebase/firebase'


import { validate } from './validate'


import styles from './RegForm.module.scss'

type Props = {
  closeModal: () => void
}

export const RegForm: React.VFC<Props> = ({ closeModal }) => {
  const [isRegister, setIsRegister] = useState<boolean>(false)

  const addUser = async (email: string, password: string) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        // Signed in
        const user = userCredential.user;
        setIsRegister(true)
        setTimeout(closeModal, 2500);
        // ...
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

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
          <button type='submit' className="btn btn-success">Зарегистрировать</button>

          {isRegister &&
          <div className={styles.userIsRegistred}>Пользователь успешно зарегистрирован</div>
          }
        </Form>
      </div>
    </Formik>
  )
}