import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import './style/typo.css';
import './style/style.css';

import App from './App.jsx';
import ScrollToTop from './components/Scorlltop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
