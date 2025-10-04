import React from 'react'
import '../../public/css/style.css'
import '../../public/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PopupForm from '../components/PopupForm';
import { Link } from "react-router-dom";
import { useState } from 'react';

function HomePage() {
    const [showPopup, setShowPopup] = useState(false);

  return (
    <>
     {/* Spinner Start */}
    {/* <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style={{width:" 3rem", height:"3rem"}}></div>
    </div> */}
    {/* Spinner End */}

<Header/>
   


    {/*  Carousel Start  */}
    <div className="container-fluid p-0 mb-6 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1">
                    <img className="img-fluid" src="img/flood1.png" alt="Image"/>
                </button>
                <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2">
                    <img className="img-fluid" src="img/flood2.png" alt="Image"/>
                </button>
                <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3">
                    <img className="img-fluid" src="img/flood3.png" alt="Image"/>
                </button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/flood1.png" alt="Image"/>
                    <div className="carousel-caption">
                        <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">Stay Ahead of the Flood – Get Early Warnings Instantly
                        </h1>
                        <Link className="btn btn-primary py-3 px-4" onClick={() => setShowPopup(true)}>
                            Sign Up for Free Alerts
                        </Link>

                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/flood2.png" alt="Image"/>
                    <div className="carousel-caption">
                        <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">Protect Lives and Property with Real-Time Flood Alerts
                        </h1>
                        <a href="#" className="btn btn-primary py-3 px-4">Learn How It Works</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/flood3.png" alt="Image"/>
                    <div className="carousel-caption">
                        <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">Smart Sensor Technology to Keep Communities Safe
                        </h1>
                        <Link className="btn btn-primary py-3 px-4" onClick={() => setShowPopup(true)}>
                           Join Our Alert Networ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Carousel End  */}
<PopupForm show={showPopup} onClose={() => setShowPopup(false)} />

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


    


   


    <div class="container-fluid newsletter mt-6 wow fadeIn" data-wow-delay="0.1s">
        <div class="container pb-5">
            <div class="bg-white p-5 mb-5">
                <div class="row g-5">
                    <div class="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                        <h1 class="display-6 text-uppercase mb-4">Newsletter</h1>
                        <div class="d-flex">
                            <i class="far fa-envelope-open fa-3x text-primary me-4"></i>
                            <p class="fs-5 fst-italic mb-0">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore lorem ipsum.</p>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control border-0 bg-light" id="mail" placeholder="Your Email"/>
                            <label for="mail">Your Email</label>
                        </div>
                        <button class="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


   


    


    


    


    
<Footer/>

    


    {/*  Back to Top  */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i
            className="bi bi-arrow-up"></i></a>


    
    </>
  )
}

export default HomePage