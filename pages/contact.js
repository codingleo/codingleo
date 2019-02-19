import React from 'react'
import DefaultTemplate from './_default'
import Header from '../components/header'

class Contact extends React.Component {
  render () {
    return (
      <DefaultTemplate
        title="CodingLeo - Contact"
        description="I'm a software developer with more than 8 years of experience in web based applications."
        twitterUserName="codingleo"
        facebookAppId="355608221709204"
      >
        <Header />
        <div>Contact</div>
      </DefaultTemplate>
    )
  }
}

export default Contact
