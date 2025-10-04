import React from 'react'
import '../../public/css/style.css'
import '../../public/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
     {/*  Topbar Start  */}
    <div className="container-fluid bg-primary text-white d-none d-lg-flex wow fadeIn pt-0 mt-0 " data-wow-delay="0.1s" style={{width:'1391px', marginTop:'0 !important'}}>
        <div className="container py-3">
            <div className="d-flex align-items-center">
                   <Link to="/">
                    <h2 className="text-white fw-bold m-0">FLOOD Alert</h2>
                   </Link>
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
                <Link  className="navbar-brand d-lg-none" to="/">
                     <h1 className="fw-bold m-0">Flood Alert</h1>
                </Link>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/about">About</Link>
                        <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    </div>
                    <div className="ms-auto d-none d-lg-block">
                        <Link className="btn btn-primary py-2 px-3" to="/dashboard">Sign in</Link>
                       
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