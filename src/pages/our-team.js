import * as React from "react"
import { Link } from "gatsby"

import jerry from "../images/about-us/jerry.jpeg"

import Bio from "../components/bio"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const OurTeam = () => (
  <Layout>
    <div class="container my-5">
      <h3 class="pb-3" style={{fontFamily:"Playfair Display"}}>Meet the team</h3>
      <Bio img={[jerry]}
           name="Jerry Clarito"
           title="Chairman"
           biography="Jerry is a proud inheritor of his parents’ legacy of standing up for freedom, solidarity, and community. His Waray father and an Ilocana mother both joined the guerrilla movement in Mindanao during WWII. Posthumously, his father received the U.S. Congressional Gold Medal as a member of the United States Armed Forces in the Far East. Meanwhile, his centenarian mother continues to endow the Clarito clan with a good sense of humor and unconditional love. Jerry completed a  graduate course in Strategic Management of Nonprofit Organization at North Park College, Chicago. He values developing leaders from the grassroots through training and practice. Jerry is the first Filipino American elected as a commissioner of Skokie Park District through the community’s campaign for representation. He retired as the founding executive director of the Alliance of Filipinos for Immigrant Rights and Empowerment. "/>
      <hr/>
      <Bio img={[jerry]}
           name="Norberto 'Bobby' Luna"
           title="Executive Trustee"
           biography="Emigrated to Chicago in 1990 from the Philippines. Engaged in the business of mortgage brokering residential and commercial finance from 1991 to 2008. Currently doing small business consulting and is a real estate investor. Bobby’s involvement with the Rizal Center started in the year 2000 as a member of the Joy Dance Club. He was appointed Rizal Center Administrator in 2008 and became a member of the FACGC Board in 2010. His educational background includes an economics degree from the University of the Philippines and an MBA from the Asian Institute of Management."/>
      <hr/>
    </div>
  </Layout>
)

export default OurTeam 

export const Head = () => (
    <Seo title="Meet the team!" />
)
