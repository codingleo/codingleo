import React from 'react'
import MyHead from '../components/MyHead'
import Header from '../components/header'
import Footer from '../components/footer'
import portfolioStyle from './portifolio.styl'
import portifolioContext from '../states/PortifolioContext'
import fetch from 'isomorphic-fetch'

class Portfolio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: [],
      isLoadingProjects: true
    }
  }

  componentDidMount () {
    const that = this
    fetch('/listProjects')
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          projects: response.projects,
          isLoadingProjects: false
        })
      })
  }

  renderProjects () {
    return (
      this.state.projects.map(project => (
        <figure className={`${portfolioStyle.project}`}>
          <a target="_blank" href={project.url}>
            <img src={project.covers['404']} alt={project.name}/>
            <figcaption>{project.name}</figcaption>
          </a>
        </figure>
      ))
    )
  }

  renderBody () {
    return (
      <portifolioContext.Consumer>
        {context => (
          <React.Fragment>
            <MyHead>
              <title>{`< codingleo />`}</title>
            </MyHead>
            <section className={`${portfolioStyle.jumbotrom}`}>
              <div className={`${portfolioStyle.container}`}>
                <section>
                  <h1>Portfolio</h1>
                  <p>Here you can find some projects that I've worked with.</p>
                </section>
              </div>
            </section>
            <section className={`${portfolioStyle.portfolioContainer}`}>
              {this.state.isLoadingProjects ? 'Loading...' : this.renderProjects()}
            </section>
          </React.Fragment>
        )}
      </portifolioContext.Consumer>
    )
  }

  render () {
    return (
      <portifolioContext.Provider value={this.state}>
        <React.Fragment>
          <Header />
          {this.renderBody()}
          <Footer />
        </React.Fragment>
      </portifolioContext.Provider>
    )
  }
}

export default Portfolio
