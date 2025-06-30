/**
 * @file main.jsx
 * @description
 *   Entry point for the Hair Product Guide React app.
 *   Sets up React root rendering and strict mode for better debugging.
 *   Imports global styles and the App root component.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';       // Global CSS (resets, base styles)
import App from './App.jsx'; // Main app component

// Find the root DOM node (should exist in public/index.html as <div id="root"></div>)
const rootElement = document.getElementById('root');

// Create the React root and render the app inside React.StrictMode for extra checks/dev warnings
createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
