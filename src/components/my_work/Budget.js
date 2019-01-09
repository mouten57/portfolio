import React from 'react'
import Layout from './template'
import image from '../../images/Budget.png'

const Budget = () => (
  <Layout
    title="Personal Budget"
    imgSrc={image}
    imgAlt="budget-app"
    timeline="November 2018"
    body="Outen budget app is a simple React/Firebase application that I built one Saturday so I could keep better track of my money."
    bulletOne="Categories for your transactions"
    bulletTwo="Live updating balance"
    bulletThree="Easy to use"
    githubLink="https://github.com/mouten57/budget-app"
    liveLink="https://outen-budget.herokuapp.com/"
    readmeLink="https://github.com/mouten57/budget-app/blob/master/README.md"
  />
)

export default Budget
