import React from 'react'
import headerStyle from './header.styl'
import Link from 'next/link'

const Header = props => (
  <header className={headerStyle.header}>
    <div className={headerStyle.container}>
      <div className={headerStyle.logo}>
        <b>{'<CodingLeo />'}</b>
      </div>
      <nav className={headerStyle.navigation}>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
        <Link prefetch href="/portifolio">
          <a>Portifolio</a>
        </Link>
        <Link prefetch href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
