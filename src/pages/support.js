import * as React from "react"

import img from "../images/support.webp"
import img2 from "../images/index-involved2.jpg"
import img3 from "../images/support3.jpg"
import InfoBox from "../components/info-box.js"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const SupportPage = () => (
  <Layout>
    <div class="container my-3 text-start">
      <div class="row">
        <div class="col-8">
          <h3 class="pb-2">Get Involved!</h3>
          <p> 
            Volunteers and donations help ensure that quality programming  and services as well as great community events can keep happening.  We do this important work because we firmly believe that programs like ours can be transformative, and that they are vital to the overall health and productivity of our community.  If you agree, we hope you will consider volunteering, donating,  becoming a member – or all of the above!<br/>
            The Rizal Community Center, operated by the FACGC, relies on the generous support of the friendly people in and around the greater Chicago area to keep functioning as a center of arts and culture. We are grateful to everyone who has ever volunteered their time, donated money, or participated in a program or event here at Rizal Community Center, and we hope you will keep coming back. 
          </p>
          <h3 class="pb-2">Check Out Our Wishlist</h3>
          <p>We are in need of many supplies as we rebuild our organization. This includes paper materials, cleaning supplies, general use tools, and more.<br/>
             You can find the list <a class="text-danger" href="/wish-list/">here</a>. Thank you for any and all contributions.</p>
          <h3 class="pb-2">Volunteers Welcome</h3>
          <p>If you're interested in how volunteering could enrich your life and connect you with the Filipino community of Chicago, please see the following links</p>
          <div class="row">
          <div class="col-6 gx-5 text-center">
            <a href="/volunteer/">
              <img src={img2}/>
            </a>
            <div class="pb-2">
              <a href="/volunteer/">Volunteer Opportunities</a>
            </div>
          </div>
          <div class="col-6 gx-5 text-center">
            <a href="/volunteer-policies/">
              <img src={img3}/>
            </a>
            <div class="pb-2">
              <a href="/volunteer-policies/">Volunteer Policies</a>
            </div>
          </div>
          </div>
        </div>
        <div class="col-4 text-start"> 
          <div class="">
            <a href="https://circapintig.networkforgood.com/projects/172580-bayanihan-for-rizal-center?utm_campaign=Spring+campaign&fbclid=IwAR0pi8xZNfZSf0U1mx_DCvQmMMFq3WaWGWBiaq_5wqLzbIzCZ34jSfGstVI&utm_source=Website&utm_medium=Website+Page" target="_blank">
              <img src={img} class="w-100 img-fluid" alt="Get involved!"/>
            </a>
            <InfoBox 
              info={["We are in the midst of a very important juncture in our Chicago Filipino American community history as we reclaim and rebuild our beloved Rizal Center.",
                     "With your donations, we can transform the Center once again into being a truly welcoming and inclusive community center, our home away from home.",
                     "If you prefer, you can also send a check payable to FACGC to 1332 W. Irving Park Road, Chicago, IL 60613."]}
              newTab={true}
              linkPres={true}
              linkText="Donate"
              link="https://circapintig.networkforgood.com/projects/172580-bayanihan-for-rizal-center?utm_campaign=Spring+campaign&fbclid=IwAR0pi8xZNfZSf0U1mx_DCvQmMMFq3WaWGWBiaq_5wqLzbIzCZ34jSfGstVI&utm_source=Website&utm_medium=Website+Page"/>
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
