import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import aboutStyle from './about.styl'
import Link from 'next/link'

class Home extends React.Component {
  renderBody () {
    return (
      <React.Fragment>
        <section className={`${aboutStyle.jumbotrom}`}>
          <div className={`${aboutStyle.container}`}>
            <section>
              <h1>About me</h1>
              <p>Here you can know a little bit about me and my life.</p>
            </section>
          </div>
        </section>
        <section className={`${aboutStyle.aboutContainer}`}>
          <div className={`${aboutStyle.container}`}>
            <section className={`${aboutStyle.aboutText}`}>
              <p className={`${aboutStyle.highlight}`}> {`<`}I'm a software developer based in Goiás, Brazil {`🇧🇷/>`}</p>
              <p>I ❤ to work with javascript, both in frontend (with React) and backend (with NodeJS).</p>
              <p>I've already worked with big companies (<b><a className={`${aboutStyle.link}`} target="_blank" href="https://kraftheinzcompany.com">Kraft Heinz</a>, <a className={`${aboutStyle.link}`} target="_blank" href="https://strategicmanagement.net">Strategic Management</a> and <a className={`${aboutStyle.link}`} target="_blank" href="https://scalablepath.com">Scalable Path</a> </b>),
              startups (<b><a className={`${aboutStyle.link}`} target="_blank" href="https://sparkxyz.io">SparkXYZ</a></b>), and small companies like <b><a className={`${aboutStyle.link}`} target="_blank" href="https://gregmorriscards.com"></a>Greg Morris Cards</b>.</p>
              <p>After 8+ years of experience, I feel more than ready to accept new good challenges.</p>
              <div>
                <Link prefetch href="contact">
                  <a className={`${aboutStyle.btn} ${aboutStyle.btnInverse} ${aboutStyle.btnBold}`}>Get in touch!</a>
                </Link>
              </div>
            </section>
            <section className={`${aboutStyle.aboutPicture}`}>
              <figure className={`${aboutStyle.aboutFigure}`}>
                <img src="static/images/leonardo_ribeiro_coding.png" alt="Leonardo Ribeiro - Coding Leo"/>
              </figure>
            </section>
          </div>
        </section>
      </React.Fragment>
    )
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        {this.renderBody()}
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
