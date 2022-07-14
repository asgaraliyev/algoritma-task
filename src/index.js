import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./styles/index.css"

import "react-datepicker/dist/react-datepicker.css";
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
