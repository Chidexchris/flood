import { useState } from 'react'
import './App.css'
import BulkMessage from './pages/BulkMessages'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashBoard from './pages/DashBoard'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {

  return (
    <>
    <Router>
        

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/bulk-messages" element={<BulkMessage />} />
        </Routes>
    </Router>
     
    
      
    </>
  )
}

export default App
