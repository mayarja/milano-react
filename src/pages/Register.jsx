import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register({ fncheck, tobuy, setGetchar }) {
  let [username, setusername] = useState("");
  let [email, setEmail] = useState("");
  let [password1, setpassword1] = useState("");
  let [password2, setpassword2] = useState("");

  let navigate = useNavigate();
  let x;
  let checkifyoucan = () => {
    if (tobuy) {
      if (
        username !== "" &&
        email !== "" &&
        password1 !== "" &&
        password2 !== ""
      ) {
        fncheck();
        x = email.charAt(0).toUpperCase();
        setGetchar(x);
      }
    } else {
      if (
        username !== "" &&
        email !== "" &&
        password1 !== "" &&
        password2 !== ""
      ) {
        navigate("/milano-react");
        fncheck();
        x = email.charAt(0).toUpperCase();
        console.log(x);
        setGetchar(x);
      }
    }
  };
  return (
    <div className="register">
      <div className="box-register">
        <h5>CREATE AN ACCOUNT</h5>
        <form className="inp">
          <input
            type="text"
            placeholder="name"
            required
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <input type="text" placeholder="last name" required />
          <input type="text" placeholder="user name" required />
          <input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            value={password1}
            onChange={(e) => setpassword1(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            required
            value={password2}
            onChange={(e) => setpassword2(e.target.value)}
          />
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <strong>PRIVACY POLICY</strong>
          </p>
          <div className="btns">
            <button className="btn reg" onClick={checkifyoucan}>
              CREATE
            </button>
            <Link className="btn log link3" to="/milano-react/login">
              LOG IN To My Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
