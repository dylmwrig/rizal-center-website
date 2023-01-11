import * as React from "react"

import img from "../images/eat-local.jpg"

import "../components/wish-list.css"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const EatLocal = () => (
  <Layout>
    <div class="container my-5 text-start">
      <div class="row">
        <h5>PLEASE SUPPORT OUR COMMUNITY BY EATING LOCAL!</h5>
        <div class="col-8">
          <p class="fw-light text-muted">
            A Taste of Philippines, 131 N Clinton Street<br/>          
            Bayan Ko, 1810 W Montrose Avenue<br/>
            Boonie Foods Revival Food Hall, 125 S. Clark Street<br/>
            Botanical Cafe, 3740 N. Lincoln Avenue<br/>
            Bacolod Chicken Haus, 6320 North Lincoln Avenue C & D<br/>
            Cebu, 2211 W North Avenue<br/>
            Hiromi's Oriental Restaurant, 3609 W Lawrence Avenue<br/>
            Kawayan, 4859 N Milwaukee Avenue<br/>
            Kubo Chicago, 1232 W Belmont Avenue<br/>
            Max's Restaurant Chicago, 5033 N Elston Avenue<br/>
            Merla's Kitchen, 5207 N Kimball Avenue<br/>
            Ruby's Fast Food, 4551 N Pulaski Rd.<br/>
            SUBO Filipino Kitchen, 4712 N Kimball Avenue<br/>
            Sunda Chicago, 110 W Illinois Street<br/>
            The Crab Pad, 4337 N Western Avenue<br/>
            Uncle Mike's Place, 1700 W Grand Avenue<br/>
            Wake n' Bacon, 420 W Belmont Avenue<br/>
          </p>
        </div>
        <div class="col-4">
          <img src={img} alt="Filipino food"/>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-6 text-muted fw-light info">
          <p class="p-3">
            This list is by no means comprehensive — but it's a start. If you know of a restaurant or bar that should be added to the list or an update is needed, please let us know and we will be happy to do.  Just send us a message on our Contact Us form.   You can also email us at hello@rizalcenterchicago.org.<br/><br/> 
            The Filipino American Council of Greater Chicago is providing this information solely as a community service.<br/><br/>
            Happy eating!
          </p>
        </div>
        <div class="col-6"/>
      </div>
    </div>
  </Layout>
)

export default EatLocal 

export const Head = () => (
    <Seo title="Support the Filipino community of Chicago by eating local!" />
)
