import React, { createContext, useState } from 'react'

export const ModalShowContext = createContext<() => void>(() => {})
export const ModalCloseContext = createContext<() => void>(() => {})
export const ModalStatusContext = createContext<boolean>(false)

export const UserModalProvider: React.FC = ({ children }) => {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(true)

  const closeModal = () => {
   setIsActiveModal(false)
  }

  const showModal = () => {
    setIsActiveModal(true)
  }

  return (
    <ModalShowContext.Provider value={showModal}>
      <ModalCloseContext.Provider value={closeModal}>
        <ModalStatusContext.Provider value={isActiveModal}>
            {children}
        </ModalStatusContext.Provider>
      </ModalCloseContext.Provider>
    </ModalShowContext.Provider>
  )
}