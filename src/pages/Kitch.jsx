import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useDispatch } from "react-redux";
import { addpruduct } from "../store/cartslice";

function Kitch({ user, getchar }) {
  let [number, setNumber] = useState(1);

  let location = useLocation();
  let [img, setImg] = useState(location.state.img);
  let [id, setId] = useState(location.state.id);
  let [price, setPrice] = useState(location.state.price);
  let [product, setproduct] = useState({ id, img, price });
  let [color, setColor] = useState("black");
  let [size, setSize] = useState("Small");

  let handclick = (e) => {
    if (e === "p") {
      setNumber(number + 1);
    } else {
      setNumber(number - 1);
    }
  };

  let getcolor = (e) => {
    setColor(e);
  };

  let dispatch = useDispatch();

  let addtocartfn = () => {
    dispatch(addpruduct({ ...product, price, color, number, size }));
  };

  return (
    <div className="kitch">
      <Navbar user={user} getchar={getchar} />
      <div className="box-kitch">
        <div className="row container-fluid">
          <div className="col-md-6">
            <div className="img-box">
              <img src={img} alt="...." />
            </div>
          </div>
          <div className="col-md-6">
            <div className="title">
              <h1>Denim Jumpsuit</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc,
                at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex,
                eget tristique tortor pretium ut. Curabitur elit justo,
                consequat id condimentum ac, volutpat ornare.
              </p>
              <span className="money">{`${price * number}$ `}</span>

              <div className="size-color">
                <div className="color">
                  <span>Color</span>
                  <div
                    className="div-color"
                    style={{ background: "black" }}
                    onClick={() => {
                      getcolor("black");
                    }}
                  ></div>
                  <div
                    className="div-color"
                    style={{ background: "blue" }}
                    onClick={() => {
                      getcolor("blue");
                    }}
                  ></div>
                  <div
                    className="div-color"
                    style={{ background: "gray" }}
                    onClick={() => {
                      getcolor("gray");
                    }}
                  ></div>
                </div>
                <div className="size">
                  <span>Size</span>
                  <select
                    value="Small"
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    <option value="Small">Small</option>
                    <option value="Meduim">Meduim</option>
                    <option value="Big">Big</option>
                  </select>
                </div>
              </div>

              <div className="btn-add">
                <div className="add">
                  <button
                    onClick={() => {
                      handclick("p");
                    }}
                    disabled={number === 3}
                  >
                    +
                  </button>
                  <span className="ss">{number}</span>
                  <button
                    onClick={() => {
                      handclick("n");
                    }}
                    disabled={number === 1}
                  >
                    -
                  </button>
                </div>
                <button
                  className="btn"
                  onClick={() => {
                    addtocartfn();
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="container" />
      <Footer />
    </div>
  );
}

export default Kitch;
