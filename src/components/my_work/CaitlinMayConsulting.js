import React from 'react'
import Layout from './template'
import image from '../../images/CMC.png'

const CMC = () => (
  <Layout
    title="Caitlin May Consulting"
    imgSrc={image}
    imgAlt="caitlin may consulting"
    timeline="March 2019 - present"
    body="Caitlin May Consulting is a professional consulting website I built for my sister."
    bulletOne="Gatsby"
    bulletTwo="Graphql"
    bulletThree="React Slick/MailChimp/Stripe"
    githubLink="https://github.com/mouten57/caits-site"
    liveLink="https://www.caitlinmayconsulting.com"
    readmeLink="https://github.com/mouten57/caked_in_butter/blob/master/README.md"
  />
)

export default CMC
