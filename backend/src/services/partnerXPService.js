const db = require("../db/db");

const readPartnerXPs = (partner_id) => {
  const stmt = db.prepare(`
    SELECT * FROM partner_xp
    WHERE partner_id=?
  `);

  const partnerXPs = stmt.all(partner_id);

  return partnerXPs;
};

const readAll = () => {
  const stmt = db.prepare(`
    SELECT * FROM partner_xp
  `);

  const xps = stmt.all();

  return xps;
};

module.exports = { readPartnerXPs, readAll };
