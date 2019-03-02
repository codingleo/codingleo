import React from 'react'
import footerStyle from './footer.styl'

const Footer = (props) => (
  <footer className={`${footerStyle.footer}`}>
    <section className={`${footerStyle.container}`}>
      <div>
        copyright © All rights reserved.
      </div>
      <div className={`${footerStyle.logo}`}>
        {`< CodingLeo / >`}
      </div>
    </section>
  </footer>
)

export default Footer
