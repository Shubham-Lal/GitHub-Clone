import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './AuthProvider'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
