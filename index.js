const express = require('express')
const app = express()
const cors = require('cors')
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
    response.json(persons)
})
app.get('/api/persons/:id', (request, response)=>{
    const id = Number(request.params.id)
    const person = persons.find(person=>person.id=== id)
    
    if (person) {
    response.json(person)    
    } else{
        response.status(404).end()
    }
})
app.delete('api/persons/:id', (request, response)=>{
const id = Number(request.params.id)
persons = persons.filter(person => person.id !==id)
response.status(204).end()})

app.post('/api/persons', (request, response) => {
    const person = request.body
    person.id = persons.length+1
    console.log(person)
    persons = persons.concat(person)
    response.json(person)
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })