const express = require("express")
const mustacheExpress = require('mustache-express')
const data = require("./data.js")

const app = express()

app.use(express.static('public'))

app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.get('/', (request, response) => {
  response.render('home', data)
})

app.get('/users/:id', (request, response) => {
  const userInfo = data.users[request.params.id - 1]
  response.render('Indiv', userInfo)
})


app.listen(3000, () => {
  console.log("Successfully started express application!")
})
