import React from 'react'
import fetch from 'isomorphic-fetch'
import Header from '../components/header'
import Footer from '../components/footer'
import contactStyle from './contact.styl'

const initialState = {
  email: {
    value: '',
    valid: null
  },
  subject: {
    value: '',
    valid: null
  },
  message: {
    value: '',
    valid: null
  },
  isLoading: false,
  messageSent: null
}

class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = initialState
  }
  handleSubmitClick (data) {
    const that = this
    return e => {
      debugger
      that.setState({ isLoading: true })

      fetch('/sendMessage', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email.value,
          subject: data.subject.value,
          message: data.message.value
        })
      })
        .then(resp => resp.json())
        .then(response => {
          that.setState({ messageSent: true })
          setTimeout(() => {
            that.setState(initialState)
          }, 5000)
        })
        .catch(err => {
          console.error(err)
          that.setState({ messageSent: false })
          setTimeout(() => {
            that.setState(initialState)
          }, 5000)
        })
    }
  }

  handleOnInputChange (e) {
    if (e.target.checkValidity()) {
      this.setState({
        [e.target.name]: {
          value: e.target.value,
          valid: true
        }
      })
    } else {
      this.setState({
        [e.target.name]: {
          value: e.target.value,
          valid: false
        }
      })
    }
  }

  renderBody () {
    return (
      <React.Fragment>
        <section className={`${contactStyle.jumbotrom}`}>
          <div className={`${contactStyle.container}`}>
            <section>
              <h1>Contact</h1>
              <p>Don't be shy. Get in touch and let's talk about your ideas!</p>
            </section>
            <section className={`${contactStyle.contactForm}`}>
              <label htmlFor="email">Your E-mail:
                <input
                  disabled={this.state.isLoading}
                  required
                  value={this.state.email.value}
                  onChange={this.handleOnInputChange.bind(this)}
                  placeholder="Put your most used e-mail here"
                  name="email"
                  type="email"
                  className={`${contactStyle.contactInput} ${this.state.email.valid === null ? '' : this.state.email.valid ? contactStyle.valid : contactStyle.invalid}`}/>
              </label>

              <label htmlFor="subject"> Subject:
                <input
                  disabled={this.state.isLoading}
                  required
                  minLength={10}
                  value={this.state.subject.value}
                  onChange={this.handleOnInputChange.bind(this)}
                  placeholder="What's the subject of the message?"
                  name="subject"
                  type="text"
                  className={`${contactStyle.contactInput} ${this.state.subject.valid === null ? '' : this.state.subject.valid ? contactStyle.valid : contactStyle.invalid}`}/>
                {this.state.subject.valid === null ? '' : this.state.subject.valid ? '' : <span className={`${contactStyle.invalid}`}>It should have at least 10 characters.</span>}
              </label>
              <label htmlFor="message"> Message:
                <textarea
                  disabled={this.state.isLoading}
                  required
                  minLength={20}
                  value={this.state.message.value}
                  onChange={this.handleOnInputChange.bind(this)}
                  placeholder="Your message" rows="10"
                  name="message"
                  type="text"
                  className={`${contactStyle.contactInput} ${this.state.message.valid === null ? '' : this.state.message.valid ? contactStyle.valid : contactStyle.invalid}`}/>
                {this.state.message.valid === null ? '' : this.state.message.valid ? '' : <span className={`${contactStyle.invalid}`}>It should have at least 20 characters.</span>}
              </label>
              <button
                onClick={this.handleSubmitClick(this.state).bind(this)}
                disabled={this.state.isLoading || this.state.messageSent !== null}
                className={`${contactStyle.btn} ${this.state.messageSent === null ? '' : this.state.messageSent ? contactStyle.btnSuccess : contactStyle.btnError}`}>
                {this.state.messageSent === null ? 'Send Message' : this.state.messageSent ? 'Message Sent!' : 'We had an error. Try again later!'}
              </button>
            </section>
          </div>
        </section>
      </React.Fragment>
    )
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        {this.renderBody()}
        <Footer />
      </React.Fragment>
    )
  }
}

export default Contact
