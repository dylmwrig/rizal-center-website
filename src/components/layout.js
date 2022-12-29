import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import logo from '../images/old-logo.png' 
import Navbar from "./navbar"
import Footer from "./footer"
import "./style.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="text-center"> 
      <div class="pt-5">
        <a href="/"><img src={logo} alt="Rizal Heritage Center"></img></a>
      </div>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Rizal Center`} />
      <div class="container">
        <div class="row">
          <div class="col-1"/>
          <div className="col-10"> {/*change w-75 if full site width needs to change*/}
            <main>
              {children}
            </main>
            <Footer />
          </div>
          <div class="col-1"/>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
