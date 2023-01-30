const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))





let persons = [
      {
        "name": "Arto Hellas",       
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "id": 4
      },
      {
        "name": "hyhy",
        "id": 5
      },
      {
        "name": "yuyuyu",
        "id": 6
      }
    ]
app.get('/api/persons', (request, response) => {
       Person.find({}).then(persons=>{
        response.json(persons)
})
})
app.get('/api/persons/:id', (request, response)=>{
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
}
)
app.delete('api/persons/:id', (request, response)=>{
const id = Number(request.params.id)
persons = persons.filter(person => person.id !==id)
response.status(204).end()})

app.post('/api/persons', (request, response) => {
const body = request.body

    const person = new Person({
      name: body.content,

    })
    note.save().then(savedPerson =>{
      response.json(savedPerson)
    })
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })