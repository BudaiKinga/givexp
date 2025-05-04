import "./Recommendations.css";
import "@fontsource/playfair-display";
import "@fontsource/lora";
import bico from "../../../../public/images/thumbnail/bico.png";
import fenykep from "../../../../public/images/thumbnail/fenykep.png";
import kave from "../../../../public/images/thumbnail/kave.png";
import szallas from "../../../../public/images/thumbnail/szallas.png";
import torna from "../../../../public/images/thumbnail/torna.png";
import tura from "../../../../public/images/thumbnail/tura.png";

const Recommendations = () => {
  return (
    <div className="recom"> 
      <div className="title">Ajánlott élményeink</div>
      <div className="list">
        <div className="entry">
          <p>Szállás</p>
          <img src={szallas} />
        </div>
        <div className="entry">
          <p>Kávékóstoló</p> 
          <img src={kave} />
        </div>
        <div className="entry">
          <p>E-bike túra</p>
          <img src={bico} />
        </div>
        <div className="entry">
          <p>Fotózás</p>
          <img src={fenykep} />
        </div>
        <div className="entry">
          <p>Alakformáló torna</p> 
          <img src={torna} />
        </div>
        <div className="entry">
          <p>Gyalogtúra</p>
          <img src={tura} />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
