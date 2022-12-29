import * as React from "react"

import './style.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="d-flex justify-content-evenly my-4"> 
          <p className="text-muted text-start">©2023 FILIPINO AMERICAN COUNCIL OF GREATER CHICAGO <br/>- ALL RIGHTS RESERVED.</p>
          <div className="">
            <a href="https://www.facebook.com/facchicago">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                alt="Follow us on Facebook!"
                height="50" width="50">
              </img>
            </a>
          </div>
          <p className="text-muted">1332 W IRVING PARK ROAD CHICAGO, ILLINOIS 60613</p>
        </div>
        <div className="d-flex justify-content-evenly pb-4">
          <div><a href="/support/">Support</a></div>
          <div><a href="/volunteer/">Volunteer Opportunities</a></div>
          <div><a href="/eat-local/">Eat Local</a></div>
          <div><a href="#">Privacy Statement</a></div>
          <div><a href="/contact/">Contact Us</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
