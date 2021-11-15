import React, { createContext, useState } from 'react'

export const GetCashModalShowContext = createContext<() => void>(() => {})
export const GetCashModalCloseContext = createContext<() => void>(() => {})
export const GetCashModalStatusContext = createContext<boolean>(false)

export const GetCashModalProvider: React.FC = ({ children }) => {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false),
    closeModal = () => {
      setIsActiveModal(false)
    },
    showModal = () => {
      setIsActiveModal(true)
    }

  return (
    <GetCashModalShowContext.Provider value={showModal}>
      <GetCashModalCloseContext.Provider value={closeModal}>
        <GetCashModalStatusContext.Provider value={isActiveModal}>
          {children}
        </GetCashModalStatusContext.Provider>
      </GetCashModalCloseContext.Provider>
    </GetCashModalShowContext.Provider>
  )
}
