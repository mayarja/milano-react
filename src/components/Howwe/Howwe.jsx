import "./howwe.css";
import { about } from "../../dummydata.js";
function Howwe() {
  return (
    <div className="how text-center">
      <div className="container">
        <h1>Who We Are</h1>
        <p className="text-black-50">
          Our company specializes in the manufacture of well-equipped and
          practical kitchens, designed with precision and care to suit different
          lifestyles. Our brand belongs to FBD International Group, the largest
          European distributor of custom fitted kitchens. For more than forty
          years, our company has the experience and strength of the group in
          order to ensure that you achieve the best equation between human
          factor, quality and price..
        </p>
        <div className="row">
          {about.map((e) => (
            <div className="col-lg-4" key={e.id}>
              <div className="box-how">
                <img src={e.img} alt="..." />
                <p className="text-black-50">{e.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Howwe;
