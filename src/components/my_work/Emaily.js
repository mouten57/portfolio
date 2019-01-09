import React from 'react'
import Layout from './template'
import image from '../../images/Emaily.png'

const Emaily = () => (
  <Layout
    title="Emaily"
    imgSrc={image}
    imgAlt="emaily"
    timeline="October 2018 - November 2018"
    body="Emaily is a Node/React/Redux application for sending surveys to your customers."
    bulletOne="Google OAuth; User info handled with Passport, Mongoose, and Redux"
    bulletTwo="Styled with Materialize"
    bulletThree="Sendgrid, Stripe, and other tech used"
    githubLink="https://github.com/mouten57/emaily"
    liveLink="https://powerful-earth-60772.herokuapp.com/"
    readmeLink="https://github.com/mouten57/emaily/blob/master/README.md"
  >
    <li> </li>
  </Layout>
)

export default Emaily
