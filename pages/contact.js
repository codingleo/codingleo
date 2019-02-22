import React from 'react'
import DefaultTemplate from './_document'
import Header from '../components/header'

class Contact extends DefaultTemplate {
  render () {
    return (
      <React.Fragment>
        <Header />
        <div>Contact</div>
      </React.Fragment>
    )
  }
}

export default Contact
