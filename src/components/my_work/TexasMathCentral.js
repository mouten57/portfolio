import React from 'react'
import Layout from './template'
import image from '../../images/TMC.png'

const TMC = () => (
  <Layout
    title="Texas Math Central"
    imgSrc={image}
    imgAlt="tmc"
    timeline="November 2018 - December 2018 (Updated 2020)"
    body="Texas Math Central is a website where teachers can collaborate and share free math resources."
    bulletOne="An application that allows users to create, collaborate, upload and share resources."
    bulletTwo="Uploads handled with Multer."
    bulletThree="Google Drive API"
    githubLink="https://github.com/mouten57/texas-math-central"
    liveLink="https://texas-math-central.herokuapp.com/"
    readmeLink="https://github.com/mouten57/texas-math-central/blob/master/README.md"
  >
    <li>Storage with AWS S3</li>
  </Layout>
)

export default TMC
