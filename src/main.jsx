import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css' 
import App from './App.jsx'

console.log('Tailwind CSS imported') 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
