import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';
import RiverLevel from '../components/RiverLevel';
function Location1() {
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
              <RiverLevel totalDepth={30} currentHeight={22}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location1