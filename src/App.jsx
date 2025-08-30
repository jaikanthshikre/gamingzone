import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'

import Footer from './Component/Footer'
import FloatingWhatsApp from './Component/FloatingIcon'
import Cricket from './Pages/Cricket'
import Tennis from './Pages/Tennis'
import Football from './Pages/Football'
import Casino from './Pages/Casino'
import { Navbar } from './Component/Navbar'

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cricket' element={<Cricket/>}/>
      <Route path='/tennis' element={<Tennis/>}/>
      <Route path='/football' element={<Football/>}/>
      <Route path='/casino' element={<Casino/>}/>
    </Routes>
    <FloatingWhatsApp/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
