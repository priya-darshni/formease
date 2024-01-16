import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className="footer-08">
  <div className="container-fluid px-lg-5">
    <div className="row">
      <div className="col-md-9 py-5">
        <div className="row">
          <div className="col-md-4 mb-md-0 mb-4">
            <h2 className="footer-heading">About us</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <ul className="ftco-footer-social p-0">
              <li className="ftco-animate"><NavLink to='/' data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter" /></NavLink></li>
              <li className="ftco-animate"><NavLink to='/' data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook" /></NavLink></li>
              <li className="ftco-animate"><NavLink to='/' data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram" /></NavLink></li>
            </ul>
          </div>
          <div className="col-md-8">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-9">
                <div className="row">
                  <div className="col-md-4 mb-md-0 mb-4">
                    <h2 className="footer-heading">Discover</h2>
                    <ul className="list-unstyled">
                      <li><NavLink to='/' className="py-1 d-block">Buy &amp; Sell</NavLink></li>
                      <li><NavLink to='/' className="py-1 d-block">Merchant</NavLink></li>
                      <li><NavLink to='/' className="py-1 d-block">Giving back</NavLink></li>
                      <li><NavLink to='/' className="py-1 d-block">Help &amp; Support</NavLink></li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-md-0 mb-4">
                    <h2 className="footer-heading">About</h2>
                    <ul className="list-unstyled">
                      <li><NavLink to='/' className="py-1 d-block">Staff</NavLink></li>
                      <li><NavLink to='/' className="py-1 d-block">Team</NavLink></li>
                      <li><NavLink to='/' className="py-1 d-block">Careers</NavLink></li>
                      <li><NavLink to='/' className="py-1 d-block">Blog</NavLink></li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-md-0 mb-4">
                    <h2 className="footer-heading">Resources</h2>
                    <ul className="list-unstyled">
                      <li><NavLink to='/' className="py-1 d-block">Security</NavLink></li>
                      <li><NavLink to='/' className="py-1 d-block">Global</NavLink></li>
                      <li><NavLink to='/' className="py-1 d-block">Charts</NavLink></li>
                      <li><NavLink to='/' className="py-1 d-block">Privacy</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-md-5">
          <div className="col-md-12">
            <p className="copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="ion-ios-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 py-md-5 py-4 aside-stretch-right pl-lg-5">
        <h2 className="footer-heading footer-heading-white">Contact us</h2>
        <form action="#" className="contact-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea name id cols={30} rows={3} className="form-control" placeholder="Message" defaultValue={""} />
          </div>
          <div className="form-group">
            <button type="submit" className="form-control submit px-3">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</footer>
<script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </>
  )
}

export default Footer