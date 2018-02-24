
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('r u redy for node 25th?!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

 app.get('/', (request, response) => {
  response.render('home', {
   /// Replace "jhon" With ur name ////
   name: 'John'
  })
}) 
  console.log(`server is listening on ${port}`)
})
