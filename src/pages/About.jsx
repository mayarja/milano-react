import "./page.css";
import Navbar from "../components/navbar/Navbar";
import { Fragment } from "react";
import Howwe from "../components/Howwe/Howwe";
import Sliderteam from "../components/sliderteam/Sliderteam";
import Footer from "../components/footer/Footer";

function About({ user, getchar }) {
  return (
    <Fragment>
      <Navbar user={user} getchar={getchar} />
      <div className="header"></div>
      <Howwe />
      <Sliderteam />
      <Footer />
    </Fragment>
  );
}

export default About;
