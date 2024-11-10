import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardBox from './components/CardBox.jsx'
import NavBar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <NavBar />
    <CardBox />
    </>
  </StrictMode>,
)
