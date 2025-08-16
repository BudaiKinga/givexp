const db = require('../db');

function insertPartner(data) {
  const stmt = db.prepare(`
    INSERT INTO partner (partner_id, partner_name, thumbnail_home)
    VALUES (?, ?, ?)
  `);

  const info = stmt.run(
    data.partner_id,
    data.partner_name,
    data.thumbnail_home
  );

  return info.lastInsertRowid;
}

const readPartner = (partner_id) => {
  const stmt = db.prepare(`
    SELECT * FROM partner
    WHERE partner_id=?
  `);

  const partner = stmt.all(
    partner_id
  );

  return partner;
}

const readAll = () => {
  const stmt = db.prepare(`
    SELECT * FROM partner
  `);

  const partners = stmt.all();

  return partners;

}

module.exports = { readPartner, readAll };
