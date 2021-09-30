import React, { useContext } from 'react'
import { Field, Form, Formik } from 'formik'
import firebaseApp, { auth } from 'firebase/firebase'

import { validate } from './validate'

import styles from './LoginForm.module.scss'
import { AuthContext, AuthUpdateContext } from "context/AuthContext";
import { useDispatch } from "react-redux";
import { updateUserRole } from "../../store/action";
import Cookies from 'js-cookie'
import firebase from 'firebase/compat'

export const LoginForm: React.VFC = () => {
  const dispatch = useDispatch()

  const setIsAuth = useContext(AuthUpdateContext)
  const token = useContext(AuthContext)


  firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      // return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });


  const addUser = async (email: string, password: string) => {

    // @ts-ignore


     auth.signInWithEmailAndPassword(email, password).then (()=> {
       firebaseApp.auth().onAuthStateChanged((userCred) => {
         userCred?.getIdToken().then(idToken => {
           const csrfToken = Cookies.get()
           setIsAuth(true)
           return dispatch(updateUserRole(idToken))
         })
       })
     }).then(() => {
    })
  }


  // firebaseApp.auth().signInWithEmailAndPassword(email, password).then(user => {
  //   // Get the user's ID token as it is needed to exchange for a session cookie.
  //   return user.getIdToken().then(idToken => {
  //     // Session login endpoint is queried and the session cookie is set.
  //     // CSRF protection should be taken into account.
  //     // ...
  //     const csrfToken = getCookie('csrfToken')
  //     return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
  //   });
  // }).then(() => {
  //   // A page redirect would suffice as the persistence is set to NONE.
  //   return firebase.auth().signOut();
  // }).then(() => {
  //   window.location.assign('/profile');
  // });

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