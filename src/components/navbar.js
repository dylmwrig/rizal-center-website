import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    //<nav className="navbar navbar-expand-md  bg-primary">
    <nav className="navbar navbar-expand-md text-light bg-primary">
      <div className="container">
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="/" class="nav-link text-light">Home</a>
            </li>
            <div class="vr"/>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" data-bs-toggle="dropdown">Support</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/support/"> Support </a></li>
                  <li><a class="dropdown-item" href="/wish-list/"> In-Kind Wish List</a></li>
                  <li><a class="dropdown-item" href="/volunteer/"> Volunteer Opportunities</a></li>
                  <li><a class="dropdown-item" href="/volunteer-policies"> Volunteer Policies</a></li>
                </ul>
            </li>
            <div class="vr"/>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" data-bs-toggle="dropdown">Community</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/eat-local/"> Eat local </a></li>
                  <li><a class="dropdown-item" href="/newsletter/"> Bayanihan News </a></li>
                  <li><a class="dropdown-item" href="/news-feed/"> Filipino News </a></li>
                  <li><a class="dropdown-item" href="/celebrating-rizal.js"> Celebrating Rizal Center </a></li>
                </ul>
            </li>
            <div class="vr"/>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" data-bs-toggle="dropdown">About Us</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/about/"> About Us </a></li>
                  <li><a class="dropdown-item" href="/contact/"> Contact Us </a></li>
                  <li><a class="dropdown-item" href="/our-team/"> Our Team </a></li>
                  <li><a class="dropdown-item" href="/jose-rizal/"> For Whom It Is Named</a></li>
                  <li><a class="dropdown-item" href="/policies/"> Policies</a></li>
                  <li><a class="dropdown-item" href="#"> Privacy Statement</a></li>
                </ul>
            </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: `Rizal Heritage Center Chicago`,
}

export default Navbar
