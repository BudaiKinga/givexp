const db = require("./db");

var createTables = () => {
  db.exec(createTablePartner);
  db.exec(createTablePartnerXP);
  db.exec(createTableImage);
  db.exec(creatTableThumbnails);
  db.exec(createTableXpOptions);
  db.exec(createTableCathegory);
  db.exec(createTableRecommendation);
  db.exec(createTablePrice);
  db.exec(createTableContact);

  console.log("Tables created");
};

const createTablePartner = `
  CREATE TABLE IF NOT EXISTS partner (
    partner_id INTEGER PRIMARY KEY AUTOINCREMENT,
    partner_name TEXT
  )
`;

const createTablePartnerXP = `
  CREATE TABLE IF NOT EXISTS partner_xp (
    xp_id INTEGER PRIMARY KEY AUTOINCREMENT,
    partner_id INTEGER NOT NULL,
    name TEXT,
    location TEXT,
    cathegory_id INTEGER NOT NULL,
    thumbnail_id INTEGER NOT NULL
  )
`;

const createTableImage = `
  CREATE TABLE IF NOT EXISTS image (
    image_id INTEGER PRIMARY KEY AUTOINCREMENT,
    xp_id INTEGER NOT NULL,
    image_path TEXT
  )
`;

const creatTableThumbnails = `
CREATE TABLE IF NOT EXISTS thumbnail (
    thumbnail_id INTEGER PRIMARY KEY AUTOINCREMENT,
    thumbnail_path TEXT
  )
`;

const createTableXpOptions = `
  CREATE TABLE IF NOT EXISTS xp_options (
    xp_option_id INTEGER PRIMARY KEY AUTOINCREMENT,
    xp_id INTEGER NOT NULL,
    name TEXT
  )
`;

const createTableCathegory = `
  CREATE TABLE IF NOT EXISTS cathegory (
    cathegory_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    thumbnail_id INTEGER NOT NULL
  )
`;

const createTableRecommendation = `
 CREATE TABLE IF NOT EXISTS recommendation (
    recommendation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    xp_id INTEGER NOT NULL,
    creation_ts DATETIME DEFAULT (CURRENT_TIMESTAMP),
    expiry_date DATETIME
  )
`;

const createTablePrice = `
  CREATE TABLE IF NOT EXISTS price (
    price_id INTEGER PRIMARY KEY AUTOINCREMENT,
    option_id INTEGER,
    price NUMBER
  )
`;

const createTableContact = `
  CREATE TABLE IF NOT EXISTS contact (
    contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    tel TEXT NOT NULL
  )
`;

module.exports = { createTables };
