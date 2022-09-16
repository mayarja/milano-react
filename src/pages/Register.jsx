import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register({ fncheck, tobuy, setGetchar }) {
  // let [username, setusername] = useState("");
  // let [email, setEmail] = useState("");
  // let [password1, setpassword1] = useState("");
  // let [password2, setpassword2] = useState("");
  let [message, setMessage] = useState(false);

  let [inp, setInp] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  console.log(inp);

  let allinput = (e, name) => {
    setInp((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  let navigate = useNavigate();
  let x;
  let checkifyoucan = (e) => {
    if (tobuy) {
      if (
        inp.username !== "" &&
        inp.email !== "" &&
        inp.password1 !== "" &&
        inp.password2 !== "" &&
        inp.password1 === inp.password2
      ) {
        fncheck();
        x = inp.email.charAt(0).toUpperCase();
        setGetchar(x);
      } else {
        setMessage(true);
      }
    } else {
      if (
        inp.username !== "" &&
        inp.email !== "" &&
        inp.password1 !== "" &&
        inp.password2 !== "" &&
        inp.password1 === inp.password2
      ) {
        navigate("/milano-react");
        fncheck();
        x = inp.email.charAt(0).toUpperCase();
        console.log(x);
        setGetchar(x);
      } else {
        setMessage(true);
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
            onChange={(e) => allinput(e, "username")}
          />
          <input type="text" placeholder="last name" required />
          <input type="text" placeholder="user name" required />
          <input
            type="email"
            placeholder="email"
            required
            onChange={(e) => {
              allinput(e, "email");
            }}
          />
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => {
              allinput(e, "password1");
            }}
          />
          <input
            type="password"
            placeholder="confirm password"
            required
            onChange={(e) => {
              allinput(e, "password2");
            }}
          />
          {message && (
            <div className="box-erorr">
              <p className={message ? "erorr" : ""}>
                cheach input if all true and cheack password
              </p>
            </div>
          )}
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <strong>PRIVACY POLICY</strong>
          </p>
          <div className="btns">
            <button type="submit" className="btn reg" onClick={checkifyoucan}>
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
