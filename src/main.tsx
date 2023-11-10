import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterComponent from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterComponent />
  </React.StrictMode>,
)
