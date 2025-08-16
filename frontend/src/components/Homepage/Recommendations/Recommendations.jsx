import "./Recommendations.css";
import "@fontsource/playfair-display";
import "@fontsource/lora";
import tbt_zsombi from "../../../../public/images/partner/tbt_zsombi/home.png";
import { prependMobile } from "../../../utils/utils";
import { getPartnerXp, getRecommendations } from "../../../backend/apicalls";
import { useEffect, useState } from "react";

const Recommendations = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getRecommendations().then((r) => {
      setEntries(r.data);
    });
  }, []);

  const recommendationClick = async (e) => {
    getPartnerXp(e.partner_id).then((r) => {
      console.log(r);
    });
    // TODO: load from backend
    //  navigate /xp/cathegory/partner
  };

  return (
    <div className={prependMobile("recom")}>
      <div className="title">Ajánlott élményeink</div>
      <div className="list">
        {entries.map((e) => (
          <div
            key={e.partner_id}
            className="entry"
            onClick={() => recommendationClick(e)}
          >
            <div className="midtext">
              <p>{e.partner_name}</p>
            </div>
            <img src={e.thumbnail} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
