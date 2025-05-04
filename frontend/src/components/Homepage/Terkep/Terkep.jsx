import "./Terkep.css";
import map from "../../../../public/images/map.png";

const Terkep = () => {
  return (
    <div className="terkep">
      <div className="title">Élménytérkép</div>
      <img src={map} />
    </div>
  );
};

export default Terkep;
