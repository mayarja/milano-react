import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login({ fncheck, setGetchar }) {
  let [email, setEmail] = useState("");
  let [password1, setpassword1] = useState("");

  let navigate = useNavigate();
  let x;
  let gotohome = () => {
    if (email !== "" && password1 !== "") {
      fncheck();
      navigate("/milano-react");
      x = email.charAt(0).toUpperCase();
      console.log(x);
      setGetchar(x);
    }
  };
  return (
    <div className="login">
      <div className="box-login">
        <h5>Log In To Your ACCOUNT</h5>
        <form className="inp">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password1}
            onChange={(e) => {
              setpassword1(e.target.value);
            }}
            required
          />
          <a href="..">Forget Your password?</a>
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <strong>PRIVACY POLICY</strong>
          </p>
          <div className="btns">
            <Link className="btn reg" to="/milano-react/register">
              CREATE New Account
            </Link>
            <button className="btn log" onClick={gotohome}>
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
