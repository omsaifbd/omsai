import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Students from '../Pages/Students'
import Certify from '../Pages/Certify'
import Courses from '../Pages/Courses'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import NotFoundPage from '../Pages/NotFoundPage'
import Quiz from '../Pages/Quiz'

export default function AllRoutes() {
  return (
      <Routes >
          <Route path='/omsai' element={<Home />}></Route>
          <Route path='/students' element={<Students/>}></Route>
          <Route path='/certify' element={<Certify/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
          
    </Routes>
  )
}
