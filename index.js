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
      res.status(500).json({ error: "The users information could not be retrieved." })
    })
})

// POST to create new user
server.post('/api/users', (req, res) => {
  const userInfo = req.body
  users.insert(userInfo)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error while saving the user to the database" })
    })
})

// DELETE to delete specific user
server.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id
  users.remove(userId)
    .then(user => {
      if (user) {
        res.status(200).json({ message: "Successfully deleted the user." })
      } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
      }
    })
    .catch(error => {
      res.status(500).json({ error: "The user could not be removed" })
    })
})


const port = 7000;
server.listen(port, () => console.log('\n server is running \n'))