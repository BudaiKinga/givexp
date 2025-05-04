import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Kategoriak from "../Homepage/Kategoriak/Kategoriak";
import Recommendations from "../Homepage/Recommendations/Recommendations";
import Reviews from "../Homepage/Reviews/Reviews";
import Terkep from "../Homepage/Terkep/Terkep";
import "./Fullsite.css";

const Fullsite = () => {
  return (
    <div className="fullsite">
      <Header />
      <Banner />
      <Recommendations />
      <Kategoriak />
      <Terkep />
      <Reviews />
    </div>
  );
};

export default Fullsite;
