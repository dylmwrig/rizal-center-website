import * as React from "react"

import volImg from "../images/volunteer.jpg"
import volImg2 from "../images/volunteer2.jpg"
import volImg3 from "../images/volunteer3.jpg"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const VolunteerOpportunities = () => (
  <Layout>
    <div class="container my-5 ">
      <img class="text-center pb-4" src={volImg3} alt="We love our volunteers!"/>
      <div class="row volunteer text-start">
        <h5 class="fw-bold">VOLUNTEERING</h5>
        <p> 
Volunteering is a great way to make a difference and get to know our diverse community. We are always recruiting enthusiastic volunteers, and make the most of your time and skills to accomplish FACC's mission and purposes.<br/>
Program roles often require the ability to volunteer on a regular schedule: the same day and time each week. We generally ask for a minimum of a six-month commitment when volunteering in a program.<br/>
        </p>
        <h5 class="pt-3 fw-bold">REQUIREMENTS FOR VOLUNTEERS 21 YEARS AND OLDER:</h5> 
        <div class="row">
          <div class="col-8 py-4">
            <ul>
              <li>Be fluent in English and/or Tagalog</li>
              <li>Reside in the greater Chicago area.</li>
              <li>Commit to a minimum of ten volunteer hours per month.</li>
              <li>Delight in working with the public.</li>
              <li>Visit and familiarize themselves with the FACC's policies and procedures and programs in order to answer visitor questions confidently.</li>
              <li>Attend in-service training.</li><br/>
            </ul>
          </div>
          <div class="col-4"> 
            <img src={volImg2} alt="We love our volunteers!"/>
          </div>
        </div>
  
        <h5 class="fw-bold pb-2">ADDITIONAL REQUIREMENTS FOR VOLUNTEERS 18 YEARS AND YOUNGER:</h5> 
        <div class="row mb-4">
          <div class="col-4">
            <img src={volImg} alt="Boy Scouts Volunteering Opportunity"/>
          </div>
          <div class="col-8">
            <ul> 
              <li>Have a waiver signed by a parent or guardian</li>
              <li>Be accompanied and actively supervised by an authorized adult.</li>
              <li>Volunteers under the age of 16 must be accompanied and actively supervised by a parent or legal guardian.</li>
              <li>We require one (1) adult chaperone per every ten (10) volunteers age 18 or under.</li>
            </ul>
            <p>
              To discuss youth volunteer opportunities, please contact Sally Velasco at sallyvelascor@yahoo.com.
            </p>
          </div>
        </div>

        <h5 class="pt-3 fw-bold">BENEFITS</h5>
        <p>
Becoming a program volunteer at Rizal Center has many benefits. You’ll be joining a team of volunteers and staff working together to build community and write the next chapter of our organization. Here are some of the benefits volunteering can provide:<br/>
        </p>
        <ul>
          <li>Personal and professional growth: strengthen your existing skills and learn new skills as you volunteer.</li>
          <li>Work in a community center that embraces and reflects the diversity of our community. Meet new people and expand your worldview.</li>
          <li>Make a difference! Every volunteer role is designed to fill a need in our community – your work changes lives.</li>
        </ul>
        <p>
          All volunteers are encouraged to become members of the Filipino American Council of Greater Chicago.
          Please review the position descriptions before applying. Listed are some volunteer positions that become available most frequently. 
        </p>

        <h5 class="pt-3 fw-bold">VOLUNTEER ORIENTATION</h5>
        <p>
          The first step in becoming a FACGC volunteer is attending a New Volunteer Orientation where you will learn about FACGC and the Rizal Community Center, and the many ways you can help as a volunteer.<br/><br/>
          In the meantime, if you have a skill or energy to spare and share,  please tell us.  We have a long list of tasks in our rewriting of the next chapter of the Rizal Community Center!  Email to sallyvelascor@yahoo.com or call 1-773-541-1725.<br/><br/>
          Please join us!
        </p>
      </div>
    </div>
  </Layout>
)

export default VolunteerOpportunities 

export const Head = () => (
    <Seo title="Volunteer Opportunities at the Rizal Heritage Center" />
)
