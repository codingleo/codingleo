const express = require('express')
const next = require('next')
const dotenv = require('dotenv')
const fetch = require('isomorphic-fetch')
// const redis = require('redis')
// const { promisify } = require('util')
const sendgrid = require('@sendgrid/mail')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')

dotenv.config()

const env = process.env.NODE_ENV || 'development'
const dev = env !== 'production'

const behanceKey = process.env.BEHANCE_API_KEY

// const redisClient = redis.createClient(
//   `redis://${dev ? 'localhost' : 'redis'}:6379`
// )
// const redisClientPromise = promisify(redisClient.get).bind(redisClient)

sendgrid.setApiKey(process.env.SG_SECRET_KEY)

const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(morgan('combined'))

    if (env === 'production') {
      server.use(compression())
    }

    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())

    server.post('/sendMessage', async (req, res) => {
      const email = req.body.email || req.query.email
      const subject = req.body.subject || req.query.subject
      const message = req.body.message || req.query.message

      if (email && subject && message) {
        const messageData = {
          to: process.env.SEND_EMAIL_TO,
          from: {
            email: email
          },
          subject: subject,
          text: message
        }

        console.log(messageData)

        sendgrid
          .send(messageData, false)
          .then(resp => resp.json())
          .then(response => {
            res.json(response)
          })
          .catch(err => {
            res.json(err)
          })
      }
    })

    server.get('/listProjects', async (req, res) => {
      // const projects = await redisClientPromise('projects')

      // if (projects) {
      //   res.json(JSON.parse(projects))
      // } else {
      const url = `https://api.behance.net/v2/users/codingleo/projects?api_key=${behanceKey}`
      console.log(url)

      fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(resp => {
          return resp.json()
        })
        .then(projects => {
          // redisClient.set('projects', JSON.stringify(projects))
          res.json(projects)
        })
        .catch(err => {
          console.error(err)
        })
    }
    // }
    )

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const port = process.env.PORT || 3000

    server.listen(port, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
