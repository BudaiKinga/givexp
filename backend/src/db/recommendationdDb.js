const db = require("./db");

const readAll = () => {
  const stmt = db.prepare(`SELECT * FROM recommendation`);
  return stmt.all();
};

module.exports = { readAll };
