import * as React from "react"

import img from "../images/get-involved.jpg"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const SupportPage = () => (
  <Layout>
    <div class="container my-5 text-start">
      <div class="row">
        <h5 class="pb-3">GET INVOLVED</h5>
        <p class="col-8 fw-light text-muted">
Volunteers and donations help ensure that quality programming  and services as well as great community events can keep happening.  We do this important work because we firmly believe that programs like ours can be transformative, and that they are vital to the overall health and productivity of our community.  If you agree, we hope you will consider volunteering, donating,  becoming a member – or all of the above!<br/><br/>
The Rizal Community Center, operated by the FACGC, relies on the generous support of the friendly people in and around the greater Chicago area to keep functioning as a center of arts and culture. We are grateful to everyone who has ever volunteered their time, donated money, or participated in a program or event here at Rizal Community Center, and we hope you will keep coming back. 
        </p>
        <div class="col-4 text-center"> 
          <div class="d-block" id="imgCont">
            <img src={img} class="w-100 img-fluid" alt="Get involved!"/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SupportPage 

export const Head = () => (
    <Seo title="Support the Rizal Heritage Center" />
)
