import { StrictMode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './interfaces';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css?vite';

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
