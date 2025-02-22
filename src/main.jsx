import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ARScene from './ARScene.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ARScene />
  </StrictMode>
);
