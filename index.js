// implement your API here
const express = require('express')

const users = require('./data/db')

const server = express()

server.use(express.json())

server.get('/api/users', (req, res) => {
  users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(500).json({ message: "error getting list of users" })
    })
})





const port = 7000;
server.listen(port, () => console.log('\n server is running \n'))