import "./navbar.css";
import { AiFillFacebook, AiOutlineBars } from "react-icons/ai";
import { FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ user, getchar }) {
  let [showicon, setShowIcon] = useState(false);

  let handclik = () => {
    setShowIcon(!showicon);
  };
  console.log(user);
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
            <span className="profile">{getchar}</span>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
