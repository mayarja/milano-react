import "./footer.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="fot-s">
              <h2>
                <span>Mil</span>ANO
              </h2>
              <p>
                Milano is a company that sells kitchens and we consider
                ourselves the best in the Middle East, because of our dedication
                to work and in addition to our existing expertise.
              </p>
              <div className="title-icon d-flex align-items-center justify-content-center">
                <BsFillArrowRightCircleFill className="icon" />
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="fot-c">
              <h3>Helpful Links</h3>
              <ul className="list-unstyled list">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Protfolio</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Cookie Policy</a>
                </li>
                <li>
                  <a href="/">Privacy policy</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Home & Work</a>
                </li>
                <li>
                  <a href="/">Berfels</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="fot-e">
              <h3>Contact Us</h3>
              <div className="title">
                <span>2711781 rukn al den</span>
                <span>Phone : 0969342178</span>
                <span>email : mayar-ja2001@hotmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            COPYRIGHT 2022 DESIGNED BY MAYAR AL JABASENE © ALL RIGHT RESERVE
          </p>
          <div className="icon-media">
            <AiFillFacebook color="#0d6efd" size={20} />
            <FaInstagramSquare color="#e1306c" size={20} />
            <FaPinterestSquare color="#db4a39" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
