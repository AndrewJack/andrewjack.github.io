/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
            github
            email
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <p>
        {social?.twitter ? (
          <a href={`https://twitter.com/${social?.twitter}`}>Twitter</a>
        ) : null}
        {" • "}
        {social?.linkedin ? <a href={social?.linkedin}>LinkedIn</a> : null}
        {" • "}
        {social?.github ? <a href={social?.github}>GitHub</a> : null}
        {" • "}
        {social?.email ? <a href={social?.email}>Email</a> : null}
      </p>
    </div>
  )
}

export default Bio
