import React from 'react'

export const homeData = {
  title: 'Home',
  description: "I'm a software developer with more than 8 years of experience in web based applications.",
  presentation: {
    me: "Hello, I'm Leonardo Ribeiro",
    oneLineAbout: (indexStyle) => (
      <React.Fragment>
        <p>A software developer focused on building web based applications with <code>#javascript</code></p>
        <p>I also like to create video tutorials on <a target="_blank" href="https://www.youtube.com/channel/UCO9DNngvvVxdAqUiIRq3zIw" className={indexStyle.youtubeLink}>YouTube</a></p>
      </React.Fragment>
    ),
    toCompany: "If you're a company looking for a great developer, I can help you. So Get in Touch"
  },
  isLoadingSubscription: false,
  subscribeEmail: ''
}

export const homeContext = React.createContext(homeData)
