import "./singelpice.css";
import { AiOutlineZoomIn } from "react-icons/ai";
import { single } from "../../dummydata.js";
import { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Singelpice() {
  let [tap, setTap] = useState(1);

  let handclick = (status) => {
    setTap(status);
  };

  let [imgmodal, setImgmodal] = useState(0);

  let leftrightfn = (status) => {
    let counter;
    if (status === "r") {
      counter = imgmodal === single.length - 1 ? 0 : imgmodal + 1;
    } else {
      counter = imgmodal === 0 ? single.length - 1 : imgmodal - 1;
    }
    setImgmodal(counter);
  };

  let [showmodal, setShowmodal] = useState(false);

  let showmodalfn = (id) => {
    setShowmodal(!showmodal);
    setImgmodal(id);
  };

  useEffect(() => {
    if (showmodal === true) {
      let clear = setTimeout(() => {
        leftrightfn("r");
      }, 9000);
      return () => {
        clearTimeout(clear);
      };
    }
  });

  let navigate = useNavigate();
  let [price, setprice] = useState("2000");
  let handgo = (id, img) => {
    navigate("/milano-react/getkitch", { state: { img, price, id } });
  };

  return (
    <div className="single text-center">
      {showmodal && (
        <div className="overlay-modal">
          <div className="box-modal">
            <BsFillArrowLeftCircleFill
              className="icon-left"
              size={40}
              onClick={() => leftrightfn("l")}
            />
            <BsFillArrowRightCircleFill
              className="icon-right"
              size={40}
              onClick={() => leftrightfn("r")}
            />
            <img src={single[imgmodal].singleimg} alt=".." />
            <AiFillCloseCircle
              className="icon-close"
              size={40}
              onClick={showmodalfn}
            />
          </div>
        </div>
      )}
      <div className="container">
        <h1>Singel Pieces</h1>
        <div className="row">
          {single.map(
            (e, index) =>
              e.tap === tap && (
                <div className="col-lg-3 col-sm-6" key={e.id}>
                  <div className="box-img">
                    <div className="title text-center">
                      <h5>Specifications</h5>
                      <p>
                        If you like it, you must press the count button and you
                        will enter some information to complete the purchase
                        process
                      </p>
                      <div className="btn-click">
                        <button
                          className="btn"
                          onClick={() => {
                            handgo(e.id, e.singleimg);
                          }}
                        >
                          Buy now
                        </button>
                        <AiOutlineZoomIn
                          size={30}
                          className="zoom"
                          onClick={() => {
                            showmodalfn(index);
                          }}
                        />
                      </div>
                    </div>
                    <img className="imgg" src={e.singleimg} alt="..." />
                  </div>
                </div>
              )
          )}
        </div>

        <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li
            className={tap === 1 ? "active" : ""}
            onClick={() => {
              handclick(1);
            }}
          >
            1
          </li>
          <li
            className={tap === 2 ? "active" : ""}
            onClick={() => {
              handclick(2);
            }}
          >
            2
          </li>
          <li
            className={tap === 3 ? "active" : ""}
            onClick={() => {
              handclick(3);
            }}
          >
            3
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Singelpice;
