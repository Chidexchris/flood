import React from 'react'
import Sidebar from '../components/Sidebar'
import RiverLevel from '../components/RiverLevel'
import River from '../components/River'
import AdminHeader from '../components/AdminHeader'
import '../assets/style.css'

function DashBoard() {
  return (
    <>
  <div class="container-scroller">

    <AdminHeader/>
    <div class="container-fluid page-body-wrapper">      
      {/* <!-- partial:partials/_sidebar.html --> */}

                <Sidebar/>

      {/* <!-- partial --> */}
      <div class="main-panel">
        <div class="content-wrapper">

          
                <section class="gauges">
        <div class="gauge" id="waterLevel">
          <svg viewBox="0 0 100 60">
            <path d="M10 50 A40 40 0 0 1 90 50" class="bg-ring" />
            <path d="M10 50 A40 40 0 0 1 90 50" class="fill-ring water" />
          </svg>
          <p class="value">-- cm</p>
          <p class="label">Water Level</p>
        </div>

        <div class="gauge" id="temperature">
          <svg viewBox="0 0 100 60">
            <path d="M10 50 A40 40 0 0 1 90 50" class="bg-ring" />
            <path d="M10 50 A40 40 0 0 1 90 50" class="fill-ring temp" />
          </svg>
          <p class="value">-- °C</p>
          <p class="label">Temperature</p>
        </div>

        <div class="gauge" id="humidity">
          <svg viewBox="0 0 100 60">
            <path d="M10 50 A40 40 0 0 1 90 50" class="bg-ring" />
            <path d="M10 50 A40 40 0 0 1 90 50" class="fill-ring humid" />
          </svg>
          <p class="value">-- %</p>
          <p class="label">Humidity</p>
        </div>
      </section>

       {/* Status  */}
      <div id="statusIndicator" class="status">Status: Loading...</div>

       {/* Chart  */}
      <section class="chart">
        <h3>Live Sensor Readings (Water Level, Temperature & Humidity)</h3>
        <canvas id="sensorChart"></canvas>
      </section>

       {/* Timestamp  */}
      <footer>
        ⏱ Last Updated: <span id="timestamp">Waiting for data...</span>
      </footer>
                {/* <River/> */}
                 {/* <RiverLevel/> */}
              </div>
            </div>
           
      </div>
        
    </div>
      {/* <!-- main-panel ends --> */}
</>
  )
}

export default DashBoard