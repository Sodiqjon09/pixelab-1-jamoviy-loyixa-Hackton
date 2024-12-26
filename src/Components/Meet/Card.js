import React from "react";
import "./Card.css";
import image1 from "./Mask.png";
import twitter from "./fa-twitter.png";
import facebook from "./fa-facebook-square.png";
import dribbble from "./fa-dribbble.png";
import image2 from "./Mask@2x.png";
import image3 from "./Mask (1).png";

const Card = () => {
  return (
    <div className="Card">
      <p>OUR TEAM</p>
      <h1>Meet The Team</h1>
      <div className="three">
        <div className="first">
          <img className="img" src={image1} />
          <h1>Vanessa Laird</h1>
          <p>UI Designer</p>
          <div className="icons">
            <div className="twitter">
              <img src={twitter} />
            </div>
            <div className="twitter">
              <img src={facebook} />
            </div>
            <div className="twitter">
              <img src={dribbble} />
            </div>
          </div>
        </div>
        <div className="second">
          <img className="img" src={image2} />
          <h1>Mason Campbell</h1>
          <p>UI Designer</p>
          <div className="icons">
            <div className="twitter">
              <img src={twitter} />
            </div>
            <div className="twitter">
              <img src={facebook} />
            </div>
            <div className="twitter">
              <img src={dribbble} />
            </div>
          </div>
        </div>
        <div className="threth">
          <img className="img" src={image3} />
          <h1>Irea Evans</h1>
          <p>Client Manager</p>
          <div className="icons">
            <div className="twitter">
              <img src={twitter} />
            </div>
            <div className="twitter">
              <img src={facebook} />
            </div>
            <div className="twitter">
              <img src={dribbble} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
