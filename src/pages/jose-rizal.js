import * as React from "react"
import Layout from "../components/layout"
import {Seo} from "../components/seo"
import rizal from "../images/rizal.webp"

const JoseRizal = () => (
  <Layout>
    <div class="container my-5 text-start">
      <div className="row gx-5">
        <div className="col-8 gx-4">
          <h7 className="text-uppercase fw-light"> 
            For whom it is named
          </h7>
          <p class="fs-8 fw-light text-muted mt-4"> 
Purchased in 1974, the building was named in honor of Dr. José P. Rizal, national hero of the Philippines. A patriot, physician, polyglot, and man of letters, his poetry, essays, and novels awakened Philippine identity. He was a supporter of peaceful reform. José P. Rizal is remembered for his brilliance, courage, patriotism, and compassion towards the Filipino people and the country.  He is also remembered for his expressed interest in learning and befriending other peoples and cultures. He lived by example, and showed that nativism is not patriotism. <br/><br/>
Dr. Rizal's influence is reflected every day through the endeavors of the Filipino American Council of Greater Chicago, in its passion to celebrate Philippine and Philippine American arts and culture and its intersection with diverse ethnicities and cultures, as well as to serve the vulnerable; to fight hunger for low-income seniors and veterans; and to foster the thoughtful, caring, and supportive community that has become the hallmark of the organization. <br/><br/>
The building was known as the Jose P. Rizal Heritage Center until it was renamed the Jose P. Rizal Community Center ("Rizal Community Center") in 2017. 
          </p>
        </div>
        <div className="col-4">
          <img src={rizal} alt="José Rizal"></img>
          <p class="text-muted">
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
