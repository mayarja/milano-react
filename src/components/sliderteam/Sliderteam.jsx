import "./sliderteam.css";
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { person } from "../../dummydata";

function Sliderteam() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="slider-team">
      <div className="container">
        <Slider {...settings}>
          {person.map((e) => (
            <div className="box-slider" key={e.id}>
              <div className="row">
                <div className="col-lg-4">
                  <div className="box-img">
                    <img src={e.img} alt="..." />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="title">
                    <div className="name-sp">
                      <h5>{e.name}</h5>
                      <span>{e.title}</span>
                    </div>
                    <p>
                      It is a linguistically sensitive position. He held this
                      position for more than five years, and he is one of the
                      officials in the renaissance of the company He also held
                      several positions, including the position of accountancy
                      and the position of security, as well as obtaining more
                      than a certificate of appreciation from the managers who
                      supervised his training.
                    </p>
                    <ul className="list-unstyled d-flex gap-4">
                      <li>
                        <ImFacebook color="#0d6efd" />
                      </li>
                      <li>
                        <GrInstagram color="#e1306c" />
                      </li>
                      <li>
                        <BsTwitter color="#00acee" />
                      </li>
                      <li>
                        <FaLinkedinIn color="#0A66C2" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Sliderteam;
