import * as React from "react"

import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import { Seo } from "../components/seo"

import img1 from '../images/rizal-center.png'
import img2 from '../images/rizal-center2.jpg'
import img3 from '../images/rizal-center3.jpg'
import img4 from '../images/rizal-center4.jpg'
import cleanImg from "../images/cleanup.jpg"
import cleanImg2 from "../images/cleanup2.jpg"
import cleanImg3 from "../images/cleanup3.jpg"

const IndexPage = () => (
  <Layout>
    <section className="pt-4 pb-5 text-center container">
      <div class="row">
        <div class="col-6">
          <Slideshow images={[img1, img2, img3, img4]} 
                     alt={["Rizal center", "Jose Rizal", "Rizal speech", "Filipino flag"]}
                     id="car1"
                     interval="3500"/>
        </div>
        <div id="slideLabel" class="col-6 d-flex align-items-center justify-content-center text-center">
          <p>
            We're<br/>Building<br/>Community!
          </p>
        </div>
      </div>
      <div class="row pt-5 text-start mx-auto px-5">
        <h3>
          Mabuhay! Welcome!
        </h3>
        <p class="fs-7 fw-light text-muted"> 
There is one place in Chicago that is considered by many Filipino Americans as their “home away from home”. This place is called Rizal Center which is named after the Philippine national hero    
          <a class="fs-7 fw-light text-muted" href="/jose-rizal/"> Dr. Jose Rizal.</a> We are located at 1332 W. Irving Park Rd., Chicago, IL 60613.<br/>
The Rizal Community Center is a multicultural, multigenerational community and cultural center located in Chicago's Lakeview neighborhood!  But it's more than a building. It's a revitalized way of thinking about who we are and how we engage with our community, our neighborhood, and our city.
        </p>
        <div class="row py-4">
          <div class="col-6">
          <h3 class="pb-2">Join the fun of collective (Bayanihan) work!</h3>
          <p class="fw-light text-muted">
During the last three months, members of the Bayanihan Volunteer Corps put back the auditorium to its rightful place - a safe place for community members to hold dancing, celebrate happy and memorable events, hold forums, or just hang out. We look forward to 2023 to open more programs from health education and training to senior citizens' wellness and recreational programs. <br/><br/>
Of course, we welcome program suggestions from you. 
Please   send your suggestions to facc.rizalcenter@gmail.com. Mabuhay! 
          </p>
          </div>
          <div class="col-6">
            <Slideshow images={[cleanImg, cleanImg2, cleanImg3]}
                       alt={["Pre-cleanup", "Post-cleanup", "Bayanihan cleanup"]}
                       id="car2"
                       interval="3000"/>
          </div>
        </div>

        <p class="fs-7 fw-light text-muted"> 
The Rizal Community Center is a welcoming, dynamic place for people of all backgrounds to come together and participate in cultural experiences that nourish by inspiring learning and dialogue; foster bridging, appreciation, and understanding; celebrate our vibrant, diverse communities, and place in pluralistic American society; and call upon us to help nurture a more just and equitable society.<br/><br/>
We do this through relevant programming in arts and culture, civic engagement, public policy, community education,  and Filipino life;  meaningful service to combat food insecurity and to empower people.<br/><br/>
The Rizal Community Center  operates under the aegis of the Filipino American Council of Greater Chicago, one of the oldest cultural organizations in the nation. 
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo title="Rizal Heritage Center Chicago"/>
)
