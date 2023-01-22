import * as React from "react"

import img from "../images/bayanihan.webp"

import InfoBox from "../components/info-box.js"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const WishList = () => (
  <Layout>
    <div class="container my-5">
      <div class="text-start">
      <div class="row">
        <p class="col-8">
        <h3 class="py-4">The FACGC wish-list. Will you help?</h3>
          We're rebuilding our organization! <br/>We need your help with in-kind donations to delver our programs, workshops, events, and to help our services at Rizal Community Center run smoothly and to serve our communities. Any and all generosity is greatly appreciated.<br/><br/>
Would you like to help out? We’ll gladly accept any of the following:
<br/>
        </p>
        <img class="col-4" src={img} alt="Bayanihan"/>
      </div>
      <div class="row">
        <div class="col-8">
          <p class="fw-bold"> Paper Needs:<br/></p>
          <p>
          Copy paper<br/>
          Letter size (8.5″x11″)<br/>
          Legal size (8.5"x14")<br/>
          Ledger size (11″x17″)<br/>
          Cover/card stock<br/>
          Letter size (8.5″x11″)<br/>
          Address labels (Avery 5160 preferred)<br/>
          Writing pads (8.5"x11")<br/>
          Post-it notes<br/>
          Office Supplies and Equipment:<br/>
          Pens<br/>
          Highlighters<br/>
          Permanent Markers<br/>
          Dry erase markers<br/>
          Staplers<br/>
          Staples<br/>
          Binder clips<br/>
          Manila file folders (letter size)<br/>
          Hanging file folders (letter size)<br/>
          Desktop computers (able to run newer software)<br/>
          Filing Cabinets (3): Please call for dimensions<br/>
          </p>
        </div>
        <div class="col-4 pt-2">
        <InfoBox 
          info={["Please consider hosting a donation drive for us! If you have any of these items to donate, please contact us at 773-541-1725 or by using the form below to schedule a drop-off.",          "Thank you in advance for your support!"]}
          link={true}/>
        </div>
      </div>
      <p class="fw-bold"> Cleaning and Paper Supplies:<br/></p>
      <p>
      Paper towel rolls<br/>
      Toilet tissue rolls<br/>
      Napkins<br/>
      Paper plates<br/>
      Disposable drinking cups (for water/soda)<br/>
      Disposable coffee cups<br/>
      Plastic utensils: forks, knives, spoons<br/>
      Kleenex<br/>
      Disinfecting wipes (eco-friendly)<br/>
      Sponges<br/>
      Dish soap (eco-friendly)<br/>
      Multi-purpose spray cleaner (eco-friendly)<br/>
      Dry erase board cleaner<br/>
      Disposable gloves<br/>
      Band-aids<br/>
      Cleaning Bleach<br/>
      Clean, gently used towels<br/>
      New Brooms<br/>
      New Dustpans<br/></p>
      
      <p class="fw-bold">Miscellaneous Items:<br/></p>
      <p>
      Stamps<br/>
      Gift cards or certificates for Office Depot, Staples<br/></p>
      
      <p class="fw-bold">Facilities:<br/></p>
      <p>
      Utility shelves: Please call<br/>
      Ladder: Please call<br/>
      </p>
      
      <p class="fw-bold">Tools and Hardware:<br/></p>
      <p>
      Painting supplies: Please call<br/>
      Hammers<br/>
      Screwdrivers<br/>
      Pliers<br/>
      Other useful hand tools
        </p>
      </div>
    </div>
  </Layout>
)

export default WishList 

export const Head = () => (
    <Seo title="Please consider donating an item from our wishlist!" />
)
