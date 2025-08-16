const { readPartner } = require('./services/partnerService');
const { readPartnerXPs } = require('./services/partnerXPService');


const getPartner = async (partnerId) => {
  const partner = readPartner(partnerId);
  return partner;
};

const getPartnerXps = (partnerId) => {
  const partnerXPs = readPartnerXPs(partnerId);

  var responseBody =[];
  for (let i=0; i<partnerXPs.length; i++) {
    responseBody.push(
      {
        xp_id: partnerXPs[i].xp_id,
        title: partnerXPs[i].title,
        description: partnerXPs[i].description,
        price: partnerXPs[i].price,
        additional_info: partnerXPs[i].additional_info
      }
    );
  }
  const res = {
    status: "success",
    data: responseBody,
  };
  return res;
};

module.exports = { getPartner, getPartnerXps };
