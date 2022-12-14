import * as React from "react"

import rizalImg from "../images/rizal.webp"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const JoseRizal = () => (
  <Layout>
    <div class="container my-5 text-start">
      <div className="row"> 
        <div className="col-8">
          <h5 className="text-uppercase fw-light"> 
            For whom it is named
          </h5>
          <p class="fs-8 fw-light text-muted mt-4"> 
            Purchased in 1974, the building was named in honor of Dr. José P. Rizal, national hero of the Philippines. A patriot, physician, polyglot, and man of letters, his poetry, essays, and novels awakened Philippine identity. He was a supporter of peaceful reform. José P. Rizal is remembered for his brilliance, courage, patriotism, and compassion towards the Filipino people and the country.  He is also remembered for his expressed interest in learning and befriending other peoples and cultures. He lived by example, and showed that nativism is not patriotism. <br/><br/>
            Dr. Rizal's influence is reflected every day through the endeavors of the Filipino American Council of Greater Chicago, in its passion to celebrate Philippine and Philippine American arts and culture and its intersection with diverse ethnicities and cultures, as well as to serve the vulnerable; to fight hunger for low-income seniors and veterans; and to foster the thoughtful, caring, and supportive community that has become the hallmark of the organization. <br/><br/>
            The building is known as the Rizal Center.
          </p>
        </div>
        <div className="col-4">
          <img src={rizalImg} alt="José P. Rizal"></img>
          <p class="pt-2">
            José P. Rizal <br/>
            (June 19, 1861 - December 30, 1896)
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default JoseRizal

export const Head = () => (
    <Seo title="Jose Rizal" />
)
