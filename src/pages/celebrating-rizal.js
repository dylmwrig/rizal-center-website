import * as React from "react"

import img from "../images/celebrating-rizal.jpeg"
import img2 from "../images/celebrating-rizal2.jpeg"

import InfoBox from "../components/info-box.js"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const Celebrating = () => (
  <Layout>
    <div class="container ">
      <img src={img} class="pb-3" alt="Celebrating Rizal Center"/>
      <div class="row">
        <div class="col-12 text-start">
          <h4>CELEBRATING RIZAL CENTER</h4>
          <p class="">
            The Rizal Community Center has belonged to the Lakeview neighborhood since 1974! In celebration, we're gathering pictures and stories from our community! We'd love to hear the fond recollections of those who called the Rizal Community Center "home away from home" throughout the years.  The stories you share with us about your involvement with us move, inspire, and motivate us. Those stories should be told and we're telling them here.
            <br/><br/>
            We'd love to hear what the Filipino American Council of Greater Chicago means to you and our community. 
          </p>
          <div class="row">
            <div class="col-8">

          <ul>
            <li>Has the Rizal Community Center made an impact on your life?</li>
            <li>What originally brought you to the Rizal Center?</li>
            <li>What brought you back?</li>
            <li>What is your favorite FACGC/Rizal Center memory?</li>
            <li>What is the one word that symbolizes the Rizal Center?</li>
          </ul>
              <p>
                Tell us your Rizal Center story. Do you have a photo* or two of yourself that you'd like to share? Complete the form below and attach a copy of your image(s) in PNG or JPG format.  
                <br/>
                We'll get back to you as soon as we can to hear the rest of the story! 
                <br/>
                Please note that we may edit your story for clarity and our own editorial guidelines. For example, this might mean your title will be changed or certain language will be removed. If we’ve made significant enough changes, we’ll run it by you first. We don’t want to misrepresent your voice or message.
              </p>
            </div>
            <div class="col-4">
              <a href="https://forms.gle/K7V6FmrnNg86eRzS6" target="_blank">
                <img class="col-12 pb-2" src={img2}/>
              </a>
              <InfoBox 
                info={["Share your story with us via Google Forms",
                       "Alternatively, you can send us an email at rizalcenterchicago@gmail.com"]}
                newTab={true}
                linkPres={true}
                linkText="Google Forms"
                link="https://forms.gle/K7V6FmrnNg86eRzS6"/>
            </div>
          </div>   
           <p class="text-danger" >
            *Photos and stories may be displayed on the our Facebook page, gallery exhibit, website, or for promotional purposes of the Rizal Community Center and FACGC throughout the year. For this reason, if you submit photos of children, they may only include your own. Thank you!
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Celebrating

export const Head = () => (
    <Seo title="Share your story with us!" />
)
