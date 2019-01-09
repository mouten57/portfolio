import React from 'react'
import Layout from './template'
import image from '../../images/OutenBabyTracker.gif'

const OutenBabyTracker = () => (
  <Layout
    title="Baby Tracker"
    imgSrc={image}
    imgAlt="outen-baby-tracker"
    timeline="November 2019"
    body="This baby tracking app is something I built the weekend we came home with our new girl. My wife wanted a way to keep track of nursing and diapers, so I put together this React/Firebase app."
    bulletOne="Data maintained with Firebase"
    bulletTwo="Styled with semantic-ui-react"
    bulletThree="Sortable table"
    githubLink="https://github.com/mouten57/outen-baby-tracker"
    liveLink="https://outen-baby-tracker.netlify.com/"
    readmeLink="https://github.com/mouten57/outen-baby-tracker/blob/master/README.md"
  />
)

export default OutenBabyTracker
