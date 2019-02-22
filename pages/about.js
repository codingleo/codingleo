import React from 'react'
import DefaultTemplate from './_document'
import Header from '../components/header'

class About extends DefaultTemplate {
  render () {
    return (
      <React.Fragment>
        <Header />
        <div>About</div>
      </React.Fragment>
    )
  }
}

export default About
