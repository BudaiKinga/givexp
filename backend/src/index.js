const express = require('express')
const app = express()
const port = 6968

app.get('/', (req, res) => {
  res.send('Puca Pist 8a!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
