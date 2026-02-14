
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Status } from './pages/Status'

const App: React.FC = () => {
  return (
    <div style={{fontFamily:'system-ui, sans-serif', padding:20}}>
      <h1>SISGEC (MVP)</h1>
      <Status/>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
