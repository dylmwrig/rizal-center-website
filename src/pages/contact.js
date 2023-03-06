import * as React from "react"

import ContactForm from "../components/contact-form.js"

import "../components/style.scss"
import "../components/wish-list.css"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const date = new Date();
const day = date.getDay();

function displayDate(){
  return(
    <div id="date">
      {day === 0
        ? <p class="fw-bold">* Sun</p>
        : <p>Sun</p>
      }
      {day === 1
        ? <p class="fw-bold">* Mon</p>
        : <p>Mon</p>
      }
      {day === 2
        ? <p class="fw-bold">* Tue</p>
        : <p>Tue</p>
      }
      {day === 3
        ? <p class="fw-bold">* Wed</p>
        : <p>Wed</p>
      }
      {day === 4
        ? <p class="fw-bold">* Thur</p>
        : <p>Thur</p>
      }
      {day === 5
        ? <p class="fw-bold">* Fri</p>
        : <p>Fri</p>
      }
      {day === 6
        ? <p class="fw-bold">* Sat</p>
        : <p>Sat</p>
      }
    </div>);}

const Contact = () => (
  <Layout>
    <div class="container my-5 text-start">
      <div class="row">
        <div class="col-5">
          <h4 class="pb-2">CONTACT US</h4>
          <p>We are always happy to listen to any of those with questions or feedback for the FACGC and Rizal Community Center.</p>
          <p class="fw-bold m-0">Filipino American Council of Greater Chicago</p>
          <p>1332 W. Irving Park Road, Chicago, IL 60613, US
             sallyvelascor@yahoo.com (1 773-541-1725)</p>
          <p class="fw-bold">Hours By Appointment</p>
          <div class="row">
            <div class="date col-2">
              {displayDate()}
            </div>
            <div class="col-8">
              <p>
                Closed<br/>
                12pm - 5pm<br/>
                12pm - 5pm<br/>
                12pm - 5pm<br/>
                12pm - 5pm<br/>
                9am - 2pm<br/>
                9am - 2pm
              </p>
            </div>
          </div>
        </div>
        <div class="col-1"/>
        <div class="col-6">
          <ContactForm />
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact

export const Head = () => (
    <Seo title="Contact us!" />
)
