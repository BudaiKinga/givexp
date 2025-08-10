const { base64Enc } = require("./utils");

const getRecommendations = function () {
  // TODO: read all from DB
  const res = {
    status: "success",
    data: [
      {
        id: "tbt_zsombi",
        name: "Total Body Training",
        image:
          "data:image/jpeg;base64, " + base64Enc("./db/xp/tbt_zsombi/home.png"),
      },
    ],
  };
  return res;
};

module.exports = { getRecommendations };
