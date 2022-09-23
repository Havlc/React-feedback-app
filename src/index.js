import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'

//React 17 version
//ReactDOM.render(<h1>My App</h1>, document.getElementById('root'))

//One-line version
//ReactDOM.createRoot(document.getElementById('root')).render(<h1>My App</h1>)

//Final version
const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);