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
    githubLink="https://github.com/mouten57/shop-n-share"
    liveLink="https://shop-n-share.herokuapp.com/"
    readmeLink="https://github.com/mouten57/shop-n-share/blob/master/README.md"
  >
    <li>Deployed with Heroku</li>
    <li>Tested with jasmine</li>
  </Layout>
)

export default ShopNShare
