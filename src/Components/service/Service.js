import React from "react";
import "./Service.css";
import Activity from "./img/Activity.png";
import Vedio from "./img/Video.png";
import Chart from "./img/Chart.png";

export default function Service() {
  return (
    <div className="Service">
      <div className="service-container">
        <div className="service-top">
          <h6>Service</h6>
          <h1>Our Vison & Our Goal</h1>
        </div>
        <div className="service-bottom">
          <div className="boxs">
            <div className="box">
              <img src={Activity} alt="!!!" />
              <div className="box-bottom">
                <h2>Graphic Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dui mi, bibendum eu erat id, ultricies semper metus.
                  Nunc dapibus laoreet dolor nec imperdiet.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="box">
              <img src={Vedio} alt="!!!" />
              <div className="box-bottom">
                <h2>Video Editing..</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dui mi, bibendum eu erat id, ultricies semper metus.
                  Nunc dapibus laoreet dolor nec imperdiet.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="box">
              <img src={Chart} alt="!!!" />
              <div className="box-bottom">
                <h2>Digital Marketing</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dui mi, bibendum eu erat id, ultricies semper metus.
                  Nunc dapibus laoreet dolor nec imperdiet.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
