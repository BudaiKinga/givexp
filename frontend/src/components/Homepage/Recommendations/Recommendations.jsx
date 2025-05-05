import "./Recommendations.css";
import "@fontsource/playfair-display";
import "@fontsource/lora";
import bico from "../../../../public/images/thumbnail/bico.png";
import fenykep from "../../../../public/images/thumbnail/fenykep.png";
import kave from "../../../../public/images/thumbnail/kave.png";
import szallas from "../../../../public/images/thumbnail/szallas.png";
import torna from "../../../../public/images/thumbnail/torna.png";
import tura from "../../../../public/images/thumbnail/tura.png";
import { prependMobile } from "../../../utils/utils";

const Recommendations = () => {
  return (
    <div className={prependMobile("recom")}>
      <div className="title">Ajánlott élményeink</div>
      <div className="list">
        <div className="entry">
          <div className="midtext">
            <p>Szállás</p>
          </div>
          <img src={szallas} />
        </div>
        <div className="entry">
          <div className="midtext">
            <p>Kávékóstoló</p>
          </div>
          <img src={kave} />
        </div>
        <div className="entry">
          <div className="midtext">
            <p>E-bike túra</p>
          </div>
          <img src={bico} />
        </div>
        <div className="entry">
          <div className="midtext">
            <p>Fotózás</p>
          </div>
          <img src={fenykep} />
        </div>
        <div className="entry">
          <div className="midtext">
            <p>Alakformáló torna</p>
          </div>
          <img src={torna} />
        </div>
        <div className="entry">
          <div className="midtext">
            <p>Gyalogtúra</p>
          </div>
          <img src={tura} />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
