const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/random.text', (req, res) => {
//   res.send('random.text')
// })

app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
