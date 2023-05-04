// common
import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import './index.css';
import '@fontsource/noto-sans-kr/400.css';
import '@fontsource/noto-sans-kr/700.css';

// provider
import { MuiProvider, ReactQueryProvider } from './provider';
import { BrowserRouter } from 'react-router-dom';

// components
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MuiProvider>
    <BrowserRouter>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </BrowserRouter>
  </MuiProvider>
);
