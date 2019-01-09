import React from 'react'
import Layout from './template'
import image from '../../images/WikiSpot.png'

const WikiSpot = () => (
  <Layout
    title="WikiSpot"
    imgSrc={image}
    imgAlt="wikispot"
    timeline="September 2018 - October 2018"
    body="WikiSpot is an application that allows users to create,
                  collaborate, and share wikis."
    bulletOne="Built with Node/Express/Postgres/EJS"
    bulletTwo="Payments handled with Stripe "
    bulletThree="Sign-up emails sent with SendGrid"
    githubLink="https://github.com/mouten57/blocipedia-node"
    liveLink="https://mouten57-blocipedia.herokuapp.com/"
    readmeLink="https://github.com/mouten57/blocipedia-node/blob/master/README.md"
  >
    <li> All entries validated with express-validator</li>
    <li>Fully tested with TDD using Jasmine</li>
  </Layout>
)

export default WikiSpot
