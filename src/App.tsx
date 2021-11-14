import React from 'react';
import {HashRouter} from 'react-router-dom';

import {NavigationPage} from './ui/navigation/pages';
import {FooterPage} from './ui/footer/pages/FooterPage';
import {AppRoutes} from './ui/navigation/components/AppRoutes/AppRoutes';
import {AuthProvider} from './context/AuthContext';
import {UserModalProvider} from './context/SettingsUserModalContext';
import {GetCashModalProvider} from './context/GetCashModalContext';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <HashRouter>
      <GetCashModalProvider>
        <UserModalProvider>
          <AuthProvider>
            <div className={styles.container}>
              <NavigationPage/>
              <div className={styles.content}>
                <AppRoutes/>
              </div>
              <FooterPage/>
            </div>
          </AuthProvider>
        </UserModalProvider>
      </GetCashModalProvider>
    </HashRouter>
  );
};
export default App;
