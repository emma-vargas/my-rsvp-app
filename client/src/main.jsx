//* Entry Point into db
//* Parent Component - renders App.jsx
// This file runs when React starts. entry point into React

import { StrictMode } from 'react'; // this just helps catch probs in code
// this is creating the React root el
import { createRoot } from 'react-dom/client';
import './index.css';
// imports App, which contains all the routes
import App from './App.jsx';

// finds the html el with id: 'root', tells React where to insert the app. See index.html
// createRoot: creates a React root container
// .render() : function tells React to display the App component inside the root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
