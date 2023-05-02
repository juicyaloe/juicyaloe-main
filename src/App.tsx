import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Main from './pages/Main';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
