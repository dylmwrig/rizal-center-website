import * as React from "react"

import img from "../images/eat-local.jpg"

import InfoBox from "../components/info-box.js"

import "../components/wish-list.css"
import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const EatLocal = () => (
  <Layout>
    <div class="container my-5"> 
      <div class="row">
        <div class="col-7">
        <h4 class="text-start">Please consider supporting Chicago's Filipino community by eating at one of the following:</h4>
          <div class="fancy row pt-3">
            <div class="fst-italic col-6 text-start">
              A Taste of Philippines<br/>
              Bayan Ko<br/>
              Boonie Foods Revival Food Hall<br/>
              Botanical Cafe<br/>
              Bacolod Chicken Haus<br/>
              Cebu<br/>
              Hiromi's Oriental Restaurant<br/>
              Kawayan<br/>
              Kubo Chicago<br/>
              Max's Restaurant Chicago<br/>
              Merla's Kitchen<br/>
              Ruby's Fast Food<br/>
              SUBO Filipino Kitchen<br/>
              Sunda Chicago<br/>
              The Crab Pad<br/>
              Uncle Mike's Place<br/>
              Wake n' Bacon<br/>
            </div>
            <div class="fancy fst-italic col-6 text-end">
              131 N Clinton Street<br/>          
              1810 W Montrose Avenue<br/>
              125 S. Clark Street<br/>
              3740 N. Lincoln Avenue<br/>
              6320 North Lincoln Avenue C & D<br/>
              2211 W North Avenue<br/>
              3609 W Lawrence Avenue<br/>
              4859 N Milwaukee Avenue<br/>
              1232 W Belmont Avenue<br/>
              5033 N Elston Avenue<br/>
              5207 N Kimball Avenue<br/>
              4551 N Pulaski Rd.<br/>
              4712 N Kimball Avenue<br/>
              110 W Illinois Street<br/>
              4337 N Western Avenue<br/>
              1700 W Grand Avenue<br/>
              420 W Belmont Avenue<br/>
            </div>
          </div>
        </div>
        <div class="col-1"/>
        <div class="col-4">
        <img class="pb-2" src={img} alt="Filipino food"/>
        <InfoBox 
          info={["This list is by no means comprehensive — but it's a start. If you know of a restaurant or bar that should be added to the list or an update is needed, please let us know and we will be happy to do.  Just send us a message on our Contact Us form.",
          "The Filipino American Council of Greater Chicago is providing this information solely as a community service.",
          "Happy eating!"]}
          link={true}/>
        </div>
      </div>
    </div>
  </Layout>
)

export default EatLocal 

export const Head = () => (
    <Seo title="Support the Filipino community of Chicago by eating local!" />
)


