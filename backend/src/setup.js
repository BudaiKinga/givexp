const db = require('./db');

const createTablePartner = `
  CREATE TABLE IF NOT EXISTS partner (
    partner_id INTEGER PRIMARY KEY AUTOINCREMENT,
    partner_name TEXT,
    thumbnail_home TEXT
  )
`;

const createTablePartnerXP = `
  CREATE TABLE IF NOT EXISTS partner_xp (
    xp_id INTEGER PRIMARY KEY AUTOINCREMENT,
    partner_id INTEGER NOT NULL,
    title TEXT,
    description TEXT,
    price REAL,
    additional_info TEXT

  )
`;

const createTableXPImage = `
  CREATE TABLE IF NOT EXISTS xp_image (
    image_id INTEGER PRIMARY KEY AUTOINCREMENT,
    partner_id INTEGER NOT NULL,
    xp_id INTEGER NOT NULL,
    image TEXT
  )
`;
var createTables = () => {
  db.exec(createTablePartner);
  db.exec(createTablePartnerXP);
  db.exec(createTableXPImage);

  console.log('Table created or already exists.');
};

module.exports = { createTables }