import React from 'react'
import DefaultTemplate from './_document'
import Header from '../components/header'

class Blog extends DefaultTemplate {
  render () {
    return (
      <React.Fragment>
        <Header />
        <div>Blog</div>
      </React.Fragment>
    )
  }
}

export default Blog
