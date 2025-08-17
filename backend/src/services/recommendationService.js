const { readAll } = require("../db/recommendationdDb");

const getAllRecommendations = () => {
  const dbAll = readAll();

  const responseBody = [];
  for (let i = 0; i < dbAll.length; i++) {
    let x = dbAll[i];
  }
};

module.exports = { getAllRecommendations };
