import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login({ fncheck, setGetchar }) {
  // let [email, setEmail] = useState("");
  // let [password1, setpassword1] = useState("");
  // let [firstchar, setfirstchar] = useState("");

  let [inp, setInp] = useState({
    email: "",
    password: "",
  });

  let allinput = (e, name) => {
    setInp((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };
  console.log(inp);

  let navigate = useNavigate();
  let gotohome = () => {
    if (inp.email !== "" && inp.password !== "") {
      fncheck();
      setGetchar(inp.email.charAt(0).toUpperCase());
      navigate("/milano-react");
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
            onChange={(e) => {
              allinput(e, "email");
            }}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              allinput(e, "password");
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
