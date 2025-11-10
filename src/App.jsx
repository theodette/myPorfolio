import { useState } from 'react'
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
