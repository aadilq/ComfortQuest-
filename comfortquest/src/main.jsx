// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FlowController from './FlowController.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlowController />
  </StrictMode>
);