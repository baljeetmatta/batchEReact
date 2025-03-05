import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GreetClass from './GreetClass.tsx'
import Login from './Login.tsx'
import Timer from './Timer.tsx'
import CTimer from './CTimer.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <App/> */}
    {/* <CTimer/> */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
