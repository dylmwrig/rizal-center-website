import * as React from "react"

import img from "../images/volunteer-policies.jpg" 

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const VolunteerPolicies = () => (
  <Layout>
    <div class="container my-5 ">
      <div class="row text-start">
        <h4 class="">VOLUNTEER POLICIES</h4>
        <p>
          Volunteers are significant members of our team. Teams work together to provide the best services and experience possible to our visitors. We want your participation to be beneficial and rewarding. Your loyalty and dedication towards furthering the reputation and integrity of the Filipino American Council of Greater Chicago (FACGC) are of the utmost importance.<br/>
        </p>
        
        <div>
          <h4 class="pt-3">VOLUNTEER CODE OF ETHICS AND PROFESSIONAL STANDARDS</h4>
          <p>
            This Volunteer Handbook is provided to inform volunteers and potential volunteers of the policies and operating procedures of the FACGC, and of the many service opportunities that are available. It is not a contract for employment or a guarantee of a continuing relationship with the FACGC.<br/>
          </p>
        </div>
        <p>
          The Filipino American Council of Greater Chicago reserves the right to change policies and procedures or revise the contents of the Volunteer Handbook at its sole discretion, without prior notification to volunteers. In the event that any changes are made, the revised policies and procedures shall be posted on the website immediately. Please check the latest information posted to inform yourself of any changes.
        </p>
        <a href="/VolunteerEthics2019.pdf" download>You can download the handbook here</a>
      </div>
    </div>
  </Layout>
)

export default VolunteerPolicies

export const Head = () => (
    <Seo title="Volunteer Policies" />
)
