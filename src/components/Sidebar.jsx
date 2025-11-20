import React from 'react'
import { Link } from "react-router-dom";



function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="typcn typcn-device-desktop menu-icon"></i>
            <span className="menu-title">Dashboard</span>
            <div className="badge badge-danger">new</div>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/location1">
            <i className="typcn typcn-film menu-icon"></i>
            <span className="menu-title">Station 1  </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/location2">
            <i className="typcn typcn-film menu-icon"></i>
            <span className="menu-title"> Station 2</span>
          </Link>
        </li>

        
        

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
            <i className="typcn typcn-chart-pie-outline menu-icon"></i>
            <span className="menu-title">Settings</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="typcn typcn-mortar-board menu-icon"></i>
            <span className="menu-title">Log out</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar