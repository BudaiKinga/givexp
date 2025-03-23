const fs = require('fs')

const readConfig = function (path) {
    console.log(`reading config file att: ${path}`)
    const configFileContent = fs.readFileSync(path)
    const configMap = JSON.parse(configFileContent)

    console.log('server configurations ***********************')
    for (const [key, val] of Object.entries(configMap)) {
        console.log(`${key}: ${val}`)
    }
    console.log('server configurations ***********************')

    return configMap
}

module.exports = { readConfig } 