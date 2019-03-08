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
    )
  },
  companiesWorked: [
    {
      title: 'Kraft Heinz Company',
      path: 'static/images/kraft_heinz_logo.png'
    },
    {
      title: 'Scalable Path',
      path: 'static/images/scalable_path_logo.png'
    },
    {
      title: 'Strategic Management Society',
      path: 'static/images/sms_logo.png'
    },
    {
      title: 'Greg morris Cards',
      path: 'static/images/greg_morris_cards_logo.png'
    }
  ]
}

export const homeContext = React.createContext(homeData)
