import Navbar from "../components/navbar/Navbar";
import "./page.css";
import { BsSearch } from "react-icons/bs";
import { faq } from "../dummydata";
import { useState } from "react";
import Footer from "../components/footer/Footer";

function Faq({ user, getchar }) {
  let [inp, setInp] = useState("");
  let [data, setData] = useState(faq);

  let getdata = (e) => {
    setInp(e.target.value);
  };
  let filter = () => {
    let filterdata = data.filter((e) =>
      e.qustion.toLowerCase().includes(inp.toLowerCase())
    );
    console.log(filterdata);
    return filterdata;
  };

  return (
    <div className="faq">
      <Navbar user={user} getchar={getchar} />
      <div className="search">
        <div className="container">
          <h1>
            <BsSearch />
            Search Qustions
          </h1>
          <div className="inp">
            <input
              type="text"
              placeholder="Serach Here"
              className="form-control"
              value={inp}
              onChange={(e) => {
                getdata(e);
              }}
            />
          </div>
        </div>
      </div>

      <div className="title-two text-center container">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here You Will Find All Questions You Are Searching For And The Full
          Knowledge
        </p>
      </div>

      <div className="accord pb-5">
        <div className="container">
          <div className="accordion" id="accordionExample">
            {filter().map((e) => (
              <div className="accordion-item" key={e.id}>
                <h2 className="accordion-header" id={e.id}>
                  <button
                    className={
                      e.id === 1
                        ? "accordion-button"
                        : "accordion-button collapsed"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${e.id}`}
                    aria-expanded="true"
                    aria-controls={`collapse${e.id}`}
                  >
                    {e.qustion}
                  </button>
                </h2>
                <div
                  id={`collapse${e.id}`}
                  className={
                    e.id === 1
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  aria-labelledby={e.id}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>{e.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
