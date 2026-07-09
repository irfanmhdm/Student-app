import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addstudent from './components/Addstudent'
import Search from './components/Search'
import Delete from './components/Delete'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewStudents from './components/ViewStudents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Navbar />} />
          <Route path="/addstudent" element={<Addstudent />} />
          <Route path="/search" element={<Search />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/viewstud" element={<ViewStudents />} />
          

        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
