// implement your API here
const express = require('express')

const users = require('./data/db')

const server = express()

server.use(express.json())


// GET all users
server.get('/api/users', (req, res) => {
  users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(500).json({ message: "error getting list of users" })
    })
})

// GET specific user by id
server.get('/api/users/:id', (req, res) => {
  const userId = req.params.id
  
  users.findById(userId)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(error => {
      res.status(500).json({ message: 'error finding the user'})
    })
})




const port = 7000;
server.listen(port, () => console.log('\n server is running \n'))