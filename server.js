const express = require('express')
const next = require('next')
const dotenv = require('dotenv')
const fetch = require('isomorphic-fetch')
const redis = require('redis')
const mongoose = require('mongoose')
const { promisify } = require('util')
const sendgrid = require('@sendgrid/mail')
const bodyParser = require('body-parser')

dotenv.config()

const redisClient = redis.createClient()
const redisClientPromise = promisify(redisClient.get).bind(redisClient)

mongoose.Promise = global.Promise

const mongoUser = process.env.MONGO_INITDB_ROOT_USERNAME
const mongoPass = process.env.MONGO_INITDB_ROOT_PASSWORD
const mongoDatabase = process.env.MONGO_INITDB_DATABASE

mongoose.connect(`mongodb://localhost:27017`, {
  user: mongoUser,
  pass: mongoPass,
  dbName: mongoDatabase,
  useNewUrlParser: true
})

sendgrid.setApiKey(process.env.SG_SECRET_KEY)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

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

        sendgrid.send(messageData, false)
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
      const projects = await redisClientPromise('projects')

      if (projects) {
        res.json(JSON.parse(projects))
      } else {
        fetch(`https://api.behance.net/v2/users/codingleo/projects?api_key=${process.env.BEHANCE_API_KEY}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(resp => {
            return resp.json()
          })
          .then(projects => {
            redisClient.set('projects', JSON.stringify(projects))
            res.json(projects)
          })
      }
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
