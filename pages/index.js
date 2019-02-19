import React from 'react'
import DefaultTemplate from './_default'
import Header from '../components/header'
import indexStyle from './index.styl'

class Home extends React.Component {
  render () {
    return (
      <DefaultTemplate
        title="CodingLeo - Home"
        description="I'm a software developer with more than 8 years of experience in web based applications."
        twitterUserName="codingleo"
        facebookAppId="355608221709204"
      >
        <Header />
        <div>Hello</div>
      </DefaultTemplate>
    )
  }
}

export default Home
