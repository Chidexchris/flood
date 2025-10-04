import React from 'react'
import '../../public/css/bootstrap.min.css';
import '../../public/css/style.css'

function Footer() {
  return (
    <>
     {/* Copyright Start */}
    <div className="container-fluid text-body copyright py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="fw-semi-bold" href="#">Early Flood Alert</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                     {/* This template is free as long as you keep the below author’s credit link/attribution link/backlink.  */}
                    {/* If you'd like to use the template without the below author’s credit link/attribution link/backlink,  */}
                     {/* you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal".  */}
                    Designed By <a className="fw-semi-bold" href="https://htmlcodex.com">DTconcepts</a>
                </div>
            </div>
        </div>
    </div>
     {/* Copyright End  */}
    </>
  )
}

export default Footer