import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
