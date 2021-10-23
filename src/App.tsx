import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { NavigationPage } from './ui/navigation/pages'
import { FooterPage } from './ui/footer/pages/FooterPage'
import { AppRoutes } from './ui/navigation/components/AppRoutes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { ModalCloseContext, UserModalProvider } from './context/SettingsUserModalContext'

import styles from './App.module.scss'

const App: React.FC = () => {


  return (
    <BrowserRouter>
      <UserModalProvider>
        <AuthProvider>
          <div  className={styles.container}>
            <NavigationPage/>
            <div className={styles.content}>
              <AppRoutes/>
            </div>
            <FooterPage />
          </div>
        </AuthProvider>
      </UserModalProvider>
    </BrowserRouter>
  )
}
export default App;
