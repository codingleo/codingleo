import React from 'react'
import headerStyle from './header.styl'
import Link from 'next/link'

const Header = props => (
  <header className={headerStyle.header}>
    <div className={headerStyle.container}>
      <div className="logo">
        {/* <img src="/static/codingleo_logo.png" alt="Codingleo Logo" title="Codingleo"/> */}
        <b>CodingLeo</b>
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
        <Link prefetch href="/blog">
          <a>Blog</a>
        </Link>
        <Link prefetch href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
