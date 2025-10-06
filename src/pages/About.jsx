import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import '../../public/css/style.css'
import '../../public/css/bootstrap.min.css';
import Footer from '../components/Footer'

function About() {
  return (
    <>
<Header/>
    <Hero title="About Us"/>
     {/*  About Start  */}
    <div className="container-fluid pt-6 pb-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img">
                        <img className="img-fluid w-100" src="img/flood4.png"/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-6 text-uppercase mb-4">What We Do</h1>
                    <p className="mb-4">Flooding causes devastation across Nigeria every year, but timely warnings can save lives and property. Early Flood Free combines real-time sensor technology, data analysis, and SMS communication to create an effective early-warning system that empowers citizens and local authorities to act before disaster strikes.</p>
                    
                    
                    <div className="border border-5 border-primary p-4 text-center mt-4">
                        <h4 className="lh-base text-uppercase mb-0">Smart Flood Detection for a Safer Nigeria</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  About End  */}

    {/*  Features Start  */}
    <div className="container-fluid feature mt-6 mb-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-0 justify-content-end">
                <div className="col-lg-6 pt-5">
                    <div className="mt-5">
                        <h1 className="display-6 text-white text-uppercase mb-4 wow fadeIn" data-wow-delay="0.3s">Why Choose Early Flood Free?</h1>
                        <p className='text-start'><i className="fa fa-check-square text-primary me-3 "></i>Real-Time Monitoring
                    </p>
                    <p className='text-start'><i className="fa fa-check-square text-primary me-3 text-start"></i>SMS Alerts.
                    </p>
                    <p  className='text-start'><i className="fa fa-check-square text-primary me-3 text-start"></i>Community Protection.
                    </p>
                    <p  className='text-start'><i className="fa fa-check-square text-primary me-3 text-start"></i>Simple & Reliable.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Features End  */}


    {/*  Features Start  */}
    <div className="container-fluid pt-6 pb-6">
                                  <h1>How it works</h1>
        <div className="container pt-4">

            <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div className="feature-item border h-100">
                        <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                            <i className="fa fa-hammer fa-2x text-white"></i>
                        </div>
                        <div className="p-5 pt-0">
                            <h5 className="text-uppercase mb-3">Install Sensors</h5>
                            <p>Our flood detection devices are placed near rivers, drainage systems, and flood-prone zones.</p>
                            <a className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                href="#"><b className="bg-white pe-3">Read More</b> <i
                                    className="bi bi-arrow-right bg-white ps-3"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.4s">
                    <div className="feature-item border h-100">
                        <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                            <i className="fa fa-dollar-sign fa-2x text-white"></i>
                        </div>
                        <div className="p-5 pt-0">
                            <h5 className="text-uppercase">Monitor Water Levels</h5>
                            <p>Sensors continuously track water rise and environmental changes in real time.</p>
                            <a className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                href="#"><b className="bg-white pe-3">Read More</b> <i
                                    className="bi bi-arrow-right bg-white ps-3"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div className="feature-item border h-100">
                        <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                            <i className="fa fa-check-double fa-2x text-white"></i>
                        </div>
                        <div className="p-5 pt-0">
                            <h5 className="text-uppercase">Detect Flood Risk</h5>
                            <p>When water levels exceed a safe threshold, the system automatically triggers an alert.</p>
                            <a className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                href="#"><b className="bg-white pe-3">Read More</b> <i
                                    className="bi bi-arrow-right bg-white ps-3"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.6s">
                    <div className="feature-item border h-100">
                        <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                            <i className="fa fa-tools fa-2x text-white"></i>
                        </div>
                        <div className="p-5 pt-0">
                            <h5 className="text-uppercase">Instant SMS Alerts</h5>
                            <p>Registered users receive early warnings directly to their phones, giving them time to prepare or evacuate.</p>
                            <a className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                href="#"><b className="bg-white pe-3">Read More</b> <i
                                    className="bi bi-arrow-right bg-white ps-3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Features End  */}

    {/* Footer start */}

      <Footer/>

    {/* Footer end */}
    
    </>
  )
}

export default About