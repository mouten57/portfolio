import React from 'react'
import Layout from './template'
import image from '../../images/ClassicStream.png'

const ClassicStream = () => (
  <Layout
    title="Classic STREAM"
    imgSrc={image}
    imgAlt="classic-stream"
    timeline="September 2018 - October 2018"
    body="Classic STREAM is a music-streaming app built using React, react-router, and react-bootstrap."
    bulletOne="Styled using react-bootstrap"
    bulletTwo="App routed using react-router"
    bulletThree=""
    githubLink="https://github.com/mouten57/bloc-jams-react"
    liveLink="https://bloc-jams-mouten57.herokuapp.com/"
    readmeLink="https://github.com/mouten57/bloc-jams-react/blob/master/README.md"
  >
    <li />
  </Layout>
)

export default ClassicStream
