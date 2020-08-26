import React from 'react'
import Layout from './template'
import image from '../../images/chuck_norris.png'

const ChuckNorris = () => (
  <Layout
    title="Chuck Norris Joke Central"
    imgSrc={image}
    imgAlt="text-attack"
    timeline="COVID 2020"
    body="'Chuck Norris Joke Central' is a fun little app I built to mess with one of my friends. It uses web scraping to collect the latest facts, and then allows me to text out my favorite chuck norris jokes."
    bulletOne="Web Scraping with Cheerio"
    bulletTwo="Texting with Twilio"
    bulletThree="Emails with SendGrid"
    githubLink="https://github.com/mouten57/text-attack"
    liveLink="https://chuck-norr1s.herokuapp.com/"
    readmeLink="https://github.com/mouten57/text-attack/blob/master/README.md"
  />
)

export default ChuckNorris
