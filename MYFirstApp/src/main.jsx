import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import CardBox from './components/CardBox.jsx'
// import NavBar from './components/NavBar.jsx'
// import Practice from './components/Practice.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <>
    <NavBar />
    <CardBox />
    </>
    <>
    <Practice name = 'vinayak' age = '20' gender = 'male' />
    <Practice name = 'yashasvi' age = '20' gender = 'male' />
    <Practice name = 'varun' age = '19' gender = 'mix-breed' />
    <Practice name = 'tarandeep' age = '19' gender = 'male' />
    </> */}

    <App />
  </StrictMode>,
)

import React from 'react'
function main() {
  return (
    <div>main</div>
  )
}

export default main