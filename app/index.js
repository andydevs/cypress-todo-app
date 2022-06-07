import ReactDOM from 'react-dom/client';
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store.js'
import { App } from './components/App.js'
import { ThemeProvider } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

ReactDOM
    .createRoot(document.getElementById('app'))
    .render((
        <ReduxProvider store={store}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ReduxProvider>
    ))