const { readAll } = require("./services/partnerXPService");
const { base64Enc } = require("./utils");

const getRecommendations = function () {
  const data = readAll();
  var responseBody = [];
  for (let i = 0; i < data.length; i++) {
    responseBody.push({
      partner_id: data[i].partner_id,
      partner_name: data[i].partner_name,
      thumbnail: "data:image/jpeg;base64, " + base64Enc(data[i].thumbnail_home),
    });
  }
  const res = {
    status: "success",
    data: responseBody,
  };
  return res;
};

module.exports = { getRecommendations };
