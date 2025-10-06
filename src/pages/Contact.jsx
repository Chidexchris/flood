import Hero from '../components/Hero';
import '../../public/css/bootstrap.min.css';
import '../../public/css/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <> 
    <Header />
    <Hero title="Contact" />

    <div className="pt-6 pb-6">
        <div className="container-fluid appoinment py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container pt-5">
                <div className="row gy-5 gx-0">
                    <div className="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
                        <h1 className="display-6 text-uppercase text-white mb-4">Have Any Query? Feel Free To Contact Us
                        </h1>
                        <p className="text-white mb-5 wow fadeIn" data-wow-delay="0.4s">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. </p>
                        <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.5s">
                            <div className="btn-lg-square bg-white">
                                <i className="bi bi-envelope-at text-dark fs-3"></i>
                            </div>
                            <div className="ms-3">
                                <h6 className="text-white text-uppercase">Mail Us</h6>
                                <span className="text-white">info@example.com</span>
                            </div>
                        </div>
                        <hr className="bg-body"/>
                        <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.6s">
                            <div className="btn-lg-square bg-white">
                                <i className="bi bi-telephone text-dark fs-3"></i>
                            </div>
                            <div className="ms-3">
                                <h6 className="text-white text-uppercase">Call Us</h6>
                                <span className="text-white">+012 345 67890</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-n5 wow fadeIn" data-wow-delay="0.7s">
                        <div className="bg-white p-5">
                            <h2 className="text-uppercase mb-4">Contact Us</h2>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0 bg-light" id="name" placeholder="Your Name"/>
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control border-0 bg-light" id="mail" placeholder="Your Email"/>
                                        <label htmlFor="mail">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0 bg-light" id="mobile" placeholder="Your Mobile"/>
                                        <label htmlFor="mobile">Your Mobile</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0 bg-light" id="subject" placeholder="Subject"/>
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" id="message"
                                            style={{height:'130px'}}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    <Footer />
    
    </>
  )
}

export default Contact