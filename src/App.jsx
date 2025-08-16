import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Navbar } from './Component/Navbar'
import Footer from './Component/Footer'
import FloatingWhatsApp from './Component/FloatingIcon'

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <FloatingWhatsApp/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
