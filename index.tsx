import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Explicitly define process for the bundler's scope
// This prevents 'Error: Module.traceVariable' during Rollup builds
if (typeof (window as any).process === 'undefined') {
  (window as any).process = { env: { API_KEY: '' } };
}
var process = (window as any).process;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);