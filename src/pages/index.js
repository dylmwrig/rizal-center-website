import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="pt-4 pb-5 text-center container">
      <div class="row">
        <div class="col-6">
          <Slideshow> 
          </Slideshow>
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
There is one place in Chicago that is considered by many Filipino Americans as their “home away from home”. This place is called Rizal Center which is named after the Philippine national hero, Dr. Jose Rizal (1332 W. Irving Park Rd., Chicago, IL 60613).<br/><br/>
The Rizal Community Center is a multicultural, multigenerational community and cultural center located in Chicago's Lakeview neiighborhood!  But it's more than a building. It's a revitalized way of thinking about who we are and how we engage with our community, our neighborhood, and our city.<br/>
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
    <Seo />
)
