import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './SidebarContext'
import { PhotoContextProvider } from './PhotoContext'
import { ChannelContextProvider } from './ChannelContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChannelContextProvider>
      <PhotoContextProvider>
        <ContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextProvider>
      </PhotoContextProvider>
    </ChannelContextProvider>
  </React.StrictMode>
);

reportWebVitals();
