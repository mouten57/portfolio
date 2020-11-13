import React from 'react'
import Layout from './template'
import image from '../../images/ShopNShare.gif'

const ShopNShare = () => (
  <Layout
    title="Shop-N-Share"
    imgSrc={image}
    imgAlt="shop-n-share"
    timeline="January 2019"
    body="Shop-N-Share is a grocery list web-application that can be shared in real-time by multiple people."
    bulletOne="Google OAuth 2.0/Passport.js"
    bulletTwo="CRUD with React and Mongoose"
    bulletThree="Real-time updates with Socket.io"
    bulletFour="Deployed with Heroku"
    bulletFive="Tested with jasmine"
    githubLink="https://github.com/mouten57/shop-n-share"
    liveLink="https://shop-n-share.herokuapp.com/"
    readmeLink="https://github.com/mouten57/shop-n-share/blob/master/README.md"
  >
  </Layout>
)

export default ShopNShare
