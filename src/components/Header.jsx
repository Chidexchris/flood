import React from 'react'
import '../../public/css/style.css'
import '../../public/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import DownloadButton from "./DownloadButton";



function Header() {
    return (
        <>
            {/*  Topbar Start  */}
            <div className="container-fluid bg-blue text-white d-none d-lg-flex wow fadeIn pt-0 mt-0 " data-wow-delay="0.1s" style={{ width: '1391px', marginTop: '0 !important' }}>
                <div className="container py-3">
                    <div className="d-flex align-items-center">
                        <Link to="/">
                            <h2 className="text-white fw-bold m-0 text-decoration-none">HYDROVIGIL</h2>
                        </Link>
                        <div className="ms-auto d-flex align-items-center">
                            <small className="ms-4"><i className="fa fa-map-marker-alt me-3"></i>No 27 ph road, Aba, Abia State, Nigeria</small>
                            <small className="ms-4"><i className="fa fa-envelope me-3"></i>info@earlyfloodalert.com</small>
                            <small className="ms-4"><i className="fa fa-phone-alt me-3"></i>+234 91 345 67890</small>
                            <div className="ms-3 d-flex">
                                <a className="btn btn-sm-square btn-light text ms-2" href=""><i
                                    className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-light text ms-2" href=""><i
                                    className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-light text ms-2" href=""><i
                                    className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Topbar End  */}


            {/*  Navbar Start  */}
            <div className="container-fluid sticky-top wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <nav className="navbar navbar-expand-lg  navbar-light p-lg-0">
                        <Link className="navbar-brand d-lg-none" to="/">
                            <h1 className="fw-bold m-0 text-blue">HYDROVIGIL </h1>
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
                                <div className="ms-auto d-block d-lg-none  boder-0 gap-3">
                                <Link className="btn btn-primary  bg-blue py-2 px-3 boder-0 mx-2" to="/signin">Sign in</Link>
                                <DownloadButton
                                    fileUrl="../../app-release.apk"  // put your file in public/files folder
                                    fileName="HydroVigil-App.apk"
                                    label="Get App"
                                />

                            </div>
                            </div>
                            <div className="ms-auto d-none d-lg-block boder-0 gap-3">
                                <Link className="btn btn-primary  bg-blue py-2 px-3 boder-0 mx-2" to="/signin">Sign in</Link>
                                <DownloadButton
                                    fileUrl="../../app-release.apk"  // put your file in public/files folder
                                    fileName="HydroVigil-App.apk"
                                    label="Get App"
                                />

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