import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FollowProvider } from './context/FollowContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FollowProvider>
      <App />
    </FollowProvider>
  </StrictMode>,
)
