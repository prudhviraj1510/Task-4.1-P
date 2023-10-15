import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import { faFaceFlushed } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="pages">
          <ul className='footerUl'>
            <h3>For Dev</h3>
            <li className='footerLi'><a href="#">How it works</a></li>
            <li className='footerLi'><a href="#">How to create a profile</a></li>
            <li className='footerLi'><a href="#">Find jobs</a></li>
          </ul>

          <ul className='footerUl'>
            <h3>For Clients</h3>
            <li className='footerLi'><a href="#">How it works</a></li>
            <li className='footerLi'><a href="#">How to post a job</a></li>
            <li className='footerLi'><a href="#">Find dev</a></li>
          </ul>

          <ul className='footerUl'>
            <h3>Stay Connected</h3>
            <li className='footerLi'><FontAwesomeIcon icon={faFacebook} /> Facebook</li>
            <li className='footerLi'><FontAwesomeIcon icon={faTwitter} /> Twitter</li>
            <li className='footerLi'><FontAwesomeIcon icon={faInstagram} /> Instagram</li>
          </ul>
        </div>
      </div>
      <div className="social">
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-github"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>
      <div className="info">
        <div className="legal">
          <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
        </div>
        <div className="copyright">2023 Copyright &copy; Prudhvi Raj</div>
      </div>
    </footer>
  )
}

export default Footer