import React from 'react'
import Layout from './template'
import image from '../../images/MariMaraist.png'

const Budget = () => (
  <Layout
    title="Mari Maraist"
    imgSrc={image}
    imgAlt="mari-maraist"
    timeline="November 2020"
    body="This is a personal blog I created for Mari Maraist."
    // bulletOne="Categories for your transactions"
    // bulletTwo="Live updating balance"
    // bulletThree="Easy to use"
    // githubLink="https://github.com/mouten57/budget-app"
    liveLink="https://marimaraist.com/"
    //readmeLink="https://github.com/mouten57/budget-app/blob/master/README.md"
  />
)

export default Budget
