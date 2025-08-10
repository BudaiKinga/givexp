import "./Recommendations.css";
import "@fontsource/playfair-display";
import "@fontsource/lora";
import tbt_zsombi from "../../../../public/images/partner/tbt_zsombi/home.png";
import { prependMobile } from "../../../utils/utils";
import { getRecommendations } from "../../../backend/apicalls";
import { useEffect, useState } from "react";

const Recommendations = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getRecommendations().then((r) => {
      setEntries(r.data);
    });
  }, []);

  // onclick: elkéri a backendtől
  // redirect: /xp/workout/tbt

  return (
    <div className={prependMobile("recom")}>
      <div className="title">Ajánlott élményeink</div>
      <div className="list">
        {entries.map((e, index) => (
          <div className="entry">
            <div className="midtext">
              <p>{e.name}</p>
            </div>
            <img src={e.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
