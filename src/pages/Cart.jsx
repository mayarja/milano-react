import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { TiDelete } from "react-icons/ti";
function Cart({ user, getchar }) {
  let [number, setNumber] = useState(1);

  let handclick = (e) => {
    if (e === "p") {
      setNumber(number + 1);
    } else {
      setNumber(number - 1);
    }
  };

  let location = useLocation();

  let [color, setColor] = useState(location.state.color);
  let [img, setImg] = useState(location.state.img);
  let [money, setMoney] = useState(location.state.money);
  let [id, setId] = useState(location.state.id);

  let [newdata, setnewData] = useState({ color, img, money, id });
  let [xx, setxx] = useState(0);

  let [data, setData] = useLocalStorage("data", []);

  useEffect(() => {
    setxx(xx + 1);
  }, []);

  useEffect(() => {
    if (xx >= 1) {
      setData((prev) => [...prev, newdata]);
    }
  }, [xx, setData, newdata]);

  let deletefn = (index) => {
    let filter = data.filter((e) => e.id !== index);
    setData(filter);
  };

  return (
    <div className="cart">
      <Navbar user={user} getchar={getchar} />
      <h1 className="text-center">YOUR BAG</h1>
      <div className="cart-title container-fluid">
        <button className="btn btn-light border-dark text-uppercase">
          Continue Shopping
        </button>
        <div className="spans">
          <span>Shopping Bag(2)</span>
          <span>Your Wishlist(0)</span>
        </div>
        <Link to="/milano-react" className="btn btn-dark text-uppercase">
          Back To Home
        </Link>
      </div>
      <div className=" container-fluid">
        <div className="row">
          <div className="col-lg-9">
            {data &&
              data.map((e, index) => (
                <Fragment key={index}>
                  <div className="item-cart">
                    <div className="img-title">
                      <div className="cart-img">
                        <img src={e.img} alt="..." />
                      </div>
                      <div className="title">
                        <p>
                          <b>Product</b>: JESSIE THUNDER KITCHEN
                        </p>
                        <p>
                          <b>ID</b>: 0969342178
                        </p>
                        <p
                          style={{ background: e.color }}
                          className="color-ball"
                        ></p>
                        <p>
                          <b>Size</b>: Big
                        </p>
                      </div>
                    </div>
                    <div className="size-cart">
                      <TiDelete
                        className="close"
                        size={30}
                        onClick={() => {
                          deletefn(e.id);
                        }}
                      />
                      <div className="spans-cart">
                        <button
                          onClick={() => {
                            handclick("p");
                          }}
                          disabled={number === 5}
                        >
                          +
                        </button>
                        <span>{number}</span>
                        <button
                          onClick={() => {
                            handclick("n");
                          }}
                          disabled={number === 1}
                        >
                          -
                        </button>
                      </div>
                      <span className="price">{`${e.money * number}$`}</span>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))}
          </div>

          <div className="col-lg-3">
            <div className="box-order">
              <h2>ORDER SUMMARY</h2>
              <div className="order-title">
                <span>Subatial</span>
                <span>$ 80</span>
              </div>
              <div className="order-title">
                <span>Estimated Shipping</span>
                <span>$ 5.90</span>
              </div>
              <div className="order-title">
                <span>hipping Discount</span>
                <span>$ -5.90</span>
              </div>
              <div className="order-title">
                <span>
                  <b>Total</b>
                </span>
                <span>$ 80</span>
              </div>
              <button className="btn btn-dark">CHEACKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
