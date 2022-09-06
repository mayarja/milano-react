import "./slike.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { comp } from "../../dummydata.js";

function Slike() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="slike">
      <h1 className="text-center">working companies</h1>
      <div className="container text-center">
        <Slider {...settings}>
          {comp.map((e) => (
            <div key={e.id} className="box-img">
              <img src={e.imgcom} className="img-slike" alt="...." />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slike;
