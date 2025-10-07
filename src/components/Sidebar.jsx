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
          <Link className="nav-link" to="/bulk-messages">
            <i className="typcn typcn-film menu-icon"></i>
            <span className="menu-title">Send Flood Alert</span>
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i className="typcn typcn-document-text menu-icon"></i>
            <span className="menu-title">Locations</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li><Link to="/location1" className="link">Abia State</Link></li>
              <li><Link to="/location2" className="link">Imo State</Link></li>
              <li><Link to="/location3" className="link">Rivers</Link></li>
            </ul>
          </div>
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