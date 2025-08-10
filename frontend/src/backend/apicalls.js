import { LOCAL_URL } from "./backendurl";

const RECOMMENDATIONS = "recommendations/";
const PARTNER_XP = "partnerxp/";

export const getRecommendations = async () => {
  const url = LOCAL_URL + RECOMMENDATIONS;
  return (await fetch(url)).json();
};

export const getPartnerXp = async (partnerId) => {
  const params = {
    partnerId,
  };
  const queryString = new URLSearchParams(params).toString();

  const url = LOCAL_URL + PARTNER_XP;
  return (
    await fetch(`${url}?${queryString}`, {
      method: "GET",
    })
  ).json();
};
