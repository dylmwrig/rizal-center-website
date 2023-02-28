import * as React from "react"

import jerry from "../images/about-us/jerry.jpeg"
import bobby from "../images/about-us/bobby.jpeg"
import corazon from "../images/about-us/corazon.png"
import sally from "../images/about-us/sally.jpg"
import willi from "../images/about-us/willi.jpg"
import dennis from "../images/about-us/dennis.png"
import carmen from "../images/about-us/carmen.jpg"
import mae from "../images/about-us/mae.png"
import malou from "../images/about-us/malou.jpg"
import noImg from "../images/about-us/no-photo.png"

import Bio from "../components/bio"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const OurTeam = () => (
  <Layout>
    <div id="bio" class="container my-5">
      <div class="row">
        <div class="col-4"/>
        <h4 class="col-8 text-start pb-3" >MEET THE BOARD</h4>
      </div>
      <Bio img={[jerry]}
           name="Jerry Clarito"
           title="Chairman"
           biography="Jerry is a proud inheritor of his parents’ legacy of standing up for freedom, solidarity, and community. His Waray father and an Ilocana mother both joined the guerrilla movement in Mindanao during WWII. Posthumously, his father received the U.S. Congressional Gold Medal as a member of the United States Armed Forces in the Far East. Meanwhile, his centenarian mother continues to endow the Clarito clan with a good sense of humor and unconditional love. Jerry completed a  graduate course in Strategic Management of Nonprofit Organization at North Park College, Chicago. He values developing leaders from the grassroots through training and practice. Jerry is the first Filipino American elected as a commissioner of Skokie Park District through the community’s campaign for representation. He retired as the founding executive director of the Alliance of Filipinos for Immigrant Rights and Empowerment. "/>
      <hr/>
      <Bio img={[bobby]}
           name="Norberto “Bobby” Luna"
           title="Executive Trustee"
           biography="Emigrated to Chicago in 1990 from the Philippines. Engaged in the business of mortgage brokering residential and commercial finance from 1991 to 2008. Currently doing small business consulting and is a real estate investor. Bobby’s involvement with the Rizal Center started in the year 2000 as a member of the Joy Dance Club. He was appointed Rizal Center Administrator in 2008 and became a member of the FACGC Board in 2010. His educational background includes an economics degree from the University of the Philippines and an MBA from the Asian Institute of Management."/>
      <hr/>
      <Bio img={[corazon]}
        name="Corazon Sopena"
        title="Treasurer"
        biography="Cora came to the US in 1970 and worked for Grant Hospital as Medical Technologist in 1971. She also worked for Abbott Laboratories from 1995 to 2005. She graduated from Adamson University in 1969 with a B.S. Degree in Pharmacy. She has been a volunteer for FACGC since 1996 either as a board member and/or senior services coordinator. She is proud of serving the Filipino seniors as she considers them part of her family. Cora shares her passion in honor of her grandparents, “I’ll do everything for our seniors as they remind me of my dear Lolo and Lola.”"/>
      <hr/>
      <Bio img={[sally]}
        name="Rizalina ”Sally” Velasco-Richmond"
        title="Secretary"
        biography="A native of Boac. Marinduque, Philippines. She moved to the USA in 1990. She worked as a child caregiver and continued her education to become a Montessori Teacher. She was a community organizer for the Alliance of Filipinos for Immigrant Rights and Empowerment (AFIRE) fighting for immigrant and domestic workers' rights until she retired in 2017. Sally’s love of teaching got her involved in the Rizal Heritage Center’s class on 'Basic Tagalog and Culture'. She taught the class to children and young professionals. She then became a member of the Board from 2014 to the present."/>
      <hr/>
      <Bio img={[willi]}
        name="Willi R. Buhay"
        biography="Willi was born and raised in Manila, Philippines. A graduate of San Beda University and the University of Santo Tomas (UST)  from the College of Architecture and Fine Arts. Willi furthered his studies on Museum Administration and Design at the International Center for Historic Preservation at Mt.Carroll, Illinois. He was the first Artistic Director for Design for the Folk Arts Theater, Cultural Center of the Philippines for 16 years. Taught at the University of the Philippines and UST. Joined his family in Chicago who lived here since the 1920s. Served the FACGC - Rizal Center as a member of the Board and Artist in residence for 29 years."/>
      <hr/>
      <Bio img={[dennis]}
        name="Dennis Cruz"
        biography="Emigrated to Chicago in March 1990. Dennis graduated with a degree in Bachelor of Science in Mechanical Engineer. Currently, Dennis is the Vice President of Pinoy Harley Riders Club (PHRC) of Chicago. He continues to serve the community though retiring as the community’s “Disc Jockey”. He works for ATT as a Telecommunications Specialist and advocates for free WiFi for all. His favorite motto is, “LIVE TO RIDE, RIDE TO LIVE !!!!”"/>
      <hr/>
      <Bio img={[carmen]}
        name="Carmen Estacio"
        biography="Born in Zamboanga. She graduated with a Bachelor of Science in Education. Immigrated to the U.S. in 1986. She worked for Recorder of Deeds for 7 years then was hired by Jessie White,  Secretary of State, as an Asian American Liaison. She organized, worked to unite, and coordinate activities with Asian American leaders which were later known as the Secretary of State Asian American Advisory Committee.  She worked with Jessie White for 20 years and retired in 2020.  She has been with the FACGC as a member of the board since 2000."/>
      <hr/>
      <Bio img={[mae]}
        name="Mae Dawn Gaoat-Lant"
        biography="Mae came to the US in 1979 and finished her Post Graduate Course in Psychiatric Nursing at the University of Illinois, College of Nursing in 1989. She has been practicing as a registered nurse for 47 years. Currently, she works for PrimeCare Home Health Services and Excellent Home Health, Inc. as director/consultant for quality assurance performance improvement (QAPI). She has been an active volunteer at Rizal Center since 1987 when she founded the Kultura Pilipina Dance Company of Chicago. She hopes “to see the revival of appreciation of Filipino folk dances as a medium of cultural integration with the diverse Chicago’s cultural landscape.”"/>
      <hr/>
      <Bio img={[malou]}
        name="Marilou “Malou” Tabo"
        biography="Malou is a dedicated wife of Pedro Tabo Jr and a loving mother to Michael and Annamarie. She is a native of Virac, Catanduanes, and currently resides in Chicago for the past 35 years. Malou has many roles, including Nannie, regional leader of Primerica as a life insurance producer and senior consultant of Saladmaster. With a big voice and an even bigger heart, she has been a volunteer for Jose Rizal Community Center for over 22 years and cherishes the time she spends doing charity work, especially for Rizal Center and Catanduanes International Association."/>
    </div>
  </Layout>
)

export default OurTeam 

export const Head = () => (
    <Seo title="Meet the board!" />
)
