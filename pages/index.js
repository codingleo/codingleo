import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import indexStyle from './index.styl'
import { homeContext, homeData } from '../states/indexContext'
import Link from 'next/link'
import Head from 'next/head'
import MyHead from '../components/MyHead'

class Home extends React.Component {
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
            <MyHead></MyHead>
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
                  {
                    context.companiesWorked.map((company, i) => (
                      <img key={i} src={company.path} alt={company.title} aria-label={company.title} className={`${indexStyle.customerLogo}`}/>
                    ))
                  }
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
