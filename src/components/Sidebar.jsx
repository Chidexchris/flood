import React from 'react'
import { Link } from "react-router-dom";



function Sidebar() {
  return (
    <>
    

    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
           <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="typcn typcn-device-desktop menu-icon"></i>
              <span className="menu-title">Dashboard</span>
              <div className="badge badge-danger">new</div>
            </Link>
          </li>        
                   
          <li className="nav-item">
            <Link className="nav-link" to="/bulk-messages">
              <i className="typcn typcn-film menu-icon"></i>
              <span className="menu-title">Send Flood Alert</span>
            </Link>
          </li>        
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i class="typcn typcn-chart-pie-outline menu-icon"></i>
              <span class="menu-title">Settings</span>
            </a>
          </li>
                  
                                     
          <li class="nav-item">
            <a class="nav-link" href="../../../docs/documentation.html">
              <i class="typcn typcn-mortar-board menu-icon"></i>
              <span class="menu-title">Log out</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar