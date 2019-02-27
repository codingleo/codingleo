import React from 'react'
import DefaultTemplate from './_document'
import Header from '../components/header'
import indexStyle from './index.styl'
import { homeContext, homeData } from '../states/indexContext'

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
              <section className={`${indexStyle.subscribe}`}>
                <div className={`${indexStyle.subscribeInput}`}>
                  <input onChange={this.onSubscribeInputChange.bind(this)} disabled={context.isLoadingSubscription} value={context.subscribeEmail} type="email" placeholder="Your best e-mail here" />
                  <button onClick={this.subscribe(context.subscribeEmail).bind(this)} disabled={context.isLoadingSubscription} className={`${indexStyle.cta}`}>{context.isLoadingSubscription ? 'Loading...' : 'Subscribe'}</button>
                </div>
              </section>
              <section className={`${indexStyle.customers}`}>
                <h3>I've already worked with:</h3>
                <div className={`${indexStyle.customerLogos}`}>
                  <img src="static/images/kraft_heinz_logo.png" alt="Kraft Heinz Company" ariaLabeled="Kraft Heinz Company" title="Kraft Heinz Company" className={`${indexStyle.customerLogo}`}/>
                  <img src="static/images/scalable_path_logo.png" alt="Scalable Path" ariaLabeled="Scalable Path" title="Scalable Path" className={`${indexStyle.customerLogo}`}/>
                  <img src="static/images/sms_logo.png" alt="Strategic Management Society" ariaLabeled="Strategic Management Society" title="Strategic Management Society" className={`${indexStyle.customerLogo}`}/>
                  <img src="static/images/greg_morris_cards_logo.png" alt="Greg Morris Cards" ariaLabeled="Greg Morris Cards" title="Greg Morris Cards" className={`${indexStyle.customerLogo}`}/>
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
        </React.Fragment>
      </homeContext.Provider>
    )
  }
}

export default Home
