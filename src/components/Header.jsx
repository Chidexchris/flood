import React from 'react'
import '../../public/css/style.css'
import '../../public/css/bootstrap.min.css';

function Header() {
  return (
    <>
     {/*  Topbar Start  */}
    <div className="container-fluid bg-primary text-white d-none d-lg-flex wow fadeIn " data-wow-delay="0.1s">
        <div className="container py-3">
            <div className="d-flex align-items-center">
                <a href="index.html">
                    <h2 className="text-white fw-bold m-0">FLOOD FREE</h2>
                </a>
                <div className="ms-auto d-flex align-items-center">
                    <small className="ms-4"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</small>
                    <small className="ms-4"><i className="fa fa-envelope me-3"></i>info@example.com</small>
                    <small className="ms-4"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</small>
                    <div className="ms-3 d-flex">
                        <a className="btn btn-sm-square btn-light text-primary ms-2" href=""><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-sm-square btn-light text-primary ms-2" href=""><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-sm-square btn-light text-primary ms-2" href=""><i
                                className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Topbar End  */}


    {/*  Navbar Start  */}
    <div className="container-fluid bg-white sticky-top wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                <a href="index.html" className="navbar-brand d-lg-none">
                    <h1 className="fw-bold m-0">WELDORK</h1>
                </a>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Services</a>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <div className="ms-auto d-none d-lg-block">
                        <a href="" className="btn btn-primary py-2 px-3">Sign in</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    {/*  Navbar End  */}
    
    </>
  )
}

export default Header