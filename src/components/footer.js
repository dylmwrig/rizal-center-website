import * as React from "react"

import './style.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid mx-auto">
        <div className="row"> 
          <p className="col-4 text-muted text-left my-4">©2023 FILIPINO AMERICAN COUNCIL OF GREATER CHICAGO -  ALL RIGHTS RESERVED.</p>
          <div className="col-4 my-4">
            <a href="https://www.facebook.com/facchicago">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                alt="Follow us on Facebook!"
                height="50" width="50">
              </img>
            </a>
          </div>
          <p className="col-4 my-4 text-muted">1332 W IRVING PARK ROAD CHICAGO, ILLINOIS 60613</p>
        </div>
        <div className="d-flex justify-content-evenly pb-4">
          <div><a href="/support/">Support</a></div>
          <div><a href="/volunteer/">Volunteer Opportunities</a></div>
          <div><a href="/policies/">Volunteer Policies</a></div>
          <div><a href="#">Privacy Statement</a></div>
          <div><a href="/contact/">Contact Us</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
