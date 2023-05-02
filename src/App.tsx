import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { MobileScreen } from './components';
import Main from './pages/Main';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <MobileScreen>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MobileScreen>
    </Fragment>
  );
}

export default App;
