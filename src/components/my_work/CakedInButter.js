import React from 'react'
import Layout from './template'
import image from '../../images/CakedInButter.png'

const CakedInButter = () => (
  <Layout
    title="Caked In Butter"
    imgSrc={image}
    imgAlt="cakedinbutter"
    timeline="January 2019 - present"
    body="Caked in Butter is a website I'm building for my amazing baker-of-a-wife, Emily."
    bulletOne="Gatsby"
    bulletTwo="Graphql"
    bulletThree="React Slick"
    githubLink="https://github.com/mouten57/caked_in_butter"
    liveLink="https://www.cakedinbutter.com"
    readmeLink="https://github.com/mouten57/caked_in_butter/blob/master/README.md"
  />
)

export default CakedInButter
