import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import Pages
import Home from './Pages/Home'

function App () {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
  )
}

export default App
