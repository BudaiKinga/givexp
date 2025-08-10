import { LOCAL_URL } from "./backendurl";

const RECOMMENDATIONS_ENDPOINT = "recommendations/";

export const getRecommendations = async () => {
  console.log("calling backend GET /recommendations");
  const url = LOCAL_URL + RECOMMENDATIONS_ENDPOINT;
  return (await fetch(url)).json();
};
