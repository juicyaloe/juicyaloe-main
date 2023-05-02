import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { AnimatePresence } from 'framer-motion';

import { MobileScreen } from './components';
import { AppUrl } from './common';

import Intro from './pages/Intro';
import Main from './pages/Main';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <MobileScreen>
        <AnimatePresence>
          <Routes>
            <Route path={AppUrl.Intro} element={<Intro />} />
            <Route path={AppUrl.Main} element={<Main />} />
            <Route path="*" element={<Navigate to={AppUrl.Intro} />} />
          </Routes>
        </AnimatePresence>
      </MobileScreen>
    </Fragment>
  );
}

export default App;
