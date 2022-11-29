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
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a href="#" class="nav-link">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Hover me</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"> Item 1 </a></li>
                  <li><a class="dropdown-item" href="#"> Item 2 </a></li>
                  <li><a class="dropdown-item" href="#"> Item 3 </a></li>
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
