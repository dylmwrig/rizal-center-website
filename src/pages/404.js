import * as React from "react"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="container text-center my-5">
      <h1>404: Not Found</h1>
      <p>This page does not exist.</p>
    </div>

  </Layout>
)

export default NotFoundPage

export const Head = () => (
    <Seo title="404: Not found" />
)
