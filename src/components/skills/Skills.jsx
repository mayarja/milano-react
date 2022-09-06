import "./skills.css";
import { FiBook } from "react-icons/fi";
import { ImPower } from "react-icons/im";
import { MdAttachMoney } from "react-icons/md";

function Skills() {
  return (
    <div className="skills">
      <div className="container">
        <h1 className="text-center h1">Our Skills</h1>
        <div className="row text-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3>
              Teaching <FiBook />
            </h3>
            <p>
              We hold educational sessions to qualify workers on how to work in
              the field of kitchen installation, under the supervision of the
              largest experts in this field
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3>
              Design <ImPower />
            </h3>
            <p>
              You will find here the most beautiful designs that will help you
              choose your dream kitchen. Do not worry about this
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3>
              Selling <MdAttachMoney />
            </h3>
            <p>
              We can sell the required designs in installments or via Paypal in
              order to facilitate the purchasing process and the customer as
              much as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
