import React from 'react'
import styles from './App.module.scss'
import { NavigationPage } from "./ui/navigation/pages"
import { BrowserRouter } from "react-router-dom"
import { FooterPage } from "./ui/footer/pages/FooterPage"
import { AppRoutes } from './ui/navigation/components/AppRoutes/AppRoutes'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <NavigationPage/>
        <div className={styles.content}>
          <AppRoutes/>
        </div>
        <FooterPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
