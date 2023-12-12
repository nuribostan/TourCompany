import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContenxtProvider } from './Context/AuthContext';
import { TourProvider } from './Context/TourContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TourProvider>
    <AuthContenxtProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContenxtProvider>
  </TourProvider>
);
