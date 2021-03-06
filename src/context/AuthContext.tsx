import React, { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

import { updateUserRole } from '@/ui/navigation/store/action'
import firebaseApp from '../firebase/firebase'

export const AuthContext = createContext<string>('')
export const AuthUpdateContext = createContext<((arg: boolean) => void) | undefined>(undefined)
export const IsAuthContext = createContext<boolean>(false)
export const AuthUpdateTokenContext = createContext<((arg: string) => void) | undefined>(undefined)

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(''),
    [isAuth, setIsAuth] = useState(false),
    dispatch = useDispatch(),
    cookieToken = Cookies.get('token'),
    checkUserAuth = (token: string) => {
      firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(updateUserRole(token))
          setIsAuth(true)
        } else {
          Cookies.remove('token')
        }
      })
    }

  useEffect(() => {
    if (cookieToken) {
      checkUserAuth(cookieToken)
    }
  }, [cookieToken, token])

  useEffect(() => {
    if (token === '' && cookieToken !== undefined) {
      setToken(cookieToken)
    }
  }, [token])

  return (
    <IsAuthContext.Provider value={isAuth}>
      <AuthContext.Provider value={token}>
        <AuthUpdateContext.Provider value={setIsAuth}>
          <AuthUpdateTokenContext.Provider value={setToken}>
            {children}
          </AuthUpdateTokenContext.Provider>
        </AuthUpdateContext.Provider>
      </AuthContext.Provider>
    </IsAuthContext.Provider>
  )
}
