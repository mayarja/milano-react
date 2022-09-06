import React from "react";
import Catego from "../components/catego/Catego";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Singelpice from "../components/singelpice/Singelpice";
import Skills from "../components/skills/Skills";
import Slider from "../components/slider/Slider";
import Slike from "../components/slikeCompany/Slike";

function Home({ user, getchar }) {
  return (
    <div>
      <Navbar user={user} getchar={getchar} />
      <Slider />
      <Catego />
      <Skills />
      <Singelpice />
      <Slike />
      <Footer />
    </div>
  );
}

export default Home;
