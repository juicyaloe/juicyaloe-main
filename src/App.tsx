import React, { Fragment } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CssBaseline from '@mui/material/CssBaseline';
import { PopupProvider } from './provider';
import { MobileScreen } from './components';
import { AppUrl } from './common';

import Intro from './pages/Intro';
import Main from './pages/Main';
import GuestBookForm from './pages/GuestBookForm';

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <CssBaseline />
      <MobileScreen>
        <PopupProvider>
          <AnimatePresence key={location.pathname}>
            <Routes>
              <Route path={AppUrl.Intro} element={<Intro />} />
              <Route path={AppUrl.Main} element={<Main />} />
              <Route path={AppUrl.GuestBookForm} element={<GuestBookForm />} />
              <Route path="*" element={<Navigate to={AppUrl.Intro} />} />
            </Routes>
          </AnimatePresence>
        </PopupProvider>
      </MobileScreen>
    </Fragment>
  );
}

export default App;
