import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { AnimatePresence } from 'framer-motion';

import { MobileScreen } from './components';
import Main from './pages/Main';
import Intro from './pages/Intro';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <MobileScreen>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </MobileScreen>
    </Fragment>
  );
}

export default App;
