import React from 'react'
import DefaultTemplate from './_documents'
import Header from '../components/header'
import Footer from '../components/footer'
import contactStyle from './contact.styl'

class Contact extends DefaultTemplate {
  renderBody () {
    return (
      <React.Fragment>
        <section className={`${contactStyle.jumbotrom}`}>
          <div className={`${contactStyle.container}`}>
            <section>
              <h1>Contact</h1>
              <p>Don't be shy. Get in touch and let's talk about your ideas!</p>
            </section>
            <form action="" className={`${contactStyle.contactForm}`}>
              <label htmlFor="email">Your E-mail:
                <input placeholder="Put your most used e-mail here" name="email" type="email" className={`${contactStyle.contactInput}`}/>
              </label>

              <label htmlFor="subject"> Subject:
                <input placeholder="What's the subject of the message?" name="subject" type="text" className={`${contactStyle.contactInput}`}/>
              </label>
              <label htmlFor="message"> Message:
                <textarea placeholder="Your message" rows="10" name="" type="text" className={`${contactStyle.contactInput}`}/>
              </label>
              <button className={`${contactStyle.btn}`} type="submit">Send Message</button>
            </form>
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
