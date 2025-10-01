import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import BulkMessage from './pages/BulkMessages'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bulk-messages" element={<BulkMessage />} />
        </Routes>
    </Router>
     
    
      
    </>
  )
}

export default App
