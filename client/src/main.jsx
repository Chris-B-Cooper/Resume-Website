import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import Global Styles
import './index.css'

// Import Landing Page Components
import LandingPage from './LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
