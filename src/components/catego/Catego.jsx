import "./catego.css";
import { kit } from "../../dummydata.js";
import { HiTag } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Catego() {
  let [showall, setShowAll] = useState(true);
  let [type, setType] = useState("");

  let showallfn = () => {
    setShowAll(true);
    setType("");
  };

  let filterclick = (status) => {
    setShowAll(false);
    setType(status);
  };
  let navigate = useNavigate();

  let handclick = (img, price, id) => {
    navigate("/milano-react/getkitch", { state: { img, price, id } });
  };
  return (
    <div className="catego">
      <h1 className="text-center mb-5">Diverse kitchens</h1>
      <div className="row">
        <div className="col-xl-2 mb-5">
          <div className="filter">
            <h3>Filter</h3>
            <ul className="list-unstyled">
              <li
                className={type === "" ? "active" : "notactive"}
                onClick={() => {
                  showallfn();
                }}
              >
                all diverse
              </li>
              <li
                onClick={() => {
                  filterclick("wood & glass");
                }}
                className={type === "wood & glass" ? "active" : "notactive"}
              >
                wood & glass
              </li>
              <li
                onClick={() => {
                  filterclick("wood & metal");
                }}
                className={type === "wood & metal" ? "active" : "notactive"}
              >
                wood & metal
              </li>
              <li
                onClick={() => {
                  filterclick("stone");
                }}
                className={type === "stone" ? "active" : "notactive"}
              >
                stone
              </li>
              <li
                onClick={() => {
                  filterclick("aluminum");
                }}
                className={type === "aluminum" ? "active" : "notactive"}
              >
                aluminum
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-10">
          <div className="row">
            {kit.map((e, index) =>
              showall ? (
                <div className="col-lg-3 col-sm-6" key={e.id}>
                  <div className="box-cate">
                    <div className="overlay">
                      <h2>Specifications</h2>
                      <p>
                        If you like it, all you have to do is click on the count
                        button and you will see the picture larger and you will
                        enter some information to complete the purchase process!
                      </p>
                      <div className="price-buy">
                        <button
                          className="btn"
                          onClick={() => {
                            handclick(e.kitimg, e.price, e.id);
                          }}
                        >
                          Buy Now
                        </button>
                        <span>{e.price}$</span>
                      </div>
                    </div>
                    <img src={e.kitimg} alt="..." />
                    <div className="title">
                      <h5>milanomobile</h5>
                      <h6 className="">contemprey kitchen</h6>
                      <div className="icon-cate ">
                        <HiTag />
                        <span className="ms-2">glass</span>
                      </div>
                      <div className="icon-cate">
                        <HiTag />
                        <span className="ms-2">wood</span>
                      </div>
                      <div className="icon-cate">
                        <HiTag />
                        <span className="ms-2">stone</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                e.type === type && (
                  <div className="col-lg-3  col-sm-6" key={index}>
                    <div className="box-cate">
                      <div className="overlay">
                        <h2>Specifications</h2>
                        <p>
                          If you like it, all you have to do is click on the
                          count button and you will see the picture larger and
                          you will enter some information to complete the
                          purchase process!
                        </p>
                        <div className="price-buy">
                          <button
                            className="btn"
                            onClick={() => {
                              handclick(e.kitimg, e.price, e.id);
                            }}
                          >
                            Buy Now
                          </button>
                          <span>{e.price}$</span>
                        </div>
                      </div>
                      <img src={e.kitimg} alt="..." />
                      <div className="title">
                        <h5>milanomobile</h5>
                        <h6 className="">contemprey kitchen</h6>
                        <div className="icon-cate ">
                          <HiTag />
                          <span className="ms-2">glass</span>
                        </div>
                        <div className="icon-cate">
                          <HiTag />
                          <span className="ms-2">wood</span>
                        </div>
                        <div className="icon-cate">
                          <HiTag />
                          <span className="ms-2">stone</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catego;
