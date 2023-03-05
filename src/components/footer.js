import * as React from "react"

import './style.scss'

const Footer = () => {
  return (
    <footer>
      <div class="container-fluid">
        <div class="row pt-5">
          <div class="col-2"/>
          <p class="col-3 text-muted text-start">©2023 FILIPINO AMERICAN COUNCIL OF<br/>GREATER CHICAGO - ALL RIGHTS RESERVED.</p>
          <div class="col-2">
            <a href="https://www.facebook.com/facchicago" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                alt="Follow us on Facebook!"
                height="40" width="40">
              </img>
            </a>
          </div>
          <p class="col-3 text-muted text-end">1332 W IRVING PARK ROAD<br/>CHICAGO, ILLINOIS 60613</p>
          <div class="col-2"/>
        </div>
        <div class="row">
          <div class="col-2"/>
          <div class="col-8">
            <div class="row">
              <div class="col-12 btn-group">
                <a role="button" type="button" class="btn btn-primary footBtn fst-bold" href="/about/">About Us</a>
                <a role="button" type="button" class="btn btn-primary footBtn fst-bold" href="/support/">Support</a>
                <a role="button" type="button" class="btn btn-primary footBtn fst-bold" href="/eat-local/">Eat Local</a>
                <a role="button" type="button" class="btn btn-primary footBtn fst-bold" href="/newsletter/">Newsletter</a>
                <a role="button" type="button" class="btn btn-primary footBtn fst-bold" href="/contact/">Contact Us</a>
              </div>
            </div>
          </div>
          <div class="col-2"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
