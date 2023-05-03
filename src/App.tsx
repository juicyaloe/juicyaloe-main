import React, { Fragment } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { AnimatePresence } from 'framer-motion';

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
        <AnimatePresence key={location.pathname}>
          <Routes>
            <Route path={AppUrl.Intro} element={<Intro />} />
            <Route path={AppUrl.Main} element={<Main />} />
            <Route path={AppUrl.GuestBookForm} element={<GuestBookForm />} />
            <Route path="*" element={<Navigate to={AppUrl.Intro} />} />
          </Routes>
        </AnimatePresence>
      </MobileScreen>
    </Fragment>
  );
}

export default App;
