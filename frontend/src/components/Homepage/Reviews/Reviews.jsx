import "./Reviews.css";
import "@fontsource/lora";
import stars from "../../../../public/images/stars.png";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="title">Értékeléseink</div>
      <div className="list">
        <div className="entry">
          <div className="quote">"Szuper volt, ajánlom"</div>
          <div className="whom">Gabi, 21</div>
          <div className="where">E-bike túra</div>
          <img src={stars} />
        </div>
        <div className="entry">
          <div className="quote">"Szuper volt, ajánlom"</div>
          <div className="whom">Gabi, 21</div>
          <div className="where">E-bike túra</div>
          <img src={stars} />
        </div>
        <div className="entry">
          <div className="quote">"Szuper volt, ajánlom"</div>
          <div className="whom">Gabi, 21</div>
          <div className="where">E-bike túra</div>
          <img src={stars} />
        </div> <div className="entry">
          <div className="quote">"Szuper volt, ajánlom"</div>
          <div className="whom">Gabi, 21</div>
          <div className="where">E-bike túra</div>
          <img src={stars} />
        </div>
        <div className="entry">
          <div className="quote">"Szuper volt, ajánlom"</div>
          <div className="whom">Gabi, 21</div>
          <div className="where">E-bike túra</div>
          <img src={stars} />
        </div>
        {/* <div className="entry">
          <div className="quote">"Szuper volt, ajánlom"</div>
          <div className="whom">Gabi, 21</div>
          <div className="where">E-bike túra</div>
          <img src={stars} />
        </div> */}
      </div>
    </div>
  );
};

export default Reviews;
