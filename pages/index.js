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

  onTitleClick (e) {
    this.setState(state => ({
      presentation: state.presentation.me === "Hello, I'm Leonardo Ribeiro"
        ? Object.assign({},
          this.state.presentation,
          { me: "Hello, I'm Leo Ribeiro" }
        )
        : Object.assign({},
          this.state.presentation,
          { me: "Hello, I'm Leonardo Ribeiro" }
        )
    }))
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
                <h1 onClick={this.onTitleClick.bind(this)}>{context.presentation.me}</h1>
                {context.presentation.oneLineAbout(indexStyle)}
              </section>
              <section className={`${indexStyle.presentation}`}>
                <h3>{context.presentation.toCompany}</h3>
              </section>
              <section className={`${indexStyle.subscribe}`}>
                <div className={`${indexStyle.subscribeInput}`}>
                  <input onChange={this.onSubscribeInputChange.bind(this)} disabled={context.isLoadingSubscription} value={context.subscribeEmail} type="email" placeholder="Your best e-mail here" />
                  <button onClick={this.subscribe(context.subscribeEmail).bind(this)} disabled={context.isLoadingSubscription} className={`${indexStyle.cta}`}>{context.isLoadingSubscription ? 'Loading...' : 'Subscribe'}</button>
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
