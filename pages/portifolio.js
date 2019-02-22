import React from 'react'
import DefaultTemplate from './_document'
import Header from '../components/header'

class Portifolio extends DefaultTemplate {
  render () {
    return (
      <React.Fragment>
        <Header />
        <div>Portifolio</div>
      </React.Fragment>
    )
  }
}

export default Portifolio
