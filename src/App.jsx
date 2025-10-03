import { useState } from 'react'
import './App.css'
import BulkMessage from './pages/BulkMessages'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashBoard from './pages/DashBoard'
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
    <Router>
        

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/bulk-messages" element={<BulkMessage />} />
        </Routes>
    </Router>
     
    
      
    </>
  )
}

export default App
