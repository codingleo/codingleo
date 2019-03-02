import React from 'react'
import DefaultTemplate from './_documents'
import Header from '../components/header'
import Footer from '../components/footer'
import indexStyle from './index.styl'
import { homeContext, homeData } from '../states/indexContext'
import Link from 'next/link'

class Home extends DefaultTemplate {
  constructor (props) {
    super(props)
    this.state = homeData
  }

  onSubscribeInputChange (e) {
    this.setState({
      subscribeEmail: e.target.value
    })
  }

  subscribe (email) {
    return e => {
      this.setState({
        isLoadingSubscription: true
      })

      setTimeout(() => {
        this.setState({
          isLoadingSubscription: false,
          subscribeEmail: ''
        })
      }, 3000)
    }
  }

  renderBody () {
    return (
      <homeContext.Consumer>
        {context => (
          <section className={`${indexStyle.jumbotrom}`}>
            <div className={`${indexStyle.container}`}>
              <section className={`${indexStyle.presentation}`}>
                <h1>{context.presentation.me}</h1>
                {context.presentation.oneLineAbout(indexStyle)}
              </section>
              <section className={`${indexStyle.getInTouch}`}>
                <Link prefetch href="/contact">
                  <a className={`${indexStyle.btn} ${indexStyle.btnBold}`}>Get in Touch</a>
                </Link>
              </section>
              <section className={`${indexStyle.customers}`}>
                <h3>I've already worked with:</h3>
                <div className={`${indexStyle.customerLogos}`}>
                  <img src="static/images/kraft_heinz_logo.png" alt="Kraft Heinz Company" aria-labeled="Kraft Heinz Company" title="Kraft Heinz Company" className={`${indexStyle.customerLogo}`}/>
                  <img src="static/images/scalable_path_logo.png" alt="Scalable Path" aria-labeled="Scalable Path" title="Scalable Path" className={`${indexStyle.customerLogo}`}/>
                  <img src="static/images/sms_logo.png" alt="Strategic Management Society" aria-labeled="Strategic Management Society" title="Strategic Management Society" className={`${indexStyle.customerLogo}`}/>
                  <img src="static/images/greg_morris_cards_logo.png" alt="Greg Morris Cards" aria-labeled="Greg Morris Cards" title="Greg Morris Cards" className={`${indexStyle.customerLogo}`}/>
                </div>
              </section>
            </div>
          </section>
        )}
      </homeContext.Consumer>
    )
  }

  render () {
    return (
      <homeContext.Provider value={this.state}>
        <React.Fragment>
          <Header />
          {this.renderBody()}
          <Footer />
        </React.Fragment>
      </homeContext.Provider>
    )
  }
}

export default Home
