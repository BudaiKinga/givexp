const db = require("../db/db");

const populateMockData = () => {
  // ********** PARTNER
  const stmt_partner = db.prepare(
    `INSERT INTO partner (partner_name) VALUES (?)`
  );
  stmt_partner.run("Total Body Training");

  // ********** PARTNER_XP
  const stmt_partner_xp = db.prepare(
    `INSERT INTO partner_xp (partner_id, name, location, cathegory_id, thumbnail_id) VALUES (?, ?, ?, ?, ?)`
  );
  stmt_partner_xp.run(1, "Egyéni", "Marosvasarhely", 1, 1);

  // ********** CATHEGORY
  const stmt_cathegory = db.prepare(
    `INSERT INTO cathegory (name, thumbnail_id) VALUES (?, ?)`
  );
  stmt_cathegory.run("Workout", 1);

  // ********** IMAGE
  const stmt_image = db.prepare(
    `INSERT INTO image (xp_id, image_path) VALUES (?, ?)`
  );
  stmt_image.run(1, "./db/xp/tbt_zsombi/home.png");

  // ********** THUMBNAIL
  const stmt_thumbnail = db.prepare(
    `INSERT INTO thumbnail (thumbnail_path) VALUES (?)`
  );
  stmt_thumbnail.run("./db/xp/tbt_zsombi/egyeni.png");

  // ********** OPTIONS
  const stmt_options = db.prepare(
    `INSERT INTO xp_options (xp_id, name) VALUES (?, ?)`
  );
  stmt_options.run(1, "TBT Lite");

  // ********** RECOMMENDATION
  const stmt_recommendation = db.prepare(
    `INSERT INTO recommendation (xp_id) VALUES (?)`
  );
  stmt_recommendation.run(1);

  // ********** PRICE
  const stmt_price = db.prepare(
    `INSERT INTO price (option_id, price) VALUES (?, ?)`
  );
  stmt_price.run(1, 165);

  // ********** CONTACT
  const stmt_contact = db.prepare(
    `INSERT INTO contact (name, tel) VALUES (?, ?)`
  );
  stmt_contact.run("Zsombi", "0755 555 555");
};

populateMockData();
