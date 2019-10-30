import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => (
  <Layout>
    <SEO title="About" />

    <h1>About {data.site.siteMetadata.title} system</h1>
    <p>
    eAgrar is a system for monitoring the condition of plants and weather in agricultural fields.
It is based on a network of sensing devices, allowing you to monitor microclimate conditions .

The sensor devices are ready to set up without the need for any additional infrastructure. The devices are battery-powered and have an autonomy of up to 10 years without charging . Sensor devices send data wirelessly to a base station that can be up to 5km away. The sensing device has the ability to measure temperature, humidity and air pressure, humidity and soil temperature, and leaf humidity.

All data is displayed in our web app's dashboard via icons, charts, and tables .

The system monitors and processes the data, and notifies users of the possible appearance of the disease (bumps, ashtrays, feather spores) so that they can act preventively to stop them.
It also notifies the user when frost conditions are created or when irrigation is needed.

By using the eAgrar system, you can earn savings in the use of chemicals, fuels and water. Using the system will also allow you to reduce crop damage and increase yields.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`