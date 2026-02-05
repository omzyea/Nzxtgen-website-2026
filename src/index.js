// index.js - Remove TagManager.initialize()
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
// import TagManager from 'react-gtm-module';  // Remove this
import './index.css';
import App from './App';

// Remove these lines:
// const tagManagerArgs = { gtmId: 'GTM-TXDCGMR6' };
// TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);