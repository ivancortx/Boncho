import React, { createContext, useState } from 'react'

export const AuthContext = createContext<any>('')
export const AuthUpdateContext = createContext<any>('')
export const IsAuthContext = createContext<any>('')
export const AuthUpdateTokenContext = createContext<any>('')

// @ts-ignore
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('')
  const [isAuth, setIsAuth] = useState(false)

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