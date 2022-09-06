import "./slider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { slider } from "../../dummydata";
import { useState } from "react";

function Slider() {
  let [trans, setTrans] = useState(0);

  let handclick = (status) => {
    if (status === "r") {
      setTrans(trans >= 2 ? 0 : trans + 1);
    } else {
      setTrans(trans <= 0 ? 2 : trans - 1);
    }
  };
  return (
    <div className="slider">
      {slider.map((e) => {
        return (
          <div
            className="slid-one"
            style={{
              background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${e.bkimg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              transform: `translateX(${trans * -100}vw)`,
            }}
            key={e.id}
          >
            <div className="fuck">
              <div className="container">
                <div className="silde-title">
                  <h2>{e.h}</h2>
                  <p>{e.p}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="slider-icon">
        <MdKeyboardArrowLeft
          size={40}
          className="icon-s"
          onClick={() => {
            handclick("l");
          }}
        />
        <MdKeyboardArrowRight
          size={40}
          className="icon-s"
          onClick={() => {
            handclick("r");
          }}
        />
      </div>
    </div>
  );
}

export default Slider;
