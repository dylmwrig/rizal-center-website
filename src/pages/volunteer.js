import * as React from "react"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const VolunteerOpportunities = () => (
  <Layout>
    <div class="container my-5 text-start">
      <h5>VOLUNTEERING</h5>
    </div>
  </Layout>
)

export default VolunteerOpportunities 

export const Head = () => (
    <Seo title="Support the Filipino community of Chicago by volunteering!" />
)
