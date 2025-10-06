import { useState } from 'react'
import './App.css'
import BulkMessage from './pages/BulkMessages'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashBoard from './pages/DashBoard'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Location1 from './pages/Location1';
import Location2 from './pages/Location2';
import Location3 from './pages/Location3';
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
          <Route path="/location1" element={<Location1 />} />
          <Route path="/location2" element={<Location2 />} />
          <Route path="/location3" element={<Location3 />} />
        </Routes>
    </Router>
     
    
      
    </>
  )
}

export default App
