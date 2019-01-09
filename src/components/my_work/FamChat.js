import React from 'react'
import Layout from './template'
import image from '../../images/FamChat.png'

const FamChat = () => (
  <Layout
    title="FamChat"
    imgSrc={image}
    imgAlt="famchat"
    timeline="August 2018 - September 2018"
    body="FamCHAT is a reddit-style app that allows users to post,
                  comment, and vote on each others posts. It was built using an
                  MVC pattern and some features include authentication,
                  authorization, creating topics, posts, comments, favoriting,
                  and voting amongst others."
    bulletOne="Authentication using Passport; Authorization using
                policies"
    bulletTwo="Handlers and middleware handled with Express "
    bulletThree="Views constructed with EJS"
    githubLink="https://github.com/mouten57/bloccit/"
    liveLink="http://mouten57-bloccit.herokuapp.com/"
    readmeLink="https://github.com/mouten57/bloccit/blob/master/README.md"
  >
    <li> All entries validated with express-validator</li>
    <li>Fully tested with TDD using Jasmine</li>
  </Layout>
)

export default FamChat
