const express = require('express')
const app = express()
const port = 10443

app.get('/test', (req, res) => {
  res.send('timestamp from backend: ' + Date.now())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
