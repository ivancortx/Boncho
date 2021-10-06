import React, { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserRole } from '../ui/navigation/store/action'
import Cookies from 'js-cookie'

export const AuthContext = createContext<string>('')
export const AuthUpdateContext = createContext< ((arg: boolean) => void) | undefined >(undefined)
export const IsAuthContext = createContext<boolean>(false)
export const AuthUpdateTokenContext = createContext< ((arg: string) => void) | undefined >(undefined)

export const AuthProvider:React.FC = ({ children }) => {
  const [token, setToken] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const dispatch = useDispatch()
  const cookieToken = Cookies.get('token')
  // if (cookieToken) {}
  useEffect(() => {
    if (cookieToken) {
      dispatch(updateUserRole(cookieToken))
      setIsAuth(true)
    }

  }, [cookieToken])

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