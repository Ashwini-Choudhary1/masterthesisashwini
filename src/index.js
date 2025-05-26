import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// If you want to include a global CSS file for very basic styles (e.g., body, root),
// you can create it and import it here:
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);