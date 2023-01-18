import * as React from "react"

import img from "../images/bayanihan.webp"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const WishList = () => (
  <Layout>
    <div class="container my-5">
      <img src={img} alt="Bayanihan"/>
      <h4 class="py-4">The FACGC wish-list. Will you help?</h4>
      <div class="text-start">
        <p class="">
 We're rebuilding our organization! And your generosity is much appreciated.  We need your help with in-kind donations to delver our programs, workshops, events, and to help our services at Rizal Community Center run smoothly and to serve our communities.
<br/><br/>
Please consider hosting a donation drive for us! If you have any of these items below to donate, please contact us at 773-541-1725 or sallyvelascor@yahoo.com, to schedule drop-off. Thank you in advance for your support!
<br/><br/>
Would you like to help out? We’ll gladly accept any of the following:
<br/>
</p>
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
