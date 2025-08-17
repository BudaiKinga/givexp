const Database = require('better-sqlite3');
const db = new Database('./givexp.sqlite', { verbose: console.log });

module.exports = db;