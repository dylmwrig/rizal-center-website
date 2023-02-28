import * as React from "react"

import img from "../images/bayanihan.webp"

import InfoBox from "../components/info-box.js"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const Celebrating = () => (
  <Layout>
    <div class="container my-3">
      <div class="row">
        <div class="col-8 text-start">
          <h4>CELEBRATING RIZAL CENTER</h4>
          <p class="">
            The Rizal Community Center has belonged to the Lakeview neighborhood since 1974! In celebration, we're gathering pictures and stories from our community! We'd love to hear the fond recollections of those who called the Rizal Community Center "home" throughout the years.  The stories you share with us about your involvement with us move, inspire, and motivate us. Those stories should be told and we're telling them here.
            <br/><br/>
            We'd love to hear what the Filipino American Council of Greater Chicago means to you and our community. 
          </p>
          <ul>
            <li>Has the Rizal Community Center made an impact on your life?</li>
            <li>What originally brought you to the Rizal Center?</li>
            <li>What brought you back?</li>
            <li>What is your favorite FACGC/Rizal Center memory?</li>
            <li>What is the one word that symbolizes the Rizal Center?</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Celebrating

export const Head = () => (
    <Seo title="Share your story with us!" />
)
