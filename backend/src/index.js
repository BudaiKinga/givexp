const fs = require('fs')
var http = require('http');
var https = require('https');
var cors = require('cors');
const express = require('express');
const { readConfig } = require('./readconfig');


const config = readConfig(process.argv[2])

var startup = async () => {
  const isSSL = config.sslFullchain && config.sslPrivkey
  const app = express()
  app.use(cors())


  if (isSSL) {
    var certificate = fs.readFileSync(config.sslFullchain, 'utf8');
    var privateKey = fs.readFileSync(config.sslPrivkey, 'utf8');
    var credentials = { key: privateKey, cert: certificate };
    var httpsServer = https.createServer(credentials, app);
    httpsServer.listen(10443);
    console.log(`initialized https express server, listening on port ${config.port}`)
  } else {
    var httpServer = http.createServer(app);
    httpServer.listen(10443);
    console.log(`initialized http express server, listening on port ${config.port}`)
  }

  setupEndpoints(app)
}

var setupEndpoints = (app) => {
  app.get('/test', (req, res) => {
    const response = '' + Date.now()
    console.log(`response = ${response}`)
    res.send(response)
  })
}


startup()
