const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const indexRoute = require('./routes/index')

//connects to mongoDb
require('./db/db')


const app = express()


app.disable("x-powered-by");

app.use(helmet())
app.use(cors())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(indexRoute)

//call base end point
app.get('/bot', (req, res) => {
    res.status(200).send({
        'health-check': 'BOT',
        'message': 'Slackbot api is up and running'
    })
})

app.get('/', (req, res) => {
    res.status(200).send({
        'health-check': 'Ok',
        'repo': 'https://github.com/anjorlar/SlackBotAPI.git',
        'message': 'base endpoint for Slackbot api is up and running'
    })
})

module.exports = app