import React from 'react'
import Sidebar from '../components/Sidebar'
import RiverLevel from '../components/RiverLevel'
import River from '../components/River'
import AdminHeader from '../components/AdminHeader'

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

          <div class="row">
            <div class="col-xl-6 grid-margin stretch-card flex-column">
              <div class="row">

                <River/>
                 <RiverLevel/>

                
              </div>
            </div>
           
          </div>
        </div>
        
      </div>
      {/* <!-- main-panel ends --> */}
    </div>
    </div>
    
    </>
  )
}

export default DashBoard