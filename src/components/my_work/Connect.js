import React from 'react'
import Layout from './template'
import image from '../../images/Connect.png'

const Connect = () => (
  <Layout
    title="Connect"
    imgSrc={image}
    imgAlt="connect"
    timeline="September 2018 - October 2018 (Updated 2020)"
    body="CONNECT is a chatroom web app built using React and Firebase."
    bulletOne="Google Authentication with Firebase"
    bulletTwo="Deletes all associated messages on room-delete (CASCADE-style delete)"
    bulletThree="Create/delete rooms, create/delete messages"
    githubLink="https://github.com/mouten57/bloc-chat-react"
    liveLink="https://outen-chat.herokuapp.com/"
    readmeLink="https://github.com/mouten57/bloc-chat-react/blob/master/README.md"
  />
)

export default Connect
