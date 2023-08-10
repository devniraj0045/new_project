import {BrowserRouter, Routes,Route} from 'react-router-dom'
import About from './pages/about/About'
import Academic from './pages/academic/Academic'
import Creatives from './pages/creatives/Creatives'
import Contact from './pages/contact/Contact'
import Notfound from './pages/notfound/Notfound'
import Navbar from './components/Navbar'
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<About/>}/>
      <Route path='academic' element={<Academic/>}/>
      <Route path='creatives' element={<Creatives/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<Notfound/>}/>

    </Routes>
      </BrowserRouter>
  )
}

export default App
