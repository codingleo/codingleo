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
        <section className={`${indexStyle.jumbotrom}`}>
          <div className={`${indexStyle.container}`}>
            <section className={`${indexStyle.presentation}`}>
              <h1>Hello, I'm Leonardo Ribeiro</h1>
              <p>A software developer focused on building web based applications with <code>#javascript</code></p>
              <p>I also like to create video tutorials on <a target="_blank" href="https://www.youtube.com/channel/UCO9DNngvvVxdAqUiIRq3zIw" className={indexStyle.youtubeLink}>YouTube</a></p>
            </section>
            <section className={`${indexStyle.presentation}`}>
              <h3>If you're a company looking for a great developer, I can help you. So Get in Touch</h3>
            </section>
          </div>
        </section>
      </DefaultTemplate>
    )
  }
}

export default Home
