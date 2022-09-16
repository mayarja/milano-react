import React, { Fragment, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletepruduct } from "../store/cartslice.js";
import { useEffect } from "react";
function Cart({ user, getchar }) {
  let [number, setNumber] = useState(1);
  let dispatch = useDispatch();
  let { products, total } = useSelector((state) => state.cart);
  let [data, setData] = useLocalStorage("data", null);

  let deleteitem = ({ id, price, number }) => {
    dispatch(deletepruduct({ id, price, number }));
    // setreren(reren + 1);
  };

  useEffect(() => {
    setData(products);
  }, [products, setData]);

  useEffect(() => {
    if (products.length > 0) {
      console.log("first");
      setData(products);
    }
  }, []);

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
            {data.length > 0 ? (
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
                          <b>Size</b>: {e.size}
                        </p>
                      </div>
                    </div>
                    <div className="size-cart">
                      <TiDelete
                        className="close"
                        size={30}
                        onClick={() => {
                          deleteitem(e);
                        }}
                      />
                      <div className="spans-cart">
                        <button
                          onClick={() => {
                            setNumber(number + 1);
                          }}
                          disabled={number === 5}
                        >
                          +
                        </button>
                        <span>{e.number}</span>
                        <button
                          onClick={() => {
                            setNumber(number - 1);
                          }}
                          disabled={number === 1}
                        >
                          -
                        </button>
                      </div>
                      <span className="price">{`${e.price * e.number}`}</span>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))
            ) : (
              <div className="text-center fs-2 mt-5 nodata">
                "You haven't chosen any item yet"
              </div>
            )}
          </div>

          <div className="col-lg-3">
            <div className="box-order">
              <h2>ORDER SUMMARY</h2>
              <div className="order-title">
                <span>Subatial</span>
                <span>$ {total}</span>
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
                <span>$ {total}</span>
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
