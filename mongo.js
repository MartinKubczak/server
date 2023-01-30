const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
`mongodb+srv://MaDing:${password}@cluster0.tiarjum.mongodb.net/?retryWrites=true&w=majority`



mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: process.argv[3],
})

if (process.argv.length < 4){
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}
else{

person.save().then(result => {
  console.log(`added ${person.name}`)
  mongoose.connection.close()
})
}
