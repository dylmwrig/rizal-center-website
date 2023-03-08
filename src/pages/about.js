import * as React from "react"

import img from "../images/about.webp"
import img2 from "../images/about2.jpeg"
import img3 from "../images/about3.jpg"
import img4 from "../images/about4.jpg"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const About = () => (
  <Layout>
    <div id="about" class="container my-5"> 
      <div class="text-start">
        <h4>WHO WE ARE</h4>
        <p class="py-2">
          The Rizal Community Center is more than a building. It's a revitalized way of thinking about who we are and how we engage with our community, our neighborhood, and our city. Our presence in the global diaspora. It is a welcoming, dynamic place for people of all backgrounds to come together, to foster bridging, appreciation, and understanding of the Filipino and Filipino American experiences in Chicago and our place in American society, as well as intersections with diverse cultures.
        </p>
        <div class="pt-3 row">
          <div class="col-4 gx-5">
            <img class="img-fluid" src={img}/>
          </div>
          <div class="col-4 gx-5">
            <img class="img-fluid" src={img2}/>
          </div>
          <div class="col-4 gx-5">
            <img class="img-fluid" src={img3}/>
          </div>
        </div>
        <div class="row">
          <div class="col-4 gx-5">
            <h5 class="pt-4 fst-italic">Community</h5>
            <p>
              The Rizal Community Center is a welcoming place for our Filipino American, Filipino, and broader communities - to come together, to share, and to celebrate our vibrant, diverse connections.  But you don't have to live in Chicago to love us. Be part of our online and social media community.    
            </p>
          </div>
          <div class="col-4 gx-5">
            <h5 class="pt-4 fst-italic">Neighborhood</h5>
            <p>
              The Rizal Community Center is located in the Graceland West community of the Lakeview neighborhood. Our Rizal Center will also serve as a hub for our neighbors and local community organizations.   
            </p>
          </div>
          <div class="col-4 gx-5">
            <h5 class="pt-4 fst-italic">City</h5>
            <p>
              Filipino immigrants and their descendants have been part of Chicago's fabric since 1906, contributing to the U.S. labor force and city government. We will continue to build our presence through cross-cultural dialogues, collaborative partnerships, and participation in municipal and state events. 
            </p>
          </div>
        </div>
        <hr/>
        <br/>
        <h4 class="pb-3">OUR MISSION</h4>
        <p>
          The Filipino American Council of Greater Chicago is guided by the Filipino tradition of bayanihan “community”, welcoming others, and is committed to American ideals of life, liberty, and the pursuit of happiness and inquiry. Our mission is to nurure within our community an understanding and commitment toward advancing a more just, equitable, and sustainable society. We are dedicated to building an inclusive, dynamic place for people of all backgrounds to come together and participate in cultural experiences that nourish by inspiring learning and dialogue; foster bridging, appreciation, and understanding; celebrate intersections with diverse communities and our rightful place in pluralistic American society. We do this through relevant programming in arts and culture, civic engagement, public policy, community education, and Filipino life; equity development; meaningful service to promote environmental stewardship, to respond to climate change, to alleviate food insecurity; and to empower people to be stewards for the future. 
        </p>
        <br/>
        <hr/>
        <br/>
        <div class="row">
          <h4 class="pb-3">OUR HISTORY</h4>
          <p>The Rizal Community Center has been a hub for community since it opened its doors in 1974. Through the years, Filipino and Filipino American families as well as Chicago area neighbors and dignitaries have enjoyed the Filipino American - founded institution.</p>
          <div class="col-8">
            <p>
              Much has changed from when early Filipino community leadership first founded the Filipino American Council of Greater Chicago on March 11, 1953, in order to give the growing Filipino American community a “Filipino clubhouse”, as they put it.  One of the oldest cultural organizations established in the United States, the FACGC underwent changes in acknowledgement of an expanding community. Originally named the Filipino National Council of Chicago, in 1965 the leadership changed the name to Filipino American Council of Chicago, in acknowledgment of the changing constituency of the community and recognized the need "to erase the misleading interpretation of the name of this august Council which had so long been the deterrent stigma of Unification ... in the city."  In 1997, the organization's name changed to the Filipino American Council of Greater Chicago ("FACGC"), to reflect the expanded service area.<br/> 
            </p>
          </div>
          <div class="col-4">
            <img class="img-fluid" src={img4} alt="Our history"/>
          </div>
        </div>
      <p>
              Key federal and state legislation were passed that helped Filipinos and other minorities alike into mainstream American society, notably the Civil Rights Act of 1964 and the Illinois Human Rights Act in 1979. In 1998, the FACGC was recognized as a 501(c)3 public charity.<br/><br/>
          The FACGC has preserved the founders’ hopes "to inculcate the finest traditions and the rich cultures of this country and of that land of our birth; to instill among our members the prerogatives of better American citizenship; and to promote the mutual welfare of our peoples and contribute to the continued harmonious relations between America and the Philippines."<br/><br/>
          The Rizal Community Center ("Jose P. Rizal Community Center") continues to play a significant role in the community. Operating under the aegis of the Filipino American Council of Greater Chicago and its name has also evolved to reflect the changing constituency and converging American, Philippine, and Philippine American cultures. Originally known as the Jose P. Rizal Memorial Center, it was renamed to the Jose P. Rizal Heritage Center around 2006. In 2017, the building was renamed to the Rizal Community Center ("Jose P. Rizal Community Center"), to foster community and to make it an inviting and welcoming place for all who support the organization's mission. A new, hand-painted sign was installed to convey the organization's revitalization.<br/><br/>
          Located in the Graceland West community of Chicago's Lakeview neighborhood, the FACGC is dedicated to integrating and contributing to the future of our communities and this neighborhood. 
        </p>
      </div>
    </div>
  </Layout>
)

export default About

export const Head = () => (
    <Seo title="About us" />
)
