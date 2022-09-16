import "./navbar.css";
import { AiFillFacebook, AiOutlineBars } from "react-icons/ai";
import { FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Navbar({ user, getchar }) {
  let [showicon, setShowIcon] = useState(false);

  let { quantity } = useSelector((state) => state.cart);

  let handclik = () => {
    setShowIcon(!showicon);
  };
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-box">
          <div className="nav-s">
            <AiFillFacebook size={25} />
            <FaInstagramSquare size={25} />
            <FaPinterestSquare size={25} />
          </div>
          <div className="nav-m text-center">
            <span>
              <Link className="link" to="/milano-react">
                Home
              </Link>
            </span>
            <span>
              <Link className="link" to="/milano-react/about">
                About
              </Link>
            </span>
            <span>
              <Link className="link" to="/milano-react/faq">
                Faq
              </Link>
            </span>
          </div>
          {user ? (
            <div className="nav-e">
              <span className="profile">{getchar}</span>
              <Link to="/milano-react/cart" className="cart-icon">
                <AiOutlineShoppingCart size={30} />
                {quantity > 0 && <span>{quantity}</span>}
              </Link>
            </div>
          ) : (
            <div className="nav-e">
              <span>
                <Link className="link" to="/milano-react/login">
                  Login
                </Link>
              </span>
              <span>
                <Link className="link" to="/milano-react/register">
                  Register
                </Link>
              </span>
            </div>
          )}
          <AiOutlineBars size={25} className="icon-nav" onClick={handclik} />
          <ul
            className={
              showicon
                ? "link-mobile list-unstyled show"
                : "link-mobile list-unstyled"
            }
          >
            <li>
              <Link className="link" to="/milano-react">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/milano-react/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/milano-react/faq">
                Faq
              </Link>
            </li>
            {user ? (
              <div className="sull-cart d-flex gap-2 ">
                <span className="profile">{getchar}</span>
                <AiOutlineShoppingCart className="cart" size={30} />
              </div>
            ) : (
              <Fragment>
                <li>
                  <Link className="link" to="/milano-react/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/milano-react/register">
                    Register
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
