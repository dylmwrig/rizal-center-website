import * as React from "react"

import RSSFeed from "../components/rss-feed.js"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const NewsFeed = () => (
  <Layout>
    <div class="container my-5">
      <RSSFeed/>
    </div>
  </Layout>
)

export default NewsFeed

export const Head = () => (
    <Seo title="Inquirer News Feed" />
)
