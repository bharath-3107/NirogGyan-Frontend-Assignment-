import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DoctorProfile from './pages/DoctorProfile'
import BookAppointment from './pages/BookAppointment'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor/:id" element={<DoctorProfile />} />
      <Route path="/book/:id" element={<BookAppointment />} />
    </Routes>
  </BrowserRouter>
)

export default App
