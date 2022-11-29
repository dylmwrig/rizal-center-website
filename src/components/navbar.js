import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../components/navbar.css'

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    //<nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#" class="nav-link">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Support</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"> Support </a></li>
                  <li><a class="dropdown-item" href="#"> In-Kind Wish List</a></li>
                  <li><a class="dropdown-item" href="#"> Volunteer Opportunities</a></li>
                  <li><a class="dropdown-item" href="#"> Volunteer Orientation</a></li>
                  <li><a class="dropdown-item" href="#"> Volunteer Policies</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About Us</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"> About Us </a></li>
                  <li><a class="dropdown-item" href="#"> For Whom It Is Named</a></li>
                  <li><a class="dropdown-item" href="#"> Celebrating Rizal Center</a></li>
                  <li><a class="dropdown-item" href="#"> Policies</a></li>
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
  siteTitle: ``,
}

export default Navbar
