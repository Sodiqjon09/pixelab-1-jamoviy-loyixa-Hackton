import React from "react";
import "./Clients.css";
import img1 from "../../image/client1.png";
import img2 from "../../image/client2.png";
import img3 from "../../image/client3.png";
import img4 from "../../image/client4.png";

const Data = [
  {
    id: 1,
    image: img1,
    title: `Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support`,
    name: `Rayhan Curran`,
  },
  {
    id: 2,
    image: img2,
    title: `As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website`,
    name: `Kayley Frame`,
  },
  {
    id: 3,
    image: img3,
    title: `The most important part of the Startup Framework is the samples`,
    name: `Gene Whitfield`,
  },
  {
    id: 4,
    image: img4,
    title: `I’ve built my website with Startup just in one day, and it was ready-to-go. `,
    name: `Allan Kim`,
  },
];

function Clients() {
  return (
    <div className="Clients">
      <div className="texts">
        <span>TESTMONIALS</span>
        <h1>What Clients say about us</h1>
      </div>
      <div className="Groups">
        {Data.map((e) => {
          return (
            <div key={e.id} className="client">
              <div className="group">
                <div>
                  <img src={e.image} alt="image" />
                </div>
                <div className="title">
                  <p>{e.title}</p>
                  <span>{e.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Clients;
