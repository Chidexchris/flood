import React from 'react'
import Sidebar from '../components/Sidebar'
import RiverLevel from '../components/RiverLevel'
import River from '../components/River'
import AdminHeader from '../components/AdminHeader'

function DashBoard() {
  return (
    <>
    <AdminHeader/>
    <div class="container-fluid page-body-wrapper">      
      {/* <!-- partial:partials/_sidebar.html --> */}

                <Sidebar/>

      {/* <!-- partial --> */}
      <div class="main-panel">
        <div class="content-wrapper">

          <div class="row">
            <div class="col-xl-6 grid-margin stretch-card flex-column">
              <div class="row">

                <River/>
                 <RiverLevel/>

                <div class="col-md-6 grid-margin stretch-card">
                  <div class="card">
                      <h6></h6>

                    <div class="card-body d-flex flex-column justify-content-between">
                      <div class="d-flex justify-content-between align-items-center m-0 ">
                      </div>
                       
                      <canvas id="sales-chart-a" class="mt-0" height="65"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row h-100">         
              </div>
            </div>
            <div class="col-xl-6 grid-margin stretch-card flex-column">

            </div>
          </div>
        </div>
        
      </div>
      {/* <!-- main-panel ends --> */}
    </div>
    
    </>
  )
}

export default DashBoard