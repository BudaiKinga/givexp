var fs = require("fs");

function base64Enc(file) {
  var bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString("base64");
}

module.exports = { base64Enc };
