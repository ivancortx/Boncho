import React from 'react';
import styles from './App.module.scss';
import {NavigationPage} from "./ui/navigation/pages";
import {AppRoutes} from "./ui/navigation/components/AppRoutes/AppRoutes";
import {BrowserRouter} from "react-router-dom";
import {FooterPage} from "./ui/footer/pages/FooterPage";

function App() {
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
