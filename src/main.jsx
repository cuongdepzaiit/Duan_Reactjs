import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../src/assets/styles/main.module.scss'
import MyHomePage from '@components/HomePage/HomePage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
)
