import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './About/About'
import Home from './Home/Home'

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            {/* <Route path='About' element={<About/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Header
