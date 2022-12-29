import * as React from "react"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const VolunteerOpportunities = () => (
  <Layout>
    <div class="container my-5 text-start">
      <div class="row">
        <h5>VOLUNTEERING</h5>
        <p class="fw-light text-muted">
Volunteering is a great way to make a difference and get to know our diverse community. We are always recruiting enthusiastic volunteers, and make the most of your time and skills to accomplish FACC's mission and purposes.<br/>
Program roles often require the ability to volunteer on a regular schedule: the same day and time each week. We generally ask for a minimum of a six-month commitment when volunteering in a program.<br/><br/>
In general, all volunteers should be at least 21 years of age and be fluent in English and/or Tagalog.  Volunteers the age of 18 and under must:<br/>
Have a waiver signed by a parent or guardian
Be accompanied and actively supervised by an authorized adult.
Volunteers under the age of 16 must be accompanied and actively supervised by a parent or legal guardian.
We require one (1) adult chaperone per every ten (10) volunteers age 18 or under.


To discuss youth volunteer opportunities, please contact Sally Velasco at sallyvelascor@yahoo.com 


Volunteers must be able to:

Reside in the greater Chicago area.
Commit to a minimum of ten volunteer hours per month.
Delight in working with the public.
Visit and familiarize themselves with the FACC's policies and procedures and programs in order to answer visitor questions confidently.
Attend in-service training.


BENEFITS

Becoming a program volunteer at Rizal Center has many benefits. You’ll be joining a team of volunteers and staff working together to build community and write the next chapter of our organization. Here are some of the benefits volunteering can provide:



Personal and professional growth: strengthen your existing skills and learn new skills as you volunteer.
Work in a community center that embraces and reflects the diversity of our community. Meet new people and expand your worldview.
Make a difference! Every volunteer role is designed to fill a need in our community – your work changes lives.


 All volunteers are encouraged to become members of the Filipino American Council of Greater Chicago.



Please review the position descriptions before applying. Listed are some volunteer positions that become available most frequently. 
        </p>
      </div>
    </div>
  </Layout>
)

export default VolunteerOpportunities 

export const Head = () => (
    <Seo title="Support the Filipino community of Chicago by volunteering!" />
)
