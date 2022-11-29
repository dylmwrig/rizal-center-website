import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => {
  return (
      <div className="container-fluid mx-auto">
        <div className="row"> 
          <div className="col-4">copyright stuff</div>
          <div className="col-4">facebook logo</div>
          <div className="col-4">address</div>
        </div>
        <div className="d-flex justify-content-evenly">
          <div className="col-2"><a href="#">Support</a></div>
          <div className="col-2"><a href="#">Volunteer Opportunities</a></div>
          <div className="col-2"><a href="#">Volunteer Orientation</a></div>
          <div className="col-2"><a href="#">Volunteer Policies</a></div>
          <div className="col-2"><a href="#">Privacy Statement</a></div>
          <div className="col-2"><a href="#">Contact Us</a></div>
        </div>
      </div>
  )
}

export default Footer
